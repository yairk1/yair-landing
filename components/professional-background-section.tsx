import { Building2, Code, Users, ExternalLink, Shield, Brain, Plane } from "lucide-react"

export default function ProfessionalBackgroundSection() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-brandBlue/10 text-brandBlue px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Building2 size={16} />
            רקע מקצועי
          </div>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-brandBlue mb-4">מהתעשייה ישירות אליך</h2>
          <p className="text-xl text-brandGray max-w-3xl mx-auto">
            עם ניסיון בחיל האוויר, התעשייה הפרטית וכיום כסמנכ״ל פיתוח ב-Ersona - אני מביא ניסיון מעשי מגוון ישירות
            לשיעורים
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Company Info */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-brandBlue to-brandTeal rounded-xl flex items-center justify-center">
                <Building2 className="text-white" size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-heading font-bold text-brandBlue">Ersona</h3>
                <p className="text-brandGray">חברת הייטק מתקדמת</p>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <Brain className="text-brandTeal flex-shrink-0 mt-1" size={20} />
                <div>
                  <div className="font-medium text-brandBlue">בינה מלאכותית וחדשנות</div>
                  <div className="text-brandGray text-sm">משלבת AI מתקדם, ניהול תהליכים וטכנולוגיות חדשניות</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Shield className="text-brandTeal flex-shrink-0 mt-1" size={20} />
                <div>
                  <div className="font-medium text-brandBlue">אבטחה ופרטיות</div>
                  <div className="text-brandGray text-sm">סטנדרטים גבוהים של אבטחת מידע ופרטיות</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Code className="text-brandTeal flex-shrink-0 mt-1" size={20} />
                <div>
                  <div className="font-medium text-brandBlue">פתרונות דיגיטליים</div>
                  <div className="text-brandGray text-sm">פיתוח פתרונות מתקדמים לעסקים עם דגש על חוויית משתמש</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Users className="text-brandTeal flex-shrink-0 mt-1" size={20} />
                <div>
                  <div className="font-medium text-brandBlue">סביבת עבודה חכמה</div>
                  <div className="text-brandGray text-sm">סביבה מתקדמת, בטוחה ומלאה בטכנולוגיה חדשנית</div>
                </div>
              </div>
            </div>

            <a
              href="https://ersona.co"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-brandTeal hover:text-brandTeal/80 font-medium transition-colors"
            >
              <ExternalLink size={16} />
              בקר באתר Ersona
            </a>
          </div>

          {/* Right Column - My Role & Experience */}
          <div className="space-y-6">
            {/* Military Experience */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <h4 className="text-xl font-heading font-bold text-brandBlue mb-4 flex items-center gap-3">
                <Plane className="text-brandTeal" size={24} />
                ניסיון צבאי - חיל האוויר
              </h4>
              <ul className="space-y-3 text-brandGray">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-brandTeal rounded-full mt-2 flex-shrink-0"></div>
                  <span>מתכנת בחיל האוויר כולל שירות קבע</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-brandTeal rounded-full mt-2 flex-shrink-0"></div>
                  <span>הבנה עמוקה של המערכת הצבאית מבפנים</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-brandTeal rounded-full mt-2 flex-shrink-0"></div>
                  <span>ידע מעשי איך להיכנס ליחידות טכנולוגיות מובחרות</span>
                </li>
              </ul>
            </div>

            {/* Current Role */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <h4 className="text-xl font-heading font-bold text-brandBlue mb-4">התפקיד הנוכחי - סמנכ״ל פיתוח</h4>
              <ul className="space-y-3 text-brandGray">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-brandTeal rounded-full mt-2 flex-shrink-0"></div>
                  <span>הובלת צוותי פיתוח וארכיטקטורת מערכות AI מתקדמות</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-brandTeal rounded-full mt-2 flex-shrink-0"></div>
                  <span>ניסיון קודם כשכיר בחברות הייטק מובילות</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-brandTeal rounded-full mt-2 flex-shrink-0"></div>
                  <span>פיתוח פתרונות טכנולוגיים חדשניים עם בינה מלאכותית</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-brandBlue to-brandTeal rounded-xl p-6 text-white">
              <h4 className="text-xl font-heading font-bold mb-3">איך זה עוזר לך?</h4>
              <p className="text-blue-100 leading-relaxed">
                הניסיון הצבאי שלי נותן לי הבנה ייחודית של המערכת מבפנים - אני יודע בדיוק איך להיכנס ליחידות הטכנולוגיות
                המובחרות. בשילוב עם הניסיון בהייטק, אני מכין אותך לא רק לבגרות, אלא גם לקריירה מוצלחת בתחום.
              </p>
            </div>

            <div className="bg-brandLight rounded-xl p-6 border border-brandTeal/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-brandBlue mb-1">מהצבא דרך ההייטק לכיתה</div>
                <div className="text-brandGray">ניסיון מגוון ועשיר שמתורגם לשיעורים מעשיים ורלוונטיים</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
