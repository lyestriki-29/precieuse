export type SignaturePiece = {
  id: string;
  name: string;
  subtitle: string;
  image: string;
  story: string[];
  matiere: string;
  year: string;
  status: "vendue" | "disponible" | "signature";
};

export type GaleriePiece = {
  id: string;
  name: string;
  image?: string;
  matiere: string;
  year: string;
  status: "vendue" | "disponible" | "signature";
  story?: string;
};

export const FONT = {
  garamond: "font-[family-name:var(--font-eb-garamond)]",
  caveat: "font-[family-name:var(--font-caveat)]",
  inter: "font-[family-name:var(--font-inter)]",
};

export const MANIFESTO = {
  surtitle: "PRÉCIEUSE — CARNET D'ŒUVRES",
  hook: "Tout commence par un trait de crayon.",
  body: [
    "Chaque bijou est d'abord une idée, un croquis, une émotion sur le papier — parfois qui me réveille la nuit, histoire vraie.",
    "Le dessin est la première caresse à la matière. Puis viennent les pierres : choix cornélien. Choisir une pierre, c'est comme tomber amoureuse — quand le charme opère, c'est saisissant.",
  ],
  closing:
    "De l'idée au bijou, chaque étape est une promesse. Parce que chaque création est unique, à l'image de celle ou celui qui va la porter.",
  signature: "Eméline",
  // Image atmosphère pour la strate manifesto
  atmosphere: {
    src: "/images/carnet/mains-aieuls.jpg",
    alt: "Mains de grand-mère portant les bijoux familiaux — l'origine du goût d'Eméline pour les pièces qui se transmettent",
  },
};

export const SIGNATURES: SignaturePiece[] = [
  {
    id: "josephine",
    name: "Joséphine",
    subtitle: "Le joyau familial",
    image: "/images/carnet/josephine-vert.jpg",
    story: [
      "On en hérite, on l'admire depuis l'enfance sur les mains de nos aïeuls. On la rêve. Elle se transmet et on l'arbore comme un joyau familial — un objet réconfortant, chargé de souvenirs.",
      "De loin, ma petite préférence.",
    ],
    matiere: "Or jaune · diamant central · entourage diamants",
    year: "2017",
    status: "signature",
  },
  {
    id: "aurore",
    name: "Aurore",
    subtitle: "Comme la lumière du matin",
    image: "/images/carnet/aurore-fond.jpg",
    story: [
      "Aurore est née un matin où la lumière entrait par la fenêtre de l'atelier, juste comme ça. J'ai pris mon crayon avant le café — le premier trait était déjà là.",
      "Une fleur de diamants, taillée pour capter chaque rayon. Des pièces comme celle-ci, on les rêve avant de les dessiner.",
    ],
    matiere: "Or jaune · diamants poire et brillants",
    year: "2023",
    status: "signature",
  },
  {
    id: "louise",
    name: "Louise",
    subtitle: "L'évidence après quatre essais",
    image: "/images/carnet/louise-triangles.jpg",
    story: [
      "Louise voulait une bague qui durerait. Pas une pièce de saison — un compagnon. On a redessiné trois fois.",
      "La quatrième, elle a souri sans rien dire. Deux triangles de diamants, une ligne d'or, c'était celle-là.",
    ],
    matiere: "Or jaune · deux diamants triangles",
    year: "2024",
    status: "signature",
  },
];

export const GALERIE: GaleriePiece[] = [
  // Pièces avec photo réelle FB
  {
    id: "rhodolite",
    name: "Rhodolite & aigue-marine",
    image: "/images/carnet/rhodolite-2021.jpg",
    matiere: "Or jaune 18kt · rhodolite · aigue-marine · diamants",
    year: "2021",
    status: "vendue",
    story: "Pièce unique. Une rhodolite profonde encadrée d'une aigue-marine et de diamants — chaleur et fraîcheur côte à côte.",
  },
  {
    id: "calcedoine",
    name: "Cocktail de Lisbonne",
    image: "/images/carnet/calcedoine-2021.jpg",
    matiere: "Or jaune 18kt · calcédoine · saphir · saphir rose · diamants",
    year: "mars 2021",
    status: "vendue",
    story:
      "Une pierre laiteuse vert d'eau encadrée de couleurs tendres. Un bijou qui se porte comme on porte un cocktail — léger, vibrant, sans hésiter.",
  },
  {
    id: "santa-maria",
    name: "Santa Maria",
    image: "/images/carnet/santa-maria-bague.jpg",
    matiere: "Or blanc 18kt · aigue-marine Santa Maria · diamants",
    year: "2022",
    status: "vendue",
    story:
      "Cette aigue-marine, je l'ai choisie comme on tombe amoureuse — celle-ci avait cet éclat particulier. Une bague ancienne mais pas trop, juste ce qu'il faut de diamants.",
  },
  // Vignettes texte (pas de photo dispo)
  {
    id: "aigue-lyon",
    name: "Aigue-marine de Lyon",
    matiere: "Or jaune · aigue-marine brésilienne · diamants",
    year: "2022",
    status: "vendue",
    story:
      "Bleu clair, presque transparent — comme un souffle retenu. Pensée pour reposer juste au creux du cou.",
  },
  {
    id: "martine",
    name: "Bague Martine",
    matiere: "Or blanc · rubis sang de pigeon · pavage diamants",
    year: "mai 2019",
    status: "vendue",
    story:
      "Quand le sur-mesure dépasse les frontières. Six mois pour dénicher la pierre — un rubis qu'on admire sans retenue.",
  },
];

export const CTA = {
  hook: "Une idée qui vous trotte dans la tête ?",
  body: "Pour parler d'une pièce, d'une matière, ou d'un projet sur mesure — on prend le temps.",
  primary: { label: "Parler d'un projet", href: "/fr/sur-mesure" },
  secondary: { label: "Découvrir l'atelier", href: "#etabli" },
};
