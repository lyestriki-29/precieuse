import Image from "next/image";

const bodoni = "font-[family-name:var(--font-bodoni)]";
const playfair = "font-[family-name:var(--font-playfair)]";
const cormorant = "font-[family-name:var(--font-cormorant)]";

const PAIRES = [
  { roman: "I", pas: "Pas de saison", mais: "Des pièces dessinées pour traverser le temps." },
  { roman: "II", pas: "Pas de stock", mais: "Une fabrication à l'unité, sur commande." },
  { roman: "III", pas: "Pas d'usine", mais: "Une main, un atelier, un geste." },
  { roman: "IV", pas: "Pas d'or anonyme", mais: "Or 19kt traçable, pierres choisies une à une." },
];

export function V4CAvantProposD() {
  return (
    <section className="relative bg-[var(--site-bg)] py-24 px-8 lg:px-16 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 border-t-2 border-[var(--site-text)]/35" />

      <div className="mx-auto max-w-[1320px] grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch">
        <div className="relative">
          <div className="relative w-full aspect-[3/4] max-w-[480px] mx-auto md:mx-0">
            <Image
              src="/images/stitch-v3/creatrice-emeline-portrait.jpg"
              alt="Portrait d'Eméline Le Ray"
              fill
              sizes="(min-width: 768px) 480px, 90vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="md:pl-12 lg:pl-16 flex flex-col justify-center pt-8 md:pt-0 relative">
          <span className={`${cormorant} italic text-[12px] tracking-[0.4em] uppercase text-[var(--site-accent)] block mb-3`}>
            — avant-propos
          </span>

          <div className="relative leading-[0.92] mb-10">
            <h2 className={`${bodoni} text-[72px] md:text-[96px] tracking-[0.02em] uppercase text-[var(--site-text)] leading-[0.92] block`}>
              Maison
            </h2>
            <h2 className={`${playfair} italic text-[88px] md:text-[120px] text-[var(--site-accent)] leading-[0.88] block -mt-3 md:-mt-5 -ml-1`}>
              Précieuse
            </h2>
          </div>

          <ul className="flex flex-col">
            {PAIRES.map((p) => (
              <li
                key={p.roman}
                className="grid grid-cols-[44px_1fr] gap-5 py-5 items-start"
              >
                <span className={`${bodoni} italic text-[40px] md:text-[48px] text-[var(--site-accent)]/40 leading-none pt-3`}>
                  {p.roman}
                </span>
                <div className="flex flex-col gap-2">
                  <span className={`${bodoni} text-[10px] tracking-[0.4em] uppercase text-[var(--site-text)]/40`}>
                    {p.pas}
                  </span>
                  <span className={`${playfair} italic text-[26px] md:text-[32px] text-[var(--site-text)] leading-[1.15]`}>
                    {p.mais}
                  </span>
                </div>
              </li>
            ))}
          </ul>

          <p className={`${cormorant} italic text-[14px] text-[var(--site-text)]/60 mt-10 tracking-[0.05em]`}>
            Eméline Le Ray, fondatrice & joaillière · Lisboa, MMXXVI.
          </p>
        </div>
      </div>

      <div className="mt-16 flex justify-between items-baseline max-w-[1320px] mx-auto">
        <span className={`${bodoni} text-[10px] tracking-[0.4em] uppercase text-[var(--site-accent)]`}>
          fondée — mai · MMXXV
        </span>
        <span className={`${bodoni} italic text-[13px] text-[var(--site-accent)]`}>p. 02</span>
      </div>

      <div className="absolute bottom-0 left-0 right-0 border-t-2 border-[var(--site-text)]/35" />
    </section>
  );
}
