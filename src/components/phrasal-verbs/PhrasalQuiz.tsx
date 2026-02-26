function getButtonClass(index: number, selectedAnswer: number | null, correctIndex: number) {
  const base = 'w-full px-5 py-3.5 rounded-lg border text-base transition-all select-none text-left'

  if (selectedAnswer === null) {
    return `${base} bg-slate-800 text-slate-200 border-slate-700 hover:border-sky-400/50 hover:text-sky-400 cursor-pointer`
  }

  if (index === correctIndex) {
    return `${base} bg-emerald-500/15 text-emerald-400 border-emerald-400 cursor-default`
  }

  if (index === selectedAnswer) {
    return `${base} bg-red-500/15 text-red-400 border-red-400 cursor-default`
  }

  return `${base} opacity-50 cursor-default border-slate-700 text-slate-400`
}

export function PhrasalQuizMeaning({ phrasalVerb, options, correctIndex, selectedAnswer, onAnswer }: {
  phrasalVerb: string
  options: string[]
  correctIndex: number
  selectedAnswer: number | null
  onAnswer: (index: number) => void
}) {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
      <p className="text-center mb-2 text-slate-500 text-sm">Що означає:</p>
      <p className="text-center text-2xl font-bold text-sky-400 mb-6">{phrasalVerb}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {options.map((option, i) => (
          <button
            key={i}
            onClick={() => selectedAnswer === null && onAnswer(i)}
            className={getButtonClass(i, selectedAnswer, correctIndex)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  )
}

export function PhrasalQuizParticle({ baseVerb, meaning, options, correctIndex, selectedAnswer, onAnswer, full }: {
  baseVerb: string
  meaning: string
  options: string[]
  correctIndex: number
  selectedAnswer: number | null
  onAnswer: (index: number) => void
  full: string
}) {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
      <p className="text-center mb-1 text-slate-500 text-sm">{meaning}</p>
      <p className="text-center text-2xl font-bold mb-6">
        <span className="text-sky-400">{baseVerb}</span>
        <span className="text-slate-500 ml-2">___</span>
      </p>

      <div className="grid grid-cols-2 gap-3">
        {options.map((option, i) => (
          <button
            key={i}
            onClick={() => selectedAnswer === null && onAnswer(i)}
            className={getButtonClass(i, selectedAnswer, correctIndex)}
          >
            {option}
          </button>
        ))}
      </div>

      {selectedAnswer !== null && (
        <div className="bg-[#162032] border-l-[3px] border-sky-400 rounded-md px-4 py-3 mt-4 text-slate-300 text-sm text-center">
          <span className="text-sky-400 font-medium">{full}</span>
          {' — '}
          {meaning}
        </div>
      )}
    </div>
  )
}
