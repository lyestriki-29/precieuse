import Image from "next/image";

const garamond = "font-[family-name:var(--font-eb-garamond)]";
const caveat = "font-[family-name:var(--font-caveat)]";

const PAIRES = [
  { pas: "Pas de saison", mais: "Des pièces qui traversent le temps." },
  { pas: "Pas de stock", mais: "Une fabrication à l'unité, sur commande." },
  { pas: "Pas d'usine", mais: "Une main, un atelier, un geste." },
  { pas: "Pas d'or anonyme", mais: "Or 19kt traçable, pierres choisies une à une." },
];

export function V4CAvantProposLuxeB() {
  return (
    <section className="relative bg-[var(--site-bg)] py-20 px-8 lg:px-16">
      <div className="absolute top-0 left-0 right-0 border-t-2 border-double border-[var(--site-text)]/20" />

      <div className="mx-auto max-w-[1240px] grid grid-cols-1 md:grid-cols-[460px_1fr] gap-16 items-center">
        <div className="relative mx-auto md:mx-0">
          <div className="relative w-full max-w-[420px] aspect-[3/4] p-2 bg-[var(--site-bg)]">
            <div className="relative w-full h-full border border-[var(--site-accent)]/50">
              <div className="absolute inset-[6px] overflow-hidden">
                <Image
                  src="/images/stitch-v3/creatrice-emeline-portrait.jpg"
                  alt="Portrait d'Eméline Le Ray, fondatrice de Précieuse"
                  fill
                  sizes="(min-width: 768px) 420px, 90vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          <div className={`${caveat} text-[15px] text-[var(--site-caveat)] text-center mt-4 opacity-90`}>
            Eméline Le Ray — fondatrice & joaillière<br />
            <span className="opacity-70">Lisboa · MMXXVI</span>
          </div>
        </div>

        <div>
          <span className={`${garamond} text-[11px] tracking-[0.35em] uppercase text-[var(--site-accent)] block mb-4`}>
            L&apos;atelier de Lisbonne
          </span>
          <h2 className={`${garamond} italic text-[36px] md:text-[42px] text-[var(--site-text)] leading-[1.15] mb-10 max-w-[520px]`}>
            Une alternative à la joaillerie standardisée.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8 max-w-[640px]">
            {PAIRES.map((p) => (
              <div key={p.pas} className="border-t border-[var(--site-text)]/25 pt-4">
                <span className={`${garamond} text-[10px] tracking-[0.3em] uppercase text-[var(--site-text)]/55 block mb-2`}>
                  {p.pas}
                </span>
                <span className={`${garamond} italic text-[17px] text-[var(--site-text)] leading-snug`}>
                  {p.mais}
                </span>
              </div>
            ))}
          </div>

          <p className={`${caveat} text-[18px] text-[var(--site-caveat)] mt-10 max-w-[460px]`}>
            Fondée en mai 2025 à Lisbonne, après dix années passées dans la joaillerie française.
          </p>
        </div>
      </div>

      <div className="mt-12 flex justify-end max-w-[1240px] mx-auto">
        <span className={`${garamond} italic text-[13px] text-[var(--site-accent)]`}>p. 02</span>
      </div>

      <div className="absolute bottom-0 left-0 right-0 border-t-2 border-double border-[var(--site-text)]/20" />
    </section>
  );
}
