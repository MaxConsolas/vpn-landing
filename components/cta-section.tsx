"use client"

import { motion } from "framer-motion"
import { Send } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useLanguage } from "./language-provider"

export function CtaSection() {
  const { t } = useLanguage()

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              <span className="bg-gradient-to-r from-primary via-chart-2 to-primary bg-clip-text text-transparent">
                {t.cta.title}
              </span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              {t.cta.subtitle}
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link href="https://t.me/IrisVPN_bot">
              <Button
                size="lg"
                className="relative group overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-7 text-xl rounded-2xl shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <Send className="h-6 w-6" />
                  {t.cta.button}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-chart-2 via-primary to-chart-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

