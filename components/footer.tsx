import { Phone, Mail, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-brandGray text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-heading font-semibold mb-4">יצירת קשר</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone size={18} />
                <a href="tel:0548060891" className="hover:text-brandTeal transition-colors">
                  054-806-0891
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} />
                <a href="mailto:yair578@gmail.com" className="hover:text-brandTeal transition-colors">
                  yair578@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={18} />
                <span>רוטשילד 13, תל אביב</span>
              </div>
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="text-xl font-heading font-semibold mb-4">על יאיר</h3>
            <p className="text-gray-300 leading-relaxed">
              סמנכ״ל פיתוח בחברת הייטק מובילה ובוגר קורס תכנות צבאי מוביל. מתמחה בהוראת מדעי המחשב לתלמידי תיכון עם
              ניסיון צבאי בחיל האוויר.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-heading font-semibold mb-4">השירותים</h3>
            <ul className="space-y-2 text-gray-300">
              <li>שיעורים פרטיים במדעי המחשב</li>
              <li>תכנות Java ו-C#</li>
              <li>הכנה לבגרות 3-5 יחידות</li>
              <li>הכנה ליחידות טכנולוגיות</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 יאיר קנדוב. כל הזכויות שמורות.</p>
        </div>
      </div>
    </footer>
  )
}
