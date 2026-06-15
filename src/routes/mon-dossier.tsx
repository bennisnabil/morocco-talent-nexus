import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SectionHeading } from "@/components/section-heading";

export const Route = createFileRoute("/mon-dossier")({
  head: () => ({
    meta: [
      { title: "Mon dossier — DiasporaConnect" },
      {
        name: "description",
        content:
          "Suivez l'état de votre candidature au réseau DiasporaConnect. Accédez à votre dossier par email.",
      },
      { property: "og:title", content: "Mon dossier — DiasporaConnect" },
    ],
  }),
  component: MonDossierPage,
});

type Submission = {
  id: string;
  type: "candidature" | "contact";
  name: string;
  email: string;
  date: string;
  status: "new" | "in_progress" | "accepted" | "refused";
  notes?: string;
  sector?: string;
  seniority?: string;
  location?: string;
  role?: string;
  country?: string;
};

const STATUS_CONFIG: Record<
  Submission["status"],
  { label: string; color: string; desc: string }
> = {
  new: {
    label: "Reçue",
    color: "text-amber-700 bg-amber-50 border-amber-200",
    desc: "Votre dossier a été reçu. Notre équipe l'examinera sous 5 jours ouvrés.",
  },
  in_progress: {
    label: "En cours d'examen",
    color: "text-blue-700 bg-blue-50 border-blue-200",
    desc: "Votre candidature est en cours d'analyse par notre équipe.",
  },
  accepted: {
    label: "Acceptée ✓",
    color: "text-green-700 bg-green-50 border-green-200",
    desc: "Félicitations — vous êtes admis(e) au réseau DiasporaConnect. Un partner va vous contacter.",
  },
  refused: {
    label: "Non retenue",
    color: "text-slate-600 bg-slate-100 border-slate-200",
    desc: "Votre candidature n'a pas été retenue à ce stade. Vous pouvez repostuler dans 6 mois.",
  },
};

const STEPS: { key: Submission["status"]; label: string }[] = [
  { key: "new", label: "Reçue" },
  { key: "in_progress", label: "Examen" },
  { key: "accepted", label: "Décision" },
];

