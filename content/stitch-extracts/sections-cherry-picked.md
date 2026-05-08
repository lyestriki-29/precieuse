# Sections cherry-picked depuis Stitch S3 (Raw Luxe)

Sections extraites du projet Stitch S3 (`14545504994940842571`) à intégrer dans la direction principale **S1 "L'Art de la Lumière"** (`499966823277756158`).

---

## ⚠️ Adaptation S3 → S1 (à faire à l'implémentation)

Le HTML ci-dessous utilise les tokens du DS **S3 Raw Luxe** (Bodoni Moda + JetBrains Mono + concrete grey). Il faut le ré-écrire dans les tokens **S1 L'Art de la Lumière** :

| Élément S3 | → Remplacer par S1 |
|---|---|
| `font-display-xl` (Bodoni Moda 84px) | `display-hero` ou `headline-lg` (Playfair Display 72-140px) |
| `font-technical-label` (JetBrains Mono mono caps) | `label-caps` (Inter 12px, weight 500, tracking 0.15em, all-caps) |
| `font-body-lg` (Inter 18px) | `body-lg` (Inter 20px Light 300, line-height 1.8) |
| `font-cta-label` | `label-caps` |
| `bg-raspberry` (CTA plein framboise) | À remplacer : S1 prescrit **boutons texte sous-lignés en gold whisper** (pas de fond plein) — voir choix ci-dessous |
| `text-tertiary` (gold S3) | `tertiary` ou `gold-whisper #C9A961` |
| `bg-surface-container-low` | Garder le `warm off-white #FBF8F5` de S1 ou subtle `powder-pink #DAC8C8` pour différencier la section |
| `border border-outline-variant shadow-sm` (carte pull-quote) | S1 rejette les ombres → remplacer par 1px gold-whisper border ou aucune bordure, juste positionnement |
| `aspect-[3/4]` + `grayscale` sur photos | Garder le **noir & blanc grayscale** (très puissant pour S1) ✓ |
| `gap-xl` (80px) | S1 utilise `section-gap: 160px` — augmenter le breathing space |
| `px-lg` (48px) | S1 prescrit `edge-margin: 80px` |

### ⚠️ Décision sur le CTA "Démarrer un projet sur-mesure"
S1 prescrit **buttons text-only with underline (gold-whisper)**, pas de fond plein. Mais sur le screen tu as accroché au **rectangle plein framboise** qui crée un point d'ancrage fort.

→ **Recommandation** : faire une **exception ponctuelle** pour les CTA conversion les plus critiques (ex: "Démarrer un projet sur-mesure", "Réserver"), garder le rectangle framboise plein. Pour tous les autres CTA secondaires (lire la suite, voir la collection, etc.) → garder le label-caps + underline gold whisper de S1. **À valider avec Eméline.**

---

## Section 1 — UNIQUE COMMISSION (Sur-Mesure)

**Layout** : 2 colonnes (md:grid-cols-2), texte gauche / image droite, alignement vertical centré.

**Photo** : portrait Eméline atelier, noir et blanc, format vertical 3:4.

**Pull-quote** : carte flottante en absolute, en bas-droite de l'image, débordant légèrement (-bottom -right).

```html
<!-- SUR-MESURE SECTION -->
<section class="py-xl bg-surface-container-low border-y border-outline-variant/30">
  <div class="max-w-container-max mx-auto px-lg grid grid-cols-1 md:grid-cols-2 gap-xl items-center">

    <!-- Colonne texte -->
    <div class="order-2 md:order-1">
      <span class="font-technical-label uppercase tracking-[0.3em] text-tertiary mb-md block">
        Unique Commission
      </span>
      <h2 class="font-display-xl text-display-lg mb-lg leading-tight">
        Une idée, un projet ? Parlons-en.
      </h2>
      <p class="font-body-lg text-on-surface-variant mb-xl max-w-md">
        Our atelier is open for bespoke creations. Together, we translate your personal history into a permanent object of weight and significance.
      </p>
      <button class="bg-raspberry text-white px-xl py-md font-cta-label uppercase tracking-widest hover:opacity-90 transition-opacity">
        Démarrer un projet sur-mesure
      </button>
    </div>

    <!-- Colonne image + pull-quote flottant -->
    <div class="order-1 md:order-2 relative">
      <div class="aspect-[3/4] overflow-hidden">
        <img
          alt="A portrait of Eméline, the founder, at work in her atelier..."
          class="w-full h-full object-cover grayscale"
          src="[PHOTO ATELIER ÉMELINE NOIR & BLANC]"
        />
      </div>
      <div class="absolute -bottom-base -right-base p-md bg-surface border border-outline-variant shadow-sm max-w-xs">
        <p class="font-technical-label italic">
          "Every custom piece begins with a conversation about light and legacy."
        </p>
      </div>
    </div>
  </div>
</section>
```

