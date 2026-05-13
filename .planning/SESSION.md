# Session State — 2026-05-13 17:40 (Migration DNS Coolify : buildyourway.fr → propulseo-site.com)

## Branch
`main`

## Completed This Session
- **DNS Cloudflare** : créé A + AAAA pour `precieuse.propulseo-site.com` → VPS OVH (`146.59.228.186` / `2001:41d0:305:2100::3f8e`), en **DNS only** (pas de proxy Cloudflare pour ne pas casser Let's Encrypt).
- **Coolify FQDN** : remplacé `https://precieuse.buildyourway.fr` par `https://precieuse.propulseo-site.com` via API (champ `domains`, pas `fqdn`). Redéploiement déclenché.
- **Cert Let's Encrypt** : généré automatiquement (issuer R12, valide jusqu'au 11 août 2026).
- **Smoke tests OK** : `/fr`, `/fr/contact`, `/fr/collection/eugenie`, `/fr/sur-mesure`, `/fr/creatrice`, `/fr/carnet`, `/fr/v4c/preview/collection` → tous 200. HTTP → HTTPS 307 OK.
- **DNS OVH** : records `precieuse.buildyourway.fr` (A + AAAA) supprimés. Plus de résolution via 1.1.1.1 ni 8.8.8.8.
- **Docs** : README.md + `.planning/COOLIFY_TODO.md` mis à jour avec le nouveau URL.

## Next Task
**Coolify hardening Niveau 1** (depuis [`.planning/COOLIFY_TODO.md`](COOLIFY_TODO.md)) :
1. Backup `.env` de Coolify dans 1Password
2. Activer 2FA sur compte Coolify
3. Vérifier UFW (firewall) sur le VPS

Puis Niveau 2 (auto-deploy GitHub App, healthcheck, noindex robots.txt).

## Blockers
None.

## Key Context
- **URL staging** : `https://precieuse.propulseo-site.com` (Cloudflare DNS, DNS-only / pas de proxy)
- **DNS architecture** : domaine `propulseo-site.com` acheté sur Namecheap, nameservers délégués à Cloudflare, records gérés via dashboard Cloudflare. **Pas via Namecheap directement.**
- **API Coolify** : pour update FQDN, utiliser PATCH `/api/v1/applications/{uuid}` avec champ **`domains`** (pas `fqdn`, qui retourne `"This field is not allowed"`).
- **App Coolify** : UUID `cpgrb7szvumbvigoy4e1osm4`, environnement encore nommé "production" (à renommer "staging" — Niveau 2.3 todo).
- **Token API Coolify** : toujours dans `.env` racine (gitignoré), à révoquer après usage final.
