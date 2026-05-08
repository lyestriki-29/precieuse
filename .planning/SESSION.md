# Session State — 2026-05-08 (Phase 0 ✅)

## Branch
`claude/condescending-albattani-0cb9d9` (worktree) — à merger dans `main`

## Completed This Session
- Plan E2E approuvé : 6 phases (Bootstrap → DS → Pages → CMS → Forms → i18n/SEO → Launch) pour mi-juillet 2026
- **Phase 0 — Bootstrap Next.js 16 dans `web/`** :
  - `pnpm create next-app` (TS strict, Tailwind v4, App Router, src-dir, alias `@/*`, Turbopack)
  - Deps : next-intl, next-sanity, zod, react-hook-form, framer-motion, lucide-react, @sanity/image-url, clsx, cva, tailwind-merge
  - shadcn/ui init (new-york + base stone) + button/input/textarea/label/card/sonner
  - Tokens Précieuse dans globals.css : `--cream #FBF8F5`, `--raspberry`, `--gold-whisper`
  - Fonts : Playfair Display (heading) + Inter (sans) via `next/font`
  - `@utility luxe-grayscale` (filtre N&B éditorial)
  - Placeholder homepage avec direction visuelle S1
  - Prettier + plugin tailwind, `.env.local.example` (Sanity, Brevo, CRM, GA4, Sentry)
  - Code review : 2 fixes appliqués (--font-geist-mono orphelin, shadcn → devDeps)
  - typecheck + lint + build : ✅ tous verts

## Next Task
**Phase 1 — Design system & layout (~2 jours)** :
1. Composants luxe : `Container`, `Section`, `Heading`, `Reveal` (Framer fade-in scroll), `LuxeImage` (next/image + filtre N&B)
2. Layout racine : nav transparente→solide au scroll, footer 3 colonnes
3. Tokens typo : H1 Playfair 64/48/40, body Inter Light 16/14
4. Page `/dev/components` pour QA visuel

Fichiers à créer : `web/src/components/luxe/{Container,Section,Heading,Reveal,LuxeImage}.tsx`, `web/src/components/layout/{Nav,Footer}.tsx`

## Blockers
- Photos manquantes (Annabelle N&B + 4 packshots) → placeholders pour ne pas bloquer
- Validation Eméline mapping IG (photos suspectées IA A1/A2)
- Schéma webhook Propul'seo CRM
- Domaine `precieuse.fr` à confirmer/acheter
- Logo SVG HD vectoriel
- ⚠️ Clé Stitch API à régénérer
- Décision EN/PT en v1 ou v1.1

## Key Context
- Stack : Next.js 16.2.6 + Tailwind v4 + shadcn/ui (new-york/stone) + Sanity + Brevo + next-intl + Vercel
- Direction visuelle : **S1 « L'Art de la Lumière »** (off-white, raspberry, gold whisper, Playfair + Inter Light, photos N&B)
- Modèle : lead-gen v1 (pas de checkout), 5 modèles 1000-7000€, lancement mi-juillet 2026
- Plan E2E complet : `~/.claude/plans/debut-delegated-twilight.md`
- Approche : **1 session = 1 phase** avec code review + commit + push à chaque fin
- Worktree : `.claude/worktrees/condescending-albattani-0cb9d9/` — merge dans main après validation
