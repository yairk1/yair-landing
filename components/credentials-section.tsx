import { Star, Users, Clock, Award, ExternalLink, CheckCircle } from "lucide-react"

export default function CredentialsSection() {
  const stats = [
    {
      icon: <Star className="text-yellow-500" size={24} />,
      value: "10.0",
      label: "דירוג ב'לימוד נעים'",
      description: "מבוסס על 46 המלצות",
    },
    {
      icon: <Users className="text-brandTeal" size={24} />,
      value: "500+",
      label: "תלמידים",
      description: "הודרכו בהצלחה",
    },
    {
      icon: <Clock className="text-brandBlue" size={24} />,
      value: "8+",
      label: "שנות ניסיון",
      description: "בהוראה פרטית",
    },
    {
      icon: <Award className="text-brandOrange" size={24} />,
      value: "מאומת",
      label: "מורה מוסמך",
      description: 'ב"לימוד נעים"',
    },
  ]

  const achievements = [
    "מורה מאומת ומוכר בפלטפורמת 'לימוד נעים' עם דירוג 10.0",
    "סמנכ״ל פיתוח בחברת הייטק מובילה",
    "בוגר קורס תכנות צבאי שהכשיר מאות מתכנתים",
    "מתמחה בהכנה לבגרות במדעי המחשב",
    "ניסיון מוכח בהעלאת ציונים משמעותית",
  ]

  const subjects = [
    { name: "מדעי המחשב", level: "3-5 יחידות", color: "bg-blue-100 text-blue-800" },
    { name: "תכנות Java", level: "כל הרמות", color: "bg-green-100 text-green-800" },
    { name: "תכנות C#", level: "כל הרמות", color: "bg-purple-100 text-purple-800" },
    { name: "הכנה ליחידות טכנולוגיות", level: "צבאיות", color: "bg-orange-100 text-orange-800" },
  ]

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-brandLight via-white to-brandLight">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-brandTeal/10 text-brandTeal px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Award size={16} />
            מורה מאומת ומוכר
          </div>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-brandBlue mb-4">הכירו את יאיר קנדוב</h2>
          <p className="text-xl text-brandGray max-w-3xl mx-auto">
            מורה מוסמך ומאומת בפלטפורמת "לימוד נעים" עם ניסיון מוכח בהצלחת תלמידים
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-50 rounded-full mb-4">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-brandBlue mb-1">{stat.value}</div>
              <div className="font-medium text-brandGray mb-1">{stat.label}</div>
              <div className="text-sm text-gray-500">{stat.description}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Achievements */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-heading font-bold text-brandBlue mb-6 flex items-center gap-3">
              <Award className="text-brandTeal" size={28} />
              הישגים והסמכות
            </h3>

            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-brandTeal flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-brandGray leading-relaxed">{achievement}</span>
                </div>
              ))}
            </div>

            {/* Link to Limud Naim */}
            <div className="mt-8 p-4 bg-brandLight rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-brandBlue">פרופיל מלא ב"לימוד נעים"</div>
                  <div className="text-sm text-brandGray">צפה בהמלצות נוספות ופרטים מלאים</div>
                </div>
                <a
                  href="https://www.limudnaim.co.il/%D7%9E%D7%95%D7%A8%D7%94-%D7%A4%D7%A8%D7%98%D7%99/%D7%99%D7%90%D7%99%D7%A8-%D7%A7%D7%A0%D7%93%D7%95%D7%91"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-brandTeal hover:text-brandTeal/80 font-medium text-sm"
                >
                  <ExternalLink size={16} />
                  צפה
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Subjects */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-heading font-bold text-brandBlue mb-6 flex items-center gap-3">
              <Users className="text-brandTeal" size={28} />
              מקצועות הוראה
            </h3>

            <div className="space-y-4 mb-8">
              {subjects.map((subject, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-medium text-brandBlue">{subject.name}</div>
                    <div className="text-sm text-brandGray">{subject.level}</div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${subject.color}`}>מומחה</span>
                </div>
              ))}
            </div>

            {/* Teaching Method */}
            <div className="border-t pt-6">
              <h4 className="font-semibold text-brandBlue mb-3">שיטת ההוראה</h4>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-brandTeal rounded-full"></div>
                  <span>התאמה אישית</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-brandTeal rounded-full"></div>
                  <span>למידה אינטראקטיבית</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-brandTeal rounded-full"></div>
                  <span>מעקב צמוד</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-brandTeal rounded-full"></div>
                  <span>תוצאות מוכחות</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-brandBlue to-brandTeal rounded-xl p-8 text-white">
            <h3 className="text-2xl font-heading font-bold mb-4">מוכן להצטרף למאות התלמידים המצליחים?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              עם ניסיון מוכח, הסמכות מקצועיות ושיטת הוראה מותאמת אישית - הדרך שלך לציון 90+ מתחילה כאן
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#hero-form"
                className="bg-brandOrange hover:brightness-90 text-white font-medium px-8 py-3 rounded-lg transition-all duration-200 shadow-lg"
              >
                קבע שיעור ניסיון חינם
              </a>
              <a
                href="https://www.limudnaim.co.il/%D7%9E%D7%95%D7%A8%D7%94-%D7%A4%D7%A8%D7%98%D7%99/%D7%99%D7%90%D7%99%D7%A8-%D7%A7%D7%A0%D7%93%D7%95%D7%91"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 hover:bg-white/30 text-white font-medium px-8 py-3 rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
              >
                <ExternalLink size={18} />
                צפה בפרופיל המלא
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
