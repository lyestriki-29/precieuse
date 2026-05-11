import Image from "next/image";

const garamond = "font-[family-name:var(--font-eb-garamond)]";
const caveat = "font-[family-name:var(--font-caveat)]";

const PAIRES = [
  { roman: "I", pas: "Pas de saison", mais: "Des pièces dessinées pour traverser le temps." },
  { roman: "II", pas: "Pas de stock", mais: "Une fabrication à l'unité, à partir d'une commande." },
  { roman: "III", pas: "Pas d'usine", mais: "Une main, un atelier, un geste — du dessin au sertissage." },
  { roman: "IV", pas: "Pas d'or anonyme", mais: "Or 19kt traçable, pierres précieuses choisies une à une." },
];

export function V4CAvantProposLuxeA() {
  return (
    <section className="relative bg-[var(--site-bg)] py-20 px-8 lg:px-16">
      <div className="absolute top-0 left-0 right-0 border-t border-[var(--site-text)]/20" />

      <div className="mx-auto max-w-[1240px] grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        <div className="relative md:order-1 order-2 mx-auto md:mx-0">
          <div className="relative w-full max-w-[420px] aspect-[3/4] border border-[var(--site-text)]/30">
            <Image
              src="/images/stitch-v3/creatrice-emeline-portrait.jpg"
              alt="Portrait d'Eméline Le Ray, fondatrice de Précieuse"
              fill
              sizes="(min-width: 768px) 420px, 90vw"
              className="object-cover"
            />
          </div>
          <div className="mt-3 flex items-baseline justify-between max-w-[420px]">
            <span className={`${garamond} italic text-[13px] tracking-[0.25em] uppercase text-[var(--site-text)]/70`}>
              Eméline Le Ray
            </span>
            <span className={`${garamond} italic text-[12px] tracking-[0.2em] uppercase text-[var(--site-accent)]`}>
              Lisboa · MMXXVI
            </span>
          </div>
        </div>

        <div className="md:order-2 order-1">
          <span className={`${garamond} italic text-[12px] tracking-[0.3em] uppercase text-[var(--site-accent)] block mb-3`}>
            Avant-propos
          </span>
          <h2 className={`${garamond} text-[34px] md:text-[40px] tracking-[0.12em] uppercase text-[var(--site-text)] leading-tight mb-10`}>
            Maison<br />Précieuse
          </h2>

          <ul className="flex flex-col">
            {PAIRES.map((p, i) => (
              <li
                key={p.roman}
                className={`grid grid-cols-[28px_1fr] gap-5 py-5 ${i < PAIRES.length - 1 ? "border-b border-[var(--site-text)]/15" : ""}`}
              >
                <span className={`${garamond} text-[18px] text-[var(--site-accent)] pt-1 tracking-wider`}>
                  {p.roman}
                </span>
                <div className="flex flex-col gap-1">
                  <span className={`${garamond} text-[11px] tracking-[0.25em] uppercase text-[var(--site-text)]/55`}>
                    {p.pas}
                  </span>
                  <span className={`${garamond} italic text-[19px] text-[var(--site-text)] leading-snug`}>
                    {p.mais}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-12 flex justify-between items-baseline max-w-[1240px] mx-auto">
        <span className={`${caveat} text-[15px] text-[var(--site-caveat)]`}>
          fondée à Lisbonne, mai 2025
        </span>
        <span className={`${garamond} italic text-[13px] text-[var(--site-accent)]`}>p. 02</span>
      </div>

      <div className="absolute bottom-0 left-0 right-0 border-t border-[var(--site-text)]/20" />
    </section>
  );
}
