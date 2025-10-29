"use client"

import { useEffect, useRef } from "react"

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    let time = 0
    const waves: Array<{
      x: number
      y: number
      radius: number
      speed: number
      color: string
    }> = [
      { x: 0.2, y: 0.3, radius: 300, speed: 0.0003, color: "rgba(0, 100, 255, 0.15)" },
      { x: 0.8, y: 0.6, radius: 400, speed: 0.0002, color: "rgba(0, 200, 255, 0.1)" },
      { x: 0.5, y: 0.8, radius: 350, speed: 0.00025, color: "rgba(100, 150, 255, 0.12)" },
      { x: 0.1, y: 0.7, radius: 280, speed: 0.00035, color: "rgba(0, 150, 255, 0.08)" },
    ]

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      time += 1

      // Draw flowing gradient blobs
      waves.forEach((wave, index) => {
        const offsetX = Math.sin(time * wave.speed + index) * 100
        const offsetY = Math.cos(time * wave.speed * 1.5 + index) * 80

        const x = wave.x * canvas.width + offsetX
        const y = wave.y * canvas.height + offsetY

        const gradient = ctx.createRadialGradient(x, y, 0, x, y, wave.radius)
        gradient.addColorStop(0, wave.color)
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)")

        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      })

      // Add subtle scanline effect
      ctx.strokeStyle = "rgba(100, 150, 255, 0.02)"
      ctx.lineWidth = 1
      for (let y = 0; y < canvas.height; y += 4) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ opacity: 0.6 }} />
}
