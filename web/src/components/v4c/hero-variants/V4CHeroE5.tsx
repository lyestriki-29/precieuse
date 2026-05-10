import Link from "next/link";

const garamond = "font-[family-name:var(--font-eb-garamond)]";
const caveat = "font-[family-name:var(--font-caveat)]";
const inter = "font-[family-name:var(--font-inter)]";

const GEMS = [
  { ch: "P", name: "émeraude", grad: "linear-gradient(135deg,#1d5c3d 0%,#4ac28a 50%,#0f3a26 100%)" },
  { ch: "r", name: "saphir",   grad: "linear-gradient(135deg,#14315c 0%,#4a8be8 50%,#0a2244 100%)" },
  { ch: "é", name: "rubis",    grad: "linear-gradient(135deg,#5c0a14 0%,#c8425c 50%,#3a050a 100%)" },
  { ch: "c", name: "diamant",  grad: "linear-gradient(135deg,#b8d4dd 0%,#ffffff 50%,#88b0bd 100%)" },
  { ch: "i", name: "péridot",  grad: "linear-gradient(135deg,#6a8a14 0%,#b8d942 50%,#4a6a0a 100%)" },
  { ch: "e", name: "améthyste",grad: "linear-gradient(135deg,#4a2870 0%,#a87fd6 50%,#2a1648 100%)" },
  { ch: "u", name: "onyx",     grad: "linear-gradient(135deg,#1a1a20 0%,#5a5a64 50%,#08080d 100%)" },
  { ch: "s", name: "topaze",   grad: "linear-gradient(135deg,#8a5c0a 0%,#f0c040 50%,#5a3a05 100%)" },
  { ch: "e", name: "citrine",  grad: "linear-gradient(135deg,#8a4a14 0%,#e89940 50%,#5a2e0a 100%)" },
];

export function V4CHeroE5() {
  return (
    <section
      className="relative min-h-screen pt-16 overflow-hidden flex flex-col"
      style={{
        background:
          "radial-gradient(ellipse at 50% 30%, #f7eed5 0%, #ecdfb8 60%, #d8c594 100%)",
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.16] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='2'/%3E%3CfeColorMatrix values='0 0 0 0 0.30 0 0 0 0 0.22 0 0 0 0 0.13 0 0 0 0.55 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, transparent 0 159px, #2c1f12 159px 160px)",
        }}
      />

      <div className="relative mx-auto max-w-[1440px] w-full px-8 lg:px-16 py-6 flex items-baseline justify-between border-b border-[#2c1f12]/20">
        <span className={`${inter} text-[10px] uppercase tracking-[0.4em] text-[#2c1f12]/65`}>
          Dictionnaire des gemmes · planche I
        </span>
        <span className={`${caveat} text-[16px] italic text-[#7a3324]`}>
          neuf pierres —
        </span>
        <span className={`${inter} text-[10px] uppercase tracking-[0.4em] text-[#2c1f12]/65`}>
          MMXXVI · Lisboa
        </span>
      </div>

      <div className="relative flex-1 flex flex-col items-center justify-center px-4 lg:px-12 gap-6">
        <h1
          aria-label="Précieuse — joaillerie artisanale, Lisboa"
          className={`${garamond} italic leading-[0.82] tracking-[-0.04em] flex items-baseline justify-center select-none`}
          style={{ fontSize: "clamp(80px, 16vw, 240px)" }}
        >
          {GEMS.map((g, i) => (
            <span
              key={`${g.name}-${i}`}
              className="inline-block motion-safe:animate-[gemReveal_1.2s_cubic-bezier(0.2,0.8,0.2,1)_both]"
              style={{
                backgroundImage: g.grad,
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                WebkitTextFillColor: "transparent",
                animationDelay: `${120 + i * 110}ms`,
                filter: "drop-shadow(0 4px 14px rgba(44,31,18,0.18))",
              }}
            >
              {g.ch}
            </span>
          ))}
        </h1>

        <div className="flex flex-wrap items-baseline justify-center gap-x-3 gap-y-1 max-w-[920px] motion-safe:animate-[gemReveal_1.4s_ease-out_1400ms_both]">
          {GEMS.map((g, i) => (
            <span key={`legend-${g.name}-${i}`} className="inline-flex items-baseline gap-1.5">
              <span
                className={`${inter} text-[9px] uppercase tracking-[0.3em] text-[#2c1f12]/50`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className={`${caveat} text-[14px] italic text-[#2c1f12]/85`}>
                {g.name}
              </span>
              {i < GEMS.length - 1 && (
                <span className={`${garamond} italic text-[#2c1f12]/30 ml-1`}>·</span>
              )}
            </span>
          ))}
        </div>

        <style>{`
          @keyframes gemReveal {
            0% { opacity: 0; transform: translateY(20px) scale(0.92); filter: blur(6px); }
            60% { opacity: 1; filter: blur(0); }
            100% { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
          }
          @keyframes fadeUp {
            0% { opacity: 0; transform: translateY(12px); }
            100% { opacity: 1; transform: translateY(0); }
          }
        `}</style>

        <Link
          href="/fr/v4c/preview/collection"
          className={`group ${garamond} italic mt-4 inline-flex items-center gap-3 text-[15px] lg:text-[17px] text-[#1f140a] px-7 py-3 border border-[#1f140a]/45 hover:bg-[#1f140a] hover:text-[#f7eed5] transition-all duration-300 motion-safe:animate-[fadeUp_1.4s_ease-out_1700ms_both]`}
        >
          <span>Ouvrir le dictionnaire</span>
          <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
        </Link>
      </div>

      <div className="relative mx-auto max-w-[1440px] w-full px-8 lg:px-16 pb-10 mt-6">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-4">
            <span className={`${inter} text-[10px] uppercase tracking-[0.4em] text-[#2c1f12]/55 block`}>
              planche · 001
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
