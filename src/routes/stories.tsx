import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/section-heading";
import { Testimonial } from "@/components/testimonial";
import { CtaButton } from "@/components/cta-button";
import story1 from "@/assets/story-1.jpg";
import story2 from "@/assets/story-2.jpg";
import { Play } from "lucide-react";

export const Route = createFileRoute("/stories")({
  head: () => ({
    meta: [
      { title: "Success Stories — Atlas & Atlas" },
      {
        name: "description",
        content:
          "Diaspora journeys, executive returns, and the leaders shaping a modern Morocco.",
      },
      { property: "og:title", content: "Success Stories — Atlas & Atlas" },
      {
        property: "og:description",
        content: "Real journeys from senior Moroccan professionals returning home.",
      },
    ],
  }),
  component: StoriesPage,
});

const stories = [
  {
    quote:
      "After 15 years in London's financial district, the transition to Casablanca was made seamless. I found a role that matches my ambition while contributing to the Kingdom's growth.",
    name: "Mehdi Karam",
    role: "Chief Investment Officer, CFC Partner",
    image: story2,
  },
  {
    quote:
      "Atlas didn't just find me a role; they managed my family's entire relocation strategy. The networking they provided upon arrival was world-class.",
    name: "Sofia Alaoui",
    role: "Head of Sustainability, OCP Group",
    image: story1,
  },
  {
    quote:
      "I had received offers in Morocco for years, but nothing matched the precision of what Atlas put in front of me. The fit was instant.",
    name: "Yassine Tazi",
    role: "Managing Director, Casablanca Finance City",
    image: story2,
  },
  {
    quote:
      "What surprised me most was the depth of the network. Within weeks I was sitting with people I had spent a decade trying to reach.",
    name: "Nadia El Amrani",
    role: "Partner, Regional Venture Fund",
    image: story1,
  },
];

function StoriesPage() {
  return (
    <>
      <section className="px-6 pt-20 pb-16 lg:pt-28 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Success Stories"
            title="Paths traveled. Futures built."
            subtitle="A glimpse into the executives who chose to return — and what they are building now."
            serifClass="text-5xl md:text-7xl"
          />
        </div>
      </section>

      {/* Video stories */}
      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-10">
            In their words
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[story1, story2, story1].map((src, i) => (
              <div
                key={i}
                className="relative aspect-[3/4] overflow-hidden ring-1 ring-border group cursor-pointer"
              >
                <img
                  src={src}
                  alt=""
                  loading="lazy"
                  width={1024}
                  height={1366}
                  className="w-full h-full object-cover grayscale group-hover:scale-[1.02] transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-primary/30 flex items-end p-6">
                  <div className="flex items-center gap-3 text-secondary">
                    <span className="size-10 rounded-full bg-secondary text-primary grid place-items-center">
                      <Play className="size-4 fill-current" />
                    </span>
                    <span className="text-sm font-medium">
                      Watch — 2:40
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Written testimonials */}
      <section className="px-6 py-24 bg-secondary/20 border-y border-border">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">
          {stories.map((s) => (
            <Testimonial key={s.name} {...s} />
          ))}
        </div>
      </section>

      <section className="px-6 py-24 bg-primary text-primary-foreground text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-6">
            Your story could be next.
          </h2>
          <CtaButton to="/join">Apply to the Network</CtaButton>
        </div>
      </section>
    </>
  );
}
