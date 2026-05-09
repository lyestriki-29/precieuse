import Image from "next/image";
import { MATIERES } from "@/lib/content/matieres";

const garamond = "font-[family-name:var(--font-eb-garamond)]";
const caveat = "font-[family-name:var(--font-caveat)]";
const inter = "font-[family-name:var(--font-inter)]";

export function V4CMatieres6() {
  return (
    <section className="relative bg-[#f4ede0] py-24 px-8 lg:px-16">
      <div className="absolute top-0 left-0 right-0 border-t-2 border-double border-[#3d2817]/15" />

      <div className="mx-auto max-w-[1440px]">
        {/* En-tête livret */}
        <div className="mb-16 text-center">
          <h2 className={`${garamond} italic text-[56px] text-[#3d2817] leading-none mb-4`}>
            Nos Matières
          </h2>
          <p className={`${caveat} text-[20px] text-[#1e3a5f]`}>
            — livret des matériaux, printemps 2026
          </p>
        </div>

        {/* Fiches 2 colonnes alternées */}
        <div className="flex flex-col gap-0">
          {MATIERES.map((m, i) => {
            const isEven = i % 2 === 0;
            return (
              <div key={m.slug}>
                <div
                  className={`flex flex-col lg:flex-row gap-0 ${isEven ? "" : "lg:flex-row-reverse"}`}
                >
                  {/* Image 50% */}
                  <div className="relative w-full lg:w-1/2 aspect-[4/3]">
                    <Image
                      src={m.image}
                      alt={m.image_alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>

                  {/* Bloc texte 50% */}
                  <div
                    className={`w-full lg:w-1/2 flex flex-col justify-center px-10 py-14 lg:px-16 relative ${isEven ? "lg:pl-16" : "lg:pr-16"}`}
                  >
                    {/* Numéro de page */}
                    <span className={`${garamond} italic text-[11px] text-[#a08552] mb-6 block`}>
                      {m.page}
                    </span>

                    {/* Nom 56px italic */}
                    <h3
                      className={`${garamond} italic text-[#3d2817] leading-none mb-4`}
                      style={{ fontSize: "clamp(36px, 4vw, 56px)" }}
                    >
                      {m.nom}
                    </h3>

                    {/* Sous-titre Caveat */}
                    <p className={`${caveat} text-[24px] text-[#1e3a5f] mb-8`}>
                      {m.sous_titre}
                    </p>

                    {/* Description longue */}
                    <p className={`${inter} text-[15px] font-light text-[#6b4423] leading-relaxed mb-8 max-w-[380px]`}>
                      {m.description_courte}
                    </p>

                    {/* Petits caps techniques */}
                    <div className="flex flex-wrap gap-4 mb-8">
                      {["PROVENANCE", "QUALITÉ", "CERTIFICATION"].map((tag) => (
                        <span
                          key={tag}
                          className={`${inter} text-[10px] font-medium tracking-[0.15em] text-[#3d2817]/40 uppercase`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Annotation Caveat marginale */}
                    <span
                      className={`${caveat} text-[17px] text-[#1e3a5f]/60 rotate-[-0.5deg] block`}
                    >
                      — {m.annotation_caveat}
                    </span>
                  </div>
                </div>

                {/* Séparateur ligne fine sépia */}
                {i < MATIERES.length - 1 && (
                  <div className="w-full border-t border-[#3d2817]/12 my-2" />
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 border-t-2 border-double border-[#3d2817]/15" />
    </section>
  );
}
