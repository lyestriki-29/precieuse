import Link from "next/link";
import { FOOTER_DATA, FOOTER_FONTS } from "./data";

const { garamond, caveat, inter } = FOOTER_FONTS;

export function V4CFooterG() {
  return (
    <footer className="relative bg-[var(--site-text)] text-[var(--site-bg)] py-9 px-8 lg:px-16">
      <div className="mx-auto max-w-[820px] text-center">
        <div className="flex flex-col gap-1 mb-4" aria-hidden>
          <span className="block h-[2px] bg-[var(--site-accent)]/50" />
          <span className="block h-px bg-[var(--site-accent)]/30" />
        </div>

        <div className="flex items-center justify-center gap-2 mb-3" aria-hidden>
          <span className="block w-8 h-px bg-[var(--site-accent)]/40" />
          <span className={`${garamond} italic text-[12px] text-[var(--site-accent)]`}>❦</span>
          <span className="block w-2 h-px bg-[var(--site-accent)]/40" />
          <span className={`${garamond} italic text-[12px] text-[var(--site-accent)]`}>✦</span>
          <span className="block w-2 h-px bg-[var(--site-accent)]/40" />
          <span className={`${garamond} italic text-[12px] text-[var(--site-accent)]`}>❦</span>
          <span className="block w-8 h-px bg-[var(--site-accent)]/40" />
        </div>

        <h3 className={`${garamond} italic text-[24px] text-[var(--site-bg)] leading-none mb-1`}>
          <span className="text-[var(--site-accent)]">{FOOTER_DATA.brand.charAt(0)}</span>
          {FOOTER_DATA.brand.slice(1).toLowerCase()}
        </h3>
        <p className={`${garamond} italic text-[10px] tracking-[0.4em] text-[var(--site-accent)] mb-3`}>
          {FOOTER_DATA.city.toUpperCase()} · {FOOTER_DATA.founded}
        </p>

        <p className={`${caveat} text-[14px] text-[var(--site-bg)]/80 leading-snug`}>
          {FOOTER_DATA.address.street} · {FOOTER_DATA.address.zip} {FOOTER_DATA.address.city} — {FOOTER_DATA.hours}
        </p>

        <nav className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 mt-4">
          {FOOTER_DATA.primaryNav.map((l, i) => (
            <span key={l.label} className="flex items-center gap-3">
              <Link href={l.href} className={`${garamond} italic text-[11px] tracking-[0.25em] text-[var(--site-bg)]/70 hover:text-[var(--site-accent)] transition-colors uppercase`}>
                {l.label}
              </Link>
              {i < FOOTER_DATA.primaryNav.length - 1 && (
                <span aria-hidden className="text-[var(--site-accent)]/40 text-[10px]">✦</span>
              )}
            </span>
          ))}
        </nav>

        <div className="flex flex-col gap-1 mt-5 mb-3" aria-hidden>
          <span className="block h-px bg-[var(--site-accent)]/30" />
          <span className="block h-[2px] bg-[var(--site-accent)]/50" />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
          <span className={`${inter} text-[10px] tracking-wider font-light text-[var(--site-bg)]/30`}>
            {FOOTER_DATA.copyright}
          </span>
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
