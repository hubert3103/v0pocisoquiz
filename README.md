# Trivia Quiz App - Proof of Concept

A modern, interactive trivia quiz application built with Next.js and TypeScript. This POC demonstrates a fully functional quiz component with real-time scoring, streak multipliers, and category-based question management.

## 🎯 Overview

This proof of concept showcases a comprehensive trivia quiz system with:
- **Interactive UI** with smooth animations and visual feedback
- **Real-time scoring** with streak multipliers up to 1.5x
- **Category-based questions** with randomization
- **Timer-based gameplay** with customizable time limits per question
- **Responsive design** optimized for both desktop and mobile

## ✨ Features

### Core Functionality
- ✅ **Question Display**: Bold, prominent question text with optional images
- ✅ **Timer System**: Visual progress bar that decreases over time (5-20 seconds per question)
- ✅ **Answer Selection**: Four clickable answer options with color-coded buttons
- ✅ **Progress Tracking**: Question counter (e.g., "1/5") in the top-right corner
- ✅ **Instant Feedback**: Green "Goed" overlay for correct answers, red "Fout" for incorrect
- ✅ **Scoring System**: 100 points per correct answer with streak multipliers

### Advanced Features
- 🎯 **Streak System**: Consecutive correct answers increase multiplier (max 1.5x)
- 📊 **Score Storage**: Results saved to localStorage for future leaderboard integration
- 🎲 **Question Randomization**: No duplicate questions during a single round
- 📱 **Responsive Design**: Works seamlessly on all device sizes
- 🎨 **Modern UI**: Glassmorphism effects with purple/pink gradient theme

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm

### Installation

1. **Clone or download the project files**
2. **Install dependencies**:
   \`\`\`bash
   npm install
   \`\`\`

3. **Run the development server**:
   \`\`\`bash
   npm run dev
   \`\`\`

4. **Open your browser** and navigate to `http://localhost:3000`

## 🎮 How to Use

### Starting a Quiz
1. Select a category from the main menu (ISO Standards, Networking, or Cybersecurity)
2. The quiz will start with 5 randomized questions from the selected category
3. Each question has a time limit (8-18 seconds depending on complexity)

### During the Quiz
- **Answer Selection**: Click on one of the four colored answer buttons
- **Timer**: Watch the pink progress bar decrease - answer before time runs out!
- **Feedback**: Immediate visual feedback shows if your answer was correct or incorrect
- **Scoring**: Earn 100 points per correct answer, with streak bonuses up to 1.5x

### Scoring System
- **Base Points**: 100 points per correct answer
- **Streak Multiplier**: 
  - 1st correct: 100 points (1.0x)
  - 2nd consecutive: 110 points (1.1x)
  - 3rd consecutive: 120 points (1.2x)
  - 4th consecutive: 130 points (1.3x)
  - 5th+ consecutive: 150 points (1.5x max)
- **Incorrect Answer**: 0 points, streak resets to 0

## 📁 Project Structure

\`\`\`
trivia-quiz-app/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx           # Main page component
│   └── globals.css        # Global styles
├── components/
│   ├── answer-option.tsx   # Individual answer button component
│   ├── result-banner.tsx   # Success/failure overlay
│   ├── timer-bar.tsx      # Countdown timer component
│   └── trivia-quiz.tsx    # Main quiz component
├── data/
│   └── questions.ts       # Question database and categories
├── types/
│   └── quiz.ts           # TypeScript interfaces
├── trivia-app.tsx        # Root app component
└── README.md            # This file
\`\`\`

## 🔧 Configuration

### Adding New Questions

Edit `data/questions.ts` to add questions to existing categories:

\`\`\`typescript
{
  id: "unique-id",
  question: "Your question text here?",
  image: "/path/to/image.jpg", // Optional
  answers: ["Option 1", "Option 2", "Option 3", "Option 4"],
  correctAnswer: 1, // Index of correct answer (0-3)
  timeLimit: 15, // Seconds (5-20 recommended)
  category: "category-id",
}
\`\`\`

### Creating New Categories

Add new categories to the `categories` array:

\`\`\`typescript
{
  id: "new-category",
  name: "Display Name",
  questions: [
    // Array of question objects
  ],
}
\`\`\`

### Customizing Appearance

- **Colors**: Modify answer button colors in `components/answer-option.tsx`
- **Timing**: Adjust individual question time limits in the questions data
- **Scoring**: Modify point values and multipliers in `components/trivia-quiz.tsx`

## 🎨 Design System

### Color Palette
- **Background**: Purple to pink gradient (`from-purple-900 via-purple-800 to-pink-900`)
- **Answer Buttons**: Yellow, Purple, Pink, Blue with hover effects
- **Success**: Green overlay with checkmark
- **Error**: Red overlay with X mark
- **Accent**: Pink decorative elements

### Typography
- **Questions**: Bold, large text for readability
- **Answers**: Medium weight, comfortable reading size
- **UI Elements**: Clean, modern font stack

## 💾 Data Storage

Quiz results are automatically saved to browser localStorage:

\`\`\`javascript
// Individual score
localStorage.getItem('lastQuizScore')

// Complete history
localStorage.getItem('quizScores') // JSON array of results
\`\`\`

Each result includes:
- Final score
- Category played
- Date/time completed
- Number of questions answered

## 🔮 Future Enhancements

This POC can be extended with:

- **🏆 Leaderboard System**: Display top scores and statistics
- **🔊 Audio Feedback**: Sound effects for correct/incorrect answers
- **⚡ Difficulty Levels**: Easy/Medium/Hard with different time limits
- **👥 Multiplayer Mode**: Real-time competitions
- **📝 Question Editor**: Admin interface for managing questions
- **📊 Analytics**: Detailed performance tracking
- **🌐 Backend Integration**: Database storage and user accounts

## 🛠 Technical Details

### Built With
- **Next.js 14+** - React framework with App Router
- **TypeScript** - Type safety and better developer experience
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Modern icon library

### Key Components
- **TriviaQuiz**: Main quiz logic and state management
- **AnswerOption**: Individual answer button with feedback
- **ResultBanner**: Full-screen success/failure overlay
- **TimerBar**: Animated countdown progress bar

### Performance Considerations
- Optimized re-renders with React hooks
- Efficient timer management with cleanup
- Responsive images with proper loading
- Smooth animations without layout shifts

## 📱 Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

This is a proof of concept. To extend or modify:

1. Fork the project
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is provided as-is for demonstration purposes.

---

**Note**: This is a proof of concept demonstrating the core functionality of a trivia quiz system. It showcases the component architecture, user interaction patterns, and visual design that would be used in a production application.
