"use client"

import { motion } from "framer-motion"

export function RadialPulseBackground() {
  const pulsePoints = [
    { x: "20%", y: "30%", delay: 0 },
    { x: "80%", y: "20%", delay: 2 },
    { x: "50%", y: "70%", delay: 4 },
    { x: "10%", y: "80%", delay: 1 },
    { x: "90%", y: "60%", delay: 3 },
  ]

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {pulsePoints.map((point, i) => (
        <div key={i} className="absolute" style={{ left: point.x, top: point.y }}>
          {[0, 1, 2].map((ring) => (
            <motion.div
              key={ring}
              className="absolute rounded-full border border-cyan-500/30"
              style={{
                width: "10px",
                height: "10px",
                left: "-5px",
                top: "-5px",
              }}
              animate={{
                scale: [1, 15, 1],
                opacity: [0.6, 0, 0.6],
              }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                delay: point.delay + ring * 0.8,
                ease: "easeOut",
              }}
            />
          ))}
        </div>
      ))}
    </div>
  )
}
