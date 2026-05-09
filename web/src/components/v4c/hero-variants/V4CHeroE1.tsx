import Image from "next/image";
import Link from "next/link";

const garamond = "font-[family-name:var(--font-eb-garamond)]";
const caveat = "font-[family-name:var(--font-caveat)]";
const inter = "font-[family-name:var(--font-inter)]";

// Variante E1 — Window effect. Image floutée plein-fond + lettres = trou sur version nette.
export function V4CHeroE1() {
  return (
    <section className="relative min-h-screen pt-16 overflow-hidden flex flex-col bg-[var(--site-bg)]">
      {/* Couche 1 — image floutée plein écran */}
      <div aria-hidden className="absolute inset-0">
        <Image
          src="/images/gemmyo.jpg"
          alt=""
          fill
          sizes="100vw"
          priority
          className="object-cover"
          style={{ filter: "blur(20px) saturate(1.25) brightness(0.92)", transform: "scale(1.1)" }}
        />
        {/* Voile coloré — top léger, bottom marqué pour lisibilité du sous-titre */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.22) 0%, rgba(0,0,0,0.04) 30%, rgba(0,0,0,0.10) 55%, rgba(0,0,0,0.55) 100%)",
          }}
        />
      </div>

      {/* Grain délicat */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.95' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Header */}
      <div className="relative z-10 mx-auto max-w-[1440px] w-full px-8 lg:px-16 py-6 flex items-baseline justify-between border-b border-white/20 backdrop-blur-[2px]">
        <span className={`${inter} text-[10px] uppercase tracking-[0.4em] text-white/80`}>
          Précieuse · joaillerie · Lisboa
        </span>
        <span className={`${caveat} text-[16px] text-white italic`}>chapitre I —</span>
        <span className={`${inter} text-[10px] uppercase tracking-[0.4em] text-white/80`}>
          MMXXVI
        </span>
      </div>

      {/* Bloc typographique — l'image NETTE est révélée à travers les lettres */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-4 lg:px-12">
        <h1
          aria-label="Précieuse"
          className={`${garamond} italic leading-[0.78] tracking-[-0.04em] text-center select-none drop-shadow-[0_4px_24px_rgba(0,0,0,0.3)]`}
          style={{
            fontSize: "clamp(80px, 14vw, 220px)",
            backgroundImage: "url(/images/gemmyo.jpg)",
            backgroundSize: "220% auto",
            backgroundPosition: "30% 42%",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            WebkitTextFillColor: "transparent",
            filter: "contrast(1.25) saturate(1.25)",
          }}
        >
          Précieuse
        </h1>
        <span className="sr-only">Précieuse — joaillerie artisanale, Lisboa</span>

        {/* CTA réel sous le titre */}
        <Link
          href="/fr/v4c/preview/collection"
          className={`${garamond} italic absolute bottom-6 left-1/2 -translate-x-1/2 inline-flex items-center gap-3 text-[15px] lg:text-[17px] text-white px-6 py-2.5 border border-white/40 backdrop-blur-[3px] bg-white/5 hover:bg-white/15 hover:border-white transition-all duration-300`}
        >
          <span>Découvrir le carnet</span>
          <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
        </Link>
      </div>

      {/* Sous-titre */}
      <div className="relative z-10 mx-auto max-w-[1440px] w-full px-8 lg:px-16 pb-10">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-4">
            <span className={`${inter} text-[10px] uppercase tracking-[0.4em] text-white/70 block`}>
              001 ·
            </span>
            <p className={`${garamond} italic text-[20px] lg:text-[24px] text-white leading-snug mt-2 drop-shadow-md`}>
              La pierre choisit la main qui la taille.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-3 lg:col-start-7">
            <span className={`${caveat} text-[14px] text-[#f5d28a] italic`}>
              — un atelier, à Lisbonne
            </span>
            <p className={`${inter} text-[11px] text-white/75 leading-relaxed mt-3 max-w-[28ch]`}>
              Chaque bague naît d&apos;une commande, d&apos;une main, d&apos;un nom. Aucun stock.
              Aucune répétition.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-2 lg:col-start-11 self-end text-right">
            <span className={`${garamond} italic text-[14px] text-[#f5d28a] block`}>voir</span>
            <span className={`${inter} text-[10px] uppercase tracking-[0.4em] text-white/70 block mt-1`}>
              ↓ collection
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
