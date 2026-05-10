import Image from "next/image";
import Link from "next/link";
import { DecoCornerFrame, ArtDecoFrieze, SunburstFan } from "./_ornaments";

const garamond = "font-[family-name:var(--font-eb-garamond)]";
const caveat = "font-[family-name:var(--font-caveat)]";
const inter = "font-[family-name:var(--font-inter)]";

export function V4CHeroE4b() {
  return (
    <section
      className="relative min-h-screen pt-16 overflow-hidden flex flex-col"
      style={{
        background:
          "radial-gradient(ellipse at 70% 30%, rgba(192,138,72,0.18) 0%, rgba(0,0,0,0) 55%), linear-gradient(180deg, #0e0805 0%, #181008 100%)",
      }}
    >
      <div className="relative z-10 mx-auto max-w-[1440px] w-full px-8 lg:px-16 py-6 flex items-baseline justify-between border-b border-[#f4d8a0]/15">
        <span className={`${inter} text-[10px] uppercase tracking-[0.4em] text-[#f4d8a0]/70`}>Vitrine · décembre · Lisboa</span>
        <span className={`${caveat} text-[16px] italic text-[#f4d8a0]`}>diptyque —</span>
        <span className={`${inter} text-[10px] uppercase tracking-[0.4em] text-[#f4d8a0]/70`}>MMXXVI · I</span>
      </div>

      <div className="relative z-10 flex-1 flex flex-col lg:flex-row items-stretch">
        <figure className="relative w-full lg:w-1/2 aspect-[4/5] lg:aspect-auto motion-safe:animate-[fadeIn_1.6s_ease-out_120ms_both]">
          <Image
            src="/images/bijoux-officiels/eugenie.png"
            alt="Bague Eugénie — la signature Précieuse"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            priority
            className="object-cover"
            style={{ filter: "saturate(1.05) contrast(1.05) brightness(0.95)" }}
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0) 60%)" }} />

          <DecoCornerFrame className="absolute top-4 left-4 w-10 h-10 text-[#f4d8a0]/80 z-10" stroke="#f4d8a0" />
          <DecoCornerFrame className="absolute bottom-4 left-4 w-10 h-10 text-[#f4d8a0]/80 z-10 -scale-y-100" stroke="#f4d8a0" />

          <figcaption className={`${caveat} absolute bottom-6 left-6 text-[18px] italic text-[#f4d8a0] drop-shadow-md`}>
            Eugénie — pièce maîtresse, n° I
          </figcaption>
        </figure>

        <div className="relative w-full lg:w-1/2 flex items-center justify-center px-6 lg:px-12 py-12 lg:py-0 motion-safe:animate-[glassRise_1.6s_cubic-bezier(0.2,0.8,0.2,1)_300ms_both]">
          <SunburstFan
            className="pointer-events-none absolute left-1/2 top-[10%] -translate-x-1/2 w-[360px] max-w-full h-[220px] text-[#f4d8a0] opacity-[0.10]"
            stroke="#f4d8a0"
          />

          <div className="relative w-full max-w-[560px] mx-auto">
            <DecoCornerFrame className="absolute -top-1 -left-1 w-10 h-10 text-[#f4d8a0]/70 z-10" stroke="#f4d8a0" />
            <DecoCornerFrame className="absolute -top-1 -right-1 w-10 h-10 text-[#f4d8a0]/70 z-10 -scale-x-100" stroke="#f4d8a0" />
            <DecoCornerFrame className="absolute -bottom-1 -left-1 w-10 h-10 text-[#f4d8a0]/70 z-10 -scale-y-100" stroke="#f4d8a0" />
            <DecoCornerFrame className="absolute -bottom-1 -right-1 w-10 h-10 text-[#f4d8a0]/70 z-10 rotate-180" stroke="#f4d8a0" />

            <div
              className="relative px-6 py-12 border border-[#f4d8a0]/30 overflow-hidden backdrop-blur-[20px] backdrop-saturate-[130%]"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,240,210,0.08) 0%, rgba(255,240,210,0.03) 50%, rgba(255,240,210,0.10) 100%)",
                boxShadow: "inset 0 1px 0 rgba(255,240,210,0.20), 0 24px 60px rgba(0,0,0,0.4)",
              }}
            >
              <ArtDecoFrieze className="absolute top-2 left-1/2 -translate-x-1/2 w-[70%] h-3 text-[#f4d8a0] opacity-50" stroke="#f4d8a0" />
              <ArtDecoFrieze className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[70%] h-3 text-[#f4d8a0] opacity-50" stroke="#f4d8a0" />

              <h1
                aria-label="Précieuse — joaillerie artisanale, Lisboa"
                className={`${garamond} italic leading-[0.85] tracking-[-0.045em] text-center select-none`}
                style={{
                  fontSize: "clamp(56px, 9vw, 130px)",
                  color: "#fff7e3",
                  textShadow: "0 1px 0 rgba(255,255,255,0.4), 0 0 26px rgba(255,225,170,0.3), 0 12px 50px rgba(20,10,4,0.5)",
                }}
              >
                Précieuse
              </h1>

              <p className={`${garamond} italic text-[18px] lg:text-[20px] text-[#fff7e3]/90 leading-snug text-center mt-6`}>
                La pierre choisit la main qui la taille.
              </p>
              <p className={`${caveat} text-[15px] italic text-[#f4d8a0] text-center mt-2`}>
                — un atelier, à Lisbonne
              </p>
            </div>

            <Link
              href="/fr/v4c/preview/collection"
              className={`group ${garamond} italic mt-6 inline-flex items-center gap-3 text-[15px] lg:text-[17px] text-[#fff7e3] px-7 py-3 border border-[#f4d8a0]/55 backdrop-blur-[6px] bg-white/5 hover:bg-[#f4d8a0] hover:text-[#1a0c04] transition-all duration-300 motion-safe:animate-[fadeUp_1.4s_ease-out_900ms_both]`}
            >
              <span>Pousser la porte</span>
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>

          <style>{`
            @keyframes glassRise { 0% { opacity: 0; transform: translateY(28px); filter: blur(10px); } 60% { opacity: 1; } 100% { opacity: 1; transform: translateY(0); filter: blur(0); } }
            @keyframes fadeIn { 0% { opacity: 0; } 100% { opacity: 1; } }
            @keyframes fadeUp { 0% { opacity: 0; transform: translateY(12px); } 100% { opacity: 1; transform: translateY(0); } }
          `}</style>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] w-full px-8 lg:px-16 pb-10 pt-6 border-t border-[#f4d8a0]/10">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-4">
            <span className={`${inter} text-[10px] uppercase tracking-[0.4em] text-[#f4d8a0]/65 block`}>001 ·</span>
            <p className={`${garamond} italic text-[18px] text-[#fff7e3] leading-snug mt-2`}>
              Une pièce. Une main. Un nom.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-3 lg:col-start-7">
            <span className={`${caveat} text-[14px] text-[#f4d8a0] italic`}>— sur commande uniquement</span>
            <p className={`${inter} text-[11px] text-[#fff7e3]/75 leading-relaxed mt-3 max-w-[28ch]`}>
              Aucun stock. Aucune répétition. Chaque bague naît d&apos;un dialogue avec celle qui la portera.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-2 lg:col-start-11 self-end text-right">
            <span className={`${garamond} italic text-[14px] text-[#f4d8a0] block`}>voir</span>
            <span className={`${inter} text-[10px] uppercase tracking-[0.4em] text-[#f4d8a0]/65 block mt-1`}>↓ collection</span>
          </div>
        </div>
      </div>
    </section>
  );
}
