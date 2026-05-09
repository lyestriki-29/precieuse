"use client";

import { useState } from "react";
import { LETTRES, FONT } from "./data";

const { garamond, caveat } = FONT;

export function V4CLettresA() {
  const [active, setActive] = useState(0);
  const lettre = LETTRES[active];

  return (
    <section className="relative bg-[var(--site-bg)] py-24 px-8 lg:px-16">
      <div className="absolute top-0 left-0 right-0 border-t-2 border-double border-[var(--site-text)]/15" />

      <div className="mx-auto max-w-[1240px]">
        <header className="flex items-end justify-between mb-16 flex-wrap gap-4">
          <div>
            <h2 className={`${garamond} italic text-[42px] text-[var(--site-text)] mb-2`}>
              Lettres reçues
            </h2>
            <p className={`${caveat} text-[20px] text-[var(--site-caveat)]`}>
              — de celles qui portent
            </p>
          </div>
          <span className={`${caveat} text-[15px] text-[var(--site-caveat)]/70 italic`}>
            chaque lettre est réelle, transcrite avec accord
          </span>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-10 items-start">
          {/* Lettre dominante */}
          <article className="relative">
            <div className="relative bg-[var(--site-surface)] p-10 lg:p-14 shadow-[0_30px_60px_-25px_rgba(0,0,0,0.25)] rotate-[-0.4deg]">
              {/* Filigrane monogramme */}
              <span
                aria-hidden
                className={`${garamond} pointer-events-none absolute right-8 top-8 text-[160px] leading-none text-[var(--site-accent)]/[0.06] select-none`}
              >
                P
              </span>

              {/* En-tête papier */}
              <div className="flex items-baseline justify-between mb-10 pb-4 border-b border-[var(--site-text)]/15">
                <span className={`${garamond} italic text-[12px] tracking-[0.4em] text-[var(--site-accent)]`}>
                  PRÉCIEUSE — JOAILLERIE ARTISANALE
                </span>
                <span className={`${garamond} italic text-[12px] text-[var(--site-text)]/60`}>
                  {lettre.ville} · {lettre.date}
                </span>
              </div>

              {/* Salutation manuscrite */}
              <p className={`${caveat} text-[22px] text-[var(--site-caveat)] mb-6`}>
                Chère Eméline,
              </p>

              {/* Citation */}
              <p className={`${caveat} text-[28px] lg:text-[32px] text-[var(--site-text)] leading-[1.5] mb-10`}>
                {lettre.citation}
              </p>

              {/* Signature */}
              <div className="flex items-end justify-between pt-6 border-t border-[var(--site-text)]/10">
                <p className={`${caveat} text-[20px] text-[var(--site-caveat)]/80 italic`}>
                  Avec gratitude,
                </p>
                <div className="text-right">
                  <span className={`${caveat} text-[34px] text-[var(--site-text)] block leading-none`}>
                    {lettre.auteur}
                  </span>
                  <span className={`${garamond} italic text-[12px] text-[var(--site-accent)] tracking-widest`}>
                    porte « {lettre.piece} »
                  </span>
                </div>
              </div>
            </div>
          </article>

          {/* Pile de lettres miniatures */}
          <aside className="space-y-4">
            <p className={`${garamond} italic text-[12px] tracking-[0.3em] text-[var(--site-accent)] mb-3`}>
              AUTRES LETTRES — {LETTRES.length}
            </p>
            {LETTRES.map((l, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={active === i}
                className={`block w-full text-left bg-[var(--site-surface)] p-5 transition-all duration-300 ${
                  active === i
                    ? "shadow-md scale-[1.02] rotate-[-0.5deg]"
                    : "opacity-60 hover:opacity-100 rotate-[0.3deg]"
                }`}
              >
                <span className={`${caveat} text-[15px] text-[var(--site-text)] line-clamp-2 leading-snug`}>
                  {l.citation.slice(0, 80)}…
                </span>
                <span className={`${garamond} italic text-[12px] text-[var(--site-accent)] block mt-2`}>
                  {l.auteur} — {l.ville}
                </span>
              </button>
            ))}
          </aside>
        </div>

        <div className="mt-16 flex justify-end">
          <span className={`${garamond} italic text-[13px] text-[var(--site-accent)]`}>p. 08</span>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 border-t-2 border-double border-[var(--site-text)]/15" />
    </section>
  );
}
