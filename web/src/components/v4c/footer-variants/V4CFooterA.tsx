import Link from "next/link";
import { FOOTER_DATA, FOOTER_FONTS } from "./data";

const { garamond, caveat, inter } = FOOTER_FONTS;

export function V4CFooterA() {
  return (
    <footer className="relative bg-[var(--site-text)] text-[var(--site-bg)] py-10 px-8 lg:px-16">
      <div className="mx-auto max-w-[820px] text-center">
        <div className="flex items-center justify-center gap-3 mb-4" aria-hidden>
          <span className="block w-12 h-px bg-[var(--site-bg)]/30" />
          <span className={`${garamond} italic text-[16px] text-[var(--site-accent)]`}>❦</span>
          <span className="block w-12 h-px bg-[var(--site-bg)]/30" />
        </div>

        <p className={`${garamond} italic text-[15px] text-[var(--site-bg)]/85 leading-relaxed max-w-[600px] mx-auto`}>
          Achevé d&apos;imprimer à <span className="text-[var(--site-accent)]">{FOOTER_DATA.city}</span> en l&apos;an <span className="text-[var(--site-accent)]">{FOOTER_DATA.year}</span> · atelier {FOOTER_DATA.brand} fondé par {FOOTER_DATA.founder} en {FOOTER_DATA.founded}
        </p>

        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 mt-5">
          {FOOTER_DATA.primaryNav.map((l) => (
            <Link key={l.label} href={l.href} className={`${garamond} italic text-[12px] tracking-wider text-[var(--site-bg)]/70 hover:text-[var(--site-accent)] transition-colors`}>
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 mt-5 pt-4 border-t border-[var(--site-bg)]/10">
          <span className={`${inter} text-[10px] tracking-wider font-light text-[var(--site-bg)]/30`}>
            {FOOTER_DATA.copyright}
          </span>
          <span aria-hidden className="text-[var(--site-bg)]/20 hidden md:inline">·</span>
          <nav className="flex gap-3">
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
