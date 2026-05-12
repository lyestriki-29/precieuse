# CLAUDE.md — Handover Infrastructure Propul'seo (VPS + Coolify)

> **Contexte** : Ce document est un handover pour Claude Code. Lyes (cofondateur Propul'seo) vient de finaliser le setup d'un VPS OVH + Coolify pour héberger les sites clients et SaaS internes de l'agence. Tu reprends la main pour finir la configuration et déployer le premier projet client (Précieuse Joaillerie).
>
> **Date du handover** : 12 mai 2026
> **Repo / projet** : Infra interne Propul'seo
> **Stack hébergement cible** : Next.js + Payload CMS 3 + Postgres + Coolify sur VPS OVH

---

## 1. État de l'infrastructure (ce qui est FAIT)

### 1.1 VPS OVH

| Attribut | Valeur |
|---|---|
| Modèle | VPS-2 (gamme 2026) |
| Datacenter | Gravelines (France) |
| OS | Ubuntu 24.04 LTS |
| Kernel | 6.8.0-111-generic (à jour) |
| IPv4 | `146.59.228.186` |
| IPv6 | `2001:41d0:305:2100::3f8e` |
| Hostname | `vps-9b5d604d.vps.ovh.net` |
| RAM | 12 Go |
| vCores | 6 |
| Stockage | 100 Go SSD NVMe |
| Engagement | Sans engagement (peut être upgradé à 12 mois pour économiser ~8%) |
| Prix | 9,99 € HT/mois |
| Backup OVH | Sauvegarde quotidienne incluse (1 jour de rétention) |

### 1.2 Sécurité système

- **Utilisateur de connexion** : `ubuntu` (le user `root` est désactivé par défaut par OVH)
- **Authentification SSH par clé** : ✅ activée (clé ed25519 du Mac de Lyes)
- **Authentification par mot de passe** : ⚠️ **TOUJOURS ACTIVE** — désactivation reportée car Lyes va bientôt changer de Mac. À désactiver après transition vers nouveau Mac.
- **fail2ban** : ✅ installé et actif sur SSH (déjà 6+ IPs bannies en quelques minutes)
- **UFW (firewall)** : ⚠️ pas explicitement configuré. À vérifier — Coolify peut avoir configuré iptables via Docker. Ports requis ouverts : 22 (SSH), 80 (HTTP), 443 (HTTPS), 8000 (Coolify admin, à restreindre idéalement).
- **Mot de passe utilisateur ubuntu** : changé par Lyes au premier login (stocké dans son gestionnaire de mots de passe)

### 1.3 Accès depuis le Mac de Lyes

Alias SSH configuré dans `~/.ssh/config` :

```
Host vps-propulseo
    HostName 146.59.228.186
    User ubuntu
    IdentityFile ~/.ssh/id_ed25519
```

Commande de connexion : `ssh vps-propulseo`

### 1.4 Coolify

| Attribut | Valeur |
|---|---|
| Version | 4.0.0 |
| URL admin | `https://coolify.buildyourway.fr` |
| Compte admin | Lyes Triki (email : team@propulseo-site.com) |
| Serveur configuré | `localhost` ("This Machine") |
| Projet par défaut | "My first project" (Production environment) |
| Docker | ✅ installé et actif |
| Fichier `.env` | `/data/coolify/source/.env` ⚠️ **À SAUVEGARDER** dans gestionnaire de mots de passe (pas encore fait) |

### 1.5 DNS et HTTPS

Domaine utilisé pour l'infra interne : `buildyourway.fr` (registrar OVH, déjà possédé par Propul'seo).

Records DNS ajoutés :

```
coolify.buildyourway.fr    A      146.59.228.186
coolify.buildyourway.fr    AAAA   2001:41d0:305:2100::3f8e
```

SSL Let's Encrypt généré automatiquement par Coolify/Traefik. Dashboard accessible en `https://coolify.buildyourway.fr` avec cadenas vert.

---

## 2. Stratégie d'usage du VPS

### 2.1 Architecture choisie

- **"This Machine"** dans Coolify : Coolify orchestre les apps sur le VPS qui l'héberge lui-même.
- Justification : coût optimisé (1 VPS au lieu de 2), aligné avec le stade actuel de Propul'seo.
- À migrer en "Remote Server" plus tard quand 5-10 clients payants en hébergement récurrent (séparer plan de contrôle du plan de données).

