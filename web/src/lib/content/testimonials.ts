export type Testimonial = {
  author: string;
  quote: string;
  context?: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    author: "Martine B.",
    quote:
      "Eméline est tout simplement une artiste. Les bijoux qu'elle a créés pour moi se sont révélés magnifiques, le résultat est au-delà de ce que j'avais imaginé. Je suis émue et enthousiasmée.",
    context: "Création sur-mesure",
  },
  {
    author: "Sandrine L.",
    quote:
      "Très contente de votre création pour ma bague. Très professionnelle, agréable et sympathique. Je recommande sans hésiter.",
    context: "Bague serpentine sur-mesure",
  },
  {
    author: "Camille R.",
    quote:
      "On sent dans chaque pièce le temps passé, la précision, l'amour du métier. Je porte ma bague tous les jours depuis deux ans, elle est toujours aussi belle.",
    context: "Modèle Joséphine",
  },
];
