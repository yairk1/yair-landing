import type React from "react"
import type { Metadata } from "next"
import { Assistant, Open_Sans } from "next/font/google"
import "./globals.css"

const assistant = Assistant({
  subsets: ["latin", "hebrew"],
  variable: "--font-assistant",
  display: "swap",
})

const openSans = Open_Sans({
  subsets: ["latin", "hebrew"],
  variable: "--font-open-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "יאיר קנדוב – מורה פרטי למדעי המחשב",
  description:
    "מורה פרטי למדעי המחשב עם דירוג 10.0 ב'לימוד נעים'. ליווי אישי עם יאיר קנדוב, סמנכ״ל פיתוח ובוגר קורס תכנות מוביל.",
  openGraph: {
    title: "יאיר קנדוב – מורה פרטי למדעי המחשב",
    description: "מורה פרטי למדעי המחשב עם דירוג 10.0 ו-46 המלצות",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="he" dir="rtl">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "יאיר קנדוב - מורה פרטי למדעי המחשב",
              description: "שיעורים פרטיים במתמטיקה ומדעי המחשב",
              url: "https://yair-kandov.com",
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                availableLanguage: "Hebrew",
              },
            }),
          }}
        />
      </head>
      <body className={`${assistant.variable} ${openSans.variable} font-body bg-brandLight text-brandGray`}>
        {children}
      </body>
    </html>
  )
}
