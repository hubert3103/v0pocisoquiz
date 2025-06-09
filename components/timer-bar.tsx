"use client"

import { useEffect, useState } from "react"

interface TimerBarProps {
  timeLimit: number
  onTimeUp: () => void
  isActive: boolean
  reset: boolean
}

export function TimerBar({ timeLimit, onTimeUp, isActive, reset }: TimerBarProps) {
  const [timeLeft, setTimeLeft] = useState(timeLimit)

  useEffect(() => {
    if (reset) {
      setTimeLeft(timeLimit)
    }
  }, [reset, timeLimit])

  useEffect(() => {
    if (!isActive || timeLeft <= 0) return

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          onTimeUp()
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [isActive, timeLeft, onTimeUp])

  const percentage = (timeLeft / timeLimit) * 100

  return (
    <div className="w-full h-2 bg-gray-600 rounded-full overflow-hidden">
      <div
        className="h-full bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-1000 ease-linear"
        style={{ width: `${percentage}%` }}
      />
    </div>
  )
}
