import Image from "next/image";
import Link from "next/link";
import { DecoCornerFrame, ArtDecoFrieze, SunburstFan, BrilliantCutScheme } from "./_ornaments";

const garamond = "font-[family-name:var(--font-eb-garamond)]";
const caveat = "font-[family-name:var(--font-caveat)]";
const inter = "font-[family-name:var(--font-inter)]";

const ACCENTS = [
  { src: "/images/bijoux-officiels/josephine.jpg", name: "Joséphine", style: "hidden lg:block top-[14%] right-[2%] w-[150px] h-[195px] -rotate-3", delay: "500ms" },
  { src: "/images/bijoux-officiels/aurore.jpg",    name: "Aurore",    style: "hidden lg:block bottom-[18%] right-[10%] w-[140px] h-[180px] rotate-2",  delay: "750ms" },
];

export function V4CHeroE4c() {
  return (
    <section className="relative min-h-screen pt-16 overflow-hidden flex flex-col">
      <div aria-hidden="true" className="absolute inset-0">
        <Image
          src="/images/gemmyo.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          style={{ filter: "blur(14px) saturate(1.4) brightness(0.5)", transform: "scale(1.08)" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 25% 30%, rgba(192,138,72,0.22) 0%, rgba(0,0,0,0) 55%), linear-gradient(180deg, rgba(8,4,2,0.45) 0%, rgba(8,4,2,0.65) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] w-full px-8 lg:px-16 py-6 flex items-baseline justify-between border-b border-[#f4d8a0]/15">
        <span className={`${inter} text-[10px] uppercase tracking-[0.4em] text-[#f4d8a0]/70`}>Vitrine · décembre · Lisboa</span>
        <span className={`${caveat} text-[16px] italic text-[#f4d8a0]`}>pièce maîtresse —</span>
        <span className={`${inter} text-[10px] uppercase tracking-[0.4em] text-[#f4d8a0]/70`}>MMXXVI · I</span>
      </div>

      <div className="relative z-10 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 px-6 lg:px-16 py-10 lg:py-14">
        <SunburstFan className="pointer-events-none absolute left-[10%] top-[14%] w-[300px] max-w-full h-[180px] text-[#f4d8a0] opacity-[0.10]" stroke="#f4d8a0" />
        <BrilliantCutScheme className="pointer-events-none absolute left-[6%] bottom-[14%] w-[180px] max-w-full h-[180px] text-[#f4d8a0] opacity-[0.08]" stroke="#f4d8a0" />

        <div className="col-span-1 lg:col-span-7 relative flex flex-col justify-center motion-safe:animate-[glassRise_1.6s_cubic-bezier(0.2,0.8,0.2,1)_120ms_both]">
          <div className="relative max-w-[640px]">
            <DecoCornerFrame className="absolute -top-2 -left-2 w-9 h-9 text-[#f4d8a0]/70" stroke="#f4d8a0" />
            <DecoCornerFrame className="absolute -bottom-2 -left-2 w-9 h-9 text-[#f4d8a0]/70 -scale-y-100" stroke="#f4d8a0" />

            <div
              className="relative px-6 py-10 border border-[#f4d8a0]/30 overflow-hidden backdrop-blur-[22px] backdrop-saturate-[130%]"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,240,210,0.08) 0%, rgba(255,240,210,0.03) 50%, rgba(255,240,210,0.10) 100%)",
                boxShadow: "inset 0 1px 0 rgba(255,240,210,0.20), 0 24px 60px rgba(0,0,0,0.4)",
              }}
            >
              <ArtDecoFrieze className="absolute top-2 left-1/2 -translate-x-1/2 w-[60%] h-3 text-[#f4d8a0] opacity-50" stroke="#f4d8a0" />

              <h1
                aria-label="Précieuse — joaillerie artisanale, Lisboa"
                className={`${garamond} italic leading-[0.86] tracking-[-0.045em] select-none`}
                style={{
                  fontSize: "clamp(64px, 10vw, 160px)",
                  color: "#fff7e3",
                  textShadow: "0 1px 0 rgba(255,255,255,0.4), 0 0 26px rgba(255,225,170,0.3), 0 12px 50px rgba(20,10,4,0.5)",
                }}
              >
                Précieuse
              </h1>

              <p className={`${garamond} italic text-[18px] lg:text-[22px] text-[#fff7e3]/95 leading-snug mt-6 max-w-[36ch]`}>
                La pierre choisit la main qui la taille.
              </p>
              <p className={`${caveat} text-[16px] italic text-[#f4d8a0] mt-2`}>
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
        </div>

        <figure className="col-span-1 lg:col-span-5 relative aspect-[3/4] lg:aspect-auto motion-safe:animate-[fadeIn_1.6s_ease-out_300ms_both]">
          <Image
            src="/images/bijoux-officiels/eugenie.png"
            alt="Bague Eugénie — la signature Précieuse"
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            priority
            className="object-cover"
            style={{ filter: "saturate(1.05) contrast(1.05) brightness(0.95)" }}
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(0,0,0,0) 60%, rgba(8,4,2,0.55) 100%)" }} />

          <DecoCornerFrame className="absolute top-3 left-3 w-9 h-9 text-[#f4d8a0]/80" stroke="#f4d8a0" />
          <DecoCornerFrame className="absolute top-3 right-3 w-9 h-9 text-[#f4d8a0]/80 -scale-x-100" stroke="#f4d8a0" />
          <DecoCornerFrame className="absolute bottom-3 left-3 w-9 h-9 text-[#f4d8a0]/80 -scale-y-100" stroke="#f4d8a0" />
          <DecoCornerFrame className="absolute bottom-3 right-3 w-9 h-9 text-[#f4d8a0]/80 rotate-180" stroke="#f4d8a0" />

          <figcaption className={`${caveat} absolute bottom-6 left-6 text-[18px] italic text-[#f4d8a0] drop-shadow-md`}>
            Eugénie — n° I
          </figcaption>
        </figure>

        {ACCENTS.map((a) => (
          <figure
            key={a.src}
            className={`absolute z-[8] ${a.style} motion-safe:animate-[vitrineRise_1.4s_cubic-bezier(0.2,0.8,0.2,1)_both]`}
            style={{ animationDelay: a.delay }}
          >
            <div
              className="relative w-full h-full overflow-hidden border border-[#f4d8a0]/45"
              style={{ boxShadow: "0 18px 36px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,235,190,0.25)" }}
            >
              <Image src={a.src} alt={a.name} fill sizes="200px" className="object-cover" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(0,0,0,0) 60%, rgba(8,4,2,0.55) 100%)" }} />
              <figcaption className={`${caveat} absolute bottom-1.5 left-2 right-2 text-[12px] italic text-[#f4d8a0] drop-shadow-md`}>{a.name}</figcaption>
            </div>
          </figure>
        ))}
      </div>

      <style>{`
        @keyframes glassRise { 0% { opacity: 0; transform: translateY(28px); filter: blur(10px); } 60% { opacity: 1; } 100% { opacity: 1; transform: translateY(0); filter: blur(0); } }
        @keyframes fadeIn { 0% { opacity: 0; } 100% { opacity: 1; } }
        @keyframes fadeUp { 0% { opacity: 0; transform: translateY(12px); } 100% { opacity: 1; transform: translateY(0); } }
        @keyframes vitrineRise { 0% { opacity: 0; transform: translateY(40px) scale(0.94); } 100% { opacity: 1; transform: translateY(0) scale(1); } }
      `}</style>

      <div className="relative z-10 mx-auto max-w-[1440px] w-full px-8 lg:px-16 pb-10 pt-4 border-t border-[#f4d8a0]/10">
        <div className="flex items-baseline justify-between gap-6 flex-wrap">
          <span className={`${inter} text-[10px] uppercase tracking-[0.4em] text-[#f4d8a0]/65`}>001 · sur commande uniquement</span>
          <span className={`${caveat} text-[14px] text-[#f4d8a0] italic`}>aucun stock · aucune répétition</span>
          <span className={`${inter} text-[10px] uppercase tracking-[0.4em] text-[#f4d8a0]/65`}>↓ collection</span>
        </div>
      </div>
    </section>
  );
}
