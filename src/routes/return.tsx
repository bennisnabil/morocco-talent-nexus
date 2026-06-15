import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { CtaButton } from "@/components/cta-button";

export const Route = createFileRoute("/return")({
  head: () => ({
    meta: [
      { title: "Retour au Maroc — Conciergerie premium | DiasporaConnect" },
      {
        name: "description",
        content:
          "Accompagnement premium au retour au Maroc : stratégie de carrière, relocation, fiscalité, networking et onboarding exécutif.",
      },
      { property: "og:title", content: "Retour au Maroc — DiasporaConnect" },
      {
        property: "og:description",
        content:
          "Conciergerie pour les professionnels seniors qui rentrent au Maroc.",
      },
    ],
  }),
  component: ReturnPage,
});

const services = [
  {
    title: "Stratégie de carrière",
    description:
      "Nous alignons votre expertise internationale sur le paysage exécutif marocain — Casablanca, Rabat, Tanger, Marrakech — pour des rôles à la hauteur de votre trajectoire.",
  },
  {
    title: "Assistance à la relocation",
    description:
      "Logistique de bout en bout : logement dans les corridors exécutifs, scolarité internationale, santé familiale, véhicules et infrastructure pratique du retour.",
  },
  {
    title: "Fiscalité & guidance administrative",
    description:
      "Activation du statut DRI, conventions de double imposition, optimisation fiscale, banque et architecture administrative du retour à la résidence.",
  },
  {
    title: "Accès au réseau",
    description:
      "Introductions stratégiques et personnalisées aux leaders industriels marocains, family offices, acteurs souverains et opérateurs qui façonnent l'avenir du Royaume.",
  },
  {
    title: "Onboarding exécutif",
    description:
      "Alignement culturel et opérationnel pour vos 100 premiers jours. Nous vous aidons à décoder les codes locaux — et à mener avec un impact immédiat.",
  },
];

function ReturnPage() {
  return (
    <>
      <section className="px-6 pt-20 pb-12 lg:pt-24 border-b border-border">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            eyebrow="Retour au Maroc"
            title="Un retour fluide se construit, il ne s'improvise pas."
            subtitle="Cinq services intégrés qui transforment une transition de vie complexe en mouvement de carrière stratégique."
            serifClass="text-5xl md:text-6xl"
          />
          <div className="mt-10 flex flex-wrap gap-3">
            <CtaButton to="/contact">Prendre rendez-vous</CtaButton>
            <CtaButton to="/join" variant="ghost">
              Postuler au réseau
            </CtaButton>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 lg:py-20">
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
      <section className="px-6 py-16 lg:py-20 bg-secondary/30 border-y border-border">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Le Process"
            title="Un parcours de six mois, structuré autour de vous."
          />
          <div className="grid md:grid-cols-4 gap-8 mt-12">
            {[
              ["M-6", "Audit initial", "Cartographie de carrière et alignement avec les mandats actifs."],
              ["M-3", "Séquençage stratégique", "Planification fiscale, familiale et professionnelle."],
              ["M-0", "Arrivée", "Logistique, onboarding et premières introductions."],
              ["M+3", "Ancrage", "Activation du réseau et mesure d'impact."],
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

      <section className="px-6 py-16 lg:py-20 bg-primary text-primary-foreground text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-6">
            Commencez par une consultation privée.
          </h2>
          <p className="text-secondary/70 mb-8">
            Une heure, un stratège, confidentialité totale.
          </p>
          <CtaButton to="/contact">Prendre rendez-vous</CtaButton>
        </div>
      </section>
    </>
  );
}
