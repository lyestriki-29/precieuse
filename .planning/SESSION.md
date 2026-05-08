# Session State — 2026-05-08 (fin transition main-only)

## Branch
`main` (Phase 0 mergée directement, sans PR — nouvelle convention « tout sur main »)

## Completed This Session
- Skill `/token-saver` durci (`~/.claude/skills/token-saver/SKILL.md`) : règle « toutes sessions sur main », check de branche au début/fin, push vers main uniquement
- Plan Phase 1 rédigé : `~/.claude/plans/debut-peaceful-sedgewick.md`
- Phase 0 mergée sur main → `web/` désormais accessible depuis main

## Next Task
**Phase 1 — Design system & layout (~2 jours, 1 session).**
Plan complet : `~/.claude/plans/debut-peaceful-sedgewick.md`

À créer dans `web/src/components/luxe/` : `Container`, `Section`, `Heading`, `Reveal` (framer-motion fade-in), `LuxeImage` (next/image + filtre N&B). Dans `web/src/components/layout/` : `Nav` (transparent→solide au scroll), `Footer` (3 colonnes). Page QA `web/src/app/dev/components/page.tsx`. Migrer la home pour utiliser le DS.

**Démarrer par `cd web && pnpm install && pnpm typecheck`** pour valider la base avant de coder.

## Blockers
- Photos manquantes (Annabelle N&B + 4 packshots) → placeholders Phase 1
- Validation Eméline mapping IG (suspectées IA A1/A2)
- Schéma webhook Propul'seo CRM
- Domaine `precieuse.fr` à confirmer/acheter
- Logo SVG HD vectoriel
- ⚠️ Clé Stitch API à régénérer
- Décision EN/PT en v1 ou v1.1
- Worktrees à nettoyer : `claude/busy-murdock-47e042` (local + remote) et `claude/condescending-albattani-0cb9d9` (remote)

## Key Context
- Stack : Next.js 16.2.6 + Tailwind v4 + shadcn/ui (new-york/stone) + Sanity + Brevo + next-intl + Vercel
- Direction visuelle : **S1 « L'Art de la Lumière »** (cream `#FBF8F5`, raspberry, gold whisper, Playfair + Inter Light, photos N&B)
- Modèle : lead-gen v1 (pas de checkout), 5 modèles 1000-7000€, lancement mi-juillet 2026
- Plan E2E : `~/.claude/plans/debut-delegated-twilight.md`
- **Convention** : toutes sessions sur `main`, pas de branches/worktrees. Au prochain `/token-saver début`, rouvrir Claude Code depuis `/Users/trikilyes/Desktop/Prive1/Precieuse/` (PAS depuis un worktree).
