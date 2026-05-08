# Précieuse — Product Requirements Document (PRD)

**Version :** 1.0 (draft)
**Date :** Mai 2026
**Auteur :** Propul'seo (PM)
**Méthode :** BMAD

---

## 1. Goals and Background Context

### Goals

- Positionner Précieuse comme une maison de joaillerie artisanale haut de gamme dans l'écosystème digital français, avec une ouverture marché international (FR/EN).
- Générer des **leads qualifiés sur le service sur-mesure** (revenu cœur), via un parcours d'acquisition fluide depuis la collection (produit d'appel) vers la création personnalisée.
- Mettre en scène les **5 modèles de la collection** (Aurore, Eugénie, Joséphine, Thelma, Louise) comme entrée de gamme et vitrine du savoir-faire.
- Construire la confiance via le **storytelling de marque, la transparence sur le savoir-faire et les certifications** (or 19kt, RJC, GIA/HRD, processus de Kimberly).
- Capturer une **base email** pour le nurturing (newsletter mensuelle).
- Centraliser les **canaux de contact** (WhatsApp 7/7, formulaire, email) avec tracking unifié.
- Poser les **fondations SEO** d'une stratégie de contenu (blog éducatif joaillerie).
- Permettre la **souscription au service d'entretien annuel** comme levier de récurrence.
- Atteindre les seuils **Web Vitals** sur mobile (LCP < 2.5s) pour soutenir la stratégie Ads.

### Background Context

