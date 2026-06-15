import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/section-heading";
import { ArticleCard } from "@/components/article-card";
import { articles } from "@/lib/insights";

export const Route = createFileRoute("/insights/")({
  head: () => ({
    meta: [
      { title: "Analyses — DiasporaConnect" },
      {
        name: "description",
        content:
          "Analyses éditoriales sur le paysage exécutif marocain : salaires, retour, leadership, relocation et capital diaspora.",
      },
      { property: "og:title", content: "Analyses — DiasporaConnect" },
      {
        property: "og:description",
        content: "Intelligence pour le cadre qui rentre.",
      },
    ],
  }),
  component: InsightsPage,
});

function InsightsPage() {
  return (
    <>
      <section className="px-6 pt-20 pb-16 lg:pt-24 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Analyses"
            title="Intelligence pour le cadre qui rentre."
            subtitle="Perspectives terrain sur le retour au Maroc, la rémunération exécutive et l'économie de la diaspora."
            serifClass="text-5xl md:text-7xl"
          />
        </div>
      </section>

      <section className="px-6 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {articles.map((a) => (
            <ArticleCard key={a.slug} {...a} />
          ))}
        </div>
      </section>
    </>
  );
}
