## Vision

Une plateforme exécutive de classe mondiale qui connecte la diaspora marocaine globale avec des opportunités stratégiques, une relocation premium et un accompagnement de retour au Maroc. Éditorial, raffiné, confiant — plus proche de Korn Ferry × Aesop × Monocle que d'un job board.

**Nom de marque (placeholder, modifiable) :** Atlas & Atlas
**Direction visuelle :** *Dossier Editorial* (sélectionnée)
- Palette : forest `#1b3022`, sand `#e8dfd3`, paper `#fdfcfb`, ink `#121212`
- Typographie : Cormorant Garamond (serif display, italic) + Inter (sans body)
- Filets fins, espace négatif généreux, transitions hover discrètes

## Architecture du site

Routes TanStack séparées (pas d'ancres hash) pour SSR + SEO. Chaque route a son propre `head()`.

```
src/routes/
  __root.tsx         → shell partagé, nav, footer
  index.tsx          → Accueil (hero + aperçus de sections)
  network.tsx        → Talent Platform (executives, secteurs, matching)
  return.tsx         → Return to Morocco (5 services premium)
  companies.tsx      → For Companies (executive search)
  stories.tsx        → Success Stories (témoignages + parcours)
  insights.tsx       → Index articles (blog SEO)
  insights.$slug.tsx → Détail article
  contact.tsx        → Réservation consultation + formulaire
  join.tsx           → Formulaire candidature talent
```

## Pages — Contenu

**Accueil (`/`)**
- Nav sticky (logo, liens, CTA "Join Network")
- Hero : « Reconnect Morocco With Its Global Talent » + sous-titre + 3 CTA (Join the Network / Explore Opportunities / Book a Consultation) + visuel Casablanca Finance City
- Bande Strategic Sectors (Tech, Finance, Industry, Infrastructure, ESG, Hospitality, Healthcare)
- Teaser Talent Platform → `/network`
- Teaser Return to Morocco (3 cartes service) → `/return`
- Teaser For Companies → `/companies`
- Success Story mise en avant (section forest pleine largeur, portrait + citation)
- Latest Insights (3 cartes article) → `/insights`
- Footer

**Talent Platform (`/network`)**
Executive matching, opportunités confidentielles, recrutement stratégique, profils par secteur, grille d'opportunités leadership. CTA : Join the Network.

**Return to Morocco (`/return`)** — page phare
Cinq cartes service éditoriales numérotées :
1. Career Strategy
2. Relocation Assistance
3. Tax & Administrative Guidance
4. Networking Access
5. Executive Onboarding
Plus une timeline du process et un CTA consultation.

**For Companies (`/companies`)**
« Access world-class Moroccan talent. » Services : executive search, diaspora mapping, recrutement confidentiel, leadership hiring. CTA : demande de partenariat.

**Success Stories (`/stories`)**
Cartes de témoignages + profils de parcours étendus + miniatures vidéo (placeholders).

**Insights (`/insights`)**
Grille d'articles. Cinq posts seedés :
- Returning to Morocco After 10 Years Abroad
- Executive Salaries in Morocco: A 2026 Benchmark
- Moroccan Diaspora Leadership: A Quiet Force
- The Complete Relocation Guide to Morocco
- Building Bridges: Diaspora Investment in MENA

**Contact (`/contact`)**
Formulaire de réservation consultation (nom, email, fonction, pays, message), validé avec Zod, stocké localement pour l'instant (pas de backend), toast de confirmation.

**Join (`/join`)**
Formulaire premium de candidature talent (nom, email, localisation actuelle, secteur, séniorité, LinkedIn, message), même pattern de validation.

## Composants

`src/components/`
- `site-nav.tsx`, `site-footer.tsx`
- `hero.tsx`, `cta-button.tsx`
- `sector-grid.tsx`, `service-card.tsx` (éditorial numéroté)
- `testimonial.tsx`, `article-card.tsx`
- `section-heading.tsx` (titre serif + eyebrow majuscules)
- `consultation-form.tsx`, `application-form.tsx` (validation Zod)

## Design System

Mise à jour de `src/styles.css` :
- Remplacer les tokens : `--background` (paper), `--foreground` (ink), `--primary` (forest), `--secondary` (sand), `--muted`, `--border` — tous en `oklch`
- Alias sémantiques pour les accents sand et forest
- Import Cormorant Garamond + Inter via `<link>` dans `__root.tsx`
- Keyframes fade-in / reveal-up utilisés au scroll-into-view

Toutes les couleurs des composants via tokens (`bg-primary`, `text-primary-foreground`, etc.) — aucun hex brut dans les composants.

## Images

Utilisation de `imagegen` pour les visuels clés :
- Hero : Casablanca Finance City à l'heure dorée
- Image section Return to Morocco
- Portraits Success Stories (2–3)
- Vignettes articles Insights (5)

## Technique

- Routes file-based TanStack Start ; chaque route partageable définit `head()` (title, description, og:title, og:description ; og:image si applicable)
- Forms : react-hook-form + Zod
- Toasts via `sonner`
- Mobile-first responsive ; nav en sheet sur petit écran
- Images en `loading="lazy"`

## Hors périmètre (cette itération)

- Lovable Cloud / base de données / auth
- CMS réel pour les articles (en dur pour l'instant)
- Lecture vidéo réelle (poster + overlay play uniquement)
- i18n (anglais uniquement)

À ajouter dans des itérations suivantes si besoin.
