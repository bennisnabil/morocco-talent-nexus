import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/section-heading";
import { SectorGrid } from "@/components/sector-grid";
import { CtaButton } from "@/components/cta-button";

export const Route = createFileRoute("/network")({
  head: () => ({
    meta: [
      { title: "Talent Platform — Atlas & Atlas" },
      {
        name: "description",
        content:
          "A private network of Moroccan executives worldwide. Confidential opportunities, strategic matching, leadership mandates.",
      },
      { property: "og:title", content: "The Talent Platform — Atlas & Atlas" },
      {
        property: "og:description",
        content:
          "Confidential executive opportunities for the global Moroccan diaspora.",
      },
    ],
  }),
  component: NetworkPage,
});

function NetworkPage() {
  return (
    <>
      <section className="px-6 pt-20 pb-16 lg:pt-28 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="The Talent Platform"
            title="A private network for Moroccan executives, worldwide."
            subtitle="Strategic matching, confidential opportunities, and leadership mandates curated for senior professionals across continents."
            serifClass="text-5xl md:text-7xl"
          />
          <div className="mt-12 flex flex-wrap gap-3">
            <CtaButton to="/join">Apply to the Network</CtaButton>
            <CtaButton to="/contact" variant="ghost">
              Speak with a partner
            </CtaButton>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-10">
            Strategic Sectors
          </p>
          <SectorGrid />
        </div>
      </section>

      <section className="px-6 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-1">
          {[
            ["Executive Matching", "Senior profiles matched with C-suite, board, and director mandates across Morocco's most strategic organizations."],
            ["Confidential Opportunities", "Non-public roles handled discreetly. Members access mandates that never reach the open market."],
            ["Strategic Hiring", "We work with national champions, sovereign interests, and ambitious private groups looking for diaspora-grade leadership."],
            ["International Profiles", "Members holding senior positions in NYC, London, Paris, Dubai, Singapore, Geneva, and beyond."],
            ["Leadership Mandates", "Active searches across Tech, Finance, Industry, Infrastructure, ESG, Hospitality, and Healthcare."],
            ["Discretion First", "Every membership and mandate is governed by strict confidentiality. Your candidacy never circulates."],
          ].map(([t, d]) => (
            <div key={t} className="p-8 md:p-10 ring-1 ring-border bg-background">
              <h3 className="font-serif text-2xl mb-4">{t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-24 bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-6 text-balance">
            Ready for your next chapter?
          </h2>
          <p className="text-secondary/70 mb-10">
            Join a private network of senior Moroccan professionals shaping the
            Kingdom's future.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <CtaButton to="/join">Apply to the Network</CtaButton>
          </div>
        </div>
      </section>
    </>
  );
}
