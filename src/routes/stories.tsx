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
      "Quand j'ai décidé de rentrer, mes amis m'ont pris pour une folle. La crise du Covid a rebattu les cartes du monde du travail. De plus en plus de gens veulent plus qu'un emploi stable — je contribue à la réalisation de leur rêve.",
    name: "Layla",
    role: "Franco-marocaine, ex-agente immobilière à Paris — installée au Maroc depuis 2021",
    source: "H24info — Décembre 2024",
    sourceUrl:
      "https://www.h24info.ma/maroc/investir-au-maroc-ces-mre-qui-ont-decide-de-sauter-le-pas-mag/",
  },
  {
    quote:
      "Il a failli, à plusieurs reprises, tout abandonner. Mais on s'était tellement investi qu'on ne pouvait se permettre un retour en arrière. En se libérant du salariat, il s'est enchaîné à son restaurant.",
    name: "Viviane",
    role: "Épouse de Khalid, ancien chef cuisinier au Canada — restaurateur à Hay Ryad, Rabat",
    source: "H24info — Décembre 2024",
    sourceUrl:
      "https://www.h24info.ma/maroc/investir-au-maroc-ces-mre-qui-ont-decide-de-sauter-le-pas-mag/",
  },
  {
    quote:
      "J'avais tout calculé. Sur le papier, tout semblait parfait. J'avais décroché un contrat comme consultant, avec l'ambition de créer mon entreprise. Mon erreur, c'était de tout miser sur mon savoir-faire.",
    name: "Adil",
    role: "Informaticien marocain, dix ans aux États-Unis — reparti à Orlando après deux ans",
    source: "H24info — Décembre 2024",
    sourceUrl:
      "https://www.h24info.ma/maroc/investir-au-maroc-ces-mre-qui-ont-decide-de-sauter-le-pas-mag/",
  },
  {
    quote:
      "Les Marocains du Monde, par leur diversité de compétences et leur expérience acquise à l'étranger, constituent une ressource stratégique pour le Maroc. Leur mobilisation accrue pourrait accélérer la réalisation des projets phares du Royaume.",
    name: "S.M. le Roi Mohammed VI",
    role: "Discours du 49e anniversaire de la Marche Verte — Novembre 2024",
    source: "H24info — Décembre 2024",
    sourceUrl:
      "https://www.h24info.ma/maroc/investir-au-maroc-ces-mre-qui-ont-decide-de-sauter-le-pas-mag/",
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
            subtitle="Paroles authentiques de Marocains du monde, recueillies par la presse marocaine. Aucun témoignage inventé."
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
        <p className="max-w-3xl mx-auto mt-12 text-xs text-muted-foreground text-center leading-relaxed">
          Tous les témoignages ci-dessus sont extraits de reportages publiés dans la presse marocaine et sont sourcés. Diaspora Talent ne publie pas de témoignages clients fictifs.
        </p>
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
