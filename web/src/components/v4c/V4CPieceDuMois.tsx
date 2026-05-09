import Image from "next/image";
import Link from "next/link";

const garamond = "font-[family-name:var(--font-eb-garamond)]";
const caveat = "font-[family-name:var(--font-caveat)]";

export function V4CPieceDuMois() {
  return (
    <section className="relative bg-[#2a1d10] py-0 overflow-hidden">
      <div className="mx-auto max-w-[1440px] flex flex-col lg:flex-row min-h-[70vh]">
        {/* Photo macro plein gauche — 70% */}
        <div className="relative w-full lg:w-[70%] aspect-[4/3] lg:aspect-auto min-h-[400px]">
          <Image
            src="/images/bijoux-officiels/josephine.jpg"
            alt="Bague Joséphine — pièce du mois Précieuse"
            fill
            sizes="(max-width: 1024px) 100vw, 70vw"
            className="object-cover opacity-90"
          />
          {/* Overlay léger */}
          <div className="absolute inset-0 bg-[#2a1d10]/20" />
          {/* Esquisse ovale */}
          <svg
            aria-hidden
            className="pointer-events-none absolute inset-0 w-full h-full"
            viewBox="0 0 700 500" fill="none"
          >
            <ellipse cx="350" cy="250" rx="280" ry="200"
              stroke="#a08552" strokeWidth="0.8" strokeDasharray="5 12" strokeOpacity="0.25" />
          </svg>
        </div>

        {/* Bloc texte droite — 30% */}
        <div className="w-full lg:w-[30%] flex flex-col justify-center px-8 py-16 lg:px-12">
          <span className={`${caveat} text-[16px] text-[#a08552] mb-8 block`}>
            — pièce du mois, mai 2026
          </span>

          <h2 className={`${garamond} italic text-[#f4ede0] leading-none mb-4`}
            style={{ fontSize: "clamp(40px, 4vw, 56px)" }}>
            Joséphine
          </h2>

          <p className={`${caveat} text-[19px] mb-8 leading-relaxed`} style={{ color: "#7ca0cc" }}>
            La bague entourage intemporelle — halo de diamants pavés, lumière absolue.
          </p>

          <p className="font-[family-name:var(--font-inter)] text-[13px] font-light text-[#f4ede0]/60 leading-relaxed mb-6 max-w-[220px]">
            Or 19kt · Diamants pavés GVS · Pierre centrale au choix de la cliente.
          </p>

          <p className={`${garamond} italic text-[22px] text-[#a08552] mb-10`}>
            À partir de 2 500 €
          </p>

          <Link
            href="/fr/collection/josephine"
            className={`${garamond} italic text-[18px] text-[#f4ede0] underline underline-offset-4 decoration-[#f4ede0]/30 hover:decoration-[#f4ede0]/80 transition-all`}
          >
            demander à voir
          </Link>

          <div className="mt-16">
            <span className={`${garamond} italic text-[13px] text-[#a08552]`}>p. 06</span>
          </div>
        </div>
      </div>
    </section>
  );
}
