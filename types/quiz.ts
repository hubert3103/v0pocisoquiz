export interface Question {
  id: string
  question: string
  image?: string
  answers: string[]
  correctAnswer: number
  timeLimit: number // in seconds
  category: string
}

export interface QuizState {
  currentQuestionIndex: number
  score: number
  streak: number
  timeLeft: number
  selectedAnswer: number | null
  showResult: boolean
  isCorrect: boolean
  questions: Question[]
}

export interface Category {
  id: string
  name: string
  questions: Question[]
}