### 2.2 Modèle économique cible

- VPS-2 à 10 €/mois HT mutualisé sur **10-15 sites clients** TPE/PME (Next.js statique ou ISR léger)
- Si ajout de Supabase self-hosted ou Payload lourd : prévoir upgrade vers VPS-3 (~20 €/mois HT, 24 Go RAM)
- Marge brute hébergement : ~90% sur l'offre "Hébergement Essentiel" 15 €/mois client

### 2.3 Domaines

- **Infra interne** : `buildyourway.fr` (`coolify.buildyourway.fr`, et futurs `staging.buildyourway.fr`, `test.buildyourway.fr`, etc.)
- **Sites clients** : domaine propre de chaque client
- **Staging client** : `<nom-projet>.buildyourway.fr` (ou sous-domaine de chez le client)
- **Production client** : domaine final du client (ex: `precieuse.fr`)

---

## 3. Ce qui RESTE À FAIRE (priorité décroissante)

### 3.1 Sécurité et bonnes pratiques (urgent — 15 min)

- [ ] **Sauvegarder `/data/coolify/source/.env`** dans le gestionnaire de mots de passe de Lyes (1Password / Bitwarden / Apple Keychain) sous l'entrée `Coolify .env - VPS Propul'seo`
- [ ] **Activer le 2FA** sur le compte admin Coolify (Profile → Two-Factor Authentication)
- [ ] **Vérifier UFW** :
  ```bash
  sudo ufw status verbose
  ```
  Si inactif, configurer minimalement :
  ```bash
  sudo ufw allow OpenSSH
  sudo ufw allow http
  sudo ufw allow https
  sudo ufw enable
  ```
  ⚠️ Vérifier compatibilité avec Docker (Docker bypasse parfois UFW). Tester l'accès SSH depuis un autre terminal AVANT de fermer la session active.

### 3.2 Collaboration (10 min)

- [ ] **Inviter Etienne** comme Owner dans Coolify (Settings → Teams → Members → Invite Member)
- [ ] **Ajouter la clé SSH d'Etienne** sur le VPS (si Etienne veut accès terminal) :
  ```bash
  ssh vps-propulseo
  nano ~/.ssh/authorized_keys
  # Coller la clé publique d'Etienne sur une nouvelle ligne
  ```

### 3.3 Connexion GitHub (10 min)

Coolify a besoin d'accéder aux repos GitHub pour déployer.

- [ ] Dans Coolify : Sources → New Source → GitHub App
- [ ] Suivre le flow OAuth pour créer une GitHub App liée à l'org/compte Propul'seo
- [ ] Sélectionner les repos accessibles (commencer par 1 repo de test, puis Précieuse)

### 3.4 Object Storage pour backups + assets Payload (30 min)

Indispensable pour :
- Backups Postgres hors-VPS (sécurité)
- Stockage media Payload CMS (sinon images perdues si conteneur recréé)

**Options** :
- **Backblaze B2 EU (Amsterdam)** : ~6 $/TB/mois, S3-compatible, cohérent avec UE
- **OVH Object Storage** : crédit 200 € Public Cloud à activer si pas déjà utilisé, souverain France
- **Scaleway Object Storage** : alternative française

Recommandation : commencer par **OVH Object Storage** (souveraineté + crédit gratuit dispo) ou **Backblaze B2 EU** (simplicité + prix).

### 3.5 Premier déploiement test (30 min)

Avant Précieuse, faire un déploiement jouet pour valider la chaîne :

- [ ] Créer un repo `propulseo-test` sur GitHub avec un `create-next-app` minimaliste
- [ ] Push sur GitHub
- [ ] Dans Coolify : New Resource → Application → GitHub Source → sélectionner le repo
- [ ] Configurer : Domain = `test.buildyourway.fr`, Port = 3000 (défaut Next.js), Build Pack = Nixpacks (auto)
- [ ] Créer le record DNS A `test.buildyourway.fr → 146.59.228.186` chez OVH
- [ ] Deploy → vérifier que le site répond en HTTPS
- [ ] Ajouter une variable d'env de test (ex: `TEST_VAR=hello`)
- [ ] Redéployer, vérifier que la var est bien injectée
- [ ] Modifier un fichier, push sur main → vérifier qu'un webhook redéploie auto

### 3.6 Déploiement Précieuse Joaillerie (1-2h, après tests OK)

Voir section 4 ci-dessous.

### 3.7 Backups configurés (15 min)

Dans Coolify, sur chaque base Postgres :

- [ ] Onglet Backups
- [ ] Schedule : `0 3 * * *` (3h du matin tous les jours)
- [ ] Retention : 7 jours minimum, 30 jours recommandé
- [ ] Destination S3 : configurer avec credentials Object Storage (étape 3.4)
- [ ] **Tester un backup manuel** et vérifier qu'il atterrit bien dans le bucket
- [ ] **Tester une restauration** sur une base de test (sinon backup non vérifié = pas de backup)

### 3.8 Monitoring (optionnel, 30 min)

- [ ] Activer les notifications Coolify (Slack ou email) sur Settings → Notifications
- [ ] Optionnel : déployer Uptime Kuma comme app dans Coolify pour monitorer les sites de l'extérieur

---

## 4. Déploiement Précieuse Joaillerie (workflow recommandé)

### 4.1 Contexte projet

- **Stack** : Next.js + Payload CMS 3 + Postgres
- **Lancement cible** : mi-juillet 2026
- **Statut PRD** : complet (BMAD), avec quelques décisions ouvertes (bilingue, CMS, newsletter)
- **Décision domaine** : à confirmer avec le client (probablement `precieuse.fr` ou similaire)

### 4.2 Stratégie de déploiement

**Phase 1 — Staging interne** : `precieuse.buildyourway.fr`
- Permet de tester l'archi complète sans toucher au domaine final
- Le client peut prévisualiser dès qu'on lui partage le lien
- Aucun risque SEO car robots.txt en `disallow` sur staging

**Phase 2 — Pré-prod sur sous-domaine client** : `prev.precieuse.fr` (si domaine final acquis)
- Le client valide en conditions réelles
- HTTPS configuré sur leur domaine
- Toujours indexable: false

**Phase 3 — Production** : `precieuse.fr` (le jour J)
- Bascule DNS : on remplace le record A par celui du VPS
- Coolify regénère le SSL automatiquement
- Robots.txt en `allow` + soumission Search Console

### 4.3 Étapes concrètes pour la phase 1 (staging)

#### A. Préparer le repo

- [ ] Vérifier que le code Précieuse fonctionne en local (`npm run build` OK, `npm run start` OK)
- [ ] S'assurer que le `Dockerfile` ou `next.config.js` est compatible Coolify (Nixpacks détecte Next.js automatiquement, mais Payload peut nécessiter ajustements)
- [ ] Push sur GitHub si pas déjà fait (repo privé recommandé)

#### B. Configurer DNS staging

```
precieuse.buildyourway.fr    A      146.59.228.186
precieuse.buildyourway.fr    AAAA   2001:41d0:305:2100::3f8e
```

#### C. Créer le projet dans Coolify

- [ ] Projects → New Project → "Précieuse Joaillerie"
- [ ] Environnement : Staging (séparé de la prod future)
- [ ] New Resource → Application → GitHub Source → repo Précieuse
- [ ] Branch : `main` (ou `staging` si tu utilises Git Flow)
- [ ] Domain : `precieuse.buildyourway.fr`
- [ ] Port : 3000

#### D. Ajouter Postgres

- [ ] New Resource → Database → PostgreSQL 17
- [ ] Récupérer la `Internal Connection URL`
- [ ] La mettre dans `DATABASE_URL` des env vars de l'app

#### E. Variables d'environnement Payload (exemples)

```
DATABASE_URL=<URL interne Postgres>
PAYLOAD_SECRET=<générer un secret aléatoire fort, 64+ caractères>
NEXT_PUBLIC_SERVER_URL=https://precieuse.buildyourway.fr
PAYLOAD_PUBLIC_SERVER_URL=https://precieuse.buildyourway.fr
NODE_ENV=production
# Si S3 pour les media :
S3_BUCKET=precieuse-staging
S3_REGION=...
S3_ACCESS_KEY_ID=...
S3_SECRET_ACCESS_KEY=...
S3_ENDPOINT=...
```

#### F. Premier déploiement

- [ ] Click Deploy
- [ ] Surveiller les logs en temps réel
- [ ] Vérifier que :
  - [ ] Le build passe (`next build` sans erreur)
  - [ ] La migration Payload tourne au démarrage
  - [ ] Le site répond en HTTPS sur `https://precieuse.buildyourway.fr`
  - [ ] L'admin Payload est accessible sur `https://precieuse.buildyourway.fr/admin`

