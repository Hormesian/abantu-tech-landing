import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { ServiceMatrix } from "@/components/service-matrix"
import { BenchmarksSection } from "@/components/benchmarks-section"
import { EngagementModels } from "@/components/engagement-models"
import { ContactFooter } from "@/components/contact-footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <HeroSection />
      <ServiceMatrix />
      <BenchmarksSection />
      <EngagementModels />
      <ContactFooter />
    </main>
  )
}
