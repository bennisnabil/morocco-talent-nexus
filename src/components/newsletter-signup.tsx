import { useState } from "react";
import { toast } from "sonner";

interface Props {
  variant?: "light" | "dark";
  compact?: boolean;
}

export function NewsletterSignup({ variant = "light", compact = false }: Props) {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.includes("@")) return;
    setSubmitting(true);
    setTimeout(() => {
      try {
        const existing = JSON.parse(localStorage.getItem("dt_newsletter") ?? "[]");
        if (!existing.some((s: { email: string }) => s.email === email)) {
          existing.push({ email, date: new Date().toISOString() });
          localStorage.setItem("dt_newsletter", JSON.stringify(existing));
        }
      } catch { /* noop */ }
      setSubmitting(false);
      setDone(true);
      toast.success("Vous êtes inscrit à Intelligence Diaspora.");
    }, 600);
  }

  const dark = variant === "dark";

  if (done) {
    return (
      <p className={`text-sm ${dark ? "text-secondary/70" : "text-muted-foreground"}`}>
        ✓ Inscription confirmée. À bientôt dans votre boîte mail.
      </p>
    );
  }

  if (compact) {
    return (
      <form onSubmit={onSubmit} className="flex gap-2">
        <input
          type="email"
          required
          placeholder="votre@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`flex-1 px-3 py-2 text-sm outline-none ring-1 bg-transparent transition-colors ${
            dark
              ? "ring-white/20 text-secondary placeholder:text-secondary/40 focus:ring-white/50"
              : "ring-border text-foreground placeholder:text-muted-foreground focus:ring-primary"
          }`}
        />
        <button
          type="submit"
          disabled={submitting}
          className={`px-4 py-2 text-xs tracking-wide hover:opacity-90 disabled:opacity-60 transition-opacity ${
            dark
              ? "bg-secondary text-primary"
              : "bg-primary text-primary-foreground"
          }`}
        >
          {submitting ? "…" : "S'inscrire"}
        </button>
      </form>
    );
  }

  return (
    <div className={`${dark ? "" : "bg-secondary/20 ring-1 ring-border"} p-8 md:p-10`}>
      <p className={`text-[10px] uppercase tracking-[0.3em] mb-3 ${dark ? "text-secondary/60" : "text-muted-foreground"}`}>
        Intelligence Diaspora
      </p>
      <h3 className={`font-serif text-2xl md:text-3xl mb-2 ${dark ? "text-secondary" : ""}`}>
        La newsletter des cadres qui rentrent.
      </h3>
      <p className={`text-sm mb-6 ${dark ? "text-secondary/70" : "text-muted-foreground"}`}>
        Analyses, benchmarks salariaux, actualités fiscales et opportunités — une fois par mois.
      </p>
      <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          required
          placeholder="votre@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`flex-1 px-4 py-3 text-sm outline-none ring-1 bg-transparent transition-colors ${
            dark
              ? "ring-white/20 text-secondary placeholder:text-secondary/40 focus:ring-white/50"
              : "ring-border text-foreground placeholder:text-muted-foreground focus:ring-primary"
          }`}
        />
        <button
          type="submit"
          disabled={submitting}
          className={`px-6 py-3 text-sm tracking-wide hover:opacity-90 disabled:opacity-60 transition-opacity ${
            dark ? "bg-secondary text-primary" : "bg-primary text-primary-foreground"
          }`}
        >
          {submitting ? "Envoi…" : "S'abonner gratuitement"}
        </button>
      </form>
      <p className={`mt-3 text-xs ${dark ? "text-secondary/40" : "text-muted-foreground/60"}`}>
        Sans spam. Désabonnement en un clic.
      </p>
    </div>
  );
}
