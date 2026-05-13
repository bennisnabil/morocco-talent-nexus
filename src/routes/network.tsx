import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/section-heading";
import { SectorGrid } from "@/components/sector-grid";
import { CtaButton } from "@/components/cta-button";

export const Route = createFileRoute("/network")({
  head: () => ({
    meta: [
      { title: "Plateforme Talents — Diaspora Talent" },
      {
        name: "description",
        content:
          "Un réseau privé de cadres marocains du monde entier. Opportunités confidentielles, matching stratégique, mandats de leadership.",
      },
      { property: "og:title", content: "La Plateforme Talents — Diaspora Talent" },
      {
        property: "og:description",
        content:
          "Opportunités exécutives confidentielles pour la diaspora marocaine globale.",
      },
    ],
  }),
  component: NetworkPage,
});

function NetworkPage() {
  return (
    <>
      <section className="px-6 pt-20 pb-12 lg:pt-24 border-b border-border">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            eyebrow="La Plateforme Talents"
            title="Un réseau privé pour les cadres marocains, partout dans le monde."
            subtitle="Matching stratégique, opportunités confidentielles et mandats de leadership conçus pour les professionnels seniors, sur tous les continents."
            serifClass="text-5xl md:text-6xl"
          />
          <div className="mt-10 flex flex-wrap gap-3">
            <CtaButton to="/join">Postuler au réseau</CtaButton>
            <CtaButton to="/contact" variant="ghost">
              Échanger avec un partner
            </CtaButton>
          </div>
        </div>
      </section>

      <section className="px-6 py-12 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-8">
            Secteurs stratégiques
          </p>
          <SectorGrid />
        </div>
      </section>

      <section className="px-6 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-1">
          {[
            ["Matching exécutif", "Profils seniors associés à des mandats C-suite, board et direction au sein des organisations les plus stratégiques du Maroc."],
            ["Opportunités confidentielles", "Postes non publics traités avec discrétion. Les membres accèdent à des mandats qui n'atteignent jamais le marché ouvert."],
            ["Recrutement stratégique", "Nous travaillons avec des champions nationaux, des intérêts souverains et des groupes privés ambitieux à la recherche d'un leadership de calibre diaspora."],
            ["Profils internationaux", "Des membres occupant des postes seniors à NYC, Londres, Paris, Dubaï, Singapour, Genève et bien au-delà."],
            ["Mandats de leadership", "Recherches actives en Tech, Finance, Industrie, Infrastructure, ESG, Hôtellerie et Santé."],
            ["La discrétion d'abord", "Chaque adhésion et chaque mandat sont régis par une confidentialité stricte. Votre candidature ne circule jamais."],
          ].map(([t, d]) => (
            <div key={t} className="p-8 ring-1 ring-border bg-background">
              <h3 className="font-serif text-2xl mb-3">{t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-16 lg:py-20 bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-6 text-balance">
            Prêt pour votre prochain chapitre ?
          </h2>
          <p className="text-secondary/70 mb-8">
            Rejoignez un réseau privé de professionnels marocains seniors qui façonnent l'avenir du Royaume.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <CtaButton to="/join">Postuler au réseau</CtaButton>
          </div>
        </div>
      </section>
    </>
  );
}
