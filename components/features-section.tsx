import type React from "react"
import { BookOpen, Clock, Users, Video } from "lucide-react"

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-brandTeal/10 rounded-full mb-4">
        <div className="text-brandTeal">{icon}</div>
      </div>
      <h3 className="text-xl font-heading font-semibold text-brandBlue mb-3">{title}</h3>
      <p className="text-brandGray leading-relaxed">{description}</p>
    </div>
  )
}

export default function FeaturesSection() {
  const features = [
    {
      icon: <Users size={32} />,
      title: "שיעורים פרטיים אחד על אחד",
      description: "התאמה אישית מלאה לקצב ולקשיים שלך, בזום או פרונטלית",
    },
    {
      icon: <Clock size={32} />,
      title: "תוכן אונ-ליין זמין 24/7",
      description: "גישה לחומרי לימוד, סיכומים וסרטונים בלחיצת כפתור",
    },
    {
      icon: <BookOpen size={32} />,
      title: "קבוצות תרגול קטנות",
      description: "למידה אינטראקטיבית ותחרותית לשיפור מוטיבציה",
    },
    {
      icon: <Video size={32} />,
      title: "סרטוני פתרון מלאים",
      description: "פותר יחד אתך תרגילי בגרות שלב-אחר-שלב בווידאו",
    },
  ]

  return (
    <section className="py-16 lg:py-24 bg-brandLight">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-brandBlue mb-4">למה לבחור ביאיר?</h2>
          <p className="text-xl text-brandGray max-w-3xl mx-auto">שיטת הוראה מותאמת אישית שמביאה תוצאות מוכחות</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} icon={feature.icon} title={feature.title} description={feature.description} />
          ))}
        </div>
      </div>
    </section>
  )
}