function StepIndicator({ status }: { status: Submission["status"] }) {
  const order: Submission["status"][] = ["new", "in_progress", "accepted", "refused"];
  const idx = order.indexOf(status);

  return (
    <div className="flex items-center gap-0 mb-8">
      {STEPS.map((step, i) => {
        const stepOrder = order.indexOf(step.key);
        const done = status === "refused" ? i < 2 : idx >= stepOrder;
        const active = idx === stepOrder && status !== "refused";
        return (
          <div key={step.key} className="flex items-center flex-1">
            <div className="flex flex-col items-center">
              <div
                className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-semibold transition-colors ${
                  done && status !== "refused"
                    ? "border-primary bg-primary text-primary-foreground"
                    : active
                    ? "border-primary text-primary"
                    : "border-border text-muted-foreground"
                }`}
              >
                {done && status !== "refused" ? "✓" : i + 1}
              </div>
              <span
                className={`mt-2 text-[10px] uppercase tracking-[0.15em] whitespace-nowrap ${
                  active ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {step.label}
              </span>
            </div>
            {i < STEPS.length - 1 && (
              <div
                className={`flex-1 h-px mx-2 mb-5 ${
                  idx > stepOrder && status !== "refused" ? "bg-primary" : "bg-border"
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

function MonDossierPage() {
  const [email, setEmail] = useState("");
  const [result, setResult] = useState<Submission[] | null>(null);
  const [searched, setSearched] = useState(false);

  function lookup(e: React.FormEvent) {
    e.preventDefault();
    const normalized = email.trim().toLowerCase();
    try {
      const all: Submission[] = JSON.parse(
        localStorage.getItem("dt_submissions") ?? "[]"
      );
      const found = all.filter(
        (s) => s.email.toLowerCase() === normalized
      );
      setResult(found);
    } catch {
      setResult([]);
    }
    setSearched(true);
  }

  function fmtDate(iso: string) {
    return new Date(iso).toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  }

  return (
    <>
      <section className="px-6 pt-20 pb-16 lg:pt-24 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Espace membre"
            title="Suivez votre dossier."
            subtitle="Entrez l'adresse email utilisée lors de votre candidature pour consulter l'avancement de votre dossier."
            serifClass="text-5xl md:text-6xl"
          />
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="max-w-xl mx-auto">

          {/* Lookup form */}
          <form onSubmit={lookup} className="flex gap-3 mb-12">
            <input
              type="email"
              required
              placeholder="votre@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-background ring-1 ring-border focus:ring-primary outline-none px-4 py-3 text-sm transition-colors"
            />
            <button
              type="submit"
              className="bg-primary text-primary-foreground px-6 py-3 text-sm tracking-wide hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              Consulter
            </button>
          </form>

          {/* No results */}
          {searched && result !== null && result.length === 0 && (
            <div className="border border-border p-8 text-center">
              <p className="font-serif text-2xl mb-3">Aucun dossier trouvé</p>
              <p className="text-sm text-muted-foreground mb-6">
                Aucune candidature ou demande n'est associée à cet email. Vérifiez l'adresse ou déposez votre candidature.
              </p>
              <div className="flex gap-4 justify-center">
                <Link
                  to="/join"
                  className="bg-primary text-primary-foreground px-6 py-3 text-sm tracking-wide hover:opacity-90 transition-opacity"
                >
                  Postuler au réseau
                </Link>
                <Link
                  to="/contact"
                  className="border border-border px-6 py-3 text-sm tracking-wide hover:border-foreground/40 transition-colors"
                >
                  Nous contacter
                </Link>
              </div>
            </div>
          )}

          {/* Results */}
          {result && result.length > 0 && (
            <div className="space-y-10">
              {result.map((sub) => {
                const cfg = STATUS_CONFIG[sub.status];
                return (
                  <div key={sub.id} className="border border-border">
                    {/* Header */}
                    <div className="px-6 py-5 border-b border-border bg-secondary/10 flex items-start justify-between gap-4">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-1">
                          {sub.type === "candidature" ? "Candidature réseau" : "Demande de contact"}
                        </p>
                        <p className="font-serif text-xl">{sub.name}</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          Soumise le {fmtDate(sub.date)}
                        </p>
                      </div>
                      <span className={`text-[11px] px-3 py-1.5 border whitespace-nowrap ${cfg.color}`}>
                        {cfg.label}
                      </span>
                    </div>

                    {/* Progress */}
                    <div className="px-6 pt-8 pb-4">
                      <StepIndicator status={sub.status} />
                      <div className={`px-4 py-3 border text-sm ${cfg.color}`}>
                        {cfg.desc}
                      </div>
                    </div>

                    {/* Details */}
                    {(sub.sector || sub.seniority || sub.location || sub.role || sub.country) && (
                      <div className="px-6 pb-6 pt-2">
                        <div className="grid sm:grid-cols-2 gap-4 text-sm">
                          {sub.sector && (
                            <div>
                              <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1">Secteur</p>
                              <p>{sub.sector}</p>
                            </div>
                          )}
                          {sub.seniority && (
                            <div>
                              <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1">Séniorité</p>
                              <p>{sub.seniority}</p>
                            </div>
                          )}
                          {sub.location && (
                            <div>
                              <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1">Localisation</p>
                              <p>{sub.location}</p>
                            </div>
                          )}
                          {sub.role && (
                            <div>
                              <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1">Fonction</p>
                              <p>{sub.role}</p>
                            </div>
                          )}
                          {sub.country && (
                            <div>
                              <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1">Pays</p>
                              <p>{sub.country}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Notes from admin (only if set) */}
                    {sub.notes && (
                      <div className="px-6 pb-6">
                        <div className="border-l-2 border-primary pl-4 py-2">
                          <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1">
                            Message de notre équipe
                          </p>
                          <p className="text-sm">{sub.notes}</p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}

              <p className="text-xs text-muted-foreground text-center">
                Une question ? Contactez-nous à{" "}
                <a href="mailto:contact@diasporaconnect.ma" className="underline">
                  contact@diasporaconnect.ma
                </a>
              </p>
            </div>
          )}

          {/* Info block — shown before any search */}
          {!searched && (
            <div className="border border-border p-8 bg-secondary/10">
              <h3 className="font-serif text-xl mb-4">Comment ça marche ?</h3>
              <ol className="text-sm text-muted-foreground space-y-3">
                <li className="flex gap-3">
                  <span className="text-primary font-semibold shrink-0">1.</span>
                  Vous soumettez votre candidature via{" "}
                  <Link to="/join" className="underline hover:text-foreground">
                    la page Rejoindre
                  </Link>
                  .
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-semibold shrink-0">2.</span>
                  Notre équipe examine votre dossier sous 5 jours ouvrés.
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-semibold shrink-0">3.</span>
                  Vous suivez l'avancement ici en temps réel.
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-semibold shrink-0">4.</span>
                  En cas d'admission, un partner vous contacte directement.
                </li>
              </ol>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
