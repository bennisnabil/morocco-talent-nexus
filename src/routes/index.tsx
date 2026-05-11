import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-casablanca.jpg";
import returnImg from "@/assets/return-morocco.jpg";
import story1 from "@/assets/story-1.jpg";
import { SectionHeading } from "@/components/section-heading";
import { SectorGrid } from "@/components/sector-grid";
import { ServiceCard } from "@/components/service-card";
import { Testimonial } from "@/components/testimonial";
import { ArticleCard } from "@/components/article-card";
import { CtaButton } from "@/components/cta-button";
import { articles } from "@/lib/insights";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Atlas & Atlas — The Global Moroccan Talent Network" },
      {
        name: "description",
        content:
          "Executive opportunities, strategic relocation, and premium return-to-Morocco support for Moroccan professionals worldwide.",
      },
      {
        property: "og:title",
        content: "Atlas & Atlas — The Global Moroccan Talent Network",
      },
      {
        property: "og:description",
        content:
          "Reconnect Morocco with its global talent. A private executive platform for the Moroccan diaspora.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="px-6 pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_440px] gap-16 items-end">
          <div className="space-y-8 animate-reveal-up">
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              The Global Moroccan Talent Network
            </p>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-primary leading-[0.95] text-balance">
              Reconnect Morocco
              <br />
              <span className="italic">With Its Global Talent</span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-[52ch] leading-relaxed">
              Executive opportunities, strategic relocation, and premium
              return-to-Morocco support for Moroccan professionals worldwide.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              <CtaButton to="/join">Join the Network</CtaButton>
              <CtaButton to="/network" variant="secondary">
                Explore Opportunities
              </CtaButton>
              <CtaButton to="/contact" variant="ghost">
                Book a Consultation
              </CtaButton>
            </div>
          </div>
          <div className="relative">
            <img
              src={heroImg}
              alt="Casablanca Finance City skyline at golden hour"
              width={1080}
              height={1350}
              className="w-full aspect-[4/5] object-cover ring-1 ring-border"
            />
            <div className="absolute -bottom-8 -left-6 lg:-left-12 bg-background p-6 ring-1 ring-border max-w-[260px] hidden md:block">
              <p className="text-[10px] uppercase tracking-[0.3em] text-gold mb-2">
                Impact
              </p>
              <p className="font-serif italic text-lg leading-snug">
                A bridge between global expertise and national ambition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="border-y border-border">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <h2 className="font-serif text-3xl">Strategic Sectors</h2>
            <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              01 — Matching Expertise
            </span>
          </div>
          <SectorGrid />
        </div>
      </section>

      {/* Talent Platform Teaser */}
      <section className="px-6 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <SectionHeading
            eyebrow="02 — The Platform"
            title="A private ecosystem for global Moroccan leaders."
            subtitle="We don't post jobs. We curate career-defining transitions for the Moroccan diaspora across Finance, Tech, Industry, Infrastructure, ESG, Hospitality, and Healthcare."
          />
          <div className="space-y-1">
            {[
              ["Executive Matching", "Algorithmic precision combined with strategic human insight."],
              ["Confidential Access", "Non-public board roles and strategic mandates."],
              ["Strategic Mapping", "Diaspora intelligence for the Kingdom's most ambitious organizations."],
            ].map(([t, d]) => (
              <div
                key={t}
                className="p-6 ring-1 ring-border bg-background flex justify-between items-center"
              >
                <div>
                  <h4 className="font-medium mb-1">{t}</h4>
                  <p className="text-sm text-muted-foreground">{d}</p>
                </div>
              </div>
            ))}
            <div className="pt-6">
              <CtaButton to="/network" variant="ghost">
                Explore the platform
              </CtaButton>
            </div>
          </div>
        </div>
      </section>

      {/* Return to Morocco */}
      <section className="bg-primary text-primary-foreground px-6 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_1.1fr] gap-16">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-secondary/60 mb-5">
              03 — Return to Morocco
            </p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-6 text-balance">
              Concierge for the
              <br />
              <span className="italic">professional homecoming.</span>
            </h2>
            <p className="text-secondary/70 max-w-[40ch] mb-10">
              Returning home is a strategic move, not a logistical one. We manage
              the complexity so you can focus on the impact.
            </p>
            <img
              src={returnImg}
              alt="Modern Moroccan terrace overlooking Hassan II minaret"
              width={1080}
              height={1440}
              loading="lazy"
              className="w-full aspect-[4/3] object-cover ring-1 ring-white/10"
            />
          </div>
          <div className="grid sm:grid-cols-2 gap-1">
            {[
              ["Career Strategy", "Aligning international expertise with high-impact Moroccan roles."],
              ["Relocation Assistance", "End-to-end logistics: housing, schooling, healthcare."],
              ["Tax & Administrative", "DRI status, fiscal optimization, and governance."],
              ["Networking Access", "Warm introductions to Morocco's industrial leadership."],
            ].map(([t, d], i) => (
              <ServiceCard
                key={t}
                index={i + 1}
                title={t}
                description={d}
                variant="dark"
              />
            ))}
            <div className="sm:col-span-2 mt-4">
              <Link
                to="/return"
                className="inline-flex items-center gap-3 border border-secondary/30 text-secondary px-6 py-3 text-sm tracking-wide hover:bg-secondary hover:text-primary transition-colors"
              >
                See all return services →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* For Companies */}
      <section className="px-6 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto bg-secondary/30 ring-1 ring-border p-10 md:p-16 lg:p-24">
          <div className="max-w-3xl">
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-5">
              04 — For Companies
            </p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-6 text-balance">
              Access world-class
              <br />
              <span className="italic">Moroccan talent.</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-10 mt-12">
              {[
                ["Executive Search", "Discreet acquisition of leadership for sovereign and private interests."],
                ["Diaspora Mapping", "We track the most influential Moroccan minds across NYC, London, Paris, and Dubai."],
                ["Confidential Recruitment", "Sensitive mandates handled with absolute discretion."],
                ["Leadership Hiring", "Long-term partnerships shaping executive teams."],
              ].map(([t, d]) => (
                <div key={t}>
                  <h4 className="font-medium mb-2">{t}</h4>
                  <p className="text-sm text-muted-foreground">{d}</p>
                </div>
              ))}
            </div>
            <div className="mt-12">
              <CtaButton to="/companies">Partner with us</CtaButton>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Story */}
      <section className="px-6 py-24 lg:py-32 border-t border-border">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_1.1fr] gap-16 items-center">
          <img
            src={story1}
            alt="Sarah Benjelloun — Director of ESG"
            width={1024}
            height={1024}
            loading="lazy"
            className="aspect-square w-full object-cover ring-1 ring-border"
          />
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-gold mb-5">
              05 — Success Story
            </p>
            <Testimonial
              quote="Coming back wasn't just a career move. It was about contributing to the vision of a modern Morocco — with the resources to actually do it."
              name="Sarah Benjelloun"
              role="Director of ESG, Regional Infrastructure Fund"
            />
            <div className="mt-8">
              <CtaButton to="/stories" variant="ghost">
                Read more journeys
              </CtaButton>
            </div>
          </div>
        </div>
      </section>

      {/* Insights */}
      <section className="px-6 py-24 lg:py-32 bg-secondary/20 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
            <SectionHeading
              eyebrow="06 — Insights"
              title="Intelligence for the returning executive."
            />
            <CtaButton to="/insights" variant="ghost">
              All insights
            </CtaButton>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {articles.slice(0, 3).map((a) => (
              <ArticleCard key={a.slug} {...a} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
