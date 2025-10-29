"use client"

import { motion } from "framer-motion"

export function HexagonGridBackground() {
  const hexagons = Array.from({ length: 40 })

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden opacity-30">
      <div className="absolute inset-0 grid grid-cols-8 gap-8 p-8">
        {hexagons.map((_, i) => (
          <motion.div
            key={i}
            className="relative aspect-square"
            initial={{ opacity: 0.1, scale: 0.8 }}
            animate={{
              opacity: [0.1, 0.4, 0.1],
              scale: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 4 + (i % 3),
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          >
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <polygon
                points="50 1 95 25 95 75 50 99 5 75 5 25"
                fill="none"
                stroke="rgba(0,212,255,0.5)"
                strokeWidth="1"
              />
            </svg>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
