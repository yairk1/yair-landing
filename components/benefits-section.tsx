import type React from "react"
import { CheckCircle } from "lucide-react"

interface BenefitItemProps {
  icon: React.ReactNode
  text: string
}

function BenefitItem({ icon, text }: BenefitItemProps) {
  return (
    <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-md">
      <div className="flex-shrink-0 text-brandTeal">{icon}</div>
      <p className="text-lg text-brandGray font-medium">{text}</p>
    </div>
  )
}

export default function BenefitsSection() {
  const benefits = [
    {
      icon: <CheckCircle size={24} />,
      text: "ממוצע ציוני תלמידיי — מעל 90 בבגרות במדעי המחשב",
    },
    {
      icon: <CheckCircle size={24} />,
      text: "⅔ מהתלמידים עוברים בהצלחה מיוני יחידות טכנולוגיות",
    },
    {
      icon: <CheckCircle size={24} />,
      text: "ביטחון עצמי, חשיבה לוגית ויכולת פתרון בעיות אמיתיות",
    },
  ]

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-brandBlue mb-4">התוצאות מדברות בעד עצמן</h2>
          <p className="text-xl text-brandGray">נתונים אמיתיים מתלמידים שהשיגו הצלחה</p>
        </div>

        <div className="space-y-6">
          {benefits.map((benefit, index) => (
            <BenefitItem key={index} icon={benefit.icon} text={benefit.text} />
          ))}
        </div>
      </div>
    </section>
  )
}
