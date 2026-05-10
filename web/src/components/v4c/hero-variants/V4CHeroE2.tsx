import Link from "next/link";

const garamond = "font-[family-name:var(--font-eb-garamond)]";
const caveat = "font-[family-name:var(--font-caveat)]";
const inter = "font-[family-name:var(--font-inter)]";

export function V4CHeroE2() {
  return (
    <section
      className="relative min-h-screen pt-16 overflow-hidden flex flex-col"
      style={{
        background:
          "radial-gradient(ellipse at 50% 20%, #f8f1e0 0%, #f0e6cf 60%, #e3d4af 100%)",
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.16] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 320 320' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='2'/%3E%3CfeColorMatrix values='0 0 0 0 0.30 0 0 0 0 0.22 0 0 0 0 0.13 0 0 0 0.55 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent 0 31px, #2c1f12 31px 32px)",
        }}
      />

      <div className="relative mx-auto max-w-[1440px] w-full px-8 lg:px-16 py-6 flex items-baseline justify-between border-b border-[#2c1f12]/20">
        <span className={`${inter} text-[10px] uppercase tracking-[0.4em] text-[#2c1f12]/65`}>
          Carnet de la maison · feuillet I
        </span>
        <span className={`${caveat} text-[16px] text-[#7a3324] italic`}>
          ex libris ·
        </span>
        <span className={`${inter} text-[10px] uppercase tracking-[0.4em] text-[#2c1f12]/65`}>
          Lisboa, le V mai MMXXVI
        </span>
      </div>

      <div className="relative flex-1 flex items-center justify-center px-4 lg:px-12">
        <svg
          viewBox="0 0 1200 400"
          className="w-full max-w-[1100px] h-auto select-none"
          aria-label="Précieuse — joaillerie artisanale, Lisboa"
        >
          <defs>
            <linearGradient id="ink" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1f140a" />
              <stop offset="100%" stopColor="#3d2614" />
            </linearGradient>
          </defs>
          <text
            x="50%"
            y="62%"
            textAnchor="middle"
            className={`${caveat} motion-safe:[animation:inkDraw_3.2s_cubic-bezier(0.5,0,0.3,1)_200ms_both]`}
            fontSize="320"
            fontStyle="italic"
            fill="url(#ink)"
            stroke="#1f140a"
            strokeWidth="1"
            style={{
              fontVariantLigatures: "common-ligatures",
              strokeDasharray: 10000,
              strokeDashoffset: 10000,
            }}
          >
            Précieuse
          </text>
        </svg>

        <style>{`
          @keyframes inkDraw {
            0% { stroke-dashoffset: 10000; fill-opacity: 0; }
            60% { stroke-dashoffset: 0; fill-opacity: 0; }
            100% { stroke-dashoffset: 0; fill-opacity: 1; }
          }
          @keyframes wax {
            0% { opacity: 0; transform: scale(0.5) rotate(-18deg); }
            100% { opacity: 1; transform: scale(1) rotate(-9deg); }
          }
          @keyframes feather {
            0% { opacity: 0; transform: translateX(-12px); }
            100% { opacity: 1; transform: translateX(0); }
          }
        `}</style>

        <div
          aria-hidden
          className="absolute left-8 lg:left-16 top-[18%] border border-[#2c1f12]/45 px-4 py-3 max-w-[200px] motion-safe:animate-[feather_1.2s_ease-out_2200ms_both]"
          style={{ backgroundColor: "rgba(248,241,224,0.6)" }}
        >
          <span className={`${inter} text-[8px] uppercase tracking-[0.45em] text-[#2c1f12]/60 block`}>
            ex libris
          </span>
          <span className={`${garamond} italic text-[18px] text-[#2c1f12] block mt-1 leading-tight`}>
            Eméline Andrade
          </span>
          <span className={`${caveat} text-[13px] text-[#7a3324] italic block mt-0.5`}>
            joaillière, Lisboa
          </span>
        </div>

        <div
          className="absolute right-12 lg:right-24 top-[22%] w-[78px] h-[78px] lg:w-[96px] lg:h-[96px] rounded-full flex items-center justify-center motion-safe:animate-[wax_1.2s_cubic-bezier(0.2,0.8,0.2,1)_2400ms_both]"
          aria-hidden
          style={{
            background:
              "radial-gradient(circle at 35% 28%, #b54032 0%, #7a3324 60%, #4a1a10 100%)",
            boxShadow:
              "inset -5px -7px 12px rgba(0,0,0,0.4), inset 5px 5px 10px rgba(255,170,160,0.25), 0 6px 14px rgba(74,26,16,0.4)",
          }}
        >
          <span className={`${garamond} italic text-[28px] lg:text-[34px] text-[#f4d8b5]/85`}>
            ℘
          </span>
        </div>

        <Link
          href="/fr/v4c/preview/collection"
          className={`group ${garamond} italic absolute bottom-8 left-1/2 -translate-x-1/2 inline-flex items-center gap-3 text-[15px] lg:text-[17px] text-[#1f140a] px-7 py-3 border border-[#1f140a]/45 hover:bg-[#1f140a] hover:text-[#f8f1e0] transition-all duration-300 motion-safe:animate-[feather_1.4s_ease-out_2600ms_both]`}
        >
          <span>Tourner la page</span>
          <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
        </Link>
      </div>

      <div className="relative mx-auto max-w-[1440px] w-full px-8 lg:px-16 pb-10">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-4">
            <span className={`${inter} text-[10px] uppercase tracking-[0.4em] text-[#2c1f12]/55 block`}>
              feuillet · 001
            </span>
            <p className={`${garamond} italic text-[20px] lg:text-[24px] text-[#1f140a] leading-snug mt-2`}>
              La pierre choisit la main qui la taille.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-3 lg:col-start-7">
            <span className={`${caveat} text-[14px] text-[#7a3324] italic`}>
              — un atelier, à Lisbonne
            </span>
            <p className={`${inter} text-[11px] text-[#2c1f12]/75 leading-relaxed mt-3 max-w-[28ch]`}>
              Chaque bague naît d&apos;une commande, d&apos;une main, d&apos;un nom. Aucun stock.
              Aucune répétition.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-2 lg:col-start-11 self-end text-right">
            <span className={`${garamond} italic text-[14px] text-[#7a3324] block`}>voir</span>
            <span className={`${inter} text-[10px] uppercase tracking-[0.4em] text-[#2c1f12]/55 block mt-1`}>
              ↓ collection
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
