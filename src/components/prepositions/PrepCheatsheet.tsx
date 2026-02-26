import { cheatsheet } from '../../data/prepositions'
import type { PrepCategory } from '../../data/prepositions'

const prepColors: Record<string, { card: string; heading: string; accent: string }> = {
  in: { card: 'border-sky-400/30', heading: 'text-sky-400', accent: 'text-sky-300' },
  on: { card: 'border-violet-400/30', heading: 'text-violet-400', accent: 'text-violet-300' },
  at: { card: 'border-emerald-400/30', heading: 'text-emerald-400', accent: 'text-emerald-300' },
}

export function PrepCheatsheet({ filter }: { filter: 'all' | PrepCategory }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      {cheatsheet.map((item) => {
        const colors = prepColors[item.prep]
        const sections = filter === 'all'
          ? item.sections
          : item.sections.filter(s => s.category === filter)

        if (sections.length === 0) return null

        return (
          <div
            key={item.prep}
            className={`bg-slate-800 border rounded-xl p-5 ${colors.card}`}
          >
            <div className="mb-3">
              <span className={`text-2xl font-bold ${colors.heading}`}>{item.label}</span>
              <span className="text-slate-500 text-sm ml-2">{item.hint}</span>
            </div>

            {sections.map((section) => (
              <div key={section.category} className="mb-3 last:mb-0">
                <div className="text-slate-400 text-xs font-medium uppercase tracking-wider mb-1.5">
                  {section.categoryLabel}
                </div>
                {section.rules.map((rule) => (
                  <div key={rule.example} className="bg-slate-900 rounded-md px-3 py-1.5 mb-1 text-sm">
                    <span className={colors.accent}>{rule.example}</span>
                    <span className="text-slate-500 text-xs ml-2">{rule.ua}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )
      })}
    </div>
  )
}