Précieuse est une marque de joaillerie artisanale en lancement, fondée par Eméline (joaillière diplômée, 10 ans d'expérience atelier). Fabrication 100 % manuelle au Portugal selon la technique de la fonte à cire perdue, or 19kt, diamants certifiés GIA/HRD, label RJC. Le positionnement se situe à l'intersection rare entre **savoir-faire technique pur**, **création contemporaine** et **proximité humaine** — un espace peu occupé entre les DNVB créatives (3D, moins techniques) et les joailliers de luxe (peu accessibles, peu incarnés).

Le modèle économique repose sur deux piliers :
1. **Collection** (5 modèles, 1 000 € – 7 000 €) : produit d'appel, fidélisation, entrée de gamme.
2. **Sur-mesure** : revenu prioritaire, parcours guidé avec la créatrice.

Le site n'est pas un site e-commerce classique : les paiements se font par virement ou PayPal **après** un échange humain (devis, validation). Le site doit donc être conçu comme un **outil de mise en relation premium** qui qualifie les leads, pas comme un funnel de checkout.

Lancement prévu **mi-juillet 2026** (planning interne). Le site arrive après la livraison des prototypes finis, des photos produits retouchées, du logo/charte (Annabelle) et du packaging.

### Change Log

| Date | Version | Description | Auteur |
|------|---------|-------------|--------|
| 2026-05-07 | 1.0 | Initial draft | Propul'seo (PM) |

---

## 2. Requirements

### Functional Requirements

**FR1.** Le site doit présenter une **homepage** combinant hero émotionnel, accroche de marque, teaser collection, CTA sur-mesure, présentation atelier/créatrice, témoignages clients et capture email.

**FR2.** Le site doit exposer une **page Collection** listant les 5 modèles (Aurore, Eugénie, Joséphine, Thelma, Louise) avec visuel, nom, prix indicatif et accès à la fiche produit.

**FR3.** Chaque modèle doit disposer d'une **fiche produit détaillée** comprenant : galerie photo, description émotionnelle, détails techniques (poids or, types et tailles de diamants), conseils d'entretien, options de personnalisation (or jaune/rose/blanc, qualité diamant, pierres alternatives), section livraison & retours, cross-sell ("se marie avec...") et CTA principal de contact.

**FR4.** Le site doit proposer une **expérience sur-mesure dédiée** : page de présentation du process (étapes, exemples, témoignages) + formulaire multi-étape capturant intention, pierres souhaitées, budget indicatif, délai, coordonnées.

**FR5.** Le site doit héberger une **page "La créatrice"** racontant l'histoire d'Eméline (point de bascule, parcours, vision artisanale).

**FR6.** Le site doit héberger une **page "L'atelier"** mettant en valeur la fabrication au Portugal, la technique de fonte à cire perdue, les gestes artisanaux.

**FR7.** Le site doit héberger une **page "Manifeste"** reprenant le manifeste de marque (déjà rédigé).

**FR8.** Le site doit héberger une **page "Nos engagements"** détaillant les certifications (RJC, GIA/HRD), le processus de Kimberly et la traçabilité des matériaux.

**FR9.** Le site doit héberger une **FAQ** structurée par catégories (sur-mesure, matériaux, livraison, paiement, entretien) avec composant accordéon et recherche/filtrage.

**FR10.** Le site doit héberger un **blog SEO** avec page index (filtrage par catégorie/tag), page article (rendu MDX, partage social, articles liés) et au minimum un article inaugural ("Choisir sa taille de doigt").

**FR11.** Le site doit proposer un **formulaire de contact général** envoyant un email à la créatrice et créant un lead dans la base de données.

**FR12.** Le site doit intégrer **WhatsApp** comme canal prioritaire : lien deep-link dans le header, bouton flottant sur mobile, mention sur fiche produit et sur-mesure.

**FR13.** Le site doit proposer une **inscription newsletter** (email simple) connectée au service d'envoi.

**FR14.** Le site doit héberger une **page Service d'entretien annuel** avec présentation du service et formulaire de souscription dédié.

**FR15.** Le site doit être **bilingue FR/EN** avec switch de langue persistant et URLs localisées (`/fr/...`, `/en/...`). `[À VALIDER : si EN reportable post-launch, ajustement scope Epic]`

**FR16.** Le site doit afficher une **bannière de gestion des cookies** (RGPD) avec consentement granulaire (analytics, marketing, fonctionnel).

**FR17.** Le site doit générer automatiquement un `sitemap.xml`, un `robots.txt`, et exposer les balises **Open Graph + Twitter Cards** par page, ainsi que les **données structurées schema.org** appropriées (Organization, Product, Article, FAQPage, BreadcrumbList).

**FR18.** Le site doit intégrer **Google Analytics 4** + **Meta Pixel** + **Google Ads conversion tag**, pilotés par le consentement RGPD.

**FR19.** Le site doit disposer d'une **interface back-office minimale** permettant à la créatrice de : créer/éditer un article de blog, consulter les leads entrants, consulter les inscrits newsletter, consulter les souscriptions entretien. `[À VALIDER : MDX en repo vs CMS Supabase]`

**FR20.** Les leads (contact, sur-mesure, entretien) doivent être **synchronisés avec le CRM Propul'seo** via API/webhook. `[À VALIDER : périmètre intégration CRM]`

**FR21.** Le site doit disposer des **pages légales** : Mentions légales, CGV, Politique de confidentialité, Politique de cookies.

**FR22.** Le site doit afficher une **page 404 personnalisée** dans l'univers de marque.

### Non-Functional Requirements

**NFR1.** **Performance** : LCP < 2.5s sur 4G mobile, INP < 200ms, CLS < 0.1, score Lighthouse mobile ≥ 90 sur Performance/SEO/Best Practices/Accessibility.

**NFR2.** **Mobile-first** : design conçu mobile en priorité, responsive de 320px à 2560px, breakpoints Tailwind standard.

**NFR3.** **Accessibilité** WCAG 2.1 niveau AA : contrastes, focus visibles, navigation clavier, attributs ARIA, alt text sur images.

**NFR4.** **SEO technique** : URLs propres, hreflang FR/EN, canonical tags, robots.txt, sitemap.xml dynamique, schema.org.

**NFR5.** **Sécurité** : HTTPS, CSP headers, protection CSRF sur formulaires, rate limiting API, validation côté serveur (Zod), pas de secrets en client.

**NFR6.** **Conformité RGPD** : consentement explicite cookies, page politique de confidentialité, droit d'accès/suppression sur les leads stockés.

**NFR7.** **Maintenabilité** : TypeScript strict, ESLint + Prettier, structure de fichiers claire, conventions de nommage documentées, README à jour.

**NFR8.** **Hébergement** : déploiement Vercel (production + preview branches), variables d'environnement gérées via Vercel Env.

**NFR9.** **Optimisation images** : `next/image` avec formats AVIF/WebP, lazy loading, tailles responsives, CDN Vercel.

**NFR10.** **Internationalisation** : `next-intl` ou équivalent, fichiers de traduction versionnés, fallback FR.

**NFR11.** **Disponibilité** : SLA Vercel standard (≥ 99.9 %), monitoring uptime via Vercel ou outil externe.

**NFR12.** **Backup données** : Supabase backup automatique quotidien (configuration par défaut suffisante pour v1).

**NFR13.** **Compatibilité navigateurs** : 2 dernières versions de Chrome, Safari, Firefox, Edge ; iOS Safari 15+ ; Android Chrome 100+.

**NFR14.** **Coût d'infrastructure cible** : < 50 €/mois en phase de lancement (Vercel Hobby/Pro + Supabase Free/Pro + Resend Free + domaine).

---

## 3. User Interface Design Goals

### Overall UX Vision

Une expérience **éditoriale et sensorielle**, à mi-chemin entre le magazine de luxe (Hermès, Chaumet) et l'atelier intime (Sézane, Gemmyo pour la qualité photo et le parcours). Le site doit faire ressentir la matière, la lumière, le geste — pas seulement les exposer. **Beaucoup de blanc, de respiration, de photo**, peu de texte par écran, une typographie qui évoque l'élégance contemporaine sans froideur.

Le visiteur doit, en arrivant sur la homepage, comprendre en moins de 5 secondes : (1) c'est une marque de joaillerie artisanale haut de gamme, (2) c'est fait main au Portugal par une créatrice incarnée, (3) il y a une collection ET du sur-mesure.

### Key Interaction Paradigms

- **Scroll narratif** sur les pages clés (homepage, sur-mesure, atelier) : la page raconte une histoire en se déroulant.
- **Hover discret** : transitions sobres sur les cartes produit (zoom léger, révélation prix), pas d'effets ostentatoires.
- **Galeries produits** : grille principale + lightbox plein écran avec navigation clavier.
- **Formulaires multi-étapes** sur le sur-mesure : progression claire, sauvegarde locale (anti-perte), récap avant envoi.
- **Bouton WhatsApp flottant** sur mobile, omniprésent mais discret (bottom-right, taille raisonnable).
- **Aucune popup intrusive** : la newsletter se signe en footer ou en fin de page, pas en overlay à l'arrivée.

### Core Screens and Views

1. Homepage
2. Page Collection
3. Page Produit (×5)
4. Page Sur-mesure (présentation)
5. Page Sur-mesure (formulaire multi-étape)
6. Page Confirmation post-formulaire
7. Page La créatrice
8. Page L'atelier
9. Page Manifeste
10. Page Nos engagements
11. Page FAQ
12. Page Blog (index)
13. Page Article (détail)
14. Page Service entretien (présentation + formulaire)
15. Page Contact
16. Pages légales (Mentions, CGV, Confidentialité, Cookies)
17. Page 404
18. Back-office : login + dashboard + édition articles + liste leads

### Accessibility

**WCAG 2.1 AA** comme cible. Tests automatisés via axe-core en CI, vérifications manuelles sur les parcours critiques (achat info, sur-mesure, contact).

### Branding

Charte graphique en cours de finalisation par Annabelle (logo, motifs, couleurs). À intégrer dès livraison (semaine du 23-29 juin selon planning). En attendant, **design tokens placeholder** alignés sur le ton de marque (palette neutre, or, accent à définir, typographie serif élégante + sans-serif moderne).

`[À VALIDER : palette finale + typographies + motifs Annabelle dès qu'ils sont disponibles]`

### Target Device and Platforms : Web Responsive

**Mobile-first**, support complet desktop et tablette. Pas d'application native prévue. Compatibilité PWA optionnelle (manifest + favicon multi-tailles uniquement, pas d'install prompt).

---

## 4. Technical Assumptions

### Repository Structure : Monorepo (single Next.js app)

Application unique Next.js 14 (App Router) avec back-office intégré sous route `/admin` protégée par auth Supabase. Pas de séparation front/back en repos distincts pour la v1.

### Service Architecture

**Monolithique côté application** (Next.js full-stack avec Server Components + API Routes / Server Actions). **Services externes managés** : Supabase (DB + Auth + Storage), Resend (email transactionnel), `[à choisir]` (newsletter — Resend Audiences, Brevo ou Mailchimp).

Pas de microservices, pas de queue système pour la v1. Les emails sont envoyés en synchrone (acceptable < 1s pour Resend) avec retry logique simple.

### Testing Requirements

