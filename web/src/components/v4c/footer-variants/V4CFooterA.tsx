import Link from "next/link";
import { FOOTER_DATA, FOOTER_FONTS } from "./data";

const { garamond, caveat, inter } = FOOTER_FONTS;

export function V4CFooterA() {
  return (
    <footer className="relative bg-[var(--site-text)] text-[var(--site-bg)] py-20 px-8 lg:px-16">
      <div className="mx-auto max-w-[820px] text-center">
        {/* Fleuron ornement */}
        <div className="flex items-center justify-center gap-4 mb-12" aria-hidden>
          <span className="block w-24 h-px bg-[var(--site-bg)]/30" />
          <span className={`${garamond} italic text-[24px] text-[var(--site-accent)]`}>❦</span>
          <span className="block w-24 h-px bg-[var(--site-bg)]/30" />
        </div>

        <span className={`${garamond} italic text-[11px] tracking-[0.5em] text-[var(--site-accent)] block mb-6`}>
          COLOPHON
        </span>

        <p className={`${garamond} italic text-[19px] lg:text-[22px] text-[var(--site-bg)]/85 leading-[1.7] max-w-[640px] mx-auto`}>
          Achevé d&apos;imprimer à <span className="text-[var(--site-accent)]">{FOOTER_DATA.city}</span>, en l&apos;an <span className="text-[var(--site-accent)]">{FOOTER_DATA.year}</span>, par les soins de l&apos;atelier <span className="text-[var(--site-accent)]">{FOOTER_DATA.brand}</span>, fondé par {FOOTER_DATA.founder} en {FOOTER_DATA.founded}.
        </p>

        <p className={`${caveat} text-[18px] text-[var(--site-bg)]/60 mt-6`}>
          Composé en EB Garamond et Caveat, sur papier vélin numérique.
        </p>

        <div className="flex items-center justify-center gap-3 mt-12 mb-10" aria-hidden>
          <span className="block w-10 h-px bg-[var(--site-bg)]/20" />
          <span className={`${garamond} italic text-[14px] text-[var(--site-bg)]/40`}>※</span>
          <span className="block w-10 h-px bg-[var(--site-bg)]/20" />
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-8">
          {FOOTER_DATA.primaryNav.map((l) => (
            <Link key={l.label} href={l.href} className={`${garamond} italic text-[13px] tracking-wider text-[var(--site-bg)]/70 hover:text-[var(--site-accent)] transition-colors`}>
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 text-center">
          <span className={`${inter} text-[10px] tracking-wider font-light text-[var(--site-bg)]/30`}>
            {FOOTER_DATA.copyright}
          </span>
          <span aria-hidden className="text-[var(--site-bg)]/20 hidden md:inline">·</span>
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
