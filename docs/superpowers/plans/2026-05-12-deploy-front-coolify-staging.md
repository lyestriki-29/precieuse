# Déploiement front Précieuse sur Coolify (staging) — Plan d'implémentation

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Déployer le front Next.js 16 actuel (dossier `web/`) sur Coolify staging à l'URL `https://precieuse.buildyourway.fr`, avec auto-deploy depuis `origin/main`.

**Architecture:** Push `origin/main` → webhook GitHub → Coolify VPS OVH (Nixpacks, base directory `/web`) → Next.js bound sur port 3000 → Traefik reverse proxy + Let's Encrypt SSL. Aucune intégration externe (Sanity/Brevo/GA4/Sentry) à ce stade.

**Tech Stack:** Next.js 16.2.6, React 19.2.4, pnpm 9, Tailwind v4, next-intl. Hébergement : VPS OVH Ubuntu 24.04 + Docker + Coolify v4.0.0.

**Référence spec :** [`docs/superpowers/specs/2026-05-12-deploy-front-coolify-staging-design.md`](../specs/2026-05-12-deploy-front-coolify-staging-design.md)

---

## Vue d'ensemble des fichiers touchés

| Fichier | Action | Responsabilité |
|---|---|---|
| `.gitignore` (racine) | Modifier | Ajouter `content/Reel produit Precieuse/` |
| `web/.gitignore` | Modifier | Ajouter `.claude/` |
| `content/EmelineLeray-9696.jpg` | Ajouter au git | Asset source projet |
| `content/Logo PNG.png` | Ajouter au git | Asset source projet |
| `content/gemmyo.jpg` | Ajouter au git | Asset utilisé hero V4C |
| `content/instagram-raw/*.jpg` (×5) | Confirmer suppression staged | Cleanup assets obsolètes |

Aucun fichier source dans `web/src/` n'est modifié. Le plan touche uniquement la config git et le pipeline de déploiement.

---

## Convention "qui fait quoi"

- 🤖 **Claude** : tâches dans le terminal Mac (git, build, edits, commits, push).
- 👤 **Lyes** : tâches dans une interface web (Manager OVH, Coolify dashboard) — Claude **ne peut pas** y accéder, il guide.

---

## Task 1 : Mettre à jour le `.gitignore` racine

**Files:**
- Modify: `.gitignore`

🤖 Claude.

- [ ] **Step 1.1 : Lire le `.gitignore` actuel** (déjà fait pendant le brainstorming, contenu connu)

- [ ] **Step 1.2 : Ajouter l'entrée pour le dossier Facebook export**

Utiliser l'outil Edit pour ajouter une section après la ligne "# Archive lourd (templates HTML zip jamais utilisés — gardés en local seulement)" :

```
old_string:
# Archive lourd (templates HTML zip jamais utilisés — gardés en local seulement)
archive/html-templates/*.zip
archive/v0-templates/*.zip

new_string:
# Archive lourd (templates HTML zip jamais utilisés — gardés en local seulement)
archive/html-templates/*.zip
archive/v0-templates/*.zip

# Content externe — export Facebook (35 Mo, archive locale uniquement)
content/Reel produit Precieuse/
```

- [ ] **Step 1.3 : Vérifier que git ignore bien le dossier**