- **Unit tests** : Vitest sur la logique métier (validation formulaires, helpers, transformations).
- **Component tests** : React Testing Library sur les composants UI critiques (formulaire sur-mesure multi-étape, panier image, switch langue).
- **E2E tests** : Playwright sur les parcours critiques : (1) homepage → collection → fiche produit → contact, (2) homepage → sur-mesure → soumission formulaire, (3) inscription newsletter, (4) souscription entretien.
- **Pas de tests manuels formalisés** ; QA via preview deploys Vercel sur chaque PR.
- Couverture cible : 60 % sur la logique métier, pas d'objectif sur l'UI.

### Additional Technical Assumptions and Requests

- **Stack** : Next.js 14 (App Router), React 18, TypeScript strict, Tailwind CSS, Supabase (PostgreSQL + Auth + RLS + Storage), Resend (email), `[Resend Audiences ou Brevo]` (newsletter).
- **Validation** : Zod (schémas partagés client/serveur).
- **Formulaires** : react-hook-form + Zod resolver.
- **i18n** : next-intl avec routing localisé (`/fr/...`, `/en/...`).
- **CMS blog** : MDX dans le repo pour la v1 (rapidité, versioning Git, gratuit). Migration possible vers Supabase + éditeur custom si volume articles > 30. `[À VALIDER]`
- **Auth back-office** : Supabase Auth (email + magic link), un seul compte créatrice + comptes Propul'seo en admin. Middleware Next.js pour protéger `/admin`.
- **Stockage images** : Supabase Storage pour les images uploadées via le back-office (futurs articles, témoignages clients), assets statiques (collection, atelier) commités dans le repo et servis via `next/image`.
- **Analytics** : Google Analytics 4 + Meta Pixel + Google Ads, chargés conditionnellement selon consentement RGPD. Vercel Analytics activé.
- **CRM** : webhook vers le CRM Propul'seo sur création de lead. `[À VALIDER : endpoint, payload, retry]`
- **Domaine** : `precieuse.fr` ou équivalent. `[À VALIDER : domaine acquis ?]`
- **Versioning** : Git, hébergement GitHub, branches `main` (prod) / `develop` (staging) / feature branches. Conventional Commits.
- **CI/CD** : Vercel auto-deploy sur push `main` (prod) et `develop` (staging) ; preview deploy sur PR.
- **Monitoring erreurs** : Sentry (free tier) sur runtime client + serveur.

---

## 5. Epic List

1. **Epic 1 — Foundation, Design System & Brand Shell** : initialiser le projet, mettre en place la stack, le design system, le layout principal, la conformité RGPD, et déployer une homepage placeholder fonctionnelle.
2. **Epic 2 — Storytelling & Brand Pages** : livrer la homepage complète et les pages narratives (créatrice, atelier, manifeste, engagements).
3. **Epic 3 — Collection & Product Detail** : livrer la page collection et les 5 fiches produits avec galerie, détails techniques, options de personnalisation et CTA contact.
4. **Epic 4 — Sur-mesure Experience** : livrer la page sur-mesure et le formulaire multi-étape, avec sauvegarde locale, validation, envoi email et création de lead.
5. **Epic 5 — Content & SEO (Blog + FAQ)** : livrer le blog (index + article MDX), la page FAQ, et publier l'article inaugural.
6. **Epic 6 — Lead Capture & CRM Integration** : livrer le formulaire de contact général, l'inscription newsletter, l'intégration WhatsApp, et la synchronisation des leads avec le CRM.
7. **Epic 7 — Service Entretien Annuel** : livrer la page service et le formulaire de souscription dédié.
8. **Epic 8 — Performance, SEO Final & Launch Readiness** : finaliser performances Web Vitals, SEO technique complet, analytics, monitoring, tests cross-browser et bascule de production.

---

## 6. Epic Details

### Epic 1 — Foundation, Design System & Brand Shell

**Goal :** Établir les fondations techniques et visuelles du projet : Next.js 14 configuré, design system implémenté à partir des éléments de marque disponibles, layout principal (header + footer) en place, conformité RGPD opérationnelle, et déploiement Vercel fonctionnel avec une page placeholder accessible publiquement.

#### Story 1.1 : Initialisation du projet Next.js 14

En tant que **développeur**,
je veux **initialiser le projet Next.js 14 avec TypeScript strict, Tailwind CSS, ESLint, Prettier**,
afin que **la base technique soit propre dès le début et conforme aux standards Propul'seo**.

**Acceptance Criteria :**
1. Projet créé avec `create-next-app` + App Router + TypeScript strict + Tailwind.
2. ESLint et Prettier configurés avec règles Propul'seo standard, pre-commit hook (Husky + lint-staged).
3. Conventions de structure de dossiers documentées dans `README.md` (`app/`, `components/`, `lib/`, `types/`, `messages/`, `content/`).
4. Repo Git initialisé, push vers GitHub (privé), branches `main` et `develop`.
5. Une route `/` affiche un placeholder « Précieuse — bientôt disponible » avec un favicon temporaire.

#### Story 1.2 : Setup Supabase + Auth back-office

En tant que **développeur**,
je veux **configurer un projet Supabase avec Auth, RLS et la structure de tables initiale**,
afin que **les fonctionnalités de capture de leads, newsletter et back-office soient prêtes à recevoir des données**.

**Acceptance Criteria :**
1. Projet Supabase créé, connexion testée depuis le code Next.js (client + server).
2. Tables initiales créées avec migrations SQL versionnées : `leads`, `newsletter_subscribers`, `maintenance_subscriptions`, `articles` (si CMS Supabase choisi), `admin_users`.
3. RLS activée sur toutes les tables avec policies restrictives par défaut.
4. Auth Supabase configurée (email + magic link), un compte admin de test créé.
5. Variables d'environnement documentées dans `.env.example`.

#### Story 1.3 : Design tokens et thème Tailwind

En tant que **développeur**,
je veux **définir les design tokens (couleurs, typographies, espacements, ombres) dans la config Tailwind**,
afin que **l'identité visuelle soit cohérente et facilement ajustable quand la charte Annabelle sera livrée**.

**Acceptance Criteria :**
1. Palette placeholder définie dans `tailwind.config.ts` (neutres, or, accent à valider).
2. Au moins 2 typographies chargées via `next/font` (1 serif éditoriale, 1 sans-serif moderne).
3. Échelle typographique (display, h1-h6, body, small, caption) définie en classes utilitaires.
4. Système d'espacement et breakpoints validés (mobile-first : 0 / 640 / 768 / 1024 / 1280 / 1536).
5. Page `/styleguide` (privée, accessible en dev seulement) affichant tous les tokens.

#### Story 1.4 : Layout principal — Header

En tant que **visiteur**,
je veux **un header clair avec logo, navigation principale, switch langue et accès WhatsApp**,
afin que **je puisse naviguer facilement sur tout le site et contacter la marque en un clic**.

