# INFRA_CHECKLIST.md — Actions immédiates Claude Code

> **Pour Claude Code** : Lis d'abord `CLAUDE.md` pour le contexte complet. Ce fichier est ta checklist actionnable.

## Accès

```bash
# Connexion VPS
ssh vps-propulseo
# (alias configuré dans ~/.ssh/config, clé ed25519)

# Coolify
https://coolify.buildyourway.fr
# Compte : team@propulseo-site.com
```

## Variables clés

```
VPS_IPV4=146.59.228.186
VPS_IPV6=2001:41d0:305:2100::3f8e
VPS_HOSTNAME=vps-9b5d604d.vps.ovh.net
COOLIFY_VERSION=4.0.0
COOLIFY_URL=https://coolify.buildyourway.fr
COOLIFY_ENV_FILE=/data/coolify/source/.env
DOMAIN_INFRA=buildyourway.fr
```

## TODO immédiat (ordre)

### 🔴 Critique (à faire en premier)

1. **Sauvegarder `.env` Coolify**
   ```bash
   ssh vps-propulseo
   sudo cat /data/coolify/source/.env
   # Copier → stocker dans gestionnaire de mots de passe de Lyes
   # Entrée : "Coolify .env - VPS Propul'seo"
   ```

2. **Activer 2FA Coolify**
   - https://coolify.buildyourway.fr → Profile → Two-Factor Authentication
   - Stocker codes de récupération dans gestionnaire de mots de passe

3. **Vérifier UFW + Docker**
   ```bash
   ssh vps-propulseo
   sudo ufw status verbose
   # Si inactif : à configurer avec précaution (Docker bypass possible)
   # Tester depuis 2e terminal AVANT de valider
   ```

### 🟠 Important

4. **Inviter Etienne dans Coolify**
   - Settings → Teams → Members → Invite Member
   - Role : Owner
   - Email d'Etienne à demander à Lyes

5. **Connecter GitHub**
   - Coolify → Sources → New Source → GitHub App
   - Flow OAuth, installer sur org/compte Propul'seo
   - Sélectionner les repos à exposer

6. **Configurer Object Storage**
   - Option 1 : OVH Object Storage (souverain, crédit 200€ Public Cloud à activer)
   - Option 2 : Backblaze B2 EU (Amsterdam, simple)
   - Créer un bucket `propulseo-backups` pour les backups Postgres
   - Récupérer credentials S3-compatibles

### 🟢 Avant Précieuse

7. **Premier déploiement test (jouet)**
   ```bash
   # 1. Créer un repo GitHub propulseo-test (Next.js minimaliste)
   # 2. Ajouter DNS chez OVH :
   #    test.buildyourway.fr  A     146.59.228.186
   #    test.buildyourway.fr  AAAA  2001:41d0:305:2100::3f8e
   # 3. Coolify : New Resource → Application → GitHub Source → repo test
   # 4. Domain : test.buildyourway.fr
   # 5. Deploy, vérifier HTTPS, vérifier webhook redéploiement
   # 6. Ajouter Postgres test, vérifier connexion depuis l'app
   ```

8. **Configurer backups Postgres**
   - Sur la base de test : Backups → Schedule `0 3 * * *`
   - Destination : Object Storage configuré ci-dessus
   - **Tester un backup ET une restauration**

### 🔵 Précieuse (après tests OK)

9. **Déployer Précieuse en staging**
   - DNS : `precieuse.buildyourway.fr` → `146.59.228.186`
   - Coolify : New Project "Précieuse Joaillerie" → Application
   - Postgres dédié pour ce projet
   - Variables d'env Payload (voir CLAUDE.md §4.3.E)
   - Tests fonctionnels complets
   - Robots.txt noindex sur staging
   - Partager lien staging au client une fois validé

## Conventions

- Naming apps : `<nom-projet>` ou `propulseo-<nom>`
- Branches : `main` → staging, `production` → prod
- Secrets : jamais en git, toujours dans Coolify env vars
- Domaine staging : `<projet>.buildyourway.fr`
- Domaine prod : domaine final du client

## Sécurité reportée

- ⚠️ Désactivation password SSH **reportée** (Lyes change de Mac bientôt)
- À faire après transition vers nouveau Mac :
  ```bash
  sudo nano /etc/ssh/sshd_config
  # PasswordAuthentication no
  # PubkeyAuthentication yes
  sudo systemctl restart ssh
  ```

## Points d'attention

- Coolify et apps sur la même machine ("This Machine") → MAJ Coolify = micro-downtime des apps. Faire à 3h du matin.
- VPS-2 limite à 12 Go RAM. Surveiller `htop` ou monitoring Coolify quand on dépasse 5-10 sites.
- Backups OVH incluent seulement 1 jour de rétention → indispensable d'avoir backups Postgres externes (S3).
- Migration future possible vers "Remote Server" sans tout refaire (juste ajouter un VPS).
