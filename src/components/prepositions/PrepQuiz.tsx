import type { PrepQuestion, Preposition } from '../../data/prepositions'

const prepButtonColors: Record<Preposition, { base: string; correct: string; wrong: string }> = {
  in: {
    base: 'bg-sky-500/10 text-sky-400 border-sky-400/50 hover:bg-sky-500/20 hover:border-sky-400',
    correct: 'bg-sky-500/25 text-sky-400 border-sky-400 ring-2 ring-sky-400/50',
    wrong: 'bg-red-500/15 text-red-400 border-red-400',
  },
  on: {
    base: 'bg-violet-500/10 text-violet-400 border-violet-400/50 hover:bg-violet-500/20 hover:border-violet-400',
    correct: 'bg-violet-500/25 text-violet-400 border-violet-400 ring-2 ring-violet-400/50',
    wrong: 'bg-red-500/15 text-red-400 border-red-400',
  },
  at: {
    base: 'bg-emerald-500/10 text-emerald-400 border-emerald-400/50 hover:bg-emerald-500/20 hover:border-emerald-400',
    correct: 'bg-emerald-500/25 text-emerald-400 border-emerald-400 ring-2 ring-emerald-400/50',
    wrong: 'bg-red-500/15 text-red-400 border-red-400',
  },
}

const preps: Preposition[] = ['in', 'on', 'at']

function getButtonClass(prep: Preposition, selected: Preposition | null, correct: Preposition, pressedIndex?: number | null) {
  const base = 'flex-1 px-6 py-4 rounded-lg border text-xl font-bold transition-all select-none uppercase'
  const colors = prepButtonColors[prep]
  const prepIdx = preps.indexOf(prep)

  if (selected === null) {
    const pressed = pressedIndex === prepIdx ? ' ring-2 ring-sky-400/50' : ''
    return `${base} cursor-pointer ${colors.base}${pressed}`
  }

  if (prep === correct) {
    return `${base} cursor-default ${colors.correct}`
  }

  if (prep === selected) {
    return `${base} cursor-default ${colors.wrong}`
  }

  return `${base} cursor-default opacity-30 border-slate-700 text-slate-500`
}

function renderSentence(sentence: string) {
  const parts = sentence.split('___')
  if (parts.length < 2) return <>{sentence}</>
  return (
    <>
      {parts[0]}
      <span className="text-sky-400 font-bold mx-1">___</span>
      {parts[1]}
    </>
  )
}

export function PrepQuiz({ question, selected, onAnswer, pressedIndex }: {
  question: PrepQuestion
  selected: Preposition | null
  onAnswer: (prep: Preposition) => void
  pressedIndex?: number | null
}) {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
      <p className="text-lg sm:text-xl text-slate-200 mb-6 leading-relaxed text-center">
        {renderSentence(question.sentence)}
      </p>

      <div className="flex gap-3 mb-4">
        {preps.map((prep, i) => (
          <button
            key={prep}
            onClick={() => selected === null && onAnswer(prep)}
            className={getButtonClass(prep, selected, question.correct, pressedIndex)}
          >
            <span className="text-[0.6rem] opacity-40 block font-mono mb-0.5">{i + 1}</span>
            {prep}
          </button>
        ))}
      </div>

      {selected !== null && (
        <div className="bg-[#162032] border-l-[3px] border-sky-400 rounded-md px-4 py-3 mt-4 text-slate-300 text-sm leading-relaxed">
          {question.explanation}
        </div>
      )}
    </div>
  )
}