**Acceptance Criteria :**
1. Header sticky (collapse léger au scroll).
2. Logo cliquable pointant vers la home (langue préservée).
3. Navigation principale : Collection / Sur-mesure / La créatrice / L'atelier / Blog / FAQ / Contact (libellés FR/EN).
4. Switch langue FR / EN visible, persistant via cookie.
5. Bouton WhatsApp visible (icône + libellé desktop, icône seule mobile), pré-rempli avec un message générique.
6. Menu mobile (drawer ou plein écran) accessible via burger, navigation clavier OK.

#### Story 1.5 : Layout principal — Footer

En tant que **visiteur**,
je veux **un footer riche avec navigation secondaire, inscription newsletter, mentions légales et réseaux sociaux**,
afin que **je trouve facilement les informations de contact, légales et de fidélisation**.

**Acceptance Criteria :**
1. Footer affiché sur toutes les pages, structuré en colonnes : Marque / Découvrir / Aide / Newsletter.
2. Liens vers toutes les pages secondaires + pages légales.
3. Formulaire d'inscription newsletter inline (email seul + bouton, validation Zod).
4. Liens réseaux sociaux (Instagram, Facebook) avec icônes accessibles.
5. Mention copyright année dynamique.

#### Story 1.6 : Bannière cookies RGPD

En tant que **visiteur**,
je veux **être informé de l'utilisation des cookies et pouvoir choisir mon consentement**,
afin que **mes droits RGPD soient respectés**.

**Acceptance Criteria :**
1. Bannière affichée à la première visite, non bloquante, en bas d'écran.
2. Trois boutons : « Accepter tout », « Refuser », « Personnaliser ».
3. Modale de personnalisation avec catégories : Strictement nécessaire (toujours actif) / Analytics / Marketing.
4. Consentement stocké en cookie 13 mois, rappelé à l'expiration.
5. Aucun script analytics/marketing chargé avant consentement.
6. Lien « Gérer mes cookies » dans le footer pour revenir sur le choix.

#### Story 1.7 : Pages légales placeholders + 404

En tant que **visiteur**,
je veux **accéder aux pages Mentions légales, CGV, Politique de confidentialité, Politique de cookies, et tomber sur une 404 cohérente en cas d'erreur d'URL**,
afin que **le site soit conforme et professionnel dès le lancement**.

**Acceptance Criteria :**
1. 4 pages légales créées avec contenu placeholder structuré (titres, sections), prêtes à recevoir le contenu juridique final.
2. Page 404 personnalisée avec illustration placeholder et CTA retour homepage.
3. Page erreur 500 personnalisée.
4. Toutes ces pages utilisent le layout principal.

#### Story 1.8 : Setup i18n FR/EN

En tant que **développeur**,
je veux **configurer next-intl avec routing localisé et fichiers de traduction**,
afin que **toutes les pages futures soient traduisibles dès leur création**.

**Acceptance Criteria :**
1. `next-intl` installé et configuré, middleware actif pour `/fr` (default) et `/en`.
2. Fichiers `messages/fr.json` et `messages/en.json` initialisés avec les clés du header/footer/légal.
3. Switch langue fonctionnel, l'URL change (`/fr/collection` ↔ `/en/collection`), la sélection persiste.
4. `hreflang` ajouté automatiquement dans le `<head>`.
5. Documentation interne dans le `README.md` pour ajouter une nouvelle clé de traduction.

#### Story 1.9 : Premier déploiement Vercel

En tant que **développeur**,
je veux **déployer le projet sur Vercel avec environnements production et staging**,
afin que **toute l'équipe et la cliente puissent suivre l'avancement en continu via des URLs publiques**.

**Acceptance Criteria :**
1. Projet connecté à Vercel, déploiement automatique sur push `main` (prod) et `develop` (staging).
2. Preview deploys actifs sur chaque PR.
3. Variables d'environnement Supabase / Resend configurées dans Vercel.
4. Domaine de staging actif (`staging.precieuse.xxx` ou auto Vercel), domaine de production réservé en attente.
5. Health check : `/api/health` retourne `200` avec timestamp.

---

### Epic 2 — Storytelling & Brand Pages

**Goal :** Livrer la homepage complète et les pages narratives qui incarnent la marque (créatrice, atelier, manifeste, engagements). Ces pages portent l'émotionnel et doivent convertir en clic vers la collection ou le sur-mesure.

#### Story 2.1 : Hero homepage

En tant que **visiteur**,
je veux **être immédiatement immergé dans l'univers Précieuse via un hero éditorial fort**,
afin de **comprendre la marque en moins de 5 secondes**.

**Acceptance Criteria :**
1. Hero plein écran (mobile : 90vh, desktop : 80vh) avec image héro + accroche "Un savoir-faire joaillier, une création qui vous ressemble" + 2 CTA : « Découvrir la collection » / « Imaginer mon bijou sur-mesure ».
2. Image optimisée (AVIF + WebP fallback), priority loading, LCP < 2.5s.
3. Animation d'entrée subtile (fade-in 600ms, pas de scroll-jacking).
4. Responsive : mise en page adaptée mobile (texte sous image) vs desktop (texte superposé).

#### Story 2.2 : Sections narratives homepage

En tant que **visiteur**,
je veux **découvrir progressivement la marque, la collection, le sur-mesure et la créatrice en scrollant la homepage**,
afin de **construire ma confiance et mon désir avant le contact**.

**Acceptance Criteria :**
1. Section "La promesse" : citation marque + courte intro (3 lignes max).
2. Section "La collection" : 5 cartes produit en grille, avec hover discret, lien vers fiche produit.
3. Section "Le sur-mesure" : visuel + bénéfice principal + CTA vers page sur-mesure.
4. Section "L'atelier au Portugal" : visuel + court paragraphe + lien vers page atelier.
5. Section "Témoignages clients" : carrousel ou grille de 3-5 avis sélectionnés.
6. Section "Newsletter" : bénéfice + champ email + bouton.
7. Toutes les sections respectent la grille de marque, espacements généreux, typographie éditoriale.

#### Story 2.3 : Page "La créatrice"

En tant que **visiteur**,
je veux **découvrir l'histoire d'Eméline, son parcours, sa vision**,
afin **d'être rassuré sur l'expertise et le caractère humain de la marque**.

**Acceptance Criteria :**
1. Hero éditorial avec portrait + accroche personnelle.
2. Sections : Le début de l'histoire / Le geste qui m'anime / Ma vision / Mes valeurs.
3. Photos atelier intégrées (au moins 4 visuels haute qualité).
4. CTA fin de page : "Découvrir la collection" et "Échanger sur mon projet" (vers sur-mesure).

