import Image from "next/image";
import Link from "next/link";
import { BrilliantCutScheme, DecoCornerFrame, ArtDecoFrieze, SunburstFan } from "./_ornaments";

const garamond = "font-[family-name:var(--font-eb-garamond)]";
const caveat = "font-[family-name:var(--font-caveat)]";
const inter = "font-[family-name:var(--font-inter)]";

const VITRINE = [
  { src: "/images/bijoux-officiels/josephine.jpg", name: "Joséphine", pos: "top-[16%] left-[4%] lg:left-[6%]", size: "w-[140px] h-[180px] lg:w-[180px] lg:h-[240px]", rot: "-rotate-3", delay: "300ms" },
  { src: "/images/bijoux-officiels/aurore.jpg",    name: "Aurore",    pos: "top-[58%] left-[3%] lg:left-[5%]", size: "w-[130px] h-[170px] lg:w-[170px] lg:h-[220px]", rot: "rotate-2",  delay: "500ms" },
  { src: "/images/bijoux-officiels/louise.jpg",    name: "Louise",    pos: "top-[14%] right-[4%] lg:right-[6%]", size: "w-[140px] h-[180px] lg:w-[180px] lg:h-[240px]", rot: "rotate-3",  delay: "700ms" },
  { src: "/images/bijoux-officiels/thelma.jpg",    name: "Thelma",    pos: "top-[60%] right-[3%] lg:right-[5%]", size: "w-[130px] h-[170px] lg:w-[170px] lg:h-[220px]", rot: "-rotate-2", delay: "900ms" },
];

