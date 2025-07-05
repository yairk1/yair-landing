import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import BenefitsSection from "@/components/benefits-section"
import TestimonialsSection from "@/components/testimonials-section"
import CredentialsSection from "@/components/credentials-section"
import ProfessionalBackgroundSection from "@/components/professional-background-section"
import CalloutSection from "@/components/callout-section"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <BenefitsSection />
      <TestimonialsSection />
      <CredentialsSection />
      <ProfessionalBackgroundSection />
      <CalloutSection />
      <Footer />
    </main>
  )
}
