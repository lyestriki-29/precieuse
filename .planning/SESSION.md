# Session State — 2026-05-08 (fin Phase 2)

## Branch
`main`

## Completed This Session
- **Phase 1** mergée sur main : design system luxe (Container, Section, Heading, Reveal, LuxeImage), Nav (transparente→solide, burger mobile via portail), Footer, page QA `/dev/components`. Code review : 2 fixs (React namespace, portail overlay).
- **Phase 2** livrée : routing `/[locale]/` (FR seul), middleware redirect, 8 pages (home + collection + 5 fiches produit + créatrice + sur-mesure + contact + 3 légales), data layer `lib/content/*`, form contact (zod + react-hook-form + Sonner, submit mocké). Code review : 3 fixs (middleware redirect locales inconnues, try/catch form, erreur topic). Dette Phase 5 commentée (locale-aware links + html lang).

## Next Task
**Phase 3 — Sanity CMS (~2 jours, 1 session).**

À créer dans `web/sanity/schemas/` : `product`, `testimonial`, `page` (sections modulaires), `settings` (nav, footer, contact). Studio embarqué `/studio` avec auth Sanity. Migration progressive du copy hardcodé (`lib/content/*`) vers GROQ + ISR (revalidate 60s) pour produits, témoignages, contenu home modifiable.

**Démarrer par** : créer projet Sanity (sanity.io/manage), récupérer `projectId` + `dataset`, ajouter env vars, scaffolding studio via `npx sanity init` ou config manuelle dans `sanity.config.ts`.

## Blockers
- Photos manquantes : portrait Annabelle N&B + 4 packshots (Aurore, Eugénie, Thelma, Louise) → placeholders en place jusqu'à Phase 6
- Validation copy bio Eméline + suspicion photos IA (A1/A2)
- Schéma webhook Propul'seo CRM (Phase 4)
- Email officiel Eméline + numéro WhatsApp (placeholders dans `lib/content/site.ts`)
- Domaine `precieuse.fr` à confirmer/acheter (Phase 6)
- Logo SVG HD vectoriel
- ⚠️ Clé Stitch API à régénérer
- Décision EN/PT en v1 ou v1.1 (Phase 5)

## Key Context
- Stack : Next.js 16.2.6 + Tailwind v4 + shadcn (style **base-nova** — `Button` n'a PAS `asChild`, utiliser `buttonVariants()` sur `<Link>`/`<a>` via `cn()`) + Sanity + Brevo + next-intl + Vercel
- Direction visuelle : **S1 « L'Art de la Lumière »** (cream `#FBF8F5`, raspberry, gold whisper, Playfair + Inter Light, photos N&B)
- Modèle : lead-gen v1 (pas de checkout), 5 modèles 1000-7000€, lancement mi-juillet 2026
- Plan E2E : `~/.claude/plans/debut-delegated-twilight.md`
- Plan Phase 1 : `~/.claude/plans/debut-peaceful-sedgewick.md` (consommé)
- **Pattern Next.js 16** : `params` est async (`Promise<{...}>`). Utiliser `LayoutProps<"/[route]">` / `PageProps<"/[route]">` globaux générés par `pnpm exec next typegen` (re-générer si nouvelle route dynamique).
- **Convention** : toutes sessions sur `main`, pas de branches/worktrees.
- Routes statiques générées : 12 (home + 5 produits + 5 pages + dev/components) + middleware Proxy.
