"use client"

import { Check, X } from "lucide-react"

interface AnswerOptionProps {
  answer: string
  index: number
  isSelected: boolean
  isCorrect: boolean | null
  showResult: boolean
  onClick: () => void
  disabled: boolean
}

const colorClasses = [
  "bg-yellow-300 hover:bg-yellow-400",
  "bg-purple-200 hover:bg-purple-300",
  "bg-pink-200 hover:bg-pink-300",
  "bg-blue-200 hover:bg-blue-300",
]

export function AnswerOption({
  answer,
  index,
  isSelected,
  isCorrect,
  showResult,
  onClick,
  disabled,
}: AnswerOptionProps) {
  const baseClasses = colorClasses[index]

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        relative p-4 rounded-2xl text-left font-medium text-black transition-all duration-200
        ${baseClasses}
        ${disabled ? "cursor-not-allowed opacity-75" : "cursor-pointer transform hover:scale-105"}
        ${isSelected && showResult ? "ring-4 ring-white" : ""}
      `}
    >
      <div className="flex items-center justify-between">
        <span className="text-lg">{answer}</span>
        {showResult && isSelected && (
          <div
            className={`
            w-8 h-8 rounded-full flex items-center justify-center
            ${isCorrect ? "bg-green-500" : "bg-red-500"}
          `}
          >
            {isCorrect ? <Check className="w-5 h-5 text-white" /> : <X className="w-5 h-5 text-white" />}
          </div>
        )}
        {showResult && !isSelected && isCorrect && (
          <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
            <Check className="w-5 h-5 text-white" />
          </div>
        )}
      </div>
    </button>
  )
}
