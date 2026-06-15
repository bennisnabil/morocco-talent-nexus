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
  {
    slug: "transferts-mre-record-122-milliards-2025",
    title: "122 milliards de dirhams : les transferts MRE pulvérisent un nouveau record en 2025",
    category: "Capital",
    readTime: "4 min de lecture",
    date: "Janvier 2026",
    source: "H24info / FNH",
    sourceUrl: "https://h24info.ma/economie/les-transferts-mre-122-mmdh-en-2025/",
    excerpt:
      "Les Marocains résidant à l'étranger ont envoyé 122 milliards de dirhams vers le Royaume en 2025 — soit plus que les recettes du tourisme. Un signal fort sur le poids économique et l'attachement de la diaspora.",
    body: [
      "122,3 milliards de dirhams. C'est le montant record des transferts effectués par les Marocains résidant à l'étranger (MRE) en 2025, en hausse de 2,6 % par rapport à 2024. Un chiffre qui dépasse pour la troisième année consécutive les recettes du tourisme.",
      "La France reste le premier pays d'origine de ces transferts, suivie de l'Espagne, de l'Italie et, de plus en plus, des pays du Golfe où la diaspora qualifiée s'est considérablement renforcée ces cinq dernières années.",
      "Au-delà du chiffre, ce flux représente un signal de confiance structurel envers l'économie marocaine. Une partie croissante de ces capitaux s'oriente désormais vers l'investissement productif — immobilier premium, participation dans des PME, fonds de capital-risque.",
      "Pour les cadres de la diaspora qui envisagent un retour, cette dynamique traduit une chose claire : les conditions économiques au Maroc se sont suffisamment consolidées pour justifier un engagement à long terme.",
    ],
  },
  {
    slug: "casablanca-finance-city-premier-hub-africain",
    title: "Casablanca Finance City : premier hub financier africain — et nouvelle porte d'entrée pour la diaspora",
    category: "Opportunités",
    readTime: "5 min de lecture",
    date: "Mars 2026",
    source: "FIDM / Openshores",
    sourceUrl: "https://fidm.eu/news/casablanca-finance-city-la-plateforme-strategique-de-la-diaspora-marocaine-en-afrique/",
    excerpt:
      "Classée première place financière africaine par le Global Financial Centres Index 2025, Casablanca Finance City concentre 240 entreprises internationales et 7 000 emplois. Un écosystème taillé pour les profils diaspora.",
    body: [
      "Pour la première fois en 2025, le Global Financial Centres Index (GFCI) classe Casablanca Finance City (CFC) comme le premier hub financier du continent africain, devant Johannesburg et Lagos. Une reconnaissance qui change l'équation pour les cadres de la diaspora qui évaluent leur retour.",
      "CFC regroupe aujourd'hui près de 240 entreprises internationales — dont Huawei, Schneider Electric, et un nombre croissant de fonds d'investissement panafricains. Plus de 7 000 postes y ont été créés, avec une demande forte sur les profils Finance, Tech, Droit des affaires et ESG.",
      "Le label CFC offre un cadre fiscal particulièrement attractif pour les dirigeants qui rentrent : imposition à taux réduit sur les revenus de source étrangère pendant les premières années, compatibilité avec le statut DRI (Détaché en Retour International).",
      "Une part significative des recrutements CFC provient désormais directement de la diaspora marocaine — cadres formés à Paris, Londres, New York ou Dubaï, qui reviennent structurer des équipes régionales avec une double légitimité internationale et locale.",
    ],
  },
  {
    slug: "pourquoi-la-diaspora-revient-maroc-2025",
    title: "Retour au Maroc : ce qui pousse la diaspora à franchir le pas en 2025",
    category: "Diaspora",
    readTime: "6 min de lecture",
    date: "Février 2026",
    source: "Le Matin",
    sourceUrl: "https://lematin.ma/nation/retour-au-maroc-pourquoi-la-diaspora-revient/309429",
    excerpt:
      "Depuis 2022, les retours permanents de Marocains résidant à l'étranger s'accélèrent. Qualité de vie, opportunités professionnelles, projets de COP30 et de Coupe du monde 2030 : les facteurs d'attraction se multiplient.",
    body: [
      "Depuis 2022, un phénomène s'installe dans la durée : des Marocains résidant à l'étranger (MRE) — certains nés hors du Royaume — choisissent de s'installer définitivement au Maroc. Ce retour n'est plus anecdotique. Il est structurel.",
      "Les profils qui reviennent ont changé. Ce ne sont plus seulement des retraités ou des primo-arrivants. Ce sont des quadragénaires en pleine carrière, des entrepreneurs, des cadres dirigeants qui ont accumulé 15 à 20 ans d'expérience internationale et qui cherchent un terrain d'impact plus large.",
      "Trois catalyseurs dominent : la qualité de vie à Casablanca et Rabat (coût du logement, sécurité, gastronomie, proximité des familles), les grands chantiers d'infrastructure — Coupe du monde 2030, COP 30 —, et la dynamique entrepreneuriale qui place le Maroc comme base régionale pour l'Afrique.",
      "Les freins restent réels : scolarité internationale coûteuse, systèmes administratifs complexes pour les non-résidents de longue date, et un marché immobilier en forte tension dans les quartiers prisés. Ce sont précisément ces obstacles que DiasporaConnect a été conçu pour lever.",
    ],
  },
  {
    slug: "investir-maroc-2026-guide-diaspora",
    title: "Investir au Maroc en 2026 : le guide pour la diaspora",
    category: "Investissement",
    readTime: "7 min de lecture",
    date: "Avril 2026",
    source: "Les Afriques / Marocains du Monde",
    sourceUrl: "https://lesafriques.com/2026/06/investir-maroc-2026/",
    excerpt:
      "Nouveau code de l'investissement, SARL créée en 24h, avantages fiscaux renforcés pour les MRE : le Maroc déploie en 2026 un arsenal inédit pour transformer la diaspora en moteur d'investissement productif.",
    body: [
      "Le Maroc de 2026 n'est plus le même terrain qu'il y a dix ans. Le Code de l'Investissement de 2023 a profondément refondu les incitations : primes à la création d'emplois, réductions fiscales sur les bénéfices des premiers exercices, guichet unique dématérialisé.",
      "Pour les membres de la diaspora, la création d'une SARL se fait désormais en 24 à 72 heures via le portail en ligne, avec un capital minimum de 10 000 MAD. Un signal fort d'accessibilité envoyé aux entrepreneurs marocains établis à l'étranger.",
      "Sur le plan fiscal, le statut DRI (Détaché en Retour International) permet aux cadres qui rentrent de bénéficier d'une exonération partielle sur certains revenus de source étrangère pendant les premières années de résidence. Combiné aux conventions de double imposition signées avec la France, l'Espagne, la Belgique et le Canada, ce dispositif rend le retour financièrement compétitif.",
      "Les secteurs les plus porteurs pour les investisseurs diaspora en 2026 : les énergies renouvelables (objectif 52 % du mix électrique d'ici 2030), la tech et les services numériques, l'agritech, et l'immobilier de niche dans les villes secondaires en forte croissance (Tanger, Agadir, Marrakech).",
    ],
  },
];

export function findArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}
