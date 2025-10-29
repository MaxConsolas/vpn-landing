"use client"

import { motion } from "framer-motion"

export function FloatingShapesBackground() {
  const shapes = [
    { type: "circle", size: 100, x: "10%", y: "20%", duration: 25 },
    { type: "square", size: 80, x: "80%", y: "10%", duration: 30 },
    { type: "triangle", size: 120, x: "60%", y: "70%", duration: 28 },
    { type: "circle", size: 60, x: "30%", y: "80%", duration: 22 },
    { type: "square", size: 90, x: "85%", y: "60%", duration: 26 },
    { type: "triangle", size: 70, x: "15%", y: "50%", duration: 24 },
  ]

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden opacity-20">
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: shape.x,
            top: shape.y,
            width: shape.size,
            height: shape.size,
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, 30, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: shape.duration,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          {shape.type === "circle" && <div className="w-full h-full rounded-full border-2 border-cyan-500/40" />}
          {shape.type === "square" && <div className="w-full h-full border-2 border-blue-500/40 rotate-45" />}
          {shape.type === "triangle" && (
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <polygon points="50 10, 90 90, 10 90" fill="none" stroke="rgba(138,43,226,0.4)" strokeWidth="2" />
            </svg>
          )}
        </motion.div>
      ))}
    </div>
  )
}
