"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"

export function WaveInterferenceBg() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  const waveCount = 5

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="wave-gradient-1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={isDark ? "#00d4ff" : "#0066ff"} stopOpacity="0.1" />
            <stop offset="50%" stopColor={isDark ? "#0066ff" : "#00d4ff"} stopOpacity="0.2" />
            <stop offset="100%" stopColor={isDark ? "#00d4ff" : "#0066ff"} stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {[...Array(waveCount)].map((_, i) => (
          <motion.path
            key={i}
            d={`M 0 ${200 + i * 100} Q 400 ${150 + i * 100} 800 ${200 + i * 100} T 1600 ${200 + i * 100} T 2400 ${200 + i * 100}`}
            fill="none"
            stroke="url(#wave-gradient-1)"
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: 1,
              opacity: [0.3, 0.6, 0.3],
              d: [
                `M 0 ${200 + i * 100} Q 400 ${150 + i * 100} 800 ${200 + i * 100} T 1600 ${200 + i * 100} T 2400 ${200 + i * 100}`,
                `M 0 ${200 + i * 100} Q 400 ${250 + i * 100} 800 ${200 + i * 100} T 1600 ${200 + i * 100} T 2400 ${200 + i * 100}`,
                `M 0 ${200 + i * 100} Q 400 ${150 + i * 100} 800 ${200 + i * 100} T 1600 ${200 + i * 100} T 2400 ${200 + i * 100}`,
              ],
            }}
            transition={{
              pathLength: { duration: 2, ease: "easeInOut" },
              opacity: { duration: 3 + i, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
              d: { duration: 4 + i * 0.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
            }}
          />
        ))}

        {/* Horizontal waves */}
        {[...Array(waveCount)].map((_, i) => (
          <motion.path
            key={`h-${i}`}
            d={`M ${200 + i * 150} 0 Q ${200 + i * 150} 300 ${250 + i * 150} 600 T ${200 + i * 150} 1200`}
            fill="none"
            stroke="url(#wave-gradient-1)"
            strokeWidth="1.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: 1,
              opacity: [0.2, 0.5, 0.2],
              d: [
                `M ${200 + i * 150} 0 Q ${200 + i * 150} 300 ${250 + i * 150} 600 T ${200 + i * 150} 1200`,
                `M ${200 + i * 150} 0 Q ${150 + i * 150} 300 ${200 + i * 150} 600 T ${200 + i * 150} 1200`,
                `M ${200 + i * 150} 0 Q ${200 + i * 150} 300 ${250 + i * 150} 600 T ${200 + i * 150} 1200`,
              ],
            }}
            transition={{
              pathLength: { duration: 2, ease: "easeInOut" },
              opacity: { duration: 4 + i * 0.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
              d: { duration: 5 + i * 0.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
            }}
          />
        ))}
      </svg>
    </div>
  )
}
