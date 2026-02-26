import { useState } from 'react'
import type { PhrasalVerb } from '../../data/phrasal-verbs'
import { PhrasalCard } from './PhrasalCard'

export function PhrasalDirectory({ verbs }: { verbs: PhrasalVerb[] }) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
      {verbs.map((v, i) => (
        <PhrasalCard
          key={`${v.full}-${i}`}
          verb={v}
          expanded={expandedIndex === i}
          onToggle={() => setExpandedIndex(expandedIndex === i ? null : i)}
        />
      ))}
    </div>
  )
}
