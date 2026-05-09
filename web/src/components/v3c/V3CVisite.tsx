import Link from "next/link";

const garamond = "font-[family-name:var(--font-eb-garamond)]";
const caveat = "font-[family-name:var(--font-caveat)]";

function PlanSVG() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 300 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-[300px] h-auto opacity-70"
    >
      {/* Rue principale sinueuse */}
      <path
        d="M20 100 Q 60 80 100 100 Q 140 120 180 95 Q 220 70 280 90"
        stroke="#3d2817" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.6"
      />
      {/* Rue secondaire */}
      <path
        d="M140 20 Q 155 60 150 100 Q 145 140 160 180"
        stroke="#3d2817" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.4"
      />
      {/* Petite ruelle */}
      <path
        d="M100 100 Q 110 130 130 150"
        stroke="#3d2817" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.3"
      />
      {/* Croix atelier */}
      <g transform="translate(148, 92)">
        <line x1="-8" y1="0" x2="8" y2="0" stroke="#1e3a5f" strokeWidth="2.5"
          strokeLinecap="round" strokeOpacity="0.8" />
        <line x1="0" y1="-8" x2="0" y2="8" stroke="#1e3a5f" strokeWidth="2.5"
          strokeLinecap="round" strokeOpacity="0.8" />
        {/* Cercle autour de la croix */}
        <circle cx="0" cy="0" r="12" stroke="#1e3a5f" strokeWidth="1"
          strokeDasharray="2 4" strokeOpacity="0.5" />
      </g>
      {/* Label manuscrit */}
      <text x="165" y="88" fontFamily="serif" fontSize="10" fill="#1e3a5f" fillOpacity="0.7"
        fontStyle="italic">
        ici
      </text>
      {/* Boussole rudimentaire */}
      <g transform="translate(265, 30)">
        <circle cx="0" cy="0" r="14" stroke="#a08552" strokeWidth="0.8" strokeOpacity="0.4" />
        <text x="-3" y="-5" fontFamily="serif" fontSize="7" fill="#a08552" fillOpacity="0.6">N</text>
        <line x1="0" y1="-10" x2="0" y2="10" stroke="#a08552" strokeWidth="0.8" strokeOpacity="0.4" />
        <line x1="-10" y1="0" x2="10" y2="0" stroke="#a08552" strokeWidth="0.8" strokeOpacity="0.4" />
      </g>
    </svg>
  );
}

export function V3CVisite() {
  return (
    <section className="relative bg-[#f4ede0] py-24 px-8 lg:px-16">
      <div className="absolute top-0 left-0 right-0 border-t-2 border-double border-[#3d2817]/15" />

      <div className="mx-auto max-w-[1440px] grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Plan dessiné */}
        <div className="flex justify-center">
          <PlanSVG />
        </div>

        {/* Texte */}
        <div>
          <h2 className={`${garamond} italic text-[42px] text-[#3d2817] mb-6`}>
            Venir nous voir
          </h2>

          <address className={`${caveat} text-[22px] text-[#1e3a5f] not-italic leading-[1.8] mb-10`}>
            Rua da Boavista, 84<br />
            1200-070 Lisboa<br />
            sur rendez-vous, du mardi au samedi<br />
            10h — 18h
          </address>

          <p className="font-[family-name:var(--font-inter)] text-[14px] font-light text-[#6b4423] leading-relaxed mb-10 max-w-sm">
            L&apos;atelier n&apos;est pas une boutique. C&apos;est un lieu de travail, ouvert à celles et ceux qui viennent avec une intention.
          </p>

          <Link
            href="/fr/contact"
            className={`${garamond} italic text-[20px] text-[#3d2817] underline underline-offset-4 decoration-[#3d2817]/30 hover:decoration-[#3d2817]/70 transition-all`}
          >
            Demander un rendez-vous
          </Link>
        </div>
      </div>

      <div className="mt-16 flex justify-end max-w-[1440px] mx-auto">
        <span className={`${garamond} italic text-[13px] text-[#a08552]`}>p. 06</span>
      </div>

      <div className="absolute bottom-0 left-0 right-0 border-t-2 border-double border-[#3d2817]/15" />
    </section>
  );
}
