"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"

export function OscillatingWavesBg() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <defs>
          <linearGradient id="osc-gradient-1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={isDark ? "#00d4ff" : "#0066ff"} stopOpacity="0.25" />
            <stop offset="100%" stopColor={isDark ? "#00d4ff" : "#0066ff"} stopOpacity="0.08" />
          </linearGradient>
          <linearGradient id="osc-gradient-2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={isDark ? "#0066ff" : "#00d4ff"} stopOpacity="0.25" />
            <stop offset="100%" stopColor={isDark ? "#0066ff" : "#00d4ff"} stopOpacity="0.08" />
          </linearGradient>
        </defs>

        {/* Large slow waves */}
        <motion.path
          d="M0,300 Q400,200 800,300 T1600,300 L1600,0 L0,0 Z"
          fill="url(#osc-gradient-1)"
          animate={{
            d: [
              "M0,300 Q400,200 800,300 T1600,300 L1600,0 L0,0 Z",
              "M0,300 Q400,400 800,300 T1600,300 L1600,0 L0,0 Z",
              "M0,300 Q400,200 800,300 T1600,300 L1600,0 L0,0 Z",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {/* Medium waves */}
        <motion.path
          d="M0,400 Q300,350 600,400 T1200,400 T1800,400 L1800,0 L0,0 Z"
          fill="url(#osc-gradient-2)"
          animate={{
            d: [
              "M0,400 Q300,350 600,400 T1200,400 T1800,400 L1800,0 L0,0 Z",
              "M0,400 Q300,450 600,400 T1200,400 T1800,400 L1800,0 L0,0 Z",
              "M0,400 Q300,350 600,400 T1200,400 T1800,400 L1800,0 L0,0 Z",
            ],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />

        {/* Fast small waves */}
        <motion.path
          d="M0,500 Q200,480 400,500 T800,500 T1200,500 T1600,500 L1600,0 L0,0 Z"
          fill="url(#osc-gradient-1)"
          animate={{
            d: [
              "M0,500 Q200,480 400,500 T800,500 T1200,500 T1600,500 L1600,0 L0,0 Z",
              "M0,500 Q200,520 400,500 T800,500 T1200,500 T1600,500 L1600,0 L0,0 Z",
              "M0,500 Q200,480 400,500 T800,500 T1200,500 T1600,500 L1600,0 L0,0 Z",
            ],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        {/* Bottom waves inverted */}
        <motion.path
          d="M0,1000 Q400,900 800,1000 T1600,1000 L1600,1200 L0,1200 Z"
          fill="url(#osc-gradient-2)"
          animate={{
            d: [
              "M0,1000 Q400,900 800,1000 T1600,1000 L1600,1200 L0,1200 Z",
              "M0,1000 Q400,1100 800,1000 T1600,1000 L1600,1200 L0,1200 Z",
              "M0,1000 Q400,900 800,1000 T1600,1000 L1600,1200 L0,1200 Z",
            ],
          }}
          transition={{
            duration: 7,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </svg>
    </div>
  )
}
