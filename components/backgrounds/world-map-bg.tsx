"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function WorldMapBg() {
  const [pings, setPings] = useState<Array<{ id: number; x: number; y: number }>>([])

  useEffect(() => {
    const interval = setInterval(() => {
      const newPing = {
        id: Date.now(),
        x: Math.random() * 100,
        y: Math.random() * 100,
      }
      setPings((prev) => [...prev.slice(-15), newPing])
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="25" height="25" patternUnits="userSpaceOnUse">
            <path
              d="M 25 0 L 0 0 0 25"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-primary/10"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />

        {/* World Map Outlines */}
        <g className="text-primary" opacity="0.4">
          {/* Europe/Africa outline */}
          <path
            d="M 150 150 L 180 140 L 220 145 L 250 160 L 270 180 L 260 220 L 240 250 L 220 270 L 200 280 L 180 270 L 160 250 L 150 220 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />

          {/* Asia outline */}
          <path
            d="M 650 200 L 700 190 L 750 200 L 780 220 L 800 250 L 790 280 L 760 300 L 720 310 L 680 300 L 660 270 L 650 240 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
        </g>

        {/* Animated connection lines */}
        {pings.slice(0, 5).map((ping, i) => {
          const nextPing = pings[i + 1]
          if (!nextPing) return null
          return (
            <motion.line
              key={`line-${ping.id}`}
              x1={`${ping.x}%`}
              y1={`${ping.y}%`}
              x2={`${nextPing.x}%`}
              y2={`${nextPing.y}%`}
              stroke="currentColor"
              strokeWidth="1"
              className="text-primary/30"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: [0, 0.5, 0] }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          )
        })}
      </svg>

      {/* Animated ping dots */}
      {pings.map((ping) => (
        <motion.div
          key={ping.id}
          className="absolute w-2 h-2 rounded-full bg-primary"
          style={{ left: `${ping.x}%`, top: `${ping.y}%` }}
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: [0, 1.5, 0], opacity: [1, 0.5, 0] }}
          transition={{ duration: 3, ease: "easeOut" }}
        />
      ))}
    </div>
  )
}
