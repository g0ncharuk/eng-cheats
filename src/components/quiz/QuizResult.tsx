import { Link } from '@tanstack/react-router'

function getEmoji(percent: number) {
  if (percent >= 90) return '\u{1F389}'
  if (percent >= 70) return '\u{1F44D}'
  if (percent >= 50) return '\u{1F4DA}'
  return '\u{1F4AA}'
}

function getScoreColor(percent: number) {
  if (percent >= 80) return 'text-emerald-400'
  if (percent >= 60) return 'text-sky-400'
  if (percent >= 40) return 'text-amber-400'
  return 'text-red-400'
}

function getMessage(percent: number) {
  if (percent >= 90) return 'Чудовий результат! Ти справжній знавець часів.'
  if (percent >= 70) return 'Добре! Ще трохи практики і буде ідеально.'
  if (percent >= 50) return 'Непогано, але є куди рости. Спробуй ще раз!'
  return 'Не здавайся! Переглянь шпаргалку і спробуй знову.'
}

export function QuizResult({ correct, total, onRetry }: {
  correct: number
  total: number
  onRetry: () => void
}) {
  const percent = Math.round((correct / total) * 100)

  return (
    <div className="max-w-md mx-auto text-center">
      <div className="bg-slate-800 border border-slate-700 rounded-xl p-8">
        <div className="text-5xl mb-4">{getEmoji(percent)}</div>
        <div className={`text-3xl font-bold mb-2 ${getScoreColor(percent)}`}>
          {correct}/{total} правильних
        </div>
        <p className="text-slate-400 text-sm mb-6">
          {getMessage(percent)}
        </p>
        <button
          onClick={onRetry}
          className="px-8 py-3 rounded-lg bg-sky-500 text-white font-medium text-base transition-all cursor-pointer select-none hover:bg-sky-400"
        >
          Спробувати ще раз
        </button>
        <Link
          to="/"
          search={{ filter: 'all' }}
          className="mt-3 block text-slate-500 text-sm hover:text-slate-300 transition-colors"
        >
          {'\u2190'} На головну
        </Link>
      </div>
    </div>
  )
}
