import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeading } from "@/components/section-heading";

export const Route = createFileRoute("/evenements")({
  head: () => ({
    meta: [
      { title: "Agenda diaspora — Diaspora Talent" },
      {
        name: "description",
        content:
          "Rencontres, conférences et événements pour la diaspora marocaine en Europe, Amériques et Golfe. Ne manquez aucun rendez-vous clé.",
      },
      { property: "og:title", content: "Agenda diaspora — Diaspora Talent" },
      {
        property: "og:description",
        content: "Les événements incontournables de la diaspora marocaine en 2025-2026.",
      },
    ],
  }),
  component: EvenementsPage,
});

type Event = {
  id: string;
  date: string; // ISO
  endDate?: string;
  title: string;
  subtitle: string;
  location: string;
  city: string;
  country: string;
  type: "conference" | "networking" | "forum" | "salon" | "webinar";
  organizer: string;
  link?: string;
  featured?: boolean;
  past?: boolean;
};

const EVENTS: Event[] = [
  {
    id: "cfi-paris-2026",
    date: "2026-09-18",
    endDate: "2026-09-19",
    title: "Carrefour des Compétences Marocaines",
    subtitle: "Forum annuel des talents de la diaspora — édition Paris",
    location: "Palais des Congrès, Paris",
    city: "Paris",
    country: "France",
    type: "forum",
    organizer: "CCME",
    featured: true,
  },
  {
    id: "moi-london-2026",
    date: "2026-10-07",
    title: "Morocco Opportunities International — London",
    subtitle: "Networking cocktail & panels investissement",
    location: "The Shard — Business Lounge",
    city: "Londres",
    country: "Royaume-Uni",
    type: "networking",
    organizer: "Diaspora Talent × Invest in Morocco",
    featured: true,
  },
  {
    id: "cfc-summit-2026",
    date: "2026-11-03",
    endDate: "2026-11-04",
    title: "Casablanca Finance City Summit",
    subtitle: "L'écosystème financier africain à Casablanca",
    location: "CFC Tower, Casablanca",
    city: "Casablanca",
    country: "Maroc",
    type: "conference",
    organizer: "Casablanca Finance City",
    link: "https://www.casablancafinancecity.com",
    featured: true,
  },
  {
    id: "diaspora-montreal-2026",
    date: "2026-09-26",
    title: "Soirée Diaspora Maroc — Montréal",
    subtitle: "Rencontre des professionnels marocains du Québec",
    location: "Centre Sheraton, Montréal",
    city: "Montréal",
    country: "Canada",
    type: "networking",
    organizer: "Association des Marocains au Canada",
  },
  {
    id: "webinar-dri-oct-2026",
    date: "2026-10-14",
    title: "Webinar : Comprendre le statut DRI",
    subtitle: "Fiscalité, droits et démarches administratives — live Q&A",
    location: "En ligne",
    city: "Online",
    country: "International",
    type: "webinar",
    organizer: "Diaspora Talent",
    featured: false,
  },
  {
    id: "gitex-2026",
    date: "2026-10-13",
    endDate: "2026-10-17",
    title: "GITEX Global — Pavillon Maroc Tech",
    subtitle: "La tech marocaine à Dubaï — networking diaspora Golfe",
    location: "Dubai World Trade Centre",
    city: "Dubaï",
    country: "EAU",
    type: "salon",
    organizer: "MCIT Maroc × GITEX",
    link: "https://www.gitex.com",
  },
  {
    id: "salon-immo-casablanca-2026",
    date: "2026-11-19",
    endDate: "2026-11-22",
    title: "Salon de l'Immobilier des MRE",
    subtitle: "Investir dans la pierre au Maroc — guide et opportunités",
    location: "OFEC, Casablanca",
    city: "Casablanca",
    country: "Maroc",
    type: "salon",
    organizer: "Fédération Nationale des Promoteurs Immobiliers",
  },
  {
    id: "berlin-morocco-night-2026",
    date: "2026-09-12",
    title: "Morocco Night — Berlin",
    subtitle: "Réseautage informel pour la communauté marocaine d'Allemagne",
    location: "Soho House Berlin",
    city: "Berlin",
    country: "Allemagne",
    type: "networking",
    organizer: "Maroc en Allemagne",
  },
  // Past events
  {
    id: "fidm-2026",
    date: "2026-03-20",
    endDate: "2026-03-21",
    title: "Forum International de la Diaspora Marocaine",
    subtitle: "Investissement, entrepreneuriat et retour au Maroc",
    location: "Mohammed VI Museum of Modern Art, Rabat",
    city: "Rabat",
    country: "Maroc",
    type: "forum",
    organizer: "CCME",
    past: true,
  },
  {
    id: "imf-spring-casablanca-2026",
    date: "2026-04-08",
    title: "Invest in Morocco Forum — Spring Edition",
    subtitle: "Secteurs porteurs pour la diaspora investisseure",
    location: "Four Seasons Casablanca",
    city: "Casablanca",
    country: "Maroc",
    type: "conference",
    organizer: "AMDIE",
    past: true,
  },
];

