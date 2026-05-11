import Image from "next/image";

const garamond = "font-[family-name:var(--font-eb-garamond)]";
const bodoni = "font-[family-name:var(--font-bodoni)]";
const caveat = "font-[family-name:var(--font-caveat)]";

const PAIRES = [
  { num: "01", pas: "Pas de saison", mais: "Des pièces dessinées pour traverser le temps." },
  { num: "02", pas: "Pas de stock", mais: "Une fabrication à l'unité, à partir d'une commande." },
  { num: "03", pas: "Pas d'usine", mais: "Une main, un atelier, un geste — du dessin au sertissage." },
  { num: "04", pas: "Pas d'or anonyme", mais: "Or 19kt traçable, pierres précieuses choisies une à une." },
];

function LosangeFiletA() {
  return (
    <svg aria-hidden="true" viewBox="0 0 240 8" className="w-full h-2 opacity-60 text-[var(--site-accent)]" fill="none">
      <line x1="0" y1="4" x2="112" y2="4" stroke="currentColor" strokeWidth="0.5" />
      <path d="M120 0 L124 4 L120 8 L116 4 Z" fill="currentColor" />
      <line x1="128" y1="4" x2="240" y2="4" stroke="currentColor" strokeWidth="0.5" />
    </svg>
  );
}

export function V4CAvantProposA() {
  return (
    <section className="relative bg-[var(--site-bg)] py-24 px-8 lg:px-16">
      <div className="absolute top-0 left-0 right-0 border-t border-[var(--site-text)]/25" />

      <div className="mx-auto max-w-[1320px] grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch">
        <div className="relative">
          <div className="relative w-full aspect-[3/4] max-w-[480px] mx-auto md:mx-0">
            <Image
              src="/images/stitch-v3/creatrice-emeline-portrait.jpg"
              alt="Portrait d'Eméline Le Ray"
              fill
              sizes="(min-width: 768px) 480px, 90vw"
              className="object-cover grayscale-[0.1]"
            />
          </div>
        </div>

        <div className="md:pl-16 lg:pl-24 flex flex-col justify-center pt-8 md:pt-0">
          <span className={`${bodoni} text-[10px] tracking-[0.4em] uppercase text-[var(--site-accent)] block mb-6`}>
            — Avant-propos —
          </span>

          <div className="relative mb-12">
            <span className={`${bodoni} text-[140px] leading-[0.85] text-[var(--site-text)] block float-left mr-5 -mt-2`}>
              M
            </span>
            <h2 className={`${bodoni} italic text-[36px] md:text-[42px] text-[var(--site-text)] leading-[1.05] pt-4`}>
              aison<br />
              <span className={`${bodoni} not-italic tracking-[0.18em] uppercase text-[28px] md:text-[32px] text-[var(--site-accent)]`}>
                Précieuse
              </span>
            </h2>
          </div>

          <LosangeFiletA />

          <ul className="flex flex-col mt-2">
            {PAIRES.map((p, i) => (
              <li key={p.num} className="grid grid-cols-[64px_1fr] gap-6 py-5 items-baseline">
                <span className={`${bodoni} italic text-[44px] text-[var(--site-accent)]/70 leading-none`}>
                  {p.num}
                </span>
                <div className="flex flex-col gap-1">
                  <span className={`${bodoni} text-[10px] tracking-[0.3em] uppercase text-[var(--site-text)]/50`}>
                    {p.pas}
                  </span>
                  <span className={`${bodoni} italic text-[20px] text-[var(--site-text)] leading-snug`}>
                    {p.mais}
                  </span>
                </div>
                {i < PAIRES.length - 1 && <div className="col-span-2"><LosangeFiletA /></div>}
              </li>
            ))}
          </ul>

          <p className={`${caveat} text-[16px] text-[var(--site-caveat)] mt-10`}>
            Eméline Le Ray, fondatrice & joaillière
          </p>
        </div>
      </div>

      <div className="mt-12 flex justify-between items-baseline max-w-[1320px] mx-auto">
        <span className={`${bodoni} text-[10px] tracking-[0.35em] uppercase text-[var(--site-accent)]`}>
          estd. mai · MMXXV — Lisboa, Portugal
        </span>
        <span className={`${bodoni} italic text-[13px] text-[var(--site-accent)]`}>p. 02</span>
      </div>

      <div className="absolute bottom-0 left-0 right-0 border-t border-[var(--site-text)]/25" />
    </section>
  );
}
