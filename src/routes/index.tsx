import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeading } from "@/components/section-heading";
import { SectorGrid } from "@/components/sector-grid";
import { ServiceCard } from "@/components/service-card";
import { Testimonial } from "@/components/testimonial";
import { ArticleCard } from "@/components/article-card";
import { CtaButton } from "@/components/cta-button";
import { articles } from "@/lib/insights";
import { PartnerLogos } from "@/components/partner-logos";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DiasporaConnect — Le réseau mondial des talents marocains" },
      {
        name: "description",
        content:
          "Opportunités exécutives, relocation stratégique et accompagnement premium au retour au Maroc pour les professionnels marocains du monde entier.",
      },
      {
        property: "og:title",
        content: "DiasporaConnect — Le réseau mondial des talents marocains",
      },
      {
        property: "og:description",
        content:
          "Reconnecter le Maroc à ses talents globaux. Une plateforme exécutive privée pour la diaspora marocaine.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="px-6 pt-16 pb-16 lg:pt-24 lg:pb-20">
        <div className="max-w-5xl mx-auto space-y-8 animate-reveal-up">
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Le réseau mondial des talents marocains
          </p>
          <h1 className="font-serif text-5xl md:text-7xl text-primary leading-[0.95] text-balance">
            Reconnecter le Maroc
            <br />
            <span className="italic">à ses talents globaux.</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-[60ch] leading-relaxed">
            Opportunités exécutives, relocation stratégique et accompagnement premium au retour au Maroc pour les professionnels marocains du monde entier.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <CtaButton to="/join">Rejoindre le réseau</CtaButton>
            <CtaButton to="/network" variant="secondary">
              Explorer les opportunités
            </CtaButton>
            <CtaButton to="/contact" variant="ghost">
              Prendre rendez-vous
            </CtaButton>
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="border-y border-border">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
            <h2 className="font-serif text-3xl">Secteurs stratégiques</h2>
            <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              01 — Alignement d'expertise
            </span>
          </div>
          <SectorGrid />
        </div>
      </section>

      {/* Talent Platform Teaser */}
      <section className="px-6 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <SectionHeading
            eyebrow="02 — La Plateforme"
            title="Un écosystème privé pour les leaders marocains du monde entier."
            subtitle="Nous ne publions pas d'offres. Nous orchestrons des transitions de carrière déterminantes pour la diaspora marocaine."
          />
          <div className="space-y-1">
            {[
              ["Matching exécutif", "La précision algorithmique combinée à la lecture stratégique humaine."],
              ["Accès confidentiel", "Mandats non publics et opportunités stratégiques au plus haut niveau."],
              ["Cartographie stratégique", "Intelligence diaspora pour les organisations les plus ambitieuses du Royaume."],
            ].map(([t, d]) => (
              <div
                key={t}
                className="p-5 ring-1 ring-border bg-background"
              >
                <h4 className="font-medium mb-1">{t}</h4>
                <p className="text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
            <div className="pt-4">
              <CtaButton to="/network" variant="ghost">
                Explorer la plateforme
              </CtaButton>
            </div>
          </div>
        </div>
      </section>

      {/* Return to Morocco */}
      <section className="bg-primary text-primary-foreground px-6 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-12">
            <p className="text-[10px] uppercase tracking-[0.3em] text-secondary/60 mb-5">
              03 — Retour au Maroc
            </p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-6 text-balance">
              Conciergerie pour <span className="italic">le retour exécutif.</span>
            </h2>
            <p className="text-secondary/70">
              Rentrer au pays est un choix stratégique, pas une démarche logistique. Nous gérons la complexité, vous vous concentrez sur l'impact.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-1">
            {[
              ["Stratégie de carrière", "Aligner votre expertise internationale avec les rôles à fort impact au Maroc."],
              ["Assistance à la relocation", "Logistique de bout en bout : logement, scolarité, santé."],
              ["Fiscalité & administratif", "Statut DRI, optimisation fiscale et gouvernance."],
              ["Accès au réseau", "Introductions stratégiques aux décideurs industriels du Royaume."],
            ].map(([t, d], i) => (
              <ServiceCard
                key={t}
                index={i + 1}
                title={t}
                description={d}
                variant="dark"
              />
            ))}
          </div>
          <div className="mt-8">
            <Link
              to="/return"
              className="inline-flex items-center gap-3 border border-secondary/30 text-secondary px-6 py-3 text-sm tracking-wide hover:bg-secondary hover:text-primary transition-colors"
            >
              Voir tous les services de retour →
            </Link>
          </div>
        </div>
      </section>

      {/* For Companies */}
      <section className="px-6 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto bg-secondary/30 ring-1 ring-border p-10 md:p-14">
          <div className="max-w-3xl">
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-5">
              04 — Pour les entreprises
            </p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-6 text-balance">
              Accédez aux talents <span className="italic">marocains de classe mondiale.</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mt-10">
              {[
                ["Executive Search", "Recrutement discret de leaders pour intérêts souverains et privés."],
                ["Cartographie diaspora", "Suivi des esprits marocains les plus influents à NYC, Londres, Paris et Dubaï."],
                ["Recrutement confidentiel", "Mandats sensibles traités en discrétion absolue."],
                ["Leadership hiring", "Partenariats long terme pour structurer vos équipes dirigeantes."],
              ].map(([t, d]) => (
                <div key={t}>
                  <h4 className="font-medium mb-2">{t}</h4>
                  <p className="text-sm text-muted-foreground">{d}</p>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <CtaButton to="/companies">Devenir partenaire</CtaButton>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Story */}
      <section className="px-6 py-16 lg:py-20 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <p className="text-[10px] uppercase tracking-[0.3em] text-gold mb-5">
            05 — Témoignage
          </p>
          <Testimonial
            quote="Rentrer n'était pas qu'un mouvement de carrière. C'était contribuer à la vision d'un Maroc moderne — avec les ressources pour le faire vraiment."
            name="Sarah Benjelloun"
            role="Directrice ESG, Fonds Régional d'Infrastructures"
          />
          <div className="mt-8">
            <CtaButton to="/stories" variant="ghost">
              Lire d'autres parcours
            </CtaButton>
          </div>
        </div>
      </section>

      {/* Insights */}
      <section className="px-6 py-16 lg:py-20 bg-secondary/20 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-6">
            <SectionHeading
              eyebrow="06 — Analyses"
              title="Intelligence pour le cadre qui rentre."
            />
            <CtaButton to="/insights" variant="ghost">
              Toutes les analyses
            </CtaButton>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {articles.slice(0, 3).map((a) => (
              <ArticleCard key={a.slug} {...a} />
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="px-6">
        <div className="max-w-7xl mx-auto">
          <PartnerLogos strip />
        </div>
      </section>
    </>
  );
}
