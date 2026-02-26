import { createFileRoute } from "@tanstack/react-router";
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
      <p className="text-center text-slate-400 mb-6 text-[0.95rem]">
        12 {"часів англійської"} {"—"}{" "}
        {"формули, приклади, пояснення, типові помилки"}
      </p>

      <FilterTabs active={filter} />

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
