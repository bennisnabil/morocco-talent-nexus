/**
 * PartnerLogos — Social proof strip showing clients & partners of Gibraltar Consulting.
 * Source: Gibraltar Consulting presentation — slide "Ils nous font confiance" (slide 20).
 */

interface Partner {
  name: string;
  category: "education" | "finance" | "food" | "industrie" | "pharma" | "reseau";
  url?: string;
}

const PARTNERS: Partner[] = [
  // Éducation & Recherche
  { name: "UM6P", category: "education", url: "https://www.um6p.ma" },
  { name: "Aradei Capital", category: "education" },
  { name: "Omnidior", category: "education" },
  { name: "Tomu Construction", category: "education" },
  // Financial Services & Insurance
  { name: "McKinsey & Co", category: "finance", url: "https://www.mckinsey.com" },
  { name: "Sanlam", category: "finance" },
  { name: "4FLOW", category: "finance" },
  { name: "Alpha10X", category: "finance" },
  { name: "Bankingly", category: "finance" },
  { name: "Agri Edge", category: "finance" },
  // Food & Beverage
  { name: "Aiguebelle", category: "food" },
  { name: "GIZ", category: "food", url: "https://www.giz.de" },
  // Industrial / Manufacturing
  { name: "OCP Solutions", category: "industrie", url: "https://www.ocpgroup.ma" },
  { name: "Stratëus Group", category: "industrie" },
  { name: "OZÉ", category: "industrie" },
  { name: "Bluebirds", category: "industrie" },
  // Pharma & Healthcare
  { name: "Megaflex", category: "pharma" },
  // Réseau
  { name: "Talentor", category: "reseau", url: "https://www.talentor.com" },
];

const CATEGORY_LABEL: Record<Partner["category"], string> = {
  education: "Éducation & Immobilier",
  finance: "Financial Services & Tech",
  food: "Food & Développement",
  industrie: "Industrie & Manufacturing",
  pharma: "Pharmaceutique & Santé",
  reseau: "Réseau international",
};

interface Props {
  /** Show all categories with headings */
  full?: boolean;
  /** Single-row strip mode (for homepage) */
  strip?: boolean;
}

// Partners to show in the strip (most recognizable)
const STRIP_NAMES = ["UM6P", "McKinsey & Co", "OCP Solutions", "Sanlam", "Aiguebelle", "GIZ", "Talentor", "Alpha10X"];

export function PartnerLogos({ full = false, strip = true }: Props) {
  if (strip) {
    const stripPartners = PARTNERS.filter((p) => STRIP_NAMES.includes(p.name));
    return (
      <div className="border-y border-border py-10">
        <p className="text-center text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-8">
          Ils nous font confiance
        </p>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
          {stripPartners.map((p) => (
            <LogoChip key={p.name} partner={p} />
          ))}
        </div>
        <p className="text-center text-[10px] text-muted-foreground/50 mt-6 tracking-wide">
          Références clients de Gibraltar Consulting
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
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-5">
              {CATEGORY_LABEL[cat]}
            </p>
            <div className="flex flex-wrap gap-3">
              {PARTNERS.filter((p) => p.category === cat).map((p) => (
                <LogoChip key={p.name} partner={p} large />
              ))}
            </div>
          </div>
        ))}
        <p className="text-xs text-muted-foreground/60 pt-2">
          Références clients de Gibraltar Consulting — cabinet partenaire de Diaspora Talent.
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
        border border-border/60 bg-background hover:border-primary/50 hover:bg-secondary/30 transition-colors
        flex items-center justify-center font-medium tracking-wide text-muted-foreground hover:text-foreground
        ${large ? "h-14 px-7 text-sm min-w-[110px]" : "h-10 px-5 text-xs min-w-[80px]"}
      `}
    >
      {partner.name}
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
