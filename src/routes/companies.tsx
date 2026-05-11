import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/section-heading";
import { CtaButton } from "@/components/cta-button";

export const Route = createFileRoute("/companies")({
  head: () => ({
    meta: [
      { title: "For Companies — Executive Search | Atlas & Atlas" },
      {
        name: "description",
        content:
          "Access world-class Moroccan talent. Executive search, diaspora mapping, confidential recruitment, and leadership hiring.",
      },
      { property: "og:title", content: "For Companies — Atlas & Atlas" },
      {
        property: "og:description",
        content: "World-class Moroccan executive talent, on demand.",
      },
    ],
  }),
  component: CompaniesPage,
});

function CompaniesPage() {
  return (
    <>
      <section className="px-6 pt-20 pb-16 lg:pt-28 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="For Companies"
            title="Access world-class Moroccan talent."
            subtitle="A private executive search practice for organizations that compete globally and lead locally."
            serifClass="text-5xl md:text-7xl"
          />
          <div className="mt-12 flex flex-wrap gap-3">
            <CtaButton to="/contact">Initiate a Mandate</CtaButton>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-1">
          {[
            ["Executive Search", "Discreet, retained search for C-level, board, and senior leadership roles. We work on a small number of mandates per year — by design."],
            ["Diaspora Mapping", "Comprehensive intelligence on senior Moroccan executives in financial, tech, industrial, and academic institutions worldwide."],
            ["Confidential Recruitment", "When discretion is non-negotiable. Off-market mandates handled with absolute confidentiality."],
            ["Leadership Hiring", "Long-term partnerships with national champions, sovereign actors, and ambitious private groups."],
          ].map(([t, d], i) => (
            <div
              key={t}
              className="p-10 md:p-14 ring-1 ring-border bg-background"
            >
              <span className="font-serif italic text-3xl text-gold block mb-6">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-serif text-3xl mb-4">{t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-24 bg-secondary/30 border-y border-border">
        <div className="max-w-5xl mx-auto text-center">
          <SectionHeading
            align="center"
            eyebrow="Selectivity"
            title="We accept fewer than thirty mandates per year."
            subtitle="Our standards protect both the executives we represent and the organizations we serve. The result: outcomes that endure."
          />
        </div>
      </section>

      <section className="px-6 py-24 bg-primary text-primary-foreground text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-6">
            Initiate a partnership.
          </h2>
          <p className="text-secondary/70 mb-10">
            Confidential discussions begin with a thirty-minute call.
          </p>
          <CtaButton to="/contact">Contact our partners</CtaButton>
        </div>
      </section>
    </>
  );
}
