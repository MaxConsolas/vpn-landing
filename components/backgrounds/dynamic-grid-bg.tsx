"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"

export function DynamicGridBg() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  const rows = 12
  const cols = 16

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="grid-glow">
            <stop offset="0%" stopColor={isDark ? "#00d4ff" : "#0066ff"} stopOpacity="0.4" />
            <stop offset="100%" stopColor={isDark ? "#00d4ff" : "#0066ff"} stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Grid cells with individual animations */}
        {[...Array(rows)].map((_, row) =>
          [...Array(cols)].map((_, col) => {
            const delay = (row + col) * 0.05
            const duration = 3 + Math.random() * 2

            return (
              <motion.rect
                key={`${row}-${col}`}
                x={`${(col / cols) * 100}%`}
                y={`${(row / rows) * 100}%`}
                width={`${100 / cols}%`}
                height={`${100 / rows}%`}
                fill="none"
                stroke={isDark ? "rgba(0, 212, 255, 0.15)" : "rgba(0, 102, 255, 0.15)"}
                strokeWidth="0.5"
                initial={{ opacity: 0.3 }}
                animate={{
                  opacity: [0.3, 0.8, 0.3],
                  strokeWidth: ["0.5", "1.5", "0.5"],
                }}
                transition={{
                  duration,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay,
                }}
              />
            )
          }),
        )}

        {/* Traveling light pulses */}
        {[...Array(4)].map((_, i) => (
          <motion.circle
            key={`pulse-${i}`}
            r="30"
            fill="url(#grid-glow)"
            initial={{
              cx: "0%",
              cy: `${25 * i}%`,
            }}
            animate={{
              cx: ["0%", "100%", "0%"],
              cy: [`${25 * i}%`, `${25 * i + 10}%`, `${25 * i}%`],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              delay: i * 2,
            }}
          />
        ))}

        {/* Vertical traveling pulses */}
        {[...Array(4)].map((_, i) => (
          <motion.circle
            key={`v-pulse-${i}`}
            r="30"
            fill="url(#grid-glow)"
            initial={{
              cx: `${25 * i}%`,
              cy: "0%",
            }}
            animate={{
              cx: [`${25 * i}%`, `${25 * i + 10}%`, `${25 * i}%`],
              cy: ["0%", "100%", "0%"],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              delay: i * 2.5,
            }}
          />
        ))}
      </svg>
    </div>
  )
}
