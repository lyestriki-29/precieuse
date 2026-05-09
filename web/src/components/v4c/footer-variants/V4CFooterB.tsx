import Link from "next/link";
import { FOOTER_DATA, FOOTER_FONTS } from "./data";

const { garamond, caveat, inter } = FOOTER_FONTS;

export function V4CFooterB() {
  return (
    <footer className="relative bg-[var(--site-text)] text-[var(--site-bg)] py-24 px-8 lg:px-16">
      <div className="mx-auto max-w-[860px] text-center">
        {/* Petite cloche ornementale */}
        <span className={`${caveat} text-[15px] text-[var(--site-bg)]/50 italic block mb-8`}>
          — depuis l&apos;atelier de Lisbonne, à celles et ceux qui portent
        </span>

        {/* Phrase manifeste */}
        <p className={`${garamond} italic text-[26px] lg:text-[34px] text-[var(--site-bg)] leading-[1.5]`}>
          {FOOTER_DATA.brand} est une maison de joaillerie artisanale
          <br className="hidden md:block" /> fondée par {FOOTER_DATA.founder} en {FOOTER_DATA.founded}, à <span className="text-[var(--site-accent)]">{FOOTER_DATA.city}</span>.
        </p>

        {/* Signature manuscrite XL */}
        <div className="mt-12 flex flex-col items-center gap-1">
          <span className={`${caveat} text-[88px] lg:text-[120px] text-[var(--site-accent)] leading-none`}>
            {FOOTER_DATA.founder}
          </span>
          <span className={`${garamond} italic text-[10px] tracking-[0.4em] text-[var(--site-bg)]/40`}>
            FONDATRICE · ATELIER PRÉCIEUSE
          </span>
        </div>

        {/* Adresse compacte */}
        <p className={`${caveat} text-[16px] text-[var(--site-bg)]/60 mt-10`}>
          {FOOTER_DATA.address.street} — {FOOTER_DATA.address.zip} {FOOTER_DATA.address.city}
          <br />
          {FOOTER_DATA.hours}
        </p>

        {/* Filet */}
        <div className="mt-12 mb-8 flex items-center gap-4 max-w-md mx-auto">
          <span className="flex-1 h-px bg-[var(--site-bg)]/20" />
          <span className={`${garamond} italic text-[14px] text-[var(--site-accent)]`}>✦</span>
          <span className="flex-1 h-px bg-[var(--site-bg)]/20" />
        </div>

        {/* Liens compacts */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 max-w-[700px] mx-auto">
          <span className={`${inter} text-[10px] tracking-wider font-light text-[var(--site-bg)]/30`}>
            {FOOTER_DATA.copyright}
          </span>
          <nav className="flex gap-5">
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
