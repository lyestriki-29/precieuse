import Image from "next/image";
import { MATIERES } from "@/lib/content/matieres";

const garamond = "font-[family-name:var(--font-eb-garamond)]";
const caveat = "font-[family-name:var(--font-caveat)]";
const inter = "font-[family-name:var(--font-inter)]";

export function V4CMatieres1() {
  return (
    <section className="relative bg-[#f4ede0] py-24 px-8 lg:px-16">
      <div className="absolute top-0 left-0 right-0 border-t-2 border-double border-[#3d2817]/15" />

      <div className="mx-auto max-w-[1440px]">
        {/* En-tête */}
        <div className="mb-16 flex items-end justify-between">
          <div>
            <h2 className={`${garamond} italic text-[48px] text-[#3d2817] leading-none mb-3`}>
              Nos Matières
            </h2>
            <p className={`${caveat} text-[20px] text-[#1e3a5f]`}>
              — choisies une à une, avec intention
            </p>
          </div>
          <span
            className={`${caveat} text-[14px] text-[#1e3a5f]/50 hidden lg:block rotate-[1deg]`}
          >
            aucun compromis sur la matière
          </span>
        </div>

        {/* Grid 5 colonnes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-0">
          {MATIERES.map((m, i) => (
            <div key={m.slug} className="relative flex flex-col">
              {/* Séparateur vertical gauche (sauf première card) */}
              {i > 0 && (
                <div className="absolute left-0 top-[10%] bottom-[10%] w-px bg-[#3d2817]/15 hidden lg:block" />
              )}

              <div className="p-8 flex flex-col gap-5 h-full">
                {/* Photo carrée */}
                <div className="relative w-full aspect-square overflow-hidden">
                  <Image
                    src={m.image}
                    alt={m.image_alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw"
                    className="object-cover opacity-90 hover:opacity-100 transition-opacity duration-500 hover:scale-[1.02] transition-transform"
                  />
                </div>

                {/* Numéro de page */}
                <span className={`${garamond} italic text-[11px] text-[#a08552]`}>
                  {m.page}
                </span>

                {/* Nom */}
                <h3 className={`${garamond} italic text-[32px] text-[#3d2817] leading-none`}>
                  {m.nom}
                </h3>

                {/* Sous-titre Caveat */}
                <p className={`${caveat} text-[17px] text-[#1e3a5f]`}>
                  {m.sous_titre}
                </p>

                {/* Description 2 lignes */}
                <p
                  className={`${inter} text-[13px] font-light text-[#6b4423] leading-relaxed line-clamp-3`}
                >
                  {m.description_courte}
                </p>

                {/* Annotation marginale */}
                <span
                  className={`${caveat} text-[13px] text-[#1e3a5f]/50 mt-auto rotate-[-0.5deg] block`}
                >
                  {m.annotation_caveat}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 border-t-2 border-double border-[#3d2817]/15" />
    </section>
  );
}
