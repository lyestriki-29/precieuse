import Image from "next/image";

const garamond = "font-[family-name:var(--font-eb-garamond)]";
const caveat = "font-[family-name:var(--font-caveat)]";

type Matiere = {
  name: string;
  annotation: string;
  image: string;
  imageAlt: string;
};

const MATIERES: Matiere[] = [
  {
    name: "Or 19kt",
    annotation: "fondu à Lisboa",
    image: "/images/stitch/materiaux-or-19kt.jpg",
    imageAlt: "Or 19 carats utilisé dans l'atelier Précieuse",
  },
  {
    name: "Diamants GVS",
    annotation: "certifiés GVS",
    image: "/images/stitch/materiaux-diamants-gvs.jpg",
    imageAlt: "Diamants GVS certifiés pour les créations Précieuse",
  },
  {
    name: "Traçabilité",
    annotation: "origine vérifiée",
    image: "/images/stitch/materiaux-tracabilite.jpg",
    imageAlt: "Traçabilité des matières premières Précieuse",
  },
  {
    name: "Saphirs",
    annotation: "sélectionnés à la loupe",
    image: "/images/stitch-v2/macro-1-setting-detail.jpg",
    imageAlt: "Détail de sertissage d'un saphir dans l'atelier",
  },
];

export function V4CMatieres() {
  return (
    <section className="relative bg-[#f4ede0] py-24 px-8 lg:px-16">
      <div className="absolute top-0 left-0 right-0 border-t-2 border-double border-[#3d2817]/15" />

      <div className="mx-auto max-w-[1440px]">
        <div className="mb-16 flex items-end justify-between">
          <div>
            <h2 className={`${garamond} italic text-[42px] text-[#3d2817] mb-2`}>
              Nos Matières
            </h2>
            <p className={`${caveat} text-[20px] text-[#1e3a5f]`}>
              — choisies une à une, avec intention
            </p>
          </div>
          {/* Annotation marginale */}
          <span className={`${caveat} text-[15px] text-[#1e3a5f] opacity-60 hidden lg:block rotate-[1deg]`}>
            aucun compromis sur la matière
          </span>
        </div>

        {/* Bandeau horizontal 4 cellules */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#3d2817]/10">
          {MATIERES.map((m, i) => (
            <div
              key={m.name}
              className={`bg-[#f4ede0] p-6 flex flex-col gap-4 ${i % 2 === 0 ? "" : ""}`}
            >
              {/* Mini photo */}
              <div className="relative w-full aspect-square overflow-hidden">
                <Image
                  src={m.image}
                  alt={m.imageAlt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover opacity-85 hover:opacity-100 transition-opacity duration-500"
                />
                {/* Cercle sketch */}
                <svg
                  aria-hidden
                  className="pointer-events-none absolute inset-0 w-full h-full"
                  viewBox="0 0 200 200" fill="none"
                >
                  <circle cx="100" cy="100" r="85"
                    stroke="#3d2817" strokeWidth="0.8" strokeDasharray="4 8" strokeOpacity="0.3" />
                </svg>
              </div>

              <h3 className={`${garamond} italic text-[22px] text-[#3d2817]`}>
                {m.name}
              </h3>
              <p className={`${caveat} text-[16px] text-[#1e3a5f]`}>
                {m.annotation}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-end">
          <span className={`${garamond} italic text-[13px] text-[#a08552]`}>p. 05</span>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 border-t-2 border-double border-[#3d2817]/15" />
    </section>
  );
}
