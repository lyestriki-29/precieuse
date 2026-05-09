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
};

export const SIGNATURES: SignaturePiece[] = [
  {
    id: "josephine",
    name: "Joséphine",
    subtitle: "Le joyau familial",
    image: "/images/bijoux-officiels/josephine.jpg",
    story: [
      "On en hérite, on l'admire depuis l'enfance sur les mains de nos aïeuls. On la rêve. Elle se transmet et on l'arbore comme un joyau familial — un objet réconfortant, chargé de souvenirs.",
      "De loin, ma petite préférence.",
    ],
    matiere: "Or jaune · diamants",
    year: "2017",
    status: "signature",
  },
  {
    id: "aurore",
    name: "Aurore",
    subtitle: "Comme la lumière du matin",
    image: "/images/bijoux-officiels/aurore.jpg",
    story: [
      "Aurore est née un matin où la lumière entrait par la fenêtre de l'atelier, juste comme ça. J'ai pris mon crayon avant le café — le premier trait était déjà là.",
      "Des pièces comme celle-ci, on les rêve avant de les dessiner.",
    ],
    matiere: "Or jaune · diamants",
    year: "2023",
    status: "signature",
  },
  {
    id: "louise",
    name: "Louise",
    subtitle: "L'évidence après quatre essais",
    image: "/images/bijoux-officiels/louise.jpg",
    story: [
      "Louise voulait une bague qui durerait. Pas une pièce de saison — un compagnon. On a redessiné trois fois.",
      "La quatrième, elle a souri sans rien dire. C'était celle-là.",
    ],
    matiere: "Or blanc · diamants",
    year: "2024",
    status: "signature",
  },
];

export const GALERIE: GaleriePiece[] = [
  {
    id: "thelma",
    name: "Thelma",
    image: "/images/bijoux-officiels/thelma.jpg",
    matiere: "Or jaune · saphir",
    year: "2024",
    status: "disponible",
  },
  {
    id: "eugenie",
    name: "Eugénie",
    image: "/images/bijoux-officiels/eugenie.png",
    matiere: "Or jaune · diamant central",
    year: "2024",
    status: "signature",
  },
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
    matiere: "Or blanc · rubis sang de pigeon · diamants",
    year: "mai 2019",
    status: "vendue",
    story:
      "Quand le sur-mesure dépasse les frontières. Six mois pour dénicher la pierre — un rubis qu'on admire sans retenue.",
  },
  {
    id: "calcedoine",
    name: "Cocktail pastel",
    matiere: "Calcédoine · aigue-marine · saphir rose · diamants · or jaune 18kt",
    year: "mars 2021",
    status: "vendue",
    story: "Une pierre laiteuse encadrée de couleurs tendres. Pièce unique, comme elles le sont toutes.",
  },
  {
    id: "santa-maria",
    name: "Santa Maria",
    matiere: "Or blanc 18kt · aigue-marine Santa Maria · diamants",
    year: "2022",
    status: "vendue",
    story:
      "Une bague ancienne mais pas trop. Quelques diamants pour relever le tout, et de l'or blanc pour faire ressortir ce bleu si spécial.",
  },
];

export const CTA = {
  hook: "Une idée qui vous trotte dans la tête ?",
  body: "Pour parler d'une pièce, d'une matière, ou d'un projet sur mesure — on prend le temps.",
  primary: { label: "Parler d'un projet", href: "/fr/sur-mesure" },
  secondary: { label: "Découvrir l'atelier", href: "#etabli" },
};
