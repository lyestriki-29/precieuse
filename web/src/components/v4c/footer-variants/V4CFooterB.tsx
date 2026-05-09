import Link from "next/link";
import { FOOTER_DATA, FOOTER_FONTS } from "./data";

const { garamond, caveat, inter } = FOOTER_FONTS;

export function V4CFooterB() {
  return (
    <footer className="relative bg-[var(--site-text)] text-[var(--site-bg)] py-10 px-8 lg:px-16">
      <div className="mx-auto max-w-[920px] grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 md:gap-10 items-center">
        <div>
          <p className={`${garamond} italic text-[16px] lg:text-[18px] text-[var(--site-bg)] leading-snug`}>
            {FOOTER_DATA.brand} — joaillerie artisanale fondée par {FOOTER_DATA.founder} en {FOOTER_DATA.founded}, à <span className="text-[var(--site-accent)]">{FOOTER_DATA.city}</span>.
          </p>
          <p className={`${caveat} text-[14px] text-[var(--site-bg)]/55 mt-1`}>
            {FOOTER_DATA.address.street}, {FOOTER_DATA.address.zip} {FOOTER_DATA.address.city} · {FOOTER_DATA.hours}
          </p>
        </div>

        <span className={`${caveat} text-[56px] lg:text-[64px] text-[var(--site-accent)] leading-none md:text-right`}>
          {FOOTER_DATA.founder}
        </span>
      </div>

      <div className="mx-auto max-w-[920px] flex flex-col md:flex-row items-center justify-between gap-2 mt-5 pt-4 border-t border-[var(--site-bg)]/10">
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
    </footer>
  );
}
