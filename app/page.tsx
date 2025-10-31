import { BackgroundSelector } from "@/components/background-selector"
import { HeroSection } from "@/components/hero-section"
import { ServerLocations } from "@/components/server-locations"
import { ProtocolShowcase } from "@/components/protocol-showcase"
import { FeaturesGrid } from "@/components/features-grid"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageToggle } from "@/components/language-toggle"

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <BackgroundSelector />

      <div className="fixed top-6 right-6 z-50 flex items-center gap-3">
        <LanguageToggle />
        <ThemeToggle />
      </div>

      <div className="relative z-10">
        <HeroSection />
        <ServerLocations />
        <ProtocolShowcase />
        <FeaturesGrid />

        <footer className="border-t border-border/50 bg-background/50 backdrop-blur-sm py-12 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-4">
              <h3 className="text-2xl font-bold mb-2">VPN</h3>
              <p className="text-muted-foreground">Next-generation secure connectivity</p>
            </div>
            <div className="text-sm text-muted-foreground">
              <p>&copy; {new Date().getFullYear()} VPN. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </main>
  )
}
