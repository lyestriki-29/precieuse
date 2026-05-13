# Coolify — Checklist de ce qui reste à faire

> Liste créée le 2026-05-12 après le premier déploiement réussi de Précieuse sur Coolify.
> URL staging live : https://precieuse.propulseo-site.com (migré le 2026-05-13 depuis precieuse.buildyourway.fr)

## Rappel : c'est quoi Coolify ?

PaaS self-hosted = Vercel/Heroku version "chez toi sur ton VPS".
- Interface web pour déployer en clics
- Auto-deploy depuis Git (à configurer)
- SSL automatique (Let's Encrypt)
- Reverse proxy Traefik
- Gestion bases de données, env vars, backups, logs

---

## 🔴 Niveau 1 — Sécurité de base Coolify (urgent, ~15 min)

### [ ] 1.1 Sauvegarder le `.env` de Coolify (pas celui de l'app)

```bash
ssh vps-propulseo
sudo cat /data/coolify/source/.env
```

Stocker dans 1Password sous entrée : **"Coolify .env - VPS Propul'seo"**.

⚠️ Sans ce fichier, si le VPS plante, tu perds toute la config Coolify.

### [ ] 1.2 Activer le 2FA sur ton compte Coolify

- https://coolify.buildyourway.fr → Profile → Two-Factor Authentication
- Scanner avec ton authenticator (1Password, Authy, Google Auth)
- **Stocker les codes de récupération** dans 1Password

### [ ] 1.3 Vérifier UFW (firewall) sur le VPS

```bash
ssh vps-propulseo
sudo ufw status verbose
```

Si `inactive` : à configurer prudemment (Docker bypasse parfois iptables, tester depuis un 2e terminal avant de fermer la session SSH).

---

## 🟠 Niveau 2 — Faciliter la vie sur Précieuse (~30-45 min)

### [ ] 2.1 Auto-deploy GitHub (push → deploy auto)

Aujourd'hui : à chaque modif, clic manuel sur "Deploy".

**Solution** : installer la GitHub App Coolify
1. Coolify → sidebar gauche → **Sources** → "+ New Source" → **GitHub App**
2. Suivre le flow OAuth (autorise Coolify sur ton compte/org GitHub `lyestriki-29`)
3. Sélectionner le repo `precieuse` à exposer
4. Retourner sur l'app `precieuse-web` → Configuration → Git Source
5. Changer la source de "Public Repository" → ta nouvelle "GitHub App"
6. Tester : `git push` → vérifier qu'un build se lance auto dans Coolify

### [ ] 2.2 Healthcheck Précieuse

Permet à Coolify de redémarrer auto si l'app plante.

Coolify → app `precieuse-web` → Configuration → **Healthcheck** :
- Cliquer **"Enable Healthcheck"**
- Type : `HTTP`
- Method : `GET`
- Scheme : `http`
- Host : `localhost`
- Port : `3000`
- Path : `/fr`
- Return Code : `200`
- Interval : `30` (au lieu de 5 = check toutes les 30s, économise CPU)
- Timeout : `10`
- Retries : `3`

Save + Restart de l'app pour que ça prenne effet.

### [ ] 2.3 Renommer environnement "production" en "staging"

Actuellement mal nommé (on est dans l'env "Production" mais c'est du staging).

Coolify → Projects → Précieuse Joaillerie → environnement → Settings → Rename to `staging`.

À faire avant de créer la VRAIE prod sur `precieuse.fr`.

### [ ] 2.4 Protéger le staging contre indexation Google

Aujourd'hui Google peut indexer si quelqu'un partage le lien.

**Deux options** :
- **Option A — noindex robots.txt** : ajouter un `robots.txt` dans `web/public/` avec `User-agent: *` + `Disallow: /`. Reste accessible publiquement, mais Google n'indexe pas.
- **Option B — Basic Auth** : popup mot de passe avant d'accéder. Plus radical.
  - Coolify → app → Configuration → **HTTP Basic Authentication** → Enable
  - Renseigner username + password
  - À partager avec Eméline quand elle voudra preview

---

## 🟢 Niveau 3 — Préparer la mise en prod (semaines à venir)

### [ ] 3.1 Inviter Etienne dans Coolify

- Coolify → Settings → Teams → Members → **Invite Member**
- Role : Owner
- Demander email Etienne à toi-même 😄

### [ ] 3.2 Ajouter la clé SSH d'Etienne sur le VPS (si accès terminal voulu)

```bash
ssh vps-propulseo
nano ~/.ssh/authorized_keys
# Coller la clé publique d'Etienne sur une nouvelle ligne
```

### [ ] 3.3 Configurer Object Storage (S3-compatible)

Pas urgent tant que pas de Postgres ni uploads Sanity → S3.

Quand tu en auras besoin :
- **Option A** : OVH Object Storage (souverain FR, crédit 200€ Public Cloud à activer)
- **Option B** : Backblaze B2 EU (Amsterdam, ~6$/TB/mois, simple)

Créer un bucket `precieuse-backups` pour les backups Postgres futurs.

### [ ] 3.4 Notifications Coolify

- Coolify → Settings → **Notifications**
- Choisir : Slack OU Email
- Permet d'être prévenu si un déploiement plante ou si une app crashe

### [ ] 3.5 Préparer la prod sur `precieuse.fr`

Quand le domaine final sera prêt :
1. Pointer DNS `precieuse.fr` (registrar du domaine) → `146.59.228.186` + IPv6
2. Coolify : créer une nouvelle app `precieuse-prod` (ou ajouter le domaine à l'existante)
3. Pas de noindex
4. Soumettre à Google Search Console

---

## 🔵 Niveau 4 — Plus tard, à mesure que tu grossis

### [ ] 4.1 Surveiller la charge VPS

VPS-2 = 12 Go RAM, 6 vCores. Peut tenir 10-15 sites Next.js statiques.

À surveiller via :
- `htop` en SSH
- Onglet "Metrics" de Coolify

Si CPU > 80% ou RAM > 80% souvent → upgrade VPS-3 (~20€/mois, 24 Go RAM).

### [ ] 4.2 Séparer Coolify du serveur des apps (architecture pro)

Actuellement : tout sur le même VPS ("This Machine") → simple mais MAJ Coolify = micro-downtime des apps.

Plus tard : un VPS pour Coolify, un autre pour les apps.
- Coolify → Servers → Add Server → connecter le 2e VPS

### [ ] 4.3 Auto-update Coolify

Settings → enable auto-update, scheduler à 3h du matin.

---

## Mon conseil d'ordre logique

**Demain (15-20 min)** :
1. Niveau 1.1 (backup .env)
2. Niveau 1.2 (2FA)
3. Niveau 1.3 (UFW)

**Cette semaine (30 min)** :
4. Niveau 2.1 (GitHub App auto-deploy)
5. Niveau 2.2 (Healthcheck)
6. Niveau 2.4 (noindex robots.txt — quick win)

**Quand on attaque Sanity** :
- Ajouter les env vars Sanity côté Coolify (Configuration → Environment Variables)

**Quand `precieuse.fr` est prêt** :
- Niveau 3.5 (mise en prod)
