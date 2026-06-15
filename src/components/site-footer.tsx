import { Link } from "@tanstack/react-router";
import { NewsletterSignup } from "@/components/newsletter-signup";

const LINKEDIN_URL = "https://www.linkedin.com/company/diasporaconnect";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      {/* Newsletter band */}
      <div className="border-b border-border bg-primary text-primary-foreground px-6 py-12">
        <div className="max-w-2xl mx-auto">
          <NewsletterSignup variant="dark" />
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-[2fr_1fr_1fr_1fr] gap-12">
        <div className="space-y-6">
          <div className="font-serif italic text-2xl tracking-tight">DiasporaConnect</div>
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
            { to: "/calculateur", label: "Calculateur DRI" },
            { to: "/evenements", label: "Événements" },
            { to: "/mon-dossier", label: "Mon dossier" },
            { to: "/a-propos", label: "Qui sommes-nous" },
            { to: "/team", label: "Notre Équipe" },
            { to: "/join", label: "Rejoindre le Réseau" },
          ]}
        />
        <div className="space-y-5">
          <h4 className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground font-medium">
            Contact
          </h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/contact" className="text-foreground/80 hover:text-primary transition-colors">
                Prendre rendez-vous
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-foreground/80 hover:text-primary transition-colors">
                Demande de partenariat
              </Link>
            </li>
            <li>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-primary transition-colors"
              >
                LinkedIn ↗
              </a>
            </li>
            <li>
              <a
                href="mailto:contact@diasporaconnect.ma"
                className="text-foreground/80 hover:text-primary transition-colors"
              >
                contact@diasporaconnect.ma
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
          <span>© {new Date().getFullYear()} DiasporaConnect — Tous droits réservés</span>
          <div className="flex items-center gap-6">
            <Link to="/legal" className="hover:text-foreground transition-colors">
              Mentions légales
            </Link>
            <Link to="/legal" className="hover:text-foreground transition-colors">
              Politique de confidentialité
            </Link>
            <span className="italic font-serif text-sm normal-case tracking-normal">
              Aspirer au retour.
            </span>
          </div>
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
