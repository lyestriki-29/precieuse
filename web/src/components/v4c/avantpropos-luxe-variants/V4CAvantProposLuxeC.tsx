import Image from "next/image";

const garamond = "font-[family-name:var(--font-eb-garamond)]";
const caveat = "font-[family-name:var(--font-caveat)]";

function ArtDecoSeparator() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 200 12"
      className="w-[180px] h-[12px] opacity-50 text-[var(--site-accent)]"
      fill="none"
    >
      <line x1="0" y1="6" x2="80" y2="6" stroke="currentColor" strokeWidth="0.6" />
      <circle cx="92" cy="6" r="1.5" fill="currentColor" />
      <path d="M100 1 L104 6 L100 11 L96 6 Z" fill="currentColor" />
      <circle cx="108" cy="6" r="1.5" fill="currentColor" />
      <line x1="120" y1="6" x2="200" y2="6" stroke="currentColor" strokeWidth="0.6" />
    </svg>
  );
}

function SignatureSVG() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 120 60"
      fill="none"
      className="w-[100px] h-auto opacity-70"
    >
      <path
        d="M20 45 Q 18 20 30 15 Q 45 10 50 22 Q 52 28 40 30 Q 28 32 38 45"
        stroke="#3d2817" strokeWidth="1.8" strokeLinecap="round" fill="none"
      />
      <path d="M26 12 L30 7" stroke="#3d2817" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M38 45 Q 60 48 85 42" stroke="#3d2817" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      <circle cx="86" cy="42" r="1.5" fill="#3d2817" opacity="0.6" />
    </svg>
  );
}

const PAIRES = [
  { pas: "pas de saison —", mais: "Des pièces dessinées pour traverser le temps." },
  { pas: "pas de stock —", mais: "Une fabrication à l'unité, à partir d'une commande." },
  { pas: "pas d'usine —", mais: "Une main, un atelier, un geste, du dessin au sertissage." },
  { pas: "pas d'or anonyme —", mais: "Or 19kt traçable, pierres précieuses choisies une à une." },
];

export function V4CAvantProposLuxeC() {
  return (
    <section className="relative bg-[var(--site-bg)] py-20 px-8 lg:px-16">
      <div className="absolute top-0 left-0 right-0 border-t-2 border-double border-[var(--site-text)]/15" />

      <div className="mx-auto max-w-[1240px] grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div className="relative md:order-1 order-2 -rotate-[1.5deg] hover:rotate-0 transition-transform duration-500 mx-auto md:mx-0 md:sticky md:top-28">
          <div className="relative w-full max-w-[420px] aspect-[3/4] border-[6px] border-[var(--site-bg)] shadow-lg">
            <Image
              src="/images/stitch-v3/creatrice-emeline-portrait.jpg"
              alt="Portrait d'Eméline Le Ray, fondatrice de Précieuse"
              fill
              sizes="(min-width: 768px) 420px, 90vw"
              className="object-cover"
            />
            <svg
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 w-full h-full"
              viewBox="0 0 420 560"
              fill="none"
            >
              <rect x="8" y="10" width="404" height="540" rx="1"
                stroke="#3d2817" strokeWidth="0.8" strokeDasharray="3 7" strokeOpacity="0.35" />
            </svg>
          </div>
          <span className={`${caveat} text-[15px] text-[var(--site-caveat)] block text-center mt-3 opacity-80`}>
            Eméline Le Ray, Lisboa — MMXXVI
          </span>
        </div>

        <div className="md:order-2 order-1 md:pt-6">
          <span className={`${caveat} text-[20px] text-[var(--site-caveat)] block mb-2`}>
            Avant-propos
          </span>
          <h2 className={`${garamond} italic text-[40px] md:text-[44px] text-[var(--site-text)] leading-tight mb-8`}>
            Le carnet d&apos;atelier.
          </h2>

          <ul className="flex flex-col gap-7">
            {PAIRES.map((p, i) => (
              <li key={p.pas} className="flex flex-col gap-2">
                <span className={`${caveat} text-[19px] text-[var(--site-caveat)] opacity-90`}>
                  {p.pas}
                </span>
                <span className={`${garamond} italic text-[19px] text-[var(--site-text)] leading-snug pl-6 border-l-2 border-[var(--site-accent)]/30`}>
                  {p.mais}
                </span>
                {i < PAIRES.length - 1 && (
                  <div className="flex justify-center mt-3">
                    <ArtDecoSeparator />
                  </div>
                )}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col items-start gap-1 pt-6 border-t border-[var(--site-text)]/15">
            <SignatureSVG />
            <span className={`${garamond} italic text-[15px] text-[var(--site-text)]/80`}>
              Eméline Le Ray, fondatrice
            </span>
          </div>
        </div>
      </div>

      <div className="mt-10 flex justify-end max-w-[1240px] mx-auto">
        <span className={`${garamond} italic text-[13px] text-[var(--site-accent)]`}>p. 02</span>
      </div>

      <div className="absolute bottom-0 left-0 right-0 border-t-2 border-double border-[var(--site-text)]/15" />
    </section>
  );
}
