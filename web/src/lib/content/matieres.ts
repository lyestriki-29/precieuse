export type Matiere = {
  slug: string;
  nom: string;
  sous_titre: string;
  description_courte: string;
  image: string;
  image_alt: string;
  annotation_caveat: string;
  page: string;
};

export const MATIERES: Matiere[] = [
  {
    slug: "or-19kt",
    nom: "Or 19kt",
    sous_titre: "fondu à Lisboa",
    description_courte:
      "Or 19 carats jaune ou rose, fondu et travaillé dans notre atelier portugais. Sa teneur supérieure aux 18kt français lui donne un éclat plus chaud, plus lumineux.",
    image: "/images/matieres/or-19kt.jpg",
    image_alt: "Pépites d'or brut, photographie macro",
    annotation_caveat: "fondu à Lisboa",
    page: "p. 05",
  },
  {
    slug: "diamants-gvs",
    nom: "Diamants GVS",
    sous_titre: "certifiés à la loupe",
    description_courte:
      "Diamants taille brillant, navette et baguette, qualité GVS (clarté très légères inclusions, couleur G-H). Chaque pierre est sertie à la main, libérant la lumière au maximum.",
    image: "/images/matieres/diamants-gvs.jpg",
    image_alt: "Pavage diamants gros plan, monture noire",
    annotation_caveat: "GVS certifiés",
    page: "p. 06",
  },
  {
    slug: "saphirs",
    nom: "Saphirs",
    sous_titre: "bleu de roi · padparadscha",
    description_courte:
      "Saphirs bleu de roi, jaune miel ou padparadscha rose-orangé, sourcés en Birmanie ou au Sri Lanka. Sur commande pour les pièces sur-mesure.",
    image: "/images/matieres/saphirs.jpg",
    image_alt: "Set saphir étincelant fond bleu profond",
    annotation_caveat: "sur commande",
    page: "p. 07",
  },
  {
    slug: "emeraudes",
    nom: "Émeraudes",
    sous_titre: "Colombie · Zambie",
    description_courte:
      "Émeraudes colombiennes (vert intense, jardin caractéristique) ou zambiennes (vert plus froid, plus pures). Une matière vivante, jamais identique.",
    image: "/images/matieres/emeraudes.jpg",
    image_alt: "Bague émeraude main éditoriale",
    annotation_caveat: "vivantes, jamais identiques",
    page: "p. 08",
  },
  {
    slug: "rubis",
    nom: "Rubis",
    sous_titre: "rouge sang de pigeon",
    description_courte:
      "Rubis Mozambique ou Birmanie, du rouge framboise au mythique sang de pigeon. Pierre de cœur, signature des pièces les plus émotionnelles.",
    image: "/images/matieres/rubis.jpg",
    image_alt: "Collier or pendentif rubis central",
    annotation_caveat: "pierre de cœur",
    page: "p. 09",
  },
];
