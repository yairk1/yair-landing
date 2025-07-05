import LeadForm from "./lead-form"

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-bl from-brandBlue to-brandBlue/90 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-10"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-right space-y-6">
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              הצעד הראשון להצלחה במדעי המחשב – מתחיל כאן
            </h1>

            <p className="text-xl sm:text-2xl text-blue-100 leading-relaxed">
              רוצה לשפר ציונים במדעי המחשב, להבין לעומק, או להתקדם ליחידות טכנולוגיות? הצטרף ללמידה אחרת: שיעורים אישיים
              במדעי המחשב, ליווי צמוד וסביבה של חדשנות.
              <br />
              <br />
              השלב הראשון – שיחת אבחון אישית (חינם, 30 דקות) ברוטשילד 13 תל אביב, בה נכיר, נבין את הצרכים שלך ונבנה יחד
              תוכנית לימוד שתוביל אותך להצלחה.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-brandOrange">90+</div>
                <div className="text-sm text-blue-200">ממוצע ציונים</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brandOrange">500+</div>
                <div className="text-sm text-blue-200">תלמידים</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brandOrange">8</div>
                <div className="text-sm text-blue-200">שנות ניסיון</div>
              </div>
            </div>
          </div>

          {/* Lead Form */}
          <div className="lg:max-w-md" id="hero-form">
            <div className="mb-4 text-center lg:text-right">
              <h2 className="text-2xl font-heading font-semibold mb-2">קבע שיחת אבחון חינם</h2>
              <p className="text-blue-100">30 דקות ברוטשילד 13 תל אביב - נכיר ונבנה תוכנית אישית</p>
            </div>
            <LeadForm variant="primary" submitButtonText="קבע שיחת אבחון חינם" />
          </div>
        </div>
      </div>
    </section>
  )
}
