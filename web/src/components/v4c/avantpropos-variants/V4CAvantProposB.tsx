import Image from "next/image";

const playfair = "font-[family-name:var(--font-playfair)]";
const cormorant = "font-[family-name:var(--font-cormorant)]";
const caveat = "font-[family-name:var(--font-caveat)]";

const PAIRES = [
  { refus: "Le refus", a: "de la saison", promesse: "La promesse", b: "Des pièces dessinées pour traverser le temps." },
  { refus: "Le refus", a: "du stock", promesse: "La promesse", b: "Une fabrication à l'unité, à partir d'une commande." },
  { refus: "Le refus", a: "de l'usine", promesse: "La promesse", b: "Une main, un atelier, un geste — du dessin au sertissage." },
  { refus: "Le refus", a: "de l'or anonyme", promesse: "La promesse", b: "Or 19kt traçable, pierres précieuses choisies une à une." },
];

export function V4CAvantProposB() {
  return (
    <section className="relative bg-[var(--site-bg)] py-24 px-8 lg:px-16">
      <div className="absolute top-0 left-0 right-0 border-t border-[var(--site-text)]/30" />

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

        <div className="md:pl-16 lg:pl-24 flex flex-col justify-center pt-8 md:pt-0">
          <span className={`${cormorant} italic text-[14px] tracking-[0.05em] text-[var(--site-accent)] block mb-2`}>
            — une joaillerie de Lisbonne —
          </span>
          <h2 className={`${playfair} text-[28px] md:text-[34px] tracking-[0.25em] uppercase text-[var(--site-text)] leading-[1.1] mb-8 font-normal`}>
            Maison&nbsp;Précieuse
          </h2>

          <p className={`${cormorant} italic text-[22px] md:text-[24px] text-[var(--site-text)]/90 leading-[1.5] mb-10 max-w-[560px] pl-4 border-l-2 border-[var(--site-accent)]/40`}>
            Précieuse est née d&apos;un déplacement — celui d&apos;Eméline Le Ray, joaillière française installée à Lisbonne en mai 2025, qui a choisi de tout reprendre à la main.
          </p>

          <ul className="flex flex-col">
            {PAIRES.map((p, i) => (
              <li key={p.a} className="border-t border-[var(--site-text)]/20 py-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                  <div>
                    <span className={`${cormorant} italic text-[12px] tracking-[0.15em] uppercase text-[var(--site-text)]/50 block`}>
                      {p.refus}
                    </span>
                    <span className={`${playfair} text-[18px] text-[var(--site-text)]/85 leading-snug`}>
                      {p.a}
                    </span>
                  </div>
                  <div>
                    <span className={`${cormorant} italic text-[12px] tracking-[0.15em] uppercase text-[var(--site-accent)] block`}>
                      {p.promesse}
                    </span>
                    <span className={`${playfair} italic text-[18px] text-[var(--site-text)] leading-snug`}>
                      {p.b}
                    </span>
                  </div>
                </div>
                {i === PAIRES.length - 1 && <div className="border-t border-[var(--site-text)]/20 mt-5" />}
              </li>
            ))}
          </ul>

          <p className={`${cormorant} italic text-[15px] text-[var(--site-text)]/70 mt-10 pt-4 border-t border-[var(--site-text)]/15`}>
            Lisbonne, MMXXVI · Eméline Le Ray, fondatrice & joaillière.
          </p>
        </div>
      </div>

      <div className="mt-12 flex justify-end max-w-[1320px] mx-auto">
        <span className={`${playfair} italic text-[13px] text-[var(--site-accent)]`}>p. 02</span>
      </div>

      <div className="absolute bottom-0 left-0 right-0 border-t border-[var(--site-text)]/30" />
    </section>
  );
}
