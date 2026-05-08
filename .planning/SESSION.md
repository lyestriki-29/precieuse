# Session State — 2026-05-08 (fin)

## Branch
main (repo : github.com/lyestriki-29/precieuse — push initial OK)

## Completed This Session
- 10 règles de collaboration globales sauvegardées (~/.claude/CLAUDE.md + memory feedback)
- Catalogué tout le contenu IG d'Eméline → `docs/instagram-content-mapping.md` (mapping section→asset complet, copy verbatim)
- Réorganisé arbo : `docs/`, `content/{instagram-organized,instagram-raw,stitch-extracts}/`, `archive/{html-templates,v0-templates}/`
- Init git + push initial (402 fichiers) + README + .gitignore

## Next Task
**Phase 0 — init Next.js dans `web/`** (interrompue avant exécution). Commande validée :
```
cd /Users/trikilyes/Desktop/Prive1/Precieuse && \
pnpm create next-app@latest web --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --turbopack --use-pnpm --no-git --yes
```
Puis : next-intl (FR/EN/PT), Sanity CMS, shadcn/ui init, Prettier. Pas de Vercel/Brevo pour l'instant.

## Blockers
- Validation Eméline du `docs/instagram-content-mapping.md` (photos IA suspectées A1/A2 + photos couleur vs N&B)
- Photos manquantes : Annabelle pour shoot N&B + Eméline pour 4 modèles + copy bio définitif

## Key Context
- Marque Précieuse : joaillerie artisanale Portugal, fondatrice Eméline, or 19kt + diamants GVS, label RJC, 5 modèles 1000-7000€, lancement mi-juillet 2026
- Direction visuelle finale : **S1 "L'Art de la Lumière"** (Vogue monograph, off-white #FBF8F5, raspberry, gold whisper, Playfair + Inter Light)
- Stack : Next.js 16 + Tailwind v4 + shadcn/ui + Sanity + Brevo + next-intl + Vercel (local-first)
- Path : `/Users/trikilyes/Desktop/Prive1/Precieuse/` (sans accent OK ✓)
- ⚠️ Clé Stitch API exposée précédemment : à régénérer
