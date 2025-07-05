import { Quote } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  name: string
  year: number
}

function TestimonialCard({ quote, name, year }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg relative flex flex-col min-h-[200px]">
      <div className="absolute top-4 right-4 text-brandTeal/20">
        <Quote size={32} />
      </div>

      <blockquote className="text-lg text-brandGray mb-6 leading-relaxed">"{quote}"</blockquote>

      <footer className="mt-auto pt-4 border-t border-gray-100">
        <div className="flex items-center justify-between">
          <cite className="font-medium text-brandBlue not-italic">{name}</cite>
          <span className="text-sm text-brandGray">{year}</span>
        </div>
      </footer>
    </div>
  )
}

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "אחלה מורה אדיב סבלני מלא בידע",
      name: "עידו",
      year: 2025,
    },
    {
      quote: "מלמד בצורה פרקטית מאוד ונותן הרגשת ביטחון",
      name: "איתי",
      year: 2025,
    },
    {
      quote:
        "השיעור הראשון היה שיעור כפול של שעתיים. הבן שלי אמר אחרי השיעור שהוא מרוצה מאוד. יאיר ידע להסביר את החומר בצורה טובה מאוד, שהיה לו חסר בכיתה בבית הספר. תודה ליאיר נקווה להמשיך בהצלחה זו.",
      name: "אלן, הורה של תלמיד",
      year: 2025,
    },
  ]

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-brandLight to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-brandBlue mb-4">מה אומרים התלמידים</h2>
          <p className="text-xl text-brandGray">עדויות אמיתיות מתלמידים שהשיגו את המטרה</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} quote={testimonial.quote} name={testimonial.name} year={testimonial.year} />
          ))}
        </div>
      </div>
    </section>
  )
}
