import { useNavigate } from '@tanstack/react-router'
import type { FilterType } from '../data/types'

const tabs: { label: string; value: FilterType }[] = [
  { label: 'Всі', value: 'all' },
  { label: 'Present', value: 'present' },
  { label: 'Past', value: 'past' },
  { label: 'Future', value: 'future' },
  { label: 'Simple', value: 'simple' },
  { label: 'Continuous', value: 'continuous' },
  { label: 'Perfect', value: 'perfect' },
  { label: 'Perfect Cont.', value: 'perfect-continuous' },
]

export function FilterTabs({ active }: { active: FilterType }) {
  const navigate = useNavigate()

  return (
    <div className="flex gap-2 justify-center mb-6 flex-wrap">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          onClick={() => navigate({ to: '/', search: { filter: tab.value } })}
          className={`px-5 py-2 rounded-lg border text-sm transition-all cursor-pointer select-none ${
            active === tab.value
              ? 'bg-slate-700 text-sky-400 border-sky-400'
              : 'bg-slate-800 text-slate-400 border-slate-700 hover:border-slate-600 hover:text-slate-200'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}
