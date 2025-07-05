"use client"

import { useState } from "react"
import { ExternalLink, User, Award } from "lucide-react"

export default function TeacherProfileSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-brandTeal/10 text-brandTeal px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Award size={16} />
            פרופיל מאומת
          </div>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-brandBlue mb-4">
            הפרופיל המלא שלי ב"לימוד נעים"
          </h2>
          <p className="text-xl text-brandGray max-w-3xl mx-auto">
            צפה בפרופיל המלא שלי, המלצות נוספות וכל הפרטים על השירותים שאני מציע
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Header with external link */}
          <div className="bg-gradient-to-r from-brandBlue to-brandTeal rounded-t-xl p-4 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <User size={24} />
                <span className="font-medium">פרופיל יאיר קנדוב - לימוד נעים</span>
              </div>
              <a
                href="https://www.limudnaim.co.il/%D7%9E%D7%95%D7%A8%D7%94-%D7%A4%D7%A8%D7%98%D7%99/%D7%99%D7%90%D7%99%D7%A8-%D7%A7%D7%A0%D7%93%D7%95%D7%91"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-3 py-1 rounded-lg text-sm transition-colors"
              >
                <ExternalLink size={16} />
                פתח בחלון חדש
              </a>
            </div>
          </div>

          {/* Iframe container */}
          <div className="relative bg-gray-100 rounded-b-xl overflow-hidden shadow-xl">
            {!isLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brandTeal mx-auto mb-4"></div>
                  <p className="text-brandGray">טוען פרופיל...</p>
                </div>
              </div>
            )}

            <iframe
              src="https://www.limudnaim.co.il/%D7%9E%D7%95%D7%A8%D7%94-%D7%A4%D7%A8%D7%98%D7%99/%D7%99%D7%90%D7%99%D7%A8-%D7%A7%D7%A0%D7%93%D7%95%D7%91"
              title="פרופיל יאיר קנדוב - לימוד נעים"
              className="w-full h-[600px] lg:h-[800px] border-0"
              onLoad={() => setIsLoaded(true)}
              loading="lazy"
              sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
            />
          </div>

          {/* Call to action below iframe */}
          <div className="bg-brandLight rounded-lg p-6 mt-8 text-center">
            <p className="text-brandGray mb-4">רוצה לראות עוד המלצות ופרטים? בקר בפרופיל המלא שלי באתר "לימוד נעים"</p>
            <a
              href="https://www.limudnaim.co.il/%D7%9E%D7%95%D7%A8%D7%94-%D7%A4%D7%A8%D7%98%D7%99/%D7%99%D7%90%D7%99%D7%A8-%D7%A7%D7%A0%D7%93%D7%95%D7%91"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brandTeal hover:brightness-90 text-white font-medium px-6 py-3 rounded-lg transition-all duration-200"
            >
              <ExternalLink size={18} />
              צפה בפרופיל המלא
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
