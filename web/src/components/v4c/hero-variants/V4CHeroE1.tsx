import Link from "next/link";

const garamond = "font-[family-name:var(--font-eb-garamond)]";
const caveat = "font-[family-name:var(--font-caveat)]";
const inter = "font-[family-name:var(--font-inter)]";

export function V4CHeroE1() {
  return (
    <section
      className="relative min-h-screen pt-16 overflow-hidden flex flex-col"
      style={{
        background:
          "radial-gradient(ellipse at 50% 35%, #f6ecd6 0%, #ecdfc4 55%, #d9c89d 100%)",
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.18] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3CfeColorMatrix values='0 0 0 0 0.35 0 0 0 0 0.27 0 0 0 0 0.18 0 0 0 0.6 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent 0 39px, #4a3a2c 39px 40px), repeating-linear-gradient(90deg, transparent 0 39px, #4a3a2c 39px 40px)",
        }}
      />

      <div className="relative mx-auto max-w-[1440px] w-full px-8 lg:px-16 py-6 flex items-baseline justify-between border-b border-[#4a3a2c]/25">
        <span className={`${inter} text-[10px] uppercase tracking-[0.4em] text-[#4a3a2c]/70`}>
          Maison Précieuse · Lisboa · MMXXVI
        </span>
        <span className={`${caveat} text-[16px] text-[#8a1c2c] italic`}>
          poinçon n°  I
        </span>
        <span className={`${inter} text-[10px] uppercase tracking-[0.4em] text-[#4a3a2c]/70`}>
          frappe à la main
        </span>
      </div>

      <div className="relative flex-1 flex items-center justify-center px-4 lg:px-12">
        <h1
          aria-label="Précieuse — joaillerie artisanale, Lisboa"
          className={`${garamond} italic leading-[0.8] tracking-[-0.045em] text-center select-none motion-safe:animate-[stampDown_1.6s_cubic-bezier(0.2,0.8,0.2,1)_120ms_both]`}
          style={{
            fontSize: "clamp(110px, 20vw, 320px)",
            color: "#3a2a1c",
            textShadow:
              "0 1px 0 rgba(255,250,235,0.55), 0 -1px 0 rgba(58,42,28,0.45), 1px 0 1px rgba(255,250,235,0.4), -1px 0 1px rgba(58,42,28,0.4), 0 6px 14px rgba(58,42,28,0.18)",
            filter: "url(#emboss)",
          }}
        >
          Précieuse
        </h1>

        <svg className="absolute" width="0" height="0" aria-hidden>
          <filter id="emboss">
            <feGaussianBlur in="SourceAlpha" stdDeviation="1" />
            <feSpecularLighting result="spec" specularExponent="20" lightingColor="#fff5e0">
              <feDistantLight azimuth="135" elevation="60" />
            </feSpecularLighting>
            <feComposite in="spec" in2="SourceAlpha" operator="in" result="specCut" />
            <feComposite in="SourceGraphic" in2="specCut" operator="arithmetic" k1="0" k2="1" k3="0.45" k4="0" />
          </filter>
        </svg>

        <style>{`
          @keyframes stampDown {
            0% { opacity: 0; transform: scale(1.06); filter: blur(6px); }
            50% { opacity: 1; }
            100% { opacity: 1; transform: scale(1); filter: blur(0); }
          }
          @keyframes wax {
            0% { opacity: 0; transform: scale(0.6) rotate(-12deg); }
            100% { opacity: 1; transform: scale(1) rotate(-6deg); }
          }
        `}</style>

        <div
          aria-hidden
          className="absolute right-12 lg:right-24 top-[58%] w-[88px] h-[88px] lg:w-[110px] lg:h-[110px] rounded-full flex items-center justify-center motion-safe:animate-[wax_1.2s_cubic-bezier(0.2,0.8,0.2,1)_900ms_both]"
          style={{
            background:
              "radial-gradient(circle at 35% 30%, #c43844 0%, #8a1c2c 55%, #5e0e1c 100%)",
            boxShadow:
              "inset -6px -8px 14px rgba(0,0,0,0.45), inset 6px 6px 12px rgba(255,180,180,0.25), 0 8px 18px rgba(58,12,18,0.4)",
          }}
        >
          <span className={`${garamond} italic text-[36px] lg:text-[44px] text-[#f4d8b5]/85`}>
            P
          </span>
        </div>

        <Link
          href="/fr/v4c/preview/collection"
          className={`group ${garamond} italic absolute bottom-8 left-1/2 -translate-x-1/2 inline-flex items-center gap-3 text-[15px] lg:text-[17px] text-[#3a2a1c] px-7 py-3 border border-[#3a2a1c]/45 hover:bg-[#3a2a1c] hover:text-[#f4ebd6] transition-all duration-300 motion-safe:animate-[stampDown_1.4s_cubic-bezier(0.2,0.8,0.2,1)_900ms_both]`}
        >
          <span>Découvrir le carnet</span>
          <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
        </Link>
      </div>

      <div className="relative mx-auto max-w-[1440px] w-full px-8 lg:px-16 pb-10">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-4">
            <span className={`${inter} text-[10px] uppercase tracking-[0.4em] text-[#4a3a2c]/55 block`}>
              001 ·
            </span>
            <p className={`${garamond} italic text-[20px] lg:text-[24px] text-[#3a2a1c] leading-snug mt-2`}>
              La pierre choisit la main qui la taille.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-3 lg:col-start-7">
            <span className={`${caveat} text-[14px] text-[#8a1c2c] italic`}>
              — un atelier, à Lisbonne
            </span>
            <p className={`${inter} text-[11px] text-[#4a3a2c]/75 leading-relaxed mt-3 max-w-[28ch]`}>
              Chaque bague naît d&apos;une commande, d&apos;une main, d&apos;un nom. Aucun stock.
              Aucune répétition.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-2 lg:col-start-11 self-end text-right">
            <span className={`${garamond} italic text-[14px] text-[#8a1c2c] block`}>
              voir
            </span>
            <span className={`${inter} text-[10px] uppercase tracking-[0.4em] text-[#4a3a2c]/55 block mt-1`}>
              ↓ collection
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
