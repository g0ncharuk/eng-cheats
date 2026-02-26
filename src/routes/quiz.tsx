import { useState } from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'
import { quizQuestions, ALL_TENSE_NAMES, TENSE_GROUPS } from '../data/quiz'
import type { QuizQuestion as QuizQuestionType } from '../data/quiz'
import { QuizSetup } from '../components/quiz/QuizSetup'
import { QuizProgress } from '../components/quiz/QuizProgress'
import { QuizQuestion } from '../components/quiz/QuizQuestion'
import { QuizResult } from '../components/quiz/QuizResult'
import { useQuizKeyboard } from '../hooks/useQuizKeyboard'

export const Route = createFileRoute('/quiz')({
  component: QuizPage,
})

function shuffle<T>(array: T[]): T[] {
  const arr = [...array]
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

type QuizPhase = 'setup' | 'playing' | 'result'

function QuizPage() {
  const [phase, setPhase] = useState<QuizPhase>('setup')
  const [selectedTenses, setSelectedTenses] = useState<string[]>([...ALL_TENSE_NAMES])
  const [questions, setQuestions] = useState<QuizQuestionType[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [correctCount, setCorrectCount] = useState(0)
  const [visible, setVisible] = useState(true)

  function handleToggleTense(tense: string) {
    setSelectedTenses(prev =>
      prev.includes(tense)
        ? prev.filter(t => t !== tense)
        : [...prev, tense]
    )
  }

  function handleSelectGroup(group: 'all' | 'present' | 'past' | 'future') {
    if (group === 'all') {
      setSelectedTenses([...ALL_TENSE_NAMES])
    } else {
      setSelectedTenses([...TENSE_GROUPS[group]])
    }
  }

  function handleStart() {
    const filtered = quizQuestions.filter(q => selectedTenses.includes(q.tense))
    const session = shuffle(filtered).slice(0, 20)
    setQuestions(session)
    setCurrentIndex(0)
    setSelectedAnswer(null)
    setCorrectCount(0)
    setVisible(true)
    setPhase('playing')
  }

  function handleAnswer(index: number) {
    if (selectedAnswer !== null) return
    setSelectedAnswer(index)
    if (index === questions[currentIndex].correctIndex) {
      setCorrectCount(prev => prev + 1)
    }
  }

  function handleNext() {
    if (currentIndex + 1 >= questions.length) {
      setPhase('result')
      return
    }
    setVisible(false)
    setTimeout(() => {
      setCurrentIndex(prev => prev + 1)
      setSelectedAnswer(null)
      setVisible(true)
    }, 200)
  }

  function handleRetry() {
    setPhase('setup')
  }

  const { pressedIndex } = useQuizKeyboard({
    optionCount: questions[currentIndex]?.options.length ?? 4,
    onSelect: handleAnswer,
    onNext: handleNext,
    isAnswered: selectedAnswer !== null,
    isVisible: visible,
    enabled: phase === 'playing',
  })

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-4">
        <Link to="/" search={{ filter: 'all' }} className="text-slate-500 text-sm hover:text-slate-300 transition-colors">
          {'\u2190'} Назад до шпаргалки
        </Link>
      </div>

      <h1 className="text-center text-2xl font-bold mb-6 bg-gradient-to-br from-sky-400 to-indigo-400 bg-clip-text text-transparent">
        {'\u{1F4DD}'} Тест: Англійські часи
      </h1>

      {phase === 'setup' && (
        <QuizSetup
          selectedTenses={selectedTenses}
          onToggleTense={handleToggleTense}
          onSelectGroup={handleSelectGroup}
          onStart={handleStart}
        />
      )}

      {phase === 'playing' && (
        <>
          <QuizProgress
            current={currentIndex + 1}
            total={questions.length}
            correct={correctCount}
          />
          <div className={`transition-opacity duration-200 ${visible ? 'opacity-100' : 'opacity-0'}`}>
            <QuizQuestion
              question={questions[currentIndex]}
              selectedAnswer={selectedAnswer}
              onAnswer={handleAnswer}
              pressedIndex={pressedIndex}
            />
          </div>
          {selectedAnswer !== null && (
            <div className="flex justify-center mt-6">
              <button
                onClick={handleNext}
                disabled={!visible}
                className="px-8 py-3 rounded-lg bg-sky-500 text-white font-medium text-base transition-all cursor-pointer select-none hover:bg-sky-400 disabled:opacity-40"
              >
                {currentIndex + 1 >= questions.length ? 'Результат' : 'Далі \u2192'}
              </button>
            </div>
          )}
          <p className="text-center text-slate-600 text-xs mt-4">
            1-4 {'\u2014'} вибрати відповідь {'\u00B7'} Enter {'\u2014'} далі
          </p>
        </>
      )}

      {phase === 'result' && (
        <QuizResult
          correct={correctCount}
          total={questions.length}
          onRetry={handleRetry}
        />
      )}
    </div>
  )
}
