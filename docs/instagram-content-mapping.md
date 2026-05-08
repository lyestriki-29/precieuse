# Précieuse — Mapping contenu Instagram → sections du site

> **Direction visuelle de référence :** S1 "L'Art de la Lumière" (off-white #FBF8F5, raspberry, gold whisper, Playfair Display + Inter Light, asymétrie éditoriale, N&B pour portraits/atelier).
>
> **Décision photos couleur :** désaturation CSS `filter: grayscale(100%) contrast(1.05);` par défaut. Photos signalées **(remplacer)** → à substituer par shoot N&B éditorial Annabelle pour la version finale.
>
> **Date :** 2026-05-08

---

## Sommaire

1. [Inventaire des assets](#1-inventaire-des-assets)
2. [Mapping section → assets/copy](#2-mapping-section--assetscopy)
3. [Manques pour la version finale](#3-manques-pour-la-version-finale)
4. [Notes techniques](#4-notes-techniques)

---

## 1. Inventaire des assets

### 1.A — Photos d'Eméline (catégorie A, exploitables)

| # | Chemin | Format | Description | Usage recommandé |
|---|--------|--------|-------------|------------------|
| A1 | `content/instagram-raw/684956725_17896762686449110_6883473514965509355_n.jpg` | 1440×1440 (carré) | Eméline atelier, chemise verte sauge, lampe d'établi en fond, ambiance dorée. Probablement IA (lookalike trop "stockée"). | Section Créatrice / Hero secondaire / **(remplacer)** |
| A2 | `content/instagram-organized/Histoire cliente.../Parfois mes clients... (6).jpg` | 1080×1350 (vertical) | Eméline portrait chemise blanche, jeans, fond beige rosé, sourire neutre. Probablement IA aussi mais bien intégrée. | Section Créatrice (recadrer carré) / **(remplacer)** |
| A3 | `content/instagram-raw/682698559_651124151429655_231561589252033011_n.jpg` | 720×1280 (vertical) | Eméline en chemise blanche, grand atelier équipement professionnel visible derrière. Photo authentique réelle. | Section Savoir-faire / Histoire de marque |
| A4 | `content/instagram-raw/681769408_1403112048520604_6508359649819501898_n.jpg` | 720×1280 (vertical) | Eméline t-shirt noir dans atelier-chambre, photos N&B sur le mur en fond, déco rose. Photo authentique. | Section "Le détail" / Citation |
| A5 | `content/instagram-raw/624161122_17881671663449110_2230721172200627636_n.jpg` | 720×960 (vertical) | Selfie Eméline lunettes + écharpe jaune, atelier en arrière-plan. Authentique mais informel. | Usage interne / réseau social |
| A6 | `content/instagram-raw/642757514_2795202757510995_6419973125932647564_n.jpg` | (vertical) | Selfie Eméline avec machine ultrasons + bouquet fleurs. Authentique mais informel. | Usage interne / réseau social |

### 1.B — Photos de bijoux (catégorie A, exploitables)

| # | Chemin | Description | Compatibilité S1 |
|---|--------|-------------|------------------|
| B1 | `content/instagram-organized/Joséphine.La bague entourage....jpg` (1080×709) | Bague Joséphine sur cailloux/minéraux, fond vert sauge, composition éditoriale | ✅ Excellent (palette neutre) |
| B2 | `content/instagram-organized/Histoire cliente.../Parfois... (4).jpg` | Bague serpentine or blanc + diamants pavés (création Sandrine), fond bleu turquoise studio | ⚠ Recadrer/désaturer fond |
| B3 | `content/instagram-raw/612231708_17879260863449110_7443976414242923447_n.jpg` (1440×1440) | Bague rond solitaire or jaune + halo diamants, fond vert sapin profond | ⚠ Désaturer fond |
| B4 | `content/instagram-raw/625177520_17881812336449110_6411507601257902587_n.jpg` (1440×945) | Bague tournesol or jaune + halo diamants poire, fond pêche/rose pâle | ✅ Excellent (palette compatible) |
| B5 | `content/instagram-raw/619984274_17880937515449110_5650271552155141858_n.jpg` (1440×1920) | 3 bagues sur main, fond beige neutre, lettering "Précieuse c'est quoi exactement?" | ✅ Excellent |
| B6 | `content/instagram-raw/681400114_17895203367449110_804589702455589549_n.jpg` (1024×1358) | Bague rubis poire + diamants pavés, fond beige rosé + texte témoignage Martine | ✅ Bon (recadrer pour isoler bijou) |
| B7 | `content/instagram-raw/611238347_17879259561449110_6226199255851310899_n.jpg` (2268×4032) | Bague en cours de fabrication sur établi en bois, ongles rouges, ambiance atelier | ✅ Excellent (atelier authentique) |
| B8 | `content/instagram-raw/626833259_17882347281449110_4120750264478409446_n.jpg` (1024×1358) | Pendentif opale fond fuchsia | ❌ Trop coloré, exclure ou désaturer fortement |
| B9 | `content/instagram-raw/641790444_17886210675449110_7480361639161186264_n.jpg` (vertical) | Pendentif aigue-marine carré + 2 chaînes diamants, fond turquoise | ❌ Fond non compatible, exclure ou recadrer |
| B10 | `content/instagram-raw/657238091_…n.jpg` | Bague stack diamant + rose poire sur main, ongles longs | Optionnel section Gallery |
| B11 | `content/instagram-raw/675480908_…n.jpg` | Bague rond solitaire diamants sur main | Optionnel section Gallery |

### 1.C — Photos atelier / process (catégorie A)

| # | Chemin | Description | Usage |
|---|--------|-------------|-------|
| C1 | `content/instagram-raw/649841086_…n.jpg` | Eméline mains travaillant outils sur établi, vue plongeante, **POV "Je fabrique encore à la main en 2026"** | Hero secondaire / Section Savoir-faire |
| C2 | `content/instagram-raw/631833339_…n.jpg` | Mains travaillant or et diamants, **POV "T'as la dégaine d'un mineur..."** | Section Savoir-faire |
| C3 | `content/instagram-organized/On me demande... (2).jpg` | Établi en bois avec esquisses bagues + amethyste sur cailloux. Photo authentique. **Asset clé sur-mesure** | Section Sur-mesure |
| C4 | `content/instagram-raw/619549346_2334852466978487_109503112601412296_n.jpg` | **Dessin original aigue-marine + tourmaline rose** par Eméline (sketch peinture aquarelle) | Section Sur-mesure / Hero alternatif |

### 1.D — Vidéos (catégorie A)

| # | Chemin | Durée | Description | Usage recommandé |
|---|--------|-------|-------------|------------------|
| V1 | `content/instagram-organized/Vidéo dessin bijoux.mp4` | ~502 KB | Eméline qui dessine un bijou (croquis main) | **Hero video** (loop muet) |
| V2 | `content/instagram-organized/Histoire cliente.../Parfois... (1).mp4` | ~210 KB | Vidéo "Doutes" (à vérifier contenu exact) | Réseau social uniquement |
| V3 | `content/instagram-organized/Histoire cliente.../Parfois... (1) suite.mp4` | ~950 KB | Vidéo "Doutes" version longue | Réseau social uniquement |

### 1.E — Posts texte uniquement (catégorie B, copy à extraire)

#### Carousel "Précieuse c'est quoi exactement ?" (4 slides)

> **Slide 1 — Photo bagues sur main + lettering "Précieuse c'est quoi exactement?"**
> *(asset visuel B5 utilisable)*

> **Slide 2 — "La collection Précieuse"**
> Des pièces que je dessine et fabrique moi-même,
> en petites séries ou pièces uniques.
>
> Des bijoux intemporels,
> à porter comme une seconde peau.
> *(asset visuel : bague tournesol fond pêche, exploitable B4)*

> **Slide 3 — "Le sur-mesure"**
> Un projet intime,
> pour marquer une histoire, un moment, une création pensée ensemble,
> de la première esquisse au bijou final.
> *(asset visuel : esquisses + amethyste sur établi, exploitable C3)*

> **Slide 4 — Slide de clôture (logo Précieuse + signature)**
> Un savoir faire joaillier, une création qui vous ressemble.
> *(asset visuel : bague tournesol sur pierre verte, exploitable)*

#### Carousel "Histoire cliente Sandrine" (7 slides — section sur-mesure)

> **Slide 1 (orange) :** « Ce modèle ou rien ! »
> Voilà ce qu'elle m'a dit en rentrant dans la boutique.

> **Slide 2 (rose vif) :** Sandrine savait ce qu'elle voulait.
> Depuis longtemps. Elle avait déjà réfléchi les moindres détails…

> **Slide 3 (violet) :** J'ai recyclé son or et ses diamants.
> Pour lui fabriquer LA bague de ses rêves.

> **Slide 4 (rose pâle) :** « Très contente de votre création pour ma bague, très professionnelle, agréable et sympatique… »

> **Slide 5 (photo bague serpentine) :** *(asset visuel B2)*

> **Slide 6 (rouge framboise) :** Tu rêves d'un bijou sur-mesure ?
> Je t'offre un moment privilegié avec moi pour en parler…

> **Slide 7 (photo Eméline) :** Moi c'est Eméline, joaillière artisanale et je fabrique ton bijou de rêve…
> *(Ecris BIJOU en commentaire et on parle de ton projet serieusement !)*
> *(asset visuel A2)*

#### Carousel "Il y a des jours de doutes" (humanité fondatrice)

> **Slide 1 :** Il y a des jours de doutes. Des jours où je ne sais plus ce que je dois faire, ce qui est important. Cette impression de faire tout mal, ou à côté…

> **Slide 2 :** Ce que PERSONNE ne voit derrière un bijou artisanal
> Et que personne n'a pris le temps de t'expliquer…

#### Témoignage Martine Benoit

> « Emeline est tout simplement une artiste ! Les bijoux qu'elle a créé pour moi se sont révélés être magnifiques, le résultat est au-delà de ce que j'avais imaginé… Je suis émue et enthousiasmée ! En un mot : Sublime !
>
> Merci de tout coeur. »
> — **Martine Benoit**

#### Citations isolées (utilisables comme pull-quotes / sections objections)

> **« C'est trop cher ! »**
> Ah bon ? Vraiment ?

> **Tu payes aussi mon expertise.**
> 12 ans à travailler l'or, tous les jours…
> Ça laisse des traces et surtout, du savoir-faire !

> **POV : t'as la dégaine d'un mineur**
> mais tu t'en fou parce que tu touches du diamant et de l'or tous les jours…

> **POV : Je fabrique encore à la main en 2026**

> **Si ton bijou s'est cassé en moins de quelques mois, ce n'est pas de la malchance !**

> **Le détail que personne ne voit mais qui change tout**

> **Elle a fait 509 km pour venir me voir**

#### Fragment Joséphine (extrait depuis nom de fichier)

> Joséphine. La bague entourage. On en hérite, on l'admire depuis l'enfance sur les mains de nos aïeules…

### 1.F — À ignorer (catégorie C)

Posts suggérés du scrape Instagram, sans rapport avec Précieuse :
- `393565553_…n.jpg` (homme à Rome), `442008133_…n.jpg` (homme nuit), `456240990_…n.jpg` (homme terrasse), `624008542_…n.jpg` (selfie homme miroir), `603610404_…n.jpg` (autre femme), `655705854_…n.jpg` (Venise paysage), `657227693_…n.jpg` (peinture Matisse "Le petit intérieur bleu")
- Tous les `.js`, icones, vignettes <200×200
- Doublons basse résolution

---

## 2. Mapping section → assets/copy

### Hero

- **Vidéo principale :** V1 `Vidéo dessin bijoux.mp4` (loop muet, autoplay, fallback poster)
- **Vidéo alternative :** C1 `649841086_…n.jpg` (extrait vidéo "POV : Je fabrique encore à la main en 2026") — texte du POV à supprimer en post-prod
- **Headline (à valider Eméline) :** « Joaillière artisanale » + accroche extraite : « Des bijoux intemporels, à porter comme une seconde peau. »
- **CTA primaire :** Découvrir la collection
- **CTA secondaire :** Créer mon bijou sur-mesure

### Notre Histoire / Pourquoi Précieuse

- **Photo principale :** A3 (Eméline grand atelier équipement pro, chemise blanche) — désaturation CSS
- **Copy :** carousel "Précieuse c'est quoi exactement ?" reformaté en paragraphes :
  > Précieuse, c'est moi. Des pièces que je dessine et fabrique moi-même, en petites séries ou pièces uniques. Des bijoux intemporels, à porter comme une seconde peau. Un savoir faire joaillier, une création qui vous ressemble.
- **Citation flottante :** « POV : Je fabrique encore à la main en 2026 »

### La Créatrice / Eméline

- **Photo portrait :** A2 (chemise blanche fond beige, recadrée carré + désaturation CSS) **(remplacer)**
- **Photo atelier secondaire :** A1 (chemise verte sauge, lampe atelier, carré) **(remplacer — IA suspectée)**
- **Bio (depuis Sandrine slide 7) :**
  > Moi c'est Eméline, joaillière artisanale et je fabrique ton bijou de rêve.
- **Stat FORMATION :** « 12 ans à travailler l'or, tous les jours… »
- **Stat EXPERTISE :** « Ça laisse des traces et surtout, du savoir-faire ! »
- **Citation humaine (optionnelle) :** « Il y a des jours de doutes. Des jours où je ne sais plus ce que je dois faire, ce qui est important. »
- **À remplacer plus tard :** Portrait éditorial N&B carré d'Annabelle + plan atelier vertical 3:4 N&B

### Featured Products (Aurore, Eugénie, Joséphine, Thelma, Louise)

| Modèle | Asset disponible | Copy |
|--------|------------------|------|
| **Joséphine** | B1 (`Joséphine.…jpg`, bague entourage sur cailloux) | « La bague entourage. On en hérite, on l'admire depuis l'enfance sur les mains de nos aïeules… » |
| **Aurore** | ❌ aucun, placeholder à demander à Eméline | À demander |
| **Eugénie** | ❌ aucun, placeholder | À demander |
| **Thelma** | ❌ aucun, placeholder | À demander |
| **Louise** | ❌ aucun, placeholder | À demander |
| **Bonus** | B3 (solitaire fond vert), B4 (tournesol fond pêche), B5 (3 bagues main) | Photos packshot valides |

### Sur-mesure (cherry-picked S3 + histoire Sandrine + dessin)

- **Photo hero section :** B7 (bague en cours fabrication sur établi)
- **Photo dessin / esquisse :** C3 (esquisses + amethyste sur établi) **OU** C4 (dessin aquarelle aigue-marine + tourmaline)
- **Photo bague finale (résultat Sandrine) :** B2 (serpentine or blanc, recadrer fond)
- **Vidéo intégrée :** V1 (dessin bijoux) en mode "process step 1"
- **Storytelling Sandrine intégral** (7 slides reformatées en narrative continue) :
  > « Ce modèle ou rien ! » — voilà ce qu'elle m'a dit en rentrant dans la boutique.
  >
  > Sandrine savait ce qu'elle voulait. Depuis longtemps. Elle avait déjà réfléchi les moindres détails. J'ai recyclé son or et ses diamants pour lui fabriquer LA bague de ses rêves.
  >
  > « Très contente de votre création pour ma bague, très professionnelle, agréable et sympatique… » — Sandrine
- **Citation flottante :** « Ce modèle ou rien ! »
- **Description du processus (slide "Le sur-mesure") :**
  > Un projet intime, pour marquer une histoire, un moment, une création pensée ensemble, de la première esquisse au bijou final.
- **CTA :** « Tu rêves d'un bijou sur-mesure ? Je t'offre un moment privilegié avec moi pour en parler… »

### Témoignages

- **Martine Benoit (avec photo bague rubis B6, recadrée pour isoler bijou) :**
  > « Emeline est tout simplement une artiste ! Les bijoux qu'elle a créé pour moi se sont révélés être magnifiques, le résultat est au-delà de ce que j'avais imaginé… Je suis émue et enthousiasmée ! En un mot : Sublime ! Merci de tout coeur. »
- **Sandrine (extrait) :**
  > « Très contente de votre création pour ma bague, très professionnelle, agréable et sympatique… »
- **À ajouter :** 2-3 témoignages additionnels à demander à Eméline

### Section "Ce qu'on me dit souvent" (objection / pédagogie — optionnelle)

- **Question 1 :** « C'est trop cher ! » / *Ah bon ? Vraiment ?*
- **Réponse :** « Tu payes aussi mon expertise. 12 ans à travailler l'or, tous les jours… Ça laisse des traces et surtout, du savoir-faire ! »
- **Question 2 :** « Si ton bijou s'est cassé en moins de quelques mois, ce n'est pas de la malchance ! »
- **Photo associée :** A4 (Eméline t-shirt noir, atelier rose) ou A6 (selfie machine ultrasons)

### Ambiance / Gallery

- B1 (Joséphine cailloux fond vert) ✅
- B4 (tournesol fond pêche) ✅
- B5 (3 bagues main fond beige) ✅
- B7 (bague en fabrication établi) ✅
- B6 (rubis recadré) ✅
- C2 (mains travaillant or/diamant) ✅
- C4 (dessin original aquarelle) ✅
- B3 (solitaire fond vert) — désaturer fond
- B8/B9 (opale fuchsia, aigue-marine turquoise) — exclure ou désaturer fortement

### CTA final / Contact

- **Photo :** A1 ou A3 (Eméline atelier)
- **Copy :**
  > Tu rêves d'un bijou sur-mesure ?
  > Je t'offre un moment privilegié avec moi pour en parler…
- **CTA :** Prendre rendez-vous

---

## 3. Manques pour la version finale

### À demander à Annabelle (photographe)
- ✗ **Portrait Eméline N&B carré**, lumière naturelle douce, regard caméra ou de côté — pour remplacer A1/A2 (suspicion IA)
- ✗ **Plan atelier vertical 3:4 N&B**, focus mains + outils + cire perdue — pour remplacer C1/C2/C3 partiellement
- ✗ **Plan large atelier N&B** (bonus, pour section Savoir-faire)

### À demander à Eméline (joaillière)
- ✗ **Photos HD packshot des 4 modèles manquants** : Aurore, Eugénie, Thelma, Louise (fond off-white #FBF8F5 ou neutre)
- ✗ **2-3 témoignages clients additionnels** avec photos bagues si disponibles
- ✗ **Copy bio FR définitif** : formation réelle (école, ville), expertise réelle (techniques maîtrisées, années précises) — éviter les placeholders type "Ecole Boulle / cire perdue" si non vérifiés
- ✗ **Confirmation prix range** par modèle (1000–7000 € est-il toujours valide ?)
- ✗ **Logo Précieuse SVG** version officielle (HD vectoriel)

### À résoudre côté équipe
- ✗ Décision finale **CTA framboise plein** (cohérent IG Sandrine slide 6) **vs. underline gold whisper** (strict S1) pour les conversions critiques (sur-mesure, contact)
- ✗ Confirmer si A1/A2 sont **réellement Eméline** ou des images IA générées par les templates v0 (haute suspicion → vérifier avec elle)

---

## 4. Notes techniques

### Convention de nommage (lors de la copie vers `public/images/`)

```
public/
├── images/
│   ├── emeline/
│   │   ├── emeline-portrait-atelier-square.jpg       # A1
│   │   ├── emeline-portrait-blanche-vertical.jpg     # A2
│   │   ├── emeline-grand-atelier-vertical.jpg        # A3
│   │   ├── emeline-atelier-rose-portrait.jpg         # A4
│   │   └── emeline-selfie-...jpg                     # A5, A6
│   ├── bijoux/
│   │   ├── bague-josephine-cailloux-vert.jpg         # B1
│   │   ├── bague-serpentine-sandrine.jpg             # B2
│   │   ├── bague-solitaire-fond-vert.jpg             # B3
│   │   ├── bague-tournesol-fond-peche.jpg            # B4
│   │   ├── bagues-trois-main-fond-beige.jpg          # B5
│   │   ├── bague-rubis-temoignage.jpg                # B6
│   │   ├── bague-en-fabrication-etabli.jpg           # B7
│   │   └── ...
│   ├── atelier/
│   │   ├── atelier-mains-fabrication-2026.jpg        # C1
│   │   ├── atelier-mains-or-diamant.jpg              # C2
│   │   ├── atelier-esquisses-amethyste.jpg           # C3
│   │   └── dessin-aquarelle-aigue-marine-tourmaline.jpg  # C4
│   └── video/
│       ├── hero-dessin-bijoux.mp4                    # V1
│       └── hero-dessin-bijoux.webm                   # à générer
```

### Filtres CSS recommandés

```css
/* Désaturation par défaut (photos couleur → N&B éditorial S1) */
.editorial-photo {
  filter: grayscale(100%) contrast(1.05);
}

/* Recadrage carré (pour A2 vertical → carré) */
.portrait-square {
  aspect-ratio: 1 / 1;
  object-fit: cover;
  object-position: center top;
}

/* Hero video */
.hero-video {
  filter: grayscale(100%) brightness(0.95);
  /* OU sans filtre si on veut l'aspect dessin couleur préservé */
}
```

### Vidéo Hero — optimisation

- Source : `Vidéo dessin bijoux.mp4` (~502 KB)
- Cible : <1 MB total avec WebM + MP4 fallback
- Encodage suggéré :
  - `ffmpeg -i source.mp4 -c:v libvpx-vp9 -crf 35 -b:v 0 -an hero-dessin-bijoux.webm`
  - `ffmpeg -i source.mp4 -c:v libx264 -crf 24 -an -movflags +faststart hero-dessin-bijoux.mp4`
- Poster image à générer : `ffmpeg -ss 0.5 -i source.mp4 -vframes 1 -q:v 2 hero-poster.jpg`
- Attributs HTML : `autoplay muted loop playsinline preload="metadata" poster="..."`

### Recadrages prévus

| Asset | Recadrage |
|-------|-----------|
| A2 (vertical → carré pour Créatrice) | crop center-top, 1080×1080 |
| B6 (texte témoignage à isoler) | crop bas-droit pour ne garder que la bague |
| B2 (fond bleu turquoise) | possiblement détourer + nouveau fond off-white |
| B8/B9 (fonds colorés non compatibles) | exclure ou détourer |

---

**Document généré le 2026-05-08.** À relire avec Eméline + Annabelle avant Phase 0 (init Next.js).
