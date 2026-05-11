import { createFileRoute } from "@tanstack/react-router";
import returnImg from "@/assets/return-morocco.jpg";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { CtaButton } from "@/components/cta-button";

export const Route = createFileRoute("/return")({
  head: () => ({
    meta: [
      { title: "Return to Morocco — Premium Concierge | Atlas & Atlas" },
      {
        name: "description",
        content:
          "Premium return-to-Morocco support: career strategy, relocation, fiscal guidance, networking, and executive onboarding.",
      },
      { property: "og:title", content: "Return to Morocco — Atlas & Atlas" },
      {
        property: "og:description",
        content:
          "Concierge service for senior professionals returning to Morocco.",
      },
    ],
  }),
  component: ReturnPage,
});

const services = [
  {
    title: "Career Strategy",
    description:
      "We map your international expertise to Morocco's evolving executive landscape — Casablanca, Rabat, Tangier, Marrakech — and align you with the roles that match your trajectory.",
  },
  {
    title: "Relocation Assistance",
    description:
      "End-to-end logistics: housing in executive corridors, international schooling, family healthcare, vehicles, and the practical infrastructure of returning.",
  },
  {
    title: "Tax & Administrative Guidance",
    description:
      "DRI status activation, double taxation treaties, fiscal optimization, banking, and the administrative architecture of becoming a resident again.",
  },
  {
    title: "Networking Access",
    description:
      "Warm, strategic introductions to Morocco's industrial leaders, family offices, sovereign actors, and the operators shaping the Kingdom's future.",
  },
  {
    title: "Executive Onboarding",
    description:
      "Cultural and operational alignment for your first 100 days. We help you decode the local codes — and lead with immediate impact.",
  },
];

function ReturnPage() {
  return (
    <>
      <section className="px-6 pt-20 pb-16 lg:pt-28 border-b border-border">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.1fr_1fr] gap-16 items-end">
          <div>
            <SectionHeading
              eyebrow="Return to Morocco"
              title="The seamless return is engineered, not improvised."
              subtitle="Five integrated services that transform a complex life transition into a strategic career move."
              serifClass="text-5xl md:text-7xl"
            />
            <div className="mt-12 flex flex-wrap gap-3">
              <CtaButton to="/contact">Book a Consultation</CtaButton>
              <CtaButton to="/join" variant="ghost">
                Apply to the Network
              </CtaButton>
            </div>
          </div>
          <img
            src={returnImg}
            alt="Modern Moroccan terrace at golden hour"
            width={1080}
            height={1440}
            loading="lazy"
            className="w-full aspect-[4/5] object-cover ring-1 ring-border"
          />
        </div>
      </section>

      <section className="px-6 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto space-y-1">
          {services.map((s, i) => (
            <ServiceCard
              key={s.title}
              index={i + 1}
              title={s.title}
              description={s.description}
            />
          ))}
        </div>
      </section>

      {/* Process timeline */}
      <section className="px-6 py-24 bg-secondary/30 border-y border-border">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="The Process"
            title="A six-month journey, structured around you."
          />
          <div className="grid md:grid-cols-4 gap-8 mt-16">
            {[
              ["M-6", "Initial Audit", "Career mapping and alignment with active mandates."],
              ["M-3", "Strategic Sequencing", "Fiscal, family, and professional planning."],
              ["M-0", "Arrival", "Logistics, onboarding, and first introductions."],
              ["M+3", "Embedding", "Network activation and impact measurement."],
            ].map(([m, t, d]) => (
              <div key={t} className="border-t border-border pt-6">
                <p className="font-serif italic text-2xl text-gold mb-3">{m}</p>
                <h4 className="font-medium mb-2">{t}</h4>
                <p className="text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 bg-primary text-primary-foreground text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-6">
            Begin with a private consultation.
          </h2>
          <p className="text-secondary/70 mb-10">
            One hour, one strategist, complete confidentiality.
          </p>
          <CtaButton to="/contact">Book a Consultation</CtaButton>
        </div>
      </section>
    </>
  );
}
