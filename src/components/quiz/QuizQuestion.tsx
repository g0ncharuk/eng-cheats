import type { QuizQuestion as QuizQuestionType } from '../../data/quiz'

function getButtonClass(index: number, selectedAnswer: number | null, correctIndex: number, pressedIndex?: number | null) {
  const base = 'w-full px-5 py-3.5 rounded-lg border text-base transition-all select-none text-left'

  if (selectedAnswer === null) {
    const pressed = pressedIndex === index ? ' ring-2 ring-sky-400/50' : ''
    return `${base} bg-slate-800 text-slate-200 border-slate-700 hover:border-sky-400/50 hover:text-sky-400 cursor-pointer${pressed}`
  }

  if (index === correctIndex) {
    return `${base} bg-emerald-500/15 text-emerald-400 border-emerald-400 cursor-default`
  }

  if (index === selectedAnswer) {
    return `${base} bg-red-500/15 text-red-400 border-red-400 cursor-default`
  }

  return `${base} opacity-50 cursor-default border-slate-700 text-slate-400`
}

function renderSentence(sentence: string) {
  const parts = sentence.split('___')
  if (parts.length < 2) return <>{sentence}</>
  return (
    <>
      {parts.map((part, i) => (
        <span key={i}>
          {i > 0 && <span className="text-sky-400 font-bold mx-1">___</span>}
          {part}
        </span>
      ))}
    </>
  )
}

export function QuizQuestion({ question, selectedAnswer, onAnswer, pressedIndex }: {
  question: QuizQuestionType
  selectedAnswer: number | null
  onAnswer: (index: number) => void
  pressedIndex?: number | null
}) {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
      <p className="text-lg sm:text-xl text-slate-200 mb-6 leading-relaxed text-center">
        {renderSentence(question.sentence)}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
        {question.options.map((option, i) => (
          <button
            key={i}
            onClick={() => selectedAnswer === null && onAnswer(i)}
            className={getButtonClass(i, selectedAnswer, question.correctIndex, pressedIndex)}
          >
            {option}
          </button>
        ))}
      </div>

      {selectedAnswer !== null && (
        <div className="bg-[#162032] border-l-[3px] border-sky-400 rounded-md px-4 py-3 mt-4 text-slate-300 text-sm leading-relaxed">
          <span className="text-sky-400 font-medium">{question.tense}</span>
          {' — '}
          {question.explanation}
        </div>
      )}
    </div>
  )
}
