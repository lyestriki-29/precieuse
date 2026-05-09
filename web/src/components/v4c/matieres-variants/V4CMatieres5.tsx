import Image from "next/image";
import { MATIERES } from "@/lib/content/matieres";

const garamond = "font-[family-name:var(--font-eb-garamond)]";
const caveat = "font-[family-name:var(--font-caveat)]";
const inter = "font-[family-name:var(--font-inter)]";

// Configurations asymétriques pour chaque matière
const LAYOUTS = [
  { colSpan: "lg:col-span-2", rowSpan: "lg:row-span-2", aspect: "aspect-[3/4]" },
  { colSpan: "lg:col-span-1", rowSpan: "lg:row-span-1", aspect: "aspect-square" },
  { colSpan: "lg:col-span-2", rowSpan: "lg:row-span-1", aspect: "aspect-[16/9]" },
  { colSpan: "lg:col-span-1", rowSpan: "lg:row-span-1", aspect: "aspect-[3/4]" },
  { colSpan: "lg:col-span-1", rowSpan: "lg:row-span-1", aspect: "aspect-square" },
] as const;

export function V4CMatieres5() {
  return (
    <section className="relative bg-[#f4ede0] py-24 px-8 lg:px-16">
      <div className="absolute top-0 left-0 right-0 border-t-2 border-double border-[#3d2817]/15" />

      <div className="mx-auto max-w-[1440px]">
        {/* En-tête */}
        <div className="mb-14 flex items-end justify-between">
          <div>
            <h2 className={`${garamond} italic text-[48px] text-[#3d2817] leading-none mb-3`}>
              Nos Matières
            </h2>
            <p className={`${caveat} text-[20px] text-[#1e3a5f]`}>
              — planche d&apos;inspiration
            </p>
          </div>
          <span className={`${caveat} text-[13px] text-[#1e3a5f]/40 hidden lg:block rotate-[1deg]`}>
            hover pour découvrir
          </span>
        </div>

        {/* Mosaïque asymétrique */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-3 auto-rows-fr">
          {MATIERES.map((m, i) => {
            const layout = LAYOUTS[i];
            return (
              <div
                key={m.slug}
                className={`relative group overflow-hidden ${layout.colSpan} ${layout.rowSpan}`}
              >
                {/* Image */}
                <div className={`relative w-full ${layout.aspect} lg:h-full lg:aspect-auto`}>
                  <Image
                    src={m.image}
                    alt={m.image_alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />

                  {/* Overlay texte minimal — toujours visible */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2a1d10]/70 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className={`${garamond} italic text-[28px] text-[#f4ede0] leading-none`}>
                      {m.nom}
                    </h3>
                    <p className={`${caveat} text-[16px] text-[#a08552]`}>
                      {m.sous_titre}
                    </p>
                  </div>

                  {/* Overlay vélin au hover */}
                  <div className="absolute inset-0 bg-[#ede4d5]/92 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center p-7">
                    <span className={`${garamond} italic text-[11px] text-[#a08552] mb-4 block`}>
                      {m.page}
                    </span>
                    <h3 className={`${garamond} italic text-[36px] text-[#3d2817] leading-none mb-3`}>
                      {m.nom}
                    </h3>
                    <p className={`${caveat} text-[17px] text-[#1e3a5f] mb-4`}>
                      {m.sous_titre}
                    </p>
                    <p className={`${inter} text-[13px] font-light text-[#6b4423] leading-relaxed`}>
                      {m.description_courte}
                    </p>
                    <span className={`${caveat} text-[13px] text-[#1e3a5f]/60 mt-5 rotate-[-0.5deg] block`}>
                      — {m.annotation_caveat}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 border-t-2 border-double border-[#3d2817]/15" />
    </section>
  );
}
