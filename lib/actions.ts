"use server"

import { supabaseAdmin } from "./supabase"
import { revalidatePath } from "next/cache"

export type Lead = {
  id?: number
  name: string
  phone: string
  email?: string
  variant: "primary" | "secondary"
  created_at?: string
}

export async function getLeads(): Promise<{ leads: Lead[] | null; error: string | null }> {
  try {
    const { data, error } = await supabaseAdmin
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false })

    if (error) {
      console.error("Supabase error:", error)
      return { leads: null, error: "Failed to fetch leads" }
    }

    return { leads: data, error: null }
  } catch (error) {
    console.error("Server action error:", error)
    return { leads: null, error: "Internal server error" }
  }
}

export async function createLead(formData: {
  name: string
  phone: string
  email?: string
  variant: "primary" | "secondary"
}): Promise<{ success: boolean; error: string | null; data?: Lead }> {
  try {
    const { name, phone, email, variant } = formData

    if (!name || !phone) {
      return { success: false, error: "Name and phone are required" }
    }

    console.log("Inserting lead:", { name, phone, email, variant })

    const { data, error } = await supabaseAdmin
      .from("leads")
      .insert([
        {
          name: name.trim(),
          phone: phone.trim(),
          email: email?.trim() || null,
          variant,
        },
      ])
      .select()

    if (error) {
      console.error("Supabase error:", error)
      return {
        success: false,
        error: "Database error: " + error.message,
      }
    }

    console.log("Lead inserted successfully:", data)

    // Revalidate any pages that might show leads data
    revalidatePath("/admin")

    return {
      success: true,
      error: null,
      data: data[0],
    }
  } catch (error) {
    console.error("Server action error:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    }
  }
}