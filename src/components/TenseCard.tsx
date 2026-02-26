import type { TenseData } from '../data/types'
import { Highlighted } from './Highlighted'

const iconColors: Record<TenseData['time'], string> = {
  past: 'bg-violet-500/13 text-violet-400',
  present: 'bg-emerald-600/13 text-emerald-400',
  future: 'bg-sky-600/13 text-sky-400',
}

export function TenseCard({ tense }: { tense: TenseData }) {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-xl p-5 transition-colors hover:border-slate-600">
      {/* Header */}
      <div className="flex items-center gap-2.5 mb-3">
        <div
          className={`w-9 h-9 rounded-lg flex items-center justify-center text-lg shrink-0 ${iconColors[tense.time]}`}
        >
          {tense.icon}
        </div>
        <div className="font-bold text-[1.05rem]">
          {tense.name}
          <small className="font-normal text-slate-500 text-xs block">{tense.nameUa}</small>
        </div>
      </div>

      {/* Formula */}
      <div className="bg-slate-900 rounded-lg px-3.5 py-2.5 my-2.5 font-mono text-sm text-sky-400 border-l-[3px] border-sky-400">
        <span>✅ {tense.formula.positive}</span>
        <br />
        <span className="text-red-400">❌ {tense.formula.negative}</span>
        <br />
        <span className="text-amber-400">❓ {tense.formula.question}</span>
      </div>

      {/* Explain */}
      <div className="text-slate-300 text-sm my-2 px-3 py-2 bg-[#162032] rounded-md border-l-[3px] border-slate-500">
        <span className="text-amber-400 font-medium">
          {'\u{1F1FA}\u{1F1E6}'} Аналог:
        </span>{' '}
        {tense.explain.analogy}
        <br />
        {tense.explain.description}
      </div>

      {/* Usage */}
      <div className="text-slate-400 text-sm my-2">
        <strong className="text-slate-200 font-semibold">Коли:</strong>{' '}
        {tense.usage}
      </div>

      {/* Examples */}
      <div className="bg-slate-900 rounded-md px-3 py-2 mt-2 text-sm text-slate-300">
        {tense.examples.map((ex, i) => (
          <div key={i}>
            <Highlighted text={ex.en} />{' '}
            <span className="text-slate-500 text-xs">— {ex.ua}</span>
          </div>
        ))}
      </div>

      {/* Mistakes */}
      {tense.mistakes.length > 0 && (
        <div className="bg-[#1c1017] border-l-[3px] border-red-400 rounded-md px-3 py-2 mt-2 text-[0.82rem] text-red-300">
          {tense.mistakes.map((m, i) => (
            <div key={i}>
              {m.wrong && (
                <>
                  ⚠️{' '}
                  <span className="line-through opacity-60">{m.wrong}</span> →{' '}
                  <span className="text-emerald-400 font-semibold">{m.right}</span>
                  {m.note && ` (${m.note})`}
                </>
              )}
              {!m.wrong && m.right && (
                <>
                  <span className="text-emerald-400 font-semibold">{m.right}</span>
                  {m.note && ` (${m.note})`}
                </>
              )}
              {!m.wrong && !m.right && m.note && <>{m.note}</>}
            </div>
          ))}
        </div>
      )}

      {/* Markers */}
      <div className="flex flex-wrap gap-1 mt-2.5">
        {tense.markers.map((m) => (
          <span key={m} className="bg-slate-700 text-slate-400 px-2 py-0.5 rounded text-xs">
            {m}
          </span>
        ))}
      </div>
    </div>
  )
}
