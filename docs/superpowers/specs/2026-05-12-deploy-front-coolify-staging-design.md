# Déploiement front Précieuse sur Coolify (staging) — Design Spec

> **Date** : 2026-05-12
> **Statut** : Spec validée, à compléter par un plan d'implémentation
> **Auteur** : Claude Code + Lyes Triki
> **Phase** : 1 sur N (front seul, sans intégrations)

---

## 1. Objectif et périmètre

### 1.1 Objectif

Déployer le contenu actuel du dossier `web/` sur le VPS OVH via Coolify, accessible en HTTPS sur un sous-domaine de `buildyourway.fr`. Pipeline auto-deploy via webhook GitHub à chaque push sur `main`.

### 1.2 Dans le périmètre

- Next.js 16 statique tel qu'il existe aujourd'hui dans `web/`
- Toutes les routes existantes (home, `v2`, `v3*`, `v4c`, `preview/*`, `/dev/components`, fiches institutionnelles)
- Build production via Nixpacks (auto-détection Next.js + pnpm)
- HTTPS Let's Encrypt automatique
- Auto-deploy depuis branche `main` via webhook GitHub
- Cleanup minimal du working tree avant push

### 1.3 Hors périmètre (phases ultérieures)

- Intégration Sanity (schémas, Studio, requêtes GROQ) — phase dédiée
- Formulaires fonctionnels (contact, newsletter) — phase dédiée
- Envois email Brevo — phase dédiée
- Webhook CRM Propul'seo — phase dédiée
- SEO production (sitemap, robots.txt, OG, structured data) — phase dédiée
- Analytics GA4 — phase dédiée
- Sentry error tracking — phase dédiée
- Domaine final `precieuse.fr` — phase de mise en production
- Basic Auth ou noindex sur staging — décision reportée
- Cleanup des routes brouillons (`v2/v3*/preview/*/dev`) — décision : conservées pour ce déploiement

### 1.4 Critères de succès

- `https://precieuse.buildyourway.fr` répond en HTTP 200 avec cadenas vert
- Au moins 3 routes accessibles et rendues correctement (home, `/fr/v4c`, `/fr/contact`)
- Un push sur `origin/main` déclenche un redéploiement automatique
- Pas de warning critique dans les logs de build Coolify

---

## 2. Contexte technique

### 2.1 État actuel du code

| Élément | Valeur |
|---|---|
| Framework | Next.js 16.2.6 |
| React | 19.2.4 |
| Styling | Tailwind v4 |
| i18n | next-intl (locale `fr`) |
| Package manager | pnpm 9.x (lock présent) |
| Build status | ✅ `pnpm build` passe sans erreur |
| Variables d'env utilisées | Aucune dans `src/` (vérifié via `grep process.env`) |
| Dépendances CMS | Sanity installé mais **non configuré** (ni schémas ni studio) |
| GitHub remote | `https://github.com/lyestriki-29/precieuse.git` |

### 2.2 État de l'infrastructure cible

