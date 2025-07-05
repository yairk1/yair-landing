import LeadForm from "./lead-form"

export default function CalloutSection() {
  return (
    <section className="py-16 lg:py-24 bg-brandBlue text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-right">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-6">
              שיעור ניסיון חינם – בוא/י לגלות איך זה עובד
            </h2>
            <p className="text-xl text-blue-100 leading-relaxed">
              השאיר/י פרטים וניצור קשר לתיאום שיעור ניסיון ללא התחייבות. הצעד הראשון שלך לציון 90+ מתחיל כאן.
            </p>
          </div>

          <div>
            <LeadForm variant="secondary" submitButtonText="קבע שיעור ניסיון חינם" />
          </div>
        </div>
      </div>
    </section>
  )
}
