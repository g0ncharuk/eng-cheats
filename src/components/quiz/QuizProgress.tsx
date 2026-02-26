export function QuizProgress({ current, total, correct }: {
  current: number
  total: number
  correct: number
}) {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-slate-400 text-sm">
          Питання {current}/{total}
        </span>
        <span className="text-emerald-400 text-sm font-medium">
          {'\u2713'} {correct} правильних
        </span>
      </div>
      <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-sky-400 rounded-full transition-all duration-300"
          style={{ width: `${(current / total) * 100}%` }}
        />
      </div>
    </div>
  )
}
