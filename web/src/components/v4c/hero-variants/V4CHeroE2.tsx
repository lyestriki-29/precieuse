import Image from "next/image";
import Link from "next/link";

const garamond = "font-[family-name:var(--font-eb-garamond)]";
const caveat = "font-[family-name:var(--font-caveat)]";
const inter = "font-[family-name:var(--font-inter)]";

// Variante E2 — Saturated dark + watermark filigrane.
export function V4CHeroE2() {
  return (
    <section className="relative min-h-screen pt-16 overflow-hidden flex flex-col bg-[#0e0a06] text-white">
      {/* Halo doré radial */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 55%, rgba(212,175,55,0.18), transparent 65%), radial-gradient(circle at 50% 100%, rgba(212,175,55,0.1), transparent 60%)",
        }}
      />

      {/* Watermark filigrane gigantesque "Numéro II" */}
      <div
        aria-hidden
        className={`${garamond} italic absolute inset-0 flex items-center justify-center pointer-events-none select-none`}
        style={{
          fontSize: "clamp(140px, 26vw, 460px)",
          color: "rgba(212,175,55,0.06)",
          letterSpacing: "-0.04em",
          transform: "translateY(8%)",
          whiteSpace: "nowrap",
        }}
      >
        Numéro II
      </div>

      {/* Grain doré */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Bloc typographique — image clipée saturée or */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-4 lg:px-12">
        <h1
          aria-label="Précieuse — joaillerie artisanale, Lisboa"
          className={`${garamond} italic leading-[0.78] tracking-[-0.04em] text-center select-none animate-[heroReveal_1.4s_cubic-bezier(0.2,0.8,0.2,1)_120ms_both]`}
          style={{
            fontSize: "clamp(80px, 14vw, 220px)",
            backgroundImage:
              "linear-gradient(180deg, rgba(245,210,138,0.5), rgba(245,210,138,0)), url(/images/gemmyo.jpg)",
            backgroundSize: "100% 100%, 220% auto",
            backgroundPosition: "center, 30% 42%",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            WebkitTextFillColor: "transparent",
            filter: "contrast(1.35) saturate(1.4) brightness(1.1)",
          }}
        >
          Précieuse
        </h1>
        <style>{`
          @keyframes heroReveal {
            0% { opacity: 0; transform: translateY(20px) scale(0.97); clip-path: inset(0 100% 0 0); }
            40% { opacity: 1; clip-path: inset(0 0 0 0); }
            100% { opacity: 1; transform: translateY(0) scale(1); clip-path: inset(0 0 0 0); }
          }
        `}</style>

        {/* CTA réel sous le titre */}
        <Link
          href="/fr/v4c/preview/collection"
          className={`${garamond} italic absolute bottom-6 left-1/2 -translate-x-1/2 inline-flex items-center gap-3 text-[15px] lg:text-[17px] text-white px-6 py-2.5 border border-[#d4af37]/50 backdrop-blur-[3px] bg-black/20 hover:bg-[#d4af37]/15 hover:border-[#d4af37] transition-all duration-300 animate-[heroReveal_1.4s_cubic-bezier(0.2,0.8,0.2,1)_700ms_both]`}
        >
          <span>Découvrir le carnet</span>
          <span aria-hidden>→</span>
        </Link>

        {/* Image en arrière-plan, plus présente, légèrement floutée */}
        <div aria-hidden className="absolute inset-0 -z-10 opacity-[0.18]">
          <Image
            src="/images/gemmyo.jpg"
            alt=""
            fill
            sizes="100vw"
            priority
            className="object-cover"
            style={{ filter: "blur(20px) saturate(1.4)" }}
          />
        </div>
      </div>

      {/* Sous-titre */}
      <div className="relative z-10 mx-auto max-w-[1440px] w-full px-8 lg:px-16 pb-10">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-4">
            <span className={`${inter} text-[10px] uppercase tracking-[0.4em] text-[#d4af37]/70 block`}>
              001 ·
            </span>
            <p className={`${garamond} italic text-[20px] lg:text-[24px] text-white leading-snug mt-2`}>
              La pierre choisit la main qui la taille.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-3 lg:col-start-7">
            <span className={`${caveat} text-[14px] text-[#d4af37] italic`}>
              — un atelier, à Lisbonne
            </span>
            <p className={`${inter} text-[11px] text-white/65 leading-relaxed mt-3 max-w-[28ch]`}>
              Chaque bague naît d&apos;une commande, d&apos;une main, d&apos;un nom. Aucun stock.
              Aucune répétition.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-2 lg:col-start-11 self-end text-right">
            <span className={`${garamond} italic text-[14px] text-[#d4af37] block`}>voir</span>
            <span className={`${inter} text-[10px] uppercase tracking-[0.4em] text-white/55 block mt-1`}>
              ↓ collection
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
