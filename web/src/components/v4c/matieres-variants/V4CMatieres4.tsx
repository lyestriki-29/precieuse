"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { MATIERES } from "@/lib/content/matieres";

const garamond = "font-[family-name:var(--font-eb-garamond)]";
const caveat = "font-[family-name:var(--font-caveat)]";
const inter = "font-[family-name:var(--font-inter)]";

const AUTO_DELAY = 6000;

export function V4CMatieres4() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);
  const prefersReducedMotion = useRef(false);

  useEffect(() => {
    prefersReducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
  }, []);

  const goTo = (idx: number) => {
    setVisible(false);
    setTimeout(() => {
      setCurrent(idx);
      setVisible(true);
    }, 350);
  };

  const prev = () => goTo((current - 1 + MATIERES.length) % MATIERES.length);
  const next = () => goTo((current + 1) % MATIERES.length);

  useEffect(() => {
    if (prefersReducedMotion.current) return;
    const id = setInterval(() => {
      goTo((current + 1) % MATIERES.length);
    }, AUTO_DELAY);
    return () => clearInterval(id);
  }, [current]);

  const m = MATIERES[current];

  return (
    <section className="relative bg-[#2a1d10] overflow-hidden" style={{ minHeight: "60vh" }}>
      {/* Layout 2 colonnes */}
      <div
        className={`flex flex-col lg:flex-row min-h-[60vh] transition-opacity duration-700 ease-in-out ${visible ? "opacity-100" : "opacity-0"}`}
      >
        {/* Image gauche 60% */}
        <div className="relative w-full lg:w-[60%] aspect-[4/3] lg:aspect-auto">
          <Image
            src={m.image}
            alt={m.image_alt}
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#2a1d10]/20" />
        </div>

        {/* Bloc texte droite 40% */}
        <div className="w-full lg:w-[40%] flex flex-col justify-center px-10 py-16 lg:px-16">
          <span className={`${garamond} italic text-[11px] text-[#a08552] mb-8 block`}>
            {m.page}
          </span>

          <h2
            className={`${garamond} italic text-[#f4ede0] leading-none mb-5`}
            style={{ fontSize: "clamp(48px, 5vw, 80px)" }}
          >
            {m.nom}
          </h2>

          <p className={`${caveat} text-[20px] text-[#7ca0cc] mb-8`}>
            {m.sous_titre}
          </p>

          <p className={`${inter} text-[14px] font-light text-[#f4ede0]/60 leading-relaxed mb-10 max-w-[340px]`}>
            {m.description_courte}
          </p>

          <span className={`${caveat} text-[17px] text-[#a08552] rotate-[-0.5deg] block`}>
            — {m.annotation_caveat}
          </span>

          {/* Navigation flèches + dots */}
          <div className="mt-16 flex items-center gap-6">
            <button
              onClick={prev}
              aria-label="Matière précédente"
              className={`${garamond} italic text-[24px] text-[#f4ede0]/40 hover:text-[#f4ede0] transition-colors`}
            >
              ←
            </button>

            <div className="flex gap-2">
              {MATIERES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Aller à ${MATIERES[i].nom}`}
                  className={`h-px transition-all duration-300 ${i === current ? "w-8 bg-[#a08552]" : "w-3 bg-[#f4ede0]/20"}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Matière suivante"
              className={`${garamond} italic text-[24px] text-[#f4ede0]/40 hover:text-[#f4ede0] transition-colors`}
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