#### G. Création du premier user admin Payload

Selon la config Payload du projet, soit via interface au premier accès, soit via seed script. Documenter dans Notion projet.

#### H. Tests fonctionnels

- [ ] Navigation publique (toutes les pages)
- [ ] Admin Payload : créer/éditer une page, vérifier que ça apparaît côté public
- [ ] Upload d'une image : vérifier qu'elle se stocke bien (S3 si configuré)
- [ ] Performance : Lighthouse, vérifier les Core Web Vitals
- [ ] HTTPS et certificat : `https://www.ssllabs.com/ssltest/`

#### I. Sécurité staging

- [ ] Ajouter `X-Robots-Tag: noindex` ou robots.txt restrictif (sinon Google peut indexer le staging)
- [ ] Optionnel : protéger le staging par Basic Auth (au niveau de Traefik via Coolify labels)
- [ ] Partager le lien avec le client une fois prêt

---

## 5. Conventions et bonnes pratiques

### 5.1 Naming des resources Coolify

- Apps clients : `<nom-projet>` (ex: `precieuse`, `servicimmo`, `lutins-farceurs`)
- Apps internes : `propulseo-<nom>` (ex: `propulseo-crm`, `propulseo-coproflex`)
- Bases : `<nom-projet>-postgres` (ex: `precieuse-postgres`)
- Environnements : `staging` ou `production` (jamais `dev` en cloud)

