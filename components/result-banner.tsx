"use client"

import { Check, X, Coins } from "lucide-react"

interface ResultBannerProps {
  isCorrect: boolean
  points: number
  show: boolean
}

export function ResultBanner({ isCorrect, points, show }: ResultBannerProps) {
  if (!show) return null

  return (
    <div
      className={`
      absolute inset-0 z-10 flex items-center justify-center
      ${isCorrect ? "bg-green-500/90" : "bg-red-500/90"}
      backdrop-blur-sm
    `}
    >
      <div className="flex items-center gap-4 text-white">
        <div className="flex items-center gap-2">
          {isCorrect ? <Check className="w-8 h-8" /> : <X className="w-8 h-8" />}
          <span className="text-4xl font-bold">{isCorrect ? "Goed" : "Fout"}</span>
        </div>
        {isCorrect && points > 0 && (
          <div className="flex items-center gap-2 text-2xl font-bold">
            <Coins className="w-6 h-6 text-yellow-300" />
            <span>+{points}</span>
          </div>
        )}
      </div>
    </div>
  )
}
