"use client"

import type React from "react"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { createLead } from "@/lib/actions"

interface LeadFormData {
  name: string
  phone: string
  email?: string
}

interface LeadFormProps {
  variant: "primary" | "secondary"
  submitButtonText?: string
}

// Helper functions for validation
const validateIsraeliPhone = (phone: string) => {
  // Remove all non-digit characters
  const cleanPhone = phone.replace(/\D/g, "")

  // Israeli phone patterns:
  // Mobile: 05X-XXXXXXX (10 digits starting with 05)
  // Landline: 0X-XXXXXXX (9-10 digits starting with 02,03,04,08,09)
  // International: +972-X-XXXXXXX

  if (cleanPhone.startsWith("972")) {
    // International format +972
    return cleanPhone.length === 12 && /^972[2-9]\d{7,8}$/.test(cleanPhone)
  } else if (cleanPhone.startsWith("0")) {
    // Local format
    return (
      (cleanPhone.length === 10 && /^05[0-9]\d{7}$/.test(cleanPhone)) || // Mobile
      (cleanPhone.length >= 9 && cleanPhone.length <= 10 && /^0[2-4,8-9]\d{7,8}$/.test(cleanPhone)) // Landline
    )
  }

  return false
}

const formatPhoneNumber = (phone: string) => {
  const cleanPhone = phone.replace(/\D/g, "")

  if (cleanPhone.startsWith("972")) {
    // International format
    return `+972-${cleanPhone.slice(3, 4)}-${cleanPhone.slice(4)}`
  } else if (cleanPhone.startsWith("05") && cleanPhone.length === 10) {
    // Mobile format
    return `${cleanPhone.slice(0, 3)}-${cleanPhone.slice(3, 6)}-${cleanPhone.slice(6)}`
  } else if (cleanPhone.startsWith("0") && cleanPhone.length >= 9) {
    // Landline format
    return `${cleanPhone.slice(0, 2)}-${cleanPhone.slice(2)}`
  }

  return phone
}

export default function LeadForm({ variant, submitButtonText = "לתיאום שיחת ייעוץ" }: LeadFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [error, setError] = useState("")

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setValue,
  } = useForm<LeadFormData>()

  const phoneValue = watch("phone")

  const onSubmit = async (data: LeadFormData) => {
    setIsSubmitting(true)
    setError("")

    try {
      // Format phone number before sending
      const formattedData = {
        ...data,
        phone: formatPhoneNumber(data.phone),
        email: data.email?.trim().toLowerCase() || undefined,
        variant,
      }

      const result = await createLead(formattedData)

      if (!result.success) {
        throw new Error(result.error || "שגיאה בשליחת הטופס")
      }

      setShowSuccess(true)
      reset()

      // Track successful submission (optional - for analytics)
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "form_submit", {
          event_category: "engagement",
          event_label: variant,
        })
      }

      // Redirect to thank you page after 3 seconds
      setTimeout(() => {
        window.location.href = "/thank-you"
      }, 3000)
    } catch (err) {
      console.error("Form submission error:", err)
      setError(err instanceof Error ? err.message : "אירעה שגיאה. אנא נסה שוב.")
    } finally {
      setIsSubmitting(false)
    }
  }

  // Auto-format phone number as user types
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    const cleanValue = value.replace(/\D/g, "")

    // Auto-format while typing
    let formattedValue = value
    if (cleanValue.length >= 3) {
      if (cleanValue.startsWith("05")) {
        // Mobile format: 050-123-4567
        formattedValue = cleanValue.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3")
      } else if (cleanValue.startsWith("0")) {
        // Landline format: 02-1234567
        formattedValue = cleanValue.replace(/(\d{2})(\d+)/, "$1-$2")
      }
    }

    setValue("phone", formattedValue)
  }

  if (showSuccess) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <div className="text-green-800 font-medium text-lg mb-2">תודה! נחזור אליך בהקדם</div>
        <div className="text-green-600 mb-4">הפרטים נשמרו בהצלחה</div>
        <div className="text-sm text-green-600">מעביר אותך לעמוד התודה...</div>
      </div>
    )
  }

  const formClasses =
    variant === "primary"
      ? "bg-white/95 backdrop-blur-sm shadow-xl rounded-xl p-6 border border-white/20"
      : "bg-white shadow-lg rounded-lg p-6"

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={formClasses}>
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-brandGray mb-1 text-right">
            שם מלא *
          </label>
          <input
            type="text"
            id="name"
            {...register("name", {
              required: "שם הוא שדה חובה",
              minLength: { value: 2, message: "שם חייב להכיל לפחות 2 תווים" },
              maxLength: { value: 100, message: "שם ארוך מדי" },
              pattern: {
                value: /^[\u0590-\u05FF\s\u0041-\u005A\u0061-\u007A]+$/,
                message: "שם יכול להכיל רק אותיות עבריות או אנגליות",
              },
            })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brandTeal focus:border-transparent text-right bg-white text-gray-900 placeholder-gray-500"
            style={{ direction: "rtl" }}
            placeholder="הכנס את שמך המלא"
            disabled={isSubmitting}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1 text-right">{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-brandGray mb-1 text-right">
            טלפון *
          </label>
          <input
            type="tel"
            id="phone"
            {...register("phone", {
              required: "מספר טלפון הוא שדה חובה",
              validate: {
                validFormat: (value) => validateIsraeliPhone(value) || "מספר טלפון לא תקין. הכנס מספר ישראלי תקין",
              },
            })}
            onChange={handlePhoneChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brandTeal focus:border-transparent text-right bg-white text-gray-900 placeholder-gray-500"
            style={{ direction: "rtl" }}
            placeholder="050-123-4567 או 02-1234567"
            disabled={isSubmitting}
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1 text-right">{errors.phone.message}</p>}
          <p className="text-xs text-gray-500 mt-1 text-right">פורמט: 050-123-4567 או 02-1234567</p>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-brandGray mb-1 text-right">
            אימייל (אופציונלי)
          </label>
          <input
            type="email"
            id="email"
            {...register("email", {
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "כתובת אימייל לא תקינה. דוגמה: name@example.com",
              },
              validate: {
                validDomain: (value) => {
                  if (!value) return true // Optional field
                  const domain = value.split("@")[1]
                  return (domain && domain.includes(".")) || "כתובת אימייל לא תקינה"
                },
              },
            })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brandTeal focus:border-transparent text-left bg-white text-gray-900 placeholder-gray-500"
            style={{ direction: "ltr" }}
            placeholder="name@example.com"
            disabled={isSubmitting}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1 text-right">{errors.email.message}</p>}
          <p className="text-xs text-gray-500 mt-1 text-right">דוגמה: name@gmail.com</p>
        </div>

        {error && (
          <div className="text-red-500 text-sm text-center bg-red-50 p-3 rounded border border-red-200">{error}</div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full ${variant === "primary" ? "btn-primary" : "btn-secondary"} disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2`}
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
              שולח...
            </>
          ) : (
            submitButtonText
          )}
        </button>
      </div>
    </form>
  )
}