### 5.2 Branches Git ↔ Environnements

- `main` → staging (déploiement auto via webhook)
- `production` → production (déploiement auto via webhook, branche protégée)
- Feature branches → preview deployments dans Coolify (optionnel, activable plus tard)

### 5.3 Secrets management

- Jamais de secrets dans le repo Git (gitignore strict)
- Tous les secrets dans Coolify → Application → Environment Variables
- Marquer les sensibles comme "Build Time" si requis dans `next build`, sinon "Runtime"
- Backup régulier du `.env` Coolify dans gestionnaire de mots de passe

### 5.4 Backups

- Postgres : daily 3am vers Object Storage, rétention 30j
- Object Storage media : versioning activé côté bucket
- Coolify config : `/data/coolify/` peut être sauvegardé via OVH snapshot (option payante) ou rsync vers serveur de backup

---

## 6. Contacts et accès

- **Lyes Triki** : cofondateur Propul'seo, accès admin Coolify et VPS SSH (clé ed25519)
- **Etienne** : cofondateur tech, à inviter dans Coolify + ajouter clé SSH
- **Compte OVH** : `team@propulseo-site.com`
- **Espace OVH** : https://www.ovh.com/manager/

---

## 7. Liens utiles

- Dashboard Coolify : https://coolify.buildyourway.fr
- Docs Coolify : https://coolify.io/docs
- Manager OVH : https://www.ovh.com/manager/
- DNS buildyourway.fr : https://www.ovh.com/manager/#/web/domain/buildyourway.fr/dns
- VPS dans le manager : https://www.ovh.com/manager/#/dedicated/vps

---

## 8. Notes de session (12 mai 2026)

Setup réalisé en ~2h avec Claude (chat) :
- Commande VPS, sécurisation SSH (clé + fail2ban), MAJ système
- Installation Coolify v4.0.0
- Configuration DNS et HTTPS via Let's Encrypt
- Onboarding Coolify complété ("This Machine", projet par défaut créé)

Décisions prises :
- Stack OVH + Coolify + Docker (cohérent avec V3 stratégique Propul'seo, souveraineté FR)
- VPS-2 pour démarrer (upgradable en 1 clic vers VPS-3 si charge)
- "This Machine" plutôt que "Remote Server" (économie + simplicité au stade actuel)
- Domaine interne `buildyourway.fr` (existant, gratuit, suffisant pour l'infra)
- Désactivation password SSH reportée (changement de Mac prochain de Lyes)

Reste critique : sauvegarder le `.env`, activer 2FA, et faire un déploiement test avant Précieuse.
