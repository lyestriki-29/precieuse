import Image from "next/image";
import Link from "next/link";

const garamond = "font-[family-name:var(--font-eb-garamond)]";
const caveat = "font-[family-name:var(--font-caveat)]";
const inter = "font-[family-name:var(--font-inter)]";

export function V4CHeroE4() {
  return (
    <section className="relative min-h-screen pt-16 overflow-hidden flex flex-col">
      <div aria-hidden className="absolute inset-0">
        <Image
          src="/images/gemmyo.jpg"
          alt=""
          fill
          sizes="100vw"
          priority
          className="object-cover"
          style={{ filter: "blur(48px) saturate(1.45) brightness(0.55)", transform: "scale(1.2)" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 30% 20%, rgba(192,138,72,0.30) 0%, rgba(0,0,0,0) 55%), radial-gradient(ellipse at 80% 90%, rgba(56,28,12,0.55) 0%, rgba(0,0,0,0) 60%), linear-gradient(180deg, rgba(8,4,2,0.35) 0%, rgba(8,4,2,0.55) 100%)",
          }}
        />
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.12] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.1' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1440px] w-full px-8 lg:px-16 py-6 flex items-baseline justify-between border-b border-[#f4d8a0]/15">
        <span className={`${inter} text-[10px] uppercase tracking-[0.4em] text-[#f4d8a0]/70`}>
          Vitrine · décembre · Lisboa
        </span>
        <span className={`${caveat} text-[16px] italic text-[#f4d8a0]`}>
          derrière la vitre —
        </span>
        <span className={`${inter} text-[10px] uppercase tracking-[0.4em] text-[#f4d8a0]/70`}>
          MMXXVI · I
        </span>
      </div>

      <div className="relative z-10 flex-1 flex items-center justify-center px-4 lg:px-12">
        <div className="relative w-full max-w-[1100px] mx-auto motion-safe:animate-[glassRise_1.6s_cubic-bezier(0.2,0.8,0.2,1)_120ms_both]">
          <div
            className="relative px-8 py-12 lg:py-16 border border-[#f4d8a0]/25 overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,240,210,0.10) 0%, rgba(255,240,210,0.04) 50%, rgba(255,240,210,0.12) 100%)",
              backdropFilter: "blur(28px) saturate(1.35)",
              WebkitBackdropFilter: "blur(28px) saturate(1.35)",
              boxShadow:
                "inset 0 1px 0 rgba(255,240,210,0.18), inset 0 -1px 0 rgba(0,0,0,0.25), 0 30px 80px rgba(0,0,0,0.4)",
            }}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 motion-safe:animate-[sweep_6s_ease-in-out_infinite]"
              style={{
                background:
                  "linear-gradient(115deg, transparent 35%, rgba(255,235,190,0.18) 50%, transparent 65%)",
                mixBlendMode: "screen",
              }}
            />

            <h1
              aria-label="Précieuse — joaillerie artisanale, Lisboa"
              className={`${garamond} italic leading-[0.85] tracking-[-0.045em] text-center select-none relative`}
              style={{
                fontSize: "clamp(80px, 14vw, 220px)",
                color: "#fff7e3",
                textShadow:
                  "0 1px 0 rgba(255,255,255,0.45), 0 0 26px rgba(255,225,170,0.3), 0 12px 50px rgba(20,10,4,0.5)",
              }}
            >
              Précieuse
            </h1>
          </div>

          <span
            aria-hidden
            className={`${caveat} italic absolute -top-3 right-6 lg:-top-2 lg:right-10 text-[#f4d8a0] text-[18px] lg:text-[22px] rotate-[-4deg]`}
          >
            ne pas toucher
          </span>
        </div>

        <style>{`
          @keyframes glassRise {
            0% { opacity: 0; transform: translateY(28px); filter: blur(10px); }
            60% { opacity: 1; }
            100% { opacity: 1; transform: translateY(0); filter: blur(0); }
          }
          @keyframes sweep {
            0%, 100% { transform: translateX(-30%); }
            50% { transform: translateX(30%); }
          }
          @keyframes fadeUp {
            0% { opacity: 0; transform: translateY(12px); }
            100% { opacity: 1; transform: translateY(0); }
          }
        `}</style>

        <Link
          href="/fr/v4c/preview/collection"
          className={`group ${garamond} italic absolute bottom-8 left-1/2 -translate-x-1/2 inline-flex items-center gap-3 text-[15px] lg:text-[17px] text-[#fff7e3] px-7 py-3 border border-[#f4d8a0]/55 backdrop-blur-[6px] bg-white/5 hover:bg-[#f4d8a0] hover:text-[#1a0c04] transition-all duration-300 motion-safe:animate-[fadeUp_1.4s_ease-out_900ms_both]`}
        >
          <span>Pousser la porte</span>
          <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
        </Link>
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] w-full px-8 lg:px-16 pb-10">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-4">
            <span className={`${inter} text-[10px] uppercase tracking-[0.4em] text-[#f4d8a0]/65 block`}>
              001 ·
            </span>
            <p className={`${garamond} italic text-[20px] lg:text-[24px] text-[#fff7e3] leading-snug mt-2 drop-shadow-md`}>
              La pierre choisit la main qui la taille.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-3 lg:col-start-7">
            <span className={`${caveat} text-[14px] text-[#f4d8a0] italic`}>
              — un atelier, à Lisbonne
            </span>
            <p className={`${inter} text-[11px] text-[#fff7e3]/75 leading-relaxed mt-3 max-w-[28ch]`}>
              Chaque bague naît d&apos;une commande, d&apos;une main, d&apos;un nom. Aucun stock.
              Aucune répétition.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-2 lg:col-start-11 self-end text-right">
            <span className={`${garamond} italic text-[14px] text-[#f4d8a0] block`}>voir</span>
            <span className={`${inter} text-[10px] uppercase tracking-[0.4em] text-[#f4d8a0]/65 block mt-1`}>
              ↓ collection
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
