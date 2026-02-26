import { irregularVerbs } from '../../data/content'
import type { VerbDifficulty } from '../../data/types'

type DifficultyFilter = VerbDifficulty | 'all'
type Mode = 'learn' | 'test'

const difficulties: { label: string; value: DifficultyFilter }[] = [
  { label: 'Всі', value: 'all' },
  { label: 'Basic', value: 'basic' },
  { label: 'Intermediate', value: 'intermediate' },
  { label: 'Advanced', value: 'advanced' },
]

const modes: { label: string; value: Mode; icon: string }[] = [
  { label: 'Вивчення', value: 'learn', icon: '\u{1F4D6}' },
  { label: 'Тест', value: 'test', icon: '\u{270F}\u{FE0F}' },
]

const counts = {
  all: irregularVerbs.length,
  basic: irregularVerbs.filter(v => v.difficulty === 'basic').length,
  intermediate: irregularVerbs.filter(v => v.difficulty === 'intermediate').length,
  advanced: irregularVerbs.filter(v => v.difficulty === 'advanced').length,
}

export function VerbsSetup({ difficulty, mode, onDifficultyChange, onModeChange, onStart }: {
  difficulty: DifficultyFilter
  mode: Mode
  onDifficultyChange: (d: DifficultyFilter) => void
  onModeChange: (m: Mode) => void
  onStart: () => void
}) {
  return (
    <div>
      <p className="text-center text-slate-400 mb-5 text-sm">
        Обери рівень складності:
      </p>

      <div className="flex gap-2 justify-center mb-6 flex-wrap">
        {difficulties.map((d) => (
          <button
            key={d.value}
            onClick={() => onDifficultyChange(d.value)}
            className={`px-5 py-2 rounded-lg border text-sm transition-all cursor-pointer select-none ${
              difficulty === d.value
                ? 'bg-slate-700 text-sky-400 border-sky-400'
                : 'bg-slate-800 text-slate-400 border-slate-700 hover:border-slate-600 hover:text-slate-200'
            }`}
          >
            {d.label}
            <span className="text-slate-500 text-xs ml-1.5">({counts[d.value]})</span>
          </button>
        ))}
      </div>

      <p className="text-center text-slate-400 mb-3 text-sm">
        Режим:
      </p>

      <div className="flex gap-3 justify-center mb-6">
        {modes.map((m) => (
          <button
            key={m.value}
            onClick={() => onModeChange(m.value)}
            className={`px-6 py-3 rounded-lg border text-sm transition-all cursor-pointer select-none ${
              mode === m.value
                ? 'bg-slate-700 text-sky-400 border-sky-400'
                : 'bg-slate-800 text-slate-400 border-slate-700 hover:border-slate-600 hover:text-slate-200'
            }`}
          >
            {m.icon} {m.label}
          </button>
        ))}
      </div>

      <div className="flex justify-center">
        <button
          onClick={onStart}
          className="px-8 py-3 rounded-lg bg-sky-500 text-white font-medium text-base transition-all cursor-pointer select-none hover:bg-sky-400"
        >
          Почати ({counts[difficulty]} дієслів)
        </button>
      </div>
    </div>
  )
}
