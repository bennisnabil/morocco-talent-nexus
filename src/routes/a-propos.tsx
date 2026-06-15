import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeading } from "@/components/section-heading";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: "Qui sommes-nous — Diaspora Talent by Gibraltar Consulting" },
      {
        name: "description",
        content:
          "Diaspora Talent est une initiative de Gibraltar Consulting — cabinet d'executive search fondé en 2014, spécialiste des Talents Marocains du Monde et membre du réseau Talentor (Global Top 40).",
      },
      { property: "og:title", content: "Qui sommes-nous — Diaspora Talent" },
    ],
  }),
  component: AProposPage,
});

function AProposPage() {
  return (
    <>
      {/* Hero */}
      <section className="px-6 pt-20 pb-16 lg:pt-24 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Qui sommes-nous"
            title="Gibraltar Consulting."
            subtitle="Diaspora Talent est une initiative de Gibraltar Consulting — cabinet d'executive search fondé en 2014, dédié aux Talents Marocains du Monde."
            serifClass="text-5xl md:text-7xl"
          />
        </div>
      </section>

      {/* Édito */}
      <section className="px-6 py-16 border-b border-border">
        <div className="max-w-3xl mx-auto">
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-6">Édito</p>
          <blockquote className="font-serif text-2xl md:text-3xl leading-snug text-balance mb-8">
            "Le capital humain n'est pas une ressource parmi d'autres — il est le moteur de toute transformation durable."
          </blockquote>
          <div className="space-y-4 text-sm text-muted-foreground leading-relaxed border-l-2 border-primary pl-6">
            <p>
              Depuis 2014, Gibraltar Consulting accompagne les organisations africaines et internationales dans l'identification, l'évaluation et l'intégration de leurs leaders. Notre ambition dépasse le simple acte de recrutement.
            </p>
            <p>
              Notre spécificité : l'identification et l'attraction des <strong className="text-foreground">Talents Marocains du Monde</strong>. Nous avons conçu un dispositif d'accompagnement 360° qui sécurise chaque étape du retour — du premier contact jusqu'à l'intégration réussie.
            </p>
          </div>
          <div className="mt-8 flex items-center gap-4">
            <div>
              <p className="font-medium text-sm">Amine Bennis</p>
              <p className="text-xs text-muted-foreground">Fondateur & Directeur Général — Gibraltar Consulting</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4 pillars */}
      <section className="px-6 py-16 border-b border-border bg-secondary/10">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-10">
            Notre offre intégrée
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-1">
            {[
              {
                title: "Executive Search",
                desc: "Identification et approche directe des meilleurs dirigeants et cadres, au Maroc et à l'international.",
              },
              {
                title: "Développement du Leadership",
                desc: "Coaching, assessment 360° et accompagnement des équipes dirigeantes.",
              },
              {
                title: "Conseil RH & Transformation",
                desc: "Refonte des processus RH, DRH à temps partagé, conduite du changement.",
              },
              {
                title: "Talents Marocains du Monde",
                desc: "Expertise exclusive : identification, conviction et intégration des profils diaspora.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-background border border-border p-6">
                <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-3">
                  0{i + 1}
                </p>
                <h3 className="font-serif text-lg mb-3 leading-snug">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key stats */}
      <section className="px-6 py-16 border-b border-border bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] uppercase tracking-[0.3em] opacity-60 mb-10">
            10 ans d'excellence · Fondé en 2014
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {[
              { val: "24", label: "CEO & PDG recrutés" },
              { val: "96", label: "Directeurs & VP" },
              { val: "150+", label: "Managers & Cadres intégrés" },
              { val: "300+", label: "Profils mid-level recrutés" },
              { val: "200+", label: "Missions de coaching exécutif" },
            ].map((s) => (
              <div key={s.val}>
                <p className="font-serif text-5xl mb-2">{s.val}</p>
                <p className="text-xs opacity-60 leading-snug">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Talentor network */}
      <section className="px-6 py-16 border-b border-border">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4">
              Notre réseau international
            </p>
            <h2 className="font-serif text-3xl md:text-4xl mb-4">
              Talentor — Global Top 40
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Gibraltar Consulting fait partie des cabinets d'executive search les plus reconnus au niveau mondial, classé <strong>Global Top 40</strong> par Hunt Scanlon à travers son réseau Talentor. Une couverture en executive search, recrutement de cadres dirigeants et conseil en talents sur 5 continents.
            </p>
            <a
              href="https://www.talentor.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-[0.2em] text-primary hover:underline"
            >
              www.talentor.com ↗
            </a>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {[
              { val: "Top 40", label: "Cabinets executive search mondiaux" },
              { val: "540+", label: "Consultants sur 5 continents" },
              { val: "40+", label: "Pays couverts" },
            ].map((s) => (
              <div key={s.val} className="bg-primary text-primary-foreground p-6">
                <p className="font-serif text-3xl mb-2">{s.val}</p>
                <p className="text-xs opacity-60 leading-snug">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 pillars */}
      <section className="px-6 py-16 border-b border-border bg-secondary/10">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-10">
            Notre philosophie
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Authenticité",
                desc: "Des relations vraies, fondées sur l'écoute et la compréhension profonde des projets humains et organisationnels.",
              },
              {
                title: "Précision",
                desc: "Une méthodologie propriétaire (Skills & Sens Panorama) qui évalue les compétences et le sens que le talent accorde à sa carrière.",
              },
              {
                title: "Audace",
                desc: "La conviction que les meilleurs talents marocains du monde peuvent et doivent contribuer à la transformation du Royaume.",
              },
            ].map((p) => (
              <div key={p.title} className="border-l-2 border-primary pl-6 py-2">
                <h3 className="font-serif text-xl mb-3">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TMM specificity */}
      <section className="px-6 py-16 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-10">
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4">
              Notre spécificité
            </p>
            <h2 className="font-serif text-3xl md:text-4xl mb-4">
              Talents Marocains du Monde.
            </h2>
            <p className="text-sm text-muted-foreground">
              Recruter un talent marocain du monde, ce n'est pas seulement pourvoir un poste. C'est réussir une reconnexion — professionnelle, familiale et culturelle. Un dispositif d'accompagnement 360° unique au Maroc.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            {[
              {
                title: "Vivier à forte valeur ajoutée",
                desc: "Profils formés à l'étranger, porteurs d'expertises stratégiques et de standards internationaux.",
              },
              {
                title: "Levée des freins au retour",
                desc: "Coaching, relocation, scolarité, logement, formalités, intégration culturelle.",
              },
              {
                title: "Alignement des ambitions",
                desc: "Une rencontre juste entre un projet d'entreprise et un projet de vie.",
              },
              {
                title: "Ancrage local & portée internationale",
                desc: "Marché marocain + réseau Talentor dans 40+ pays.",
              },
            ].map((item) => (
              <div key={item.title} className="border border-border p-6">
                <h4 className="font-medium mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-xs text-muted-foreground tracking-wider text-center">
            Écouter → Identifier → Convaincre → Accompagner → Intégrer → Fidéliser
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-6">
            Restons en contact
          </p>
          <div className="grid sm:grid-cols-2 gap-8 text-sm mb-10">
            <div>
              <p className="font-medium mb-1">Amine Bennis</p>
              <p className="text-muted-foreground text-xs mb-1">Fondateur & Directeur Général</p>
              <a href="mailto:a.bennis@gibraltar.ma" className="text-primary hover:underline text-xs">
                a.bennis@gibraltar.ma
              </a>
            </div>
            <div>
              <p className="font-medium mb-1">Nabil Bennis</p>
              <p className="text-muted-foreground text-xs mb-1">Consultant Recrutement</p>
              <a href="mailto:n.bennis@gibraltar.ma" className="text-primary hover:underline text-xs">
                n.bennis@gibraltar.ma
              </a>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
            <a href="https://www.gibraltar.ma" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
              www.gibraltar.ma ↗
            </a>
            <span>14, rue du soldat Hammou — Casablanca</span>
          </div>
          <div className="mt-8 flex gap-4">
            <Link
              to="/join"
              className="bg-primary text-primary-foreground px-8 py-4 text-sm tracking-wide hover:opacity-90 transition-opacity"
            >
              Postuler au réseau
            </Link>
            <Link
              to="/contact"
              className="border border-border px-8 py-4 text-sm tracking-wide hover:border-foreground/40 transition-colors"
            >
              Prendre rendez-vous
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
