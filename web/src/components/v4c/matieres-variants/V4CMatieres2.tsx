import Image from "next/image";
import { MATIERES } from "@/lib/content/matieres";

const garamond = "font-[family-name:var(--font-eb-garamond)]";
const caveat = "font-[family-name:var(--font-caveat)]";
const inter = "font-[family-name:var(--font-inter)]";

export function V4CMatieres2() {
  return (
    <section className="relative bg-[#f4ede0] py-20">
      <div className="absolute top-0 left-0 right-0 border-t-2 border-double border-[#3d2817]/15" />

      {/* En-tête */}
      <div className="px-8 lg:px-16 mb-10 mx-auto max-w-[1440px] flex items-end justify-between">
        <div>
          <h2 className={`${garamond} italic text-[48px] text-[#3d2817] leading-none mb-3`}>
            Nos Matières
          </h2>
          <p className={`${caveat} text-[20px] text-[#1e3a5f]`}>
            — faites défiler pour découvrir
          </p>
        </div>
        <span className={`${caveat} text-[13px] text-[#1e3a5f]/40 hidden md:block`}>
          → scroll
        </span>
      </div>

      {/* Bandeau défilant */}
      <div className="flex overflow-x-auto gap-0 scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        {MATIERES.map((m) => (
          <div
            key={m.slug}
            className="flex-none w-[320px] flex flex-col bg-[#f4ede0] border-r border-[#3d2817]/10 last:border-r-0 snap-start"
          >
            {/* Image 60% hauteur */}
            <div className="relative w-full h-[60vh] min-h-[320px]">
              <Image
                src={m.image}
                alt={m.image_alt}
                fill
                sizes="320px"
                className="object-cover"
              />
              {/* Page number overlay */}
              <span
                className={`${garamond} italic text-[11px] text-[#ede4d5]/70 absolute bottom-3 right-4`}
              >
                {m.page}
              </span>
            </div>

            {/* Texte 40% */}
            <div className="flex flex-col gap-3 p-6 flex-1">
              <h3 className={`${garamond} italic text-[30px] text-[#3d2817] leading-none`}>
                {m.nom}
              </h3>
              <p className={`${caveat} text-[17px] text-[#1e3a5f]`}>
                {m.sous_titre}
              </p>
              <p className={`${inter} text-[13px] font-light text-[#6b4423] leading-relaxed line-clamp-3 mt-1`}>
                {m.description_courte}
              </p>
              <span className={`${caveat} text-[13px] text-[#1e3a5f]/50 mt-auto rotate-[-0.5deg]`}>
                {m.annotation_caveat}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Progress dots */}
      <div className="flex justify-center gap-2 mt-8 px-8">
        {MATIERES.map((m, i) => (
          <div
            key={m.slug}
            className={`h-px bg-[#3d2817] transition-all duration-300 ${i === 0 ? "w-8 opacity-60" : "w-3 opacity-20"}`}
          />
        ))}
      </div>

      <div className="absolute bottom-0 left-0 right-0 border-t-2 border-double border-[#3d2817]/15 mt-8" />
    </section>
  );
}