#### Story 2.4 : Page "L'atelier"

En tant que **visiteur**,
je veux **comprendre où et comment sont fabriqués les bijoux**,
afin **d'apprécier la valeur du fait-main et la traçabilité**.

**Acceptance Criteria :**
1. Hero atelier (image + titre).
2. Sections : Notre atelier au Portugal / La fonte à cire perdue (texte pédagogique + visuel processus) / Les gestes (sertissage, polissage, soudure) / Nos matériaux (or 19kt, diamants).
3. Lien vers la page Engagements pour les certifications.
4. CTA fin de page : "Voir nos créations".

#### Story 2.5 : Page "Manifeste"

En tant que **visiteur**,
je veux **lire le manifeste de la marque dans une mise en page éditoriale**,
afin **de ressentir l'âme de Précieuse**.

**Acceptance Criteria :**
1. Mise en page longue, typographie soignée, lectures faciles.
2. Texte du manifeste fourni intégralement (déjà rédigé).
3. Possibilité d'animations légères au scroll (fade-in section par section).
4. CTA fin de page : "Découvrir la créatrice".

#### Story 2.6 : Page "Nos engagements"

En tant que **visiteur**,
je veux **comprendre les certifications et engagements éthiques de la marque**,
afin **d'acheter en toute confiance**.

**Acceptance Criteria :**
1. Sections : Le label RJC / Les certificats GIA et HRD / Le processus de Kimberly / Notre engagement éthique.
2. Logos des organismes affichés (RJC, GIA, HRD).
3. Texte pédagogique, accessible, sans jargon technique non expliqué.
4. CTA fin de page : "Voir la collection".

---

### Epic 3 — Collection & Product Detail

**Goal :** Livrer la page collection et les 5 fiches produits, avec galerie photo, détails techniques, options de personnalisation, conseils d'entretien et CTA contact.

#### Story 3.1 : Page Collection

En tant que **visiteur**,
je veux **voir l'ensemble de la collection en un coup d'œil**,
afin de **choisir le modèle qui me parle**.

**Acceptance Criteria :**
1. Grille responsive (1 colonne mobile, 2 tablette, 3 desktop) listant les 5 modèles.
2. Chaque carte : photo principale (hover = photo alternative), nom, prix indicatif, lien fiche produit.
3. En-tête de page : courte intro à la collection.
4. Section bas de page : CTA "Vous ne trouvez pas votre bonheur ? Imaginez-le sur-mesure".
5. Performance : LCP < 2.5s avec 5 images optimisées.

#### Story 3.2 : Composant Galerie Produit

En tant que **visiteur**,
je veux **explorer un bijou sous tous ses angles**,
afin de **bien me projeter avant le contact**.

**Acceptance Criteria :**
1. Galerie principale avec image active + miniatures (4-6 images par produit).
2. Lightbox plein écran au clic, navigation clavier (← →) et tactile (swipe).
3. Zoom au survol sur desktop.
4. Performance : images en `next/image` avec sizes correctes.

#### Story 3.3 : Fiche produit — Structure et données

En tant que **développeur**,
je veux **un schéma de données produit cohérent et un layout réutilisable**,
afin que **les 5 fiches soient générées à partir d'une même structure**.

**Acceptance Criteria :**
1. Schéma TypeScript `Product` défini : slug, name, description, technicalDetails (poids, diamants), care, customization, delivery, related, gallery.
2. Données des 5 produits dans `content/products/*.ts` (ou `.mdx` si MDX choisi).
3. Page dynamique `/[lang]/collection/[slug]` générant les 5 fiches.
4. Génération statique (`generateStaticParams`) pour les 5 produits.

#### Story 3.4 : Fiche produit — Sections détaillées

En tant que **visiteur**,
je veux **lire la description émotionnelle, les détails techniques, les conseils d'entretien et les options de personnalisation**,
afin de **comprendre la valeur du bijou et ses possibilités**.

**Acceptance Criteria :**
1. Section description émotionnelle (texte fourni dans la fiche produit Notion).
2. Section "Détails techniques" : liste structurée des matériaux et diamants.
3. Section "Conseils d'entretien" (texte commun aux 5 produits).
4. Section "Fabrication & personnalisation" (texte commun aux 5 produits, options de personnalisation listées).
5. Section "Livraison & retours".
6. CTA principal "Recevoir plus d'informations" → ouvre le formulaire de contact pré-rempli avec le nom du modèle.

#### Story 3.5 : Cross-sell entre fiches produits

En tant que **visiteur**,
je veux **voir des suggestions de modèles qui se marient avec celui que je regarde**,
afin de **découvrir d'autres créations cohérentes**.

**Acceptance Criteria :**
1. Section "Elle se marie avec..." en bas de chaque fiche, affichant 1 à 2 produits liés.
2. Données de relation entre produits définies dans le schéma (Eugénie ↔ Louise, Thelma ↔ Louise, etc.).
3. Cartes cliquables avec photo + nom.

#### Story 3.6 : Schema.org Product

En tant que **développeur**,
je veux **exposer les données structurées schema.org Product sur chaque fiche**,
afin que **les fiches soient éligibles aux rich results Google**.

**Acceptance Criteria :**
1. Balise JSON-LD `Product` injectée dans le `<head>` de chaque fiche produit.
2. Champs renseignés : `name`, `description`, `image`, `brand`, `material`, `offers` (avec prix indicatif).
3. Validation via Google Rich Results Test : aucune erreur.

---

### Epic 4 — Sur-mesure Experience

**Goal :** Livrer une expérience sur-mesure premium qui guide le visiteur de la découverte du service à la soumission d'un brief structuré, avec un formulaire multi-étape ergonomique et une notification fluide vers la créatrice et le CRM.

#### Story 4.1 : Page sur-mesure (présentation)

En tant que **visiteur**,
je veux **comprendre le process sur-mesure, voir des exemples et des témoignages**,
afin de **me sentir prêt à soumettre mon projet**.

**Acceptance Criteria :**
1. Hero éditorial + accroche "Imaginons ensemble votre bijou".
2. Section "Le process en 5 étapes" (échange initial → croquis → devis → fabrication → livraison) avec icônes/illustrations.
3. Section "Réalisations sur-mesure" : 3-6 visuels avec courte légende.
4. Section "Témoignages" filtrés sur les avis sur-mesure.
5. Section "Combien ça coûte ?" : explication transparente du processus de devis.
6. CTA principal : "Démarrer mon projet" → vers le formulaire.

