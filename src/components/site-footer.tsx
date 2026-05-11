import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-[2fr_1fr_1fr_1fr] gap-12">
        <div className="space-y-6">
          <div className="font-serif italic text-2xl tracking-tight">Atlas &amp; Atlas</div>
          <p className="text-sm text-muted-foreground max-w-[36ch]">
            Le réseau privé de référence reliant la diaspora marocaine d'excellence à l'avenir stratégique du Royaume.
          </p>
        </div>
        <FooterCol
          title="Réseau"
          items={[
            { to: "/network", label: "Plateforme Talents" },
            { to: "/return", label: "Retour au Maroc" },
            { to: "/companies", label: "Executive Search" },
          ]}
        />
        <FooterCol
          title="Découvrir"
          items={[
            { to: "/stories", label: "Témoignages" },
            { to: "/insights", label: "Analyses" },
            { to: "/join", label: "Rejoindre le Réseau" },
          ]}
        />
        <FooterCol
          title="Contact"
          items={[
            { to: "/contact", label: "Prendre rendez-vous" },
            { to: "/contact", label: "Demande de partenariat" },
            { to: "/contact", label: "LinkedIn" },
          ]}
        />
      </div>
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
          <span>© {new Date().getFullYear()} Atlas &amp; Atlas — Tous droits réservés</span>
          <span className="italic font-serif text-sm normal-case tracking-normal">
            Aspirer au retour.
          </span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  items,
}: {
  title: string;
  items: { to: string; label: string }[];
}) {
  return (
    <div className="space-y-5">
      <h4 className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground font-medium">
        {title}
      </h4>
      <ul className="space-y-3 text-sm">
        {items.map((it, i) => (
          <li key={i}>
            <Link to={it.to} className="text-foreground/80 hover:text-primary transition-colors">
              {it.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
