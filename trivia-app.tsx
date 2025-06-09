"use client"

import { useState } from "react"
import { TriviaQuiz } from "./components/trivia-quiz"
import { categories, getRandomizedQuestions } from "./data/questions"
import type { Question } from "./types/quiz"

export default function TriviaApp() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [questions, setQuestions] = useState<Question[]>([])
  const [finalScore, setFinalScore] = useState<number | null>(null)

  const handleCategorySelect = (categoryId: string) => {
    const randomizedQuestions = getRandomizedQuestions(categoryId, 5)
    setQuestions(randomizedQuestions)
    setSelectedCategory(categoryId)
  }

  const handleQuizComplete = (score: number) => {
    setFinalScore(score)

    // Store score for leaderboard (localStorage for now)
    const quizResult = {
      score,
      category: selectedCategory,
      date: new Date().toISOString(),
      questionsCount: questions.length,
    }

    // Save individual score
    localStorage.setItem("lastQuizScore", score.toString())

    // Save to scores history
    const existingScores = JSON.parse(localStorage.getItem("quizScores") || "[]")
    existingScores.push(quizResult)
    localStorage.setItem("quizScores", JSON.stringify(existingScores))

    console.log("Quiz completed with score:", score)
    console.log("Score saved for leaderboard:", quizResult)
  }

  const handleRestart = () => {
    setSelectedCategory(null)
    setQuestions([])
    setFinalScore(null)
  }

  // Quiz completion screen
  if (finalScore !== null) {
    const categoryName = categories.find((cat) => cat.id === selectedCategory)?.name || "Unknown"

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900 flex items-center justify-center p-6">
        <div className="text-center text-white max-w-md">
          <h1 className="text-4xl font-bold mb-4">Quiz Voltooid!</h1>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-6 border border-white/20">
            <p className="text-xl mb-2">Categorie: {categoryName}</p>
            <p className="text-3xl font-bold text-yellow-300 mb-2">{finalScore} punten</p>
            <p className="text-sm opacity-75">{questions.length} vragen beantwoord</p>
          </div>
          <button
            onClick={handleRestart}
            className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-lg text-xl font-bold transition-all duration-200 hover:scale-105"
          >
            Nieuwe Quiz Starten
          </button>
        </div>
      </div>
    )
  }

  // Quiz in progress
  if (selectedCategory && questions.length > 0) {
    return <TriviaQuiz questions={questions} onQuizComplete={handleQuizComplete} onBack={handleRestart} />
  }

  // Category selection screen
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900 flex items-center justify-center p-6">
      <div className="text-center max-w-2xl">
        <h1 className="text-white text-5xl font-bold mb-4">Trivia Quiz</h1>
        <p className="text-white/80 text-xl mb-12">Test je kennis in verschillende categorieën</p>

        <div className="grid gap-6 max-w-lg mx-auto">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategorySelect(category.id)}
              className="group bg-white/10 hover:bg-white/20 text-white p-6 rounded-xl text-left font-medium transition-all duration-200 hover:scale-105 backdrop-blur-sm border border-white/20 hover:border-white/40"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                  <p className="text-sm opacity-75">{category.questions.length} vragen beschikbaar</p>
                </div>
                <div className="text-2xl group-hover:scale-110 transition-transform">→</div>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-8 text-white/60 text-sm">
          <p>• 5 willekeurige vragen per quiz</p>
          <p>• 100 punten per correct antwoord</p>
          <p>• Streak bonus tot 1.5x multiplier</p>
        </div>
      </div>
    </div>
  )
}
