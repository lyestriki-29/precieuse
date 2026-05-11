import Image from "next/image";

const garamond = "font-[family-name:var(--font-eb-garamond)]";
const caveat = "font-[family-name:var(--font-caveat)]";

const PAIRES = [
  { pas: "Pas de saison.", mais: "Des pièces dessinées pour traverser le temps." },
  { pas: "Pas de stock.", mais: "Une fabrication à l'unité, à partir d'une commande." },
  { pas: "Pas d'usine.", mais: "Une main, un atelier, un geste — du dessin au sertissage." },
  { pas: "Pas d'or anonyme.", mais: "Or 19kt traçable, pierres choisies une à une." },
];

export function V4CAvantProposLuxeD() {
  return (
    <section className="relative bg-[var(--site-bg)] py-20 px-8 lg:px-16">
      <div className="absolute top-0 left-0 right-0 border-t border-[var(--site-text)]/30" />

      <div className="mx-auto max-w-[1320px] grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch">
        <div className="relative">
          <div className="relative w-full aspect-[3/4] max-w-[480px] mx-auto md:mx-0 md:ml-0">
            <Image
              src="/images/stitch-v3/creatrice-emeline-portrait.jpg"
              alt="Portrait d'Eméline Le Ray, fondatrice de Précieuse"
              fill
              sizes="(min-width: 768px) 480px, 90vw"
              className="object-cover grayscale-[0.1]"
            />
          </div>
        </div>

        <div className="md:pl-14 lg:pl-20 flex flex-col justify-center pt-6 md:pt-0">
          <span className={`${garamond} text-[11px] tracking-[0.4em] uppercase text-[var(--site-accent)] block mb-4`}>
            — Avant-propos
          </span>
          <h2 className={`${garamond} text-[44px] md:text-[56px] tracking-[0.05em] uppercase text-[var(--site-text)] leading-[1] mb-3`}>
            Maison
          </h2>
          <h2 className={`${garamond} italic text-[44px] md:text-[56px] text-[var(--site-accent)] leading-[1] mb-10 -mt-2`}>
            Précieuse
          </h2>

          <ul className="flex flex-col">
            {PAIRES.map((p, i) => (
              <li
                key={p.pas}
                className={`grid grid-cols-[auto_1fr] gap-6 py-4 items-baseline ${i < PAIRES.length - 1 ? "border-b border-[var(--site-text)]/15" : ""}`}
              >
                <span className={`${garamond} text-[14px] tracking-[0.15em] uppercase text-[var(--site-text)]/45 whitespace-nowrap min-w-[140px]`}>
                  {p.pas}
                </span>
                <span className={`${garamond} italic text-[19px] md:text-[21px] text-[var(--site-text)] leading-snug`}>
                  {p.mais}
                </span>
              </li>
            ))}
          </ul>

          <p className={`${caveat} text-[16px] text-[var(--site-caveat)] mt-8`}>
            Eméline Le Ray, fondatrice & joaillière — Lisboa, MMXXVI
          </p>
        </div>
      </div>

      <div className="mt-12 flex justify-between items-baseline max-w-[1320px] mx-auto">
        <span className={`${garamond} text-[11px] tracking-[0.3em] uppercase text-[var(--site-accent)]`}>
          fondée — mai 2025
        </span>
        <span className={`${garamond} italic text-[13px] text-[var(--site-accent)]`}>p. 02</span>
      </div>

      <div className="absolute bottom-0 left-0 right-0 border-t border-[var(--site-text)]/30" />
    </section>
  );
}
