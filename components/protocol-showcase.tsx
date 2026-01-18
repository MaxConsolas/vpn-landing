"use client"

import { motion } from "framer-motion"
import { Code2, Shield, Zap, Lock, Network, Cpu } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "./language-provider"

const protocols = [
  { name: "VLESS", featured: true, icon: Zap },
  // { name: "VMess", featured: false, icon: Shield },
  // { name: "Trojan", featured: false, icon: Lock },
  { name: "Shadowsocks", featured: false, icon: Network },
  { name: "WireGuard", featured: false, icon: Cpu },
]

export function ProtocolShowcase() {
  const { t } = useLanguage()

  return (
    <section id="protocols" className="relative py-24 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.protocols.title}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.protocols.subtitle} <span className="text-primary font-mono font-semibold">VLESS</span>{" "}
            {t.protocols.subtitleSuffix}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {protocols.map((protocol, index) => {
            const Icon = protocol.icon
            return (
              <motion.div
                key={protocol.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
              >
                <Card
                  className={`relative overflow-hidden p-6 transition-all duration-300 ${
                    protocol.featured
                      ? "border-2 border-primary bg-primary/5 shadow-lg shadow-primary/20"
                      : "border border-border hover:border-primary/30 bg-card/50"
                  } backdrop-blur-sm`}
                >
                  {protocol.featured && (
                    <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                      {t.protocols.primary}
                    </Badge>
                  )}

                  <div className="space-y-4">
                    <div
                      className={`inline-flex p-3 rounded-xl ${
                        protocol.featured ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"
                      }`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold font-mono mb-2">{protocol.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {protocol.featured ? t.protocols.vlessDesc : t.protocols.otherDesc}
                      </p>
                    </div>

                    {protocol.featured && (
                      <div className="pt-4 border-t border-primary/20">
                        <div className="flex items-center gap-2 text-sm">
                          <Code2 className="h-4 w-4 text-primary" />
                          <span className="font-mono text-primary">{t.protocols.optimized}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-12 p-6 rounded-2xl border border-border bg-card/30 backdrop-blur-sm"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-primary/10">
              <Code2 className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">{t.protocols.whyVless}</h3>
              <p className="text-muted-foreground leading-relaxed">{t.protocols.whyVlessDesc}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
