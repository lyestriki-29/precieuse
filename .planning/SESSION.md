# Session State — 2026-05-10 02:00 (E4 vitrine + 3 sous-variantes images + refonte E4a finale)

## Branch
`main`

## Completed This Session
- **5 hero variants enrichis (3 directions graphiques)** : direction A line-art (E1, E2 — cartouche héraldique, guilloché, croquis bague gravée, marques de poinçon), B Art Nouveau (E3 — vignes, volutes coup-de-fouet, fleur), C Art Déco (E4, E5 — sunburst, schéma brillant, cadres aux coins, frise losanges) ([16e1f76](https://github.com/)).
- **Bibliothèque _ornaments.tsx** : 11 composants SVG mutualisés réutilisables (EngravedRing, HeraldicCrest, GuillochePattern, HallmarkStamps, ArtNouveauVine/Whip/Fleur, ArtDecoFrieze, SunburstFan, DecoCornerFrame, BrilliantCutScheme).
- **Code review hardening (2 passes)** : motion-safe: prefix partout (sinon invisibilité reduced-motion), aria-hidden="true" explicite, SvgProps.stroke required, -scale-100 → rotate-180, max-w-full anti-overflow mobile, backdropFilter inline → Tailwind backdrop-blur-[Npx], priority dupliqué LCP retiré.
- **3 sous-variantes E4 avec images** ([f7c9bc6](https://github.com/)) : E4a Vitrine peuplée (4 vignettes flottantes), E4b Diptyque (Eugénie 50%+carte 50%), E4c Mix (Eugénie+2 accents).
- **Refonte E4a finale** ([fb98cc9](https://github.com/)) : suppression vignettes + carte givrée masquante. Image gemmyo dominante (presque nette, brightness 0.85, objectPosition center 72% pour gemmes sous le mot Précieuse). Ornements Art Déco renforcés (cadres 16x16 lg, sunburst 320px, 2x BrilliantCutScheme flanquants).

## Next Task
**Choix de la variante hero finale par utilisateur** parmi 9 onglets : E (racine) · E1 Sceau · E2 Filigrane · E3 Constellation · E4 Vitrine vide · **E4a Vitrine ouverte** · E4b Diptyque · E4c Mix · E5 Marqueterie. Une fois le choix fait :
1. Lock la variante dans `/fr/v4c` — remplacer `<V4CHero />` par la variante choisie
2. Supprimer les autres hero-variants/ + retirer onglets preview correspondants

## Blockers
- Aucun.

## Key Context
- Système 9 palettes via `V4CSiteTheme` exposé sur `/fr/v4c`, `/fr/carnet`, `/fr/v4c/preview/{collection,hero}`.
- Convention : `motion-safe:animate-[...]` partout (pas de @media wrapper sur les keyframes), `aria-hidden="true"` explicite, SvgProps.stroke required.
- Images dispo : `/images/gemmyo.jpg` + `/images/bijoux-officiels/{aurore,eugenie,josephine,louise,thelma}.{jpg,png}` (eugenie est PNG).
- E4a (refonte) : pas de carte givrée centrale, image gemmyo en arrière-plan visible, halo radial sombre uniquement derrière le texte pour lisibilité, gemmes positionnées à 72% verticale.
- Toutes les variantes sous 200 lignes (max V4CHeroE3=192).
