"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"

export function LiquidMeshBg() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  const gridSize = 8
  const cellSize = 100 / gridSize

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="liquid-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={isDark ? "#00d4ff" : "#0066ff"} stopOpacity="0.2" />
            <stop offset="100%" stopColor={isDark ? "#0066ff" : "#00d4ff"} stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* Vertical lines */}
        {[...Array(gridSize + 1)].map((_, i) => (
          <motion.line
            key={`v-${i}`}
            x1={`${i * cellSize}%`}
            y1="0%"
            x2={`${i * cellSize}%`}
            y2="100%"
            stroke={isDark ? "rgba(0, 212, 255, 0.2)" : "rgba(0, 102, 255, 0.2)"}
            strokeWidth="1"
            animate={{
              x1: [`${i * cellSize}%`, `${i * cellSize + Math.sin(i) * 2}%`, `${i * cellSize}%`],
              x2: [`${i * cellSize}%`, `${i * cellSize + Math.sin(i + 1) * 2}%`, `${i * cellSize}%`],
            }}
            transition={{
              duration: 3 + i * 0.2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Horizontal lines */}
        {[...Array(gridSize + 1)].map((_, i) => (
          <motion.line
            key={`h-${i}`}
            x1="0%"
            y1={`${i * cellSize}%`}
            x2="100%"
            y2={`${i * cellSize}%`}
            stroke={isDark ? "rgba(0, 212, 255, 0.2)" : "rgba(0, 102, 255, 0.2)"}
            strokeWidth="1"
            animate={{
              y1: [`${i * cellSize}%`, `${i * cellSize + Math.cos(i) * 2}%`, `${i * cellSize}%`],
              y2: [`${i * cellSize}%`, `${i * cellSize + Math.cos(i + 1) * 2}%`, `${i * cellSize}%`],
            }}
            transition={{
              duration: 3 + i * 0.2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: i * 0.1,
            }}
          />
        ))}

        {/* Ripple circles */}
        {[...Array(3)].map((_, i) => (
          <motion.circle
            key={`ripple-${i}`}
            cx={`${25 + i * 25}%`}
            cy={`${30 + i * 20}%`}
            r="0"
            fill="none"
            stroke="url(#liquid-gradient)"
            strokeWidth="2"
            animate={{
              r: [0, 100, 200],
              opacity: [0.6, 0.3, 0],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeOut",
              delay: i * 1.3,
            }}
          />
        ))}
      </svg>
    </div>
  )
}
