import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/section-heading";
import { ArticleCard } from "@/components/article-card";
import { articles } from "@/lib/insights";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights — Atlas & Atlas" },
      {
        name: "description",
        content:
          "Editorial intelligence on the Moroccan executive landscape: salaries, returning, leadership, relocation, and diaspora capital.",
      },
      { property: "og:title", content: "Insights — Atlas & Atlas" },
      {
        property: "og:description",
        content: "Intelligence for the returning executive.",
      },
    ],
  }),
  component: InsightsPage,
});

function InsightsPage() {
  return (
    <>
      <section className="px-6 pt-20 pb-16 lg:pt-28 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Insights"
            title="Intelligence for the returning executive."
            subtitle="Field-tested perspectives on returning to Morocco, executive compensation, and the diaspora economy."
            serifClass="text-5xl md:text-7xl"
          />
        </div>
      </section>

      <section className="px-6 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {articles.map((a) => (
            <ArticleCard key={a.slug} {...a} />
          ))}
        </div>
      </section>
    </>
  );
}
