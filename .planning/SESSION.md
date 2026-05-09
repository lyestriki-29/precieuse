# Session State — 2026-05-09 (3 directions Stitch livrées + code review)

## Branch
`main`

## Completed This Session
**Refonte UI majeure : 3 directions Stitch livrées en parallèle pour comparaison live.**

- **Câblage v1 photos** (b17e0c6) : 10 photos Instagram → web/public/images/,
  type Product enrichi, 6 sections home redesignées 2-col image+texte.
- **Refonte Stitch S3 Raw Luxe** (c1074a5) : Bodoni Moda + JetBrains Mono,
  tokens Stitch + 9 sections home (Hero plein écran cinématique, TrustBar,
  ProductsTeaser asymétrique 7/5, ProcessCirePerdue dark, Materials,
  Bespoke pull-quote, Creatrice, TestimonialCentral, Journal), Footer dark,
  Nav transparent+blanc sur hero. 11 photos IA Stitch en placeholders.
- **Polish** (a157c50) : Reveal animations, quote SVG luxe.
- **Photos officielles** (e3c4f83) : packshots HD réels (Aurore, Joséphine,
  Louise, Thelma) + dessin Eugénie + logo officiel teal/petrol.
- **v2 Eugénie** (7fa0d84) : route /fr/v2 — fiche produit Stitch S1
  L'Art de la Lumière (Playfair italic + purple #4f378a), V2Nav 3-col +
  V2Footer dédiés, hero plein écran avec "Eugénie" 140px italic centré,
  4 macros asymétriques mt-12, atelier wide, mot d'Éméline, pairing Louise.
- **v3 Homepage S1** (c01c733) : route /fr/v3 — homepage Stitch S1, V3Nav +
  V3Footer + 7 sub-components, hero asymétrique 5/12+7/12, "Nos Séries"
  grid 5 produits avec offset alterné, sur-mesure, créatrice, atelier
  Portugal, témoignage 01/09, newsletter "Les Lettres Rares".
- **Raffinement v3** (7196112) : remplacement V3Creatrice par layout v1
  (asymétrique 5/7 + FORMATION École Boulle / EXPERTISE Cire perdue),
  suppression V3Atelier + V3SurMesure, **V3Nav refondu en 5-zone éditorial**
  (top meta strip MAISON·PORTUGAL·MMXXVI, brand center "Précieuse" italic
  48px + microcaps "JOAILLERIE·LISBOA", nav split L/R + hover underline
  expand-from-center, scroll-aware avec compactage).
- **Code review hardening** (b425a4e) : 4 issues fixées
  - Critical : V3Newsletter form action#post → onSubmit preventDefault
  - Critical : Nav body.overflow leak → useEffect([pathname]) → setOpen(false)
  - Important : suppression inline style objectPosition (Product.imagePosition
    plus utilisé depuis swap photos officielles)
  - Cosmetic : V3Nav journal match orphelin → type NavItem avec match optional

## Next Task
**Présentation live des 3 directions et choix par l'utilisateur** :
- v1 (S3 Raw Luxe Bodoni raspberry) : http://localhost:3000/fr
- v2 (S1 fiche Eugénie Playfair purple) : http://localhost:3000/fr/v2
- v3 (S1 homepage raffinée Playfair purple) : http://localhost:3000/fr/v3

Une fois la direction choisie :
1. Promouvoir la version retenue à `/fr` (homepage principale)
2. Supprimer les 2 versions non retenues + assets associés
3. Aligner les pages internes (/collection, fiche produit, /sur-mesure,
   /creatrice, /contact) sur la direction validée
4. Décider du sort de /fr/creatrice (potentiel doublon avec section home)

## Blockers
- **Push direct sur main bloqué par policy harness** — user doit faire
  `cd /Users/trikilyes/Desktop/Prive1/Precieuse && git push origin main`
  manuellement (10 commits en attente : b17e0c6, 360f0ed, c1074a5, a157c50,
  e3c4f83, 86a6744, 7fa0d84, c01c733, 7196112, b425a4e + cette SESSION).
- Photos manquantes pour version finale : portrait Annabelle N&B + 4 packshots
  HD packs studio (toujours Stitch IA en placeholders pour l'instant).
- Logo officiel teal sur fond dark → version blanche à produire OU garder
  typo Bodoni/Playfair "Précieuse" comme actuellement.
- Validation copy bio Eméline + suspicion photos IA des packshots officielles ?
- Schéma webhook Propul'seo CRM (Phase 4)
- Email officiel + WhatsApp (placeholders dans `lib/content/site.ts`)
- Domaine `precieuse.fr` à confirmer/acheter (Phase 6)
- ⚠️ Clé Stitch API à régénérer

## Key Context
- Stack : Next.js 16.2.6 + Tailwind v4 + shadcn (style **base-nova**) +
  Sanity (Phase 3 différée) + Brevo + next-intl + Vercel
- **3 directions visuelles parallèles** :
  - **S3 Raw Luxe** : Bodoni Moda + JetBrains Mono + raspberry framboise +
    inverse-surface dark sections + atelier dusk cinématique
  - **S1 L'Art de la Lumière** : Playfair Display italic + Inter + primary
    purple #4f378a + tertiary gold #765b00 + surface #fdf7ff (light pinkish)
- Modèle : lead-gen v1 (pas de checkout), 5 modèles 1000-7000€,
  lancement mi-juillet 2026
- Plan E2E : `~/.claude/plans/debut-delegated-twilight.md`
- Mapping photos : `docs/instagram-content-mapping.md`
- Référence Stitch S3 : `content/stitch-extracts/s3-raw-luxe-full.html`
- Site existant exporté : `content/Précieuse _ Joaillerie Artisanale Sur Mesure*`
- **Pattern Next.js 16** : `params` async, `LayoutProps`/`PageProps` globaux,
  `images.qualities=[75,90]` requis pour quality=90.
- **Convention** : main-only workflow, max 200 lignes/fichier, pas d'inline
  styles, path aliases `@/`, TypeScript strict (jamais `any`).
- **Routes hidden Nav/Footer** : `/fr/v2`, `/fr/v3` (composants return null
  via usePathname check).
- **10 commits cette session** : b17e0c6, 360f0ed, c1074a5, a157c50, e3c4f83,
  86a6744, 7fa0d84, c01c733, 7196112, b425a4e.
