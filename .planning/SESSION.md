# Session State — 2026-05-09 (refonte Stitch alignée)

## Branch
`main`

## Completed This Session
- **Audit marketing photos** : 70% des photos Instagram inutilisables
  (texte gravé, IA suspectée, screenshots vidéo). Top tier identifié :
  B1 Joséphine, B3 solitaire, B4 tournesol, B7 fabrication, C4 dessin, V1 vidéo.
- **Câblage v1** (commit b17e0c6) : 10 photos copiées dans web/public/images/,
  type Product enrichi (image + imagePosition), 6 sections home redesignées
  layout 2-col image+texte, 3 pages enrichies, 17 routes statiques.
- **Refonte Stitch S3 alignée** (commit c1074a5) : Bodoni Moda + JetBrains Mono,
  tokens Stitch (tertiary/surface-dim/inverse-surface/raspberry), 9 sections
  home reproduisent fidèlement la maquette Stitch :
  - HomeHero plein écran cinématique (atelier dusk)
  - TrustBar (RJC/GIA/HRD/Made in Portugal)
  - HomeProductsTeaser asymétrique 7/5
  - HomeProcessCirePerdue dark 6 étapes
  - HomeMaterials 3 cards
  - HomeBespoke pull-quote flottant
  - HomeCreatrice asymétrique 5/7 + specs FORMATION/EXPERTISE
  - HomeTestimonialCentral italic + quote SVG gold
  - HomeJournal 2 articles aspect-video
  - Footer dark
  - Nav transparent+blanc sur hero, cream+foncé ailleurs
  - 11 placeholders IA Stitch téléchargés (à remplacer)
- **Polish** (commit a157c50) : Reveal animations sur titres/cards, quote
  SVG glyph luxe sur testimonial.
- **Photos officielles** (commit e3c4f83) : user a fourni export site existant
  avec packshots HD (Aurore, Joséphine, Louise, Thelma) + dessin Eugénie +
  logo officiel. Substitution complète des placeholders bijoux par les vrais
  packshots. Logo dans /public/brand/.

## Next Task
**Aligner les pages internes sur la nouvelle direction Stitch** :
- `/fr/collection` (page liste) : harmoniser Bodoni + grid asymétrique
- `/fr/collection/[slug]` (fiche produit) : ajouter specs techniques (ID, poids, kt)
- `/fr/creatrice` : redondante avec HomeCreatrice — soit supprimer la page,
  soit enrichir avec contenu unique (parcours détaillé, philosophie)
- `/fr/sur-mesure` : reprendre les éléments de HomeBespoke + cas Sandrine
  + process cire perdue détaillé
- `/fr/contact` : harmoniser typo Bodoni + JetBrains technical labels
- 3 pages légales : minimal — juste mettre à jour la typo

**Démarrer par** : décider du sort de /fr/creatrice (doublon avec section home).
Recommandation : supprimer la route et faire pointer le lien nav vers section
ancrée dans home (`/fr#creatrice`).

## Blockers
- Photos manquantes pour le shoot final (placeholder Stitch IA en attendant) :
  hero atelier dusk, sur-mesure (portrait Eméline), créatrice (portrait N&B),
  matériaux (or fondu, diamants, traçabilité), journal (process)
- Logo officiel teal sur fond dark ne fonctionne pas — version blanche à
  produire OU garder la typo Bodoni "Précieuse" comme actuellement
- Push vers GitHub bloqué par policy harness — user doit autoriser ou push manuel
- Validation copy bio Eméline + suspicion photos IA des packshots ?
- Schéma webhook Propul'seo CRM (Phase 4)
- Email officiel + WhatsApp (placeholders dans `lib/content/site.ts`)
- Domaine `precieuse.fr` à confirmer/acheter (Phase 6)
- ⚠️ Clé Stitch API à régénérer

## Key Context
- Stack : Next.js 16.2.6 + Tailwind v4 + shadcn (style **base-nova**) +
  Sanity (Phase 3 différée) + Brevo + next-intl + Vercel
- **Direction visuelle finale : Stitch S3 "Raw Luxe"** (Bodoni Moda italic
  display + JetBrains Mono technical labels + Inter body + couleurs
  tertiary gold #C9A74D + raspberry #BD0762 + inverse-surface dark)
- Modèle : lead-gen v1 (pas de checkout), 5 modèles 1000-7000€,
  lancement mi-juillet 2026
- Plan E2E : `~/.claude/plans/debut-delegated-twilight.md`
- Mapping photos : `docs/instagram-content-mapping.md`
- Référence Stitch : `content/stitch-extracts/s3-raw-luxe-full.html`
- Site existant exporté : `content/Précieuse _ Joaillerie Artisanale Sur Mesure*`
  (source des photos officielles)
- **Pattern Next.js 16** : `params` async, `LayoutProps`/`PageProps` globaux,
  `images.qualities=[75,90]` requis pour quality=90.
- **Convention** : main-only workflow, pas de branches.
- 5 commits cette session : b17e0c6, c1074a5, 360f0ed, a157c50, e3c4f83.
