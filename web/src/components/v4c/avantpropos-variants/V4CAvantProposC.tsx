import Image from "next/image";

const cormorant = "font-[family-name:var(--font-cormorant)]";
const bodoni = "font-[family-name:var(--font-bodoni)]";
const caveat = "font-[family-name:var(--font-caveat)]";

const PAIRES = [
  { roman: "i", pas: "pas de saison", mais: "Des pièces dessinées pour traverser le temps." },
  { roman: "ii", pas: "pas de stock", mais: "Une fabrication à l'unité, à partir d'une commande." },
  { roman: "iii", pas: "pas d'usine", mais: "Une main, un atelier, un geste — du dessin au sertissage." },
  { roman: "iv", pas: "pas d'or anonyme", mais: "Or 19kt traçable, pierres précieuses choisies une à une." },
];

function Filigrane() {
  return (
    <svg aria-hidden="true" viewBox="0 0 80 24" className="w-[80px] h-6 text-[var(--site-accent)] opacity-70" fill="none">
      <path d="M40 12 Q 32 4 24 12 Q 16 20 8 12" stroke="currentColor" strokeWidth="0.6" fill="none" />
      <path d="M40 12 Q 48 4 56 12 Q 64 20 72 12" stroke="currentColor" strokeWidth="0.6" fill="none" />
      <circle cx="40" cy="12" r="2" stroke="currentColor" strokeWidth="0.6" fill="currentColor" fillOpacity="0.3" />
      <line x1="0" y1="12" x2="6" y2="12" stroke="currentColor" strokeWidth="0.4" />
      <line x1="74" y1="12" x2="80" y2="12" stroke="currentColor" strokeWidth="0.4" />
    </svg>
  );
}

function Seal() {
  return (
    <svg aria-hidden="true" viewBox="0 0 120 120" className="w-[88px] h-[88px] text-[var(--site-accent)] opacity-80" fill="none">
      <circle cx="60" cy="60" r="56" stroke="currentColor" strokeWidth="0.8" />
      <circle cx="60" cy="60" r="50" stroke="currentColor" strokeWidth="0.4" strokeDasharray="1 3" />
      <text x="60" y="40" textAnchor="middle" fontSize="9" fill="currentColor" fontFamily="serif" letterSpacing="1.8">ATELIER</text>
      <text x="60" y="68" textAnchor="middle" fontSize="22" fill="currentColor" fontFamily="serif" fontStyle="italic">P</text>
      <text x="60" y="86" textAnchor="middle" fontSize="9" fill="currentColor" fontFamily="serif" letterSpacing="1.8">LISBOA</text>
      <text x="60" y="100" textAnchor="middle" fontSize="7" fill="currentColor" fontFamily="serif" letterSpacing="2">MMXXVI</text>
    </svg>
  );
}

export function V4CAvantProposC() {
  return (
    <section className="relative bg-[var(--site-bg)] py-24 px-8 lg:px-16">
      <div className="absolute top-0 left-0 right-0 border-t border-[var(--site-text)]/25" />

      <div className="mx-auto max-w-[1320px] grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="relative mx-auto md:mx-0 -rotate-1 hover:rotate-0 transition-transform duration-500">
          <div className="relative w-full max-w-[460px] aspect-[3/4] border-[6px] border-[var(--site-bg)] shadow-md">
            <Image
              src="/images/stitch-v3/creatrice-emeline-portrait.jpg"
              alt="Portrait d'Eméline Le Ray, fondatrice de Précieuse"
              fill
              sizes="(min-width: 768px) 460px, 90vw"
              className="object-cover"
            />
            <svg
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 w-full h-full"
              viewBox="0 0 460 613"
              fill="none"
            >
              <rect x="8" y="10" width="444" height="593" rx="1"
                stroke="#3d2817" strokeWidth="0.8" strokeDasharray="3 7" strokeOpacity="0.35" />
            </svg>
          </div>
          <span className={`${caveat} text-[15px] text-[var(--site-caveat)] block text-center mt-3 opacity-80`}>
            Eméline, Lisboa
          </span>
        </div>

        <div>
          <span className={`${bodoni} text-[10px] tracking-[0.45em] uppercase text-[var(--site-accent)] block mb-5`}>
            Avant-propos
          </span>

          <div className="flex flex-col items-start mb-10">
            <span className={`${bodoni} text-[34px] tracking-[0.18em] uppercase text-[var(--site-text)] leading-none`}>
              Maison
            </span>
            <div className="my-3"><Filigrane /></div>
            <span className={`${bodoni} italic text-[52px] text-[var(--site-text)] leading-none`}>
              Précieuse
            </span>
          </div>

          <ul className="flex flex-col gap-7">
            {PAIRES.map((p) => (
              <li key={p.roman} className="grid grid-cols-[32px_1fr] gap-5 items-baseline">
                <span className={`${cormorant} italic text-[15px] text-[var(--site-accent)] opacity-80 tracking-wider`}>
                  · {p.roman} ·
                </span>
                <div className="flex flex-col gap-1.5">
                  <span className={`${cormorant} italic text-[15px] text-[var(--site-text)]/65 tracking-wide`}>
                    {p.pas} —
                  </span>
                  <span className={`${bodoni} italic text-[20px] text-[var(--site-text)] leading-[1.45]`}>
                    {p.mais}
                  </span>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex items-center gap-6 pt-6 border-t border-[var(--site-text)]/15">
            <Seal />
            <div className="flex flex-col">
              <span className={`${bodoni} italic text-[18px] text-[var(--site-text)]`}>
                Eméline Le Ray
              </span>
              <span className={`${cormorant} italic text-[13px] text-[var(--site-text)]/65 tracking-wide`}>
                fondatrice — fondée mai · MMXXV
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 flex justify-end max-w-[1320px] mx-auto">
        <span className={`${bodoni} italic text-[13px] text-[var(--site-accent)]`}>p. 02</span>
      </div>

      <div className="absolute bottom-0 left-0 right-0 border-t border-[var(--site-text)]/25" />
    </section>
  );
}