const TYPE_LABELS: Record<Event["type"], string> = {
  conference: "Conférence",
  networking: "Networking",
  forum: "Forum",
  salon: "Salon",
  webinar: "Webinar",
};

const TYPE_COLORS: Record<Event["type"], string> = {
  conference: "bg-blue-50 text-blue-800 border-blue-200",
  networking: "bg-amber-50 text-amber-800 border-amber-200",
  forum: "bg-purple-50 text-purple-800 border-purple-200",
  salon: "bg-green-50 text-green-800 border-green-200",
  webinar: "bg-slate-100 text-slate-700 border-slate-200",
};

function formatDate(iso: string, end?: string): string {
  const d = new Date(iso);
  const opts: Intl.DateTimeFormatOptions = { day: "numeric", month: "long", year: "numeric" };
  if (!end) return d.toLocaleDateString("fr-FR", opts);
  const e = new Date(end);
  if (d.getMonth() === e.getMonth() && d.getFullYear() === e.getFullYear()) {
    return `${d.getDate()}–${e.toLocaleDateString("fr-FR", opts)}`;
  }
  return `${d.toLocaleDateString("fr-FR", { day: "numeric", month: "short" })} – ${e.toLocaleDateString("fr-FR", opts)}`;
}

function EventCard({ ev }: { ev: Event }) {
  return (
    <div className={`border border-border bg-background flex flex-col transition-shadow hover:shadow-sm ${ev.past ? "opacity-60" : ""}`}>
      <div className="px-6 pt-6 pb-4 flex-1">
        <div className="flex items-start justify-between gap-4 mb-4">
          <span
            className={`text-[10px] px-2 py-1 border uppercase tracking-[0.15em] ${TYPE_COLORS[ev.type]}`}
          >
            {TYPE_LABELS[ev.type]}
          </span>
          {ev.featured && !ev.past && (
            <span className="text-[10px] uppercase tracking-[0.2em] text-primary">
              ★ Recommandé
            </span>
          )}
          {ev.past && (
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Passé
            </span>
          )}
        </div>
        <p className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground mb-2">
          {formatDate(ev.date, ev.endDate)}
        </p>
        <h3 className="font-serif text-xl mb-1 leading-snug">{ev.title}</h3>
        <p className="text-sm text-muted-foreground mb-3">{ev.subtitle}</p>
        <div className="text-xs text-muted-foreground space-y-1">
          <p>📍 {ev.location}</p>
          <p>🏛 {ev.organizer}</p>
        </div>
      </div>
      {ev.link && !ev.past && (
        <div className="px-6 pb-6">
          <a
            href={ev.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-[0.2em] text-primary hover:underline"
          >
            Site officiel ↗
          </a>
        </div>
      )}
    </div>
  );
}

function EvenementsPage() {
  const now = new Date();
  const upcoming = EVENTS.filter((e) => !e.past && new Date(e.date) >= now).sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );
  const past = EVENTS.filter((e) => e.past || new Date(e.date) < now).sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const featured = upcoming.filter((e) => e.featured);
  const regular = upcoming.filter((e) => !e.featured);

  return (
    <>
      <section className="px-6 pt-20 pb-16 lg:pt-24 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Agenda diaspora"
            title="Les rendez-vous à ne pas manquer."
            subtitle="Conférences, forums et soirées networking pour la diaspora marocaine — en Europe, aux Amériques, dans le Golfe et au Maroc."
            serifClass="text-5xl md:text-6xl"
          />
        </div>
      </section>

      {/* Featured */}
      {featured.length > 0 && (
        <section className="px-6 py-16 border-b border-border">
          <div className="max-w-7xl mx-auto">
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-8">
              Événements phares
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {featured.map((ev) => (
                <EventCard key={ev.id} ev={ev} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All upcoming */}
      {regular.length > 0 && (
        <section className="px-6 py-16 border-b border-border">
          <div className="max-w-7xl mx-auto">
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-8">
              Tous les événements à venir
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regular.map((ev) => (
                <EventCard key={ev.id} ev={ev} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Past events */}
      {past.length > 0 && (
        <section className="px-6 py-16 border-b border-border bg-secondary/10">
          <div className="max-w-7xl mx-auto">
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-8">
              Événements passés
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {past.map((ev) => (
                <EventCard key={ev.id} ev={ev} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA — suggest an event */}
      <section className="px-6 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Vous organisez un événement diaspora ?
          </p>
          <h2 className="font-serif text-3xl mb-4">
            Faites-le référencer dans notre agenda.
          </h2>
          <p className="text-sm text-muted-foreground mb-8 max-w-lg mx-auto">
            Nous sélectionnons les événements pertinents pour les cadres et dirigeants de la diaspora marocaine. Contactez-nous avec les détails.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-primary text-primary-foreground px-8 py-4 text-sm tracking-wide hover:opacity-90 transition-opacity"
          >
            Soumettre un événement →
          </Link>
        </div>
      </section>
    </>
  );
}
