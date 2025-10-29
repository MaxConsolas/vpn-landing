"use client"

import { motion } from "framer-motion"
import { Globe, Shield, Zap, Lock, Eye, Gauge } from "lucide-react"

const features = [
  {
    icon: Globe,
    title: "Global Reach",
    description: "Connect to servers across Europe and Asia for optimal performance",
  },
  {
    icon: Shield,
    title: "Military-Grade Encryption",
    description: "Your data is protected with state-of-the-art encryption protocols",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Experience blazing speeds with our optimized server infrastructure",
  },
  {
    icon: Lock,
    title: "Zero Logs",
    description: "We never track, collect, or share your private data",
  },
  {
    icon: Eye,
    title: "Anonymous Browsing",
    description: "Browse the internet without revealing your identity or location",
  },
  {
    icon: Gauge,
    title: "High Performance",
    description: "Optimized for streaming, gaming, and bandwidth-intensive tasks",
  },
]

export function FeaturesGrid() {
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Cutting-Edge Features</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Built with the latest technology to provide you with the best VPN experience
          </p>
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
