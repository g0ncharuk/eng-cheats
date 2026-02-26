import { useState } from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'
import { irregularVerbs } from '../data/content'
import type { IrregularVerb, VerbDifficulty } from '../data/types'
import { VerbsSetup } from '../components/verbs/VerbsSetup'
import { VerbsProgress } from '../components/verbs/VerbsProgress'
import { FlashCard } from '../components/verbs/FlashCard'
import { VerbTest } from '../components/verbs/VerbTest'
import { VerbsResult } from '../components/verbs/VerbsResult'
import { useFlashcardKeyboard } from '../hooks/useFlashcardKeyboard'

export const Route = createFileRoute('/verbs')({
  component: VerbsPage,
})

function shuffle<T>(array: T[]): T[] {
  const arr = [...array]
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

function checkAnswer(input: string, correct: string) {
  const trimmed = input.trim().toLowerCase()
  if (!trimmed) return false
  const variants = correct.toLowerCase().split('/').map(v => v.trim())
  return variants.includes(trimmed)
}

type Phase = 'setup' | 'playing' | 'result'
type DifficultyFilter = VerbDifficulty | 'all'
type Mode = 'learn' | 'test'

function VerbsPage() {
  const [phase, setPhase] = useState<Phase>('setup')
  const [difficulty, setDifficulty] = useState<DifficultyFilter>('all')
  const [mode, setMode] = useState<Mode>('learn')
  const [verbs, setVerbs] = useState<IrregularVerb[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  // Learn mode
  const [flipped, setFlipped] = useState(false)
  const [knownCount, setKnownCount] = useState(0)

  // Test mode
  const [v2Input, setV2Input] = useState('')
  const [v3Input, setV3Input] = useState('')
  const [checked, setChecked] = useState(false)
  const [correctCount, setCorrectCount] = useState(0)
  const [streak, setStreak] = useState(0)
  const [bestStreak, setBestStreak] = useState(0)

  function handleStart() {
    const filtered = difficulty === 'all'
      ? irregularVerbs
      : irregularVerbs.filter(v => v.difficulty === difficulty)
    setVerbs(shuffle(filtered))
    setCurrentIndex(0)
    setFlipped(false)
    setKnownCount(0)
    setV2Input('')
    setV3Input('')
    setChecked(false)
    setCorrectCount(0)
    setStreak(0)
    setBestStreak(0)
    setVisible(true)
    setPhase('playing')
  }

  function goNext() {
    if (currentIndex + 1 >= verbs.length) {
      setPhase('result')
      return
    }
    setVisible(false)
    setTimeout(() => {
      setCurrentIndex(prev => prev + 1)
      setFlipped(false)
      setV2Input('')
      setV3Input('')
      setChecked(false)
      setVisible(true)
    }, 200)
  }

  // Learn handlers
  function handleFlip() {
    setFlipped(prev => !prev)
  }

  function handleKnow() {
    setKnownCount(prev => prev + 1)
    setStreak(prev => {
      const next = prev + 1
      setBestStreak(best => Math.max(best, next))
      return next
    })
    goNext()
  }

  function handleDontKnow() {
    setStreak(0)
    goNext()
  }

  // Test handlers
  function handleCheck() {
    if (checked) return
    setChecked(true)
    const v2Ok = checkAnswer(v2Input, verbs[currentIndex].v2)
    const v3Ok = checkAnswer(v3Input, verbs[currentIndex].v3)
    if (v2Ok && v3Ok) {
      setCorrectCount(prev => prev + 1)
      setStreak(prev => {
        const next = prev + 1
        setBestStreak(best => Math.max(best, next))
        return next
      })
    } else {
      setStreak(0)
    }
  }

  function handleRetry() {
    setPhase('setup')
  }

  useFlashcardKeyboard({
    mode,
    onFlip: handleFlip,
    onKnow: handleKnow,
    onDontKnow: handleDontKnow,
    flipped,
    onCheck: handleCheck,
    onNext: goNext,
    checked,
    canCheck: v2Input.trim() !== '' && v3Input.trim() !== '',
    isVisible: visible,
    enabled: phase === 'playing',
  })

  const current = verbs[currentIndex]
  const totalCorrect = mode === 'learn' ? knownCount : correctCount

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-4">
        <Link to="/" search={{ filter: 'all' }} className="text-slate-500 text-sm hover:text-slate-300 transition-colors">
          {'\u2190'} Назад до шпаргалки
        </Link>
      </div>

      <h1 className="text-center text-2xl font-bold mb-6 bg-gradient-to-br from-violet-400 to-emerald-400 bg-clip-text text-transparent">
        {'\u{1F524}'} Неправильні дієслова
      </h1>

      {phase === 'setup' && (
        <VerbsSetup
          difficulty={difficulty}
          mode={mode}
          onDifficultyChange={setDifficulty}
          onModeChange={setMode}
          onStart={handleStart}
        />
      )}

      {phase === 'playing' && current && (
        <>
          <VerbsProgress
            current={currentIndex + 1}
            total={verbs.length}
            correct={totalCorrect}
            streak={streak}
          />

          <div className={`transition-opacity duration-200 ${visible ? 'opacity-100' : 'opacity-0'}`}>
            {mode === 'learn' && (
              <>
                <FlashCard verb={current} flipped={flipped} onFlip={handleFlip} />
                {flipped && (
                  <div className="flex gap-3 justify-center mt-6">
                    <button
                      onClick={handleDontKnow}
                      className="px-6 py-3 rounded-lg bg-red-500/20 text-red-400 border border-red-400/50 font-medium text-base transition-all cursor-pointer select-none hover:bg-red-500/30"
                    >
                      Не знаю
                    </button>
                    <button
                      onClick={handleKnow}
                      className="px-6 py-3 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-400/50 font-medium text-base transition-all cursor-pointer select-none hover:bg-emerald-500/30"
                    >
                      Знаю
                    </button>
                  </div>
                )}
              </>
            )}

            {mode === 'test' && (
              <>
                <VerbTest
                  verb={current}
                  checked={checked}
                  v2Input={v2Input}
                  v3Input={v3Input}
                  onV2Change={setV2Input}
                  onV3Change={setV3Input}
                  onCheck={handleCheck}
                />
                {checked && (
                  <div className="flex justify-center mt-6">
                    <button
                      onClick={goNext}
                      disabled={!visible}
                      className="px-8 py-3 rounded-lg bg-sky-500 text-white font-medium text-base transition-all cursor-pointer select-none hover:bg-sky-400 disabled:opacity-40"
                    >
                      {currentIndex + 1 >= verbs.length ? 'Результат' : 'Далі \u2192'}
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
          <p className="text-center text-slate-600 text-xs mt-4">
            {mode === 'learn'
              ? <>Space {'\u2014'} перевернути {'\u00B7'} {'\u2192'} Знаю {'\u00B7'} {'\u2190'} Не знаю</>
              : <>Tab {'\u2014'} між полями {'\u00B7'} Enter {'\u2014'} перевірити/далі</>
            }
          </p>
        </>
      )}

      {phase === 'result' && (
        <VerbsResult
          correct={totalCorrect}
          total={verbs.length}
          bestStreak={bestStreak}
          onRetry={handleRetry}
        />
      )}
    </div>
  )
}
