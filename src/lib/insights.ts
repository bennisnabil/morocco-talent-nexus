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
    slug: "retour-au-maroc-apres-10-ans",
    title: "Rentrer au Maroc après 10 ans à l'étranger",
    category: "Diaspora",
    readTime: "8 min de lecture",
    date: "Mars 2026",
    excerpt:
      "Après une décennie à Londres, Paris ou Dubaï, le retour au Maroc est rarement une simple démarche logistique. C'est un réalignement stratégique et émotionnel.",
    body: [
      "La décision de rentrer commence rarement par une offre d'emploi. Elle commence par un sentiment — celui que le prochain chapitre s'écrit chez soi, là où ambitions personnelles et professionnelles peuvent enfin converger.",
      "Nous avons accompagné des centaines de cadres dans cette transition. Le constat est constant : la réussite dépend moins du poste obtenu que de la profondeur de la préparation dans les mois qui précèdent l'arrivée.",
      "Trois forces façonnent le retour : l'architecture fiscale, l'écosystème familial et le réseau professionnel. En sous-estimer une seule, et l'équation se brise.",
      "Le paysage exécutif marocain a remarquablement mûri ces dix dernières années. CFC, OCP, le secteur des énergies renouvelables et une nouvelle génération de groupes nationaux se disputent désormais des leaders de calibre international.",
      "Rentrer n'est pas un pas en arrière. Pour beaucoup, c'est le mouvement le plus stratégique de leur carrière.",
    ],
  },
  {
    slug: "salaires-executifs-maroc-2026",
    title: "Salaires des cadres dirigeants au Maroc : repère 2026",
    category: "Rémunération",
    readTime: "12 min de lecture",
    date: "Février 2026",
    excerpt:
      "La rémunération des C-level au Maroc a beaucoup évolué. Nous cartographions les packages globaux par secteur et niveau — au-delà du fixe.",
    body: [
      "Le salaire de base ne représente plus qu'une composante de la rémunération exécutive au Maroc. Plans long terme, equity et bonus structurés sont devenus standard.",
      "Dans la finance et au sein des institutions de CFC, la rémunération totale d'un Managing Director dépasse fréquemment 2,5 M MAD, avec des références internationales qui orientent désormais les négociations.",
      "Le leadership tech — fintech et SaaS en particulier — connaît la pente la plus marquée, combinant fixe compétitif et participation au capital de groupes régionaux.",
      "Les secteurs industriels et infrastructures restent ancrés dans des plans d'incentive long terme, souvent alignés sur les priorités souveraines de développement.",
      "Notre repère s'appuie sur plus de 400 placements confidentiels réalisés entre 2024 et 2026.",
    ],
  },
  {
    slug: "leadership-diaspora-marocaine",
    title: "Leadership de la diaspora marocaine : une force discrète",
    category: "Réseau",
    readTime: "6 min de lecture",
    date: "Janvier 2026",
    excerpt:
      "De Wall Street à la Silicon Valley, les cadres marocains construisent une carte d'influence globale que le Royaume commence à peine à activer.",
    body: [
      "On estime à 5 millions le nombre de Marocains résidant à l'étranger, avec une concentration notable de leaders senior dans les institutions financières, technologiques et académiques d'Europe et d'Amérique du Nord.",
      "Ce qui distingue cette diaspora n'est pas sa taille mais son influence silencieuse. Décideurs, partenaires et allocateurs de capitaux liés au Maroc orientent des décisions bien au-delà de leurs rôles visibles.",
      "Cartographier ce réseau n'est plus une option pour les organisations marocaines qui cherchent à concourir mondialement — c'est un fondamental.",
    ],
  },
  {
    slug: "guide-complet-relocation-maroc",
    title: "Le guide complet de la relocation au Maroc",
    category: "Relocation",
    readTime: "15 min de lecture",
    date: "Décembre 2025",
    excerpt:
      "Du statut DRI aux conventions fiscales, en passant par la scolarité et le logement : un guide opérationnel définitif pour les cadres qui rentrent.",
    body: [
      "Le cadre DRI offre des avantages significatifs aux résidents qui rentrent — à condition d'être activé correctement dès la première année fiscale.",
      "Les marchés du logement à Casablanca, Rabat, Tanger et Marrakech ont chacun leurs dynamiques propres. Nous cartographions les corridors exécutifs et les écoles qui structurent les décisions familiales.",
      "La scolarité internationale — Lycée français, American School, Lycée espagnol — détermine plus que tout autre facteur le choix du quartier.",
      "L'accès aux soins s'est considérablement étendu, avec des groupes privés qui rejoignent désormais les standards européens dans les grands centres urbains.",
    ],
  },
  {
    slug: "investissement-diaspora-mena",
    title: "Construire des ponts : l'investissement de la diaspora dans la région MENA",
    category: "Capital",
    readTime: "9 min de lecture",
    date: "Novembre 2025",
    excerpt:
      "Comment les cadres marocains à l'étranger déploient capital, expertise et réseaux dans les secteurs les plus stratégiques du Royaume.",
    body: [
      "Le capital de la diaspora ne se limite plus à l'immobilier. Une nouvelle génération d'opérateurs co-investit dans des fonds de venture régionaux, des plateformes d'infrastructures et des véhicules ESG.",
      "Les déploiements les plus efficaces combinent engagement financier et implication opérationnelle — sièges au conseil, rôles consultatifs et mentorat actif.",
      "Le cadre réglementaire marocain pour les investisseurs résidents à l'étranger s'est clarifié, permettant des flux de capitaux plus confiants.",
    ],
  },
];

export function findArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}
