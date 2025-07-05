import Link from "next/link"
import { CheckCircle, ArrowRight } from "lucide-react"

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-brandLight flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
          <CheckCircle className="text-green-600" size={32} />
        </div>

        <h1 className="text-2xl font-heading font-bold text-brandBlue mb-4">תודה רבה!</h1>

        <p className="text-brandGray mb-6 leading-relaxed">
          קיבלנו את פרטיך ונחזור אליך תוך 24 שעות לתיאום שיעור הניסיון החינם.
        </p>

        <div className="bg-blue-50 rounded-lg p-4 mb-6">
          <p className="text-sm text-brandBlue">
            <strong>מה הלאה?</strong>
            <br />
            נתקשר אליך לתיאום מועד נוח לשיעור הניסיון ונכיר את הצרכים הספציפיים שלך.
          </p>
        </div>

        <Link href="/" className="inline-flex items-center gap-2 text-brandTeal hover:text-brandTeal/80 font-medium">
          <ArrowRight size={18} className="rotate-180" />
          חזרה לעמוד הבית
        </Link>
      </div>
    </div>
  )
}
