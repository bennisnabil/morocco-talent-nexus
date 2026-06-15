import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/section-heading";
import { CtaButton } from "@/components/cta-button";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Notre Équipe — DiasporaConnect" },
      {
        name: "description",
        content:
          "Les partners et conseillers de DiasporaConnect — des professionnels marocains qui ont eux-mêmes vécu la transition internationale.",
      },
      { property: "og:title", content: "Notre Équipe — DiasporaConnect" },
      {
        property: "og:description",
        content:
          "Des experts qui ont navigué les deux mondes — et qui guident aujourd'hui les cadres de la diaspora marocaine.",
      },
    ],
  }),
  component: TeamPage,
});

const team = [
  {
    name: "À compléter",
    role: "Managing Partner",
    bio: "Parcours international en finance d'entreprise et executive search. A accompagné des transitions de carrière entre l'Europe et le Maghreb pendant plus d'une décennie.",
    linkedin: "https://www.linkedin.com/company/diasporaconnect",
    location: "Casablanca · Paris",
    sectors: ["Finance", "Executive Search"],
  },
  {
    name: "À compléter",
    role: "Partner — Retour & Relocation",
    bio: "Ancienne cadre MRE rentrée au Maroc après 12 ans à Londres. Spécialiste des dispositifs DRI, de la fiscalité des non-résidents et de l'accompagnement à la relocation familiale.",
    linkedin: "https://www.linkedin.com/company/diasporaconnect",
    location: "Rabat · Londres",
    sectors: ["Droit fiscal", "Relocation", "ESG"],
  },
  {
    name: "À compléter",
    role: "Partner — Tech & Innovation",
    bio: "Ingénieur et entrepreneur, passé par Silicon Valley et Berlin. Accompagne les profils tech et deep-tech dans leur retour au Maroc et leur insertion dans l'écosystème startup marocain.",
    linkedin: "https://www.linkedin.com/company/diasporaconnect",
    location: "Casablanca · San Francisco",
    sectors: ["Tech", "Startup", "Venture"],
  },
];

const advisors = [
  {
    name: "À compléter",
    role: "Conseiller Senior — Marché africain",
    origin: "Dakar · Casablanca",
  },
  {
    name: "À compléter",
    role: "Conseillère — Secteur Santé & Sciences",
    origin: "Montréal · Rabat",
  },
  {
    name: "À compléter",
    role: "Conseiller — Infrastructure & Souveraineté",
    origin: "Dubaï · Casablanca",
  },
];

function TeamPage() {
  return (
    <>
      <section className="px-6 pt-20 pb-16 lg:pt-24 border-b border-border">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            eyebrow="Notre Équipe"
            title="Des partners qui ont navigué les deux mondes."
            subtitle="Chaque membre de l'équipe DiasporaConnect a lui-même vécu la transition internationale — c'est notre différence fondamentale."
            serifClass="text-5xl md:text-6xl"
          />
        </div>
      </section>

      {/* Partners */}
      <section className="px-6 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-12">
            01 — Partners
          </p>
          <div className="grid md:grid-cols-3 gap-1">
            {team.map((member) => (
              <div
                key={member.name}
                className="p-8 ring-1 ring-border bg-background hover:ring-primary/30 transition-all"
              >
                {/* Avatar placeholder */}
                <div className="size-16 rounded-full bg-primary/10 grid place-items-center text-primary text-sm font-medium mb-6">
                  {member.name === "À compléter" ? "?" : member.name.split(" ").map((n) => n[0]).join("")}
                </div>

                <h3 className="font-medium text-lg mb-1">{member.name}</h3>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                  {member.role}
                </p>
                <p className="text-sm text-foreground/80 leading-relaxed mb-6">{member.bio}</p>

                <div className="space-y-2 text-xs text-muted-foreground">
                  <p>📍 {member.location}</p>
                  <p>🎯 {member.sectors.join(" · ")}</p>
                </div>

                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-xs text-primary hover:underline underline-offset-4"
                >
                  Profil LinkedIn ↗
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="px-6 py-16 lg:py-20 bg-secondary/20 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-12">
            02 — Conseil consultatif
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {advisors.map((a) => (
              <div key={a.name} className="space-y-2">
                <div className="size-10 rounded-full bg-primary/10 grid place-items-center text-primary text-xs">
                  {a.name === "À compléter" ? "?" : a.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <p className="font-medium">{a.name}</p>
                <p className="text-xs text-muted-foreground">{a.role}</p>
                <p className="text-xs text-muted-foreground/60">📍 {a.origin}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-6 py-16 lg:py-20 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-8">
            03 — Notre approche
          </p>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              ["Discrétion absolue", "Chaque dossier est traité avec une confidentialité stricte. Votre candidature ne circule jamais sans votre accord explicite."],
              ["Sélectivité assumée", "Nous refusons l'échelle au profit de la qualité. Moins de trente mandats par an, pour garantir une attention maximale à chaque dossier."],
              ["Expertise vécue", "Nos partners ont tous traversé une transition internationale. Nous ne théorisons pas le retour — nous l'avons vécu."],
            ].map(([t, d]) => (
              <div key={t}>
                <h4 className="font-medium mb-3">{t}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16 lg:py-20 bg-primary text-primary-foreground text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-6">
            Discutons de votre prochain chapitre.
          </h2>
          <CtaButton to="/contact">Prendre rendez-vous</CtaButton>
        </div>
      </section>
    </>
  );
}
