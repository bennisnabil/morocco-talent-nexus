import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/section-heading";
import { CtaButton } from "@/components/cta-button";
import { PartnerLogos } from "@/components/partner-logos";

export const Route = createFileRoute("/companies")({
  head: () => ({
    meta: [
      { title: "Pour les entreprises — Executive Search | Diaspora Talent" },
      {
        name: "description",
        content:
          "Accédez aux talents marocains de classe mondiale. Executive search, cartographie diaspora, recrutement confidentiel et leadership hiring.",
      },
      { property: "og:title", content: "Pour les entreprises — Diaspora Talent" },
      {
        property: "og:description",
        content: "Talents exécutifs marocains de calibre international, à la demande.",
      },
    ],
  }),
  component: CompaniesPage,
});

function CompaniesPage() {
  return (
    <>
      <section className="px-6 pt-20 pb-16 lg:pt-24 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Pour les entreprises"
            title="Accédez aux talents marocains de classe mondiale."
            subtitle="Une pratique d'executive search privée pour les organisations qui se mesurent au monde et dirigent localement."
            serifClass="text-5xl md:text-7xl"
          />
          <div className="mt-12 flex flex-wrap gap-3">
            <CtaButton to="/contact">Initier un mandat</CtaButton>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-1">
          {[
            ["Executive Search", "Recherche retenue et discrète pour les rôles C-level, board et leadership senior. Nous menons un nombre limité de mandats par an — c'est un choix."],
            ["Cartographie diaspora", "Intelligence complète sur les cadres marocains seniors dans les institutions financières, technologiques, industrielles et académiques mondiales."],
            ["Recrutement confidentiel", "Quand la discrétion ne se négocie pas. Mandats off-market traités en confidentialité absolue."],
            ["Leadership hiring", "Partenariats long terme avec champions nationaux, acteurs souverains et groupes privés ambitieux."],
          ].map(([t, d], i) => (
            <div
              key={t}
              className="p-10 md:p-14 ring-1 ring-border bg-background"
            >
              <span className="font-serif italic text-3xl text-gold block mb-6">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-serif text-3xl mb-4">{t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-16 bg-secondary/30 border-y border-border">
        <div className="max-w-5xl mx-auto text-center">
          <SectionHeading
            align="center"
            eyebrow="Sélectivité"
            title="Nous acceptons moins de trente mandats par an."
            subtitle="Nos standards protègent à la fois les cadres que nous représentons et les organisations que nous servons. Le résultat : des décisions qui durent."
          />
        </div>
      </section>

      <section className="px-6 py-12 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <PartnerLogos full />
        </div>
      </section>

      <section className="px-6 py-16 bg-primary text-primary-foreground text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-6">
            Initier un partenariat.
          </h2>
          <p className="text-secondary/70 mb-10">
            Les discussions confidentielles commencent par un appel de trente minutes.
          </p>
          <CtaButton to="/contact">Contacter nos partners</CtaButton>
        </div>
      </section>
    </>
  );
}