| Élément | Valeur |
|---|---|
| VPS | OVH VPS-2, Gravelines, Ubuntu 24.04 |
| IPv4 | `146.59.228.186` |
| IPv6 | `2001:41d0:305:2100::3f8e` |
| Coolify | v4.0.0, `https://coolify.buildyourway.fr` |
| Domaine infra | `buildyourway.fr` (registrar OVH) |
| Docker | Installé et actif |
| Source GitHub Coolify | À configurer (étape de l'implémentation) |

---

## 3. Architecture cible

```
GitHub                              Coolify (VPS OVH)
─────────────────                   ──────────────────────────
lyestriki-29/precieuse.git    →     Project: "Précieuse Joaillerie"
   ↓ webhook push (main)               └ Application: "precieuse-web"
                                           ├ Source: GitHub App → ce repo
                                           ├ Branch: main
                                           ├ Base directory: /web
                                           ├ Build pack: Nixpacks
                                           ├ Install: pnpm install
                                           ├ Build: pnpm build
                                           ├ Start: pnpm start
                                           ├ Port: 3000
                                           ├ Domain: precieuse.buildyourway.fr
                                           └ SSL: Let's Encrypt (auto)
```

### 3.1 Choix techniques justifiés

**Base directory `/web`** : le repo a une racine multi-dossiers (`web/`, `content/`, `Matieres/`, `docs/`, `archive/`). Coolify a besoin de pointer sur le sous-dossier qui contient `package.json`.

**Build pack Nixpacks** plutôt que Dockerfile custom : auto-détection Next.js + pnpm (présence de `pnpm-lock.yaml`), zéro config requise. Si problème de build au premier déploiement, fallback prévu = écrire un Dockerfile custom dans une phase ultérieure.

**Aucune variable d'environnement** côté app : le code statique actuel ne référence aucun `process.env.*` dans `src/`. Déploiement sans secrets à configurer.

**Branche `main` → staging** : convention cohérente avec le doc `INFRA_CHECKLIST.md`. Le webhook GitHub déclenche un redeploy auto à chaque push.

---

## 4. DNS

Records à créer chez OVH sur le domaine `buildyourway.fr` avant le premier déploiement (sinon Let's Encrypt échoue) :

| Type | Sous-domaine | Cible | TTL |
|---|---|---|---|
| A | `precieuse` | `146.59.228.186` | 3600 |
| AAAA | `precieuse` | `2001:41d0:305:2100::3f8e` | 3600 |

**URL finale staging** : `https://precieuse.buildyourway.fr`

---

## 5. Cleanup working tree avant push

État actuel `git status` :

| Fichier | État | Action |
|---|---|---|
| `content/instagram-raw/*.jpg` (×5) | Supprimés (staged) | Committer le delete (assets plus utilisés) |
| `content/EmelineLeray-9696.jpg` | Untracked | Committer (asset source du projet) |
| `content/Logo PNG.png` | Untracked | Committer (asset source du projet) |
| `content/Reel produit Precieuse/` (35 Mo) | Untracked | **Ne pas committer** (export Facebook HTML/médias, bulky, hors scope projet) → ajouter au `.gitignore` racine |
| `content/gemmyo.jpg` | Untracked | Committer (asset utilisé sur le hero V4C) |
| `web/.claude/` | Untracked | Ajouter à `.gitignore` (config IDE locale) |

### 5.1 Pourquoi committer les assets `content/*.jpg|png`

Le dossier `content/` n'est **pas** servi en production (seul `web/` l'est via Coolify). Mais c'est un dossier source dans le repo, et les assets servent à terme à alimenter le CMS Sanity (phase ultérieure). Garder versionné = traçabilité + backup git.

### 5.2 Pourquoi exclure `content/Reel produit Precieuse/`

35 Mo d'export Facebook (HTML + images de posts). Ce n'est pas un asset source du projet web, juste une référence externe gardée pour archive locale. À gitignorer pour ne pas alourdir le repo.

### 5.3 Pourquoi exclure `web/.claude/`

Configuration locale Claude Code spécifique à la machine. Pas de valeur pour les autres devs ni pour le déploiement.

---

## 6. Workflow d'exécution

### 6.1 Côté Mac local (Claude)

1. Ajouter `web/.claude/` au `.gitignore` du sous-dossier `web/`
2. `git add -A` des fichiers à intégrer (deletes `content/instagram-raw/*` + nouveaux assets `content/*`)
3. Vérifier le diff staging
4. `pnpm build` une dernière fois pour confirmer la santé du code
5. Commit avec message clair (`chore(deploy): cleanup assets + ignore .claude/ avant push staging`)
6. `git push origin main`

### 6.2 Côté Lyes (manuel, dans navigateur)

7. **Manager OVH → DNS `buildyourway.fr`** : créer records A + AAAA pour `precieuse`
8. **Coolify → New Project "Précieuse Joaillerie"** :
   - Environment : `staging`
   - New Resource → Application → **Public Repository** (le repo `lyestriki-29/precieuse` est public, pas besoin de GitHub App pour ce premier déploiement)
   - Repo URL : `https://github.com/lyestriki-29/precieuse.git`
   - Branch : `main`
   - **Base directory : `/web`** ← critique, sans ça le build échoue
   - Build pack : Nixpacks (par défaut)
   - Port exposé : `3000`
   - Domain : `precieuse.buildyourway.fr`
9. **Coolify → Deploy** : surveiller les logs
10. **Vérification** : ouvrir `https://precieuse.buildyourway.fr`, tester home + `/fr/v4c` + `/fr/contact`

### 6.3 Validation auto-deploy

11. Faire un petit commit insignifiant (ex: corriger un typo dans le README)
12. Push sur `origin/main`
13. Vérifier dans Coolify qu'un nouveau build se déclenche automatiquement
14. Confirmer que le site reflète le changement

---

## 7. Risques identifiés et mitigations

| Risque | Probabilité | Mitigation |
|---|---|---|
| Nixpacks ne détecte pas Next.js 16 correctement (version très récente) | Moyenne | Fallback : écrire un `Dockerfile` custom avec node:20 + pnpm |
| Build échoue à cause de pnpm-workspace.yaml | Faible | Le fichier existe et déclare juste le workspace racine ; vérifier compatibilité Nixpacks |
| Let's Encrypt échoue (DNS pas propagé) | Moyenne | Attendre 5-10 min après création des records ; vérifier propagation via `dig` |
| Port 3000 conflit avec une autre app Coolify | Faible | Aucune autre app déployée pour l'instant (Coolify projet vide) |
| Routes brouillon indexées par Google sur staging | Moyenne | Différé : on ajoutera noindex dans une phase SEO. Pour l'instant, staging non communiqué publiquement. |
| Build OOM sur VPS 12Go RAM | Faible | Next 16 + React 19 = compile lourd mais ça tient largement |
| Le `pnpm start` ne tient pas en arrière-plan dans le container | Faible | Coolify gère le process supervisor par défaut |

---

## 8. Plan de rollback

Si le déploiement casse en cours de route :

1. **Si push fait mais déploiement Coolify KO** : aucun impact, l'app n'est pas encore live. Debug les logs Coolify, corriger, redéployer.
2. **Si déploiement réussi mais site cassé** : `git revert` du commit fautif, push, Coolify redéploie automatiquement la version précédente.
3. **Si DNS mal configuré** : supprimer les records OVH, refaire. Aucun impact prod (staging only).
4. **Si compromis sécurité (mot de passe SSH, .env fuité)** : voir `INFRA_CHECKLIST.md` section "Sécurité". Procédure : changer mots de passe, régénérer secrets Coolify.

---

## 9. Décisions ouvertes (à traiter dans des phases ultérieures)

- [ ] Cleanup des routes brouillons (`/fr/v2`, `/fr/v3*`, `/fr/preview/*`, `/dev/components`)
- [ ] Stratégie de protection du staging (noindex robots.txt OU Basic Auth Traefik)
- [ ] Convention de branche staging/prod (faut-il créer une branche `production` séparée ?)
- [ ] Schéma Sanity (à co-construire avec Eméline)
- [ ] Domaine final `precieuse.fr` (à confirmer avec Eméline)
- [ ] Backups : pas requis tant que pas de Postgres (Sanity gère son propre stockage côté SaaS)

---

## 10. Suivi de phase

| Phase | Description | Statut |
|---|---|---|
| **P1 — Déploiement front (ce doc)** | Pousser le front statique sur Coolify staging | À implémenter |
| P2 — Intégration Sanity | Schémas + Studio + requêtes + migration contenus | Non commencée |
| P3 — Formulaires + emails | Contact, newsletter, Brevo, webhook CRM | Non commencée |
| P4 — SEO production | Sitemap, robots, OG, structured data | Non commencée |
| P5 — Monitoring | Sentry + GA4 | Non commencée |
| P6 — Mise en production | Domaine final, noindex retiré, soumission Search Console | Non commencée |
