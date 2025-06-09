"use client"

import { useState, useCallback } from "react"
import { ArrowLeft } from "lucide-react"
import type { Question } from "../types/quiz"
import { TimerBar } from "./timer-bar"
import { AnswerOption } from "./answer-option"
import { ResultBanner } from "./result-banner"

interface TriviaQuizProps {
  questions: Question[]
  onQuizComplete: (finalScore: number) => void
  onBack: () => void
}

export function TriviaQuiz({ questions, onQuizComplete, onBack }: TriviaQuizProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [streak, setStreak] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const [timerReset, setTimerReset] = useState(false)

  const currentQuestion = questions[currentQuestionIndex]
  const totalQuestions = questions.length

  const calculatePoints = useCallback((basePoints: number, currentStreak: number): number => {
    const multiplier = Math.min(1 + currentStreak * 0.1, 1.5)
    return Math.round(basePoints * multiplier)
  }, [])

  const handleAnswerSelect = useCallback(
    (answerIndex: number) => {
      if (showResult) return

      setSelectedAnswer(answerIndex)
      const correct = answerIndex === currentQuestion.correctAnswer
      setIsCorrect(correct)
      setShowResult(true)

      if (correct) {
        const newStreak = streak + 1
        const points = calculatePoints(100, streak)
        setStreak(newStreak)
        setScore((prev) => prev + points)
      } else {
        setStreak(0)
      }

      // Show result for 2 seconds then move to next question
      setTimeout(() => {
        if (currentQuestionIndex < totalQuestions - 1) {
          setCurrentQuestionIndex((prev) => prev + 1)
          setSelectedAnswer(null)
          setShowResult(false)
          setTimerReset((prev) => !prev)
        } else {
          onQuizComplete(score + (correct ? calculatePoints(100, streak) : 0))
        }
      }, 2000)
    },
    [currentQuestion, showResult, streak, score, currentQuestionIndex, totalQuestions, onQuizComplete, calculatePoints],
  )

  const handleTimeUp = useCallback(() => {
    if (!showResult) {
      setSelectedAnswer(null)
      setIsCorrect(false)
      setShowResult(true)
      setStreak(0)

      // Show result for 2 seconds then move to next question
      setTimeout(() => {
        if (currentQuestionIndex < totalQuestions - 1) {
          setCurrentQuestionIndex((prev) => prev + 1)
          setSelectedAnswer(null)
          setShowResult(false)
          setTimerReset((prev) => !prev)
        } else {
          onQuizComplete(score)
        }
      }, 2000)
    }
  }, [showResult, currentQuestionIndex, totalQuestions, onQuizComplete, score])

  if (!currentQuestion) {
    return <div>Loading...</div>
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900 relative overflow-hidden">
      {/* Decorative curved lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-96 border-4 border-pink-500 rounded-full opacity-30" />
        <div className="absolute top-1/2 -left-32 w-64 h-64 border-4 border-pink-500 rounded-full opacity-20" />
        <div className="absolute -bottom-20 right-1/4 w-80 h-80 border-4 border-pink-500 rounded-full opacity-25" />
      </div>

      <div className="relative z-10 p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button onClick={onBack} className="text-white hover:text-pink-300 transition-colors">
            <ArrowLeft className="w-8 h-8" />
          </button>
          <div className="text-white text-2xl font-bold">
            {currentQuestionIndex + 1}/{totalQuestions}
          </div>
        </div>

        {/* Score and Streak */}
        <div className="flex justify-between items-center mb-6 text-white">
          <div className="text-xl">Score: {score}</div>
          {streak > 0 && (
            <div className="text-lg bg-yellow-500 px-3 py-1 rounded-full text-black font-bold">
              Streak: {streak}x (×{Math.min(1 + streak * 0.1, 1.5).toFixed(1)})
            </div>
          )}
        </div>

        {/* Question */}
        <div className="text-center mb-8">
          <h1 className="text-white text-2xl md:text-3xl font-bold mb-6 leading-tight">{currentQuestion.question}</h1>

          {/* Question Image */}
          {currentQuestion.image && (
            <div className="mb-6 flex justify-center">
              <img
                src={currentQuestion.image || "/placeholder.svg"}
                alt="Question illustration"
                className="max-w-full h-auto rounded-lg shadow-lg max-h-64 object-contain"
              />
            </div>
          )}

          {/* Timer Bar */}
          <div className="mb-8">
            <TimerBar
              timeLimit={currentQuestion.timeLimit}
              onTimeUp={handleTimeUp}
              isActive={!showResult}
              reset={timerReset}
            />
          </div>
        </div>

        {/* Answer Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {currentQuestion.answers.map((answer, index) => (
            <AnswerOption
              key={index}
              answer={answer}
              index={index}
              isSelected={selectedAnswer === index}
              isCorrect={showResult ? index === currentQuestion.correctAnswer : null}
              showResult={showResult}
              onClick={() => handleAnswerSelect(index)}
              disabled={showResult}
            />
          ))}
        </div>
      </div>

      {/* Result Banner */}
      <ResultBanner isCorrect={isCorrect} points={isCorrect ? calculatePoints(100, streak) : 0} show={showResult} />
    </div>
  )
}
