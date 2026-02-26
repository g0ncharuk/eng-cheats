import { createFileRoute, Link } from "@tanstack/react-router";
import type { FilterType } from "../data/types";
import { tenses } from "../data/tenses";
import { FilterTabs } from "../components/FilterTabs";
import { TenseCard } from "../components/TenseCard";
import { CompareSection } from "../components/CompareSection";
import { IrregularVerbs } from "../components/IrregularVerbs";
import { Tips } from "../components/Tips";

const timeFilters = ["present", "past", "future"] as const;

export const Route = createFileRoute("/")({
  validateSearch: (
    search: Record<string, unknown>,
  ): { filter: FilterType } => ({
    filter: (search.filter as FilterType) || "all",
  }),
  component: HomePage,
});

function HomePage() {
  const { filter } = Route.useSearch();

  const filtered = tenses.filter((t) => {
    if (filter === "all") return true;
    if ((timeFilters as readonly string[]).includes(filter))
      return t.time === filter;
    return t.aspect === filter;
  });

  return (
    <>
      <h1 className="text-center text-3xl font-bold mb-2 bg-gradient-to-br from-sky-400 to-indigo-400 bg-clip-text text-transparent">
        {"\u{1F1EC}\u{1F1E7}"} English Tenses Cheat Sheet
      </h1>
      <p className="text-center text-slate-400 mb-2 text-[0.95rem]">
        12 {"часів англійської"} {"—"}{" "}
        {"формули, приклади, пояснення, типові помилки"}
      </p>
      <div className="flex justify-center gap-3 mb-6 flex-wrap">
        <Link
          to="/quiz"
          className="px-5 py-2 rounded-lg border text-sm transition-all cursor-pointer select-none bg-slate-800 text-emerald-400 border-emerald-400/50 hover:border-emerald-400 hover:bg-emerald-500/10"
        >
          {"\u{1F4DD}"} Пройти тест
        </Link>
        <Link
          to="/verbs"
          className="px-5 py-2 rounded-lg border text-sm transition-all cursor-pointer select-none bg-slate-800 text-violet-400 border-violet-400/50 hover:border-violet-400 hover:bg-violet-500/10"
        >
          {"\u{1F524}"} Неправильні дієслова
        </Link>
        <Link
          to="/prepositions"
          className="px-5 py-2 rounded-lg border text-sm transition-all cursor-pointer select-none bg-slate-800 text-amber-400 border-amber-400/50 hover:border-amber-400 hover:bg-amber-500/10"
        >
          {"\u{1F4CD}"} IN / ON / AT
        </Link>
        <Link
          to="/phrasal-verbs"
          className="px-5 py-2 rounded-lg border text-sm transition-all cursor-pointer select-none bg-slate-800 text-orange-400 border-orange-400/50 hover:border-orange-400 hover:bg-orange-500/10"
        >
          {"\u{1F525}"} Phrasal Verbs
        </Link>
      </div>

      <FilterTabs active={filter} />

      <div className="max-w-[1500px] mx-auto mb-4 flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-500 justify-center">
        <span><strong className="text-slate-300">S</strong> = Subject <span className="text-slate-600">(I, you, he…)</span></span>
        <span><strong className="text-slate-300">V</strong> = Verb <span className="text-slate-600">(work, go)</span></span>
        <span><strong className="text-slate-300">V2</strong> = Past form <span className="text-slate-600">(went, ate)</span></span>
        <span><strong className="text-slate-300">V3</strong> = Past Participle <span className="text-slate-600">(gone, eaten)</span></span>
        <span><strong className="text-slate-300">V-ing</strong> = дієслово + ing <span className="text-slate-600">(working)</span></span>
        <span><strong className="text-slate-300">V-ed</strong> = правильне дієслово + ed <span className="text-slate-600">(worked)</span></span>
        <span><strong className="text-slate-300">V(s/es)</strong> = he/she/it форма <span className="text-slate-600">(works, goes)</span></span>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(360px,1fr))] gap-4 max-w-[1500px] mx-auto">
        {filtered.map((t) => (
          <TenseCard key={`${t.time}-${t.aspect}`} tense={t} />
        ))}
      </div>

      <IrregularVerbs />
      <Tips />
      <CompareSection />
    </>
  );
}
