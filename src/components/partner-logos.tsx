/**
 * PartnerLogos — Social proof strip showing partner & client organizations.
 * Uses text-based logo placeholders styled to match the brand aesthetic.
 * Replace the `logo` field with <img> or SVG imports once real assets are available.
 */

interface Partner {
  name: string;
  category: "recruteur" | "institutionnel" | "ecosysteme";
  url?: string;
  abbr: string;  // Short text used as placeholder logo
}

const PARTNERS: Partner[] = [
  { name: "OCP Group", abbr: "OCP", category: "recruteur", url: "https://www.ocpgroup.ma" },
  { name: "Attijariwafa Bank", abbr: "AWB", category: "recruteur", url: "https://www.attijariwafa.com" },
  { name: "Casablanca Finance City", abbr: "CFC", category: "institutionnel", url: "https://www.casablancafinancecity.com" },
  { name: "AMDIE", abbr: "AMDIE", category: "institutionnel", url: "https://www.invest.gov.ma" },
  { name: "CCME", abbr: "CCME", category: "institutionnel", url: "https://www.ccme.org.ma" },
  { name: "Maroc Numeric", abbr: "MN", category: "ecosysteme" },
  { name: "Maroc PME", abbr: "MPME", category: "ecosysteme" },
  { name: "InQilab", abbr: "INQ", category: "ecosysteme" },
];

const CATEGORY_LABEL: Record<Partner["category"], string> = {
  recruteur: "Entreprises partenaires",
  institutionnel: "Partenaires institutionnels",
  ecosysteme: "Écosystème d'innovation",
};

interface Props {
  /** Show all categories with headings */
  full?: boolean;
  /** Single-row strip mode (for homepage) */
  strip?: boolean;
}

export function PartnerLogos({ full = false, strip = true }: Props) {
  if (strip) {
    return (
      <div className="border-y border-border py-10 overflow-hidden">
        <p className="text-center text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-8">
          Ils nous font confiance
        </p>
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-5">
          {PARTNERS.map((p) => (
            <LogoChip key={p.name} partner={p} />
          ))}
        </div>
        <p className="text-center text-[10px] text-muted-foreground/60 mt-8 tracking-wide">
          Logos indicatifs — partenariats en cours de formalisation
        </p>
      </div>
    );
  }

  if (full) {
    const categories = Array.from(new Set(PARTNERS.map((p) => p.category)));
    return (
      <div className="space-y-12">
        {categories.map((cat) => (
          <div key={cat}>
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-6">
              {CATEGORY_LABEL[cat]}
            </p>
            <div className="flex flex-wrap gap-4">
              {PARTNERS.filter((p) => p.category === cat).map((p) => (
                <LogoChip key={p.name} partner={p} large />
              ))}
            </div>
          </div>
        ))}
        <p className="text-xs text-muted-foreground/60">
          Logos indicatifs — partenariats en cours de formalisation.
        </p>
      </div>
    );
  }

  return null;
}

function LogoChip({ partner, large }: { partner: Partner; large?: boolean }) {
  const inner = (
    <div
      title={partner.name}
      className={`
        border border-border/60 bg-background hover:border-primary/40 transition-colors
        flex items-center justify-center font-medium tracking-wide text-muted-foreground hover:text-foreground
        ${large ? "h-16 px-8 text-sm min-w-[120px]" : "h-10 px-5 text-xs min-w-[80px]"}
      `}
    >
      {partner.abbr}
    </div>
  );

  if (partner.url) {
    return (
      <a href={partner.url} target="_blank" rel="noopener noreferrer">
        {inner}
      </a>
    );
  }
  return inner;
}
