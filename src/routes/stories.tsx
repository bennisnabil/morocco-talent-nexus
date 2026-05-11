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
      { title: "Témoignages — Diaspora Talent" },
      {
        name: "description",
        content:
          "Parcours de la diaspora, retours exécutifs et leaders qui façonnent un Maroc moderne.",
      },
      { property: "og:title", content: "Témoignages — Diaspora Talent" },
      {
        property: "og:description",
        content: "De vrais parcours de professionnels marocains seniors qui rentrent au pays.",
      },
    ],
  }),
  component: StoriesPage,
});

const stories = [
  {
    quote:
      "Après 15 ans dans la City de Londres, la transition vers Casablanca a été d'une fluidité totale. J'ai trouvé un poste à la hauteur de mon ambition tout en contribuant à la croissance du Royaume.",
    name: "Mehdi Karam",
    role: "Chief Investment Officer, partenaire CFC",
    image: story2,
  },
  {
    quote:
      "Atlas n'a pas seulement trouvé mon poste : ils ont piloté toute la stratégie de relocation de ma famille. Le réseau dont j'ai bénéficié à l'arrivée était de classe mondiale.",
    name: "Sofia Alaoui",
    role: "Head of Sustainability, OCP Group",
    image: story1,
  },
  {
    quote:
      "J'avais reçu des offres au Maroc pendant des années, mais rien n'égalait la précision de ce qu'Atlas a mis devant moi. L'adéquation a été immédiate.",
    name: "Yassine Tazi",
    role: "Managing Director, Casablanca Finance City",
    image: story2,
  },
  {
    quote:
      "Ce qui m'a le plus surprise, c'est la profondeur du réseau. En quelques semaines, j'étais en réunion avec des personnes que j'avais cherché à atteindre pendant dix ans.",
    name: "Nadia El Amrani",
    role: "Partner, Fonds régional de venture",
    image: story1,
  },
];

function StoriesPage() {
  return (
    <>
      <section className="px-6 pt-20 pb-16 lg:pt-28 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Témoignages"
            title="Des chemins parcourus. Des futurs construits."
            subtitle="Un aperçu des cadres qui ont choisi de rentrer — et de ce qu'ils construisent aujourd'hui."
            serifClass="text-5xl md:text-7xl"
          />
        </div>
      </section>

      {/* Video stories */}
      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-10">
            Dans leurs mots
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
                      Regarder — 2:40
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
            Votre histoire pourrait être la prochaine.
          </h2>
          <CtaButton to="/join">Postuler au réseau</CtaButton>
        </div>
      </section>
    </>
  );
}
