import Hero from "@/components/Hero"
import Features from "@/components/Features"
import Testimonials from "@/components/Testimonials"
import PricingOrContact from "@/components/PricingOrContact"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Testimonials />
      <PricingOrContact />
      <Footer />
    </main>
  )
}
