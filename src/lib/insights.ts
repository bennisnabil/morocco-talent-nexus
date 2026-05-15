export interface Article {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  readTime: string;
  date: string;
  body: string[];
  source: string;
  sourceUrl: string;
}

export const articles: Article[] = [
  {
    slug: "casablanca-rappelle-cerveaux-exiles",
    title: "Quand Casablanca rappelle ses cerveaux exilés",
    category: "Diaspora",
    readTime: "6 min de lecture",
    date: "Mai 2025",
    source: "Le Diplomate",
    sourceUrl:
      "https://lediplomate.media/2025/05/casablanca-rappelle-ses-cerveaux-exiles-maroc/olivierdauzon/monde/afrique/",
    excerpt:
      "Un vent de reconquête souffle sur la jeunesse diplômée marocaine installée à Paris. De Crédit du Maroc à Managem, les grands groupes déploient des stratégies audacieuses pour rapatrier une élite formée à l'étranger.",
    body: [
      "Casablanca passe à l'offensive. Les grands groupes de la place — Crédit du Maroc, Bank of Africa, Managem — orchestrent désormais des campagnes structurées pour attirer les cadres marocains formés et expérimentés en Europe.",
      "Cette dynamique s'appuie sur une nouvelle structure ad hoc qui coordonne les efforts de recrutement à Paris, Londres et Bruxelles, en lien direct avec les directions générales casablancaises.",
      "Les profils ciblés : finance, ingénierie, tech, conseil. Tous ont en commun une trajectoire internationale et un attachement actif au Royaume.",
      "L'enjeu dépasse le recrutement. C'est une stratégie de souveraineté économique : capter le capital humain qui structurera la prochaine décennie marocaine.",
    ],
  },
  {
    slug: "salaires-dirigeants-maroc-2026",
    title: "Salaires dirigeants au Maroc en 2026 : le vrai benchmark",
    category: "Rémunération",
    readTime: "8 min de lecture",
    date: "Avril 2026",
    source: "Xpertize Africa",
    sourceUrl: "https://xpertize.africa/fr/xri/salaires-dirigeants-maroc-2026-benchmark",
    excerpt:
      "Près de 60 % des cadres dirigeants au Maroc gagnent au moins un million de dirhams par an. Décryptage des rémunérations CEO, CFO et DRH, des écarts sectoriels et de la fiscalité.",
    body: [
      "Le seuil du million de dirhams annuels est devenu un repère structurant pour les comités exécutifs marocains. Près de six dirigeants sur dix le franchissent désormais.",
      "Les écarts sectoriels restent marqués : finance et assurance en tête, suivies par l'industrie exportatrice et la tech. Les fonctions CEO, CFO et DRH concentrent les packages les plus complets.",
      "La rémunération variable et les plans long terme s'imposent progressivement, alignant les pratiques marocaines sur les standards européens.",
      "La fiscalité reste un facteur déterminant dans la négociation, en particulier pour les profils qui rentrent de l'étranger sous statut de résident fiscal nouvellement établi.",
    ],
  },
  {
    slug: "anciens-mre-chez-eux-ou-expatries",
    title: "Les anciens MRE se sentent-ils chez eux ou « expatriés » au Maroc ?",
    category: "Société",
    readTime: "5 min de lecture",
    date: "Mars 2025",
    source: "Jeune Afrique",
    sourceUrl:
      "https://www.jeuneafrique.com/1655544/politique/ex-mre-au-maroc-se-sentent-ils-chez-eux-ou-expatries/",
    excerpt:
      "Rabat, Casablanca, Marrakech : la nouvelle génération de « repat » redessine la géographie des cadres marocains de retour. Entre attachement au pays et statut hybride, leur intégration n'a rien d'évident.",
    body: [
      "Ils ont étudié à Paris, travaillé à Londres ou Montréal, et choisi Rabat ou Casablanca pour le prochain chapitre. Les « repat » forment une nouvelle catégorie sociologique au Maroc.",
      "Leur retour interroge : sont-ils pleinement chez eux ou une nouvelle forme d'expatriés, plus proches culturellement de leurs anciens collègues européens que de leurs voisins de quartier ?",
      "Les villes choisies — Rabat pour son calme, Casablanca pour le business, Marrakech pour le cadre — révèlent des arbitrages familiaux et professionnels précis.",
      "L'intégration professionnelle est rarement le frein principal. Les vrais défis sont scolaires, administratifs et relationnels.",
    ],
  },
  {
    slug: "diaspora-levier-gouvernance-entreprises",
    title: "La diaspora marocaine : un levier stratégique pour la gouvernance des entreprises",
    category: "Leadership",
    readTime: "7 min de lecture",
    date: "2025",
    source: "Alides",
    sourceUrl:
      "https://www.alides.org/post/la-diaspora-marocaine-un-levier-strat%C3%A9gique-pour-renforcer-la-gouvernance-des-entreprises",
    excerpt:
      "Le Maroc dispose d'une ressource rare : une diaspora qualifiée, influente et attachée à son pays. Mobilisée dans la gouvernance des entreprises, elle peut accélérer le développement économique du Royaume.",
    body: [
      "La diaspora marocaine est un actif stratégique sous-exploité. Présente dans les institutions financières, technologiques et académiques d'Europe et d'Amérique du Nord, elle dispose d'une expertise et de réseaux que peu de pays comparables peuvent revendiquer.",
      "Les conseils d'administration des groupes marocains commencent à s'ouvrir à ces profils internationaux, apportant une exigence de gouvernance alignée sur les standards globaux.",
      "Au-delà des sièges au conseil, les rôles consultatifs et les missions ponctuelles permettent une mobilisation graduelle, compatible avec les engagements professionnels existants à l'étranger.",
      "Structurer cette mobilisation est désormais une priorité pour les organisations marocaines qui visent une croissance internationale crédible.",
    ],
  },
  {
    slug: "mre-investisseurs-strategie-offensive",
    title: "Investissement des MRE : le Maroc déploie une stratégie offensive",
    category: "Capital",
    readTime: "6 min de lecture",
    date: "2025",
    source: "Hespress",
    sourceUrl: "https://fr.hespress.com/433389-investissement-des-mre-le-maroc-deploie-une-strategie-offensive.html",
    excerpt:
      "Programmes MDM Invest, Fincome, plateforme dédiée : le Royaume structure une offre pour transformer les transferts de fonds de la diaspora en investissements productifs.",
    body: [
      "Les transferts de fonds des Marocains du monde atteignent des records, mais leur conversion en investissements productifs reste en deçà des attentes. Le gouvernement déploie une réponse coordonnée.",
      "Les programmes MDM Invest et Fincome sont relancés et complétés par une plateforme dédiée pour accompagner les porteurs de projets résidant à l'étranger.",
      "Les Centres régionaux d'investissement et la CGEM multiplient les séminaires dans les hubs de la diaspora, de Tanger à Bruxelles.",
      "L'enjeu : passer d'un capital affectif à un capital opérationnel, structuré autour de véhicules d'investissement clairs et d'un cadre réglementaire stabilisé.",
    ],
  },
];

export function findArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}
