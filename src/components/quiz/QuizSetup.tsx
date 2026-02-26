import { TENSE_GROUPS, ALL_TENSE_NAMES, quizQuestions } from '../../data/quiz'

type Group = 'all' | 'present' | 'past' | 'future'

const groups: { label: string; value: Group }[] = [
  { label: 'Всі', value: 'all' },
  { label: 'Present', value: 'present' },
  { label: 'Past', value: 'past' },
  { label: 'Future', value: 'future' },
]

const questionCounts = ALL_TENSE_NAMES.reduce((acc, tense) => {
  acc[tense] = quizQuestions.filter(q => q.tense === tense).length
  return acc
}, {} as Record<string, number>)

function isGroupActive(group: Group, selectedTenses: string[]) {
  if (group === 'all') {
    return selectedTenses.length === ALL_TENSE_NAMES.length
  }
  const groupTenses = TENSE_GROUPS[group]
  return groupTenses.every(t => selectedTenses.includes(t)) &&
    selectedTenses.every(t => (groupTenses as readonly string[]).includes(t))
}

export function QuizSetup({ selectedTenses, onToggleTense, onSelectGroup, onStart }: {
  selectedTenses: string[]
  onToggleTense: (tense: string) => void
  onSelectGroup: (group: Group) => void
  onStart: () => void
}) {
  const totalAvailable = quizQuestions.filter(q => selectedTenses.includes(q.tense)).length

  return (
    <div>
      <p className="text-center text-slate-400 mb-5 text-sm">
        Обери які часи хочеш тренувати:
      </p>

      <div className="flex gap-2 justify-center mb-5 flex-wrap">
        {groups.map((g) => (
          <button
            key={g.value}
            onClick={() => onSelectGroup(g.value)}
            className={`px-5 py-2 rounded-lg border text-sm transition-all cursor-pointer select-none ${
              isGroupActive(g.value, selectedTenses)
                ? 'bg-slate-700 text-sky-400 border-sky-400'
                : 'bg-slate-800 text-slate-400 border-slate-700 hover:border-slate-600 hover:text-slate-200'
            }`}
          >
            {g.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
        {ALL_TENSE_NAMES.map((tense) => (
          <label
            key={tense}
            className={`flex items-center gap-3 rounded-lg px-4 py-3 cursor-pointer transition-all border ${
              selectedTenses.includes(tense)
                ? 'bg-slate-800 border-sky-400/50'
                : 'bg-slate-800 border-slate-700 hover:border-slate-600'
            }`}
          >
            <input
              type="checkbox"
              checked={selectedTenses.includes(tense)}
              onChange={() => onToggleTense(tense)}
              className="accent-sky-400 w-4 h-4 shrink-0"
            />
            <span className="text-slate-200 text-sm">{tense}</span>
            <span className="text-slate-500 text-xs ml-auto">{questionCounts[tense]} пит.</span>
          </label>
        ))}
      </div>

      <div className="flex flex-col items-center gap-2">
        <button
          onClick={onStart}
          disabled={totalAvailable === 0}
          className="px-8 py-3 rounded-lg bg-sky-500 text-white font-medium text-base transition-all cursor-pointer select-none hover:bg-sky-400 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Почати ({Math.min(totalAvailable, 20)} питань)
        </button>
        {totalAvailable === 0 && (
          <p className="text-slate-500 text-sm">Обери хоча б один час</p>
        )}
      </div>
    </div>
  )
}
