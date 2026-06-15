import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/network", label: "Le Réseau" },
  { to: "/return", label: "Retour au Maroc" },
  { to: "/companies", label: "Pour les Entreprises" },
  { to: "/calculateur", label: "Calculateur DRI" },
  { to: "/evenements", label: "Événements" },
  { to: "/insights", label: "Analyses" },
  { to: "/a-propos", label: "Qui sommes-nous" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-12 flex items-center justify-between">
        <Link to="/" className="font-serif italic text-2xl tracking-tight">
          Diaspora <span className="text-muted-foreground">·</span> Talent
        </Link>
        <nav className="hidden lg:flex items-center gap-8 text-sm">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-foreground/70 hover:text-primary transition-colors"
              activeProps={{ className: "text-primary" }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-primary text-primary-foreground px-4 py-2 text-sm tracking-wide hover:opacity-90 transition-opacity"
          >
            Prendre rendez-vous
          </Link>
        </nav>
        <button
          className="lg:hidden p-2"
          aria-label="Ouvrir le menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background animate-fade-in">
          <nav className="px-6 py-6 flex flex-col gap-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-base text-foreground/80 hover:text-primary"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="bg-primary text-primary-foreground px-4 py-3 text-sm tracking-wide text-center mt-2"
            >
              Prendre rendez-vous
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