#### Story 4.2 : Formulaire sur-mesure — Étape 1 : intention

En tant que **visiteur**,
je veux **décrire mon projet librement**,
afin de **transmettre mon idée même si je n'ai pas tout défini**.

**Acceptance Criteria :**
1. Champ libre "Décrivez votre projet" (textarea, 50 min, 2000 max).
2. Sélection occasion (champ optionnel, valeurs : Fiançailles / Mariage / Anniversaire / Naissance / Cadeau / Pour moi-même / Autre).
3. Sélection type de bijou (bague / pendentif / boucles / bracelet / autre / pas encore décidé).
4. Bouton "Suivant" désactivé tant que la description est < 50 caractères.
5. Sauvegarde locale du brouillon (localStorage) à chaque champ.

#### Story 4.3 : Formulaire sur-mesure — Étape 2 : matériaux

En tant que **visiteur**,
je veux **préciser mes envies de matériaux ou demander des conseils**,
afin que **la créatrice ait un point de départ**.

**Acceptance Criteria :**
1. Sélection multiple métal souhaité (or jaune / rose / blanc / pas d'idée).
2. Sélection multiple pierres souhaitées (diamant / saphir / émeraude / rubis / autres pierres / pas d'idée).
3. Champ libre "Avez-vous déjà des pierres à incorporer ?" (texte court).
4. Upload optionnel d'images d'inspiration (max 3 images, 5 Mo chacune, JPG/PNG/HEIC).

#### Story 4.4 : Formulaire sur-mesure — Étape 3 : budget et délai

En tant que **visiteur**,
je veux **donner une fourchette budgétaire et un délai souhaité**,
afin que **la créatrice puisse adapter sa proposition**.

**Acceptance Criteria :**
1. Sélection fourchette budgétaire (< 2 000 € / 2 000 – 5 000 € / 5 000 – 10 000 € / > 10 000 € / je préfère en discuter).
2. Sélection délai (< 2 mois / 2-3 mois / 3-6 mois / pas urgent).
3. Champ libre "Une date particulière à respecter ?" (texte court).

#### Story 4.5 : Formulaire sur-mesure — Étape 4 : coordonnées

En tant que **visiteur**,
je veux **transmettre mes coordonnées pour être recontacté**,
afin de **finaliser ma demande**.

**Acceptance Criteria :**
1. Champs : prénom, nom, email, téléphone (optionnel), pays.
2. Sélection canal préféré (Email / WhatsApp / Téléphone).
3. Case à cocher RGPD obligatoire.
4. Case à cocher newsletter (pré-cochée non).
5. Récapitulatif complet de la demande affiché sous le formulaire avant validation.
6. Bouton "Envoyer ma demande" actif uniquement si tous les champs requis valides.

#### Story 4.6 : Soumission formulaire — Backend

En tant que **développeur**,
je veux **traiter la soumission de manière fiable, persister les données et notifier les bonnes parties**,
afin que **chaque lead soit capturé et acté rapidement**.

**Acceptance Criteria :**
1. Server Action validant la requête côté serveur (Zod).
2. Création d'un enregistrement `lead` en base avec `type: 'sur-mesure'` et tous les champs.
3. Upload des images d'inspiration vers Supabase Storage, URLs liées au lead.
4. Email envoyé à la créatrice via Resend avec récapitulatif structuré + liens images.
5. Email de confirmation envoyé au visiteur (template "merci, je vous reviens sous 48h").
6. Webhook envoyé au CRM Propul'seo (avec retry 3× en cas d'échec).
7. Redirection vers `/sur-mesure/confirmation` avec message personnalisé.
8. Erreurs loguées dans Sentry, message d'erreur user-friendly affiché si échec.

#### Story 4.7 : Page confirmation sur-mesure

En tant que **visiteur**,
je veux **être rassuré que ma demande a bien été reçue et savoir quand attendre une réponse**,
afin de **patienter sereinement**.

**Acceptance Criteria :**
1. Page `/sur-mesure/confirmation` affichant message de remerciement personnalisé (prénom).
2. Indication du délai de réponse (sous 48h ouvrées).
3. CTA secondaires : "Découvrir notre atelier" / "Lire nos derniers articles".
4. Tracking conversion GA4 + Meta Pixel + Google Ads déclenché.

---

### Epic 5 — Content & SEO (Blog + FAQ)

**Goal :** Livrer une infrastructure de contenu SEO performante (blog + FAQ) pour soutenir l'acquisition organique long terme et l'éducation client.

#### Story 5.1 : Page Blog (index)

En tant que **visiteur**,
je veux **découvrir les articles du blog**,
afin de **m'éduquer sur la joaillerie et m'imprégner de la marque**.

**Acceptance Criteria :**
1. Page `/blog` listant les articles publiés (ordre antéchronologique).
2. Cartes article : image principale, titre, extrait, date, temps de lecture, catégorie/tag.
3. Filtrage par catégorie (Conseils / Savoir-faire / Histoires / Inspirations).
4. Pagination (10 articles par page).
5. SEO : meta title et description optimisés.

#### Story 5.2 : Page Article (détail)

En tant que **visiteur**,
je veux **lire un article dans une mise en page éditoriale agréable**,
afin de **profiter pleinement du contenu**.

**Acceptance Criteria :**
1. Layout long-form : titre, méta (auteur, date, temps de lecture), image hero, corps de l'article.
2. Rendu MDX avec composants custom (callout, image légendée, citation).
3. Table des matières flottante sur desktop si > 3 sections.
4. Boutons partage social (Facebook, Pinterest, WhatsApp, copier le lien).
5. Section "Articles liés" en bas (3 articles).
6. Schema.org Article injecté.

#### Story 5.3 : Article inaugural "Choisir sa taille de doigt"

En tant que **visiteur**,
je veux **lire un guide complet sur le choix de la taille de bague**,
afin de **résoudre une question concrète et découvrir l'expertise de la marque**.

**Acceptance Criteria :**
1. Article MDX rédigé à partir du contenu existant (Notion).
2. Image hero illustrative.
3. Tableau de correspondance taille / diamètre intégré comme composant.
4. CTA fin d'article : "Recevoir un baguier gratuit" (formulaire dédié) + "Démarrer un sur-mesure".
5. Article publié et accessible sur `/blog/choisir-sa-taille-de-doigt`.

#### Story 5.4 : Page FAQ

En tant que **visiteur**,
je veux **trouver rapidement les réponses à mes questions courantes**,
afin de **lever mes derniers doutes avant de contacter**.

**Acceptance Criteria :**
1. Page `/faq` avec contenu organisé en catégories (Sur-mesure / Matériaux & qualité / Livraison & retours / Paiement / Entretien).
2. Composant accordéon par question, une seule ouverte à la fois (option : plusieurs).
3. Barre de recherche en haut filtrant les questions en temps réel.
4. Schema.org FAQPage injecté.
5. Lien WhatsApp + lien contact en bas : "Une question sans réponse ? Contactez-moi".

#### Story 5.5 : Sitemap dynamique + robots.txt

En tant que **moteur de recherche**,
je veux **découvrir toutes les pages indexables du site**,
afin de **les crawler efficacement**.

**Acceptance Criteria :**
1. `/sitemap.xml` généré dynamiquement, incluant toutes les pages publiques (statiques + produits + articles), localisé FR/EN.
2. `/robots.txt` autorisant l'indexation, désautorisant `/admin`, `/api`.
3. Sitemap soumis à Google Search Console (action manuelle documentée).

---

### Epic 6 — Lead Capture & CRM Integration

**Goal :** Centraliser et fiabiliser tous les flux de capture de leads (contact, newsletter, WhatsApp), et synchroniser ces leads avec le CRM Propul'seo pour un suivi commercial efficace.

#### Story 6.1 : Formulaire contact général

En tant que **visiteur**,
je veux **un formulaire simple pour poser une question ou prendre contact**,
afin de **dialoguer sans m'engager dans un brief sur-mesure**.

**Acceptance Criteria :**
1. Page `/contact` avec formulaire : prénom, nom, email, téléphone (optionnel), sujet (déroulant), message.
2. Validation Zod côté client et serveur.
3. Server Action créant un lead en base, envoyant email à la créatrice via Resend, déclenchant webhook CRM.
4. Page de confirmation `/contact/confirmation`.
5. Affichage des canaux directs : WhatsApp, email direct, horaires.

#### Story 6.2 : Inscription newsletter

En tant que **visiteur**,
je veux **m'inscrire à la newsletter en un clic**,
afin de **recevoir l'actualité de la marque sans m'engager**.

**Acceptance Criteria :**
1. Composant inscription newsletter présent dans le footer + en fin de homepage + en pop-in non-bloquant après 30s sur les pages éditoriales (option configurable).
2. Champ email + CGU acceptées + bouton.
3. Server Action ajoutant l'email à la base + à l'audience newsletter (Resend Audiences ou Brevo). `[À VALIDER]`
4. Email de bienvenue envoyé automatiquement.
5. Lien de désabonnement RGPD inclus dans tous les envois (géré par le service).

#### Story 6.3 : Bouton WhatsApp flottant mobile

En tant que **visiteur mobile**,
je veux **un accès permanent à WhatsApp**,
afin de **contacter la marque sans friction**.

**Acceptance Criteria :**
1. Bouton flottant bottom-right sur mobile (taille touch-friendly, accessible).
2. Apparition après 1s, masquable par l'utilisateur.
3. Lien deep-link `https://wa.me/[numéro]?text=[message pré-rempli selon page]`.
4. Tracking GA4 sur le clic.

#### Story 6.4 : Synchronisation CRM

En tant que **commerciale Propul'seo**,
je veux **que tous les leads du site arrivent dans le CRM**,
afin de **suivre leur progression dans un seul outil**.

**Acceptance Criteria :**
1. Webhook configuré vers l'endpoint CRM Propul'seo.
2. Payload normalisé : type de lead (contact / sur-mesure / entretien / newsletter), tous les champs collectés, timestamp, source UTM.
3. Retry automatique 3× en cas d'échec (backoff exponentiel).
4. Logs des appels webhook stockés en base (succès/échec).
5. Page admin permettant de re-déclencher manuellement un webhook échoué. `[À VALIDER : niveau de tooling souhaité]`

#### Story 6.5 : Dashboard back-office leads

En tant que **créatrice**,
je veux **consulter facilement les leads reçus**,
afin de **ne rien manquer même en cas de panne email**.

**Acceptance Criteria :**
1. Page `/admin/leads` (auth requise) listant tous les leads, triés par date.
2. Filtrage par type (contact / sur-mesure / entretien) et statut.
3. Vue détail d'un lead avec toutes les informations + images uploadées.
4. Possibilité de marquer un lead comme "traité" / "en cours" / "fermé".
5. Export CSV de la liste.

---

### Epic 7 — Service Entretien Annuel

**Goal :** Livrer une page service et un parcours de souscription pour le service d'entretien annuel, levier de récurrence pour la marque.

#### Story 7.1 : Page Service entretien annuel

En tant que **visiteur** (ou client existant),
je veux **comprendre le service d'entretien proposé et son intérêt**,
afin de **décider de souscrire**.

**Acceptance Criteria :**
1. Page `/service-entretien` avec hero, présentation du service (rhodiage, polissage, vérification serti), bénéfices, process de prise en charge.
2. Section tarifs (forfait annuel ou à la demande). `[À VALIDER : modèle économique]`
3. Section FAQ dédiée (3-5 questions courantes).
4. CTA principal "Souscrire au service" → ouvre le formulaire.

#### Story 7.2 : Formulaire souscription entretien

En tant que **client**,
je veux **souscrire au service en remplissant un formulaire dédié**,
afin de **bénéficier d'un suivi annuel sans démarche manuelle chaque année**.

**Acceptance Criteria :**
1. Formulaire : coordonnées, modèle de bijou concerné (pré-rempli si on vient d'une fiche produit), date d'achat, photos du bijou (optionnel).
2. Server Action créant un enregistrement `maintenance_subscription` en base.
3. Email de confirmation envoyé.
4. Webhook CRM déclenché.
5. Tracking conversion GA4.

---

### Epic 8 — Performance, SEO Final & Launch Readiness

**Goal :** Atteindre les seuils de performance, SEO et qualité visés, puis basculer en production avec un site monitoré.

#### Story 8.1 : Optimisation performance Web Vitals

En tant que **développeur**,
je veux **atteindre les seuils Web Vitals sur toutes les pages clés**,
afin de **ne pas pénaliser le SEO et l'expérience utilisateur**.

**Acceptance Criteria :**
1. LCP < 2.5s, INP < 200ms, CLS < 0.1 sur les 8 pages principales (mesure 4G mobile via PageSpeed Insights).
2. Score Lighthouse mobile ≥ 90 sur Performance / SEO / Best Practices / Accessibility pour ces 8 pages.
3. Images optimisées (AVIF/WebP, sizes correctes, priority sur LCP).
4. Polices chargées en preload + display-swap.
5. JS minifié, code-splitting effectif.

#### Story 8.2 : SEO technique complet

En tant que **moteur de recherche**,
je veux **trouver toutes les informations nécessaires pour bien indexer le site**,
afin de **bien le positionner**.

**Acceptance Criteria :**
1. Meta title et meta description uniques sur chaque page indexable.
2. Open Graph + Twitter Cards configurés sur chaque page.
3. Schema.org sur : Organization (global), Product (fiches), Article (blog), FAQPage (FAQ), BreadcrumbList (toutes pages profondes).
4. Hreflang FR/EN sur toutes les pages localisées.
5. Canonical URLs définies.
6. Validation via Google Rich Results Test : aucune erreur sur les URLs testées.

#### Story 8.3 : Analytics et tracking

En tant que **équipe marketing**,
je veux **suivre les conversions et le comportement utilisateur**,
afin de **piloter la stratégie d'acquisition**.

**Acceptance Criteria :**
1. GA4 configuré avec événements custom : `lead_submitted` (avec type), `newsletter_signup`, `whatsapp_click`, `product_view`, `customization_started`.
2. Meta Pixel configuré avec mêmes événements (mappés sur les standards Meta).
3. Google Ads conversion tag configuré.
4. Tous les trackings respectent le consentement RGPD.
5. Dashboard GA4 partagé documenté.

#### Story 8.4 : Tests E2E des parcours critiques

En tant que **développeur**,
je veux **valider automatiquement les parcours critiques**,
afin de **détecter toute régression avant le passage en prod**.

**Acceptance Criteria :**
1. Suite Playwright couvrant : (1) parcours collection → fiche produit → contact, (2) parcours sur-mesure complet, (3) inscription newsletter, (4) souscription entretien, (5) navigation FR/EN.
2. Tests exécutés en CI sur chaque PR.
3. Tests passants en preview deploy avant merge.

#### Story 8.5 : Monitoring et alerting

En tant que **développeur**,
je veux **être alerté en cas d'erreur ou de panne en production**,
afin de **réagir rapidement**.

**Acceptance Criteria :**
1. Sentry configuré côté client et serveur.
2. Alertes email Sentry sur erreurs nouvelles ou pics.
3. Vercel Analytics activé.
4. Monitoring uptime configuré (Vercel ou tiers gratuit type Better Stack).
5. Documentation runbook : "Que faire si le site est down ?".

#### Story 8.6 : Bascule de production

En tant que **équipe Précieuse**,
je veux **basculer le domaine et publier le site officiellement**,
afin de **rendre la marque accessible au monde**.

**Acceptance Criteria :**
1. Domaine final pointé vers Vercel (DNS configuré, propagation OK).
2. Certificat SSL actif (auto Vercel).
3. Pages légales finalisées avec contenu juridique réel.
4. Toutes les `[À VALIDER]` levées.
5. Pré-launch checklist exécutée et signée (perf, SEO, légal, tests, contenus).
6. Annonce coordonnée (mail amis/famille + posts Insta + FB selon planning).

---

## 7. Checklist Results Report

`[À COMPLÉTER après revue]`

Sections à valider lors de la revue PRD :
- [ ] Cohérence Goals ↔ Requirements ↔ Epics
- [ ] Toutes les requirements sont testables
- [ ] Toutes les stories sont sized pour 2-4h de dev IA
- [ ] Aucune story ne dépend d'une story future dans le même epic
- [ ] Acceptance criteria mesurables et non ambigus
- [ ] Stack technique cohérente avec les contraintes (Vercel + Supabase + Resend)
- [ ] Conformité RGPD adressée
- [ ] Sécurité adressée (auth, validation, secrets)
- [ ] Performance adressée explicitement
- [ ] Accessibilité adressée explicitement

---

## 8. Next Steps

### UX Expert Prompt

> Tu es UX/UI Designer senior spécialisé dans les marques de luxe et l'univers éditorial. À partir du PRD ci-joint, produis un **UX Front-End Specification** complet : wireframes structurels (mobile + desktop) pour les 8 pages principales, design system détaillé (couleurs, typographies, composants, états, animations), parcours utilisateurs cartographiés (homepage → conversion sur-mesure et homepage → conversion entretien), et recommandations d'illustrations/photos. Hypothèses : esthétique éditoriale haut de gamme, photo-led, palette neutre + or, typographie serif éditoriale + sans-serif moderne. Identifie les composants à intégrer dans Figma pour livrable au développement.

### Architect Prompt

> Tu es Tech Lead full-stack Next.js / Supabase. À partir du PRD ci-joint, produis un **Fullstack Architecture Document** : arborescence du repo, schéma de base de données (tables, colonnes, indexes, RLS policies), modèle d'auth, architecture des Server Actions et API Routes, stratégie de cache et de génération (SSG/ISR/SSR par page), stratégie d'images (Supabase Storage vs assets repo), gestion des secrets et environnements, pipeline CI/CD, plan de tests (unit/component/E2E), monitoring et observabilité. Justifie chaque choix par rapport aux contraintes du PRD (perf, sécurité, RGPD, coût). Lève ou tranche chaque marqueur `[À VALIDER]` avec un argumentaire.

---

## Annexes

### Marqueurs `[À VALIDER]` à arbitrer

1. **i18n FR/EN** dès v1 ou phase 2 ?
2. **CMS blog** : MDX en repo ou admin Supabase ?
3. **Service newsletter** : Resend Audiences, Brevo, Mailchimp ?
4. **CRM Propul'seo** : endpoint webhook, schéma payload, retry policy.
5. **Domaine** : `precieuse.fr` ? Acquis ? Disponible en EN ?
6. **Charte graphique Annabelle** : ETA livraison ?
7. **Service entretien** : modèle économique (forfait annuel / paiement à la prestation) ?
8. **Tooling admin** : niveau de sophistication souhaité v1 (basique vs riche) ?
9. **Photos produits** : ETA livraison shooting ?
10. **Témoignages clients** : autorisation explicite d'affichage ? RGPD.

### Hors-périmètre v1 (à acter)

- E-commerce / paiement en ligne (modèle lead-gen retenu).
- Application mobile native.
- Configurateur 3D produit.
- Espace client (compte, historique de commandes).
- Multi-devises automatique.
- Live chat IA (WhatsApp humain suffit en v1).
- Programme de parrainage.
- Marketplace partenaires (Mamapraia, Madame Stella, etc.) — à explorer post-launch.