export function V4CHeroE4a() {
  return (
    <section className="relative min-h-screen pt-16 overflow-hidden flex flex-col">
      <div aria-hidden="true" className="absolute inset-0">
        <Image
          src="/images/gemmyo.jpg"
          alt=""
          fill
          sizes="100vw"
          priority
          className="object-cover"
          style={{ filter: "blur(10px) saturate(1.35) brightness(0.55)", transform: "scale(1.06)" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 30% 20%, rgba(192,138,72,0.30) 0%, rgba(0,0,0,0) 55%), radial-gradient(ellipse at 80% 90%, rgba(56,28,12,0.55) 0%, rgba(0,0,0,0) 60%), linear-gradient(180deg, rgba(8,4,2,0.35) 0%, rgba(8,4,2,0.62) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] w-full px-8 lg:px-16 py-6 flex items-baseline justify-between border-b border-[#f4d8a0]/15">
        <span className={`${inter} text-[10px] uppercase tracking-[0.4em] text-[#f4d8a0]/70`}>Vitrine · décembre · Lisboa</span>
        <span className={`${caveat} text-[16px] italic text-[#f4d8a0]`}>derrière la vitre —</span>
        <span className={`${inter} text-[10px] uppercase tracking-[0.4em] text-[#f4d8a0]/70`}>MMXXVI · I</span>
      </div>

      <SunburstFan className="pointer-events-none absolute z-[5] left-1/2 top-[8%] -translate-x-1/2 w-[420px] max-w-full h-[260px] text-[#f4d8a0] opacity-[0.10]" stroke="#f4d8a0" />

      {VITRINE.map((v) => (
        <figure
          key={v.src}
          className={`absolute z-[8] ${v.pos} ${v.size} ${v.rot} motion-safe:animate-[vitrineRise_1.4s_cubic-bezier(0.2,0.8,0.2,1)_both]`}
          style={{ animationDelay: v.delay }}
        >
          <div
            className="relative w-full h-full overflow-hidden border border-[#f4d8a0]/45"
            style={{
              boxShadow:
                "0 18px 36px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,235,190,0.25), inset 0 -1px 0 rgba(0,0,0,0.4)",
              background: "rgba(20,10,4,0.4)",
            }}
          >
            <Image src={v.src} alt={v.name} fill sizes="240px" className="object-cover" style={{ filter: "saturate(1.05) brightness(0.95)" }} />
            <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(0,0,0,0) 60%, rgba(8,4,2,0.55) 100%)" }} />
            <figcaption className={`${caveat} absolute bottom-2 left-3 right-3 text-[14px] italic text-[#f4d8a0] drop-shadow-md`}>{v.name}</figcaption>
          </div>
        </figure>
      ))}

      <div className="relative z-10 flex-1 flex items-center justify-center px-4 lg:px-12">
        <div className="relative w-full max-w-[760px] mx-auto motion-safe:animate-[glassRise_1.6s_cubic-bezier(0.2,0.8,0.2,1)_120ms_both]">
          <DecoCornerFrame className="absolute -top-1 -left-1 w-12 h-12 text-[#f4d8a0]/70 z-10" stroke="#f4d8a0" />
          <DecoCornerFrame className="absolute -top-1 -right-1 w-12 h-12 text-[#f4d8a0]/70 z-10 -scale-x-100" stroke="#f4d8a0" />
          <DecoCornerFrame className="absolute -bottom-1 -left-1 w-12 h-12 text-[#f4d8a0]/70 z-10 -scale-y-100" stroke="#f4d8a0" />
          <DecoCornerFrame className="absolute -bottom-1 -right-1 w-12 h-12 text-[#f4d8a0]/70 z-10 rotate-180" stroke="#f4d8a0" />

          <div
            className="relative px-8 py-12 lg:py-16 border border-[#f4d8a0]/30 overflow-hidden backdrop-blur-[28px] backdrop-saturate-[135%]"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,240,210,0.10) 0%, rgba(255,240,210,0.04) 50%, rgba(255,240,210,0.12) 100%)",
              boxShadow:
                "inset 0 1px 0 rgba(255,240,210,0.22), inset 0 -1px 0 rgba(0,0,0,0.3), 0 30px 80px rgba(0,0,0,0.5)",
            }}
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 motion-safe:animate-[sweep_6s_ease-in-out_infinite]"
              style={{ background: "linear-gradient(115deg, transparent 35%, rgba(255,235,190,0.18) 50%, transparent 65%)", mixBlendMode: "screen" }}
            />
            <ArtDecoFrieze className="absolute top-3 left-1/2 -translate-x-1/2 w-[60%] h-3 text-[#f4d8a0] opacity-50" stroke="#f4d8a0" />
            <ArtDecoFrieze className="absolute bottom-3 left-1/2 -translate-x-1/2 w-[60%] h-3 text-[#f4d8a0] opacity-50" stroke="#f4d8a0" />

            <h1
              aria-label="Précieuse — joaillerie artisanale, Lisboa"
              className={`${garamond} italic leading-[0.85] tracking-[-0.045em] text-center select-none relative`}
              style={{
                fontSize: "clamp(64px, 11vw, 180px)",
                color: "#fff7e3",
                textShadow: "0 1px 0 rgba(255,255,255,0.45), 0 0 26px rgba(255,225,170,0.3), 0 12px 50px rgba(20,10,4,0.5)",
              }}
            >
              Précieuse
            </h1>
          </div>

          <span aria-hidden="true" className={`${caveat} italic absolute -top-3 right-6 lg:-top-2 lg:right-10 text-[#f4d8a0] text-[18px] lg:text-[22px] rotate-[-4deg]`}>
            ne pas toucher
          </span>
        </div>

        <style>{`
          @keyframes glassRise { 0% { opacity: 0; transform: translateY(28px); filter: blur(10px); } 60% { opacity: 1; } 100% { opacity: 1; transform: translateY(0); filter: blur(0); } }
          @keyframes sweep { 0%, 100% { transform: translateX(-30%); } 50% { transform: translateX(30%); } }
          @keyframes fadeUp { 0% { opacity: 0; transform: translateY(12px); } 100% { opacity: 1; transform: translateY(0); } }
          @keyframes vitrineRise { 0% { opacity: 0; transform: translateY(40px) scale(0.94); } 100% { opacity: 1; transform: translateY(0) scale(1); } }
        `}</style>

        <Link
          href="/fr/v4c/preview/collection"
          className={`group ${garamond} italic absolute bottom-8 left-1/2 -translate-x-1/2 inline-flex items-center gap-3 text-[15px] lg:text-[17px] text-[#fff7e3] px-7 py-3 border border-[#f4d8a0]/55 backdrop-blur-[6px] bg-white/5 hover:bg-[#f4d8a0] hover:text-[#1a0c04] transition-all duration-300 motion-safe:animate-[fadeUp_1.4s_ease-out_1100ms_both]`}
        >
          <span>Pousser la porte</span>
          <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
        </Link>
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] w-full px-8 lg:px-16 pb-10">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-4">
            <span className={`${inter} text-[10px] uppercase tracking-[0.4em] text-[#f4d8a0]/65 block`}>001 ·</span>
            <p className={`${garamond} italic text-[20px] lg:text-[24px] text-[#fff7e3] leading-snug mt-2 drop-shadow-md`}>La pierre choisit la main qui la taille.</p>
          </div>
          <div className="col-span-12 lg:col-span-3 lg:col-start-7">
            <span className={`${caveat} text-[14px] text-[#f4d8a0] italic`}>— un atelier, à Lisbonne</span>
            <p className={`${inter} text-[11px] text-[#fff7e3]/75 leading-relaxed mt-3 max-w-[28ch]`}>Chaque bague naît d&apos;une commande, d&apos;une main, d&apos;un nom. Aucun stock. Aucune répétition.</p>
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
