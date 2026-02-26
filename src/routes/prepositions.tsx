import { useState } from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'
import { prepQuestions } from '../data/prepositions'
import type { Preposition, PrepCategory, PrepQuestion } from '../data/prepositions'
import { PrepCheatsheet } from '../components/prepositions/PrepCheatsheet'
import { PrepQuiz } from '../components/prepositions/PrepQuiz'
import { PrepResult } from '../components/prepositions/PrepResult'
import { useQuizKeyboard } from '../hooks/useQuizKeyboard'

export const Route = createFileRoute('/prepositions')({
  component: PrepositionsPage,
})

function shuffle<T>(array: T[]): T[] {
  const arr = [...array]
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

type Filter = 'all' | PrepCategory
type Phase = 'cheatsheet' | 'playing' | 'result'

const filters: { label: string; value: Filter }[] = [
  { label: 'Всі', value: 'all' },
  { label: 'Час', value: 'time' },
  { label: 'Місце', value: 'place' },
  { label: 'Стійкі вирази', value: 'fixed' },
]

function PrepositionsPage() {
  const [filter, setFilter] = useState<Filter>('all')
  const [phase, setPhase] = useState<Phase>('cheatsheet')
  const [questions, setQuestions] = useState<PrepQuestion[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selected, setSelected] = useState<Preposition | null>(null)
  const [correctCount, setCorrectCount] = useState(0)
  const [visible, setVisible] = useState(true)

  function handleStartQuiz() {
    const filtered = filter === 'all'
      ? prepQuestions
      : prepQuestions.filter(q => q.category === filter)
    const session = shuffle(filtered).slice(0, 20)
    setQuestions(session)
    setCurrentIndex(0)
    setSelected(null)
    setCorrectCount(0)
    setVisible(true)
    setPhase('playing')
  }

  function handleAnswer(prep: Preposition) {
    if (selected !== null) return
    setSelected(prep)
    if (prep === questions[currentIndex].correct) {
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
      setSelected(null)
      setVisible(true)
    }, 200)
  }

  function handleRetry() {
    setPhase('cheatsheet')
  }

  const prepOrder: Preposition[] = ['in', 'on', 'at']

  const { pressedIndex } = useQuizKeyboard({
    optionCount: 3,
    onSelect: (index) => handleAnswer(prepOrder[index]),
    onNext: handleNext,
    isAnswered: selected !== null,
    isVisible: visible,
    enabled: phase === 'playing',
  })

  return (
    <div className="max-w-[1100px] mx-auto">
      <div className="mb-4">
        <Link to="/" search={{ filter: 'all' }} className="text-slate-500 text-sm hover:text-slate-300 transition-colors">
          {'\u2190'} Назад до шпаргалки
        </Link>
      </div>

      <h1 className="text-center text-2xl font-bold mb-2 bg-gradient-to-br from-sky-400 via-violet-400 to-emerald-400 bg-clip-text text-transparent">
        {'\u{1F4CD}'} Прийменники IN / ON / AT
      </h1>
      <p className="text-center text-slate-400 mb-6 text-sm">
        Правила, приклади та тренажер
      </p>

      {/* Filter tabs */}
      <div className="flex gap-2 justify-center mb-6 flex-wrap">
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => setFilter(f.value)}
            className={`px-5 py-2 rounded-lg border text-sm transition-all cursor-pointer select-none ${
              filter === f.value
                ? 'bg-slate-700 text-sky-400 border-sky-400'
                : 'bg-slate-800 text-slate-400 border-slate-700 hover:border-slate-600 hover:text-slate-200'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {phase === 'cheatsheet' && (
        <>
          <PrepCheatsheet filter={filter} />

          <div className="flex justify-center">
            <button
              onClick={handleStartQuiz}
              className="px-8 py-3 rounded-lg bg-sky-500 text-white font-medium text-base transition-all cursor-pointer select-none hover:bg-sky-400"
            >
              {'\u{1F3AF}'} Почати тренажер
              {filter !== 'all' && ` (${prepQuestions.filter(q => q.category === filter).length} пит.)`}
            </button>
          </div>
        </>
      )}

      {phase === 'playing' && questions.length > 0 && (
        <>
          {/* Progress */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-slate-400 text-sm">
                Питання {currentIndex + 1}/{questions.length}
              </span>
              <span className="text-emerald-400 text-sm font-medium">
                {'\u2713'} {correctCount} правильних
              </span>
            </div>
            <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-sky-400 rounded-full transition-all duration-300"
                style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
              />
            </div>
          </div>

          <div className={`transition-opacity duration-200 max-w-2xl mx-auto ${visible ? 'opacity-100' : 'opacity-0'}`}>
            <PrepQuiz
              question={questions[currentIndex]}
              selected={selected}
              onAnswer={handleAnswer}
              pressedIndex={pressedIndex}
            />
          </div>

          {selected !== null && (
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
            1 {'\u2014'} IN {'\u00B7'} 2 {'\u2014'} ON {'\u00B7'} 3 {'\u2014'} AT {'\u00B7'} Enter {'\u2014'} далі
          </p>
        </>
      )}

      {phase === 'result' && (
        <PrepResult
          correct={correctCount}
          total={questions.length}
          onRetry={handleRetry}
        />
      )}
    </div>
  )
}
