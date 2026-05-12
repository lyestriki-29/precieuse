# Session State — 2026-05-12 19:45 (Déploiement front Coolify staging — OK)

## Branch
`main`

## Completed This Session
- **Handover infra OVH** : 2 docs unzippés depuis `files.zip` → archivés dans `.planning/deploy-ovh/` (CLAUDE.md infra Propul'seo + INFRA_CHECKLIST.md).
- **Décision CMS** : Sanity confirmé (deps déjà installées, code prêt). Payload écarté. Schémas et Studio reportés à une phase ultérieure, à co-construire avec Eméline.
- **Brainstorming + spec + plan** :
  - Spec : [`docs/superpowers/specs/2026-05-12-deploy-front-coolify-staging-design.md`](../docs/superpowers/specs/2026-05-12-deploy-front-coolify-staging-design.md)
  - Plan : [`docs/superpowers/plans/2026-05-12-deploy-front-coolify-staging.md`](../docs/superpowers/plans/2026-05-12-deploy-front-coolify-staging.md)
- **Cleanup working tree** : `.gitignore` (exclure `content/Reel produit Precieuse/` 35Mo Facebook export), `web/.gitignore` (exclure `.claude/`), 3 assets `content/*.jpg|png` ajoutés, 5 instagram-raw supprimés.
- **DNS OVH** : records A + AAAA créés pour `precieuse.buildyourway.fr` → VPS OVH.
- **Coolify** : projet "Précieuse Joaillerie" créé, app `precieuse-web` configurée (Nixpacks, base dir `/web`, port 3000, branche main).
- **Site live** : `https://precieuse.buildyourway.fr` répond en HTTP/2 200 avec cert Let's Encrypt valide.

## Debugging notable (4 bugs résolus en série)
1. **Build error pnpm** : `pnpm-workspace.yaml` manquait le champ `packages` → ajouté `packages: ['.']`. Local pnpm 10 tolérait, Coolify pnpm 9.15 refusait.
2. **SSL DEFAULT CERT** : direction "Allow www & non-www" tentait de générer un cert pour `www.precieuse.buildyourway.fr` qui n'a pas de DNS → ACME échouait. Fix : passer en "Redirect to non-www".
3. **Traefik proxy DOWN** : le proxy Coolify était stoppé ("Proxy Exited") → bouton "Start Proxy" cliqué.
4. **Labels Traefik inversés** : FQDN stocké comme `precieuse.buildyourway.fr` (sans `https://`) → Coolify générait `rule=Host(\`\`) && PathPrefix(\`precieuse.buildyourway.fr\`)`. Fix : PATCH API Coolify pour passer le FQDN à `https://precieuse.buildyourway.fr`.

## Smoke tests
- `/fr` (home V4C) : 200 ✅
- `/fr/contact`, `/fr/collection/eugenie`, `/fr/sur-mesure`, `/fr/creatrice`, `/fr/carnet`, `/fr/v4c/preview/collection` : 200 ✅
- HTTP → HTTPS : 307 redirect ✅
- Cert : Let's Encrypt R12, valide 90j ✅

## Next Task

**Demain — Coolify hardening** : suivre la checklist [`.planning/COOLIFY_TODO.md`](COOLIFY_TODO.md), Niveau 1 d'abord (sécurité Coolify : backup .env, 2FA, UFW).

Puis :
- **Niveau 2** (cette semaine) : GitHub App auto-deploy + Healthcheck + noindex robots.txt
- **Phase 2 Sanity** : à démarrer après cadrage avec Eméline sur ses besoins de contenu éditables (15-25h estimé)
- **Audit v2 fiche Eugénie** : 15 problèmes UX/design dans mémoire `project_audit_v2_eugenie.md`
- **Cleanup routes brouillons** : `/fr/v2`, `/fr/v3*`, `/fr/preview/*`, `/dev/components` à virer du staging

## Blockers
None.

## Key Context
- **URL staging** : `https://precieuse.buildyourway.fr`
- **Coolify** : projet `Précieuse Joaillerie`, app `precieuse-web` UUID `cpgrb7szvumbvigoy4e1osm4`, env `production` (renommer en `staging` plus tard si besoin)
- **Stack déployée** : Next.js 16.2.6 + React 19.2.4 + Tailwind v4 + next-intl, Nixpacks build, base dir `/web`, port 3000
- **Aucune env var côté app** : le front est 100% statique tant que Sanity n'est pas intégré.
- **DNS OVH** : A `146.59.228.186` + AAAA `2001:41d0:305:2100::3f8e` sur `precieuse.buildyourway.fr`
- **Direction Coolify** : "Redirect to non-www" (pas de DNS pour www)
- **Token API Coolify** : stocké dans `.env` racine (gitignoré), à révoquer après usage final.
- **Source mode** : "Public Repository" (pas de webhook GitHub) → déploiements manuels via API ou bouton Coolify "Deploy".
