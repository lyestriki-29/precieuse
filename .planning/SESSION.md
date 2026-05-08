# Session State — 2026-05-08 (suite)

## Branch
no git repo yet (à init en Phase 0)

## Completed This Session
- Re-ajouté MCP Stitch après redémarrage app desktop (HTTP, X-Goog-Api-Key)
- Récupéré les 3 design systems Stitch via `mcp__stitch__get_project`
- **Direction validée par user : S1 "L'Art de la Lumière"** (`499966823277756158`) — éditoriale ultra-minimaliste, Playfair Display + Inter Light, off-white #FBF8F5 + powder pink + raspberry + gold whisper, asymmetric grid, sharp 0, macro-spacing 160px
- Cherry-picked 2 sections depuis S3 Raw Luxe (`14545504994940842571`) → `Template Website/stitch-extracts/sections-cherry-picked.md` :
  - Section "Unique Commission" (sur-mesure) avec photo atelier 3:4 N&B + pull-quote flottant + CTA framboise plein
  - Section "La Créatrice / Eméline" avec portrait carré N&B + grid asymétrique 12 col + specs FORMATION/EXPERTISE
- Documenté toutes les substitutions tokens S3 → S1 dans le fichier extracted
- **Fix path EPERM** : symlink `~/Desktop/Prive → ~/Desktop/Privé` confirmé (existait déjà). Mis à jour `~/.claude/CLAUDE.md` global + ce SESSION.md pour utiliser path `Prive` sans accent
- Désinstallé plugin github MCP (cassé, missing GITHUB_PERSONAL_ACCESS_TOKEN)

## Next Task
1. **⚠️ AU REDÉMARRAGE : ouvrir Claude Code depuis `/Users/trikilyes/Desktop/Prive/Precieuse/` (sans accent)** pour éviter EPERM
2. Valider direction S1 + 2 sections cherry-picked avec Eméline (lui présenter le `sections-cherry-picked.md` + la prévisualisation S1 sur stitch.withgoogle.com)
3. Décision à prendre avec Eméline : **CTA framboise plein** (exception au DS S1) vs **CTA underline gold whisper** (strict S1) pour les conversions critiques (sur-mesure, réserver)
4. Demander à Annabelle les 3 photos editorial-grade :
   - Portrait éditorial Eméline carré, N&B, lumière naturelle douce
   - Eméline atelier vertical 3:4, N&B, focus mains + outils + cire perdue
   - Bonus : plan large atelier N&B
5. Récupérer le copy FR définitif d'Eméline (titres, bio, formation/expertise réelles — pas Ecole Boulle/lost wax si placeholder)
6. **Phase 0** : init Next.js 16 + Tailwind v4 + Sanity + Brevo + next-intl + repo git + déploiement Vercel

## Blockers
- Charte graphique finale (logo SVG, photos produits) pas encore fournie par Annabelle
- Décalage offre commerciale 1500€ ↔ scope PRD complet : non résolu (user absorbe ou renégocie côté Eméline)
- Validation Eméline sur S1 + sections cherry-picked + exception CTA framboise plein

## Key Context
- Marque : Précieuse, joaillerie artisanale Portugal, fondatrice Eméline, or 19kt + diamants GVS, label RJC
- 5 modèles : Aurore, Eugénie, Joséphine, Thelma, Louise (1000-7000€)
- Lancement : mi-juillet 2026
- **Direction visuelle finale : S1 "L'Art de la Lumière"** (Vogue monograph aesthetic, asymétrie éditoriale)
- 2 sections importées depuis S3 (sur-mesure + créatrice) — voir notes substitution tokens dans `sections-cherry-picked.md`
- Stack : Next.js 16 + Tailwind v4 + shadcn/ui + Sanity + Brevo + next-intl + Vercel
- Localisation projet : `/Users/trikilyes/Desktop/Prive/Precieuse/` (symlink, jamais utiliser le path avec accent)
- Sources : `precieuse-prd.md`, `~/Downloads/notion-page.pdf` (43p), `Template Website/v0-{1,2,3}/`, `Template Website/stitch-extracts/`
- ⚠️ Clé Stitch API exposée 2x dans le chat précédent + cette session : à régénérer
- ⚠️ User a demandé qu'on construise sa mémoire de règles de travail — à faire en début de prochaine session ou au fil de l'eau
