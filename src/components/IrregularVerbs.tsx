import { irregularVerbs } from "../data/content";

export function IrregularVerbs() {
  return (
    <div className="max-w-[1500px] mx-auto mt-7 bg-slate-800 border border-slate-700 rounded-xl p-5">
      <h3 className="text-violet-400 mb-3 text-base font-bold">
        {"\u{1F4DD}"} Топ-25 неправильних дієслів (V1 → V2 → V3)
      </h3>
      <div className="grid grid-cols-4 gap-1.5">
        {irregularVerbs.map((v) => (
          <div
            key={v.v1}
            className="grid grid-cols-4 text-[0.82rem] px-2 py-1 bg-slate-900 rounded"
          >
            <span className="text-sky-400">{v.v1}</span>
            <span className="text-violet-400">{v.v2}</span>
            <span className="text-emerald-400">{v.v3}</span>
            <span className="text-slate-500">{v.ua}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