**Copy à traduire en FR pour V1 (FR seul)** :
- `Unique Commission` → **`PIÈCE UNIQUE`** ou **`SUR-MESURE`** ou **`COMMANDE UNIQUE`**
- `Our atelier is open for bespoke creations...` → à réécrire en FR (Annabelle/Eméline doit fournir le copy final)
- Pull-quote `"Every custom piece begins..."` → à réécrire en FR

---

## Section 2 — LA CRÉATRICE / ÉMELINE

**Layout** : grid 12 colonnes. Photo carrée à gauche (col-span-5), bio à droite décalée (col-start-7, col-span-6) → asymétrie typique S1 ✓.

**Photo** : portrait Eméline, noir et blanc, carré 1:1.

**Specs en bas** : 2 colonnes "EDUCATION / EXPERTISE" en mono caps, séparateur 1px outline-variant.

```html
<!-- LA CRÉATRICE -->
<section class="py-xl max-w-container-max mx-auto px-lg">
  <div class="grid grid-cols-12 gap-gutter items-center">

    <!-- Photo carrée -->
    <div class="col-span-12 md:col-span-5">
      <div class="aspect-square bg-surface-dim overflow-hidden grayscale">
        <img
          alt="A black-and-white editorial portrait of Eméline..."
          class="w-full h-full object-cover"
          src="[PORTRAIT ÉMELINE NOIR & BLANC]"
        />
      </div>
    </div>

    <!-- Bio décalée -->
    <div class="col-span-12 md:col-span-6 md:col-start-7 flex flex-col gap-lg">
      <div class="flex flex-col gap-xs">
        <h2 class="font-display-xl text-display-lg italic">Eméline</h2>
        <span class="font-technical-label tracking-widest text-on-surface-variant">
          FOUNDER &amp; MASTER GOLDSMITH
        </span>
      </div>

      <div class="flex flex-col gap-md font-body-lg text-on-surface-variant">
        <p>After years in the traditional houses of Paris, Eméline founded Précieuse to return to the raw essence of jewelry: the intersection of fire, metal, and time.</p>
        <p>Her philosophy is one of restraint. Only what is necessary is kept; only what is true is celebrated.</p>
      </div>

      <div class="grid grid-cols-2 gap-md pt-lg border-t border-outline-variant/30">
        <div class="flex flex-col">
          <span class="font-technical-label text-tertiary">EDUCATION</span>
          <span class="font-technical-label mt-xs uppercase">Ecole Boulle, Paris</span>
        </div>
        <div class="flex flex-col">
          <span class="font-technical-label text-tertiary">EXPERTISE</span>
          <span class="font-technical-label mt-xs uppercase">Lost Wax Specialist</span>
        </div>
      </div>
    </div>
  </div>
</section>
```

**Copy à adapter avec les vraies infos d'Eméline** :
- Le titre `Eméline` en italic est très bien dans Playfair Display Italic (S1) ✓
- `FOUNDER & MASTER GOLDSMITH` → **`FONDATRICE & MAÎTRE JOAILLIÈRE`** ou **`FONDATRICE & MAÎTRE ORFÈVRE`** (à valider avec elle)
- Bio FR à fournir par Eméline (vraies années Paris, vraie école, vraie spécialité — pas Ecole Boulle si c'est du placeholder)
- `EDUCATION / EXPERTISE` → **`FORMATION / EXPERTISE`**

---

## Mockup global — comment ces 2 sections s'imbriquent dans S1

Position dans la homepage probable :
1. Hero — "L'Art de la Lumière" (S1 hero)
2. Featured Collections (S1)
3. **→ LA CRÉATRICE / ÉMELINE** (pose la légitimité, l'humain)
4. **→ UNIQUE COMMISSION** (transforme l'émotion en intent commercial)
5. Storytelling / Process atelier
6. Témoignages
7. Newsletter / Footer

Les deux sections fonctionnent ensemble comme un **diptyque "qui / quoi"** :
- Eméline = qui est derrière (légitimité humaine)
- Sur-mesure = ce qu'on peut faire ensemble (l'invitation)

---

## Photos à demander à Annabelle pour ces sections

1. **Portrait éditorial Eméline** carré, noir et blanc, lumière naturelle douce, style documentary (pas studio packshot)
2. **Eméline au travail** dans l'atelier, noir et blanc, format vertical 3:4, focus sur les mains + outils + cire perdue (lost wax)
3. Bonus si possible : un **plan large de l'atelier** noir et blanc pour une troisième section "process"
