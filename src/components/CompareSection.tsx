import { comparisons } from '../data/content'
import { Highlighted } from './Highlighted'

export function CompareSection() {
  return (
    <div className="max-w-[1500px] mx-auto mt-8">
      <h2 className="text-orange-500 text-lg mb-4 text-center font-bold">
{'\u{1F500}'} Часті плутанини — порівняння часів
      </h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(340px,1fr))] gap-3.5">
        {comparisons.map((c) => (
          <div key={c.title} className="bg-slate-800 border border-slate-700 rounded-xl p-[18px]">
            <h4 className="text-orange-500 text-[0.95rem] mb-2.5 font-bold">{c.title}</h4>
            <p className="text-slate-400 text-sm mb-1.5">
              <strong className="text-slate-200">{c.description.split(' | ')[0]}</strong>
              {' | '}
              <strong className="text-slate-200">{c.description.split(' | ')[1]}</strong>
            </p>
            {c.examples.map((ex, i) => (
              <div
                key={i}
                className="bg-slate-900 px-2.5 py-1.5 rounded-md text-[0.83rem] text-slate-300 my-1"
              >
                <Highlighted text={ex.text} />{' '}
                <span className="text-slate-500 text-xs">— {ex.note}</span>
              </div>
            ))}
            <p className="text-slate-400 text-sm mt-1.5">{'\u{1F4A1}'} {c.tip}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
