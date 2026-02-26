export type QuizMode = 'meaning' | 'particle'

const modes: { label: string; value: QuizMode; desc: string }[] = [
  { label: 'Значення', value: 'meaning', desc: 'Вгадай переклад' },
  { label: 'Частка', value: 'particle', desc: 'Вгадай частку' },
]

export function PhrasalSetup({ mode, onModeChange, onStart, filteredCount }: {
  mode: QuizMode
  onModeChange: (m: QuizMode) => void
  onStart: () => void
  filteredCount: number
}) {
  return (
    <div className="mb-8">
      <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 max-w-md mx-auto">
        <h3 className="text-center text-slate-200 font-bold mb-4">
          {'\u{1F3AF}'} Тренажер
        </h3>

        <p className="text-center text-slate-400 mb-3 text-sm">Режим:</p>
        <div className="flex gap-3 justify-center mb-5">
          {modes.map((m) => (
            <button
              key={m.value}
              onClick={() => onModeChange(m.value)}
              className={`px-5 py-2.5 rounded-lg border text-sm transition-all cursor-pointer select-none ${
                mode === m.value
                  ? 'bg-slate-700 text-sky-400 border-sky-400'
                  : 'bg-slate-800 text-slate-400 border-slate-700 hover:border-slate-600 hover:text-slate-200'
              }`}
            >
              {m.label}
              <span className="text-slate-500 text-xs block">{m.desc}</span>
            </button>
          ))}
        </div>

        <div className="flex justify-center">
          <button
            onClick={onStart}
            disabled={filteredCount === 0}
            className="px-8 py-3 rounded-lg bg-sky-500 text-white font-medium text-base transition-all cursor-pointer select-none hover:bg-sky-400 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Почати ({Math.min(filteredCount, 20)} питань)
          </button>
        </div>
      </div>
    </div>
  )
}
