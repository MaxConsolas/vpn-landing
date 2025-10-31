"use client"

import { motion } from "framer-motion"
import { Globe, Shield, Zap, Lock, Eye, Gauge } from "lucide-react"
import { useLanguage } from "./language-provider"

export function FeaturesGrid() {
  const { t } = useLanguage()

  const features = [
    {
      icon: Globe,
      title: t.features.globalReach.title,
      description: t.features.globalReach.description,
    },
    {
      icon: Shield,
      title: t.features.encryption.title,
      description: t.features.encryption.description,
    },
    {
      icon: Zap,
      title: t.features.speed.title,
      description: t.features.speed.description,
    },
    {
      icon: Lock,
      title: t.features.logs.title,
      description: t.features.logs.description,
    },
    {
      icon: Eye,
      title: t.features.anonymous.title,
      description: t.features.anonymous.description,
    },
    {
      icon: Gauge,
      title: t.features.performance.title,
      description: t.features.performance.description,
    },
  ]

  return (
    <section className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.features.title}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t.features.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group"
              >
                <div className="relative p-6 rounded-2xl border border-border bg-card/30 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                  <div className="relative z-10 space-y-4">
                    <div className="inline-flex p-3 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-6 w-6" />
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
