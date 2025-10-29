"use client"

import { motion } from "framer-motion"

export function ScanLinesBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Vertical scan line */}
      <motion.div
        className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent"
        animate={{
          left: ["0%", "100%"],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      {/* Horizontal scan line */}
      <motion.div
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"
        animate={{
          top: ["0%", "100%"],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
            linear-gradient(rgba(0,212,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,212,255,0.1) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Corner brackets */}
      {["top-left", "top-right", "bottom-left", "bottom-right"].map((corner) => (
        <motion.div
          key={corner}
          className={`absolute w-20 h-20 ${corner}`}
          style={{
            ...(corner.includes("top") ? { top: "2rem" } : { bottom: "2rem" }),
            ...(corner.includes("left") ? { left: "2rem" } : { right: "2rem" }),
          }}
          initial={{ opacity: 0.3 }}
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path
              d={
                corner === "top-left"
                  ? "M 20 0 L 0 0 L 0 20"
                  : corner === "top-right"
                    ? "M 80 0 L 100 0 L 100 20"
                    : corner === "bottom-left"
                      ? "M 20 100 L 0 100 L 0 80"
                      : "M 80 100 L 100 100 L 100 80"
              }
              stroke="rgba(0,212,255,0.6)"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  )
}
