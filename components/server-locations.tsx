"use client"

import { motion } from "framer-motion"
import { Server, MapPin, Activity, Building2 } from "lucide-react"
import { Card } from "@/components/ui/card"

const servers = [
  {
    country: "Germany",
    code: "DE",
    flag: "🇩🇪",
    city: "Frankfurt",
    datacenter: "Hetzner",
    latency: "12ms",
    load: "23%",
  },
  {
    country: "Finland",
    code: "FI",
    flag: "🇫🇮",
    city: "Helsinki",
    datacenter: "FirstColo",
    latency: "18ms",
    load: "31%",
  },
  {
    country: "Kazakhstan",
    code: "KZ",
    flag: "🇰🇿",
    city: "Almaty",
    datacenter: "DataForest",
    latency: "45ms",
    load: "15%",
  },
]

export function ServerLocations() {
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Global Server Network</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect to high-performance servers across three strategic locations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {servers.map((server, index) => (
            <motion.div
              key={server.code}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="group relative overflow-hidden border-2 border-border hover:border-primary/50 bg-card/50 backdrop-blur-sm p-6 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10 space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="text-5xl">{server.flag}</div>
                    <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20">
                      <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-xs font-mono text-green-500">Online</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-1">{server.country}</h3>
                    <div className="flex items-center gap-2 text-muted-foreground mb-2">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{server.city}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Building2 className="h-4 w-4" />
                      <span className="text-sm font-mono">{server.datacenter}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border/50">
                    <div>
                      <div className="flex items-center gap-2 text-muted-foreground mb-1">
                        <Activity className="h-4 w-4" />
                        <span className="text-xs">Latency</span>
                      </div>
                      <div className="text-lg font-mono font-semibold text-primary">{server.latency}</div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-muted-foreground mb-1">
                        <Server className="h-4 w-4" />
                        <span className="text-xs">Load</span>
                      </div>
                      <div className="text-lg font-mono font-semibold text-primary">{server.load}</div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
