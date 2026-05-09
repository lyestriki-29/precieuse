const garamond = "font-[family-name:var(--font-eb-garamond)]";
const caveat = "font-[family-name:var(--font-caveat)]";

type Lettre = {
  citation: string;
  auteur: string;
  ville: string;
  date: string;
  rotation: string;
};

const LETTRES: Lettre[] = [
  {
    citation:
      "J'ai reçu Joséphine un mardi matin. Je ne l'ai plus retirée depuis. Ce n'est pas une bague, c'est une présence.",
    auteur: "Claire M.",
    ville: "Paris",
    date: "12 février 2025",
    rotation: "-rotate-1",
  },
  {
    citation:
      "Eméline a su traduire en métal ce que je ne savais pas dire en mots. La pièce est exactement ce que je portais en tête sans le savoir.",
    auteur: "Sophie L.",
    ville: "Lyon",
    date: "3 octobre 2024",
    rotation: "rotate-1",
  },
  {
    citation:
      "Chaque fois que je regarde ma main, je pense à l'atelier, à la lumière de Lisbonne. C'est un voyage porté sur le doigt.",
    auteur: "Margaux D.",
    ville: "Bordeaux",
    date: "18 mars 2025",
    rotation: "-rotate-[0.5deg]",
  },
];

export function V3CLettres() {
  return (
    <section className="relative bg-[#f4ede0] py-24 px-8 lg:px-16">
      <div className="absolute top-0 left-0 right-0 border-t-2 border-double border-[#3d2817]/15" />

      <div className="mx-auto max-w-[1440px]">
        <h2 className={`${garamond} italic text-[42px] text-[#3d2817] mb-4`}>
          Lettres reçues
        </h2>
        <p className={`${caveat} text-[20px] text-[#1e3a5f] mb-20`}>
          — de celles qui portent
        </p>

        {/* Annotation marginale droite */}
        <div className="absolute right-6 top-40 hidden xl:block rotate-[2deg]">
          <span className={`${caveat} text-[15px] text-[#1e3a5f] opacity-60`}>
            chaque lettre est réelle
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {LETTRES.map((l, i) => (
            <blockquote
              key={i}
              className={`bg-[#ede4d5] p-8 transition-shadow duration-300 hover:shadow-md ${l.rotation}`}
            >
              {/* Guillemet décoratif */}
              <span className={`${garamond} italic text-[60px] text-[#a08552]/30 leading-none block -mb-4`}>
                &ldquo;
              </span>

              <p className={`${caveat} text-[20px] text-[#1e3a5f] leading-[1.6] mb-8`}>
                {l.citation}
              </p>

              <footer className="border-t border-[#3d2817]/10 pt-4">
                <span className={`${garamond} italic text-[18px] text-[#3d2817] block`}>
                  {l.auteur}
                </span>
                <span className="font-[family-name:var(--font-inter)] text-[12px] font-light text-[#6b4423]">
                  {l.ville}, {l.date}
                </span>
              </footer>
            </blockquote>
          ))}
        </div>

        <div className="mt-16 flex justify-end">
          <span className={`${garamond} italic text-[13px] text-[#a08552]`}>p. 05</span>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 border-t-2 border-double border-[#3d2817]/15" />
    </section>
  );
}
