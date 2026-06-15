import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const topLinks = [
  { to: "/network", label: "Le Réseau" },
  { to: "/companies", label: "Pour les Entreprises" },
  { to: "/insights", label: "Analyses" },
  { to: "/a-propos", label: "Qui sommes-nous" },
] as const;

const candidatLinks = [
  { to: "/return", label: "Retour au Maroc" },
  { to: "/calculateur", label: "Calculateur DRI" },
  { to: "/evenements", label: "Événements" },
  { to: "/mon-dossier", label: "Mon dossier" },
] as const;

const allMobileLinks = [
  { to: "/network", label: "Le Réseau" },
  { to: "/return", label: "Retour au Maroc" },
  { to: "/calculateur", label: "Calculateur DRI" },
  { to: "/evenements", label: "Événements" },
  { to: "/mon-dossier", label: "Mon dossier" },
  { to: "/companies", label: "Pour les Entreprises" },
  { to: "/insights", label: "Analyses" },
  { to: "/a-propos", label: "Qui sommes-nous" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="px-4 lg:px-8 py-4 flex flex-col gap-1">
        {/* Row 1 — logo + mobile toggle */}
        <div className="flex items-center justify-between">
          <Link to="/" className="font-serif italic text-3xl tracking-tight">
            DiasporaConnect
          </Link>
          <button
            className="lg:hidden p-2"
            aria-label="Ouvrir le menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
        {/* Row 2 — nav links */}
        <nav className="hidden lg:flex items-center justify-between">
          <div className="flex items-center gap-6 text-xs tracking-wide">
            {topLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-foreground/60 hover:text-primary transition-colors"
                activeProps={{ className: "text-primary" }}
              >
                {l.label}
              </Link>
            ))}
            {/* Dropdown Espace Candidat */}
            <div className="relative" onMouseEnter={() => setDropOpen(true)} onMouseLeave={() => setDropOpen(false)}>
              <button className="flex items-center gap-1 text-foreground/60 hover:text-primary transition-colors text-xs tracking-wide">
                Espace Candidat <ChevronDown className={`size-3 transition-transform ${dropOpen ? "rotate-180" : ""}`} />
              </button>
              {dropOpen && (
                <div className="absolute top-full left-0 mt-1 bg-background border border-border shadow-sm py-1 min-w-[180px] z-50">
                  {candidatLinks.map((l) => (
                    <Link
                      key={l.to}
                      to={l.to}
                      className="block px-4 py-2 text-xs text-foreground/70 hover:text-primary hover:bg-secondary/30 transition-colors"
                      activeProps={{ className: "text-primary" }}
                      onClick={() => setDropOpen(false)}
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
          <Link
            to="/contact"
            className="bg-primary text-primary-foreground px-4 py-1.5 text-xs tracking-wide hover:opacity-90 transition-opacity"
          >
            Prendre rendez-vous
          </Link>
        </nav>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background animate-fade-in">
          <nav className="px-6 py-6 flex flex-col gap-4">
            {allMobileLinks.map((l) => (
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