Run: `git status --short | grep -i reel`
Expected: aucune ligne (le dossier n'apparaît plus comme untracked)

---

## Task 2 : Mettre à jour le `web/.gitignore`

**Files:**
- Modify: `web/.gitignore`

🤖 Claude.

- [ ] **Step 2.1 : Ajouter `.claude/` au gitignore Next**

Utiliser Edit pour ajouter une section à la fin de `web/.gitignore` :

```
old_string:
# typescript
*.tsbuildinfo
next-env.d.ts

new_string:
# typescript
*.tsbuildinfo
next-env.d.ts

# Claude Code config locale
.claude/
```

- [ ] **Step 2.2 : Vérifier que `web/.claude/` est bien ignoré**

Run: `git status --short | grep "web/.claude"`
Expected: aucune ligne

---

## Task 3 : Vérifier le diff staging avant de committer

🤖 Claude.

- [ ] **Step 3.1 : Voir l'état complet**

Run: `git status`
Expected output: doit montrer :
- Modified: `.gitignore`, `web/.gitignore`
- Deleted (staged) : 5 fichiers `content/instagram-raw/*.jpg`
- Untracked: `content/EmelineLeray-9696.jpg`, `content/Logo PNG.png`, `content/gemmyo.jpg`
- **Ne PAS voir** : `content/Reel produit Precieuse/`, `web/.claude/`

- [ ] **Step 3.2 : Si `Reel produit Precieuse/` ou `web/.claude/` apparaît encore**

Diagnostic :
- `Reel produit Precieuse/` apparaît → vérifier la syntaxe du `.gitignore` (espace avant `produit`, trailing slash, etc.). Tester avec `git check-ignore -v "content/Reel produit Precieuse/"`.
- `web/.claude/` apparaît → vérifier `web/.gitignore` syntax. Tester avec `git check-ignore -v "web/.claude"`.

Ne pas avancer tant que l'output de Step 3.1 n'est pas conforme.

---

## Task 4 : Stager les modifications voulues

🤖 Claude.

- [ ] **Step 4.1 : Stager le .gitignore racine et les nouveaux assets content/**

Run:
```bash
git add .gitignore web/.gitignore "content/EmelineLeray-9696.jpg" "content/Logo PNG.png" "content/gemmyo.jpg"
```

(Les suppressions de `content/instagram-raw/*.jpg` sont déjà staged depuis avant cette session, ne pas re-toucher.)

- [ ] **Step 4.2 : Confirmer la liste staged**

Run: `git diff --cached --stat`
Expected: doit lister
- `.gitignore` (modification)
- `web/.gitignore` (modification)
- 5 deletions sous `content/instagram-raw/`
- 3 additions sous `content/`

---

## Task 5 : Vérifier que `pnpm build` passe

**Files:** aucun

🤖 Claude.

- [ ] **Step 5.1 : Build production en local**

Run: `cd web && pnpm build`
Expected:
- Aucune erreur TypeScript
- Aucune erreur de build webpack/turbopack
- Liste des routes affichée (home, `/fr/v4c`, etc.)
- Message final type "Compiled successfully"

Si échec → STOP, debugger. Le déploiement Coolify utilisera la même commande, donc tout échec local sera reproduit sur le serveur.

---

## Task 6 : Committer le cleanup

🤖 Claude.

- [ ] **Step 6.1 : Créer le commit**

Run:
```bash
git commit -m "$(cat <<'EOF'
chore(deploy): cleanup working tree + ignore .claude/ avant push staging

- gitignore: exclure content/Reel produit Precieuse/ (35 Mo export Facebook)
- web/.gitignore: exclure .claude/ (config IDE locale)
- content/: ajouter EmelineLeray-9696.jpg, Logo PNG.png, gemmyo.jpg
- content/instagram-raw/: supprimer 5 jpg obsolètes

Préparation déploiement Coolify staging (precieuse.buildyourway.fr).

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

- [ ] **Step 6.2 : Vérifier le commit**

Run: `git log -1 --stat`
Expected: commit créé sur `main`, **10 fichiers touchés** :
- 2 modifications : `.gitignore`, `web/.gitignore`
- 3 ajouts : `content/EmelineLeray-9696.jpg`, `content/Logo PNG.png`, `content/gemmyo.jpg`
- 5 suppressions : `content/instagram-raw/*.jpg`

---

## Task 7 : Push sur origin/main

🤖 Claude.

⚠️ **Cette étape déclenchera un webhook Coolify SI la source est déjà configurée.** Si Coolify n'est pas encore configuré (cas attendu pour ce premier déploiement), le push est inoffensif — il reste sur GitHub sans déclencher de build.

- [ ] **Step 7.1 : Push**

Run: `git push origin main`
Expected: push successful, 2 commits poussés (spec doc + cleanup).

- [ ] **Step 7.2 : Vérifier sur GitHub**

Run: `gh repo view lyestriki-29/precieuse --json defaultBranchRef -q .defaultBranchRef.target.history.nodes 2>/dev/null || gh browse -n`
(Alternative : ouvrir manuellement https://github.com/lyestriki-29/precieuse)
Expected: les 2 derniers commits visibles sur main.

---

## Task 8 : Créer les records DNS chez OVH

👤 **Lyes (manuel, dans le navigateur).**

⚠️ Étape bloquante avant de pouvoir déployer sur Coolify avec SSL Let's Encrypt — sans DNS pointant vers le VPS, Let's Encrypt échouera.

- [ ] **Step 8.1 : Se connecter au Manager OVH**

URL : https://www.ovh.com/manager/#/web/domain/buildyourway.fr/dns
Compte : `team@propulseo-site.com`

- [ ] **Step 8.2 : Ajouter le record A**

Cliquer "Ajouter une entrée" :
- Type : `A`
- Sous-domaine : `precieuse`
- Cible : `146.59.228.186`
- TTL : `3600`

Valider.

- [ ] **Step 8.3 : Ajouter le record AAAA**

Cliquer "Ajouter une entrée" :
- Type : `AAAA`
- Sous-domaine : `precieuse`
- Cible : `2001:41d0:305:2100::3f8e`
- TTL : `3600`

Valider.

- [ ] **Step 8.4 : Vérifier la propagation DNS**

Attendre 2-5 minutes, puis depuis le Mac :

Run: `dig +short precieuse.buildyourway.fr A`
Expected: `146.59.228.186`

Run: `dig +short precieuse.buildyourway.fr AAAA`
Expected: `2001:41d0:305:2100::3f8e`

Si pas encore propagé, attendre 5 minutes de plus. Ne pas avancer sans propagation, sinon Let's Encrypt échouera.

---

## Task 9 : Créer le projet Coolify

👤 **Lyes (manuel, dans Coolify).**

- [ ] **Step 9.1 : Se connecter à Coolify**

URL : https://coolify.buildyourway.fr

- [ ] **Step 9.2 : Créer le projet**

Sidebar → Projects → "+ New" → New Project :
- Name : `Précieuse Joaillerie`
- Description : `Site vitrine bijouterie sur-mesure Eméline Le Ray`

Valider. Cliquer sur le projet créé.

- [ ] **Step 9.3 : Sélectionner l'environnement**

Dans le projet, environnement par défaut "Production" existe. Renommer en "staging" si possible (Settings de l'environnement), sinon créer un nouvel environnement "staging".

- [ ] **Step 9.4 : Sélectionner le serveur cible**

Dans l'environnement staging, sélectionner le serveur "This Machine" / "localhost".

---

## Task 10 : Créer l'application Coolify

👤 **Lyes (manuel, dans Coolify).**

- [ ] **Step 10.1 : New Resource → Application**

Dans le projet "Précieuse Joaillerie" → environnement staging → "+ New Resource" → Application.

- [ ] **Step 10.2 : Choisir la source**

Source type : **Public Repository** (pas besoin de GitHub App, le repo est public).

Repository URL : `https://github.com/lyestriki-29/precieuse.git`
Branch : `main`
Build Pack : **Nixpacks** (laisser la sélection par défaut)

- [ ] **Step 10.3 : Configuration build**

- Application Name : `precieuse-web`
- **Base Directory : `/web`** ← critique
- Publish Directory : laisser vide (Next.js standalone par défaut)
- Install command : `pnpm install --frozen-lockfile` (Nixpacks peut le faire auto, mais override si besoin)
- Build command : `pnpm build`
- Start command : `pnpm start`
- Ports Exposes : `3000`

- [ ] **Step 10.4 : Configuration domaine**

Dans la section Domains :
- Ajouter : `https://precieuse.buildyourway.fr`
- HTTPS activé (par défaut)
- Force HTTPS Redirect : ✅
- Generate Automatic SSL : ✅ (Let's Encrypt)

Sauvegarder.

---

## Task 11 : Premier déploiement Coolify

👤 **Lyes (manuel) + 🤖 Claude (vérification).**

- [ ] **Step 11.1 : Lancer le déploiement**

Dans l'application Coolify, cliquer "Deploy".

- [ ] **Step 11.2 : Surveiller les logs (Lyes)**

Onglet "Logs" ou "Deployments". Le build prend typiquement 3-6 minutes :
1. Clone du repo
2. Détection Nixpacks → installe Node.js + pnpm
3. `pnpm install` (1-2 min)
4. `pnpm build` (2-3 min)
5. Container start sur port 3000
6. Traefik route le sous-domaine → port interne
7. Let's Encrypt génère le certificat

- [ ] **Step 11.3 : Vérifier en HTTPS**

Une fois le déploiement marqué "Running" / "Healthy" :

Run (Claude): `curl -sI https://precieuse.buildyourway.fr | head -5`
Expected:
```
HTTP/2 200
content-type: text/html...
```

Si HTTP 502 / 504 : le container n'a pas démarré correctement. Vérifier les logs runtime dans Coolify.
Si erreur SSL : DNS pas propagé ou Let's Encrypt pas terminé. Attendre 2-3 min et relancer.

---

## Task 12 : Smoke tests post-deploy

🤖 Claude (vérification automatisable) + 👤 Lyes (validation visuelle).

- [ ] **Step 12.1 : Tester la home**

Run: `curl -sI https://precieuse.buildyourway.fr/ | grep -E "HTTP|content-type"`
Expected:
```
HTTP/2 200
content-type: text/html; charset=utf-8
```

(Note : Next.js avec next-intl redirige `/` vers `/fr/` — un 307/308 est acceptable.)

- [ ] **Step 12.2 : Tester `/fr/v4c`**

Run: `curl -sI https://precieuse.buildyourway.fr/fr/v4c | head -3`
Expected: `HTTP/2 200`

- [ ] **Step 12.3 : Tester `/fr/contact`**

Run: `curl -sI https://precieuse.buildyourway.fr/fr/contact | head -3`
Expected: `HTTP/2 200`

- [ ] **Step 12.4 : Validation visuelle (Lyes)**

Ouvrir dans le navigateur :
- https://precieuse.buildyourway.fr/fr → home V4C s'affiche, hero E4a visible, cadenas vert
- https://precieuse.buildyourway.fr/fr/v4c → identique à la home (V4C est la home en prod)
- https://precieuse.buildyourway.fr/fr/contact → page contact rendue

Si une page est cassée visuellement → ouvrir devtools, regarder Console + Network pour identifier le problème.

---

## Task 13 : Valider l'auto-deploy

🤖 Claude + 👤 Lyes (Coolify).

- [ ] **Step 13.1 : Faire un commit trivial**

Run:
```bash
echo "" >> README.md
git add README.md
git commit -m "chore(deploy): test auto-deploy webhook"
git push origin main
```

- [ ] **Step 13.2 : Vérifier le déclenchement (Lyes)**

Dans Coolify → application `precieuse-web` → onglet "Deployments".
Expected: un nouveau déploiement apparaît automatiquement dans les 30 secondes.

Si rien ne se déclenche :
- Vérifier que le webhook GitHub est bien configuré dans Coolify (Settings → Webhooks)
- Vérifier qu'aucune erreur n'apparaît côté GitHub (Settings du repo → Webhooks → Recent deliveries)

- [ ] **Step 13.3 : Confirmer le redéploiement réussi**

Attendre 3-6 min, vérifier que le nouveau deployment est "Running" / "Healthy".

Run (Claude): `curl -sI https://precieuse.buildyourway.fr | head -1`
Expected: `HTTP/2 200`

---

## Task 14 : Mettre à jour SESSION.md

🤖 Claude.

- [ ] **Step 14.1 : Mettre à jour `.planning/SESSION.md`**

Utiliser Edit pour remplacer le contenu actuel par :

```markdown
# Session State — 2026-05-12 (Déploiement front Coolify staging)

## Branch
`main`

## Completed This Session
- **Récupération handover OVH** : 2 docs décompressés dans `.planning/deploy-ovh/` (CLAUDE.md infra + INFRA_CHECKLIST.md).
- **Décision CMS** : Sanity confirmé (deps déjà installées, code prêt). Payload écarté pour le périmètre actuel.
- **Brainstorming + spec + plan d'implémentation** : phase 1 = front seul sur Coolify staging. Spec et plan commités dans `docs/superpowers/`.
- **Cleanup working tree** : `.gitignore` mis à jour (exclure `Reel produit Precieuse/` et `web/.claude/`), 3 assets `content/*` ajoutés, 5 instagram-raw deletes confirmés.
- **Déploiement Coolify** : projet `Précieuse Joaillerie` créé, application `precieuse-web` déployée sur `https://precieuse.buildyourway.fr`. SSL Let's Encrypt OK. Auto-deploy webhook validé.

## Next Task
**Phase 2 — Intégration Sanity** : à ne démarrer qu'après session de cadrage avec Eméline sur les contenus qu'elle veut éditer (schémas dérivés de ses besoins réels, pas hypothétiques).

Autres sujets en attente :
- Audit v2 fiche Eugénie (15 problèmes UX/design — mémoire `project_audit_v2_eugenie.md`)
- Cleanup routes brouillons (`/fr/v2`, `/fr/v3*`, `/fr/preview/*`, `/dev/components`)
- Stratégie protection staging (noindex robots.txt OU Basic Auth Traefik)

## Blockers
None.

## Key Context
- URL staging : `https://precieuse.buildyourway.fr`
- Coolify project : `Précieuse Joaillerie` / app `precieuse-web` / env `staging`
- Build pack : Nixpacks, base dir `/web`, port 3000
- Aucune env var côté app — le front est 100% statique tant que Sanity n'est pas intégré
- DNS records OVH : A 146.59.228.186 + AAAA 2001:41d0:305:2100::3f8e sur `precieuse.buildyourway.fr`
```

- [ ] **Step 14.2 : Committer SESSION.md**

Run:
```bash
git add .planning/SESSION.md
git commit -m "chore(session): déploiement front Coolify staging terminé"
git push origin main
```

---

## Annexe A — Troubleshooting

### Build Nixpacks échoue : "Cannot find package manager"

Cause : pnpm-workspace.yaml mal interprété, ou Nixpacks ne détecte pas pnpm.

Solution : dans Coolify, override l'install command :
```
corepack enable && corepack prepare pnpm@9 --activate && pnpm install --frozen-lockfile
```

### Build OOM (Out of Memory)

Cause : Next 16 + React 19 = compile lourd. VPS-2 a 12 Go RAM mais d'autres apps peuvent consommer.

Solution court terme : dans Coolify env vars, ajouter `NODE_OPTIONS=--max-old-space-size=4096`.
Solution long terme : upgrade VPS-3 (24 Go RAM).

### Let's Encrypt échoue : "Could not validate domain"

Cause : DNS pas propagé, OU Traefik écoute pas sur 80/443.

Solutions :
1. Run `dig +short precieuse.buildyourway.fr A` depuis le Mac — doit renvoyer `146.59.228.186`.
2. Si DNS OK mais erreur persiste : Coolify → Settings → Verify domain config. Force re-issue du certificat.

### Container ne démarre pas, logs : "Module not found: Can't resolve..."

Cause : un import qui marche en dev mais pas en build, ou un fichier untracked utilisé localement.

Solutions :
1. Vérifier qu'aucun fichier critique n'est gitignored par erreur.
2. Run `pnpm build` en local — si ça passe en local mais pas en Coolify, comparer les versions Node (`node -v` local vs Coolify image).

### Auto-deploy ne se déclenche pas

Cause : webhook GitHub pas créé par Coolify (peut arriver avec mode Public Repository).

Solutions :
1. Coolify → application → Configuration → Sources → cliquer "Connect via GitHub App" pour upgrader.
2. Ou rester en mode Public et déployer manuellement via bouton Deploy à chaque push.

---

## Annexe B — Critères de réussite globaux

Le plan est terminé avec succès quand **toutes** ces conditions sont vraies :

- [ ] `https://precieuse.buildyourway.fr` renvoie HTTP 200 avec cadenas vert
- [ ] Home + `/fr/v4c` + `/fr/contact` s'affichent sans erreur console
- [ ] Un push sur `origin/main` déclenche un redéploiement Coolify dans les 30s
- [ ] `SESSION.md` à jour, commité, pushé
- [ ] Plan et spec disponibles dans `docs/superpowers/` pour traçabilité
