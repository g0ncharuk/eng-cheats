import type { PhrasalVerb } from '../../data/phrasal-verbs'

export function PhrasalCard({ verb, expanded, onToggle }: {
  verb: PhrasalVerb
  expanded: boolean
  onToggle: () => void
}) {
  return (
    <div
      className={`bg-slate-800 border rounded-xl transition-all cursor-pointer ${
        expanded ? 'border-sky-400/50' : 'border-slate-700 hover:border-slate-600'
      }`}
      onClick={onToggle}
    >
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="text-sky-400 font-bold">{verb.full}</span>
          {verb.frequency === 'high' && (
            <span className="text-amber-400 text-xs">{'\u2B50'}</span>
          )}
        </div>
        <div className="flex items-center gap-2">
          <span className="text-slate-400 text-sm">{verb.meaning}</span>
          <span className={`text-slate-500 text-xs transition-transform ${expanded ? 'rotate-180' : ''}`}>
            {'\u25BC'}
          </span>
        </div>
      </div>

      {expanded && (
        <div className="px-4 pb-3 border-t border-slate-700/50 pt-2">
          {verb.examples.map((ex, i) => (
            <div key={i} className="bg-slate-900 rounded-md px-3 py-1.5 mb-1 text-sm">
              <span className="text-slate-200">{ex.en}</span>
              <span className="text-slate-500 text-xs ml-2">{ex.ua}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
