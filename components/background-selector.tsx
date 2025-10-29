"use client"

import { useState } from "react"
import { WaveLinesBackground } from "./backgrounds/wave-lines-bg"
import { ScanLinesBackground } from "./backgrounds/scan-lines-bg"
import { OscillatingWavesBg } from "./backgrounds/oscillating-waves-bg"

const backgrounds = {
  waves: { component: WaveLinesBackground, name: "Wave Lines" },
  scan: { component: ScanLinesBackground, name: "Scan Lines" },
  oscillating: { component: OscillatingWavesBg, name: "Oscillating Waves" },
}

export function BackgroundSelector() {
  const [selected, setSelected] = useState<keyof typeof backgrounds>("waves")
  const BackgroundComponent = backgrounds[selected].component

  return (
    <>
      <BackgroundComponent />

      {/* Selector UI - positioned in bottom right */}
      <div className="fixed bottom-4 right-4 z-50 bg-background/80 backdrop-blur-sm border border-border rounded-lg p-3">
        <p className="text-xs text-muted-foreground mb-2">Background Style:</p>
        <div className="flex flex-col gap-1">
          {Object.entries(backgrounds).map(([key, { name }]) => (
            <button
              key={key}
              onClick={() => setSelected(key as keyof typeof backgrounds)}
              className={`text-xs px-3 py-1.5 rounded transition-colors text-left ${
                selected === key
                  ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/50"
                  : "hover:bg-accent text-muted-foreground"
              }`}
            >
              {name}
            </button>
          ))}
        </div>
      </div>
    </>
  )
}
