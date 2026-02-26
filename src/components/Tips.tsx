import { tips } from '../data/content'

export function Tips() {
  return (
    <div className="max-w-[1500px] mx-auto mt-7 bg-slate-800 border border-slate-700 rounded-xl p-5">
      <h3 className="text-amber-400 mb-3 text-base font-bold">
{'\u{1F4A1}'} Лайфхаки для запамʼятовування
      </h3>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-3">
        {tips.map((tip) => (
          <div key={tip.title} className="bg-slate-900 rounded-lg p-3 text-sm text-slate-400">
            <strong className="text-slate-200">{tip.title}</strong>
            <br />
            {tip.body.split('\n').map((line, i) => (
              <span key={i}>
                {line}
                {i < tip.body.split('\n').length - 1 && <br />}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
