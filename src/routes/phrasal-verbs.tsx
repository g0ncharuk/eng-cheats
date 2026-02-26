import { useState, useMemo } from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'
import {
  phrasalVerbs, BASE_VERBS,
  generateMeaningQuestions, generateParticleQuestions,
} from '../data/phrasal-verbs'
import type { MeaningQuestion, ParticleQuestion } from '../data/phrasal-verbs'
import { PhrasalDirectory } from '../components/phrasal-verbs/PhrasalDirectory'
import { PhrasalQuizMeaning, PhrasalQuizParticle } from '../components/phrasal-verbs/PhrasalQuiz'
import { PhrasalResult } from '../components/phrasal-verbs/PhrasalResult'
import { PhrasalSetup } from '../components/phrasal-verbs/PhrasalSetup'
import type { QuizMode } from '../components/phrasal-verbs/PhrasalSetup'
import { useQuizKeyboard } from '../hooks/useQuizKeyboard'

export const Route = createFileRoute('/phrasal-verbs')({
  component: PhrasalVerbsPage,
})

function shuffle<T>(array: T[]): T[] {
  const arr = [...array]
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

const topBaseVerbs = BASE_VERBS.slice(0, 10)

type Phase = 'directory' | 'playing' | 'result'

function PhrasalVerbsPage() {
  const [baseFilter, setBaseFilter] = useState<string>('all')
  const [search, setSearch] = useState('')
  const [phase, setPhase] = useState<Phase>('directory')
  const [quizMode, setQuizMode] = useState<QuizMode>('meaning')

  // Quiz state
  const [meaningQs, setMeaningQs] = useState<MeaningQuestion[]>([])
  const [particleQs, setParticleQs] = useState<ParticleQuestion[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [correctCount, setCorrectCount] = useState(0)
  const [visible, setVisible] = useState(true)

  const filteredVerbs = useMemo(() => {
    let result = phrasalVerbs
    if (baseFilter !== 'all') {
      result = result.filter(v => v.baseVerb === baseFilter)
    }
    if (search.trim()) {
      const q = search.trim().toLowerCase()
      result = result.filter(v =>
        v.full.toLowerCase().includes(q) ||
        v.meaning.toLowerCase().includes(q)
      )
    }
    return result
  }, [baseFilter, search])

  const totalQuestions = quizMode === 'meaning'
    ? meaningQs.length
    : particleQs.length

  const currentQ = quizMode === 'meaning'
    ? meaningQs[currentIndex]
    : particleQs[currentIndex]

  function handleStart() {
    const source = baseFilter === 'all'
      ? phrasalVerbs
      : phrasalVerbs.filter(v => v.baseVerb === baseFilter)

    if (quizMode === 'meaning') {
      setMeaningQs(shuffle(generateMeaningQuestions(source)).slice(0, 20))
    } else {
      setParticleQs(shuffle(generateParticleQuestions(source)).slice(0, 20))
    }
    setCurrentIndex(0)
    setSelectedAnswer(null)
    setCorrectCount(0)
    setVisible(true)
    setPhase('playing')
  }

  function handleAnswer(index: number) {
    if (selectedAnswer !== null) return
    setSelectedAnswer(index)
    const correct = quizMode === 'meaning'
      ? meaningQs[currentIndex].correctIndex
      : particleQs[currentIndex].correctIndex
    if (index === correct) {
      setCorrectCount(prev => prev + 1)
    }
  }

  function handleNext() {
    if (currentIndex + 1 >= totalQuestions) {
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
    setPhase('directory')
  }

  const { pressedIndex } = useQuizKeyboard({
    optionCount: currentQ?.options.length ?? 4,
    onSelect: handleAnswer,
    onNext: handleNext,
    isAnswered: selectedAnswer !== null,
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

      <h1 className="text-center text-2xl font-bold mb-2 bg-gradient-to-br from-orange-400 to-rose-400 bg-clip-text text-transparent">
        {'\u{1F525}'} Phrasal Verbs
      </h1>
      <p className="text-center text-slate-400 mb-6 text-sm">
        Довідник + тренажер фразових дієслів
      </p>

      {/* Base verb filter tabs */}
      <div className="flex gap-1.5 justify-center mb-4 flex-wrap">
        <button
          onClick={() => setBaseFilter('all')}
          className={`px-4 py-1.5 rounded-lg border text-sm transition-all cursor-pointer select-none ${
            baseFilter === 'all'
              ? 'bg-slate-700 text-sky-400 border-sky-400'
              : 'bg-slate-800 text-slate-400 border-slate-700 hover:border-slate-600 hover:text-slate-200'
          }`}
        >
          All
        </button>
        {topBaseVerbs.map((bv) => (
          <button
            key={bv}
            onClick={() => setBaseFilter(bv)}
            className={`px-4 py-1.5 rounded-lg border text-sm transition-all cursor-pointer select-none ${
              baseFilter === bv
                ? 'bg-slate-700 text-sky-400 border-sky-400'
                : 'bg-slate-800 text-slate-400 border-slate-700 hover:border-slate-600 hover:text-slate-200'
            }`}
          >
            {bv}
          </button>
        ))}
      </div>

      {phase === 'directory' && (
        <>
          {/* Search */}
          <div className="max-w-md mx-auto mb-5">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Шукати phrasal verb або значення..."
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-slate-200 placeholder:text-slate-600 focus:border-sky-400 focus:outline-none transition-colors"
            />
          </div>

          <p className="text-center text-slate-500 text-xs mb-3">
            {'\u2B50'} {'\u2014'} часто вживається
          </p>

          {filteredVerbs.length > 0 ? (
            <PhrasalDirectory verbs={filteredVerbs} />
          ) : (
            <p className="text-center text-slate-500 text-sm mb-8">Нічого не знайдено</p>
          )}

          <PhrasalSetup
            mode={quizMode}
            onModeChange={setQuizMode}
            onStart={handleStart}
            filteredCount={filteredVerbs.length}
          />
        </>
      )}

      {phase === 'playing' && currentQ && (
        <>
          {/* Progress */}
          <div className="mb-6 max-w-2xl mx-auto">
            <div className="flex justify-between items-center mb-2">
              <span className="text-slate-400 text-sm">
                Питання {currentIndex + 1}/{totalQuestions}
              </span>
              <span className="text-emerald-400 text-sm font-medium">
                {'\u2713'} {correctCount} правильних
              </span>
            </div>
            <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-sky-400 rounded-full transition-all duration-300"
                style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
              />
            </div>
          </div>

          <div className={`transition-opacity duration-200 max-w-2xl mx-auto ${visible ? 'opacity-100' : 'opacity-0'}`}>
            {quizMode === 'meaning' && 'phrasalVerb' in currentQ && (
              <PhrasalQuizMeaning
                phrasalVerb={(currentQ as MeaningQuestion).phrasalVerb}
                options={currentQ.options}
                correctIndex={currentQ.correctIndex}
                selectedAnswer={selectedAnswer}
                onAnswer={handleAnswer}
                pressedIndex={pressedIndex}
              />
            )}
            {quizMode === 'particle' && 'baseVerb' in currentQ && (
              <PhrasalQuizParticle
                baseVerb={(currentQ as ParticleQuestion).baseVerb}
                meaning={(currentQ as ParticleQuestion).meaning}
                options={currentQ.options}
                correctIndex={currentQ.correctIndex}
                selectedAnswer={selectedAnswer}
                onAnswer={handleAnswer}
                full={(currentQ as ParticleQuestion).full}
                pressedIndex={pressedIndex}
              />
            )}
          </div>

          {selectedAnswer !== null && (
            <div className="flex justify-center mt-6">
              <button
                onClick={handleNext}
                disabled={!visible}
                className="px-8 py-3 rounded-lg bg-sky-500 text-white font-medium text-base transition-all cursor-pointer select-none hover:bg-sky-400 disabled:opacity-40"
              >
                {currentIndex + 1 >= totalQuestions ? 'Результат' : 'Далі \u2192'}
              </button>
            </div>
          )}
          <p className="text-center text-slate-600 text-xs mt-4">
            1-4 {'\u2014'} вибрати відповідь {'\u00B7'} Enter {'\u2014'} далі
          </p>
        </>
      )}

      {phase === 'result' && (
        <PhrasalResult
          correct={correctCount}
          total={totalQuestions}
          onRetry={handleRetry}
        />
      )}
    </div>
  )
}
