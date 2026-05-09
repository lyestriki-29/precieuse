"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ETABLI_STEPS } from "./data";

const garamond = "font-[family-name:var(--font-eb-garamond)]";
const caveat = "font-[family-name:var(--font-caveat)]";

const SIGNATURES = [
  { day: "lundi", time: "11h32", glyph: "♦" },
  { day: "mardi", time: "14h08", glyph: "※" },
  { day: "mercredi", time: "16h45", glyph: "✦" },
  { day: "jeudi", time: "18h20", glyph: "❖" },
];

const ROMAN_PATHS: Record<string, string> = {
  I: "M50 20 L50 180",
  II: "M30 20 L30 180 M70 20 L70 180",
  III: "M20 20 L20 180 M50 20 L50 180 M80 20 L80 180",
  IV: "M20 20 L20 180 M40 20 L80 180",
};

function BrushUnderline() {
  return (
    <svg aria-hidden viewBox="0 0 320 14" className="absolute -bottom-2 left-0 w-full h-3 text-[var(--site-caveat)]/70">
      <path
        d="M2 8 C 60 2, 120 12, 200 6 S 280 10, 318 5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function RomanTrace({ roman, drawn }: { roman: string; drawn: boolean }) {
  return (
    <svg aria-hidden viewBox="0 0 100 200" className="w-full h-full text-[var(--site-accent)]/80">
      <path
        d={ROMAN_PATHS[roman] || ROMAN_PATHS.I}
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        pathLength={1}
        strokeDasharray="1"
        strokeDashoffset={drawn ? 0 : 1}
        className="transition-[stroke-dashoffset] duration-[1400ms] ease-out"
      />
    </svg>
  );
}

export function V4CEtabliE() {
  const [active, setActive] = useState(0);
  const [drawnSet, setDrawnSet] = useState<Set<number>>(new Set([0]));
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute("data-idx"));
            setActive(idx);
            setDrawnSet((prev) => {
              if (prev.has(idx)) return prev;
              const next = new Set(prev);
              next.add(idx);
              return next;
            });
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 },
    );
    stepRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const step = ETABLI_STEPS[active];
  const sig = SIGNATURES[active];

  return (
    <section className="relative bg-[var(--site-bg)]">
      {/* Grain overlay scoped à la section pour éviter les composites layers en scroll */}
      <div className="pointer-events-none absolute inset-0 z-[1] opacity-[0.06] mix-blend-overlay bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22><filter id=%22n%22><feTurbulence baseFrequency=%221%22/></filter><rect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/></svg>')]" />

      {/* En-tête */}
      <header className="relative px-8 lg:px-16 pt-24 pb-16">
        <div className="mx-auto max-w-[1440px] flex items-end justify-between flex-wrap gap-6">
          <div>
            <span className={`${garamond} italic text-[12px] tracking-[0.35em] text-[var(--site-accent)] block mb-3`}>
              CHAPITRE VII · LE CHEMIN DE LA MATIÈRE
            </span>
            <h2 className={`${garamond} italic text-[56px] text-[var(--site-text)] leading-[0.95]`}>
              À l&apos;établi.
            </h2>
          </div>
          <p className={`${caveat} text-[20px] text-[var(--site-caveat)] max-w-[320px]`}>
            quatre temps tenus à la main —<br />procédé inchangé depuis le IV<sup>e</sup> s. av. J.-C.
          </p>
        </div>
      </header>

      {/* Corps scrollytelling */}
      <div className="relative">
        <div className="mx-auto max-w-[1440px] px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-16 lg:gap-24">
          {/* Image sticky avec crossfade + roman tracé */}
          <div className="hidden lg:block">
            <div className="sticky top-12 h-[80vh] w-full">
              <div className="relative w-full h-full overflow-hidden">
                {ETABLI_STEPS.map((s, idx) => (
                  <div
                    key={s.roman}
                    aria-hidden={active !== idx}
                    className="absolute inset-0 transition-opacity duration-[1200ms] ease-out"
                    style={{ opacity: active === idx ? 1 : 0 }}
                  >
                    <Image
                      src={s.image}
                      alt={s.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 0px, 720px"
                      className="object-cover scale-[1.03]"
                      priority={idx === 0}
                    />
                  </div>
                ))}
                {/* Vignette */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(0,0,0,0.65)_100%)]" />
                {/* Roman tracé */}
                <div className="absolute top-10 left-10 w-24 h-48">
                  <RomanTrace roman={step.roman} drawn={drawnSet.has(active)} />
                </div>
                {/* Étiquette en bas */}
                <div className="absolute bottom-0 inset-x-0 p-8 bg-gradient-to-t from-[var(--site-bg)] via-[var(--site-bg)]/60 to-transparent flex items-baseline justify-between">
                  <span className={`${caveat} text-[18px] text-[var(--site-caveat)]`}>
                    cliché · {sig.day} {sig.time}
                  </span>
                  <span className={`${garamond} italic text-[13px] tracking-widest text-[var(--site-accent)]`}>
                    {String(active + 1).padStart(2, "0")} / {String(ETABLI_STEPS.length).padStart(2, "0")}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Textes scrollés */}
          <div>
            {ETABLI_STEPS.map((s, idx) => {
              const isActive = active === idx;
              const detailFirst = s.detail.charAt(0);
              const detailRest = s.detail.slice(1);
              const sg = SIGNATURES[idx];
              return (
                <div
                  key={s.roman}
                  ref={(el) => {
                    stepRefs.current[idx] = el;
                  }}
                  data-idx={idx}
                  data-active={isActive}
                  className="group min-h-[85vh] flex flex-col justify-center py-16 relative"
                >
                  {/* Image mobile */}
                  <div className="lg:hidden relative w-full aspect-[4/5] mb-8 overflow-hidden">
                    <Image src={s.image} alt={s.imageAlt} fill sizes="100vw" className="object-cover" />
                  </div>

                  <div className="space-y-7 transition-[opacity,transform] duration-700 ease-out group-data-[active=false]:opacity-50 group-data-[active=false]:translate-y-2">
                    {/* Small caps */}
                    <div className="flex items-center gap-3">
                      <span className="block w-10 h-px bg-[var(--site-accent)]" />
                      <span className={`${garamond} italic text-[12px] tracking-[0.35em] text-[var(--site-accent)]`}>
                        FRAGMENT {s.roman}
                      </span>
                    </div>

                    {/* Titre */}
                    <h3 className={`${garamond} italic text-[56px] text-[var(--site-text)] leading-[0.98]`}>
                      {s.title}.
                    </h3>

                    {/* Annotation Caveat + brush underline */}
                    <div className="relative inline-block w-full">
                      <p className={`${caveat} text-[24px] text-[var(--site-caveat)] leading-relaxed`}>
                        {s.annotation}
                      </p>
                      <BrushUnderline />
                    </div>

                    {/* Détail avec lettrine */}
                    <p className={`${garamond} italic text-[18px] text-[var(--site-text)]/75 leading-loose max-w-[480px] pt-4`}>
                      <span className={`${garamond} float-left mr-3 mt-2 text-[72px] leading-[0.8] text-[var(--site-accent)]`}>
                        {detailFirst}
                      </span>
                      {detailRest}
                    </p>

                    {/* Signature manuscrite */}
                    <div className="flex items-end justify-between pt-6 max-w-[480px] border-t border-[var(--site-accent)]/20">
                      <span className={`${caveat} text-[18px] text-[var(--site-caveat)]/80 italic`}>
                        — É. R., {sg.day} {sg.time}
                      </span>
                      <span aria-hidden className={`${garamond} italic text-[28px] text-[var(--site-accent)]/50 leading-none`}>
                        {sg.glyph}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Rail vertical droite (desktop) */}
        <nav aria-label="Progression" className="hidden lg:flex fixed top-1/2 right-8 -translate-y-1/2 z-20 flex-col items-center gap-6">
          {ETABLI_STEPS.map((s, idx) => (
            <button
              key={s.roman}
              type="button"
              onClick={() => stepRefs.current[idx]?.scrollIntoView({ behavior: "smooth", block: "center" })}
              className="group relative flex items-center gap-3"
              aria-label={`Aller à ${s.title}`}
              aria-current={active === idx ? "step" : undefined}
            >
              <span
                className={`${garamond} italic text-[12px] tracking-widest transition-all duration-500 ${
                  active === idx ? "text-[var(--site-accent)] opacity-100" : "text-[var(--site-accent)]/40 opacity-0 group-hover:opacity-100"
                }`}
              >
                {s.roman}
              </span>
              <span
                className={`block w-2 h-2 rounded-full border transition-all duration-500 ${
                  active === idx
                    ? "bg-[var(--site-accent)] border-[var(--site-accent)] scale-125"
                    : "bg-transparent border-[var(--site-accent)]/40 scale-90"
                }`}
              />
            </button>
          ))}
        </nav>
      </div>

      {/* Pied de page */}
      <div className="px-8 lg:px-16 pt-12 pb-24 relative">
        <div className="mx-auto max-w-[1440px] flex justify-between items-end pt-8 border-t border-[var(--site-accent)]/15">
          <span className={`${caveat} text-[17px] italic text-[var(--site-caveat)]`}>
            quatre étapes — pas une de moins
          </span>
          <span className={`${garamond} italic text-[13px] text-[var(--site-accent)]`}>p. 07</span>
        </div>
      </div>
    </section>
  );
}
