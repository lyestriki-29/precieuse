import Image from "next/image";

const MATERIALS = [
  {
    title: "L'Or 19kt",
    image: "/images/stitch/materiaux-or-19kt.jpg",
    body: "Une tradition portugaise. Cet alliage haute pureté offre une profondeur de couleur unique et une durabilité supérieure pour des pièces destinées à traverser le temps.",
    alt: "Pépites d'or 19kt brut sur roche volcanique",
  },
  {
    title: "Diamants GVS",
    image: "/images/stitch/materiaux-diamants-gvs.jpg",
    body: "Nous sélectionnons les diamants pour leur caractère, pas seulement pour leurs métriques. Chaque pierre est choisie à la main pour son feu et son intégrité dans la monture.",
    alt: "Diamants taille brillant éparpillés sur papier texturé",
  },
  {
    title: "Traçabilité",
    image: "/images/stitch/materiaux-tracabilite.jpg",
    body: "Le processus de Kimberley est notre minimum. Notre engagement va plus loin : connaître la mine exacte et les mains qui ont manipulé les pierres brutes.",
    alt: "Carnet de traçabilité, compas et minéral brut",
  },
];

export function HomeMaterials() {
  return (
    <section className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 sm:py-28 lg:px-16">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-10 lg:gap-16">
        {MATERIALS.map((m) => (
          <article key={m.title} className="flex flex-col gap-5">
            <div className="relative h-[300px] overflow-hidden bg-surface-dim">
              <Image
                src={m.image}
                alt={m.alt}
                fill
                sizes="(min-width: 768px) 30vw, 100vw"
                className="object-cover"
              />
            </div>
            <h3 className="font-display-lg text-2xl italic sm:text-3xl">
              {m.title}
            </h3>
            <p className="font-body-lg text-on-surface-variant">
              {m.body}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
