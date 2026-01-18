"use client"

// import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import Aurora from '@/lib/aurora';
import { useIsMobile } from "@/hooks/use-mobile"

export function AuroraBg() {
  const { theme } = useTheme()
  const isDark = theme === "dark"
  const isMobile = useIsMobile()


  return (
    <div className="absolute inset-0 h-screen -z-10 overflow-hidden">
      {isDark ? (
        <Aurora
          colorStops={["#5227FF", "#7cff67", "#5227FF"]}
          blend={0.5}
          amplitude={isMobile ? 0.3 : 1.0}
          speed={0.5}
          // theme="dark"
        />
      ) : <></>}
    </div>
  )
}
