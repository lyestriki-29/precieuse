# Précieuse

Site e-commerce de joaillerie artisanale (Eméline, marque "Précieuse").

Lancement prévu : mi-juillet 2026.

## Structure du repo

```
.
├── docs/                       # Documentation projet
│   ├── precieuse-prd.md            # Product Requirements Document
│   ├── notion-page.pdf             # Notion source
│   └── instagram-content-mapping.md  # Mapping section site → assets/copy IG
├── content/                    # Assets sources (copy + images + vidéos)
│   ├── instagram-organized/        # Posts IG organisés par thème
│   ├── instagram-raw/              # Scrape brut compte IG (pour archive)
│   └── stitch-extracts/            # Sections cherry-picked depuis Stitch
├── archive/                    # Anciennes versions / templates non utilisés
│   ├── html-templates/             # Templates HTML achetés (zips)
│   └── v0-templates/               # Itérations v0.dev (v0-1, v0-2, v0-3)
└── web/                        # Application Next.js (à venir, Phase 0)
```

## Stack technique (à venir)

- Next.js 16 (App Router) + TypeScript strict
- Tailwind CSS v4
- shadcn/ui
- Sanity (CMS)
- Brevo (emails transactionnels + newsletter)
- next-intl (FR / EN / PT)
- Vercel (hébergement, plus tard)

## Staging

- URL : https://precieuse.propulseo-site.com
- Hébergement : VPS OVH + Coolify (Propul'seo infra)
- Auto-deploy : push sur `main` → Coolify

## Direction visuelle

S1 "L'Art de la Lumière" — esthétique éditoriale Vogue monograph, off-white #FBF8F5, raspberry, gold whisper, Playfair Display + Inter Light.

## Phases du projet

- **Phase 0** — init technique (Next.js + Tailwind + Sanity + i18n) — *en cours*
- **Phase 1** — sections statiques (Hero, Créatrice, Sur-mesure, Featured Products)
- **Phase 2** — CMS Sanity (catalogue produits, témoignages dynamiques)
- **Phase 3** — checkout + Brevo (commande, emails, newsletter)
- **Phase 4** — i18n EN/PT
- **Phase 5** — déploiement Vercel + monitoring
