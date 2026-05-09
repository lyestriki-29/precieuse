import Image from "next/image";
import Link from "next/link";

const garamond = "font-[family-name:var(--font-eb-garamond)]";
const caveat = "font-[family-name:var(--font-caveat)]";
const inter = "font-[family-name:var(--font-inter)]";

// Variante E3 — Atelier paper. Vélin riche, colonnes typo, double-rule, watermark p.01.
export function V4CHeroE3() {
  return (
    <section className="relative min-h-screen pt-16 overflow-hidden flex flex-col bg-[var(--site-bg)]">
      {/* Texture papier vélin renforcée */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.10] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 600 600' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='p'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.04' numOctaves='3'/%3E%3CfeColorMatrix values='0 0 0 0 0.45 0 0 0 0 0.3 0 0 0 0 0.15 0 0 0 0.7 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23p)'/%3E%3C/svg%3E\")",
          backgroundSize: "600px 600px",
        }}
      />

      {/* Fines colonnes typographiques verticales */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, transparent 0 calc(8.333% - 1px), var(--site-text) calc(8.333% - 1px) 8.333%)",
        }}
      />

      {/* Watermark "p. 01" gigantesque en filigrane bottom-left */}
      <div
        aria-hidden
        className={`${garamond} italic absolute pointer-events-none select-none`}
        style={{
          fontSize: "clamp(220px, 38vw, 580px)",
          color: "var(--site-accent)",
          opacity: 0.06,
          left: "-3vw",
          bottom: "-12vw",
          letterSpacing: "-0.02em",
          lineHeight: 1,
        }}
      >
        p.01
      </div>

      {/* Frame double-rule autour de la section */}
      <div aria-hidden className="absolute inset-4 lg:inset-6 border border-[var(--site-text)]/20 pointer-events-none" />
      <div aria-hidden className="absolute inset-6 lg:inset-8 border border-[var(--site-text)]/10 pointer-events-none" />

      {/* Bloc typographique — image clipée nette sur papier */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-8 lg:px-20">
        <h1
          aria-label="Précieuse — joaillerie artisanale, Lisboa"
          className={`${garamond} italic leading-[0.78] tracking-[-0.04em] text-center select-none animate-[heroReveal_1.4s_cubic-bezier(0.2,0.8,0.2,1)_120ms_both]`}
          style={{
            fontSize: "clamp(80px, 14vw, 220px)",
            backgroundImage: "url(/images/gemmyo.jpg)",
            backgroundSize: "220% auto",
            backgroundPosition: "30% 42%",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            WebkitTextFillColor: "transparent",
            filter: "contrast(1.2) saturate(1.15)",
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

        {/* Asterismes décoratifs aux coins */}
        <span
          aria-hidden
          className={`${garamond} italic absolute top-4 left-12 lg:left-20 text-[var(--site-accent)] text-[40px] opacity-60 select-none`}
        >
          ✦
        </span>
        <span
          aria-hidden
          className={`${garamond} italic absolute bottom-4 right-12 lg:right-20 text-[var(--site-accent)] text-[40px] opacity-60 select-none`}
        >
          ✦
        </span>

        {/* CTA réel sous le titre */}
        <Link
          href="/fr/v4c/preview/collection"
          className={`${garamond} italic absolute bottom-6 left-1/2 -translate-x-1/2 inline-flex items-center gap-3 text-[15px] lg:text-[17px] text-[var(--site-text)] px-6 py-2.5 border border-[var(--site-text)]/35 bg-[var(--site-bg)]/40 backdrop-blur-[2px] hover:bg-[var(--site-text)] hover:text-[var(--site-bg)] transition-all duration-300 animate-[heroReveal_1.4s_cubic-bezier(0.2,0.8,0.2,1)_700ms_both]`}
        >
          <span>Découvrir le carnet</span>
          <span aria-hidden>→</span>
        </Link>
      </div>

      {/* Sous-titre */}
      <div className="relative z-10 mx-auto max-w-[1440px] w-full px-12 lg:px-20 pb-12">
        <div className="grid grid-cols-12 gap-6 border-t border-[var(--site-text)]/25 pt-6">
          <div className="col-span-12 lg:col-span-4">
            <span className={`${inter} text-[10px] uppercase tracking-[0.4em] text-[var(--site-text)]/55 block`}>
              001 ·
            </span>
            <p className={`${garamond} italic text-[20px] lg:text-[24px] text-[var(--site-text)] leading-snug mt-2`}>
              La pierre choisit la main qui la taille.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-3 lg:col-start-7">
            <span className={`${caveat} text-[14px] text-[var(--site-caveat)] italic`}>
              — un atelier, à Lisbonne
            </span>
            <p className={`${inter} text-[11px] text-[var(--site-text)]/65 leading-relaxed mt-3 max-w-[28ch]`}>
              Chaque bague naît d&apos;une commande, d&apos;une main, d&apos;un nom. Aucun stock.
              Aucune répétition.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-2 lg:col-start-11 self-end text-right">
            <span className={`${garamond} italic text-[14px] text-[var(--site-accent)] block`}>
              voir
            </span>
            <span className={`${inter} text-[10px] uppercase tracking-[0.4em] text-[var(--site-text)]/55 block mt-1`}>
              ↓ collection
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
