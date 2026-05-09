"use client";

import { useState } from "react";
import Image from "next/image";
import { MATIERES } from "@/lib/content/matieres";

const garamond = "font-[family-name:var(--font-eb-garamond)]";
const caveat = "font-[family-name:var(--font-caveat)]";
const inter = "font-[family-name:var(--font-inter)]";

export function V4CMatieres3() {
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  const toggle = (slug: string) => {
    setOpenSlug((prev) => (prev === slug ? null : slug));
  };

  return (
    <section className="relative bg-[#f4ede0] py-24 px-8 lg:px-16">
      <div className="absolute top-0 left-0 right-0 border-t-2 border-double border-[#3d2817]/15" />

      <div className="mx-auto max-w-[1440px]">
        <div className="mb-14">
          <h2 className={`${garamond} italic text-[48px] text-[#3d2817] leading-none mb-3`}>
            Nos Matières
          </h2>
          <p className={`${caveat} text-[20px] text-[#1e3a5f]`}>
            — cliquez pour déplier
          </p>
        </div>

        <div className="flex flex-col">
          {MATIERES.map((m, i) => {
            const isOpen = openSlug === m.slug;
            return (
              <div key={m.slug} className="border-t border-[#3d2817]/15 last:border-b">
                {/* Barre cliquable */}
                <button
                  onClick={() => toggle(m.slug)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between py-6 text-left group"
                >
                  <div className="flex items-baseline gap-6">
                    <span className={`${garamond} italic text-[11px] text-[#a08552] w-8`}>
                      {m.page}
                    </span>
                    <span className={`${garamond} italic text-[36px] lg:text-[42px] text-[#3d2817] leading-none group-hover:text-[#6b4423] transition-colors duration-300`}>
                      {m.nom}
                    </span>
                    <span className={`${caveat} text-[18px] text-[#1e3a5f] hidden sm:block`}>
                      {m.sous_titre}
                    </span>
                  </div>
                  <span
                    className={`${garamond} italic text-[28px] text-[#a08552]/60 transition-transform duration-400 ${isOpen ? "rotate-45" : "rotate-0"}`}
                    aria-hidden
                  >
                    +
                  </span>
                </button>

                {/* Contenu expandable */}
                <div
                  className={`overflow-hidden transition-all duration-400 ease-out ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
                  style={{ transitionProperty: "max-height, opacity" }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pb-10 pt-2">
                    {/* Image */}
                    <div className="relative w-full aspect-[4/3] overflow-hidden">
                      <Image
                        src={m.image}
                        alt={m.image_alt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>

                    {/* Texte */}
                    <div className="flex flex-col justify-center gap-5">
                      <p className={`${caveat} text-[20px] text-[#1e3a5f] lg:hidden`}>
                        {m.sous_titre}
                      </p>
                      <p className={`${inter} text-[15px] font-light text-[#6b4423] leading-relaxed`}>
                        {m.description_courte}
                      </p>
                      <span className={`${caveat} text-[15px] text-[#1e3a5f]/60 rotate-[-0.5deg] block`}>
                        — {m.annotation_caveat}
                      </span>
                    </div>
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
