"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"

export function FlowingGridBg() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="flowing-grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <motion.path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke={isDark ? "rgba(0, 212, 255, 0.15)" : "rgba(0, 102, 255, 0.15)"}
              strokeWidth="0.5"
              animate={{
                d: [
                  "M 60 0 L 0 0 0 60",
                  "M 60 0 Q 30 10 0 0 Q 10 30 0 60",
                  "M 60 0 Q 50 -10 0 0 Q -10 50 0 60",
                  "M 60 0 L 0 0 0 60",
                ],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          </pattern>
          <linearGradient id="grid-fade" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopOpacity="0.3" />
            <stop offset="50%" stopOpacity="0.6" />
            <stop offset="100%" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#flowing-grid)" opacity="0.8" />
        <rect width="100%" height="100%" fill="url(#grid-fade)" />
      </svg>

      {/* Animated glow orbs that distort the grid */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            width: "400px",
            height: "400px",
            background: isDark
              ? "radial-gradient(circle, rgba(0, 212, 255, 0.15) 0%, transparent 70%)"
              : "radial-gradient(circle, rgba(0, 102, 255, 0.15) 0%, transparent 70%)",
          }}
          animate={{
            x: [Math.random() * 100 + "%", Math.random() * 100 + "%", Math.random() * 100 + "%"],
            y: [Math.random() * 100 + "%", Math.random() * 100 + "%", Math.random() * 100 + "%"],
          }}
          transition={{
            duration: 20 + i * 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}
