import Image from "next/image";

const garamond = "font-[family-name:var(--font-eb-garamond)]";
const caveat = "font-[family-name:var(--font-caveat)]";

type Step = {
  roman: string;
  title: string;
  annotation: string;
  image: string;
  imageAlt: string;
};

const STEPS: Step[] = [
  {
    roman: "I",
    title: "L'Esquisse",
    annotation: "toujours au crayon B, jamais à la gomme — les erreurs restent",
    image: "/images/atelier/esquisses-amethyste.jpg",
    imageAlt: "Esquisses d'améthyste sur papier vélin",
  },
  {
    roman: "II",
    title: "La Cire",
    annotation: "température critique à 68°C — une seconde de trop et tout recommence",
    image: "/images/atelier/dessin-aquarelle.jpg",
    imageAlt: "Modèle en cire de la pièce",
  },
  {
    roman: "III",
    title: "La Fonte",
    annotation: "l'or entre à 1064°C, il sort pièce unique — il n'y a pas d'autre façon",
    image: "/images/stitch/journal-fonte-or.jpg",
    imageAlt: "Fonte de l'or dans le moule",
  },
  {
    roman: "IV",
    title: "Le Polissage",
    annotation: "deux heures minimum, à la main, sous loupe — c'est là que la lumière naît",
    image: "/images/atelier/bague-en-fabrication.jpg",
    imageAlt: "Polissage final de la bague en atelier",
  },
];

function StepSketch() {
  return (
    <svg aria-hidden className="w-full h-full" viewBox="0 0 200 200" fill="none">
      <circle cx="100" cy="100" r="70" stroke="#3d2817" strokeWidth="1.2"
        strokeDasharray="5 8" strokeOpacity="0.3" />
      <path d="M60 100 Q 100 60 140 100 Q 100 140 60 100Z"
        stroke="#1e3a5f" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.25" />
      <path d="M100 40 L100 160" stroke="#a08552" strokeWidth="0.8"
        strokeDasharray="2 6" strokeOpacity="0.3" />
      <path d="M40 100 L160 100" stroke="#a08552" strokeWidth="0.8"
        strokeDasharray="2 6" strokeOpacity="0.3" />
    </svg>
  );
}

export function V4CEtabli() {
  return (
    <section className="relative bg-[#2a1d10] py-24 px-8 lg:px-16">
      <div className="mx-auto max-w-[1440px]">
        <h2 className={`${garamond} italic text-[42px] text-[#f4ede0] mb-4`}>
          À l&apos;établi
        </h2>
        <p className={`${caveat} text-[20px] text-[#a08552] mb-20`}>
          cire perdue — le chemin de la matière
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">
          {STEPS.map((step) => (
            <div key={step.roman} className="relative group">
              <span className={`${garamond} text-[56px] text-[#a08552] leading-none opacity-30 block mb-2`}>
                {step.roman}
              </span>

              <div className="relative w-full aspect-square mb-6 overflow-hidden">
                <Image
                  src={step.image}
                  alt={step.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 300px"
                  className="object-cover opacity-75 group-hover:opacity-90 transition-opacity duration-500"
                />
                <div className="absolute inset-0 opacity-60">
                  <StepSketch />
                </div>
              </div>

              <h3 className={`${garamond} italic text-[30px] text-[#f4ede0] mb-3`}>
                {step.title}
              </h3>

              <p className={`${caveat} text-[17px] leading-relaxed`} style={{ color: "#7ca0cc" }}>
                {step.annotation}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-between items-end">
          <span className={`${caveat} text-[17px] italic`} style={{ color: "#7ca0cc" }}>
            procédé inchangé depuis le IVe siècle avant notre ère
          </span>
          <span className={`${garamond} italic text-[13px] text-[#a08552]`}>p. 07</span>
        </div>
      </div>
    </section>
  );
}
