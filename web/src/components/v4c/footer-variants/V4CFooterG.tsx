import Link from "next/link";
import { FOOTER_DATA, FOOTER_FONTS } from "./data";

const { garamond, caveat, inter } = FOOTER_FONTS;

const ORNAMENTS = ["❦", "❖", "✦", "❀", "✧"] as const;

function OrnamentRow({ symbol = "❦" }: { symbol?: string }) {
  return (
    <div className="flex items-center justify-center gap-3" aria-hidden>
      <span className="block w-12 h-px bg-[var(--site-accent)]/40" />
      <span className={`${garamond} italic text-[14px] text-[var(--site-accent)]`}>{symbol}</span>
      <span className="block w-3 h-px bg-[var(--site-accent)]/40" />
      <span className={`${garamond} italic text-[10px] text-[var(--site-accent)]/60`}>·</span>
      <span className="block w-3 h-px bg-[var(--site-accent)]/40" />
      <span className={`${garamond} italic text-[14px] text-[var(--site-accent)]`}>{symbol}</span>
      <span className="block w-12 h-px bg-[var(--site-accent)]/40" />
    </div>
  );
}

export function V4CFooterG() {
  return (
    <footer className="relative bg-[var(--site-text)] text-[var(--site-bg)] py-20 px-8 lg:px-16">
      <div className="mx-auto max-w-[820px] text-center">
        {/* Doubles règles ornementales haut */}
        <div className="flex flex-col gap-1.5 mb-10" aria-hidden>
          <span className="block h-[2px] bg-[var(--site-accent)]/50" />
          <span className="block h-px bg-[var(--site-accent)]/30" />
        </div>

        <OrnamentRow symbol={ORNAMENTS[0]} />

        {/* Capitales décoratives */}
        <h3 className={`${garamond} italic text-[42px] lg:text-[56px] text-[var(--site-bg)] mt-8 mb-4 leading-none`}>
          <span className="text-[var(--site-accent)]">{FOOTER_DATA.brand.charAt(0)}</span>
          {FOOTER_DATA.brand.slice(1).toLowerCase()}
        </h3>

        <p className={`${caveat} text-[20px] text-[var(--site-bg)]/70 mb-2`}>
          ex libris atelier — joaillerie artisanale
        </p>
        <p className={`${garamond} italic text-[12px] tracking-[0.4em] text-[var(--site-accent)] mb-12`}>
          {FOOTER_DATA.city.toUpperCase()} · {FOOTER_DATA.founded}
        </p>

        <OrnamentRow symbol={ORNAMENTS[1]} />

        {/* Adresse en bloc serré */}
        <div className="my-12 inline-block text-center">
          <p className={`${caveat} text-[18px] text-[var(--site-bg)]/85 leading-relaxed`}>
            {FOOTER_DATA.address.street}
            <br />
            {FOOTER_DATA.address.zip} {FOOTER_DATA.address.city}
            <br />
            <span className="text-[var(--site-bg)]/55">{FOOTER_DATA.hours}</span>
          </p>
        </div>

        <OrnamentRow symbol={ORNAMENTS[2]} />

        {/* Liens primaires en small caps */}
        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 mt-10 mb-6">
          {FOOTER_DATA.primaryNav.map((l, i) => (
            <span key={l.label} className="flex items-center gap-5">
              <Link href={l.href} className={`${garamond} italic text-[12px] tracking-[0.3em] text-[var(--site-bg)]/70 hover:text-[var(--site-accent)] transition-colors uppercase`}>
                {l.label}
              </Link>
              {i < FOOTER_DATA.primaryNav.length - 1 && (
                <span aria-hidden className="text-[var(--site-accent)]/40">✦</span>
              )}
            </span>
          ))}
        </nav>

        {/* Doubles règles bas */}
        <div className="flex flex-col gap-1.5 mt-10 mb-6" aria-hidden>
          <span className="block h-px bg-[var(--site-accent)]/30" />
          <span className="block h-[2px] bg-[var(--site-accent)]/50" />
        </div>

        {/* Pied légal */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6">
          <span className={`${inter} text-[10px] tracking-wider font-light text-[var(--site-bg)]/30`}>
            {FOOTER_DATA.copyright}
          </span>
          <nav className="flex gap-4">
            {FOOTER_DATA.legalNav.map((l) => (
              <Link key={l.label} href={l.href} className={`${inter} text-[10px] tracking-wider font-light text-[var(--site-bg)]/30 hover:text-[var(--site-bg)]/60 transition-colors`}>
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
