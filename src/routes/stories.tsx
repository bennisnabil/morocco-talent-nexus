import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/stories")({
  head: () => ({
    meta: [
      { title: "Témoignages — Diaspora Talent" },
      { name: "description", content: "Bientôt disponibles — témoignages de la diaspora marocaine d'excellence." },
    ],
  }),
  component: StoriesPage,
});

function StoriesPage() {
  return (
    <section className="px-6 py-32 flex flex-col items-center justify-center min-h-[60vh] text-center">
      <p className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground mb-6">
        Témoignages
      </p>
      <h1 className="font-serif text-5xl md:text-6xl mb-6">En construction.</h1>
      <p className="text-sm text-muted-foreground max-w-md leading-relaxed mb-10">
        Nous recueillons actuellement les témoignages de membres du réseau. Revenez bientôt.
      </p>
      <Link
        to="/join"
        className="bg-primary text-primary-foreground px-8 py-4 text-sm tracking-wide hover:opacity-90 transition-opacity"
      >
        Rejoindre le réseau
      </Link>
    </section>
  );
}
