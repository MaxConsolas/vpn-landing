"use client"

import { motion } from "framer-motion"
import { Shield, Zap, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "./language-provider"

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm"
          >
            <Shield className="h-4 w-4 text-primary" />
            <span className="text-sm font-mono text-primary">{t.hero.badge}</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent animate-gradient">
              {t.hero.title}
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t.hero.subtitle} <span className="text-primary font-mono font-semibold">{t.hero.protocol}</span>{" "}
            {t.hero.protocolSuffix}
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <Button
              size="lg"
              className="relative group overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-xl shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Zap className="h-5 w-5" />
                {t.hero.getStarted}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-chart-2 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary/30 hover:border-primary hover:bg-primary/5 px-8 py-6 text-lg rounded-xl backdrop-blur-sm transition-all duration-300 bg-transparent"
            >
              <Globe className="h-5 w-5 mr-2" />
              {t.hero.viewLocations}
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-16"
          >
            {[
              { label: t.hero.stats.servers, value: "3" },
              { label: t.hero.stats.protocols, value: "5+" },
              { label: t.hero.stats.uptime, value: "99.9%" },
            ].map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-primary font-mono">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
