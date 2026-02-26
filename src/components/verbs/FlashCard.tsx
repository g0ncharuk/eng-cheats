import type { IrregularVerb } from '../../data/types'

export function FlashCard({ verb, flipped, onFlip }: {
  verb: IrregularVerb
  flipped: boolean
  onFlip: () => void
}) {
  return (
    <div
      className="flip-card mx-auto cursor-pointer select-none"
      style={{ minWidth: 300, minHeight: 200 }}
      onClick={onFlip}
    >
      <div className={`flip-card-inner relative w-full h-full ${flipped ? 'flipped' : ''}`} style={{ minHeight: 200 }}>
        {/* Front */}
        <div className="flip-card-front absolute inset-0 bg-slate-800 border border-slate-700 rounded-xl p-6 flex flex-col items-center justify-center">
          <span className="text-sky-400 text-4xl font-bold mb-3">{verb.v1}</span>
          <span className="text-slate-500 text-sm">{verb.ua}</span>
          <span className="text-slate-600 text-xs mt-4">Натисни щоб перевернути</span>
        </div>
        {/* Back */}
        <div className="flip-card-back absolute inset-0 bg-slate-800 border border-slate-700 rounded-xl p-6 flex flex-col items-center justify-center">
          <span className="text-slate-500 text-sm mb-3">{verb.v1}</span>
          <div className="flex items-center gap-3 text-2xl font-bold">
            <span className="text-violet-400">{verb.v2}</span>
            <span className="text-slate-600">/</span>
            <span className="text-emerald-400">{verb.v3}</span>
          </div>
          <span className="text-slate-400 text-sm mt-3">{verb.ua}</span>
        </div>
      </div>
    </div>
  )
}
