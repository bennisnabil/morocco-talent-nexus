import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/section-heading";
import { Testimonial } from "@/components/testimonial";
import { CtaButton } from "@/components/cta-button";

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
  },
  {
    quote:
      "Diaspora Talent n'a pas seulement trouvé mon poste : ils ont piloté toute la stratégie de relocation de ma famille. Le réseau dont j'ai bénéficié à l'arrivée était de classe mondiale.",
    name: "Sofia Alaoui",
    role: "Head of Sustainability, OCP Group",
  },
  {
    quote:
      "J'avais reçu des offres au Maroc pendant des années, mais rien n'égalait la précision de ce que Diaspora Talent a mis devant moi. L'adéquation a été immédiate.",
    name: "Yassine Tazi",
    role: "Managing Director, Casablanca Finance City",
  },
  {
    quote:
      "Ce qui m'a le plus surprise, c'est la profondeur du réseau. En quelques semaines, j'étais en réunion avec des personnes que j'avais cherché à atteindre pendant dix ans.",
    name: "Nadia El Amrani",
    role: "Partner, Fonds régional de venture",
  },
];

function StoriesPage() {
  return (
    <>
      <section className="px-6 pt-20 pb-12 lg:pt-24 border-b border-border">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            eyebrow="Témoignages"
            title="Des chemins parcourus. Des futurs construits."
            subtitle="Un aperçu des cadres qui ont choisi de rentrer — et de ce qu'ils construisent aujourd'hui."
            serifClass="text-5xl md:text-6xl"
          />
        </div>
      </section>

      <section className="px-6 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">
          {stories.map((s) => (
            <Testimonial key={s.name} {...s} />
          ))}
        </div>
      </section>

      <section className="px-6 py-16 lg:py-20 bg-primary text-primary-foreground text-center">
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
