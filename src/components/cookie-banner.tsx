import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";

const STORAGE_KEY = "dt_cookie_consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = sessionStorage.getItem(STORAGE_KEY);
      if (!stored) setVisible(true);
    } catch {
      // sessionStorage unavailable — show banner
      setVisible(true);
    }
  }, []);

  function accept() {
    try { sessionStorage.setItem(STORAGE_KEY, "accepted"); } catch { /* noop */ }
    setVisible(false);
  }

  function decline() {
    try { sessionStorage.setItem(STORAGE_KEY, "declined"); } catch { /* noop */ }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Consentement aux cookies"
      className="fixed bottom-0 left-0 right-0 z-[100] border-t border-border bg-background/95 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-sm text-foreground/80 max-w-[70ch] leading-relaxed">
          Ce site utilise uniquement des cookies techniques nécessaires à son fonctionnement.
          Aucun cookie publicitaire n'est utilisé.{" "}
          <Link to="/legal" className="underline underline-offset-4 hover:text-primary transition-colors">
            En savoir plus
          </Link>
        </p>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={decline}
            className="text-xs text-muted-foreground hover:text-foreground transition-colors px-4 py-2 border border-border hover:border-foreground/30"
          >
            Refuser
          </button>
          <button
            onClick={accept}
            className="text-xs bg-primary text-primary-foreground px-5 py-2 hover:opacity-90 transition-opacity tracking-wide"
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  );
}
