export interface Article {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  readTime: string;
  date: string;
  body: string[];
}

export const articles: Article[] = [
  {
    slug: "returning-to-morocco-after-10-years",
    title: "Returning to Morocco After 10 Years Abroad",
    category: "Diaspora",
    readTime: "8 min read",
    date: "March 2026",
    excerpt:
      "After a decade in London, Paris, or Dubai, the return to Morocco is rarely a logistical move. It is a strategic and emotional realignment.",
    body: [
      "The decision to return rarely begins with a job offer. It begins with a feeling — a sense that the next chapter belongs at home, where personal and professional ambitions can finally converge.",
      "We have walked alongside hundreds of executives in this transition. The pattern is consistent: success depends less on the role secured and more on the depth of preparation in the months preceding arrival.",
      "Three forces shape the return: the fiscal architecture, the family ecosystem, and the professional network. Underestimate one and the equation breaks.",
      "Morocco's executive landscape has matured remarkably in the past decade. CFC, OCP, the renewable energy sector, and a new generation of homegrown unicorns now compete for international-grade leadership.",
      "Returning is not a step back. For many, it is the most strategic move of their career.",
    ],
  },
  {
    slug: "executive-salaries-morocco-2026",
    title: "Executive Salaries in Morocco: A 2026 Benchmark",
    category: "Compensation",
    readTime: "12 min read",
    date: "February 2026",
    excerpt:
      "C-level compensation in Morocco has evolved significantly. We map total packages across sectors and seniority — beyond the base.",
    body: [
      "Base salary is now only one component of executive compensation in Morocco. Long-term incentives, equity, and structured bonuses have entered the standard package.",
      "In Finance and CFC-based institutions, total compensation for a Managing Director routinely exceeds 2.5M MAD, with international parity benchmarks driving negotiations.",
      "Tech leadership — particularly in fintech and SaaS — is experiencing the steepest curve, often combining competitive base with equity in regional groups.",
      "Industrial and infrastructure sectors remain anchored in long-term incentive plans, frequently aligned with sovereign development priorities.",
      "Our benchmark draws from over 400 confidential placements across 2024–2026.",
    ],
  },
  {
    slug: "moroccan-diaspora-leadership",
    title: "Moroccan Diaspora Leadership: A Quiet Force",
    category: "Network",
    readTime: "6 min read",
    date: "January 2026",
    excerpt:
      "From Wall Street to Silicon Valley, Moroccan executives are building a global influence map that the Kingdom is only beginning to leverage.",
    body: [
      "There are an estimated 5 million Moroccans living abroad, with a notable concentration of senior leadership in financial, technological, and academic institutions across Europe and North America.",
      "What makes this diaspora distinct is not its size, but its quiet influence. Decision-makers, partners, and capital allocators with cultural ties to Morocco shape outcomes far beyond their visible roles.",
      "Mapping this network is no longer optional for Moroccan organizations seeking to compete globally — it is foundational.",
    ],
  },
  {
    slug: "complete-relocation-guide-morocco",
    title: "The Complete Relocation Guide to Morocco",
    category: "Relocation",
    readTime: "15 min read",
    date: "December 2025",
    excerpt:
      "From DRI status and double taxation treaties to schooling and housing, a definitive operational guide for returning executives.",
    body: [
      "The DRI (Direction Régionale des Impôts) framework offers significant advantages for returning residents — but only when activated correctly within the first fiscal year.",
      "Housing markets in Casablanca, Rabat, Tangier, and Marrakech each carry distinct dynamics. We map the executive corridors and the schools that anchor family decisions.",
      "International schooling — Lycée français, American School, Lycée espagnol — defines neighborhood selection more than any other factor.",
      "Healthcare access has expanded considerably with private group networks now matching European standards in major urban centers.",
    ],
  },
  {
    slug: "diaspora-investment-mena",
    title: "Building Bridges: Diaspora Investment in MENA",
    category: "Capital",
    readTime: "9 min read",
    date: "November 2025",
    excerpt:
      "How Moroccan executives abroad are deploying capital, expertise, and networks back into the Kingdom's most strategic sectors.",
    body: [
      "Diaspora capital is no longer limited to real estate. A new generation of operators is co-investing in regional venture funds, infrastructure platforms, and ESG-aligned vehicles.",
      "The most effective deployments combine financial commitment with operational involvement — board seats, advisory roles, and active mentorship.",
      "Morocco's regulatory framework for foreign-resident investors has tightened in clarity, allowing for more confident capital flows.",
    ],
  },
];

export function findArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}
