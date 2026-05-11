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
      { title: "Atlas & Atlas — Le réseau mondial des talents marocains" },
      {
        name: "description",
        content:
          "Opportunités exécutives, relocation stratégique et accompagnement premium au retour au Maroc pour les professionnels marocains du monde entier.",
      },
      {
        property: "og:title",
        content: "Atlas & Atlas — Le réseau mondial des talents marocains",
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
      <section className="px-6 pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_440px] gap-16 items-end">
          <div className="space-y-8 animate-reveal-up">
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Le réseau mondial des talents marocains
            </p>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-primary leading-[0.95] text-balance">
              Reconnecter le Maroc
              <br />
              <span className="italic">à ses talents globaux.</span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-[52ch] leading-relaxed">
              Opportunités exécutives, relocation stratégique et accompagnement premium au retour au Maroc pour les professionnels marocains du monde entier.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              <CtaButton to="/join">Rejoindre le réseau</CtaButton>
              <CtaButton to="/network" variant="secondary">
                Explorer les opportunités
              </CtaButton>
              <CtaButton to="/contact" variant="ghost">
                Prendre rendez-vous
              </CtaButton>
            </div>
          </div>
          <div className="relative">
            <img
              src={heroImg}
              alt="Skyline de Casablanca Finance City à l'heure dorée"
              width={1080}
              height={1350}
              className="w-full aspect-[4/5] object-cover ring-1 ring-border"
            />
            <div className="absolute -bottom-8 -left-6 lg:-left-12 bg-background p-6 ring-1 ring-border max-w-[260px] hidden md:block">
              <p className="text-[10px] uppercase tracking-[0.3em] text-gold mb-2">
                Impact
              </p>
              <p className="font-serif italic text-lg leading-snug">
                Un pont entre l'expertise globale et l'ambition nationale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="border-y border-border">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <h2 className="font-serif text-3xl">Secteurs stratégiques</h2>
            <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              01 — Alignement d'expertise
            </span>
          </div>
          <SectorGrid />
        </div>
      </section>

      {/* Talent Platform Teaser */}
      <section className="px-6 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <SectionHeading
            eyebrow="02 — La Plateforme"
            title="Un écosystème privé pour les leaders marocains du monde entier."
            subtitle="Nous ne publions pas d'offres. Nous orchestrons des transitions de carrière déterminantes pour la diaspora marocaine — Tech, Finance, Industrie, Infrastructure, ESG, Hôtellerie, Santé."
          />
          <div className="space-y-1">
            {[
              ["Matching exécutif", "La précision algorithmique combinée à la lecture stratégique humaine."],
              ["Accès confidentiel", "Mandats non publics et opportunités stratégiques au plus haut niveau."],
              ["Cartographie stratégique", "Intelligence diaspora pour les organisations les plus ambitieuses du Royaume."],
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
                Explorer la plateforme
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
              03 — Retour au Maroc
            </p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-6 text-balance">
              Conciergerie pour
              <br />
              <span className="italic">le retour exécutif.</span>
            </h2>
            <p className="text-secondary/70 max-w-[40ch] mb-10">
              Rentrer au pays est un choix stratégique, pas une démarche logistique. Nous gérons la complexité, vous vous concentrez sur l'impact.
            </p>
            <img
              src={returnImg}
              alt="Terrasse marocaine moderne avec vue sur le minaret Hassan II"
              width={1080}
              height={1440}
              loading="lazy"
              className="w-full aspect-[4/3] object-cover ring-1 ring-white/10"
            />
          </div>
          <div className="grid sm:grid-cols-2 gap-1">
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
            <div className="sm:col-span-2 mt-4">
              <Link
                to="/return"
                className="inline-flex items-center gap-3 border border-secondary/30 text-secondary px-6 py-3 text-sm tracking-wide hover:bg-secondary hover:text-primary transition-colors"
              >
                Voir tous les services de retour →
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
              04 — Pour les entreprises
            </p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-6 text-balance">
              Accédez aux talents
              <br />
              <span className="italic">marocains de classe mondiale.</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-10 mt-12">
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
            <div className="mt-12">
              <CtaButton to="/companies">Devenir partenaire</CtaButton>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Story */}
      <section className="px-6 py-24 lg:py-32 border-t border-border">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_1.1fr] gap-16 items-center">
          <img
            src={story1}
            alt="Sarah Benjelloun — Directrice ESG"
            width={1024}
            height={1024}
            loading="lazy"
            className="aspect-square w-full object-cover ring-1 ring-border"
          />
          <div>
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
        </div>
      </section>

      {/* Insights */}
      <section className="px-6 py-24 lg:py-32 bg-secondary/20 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
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
    </>
  );
}
