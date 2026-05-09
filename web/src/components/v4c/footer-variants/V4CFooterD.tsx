import Link from "next/link";
import { FOOTER_DATA, FOOTER_FONTS } from "./data";

const { garamond, caveat, inter } = FOOTER_FONTS;

function PostmarkCircle() {
  return (
    <svg aria-hidden viewBox="0 0 100 100" className="w-16 h-16 text-[var(--site-bg)]/40">
      <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.7" />
      <text x="50" y="38" textAnchor="middle" fontSize="9" fill="currentColor" fontFamily="serif" fontStyle="italic" letterSpacing="2">LISBOA</text>
      <line x1="20" y1="50" x2="80" y2="50" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 1" />
      <text x="50" y="62" textAnchor="middle" fontSize="8" fill="currentColor" fontFamily="serif" fontStyle="italic">MMXXVI</text>
    </svg>
  );
}

export function V4CFooterD() {
  return (
    <footer className="relative bg-[var(--site-text)] text-[var(--site-bg)] py-8 px-8 lg:px-16">
      <div className="mx-auto max-w-[1100px]">
        <div className="relative bg-[var(--site-text)] border border-[var(--site-bg)]/15 p-5 lg:p-6">
          {(["tl", "tr", "bl", "br"] as const).map((p) => {
            const map = {
              tl: "top-1 left-1 border-t border-l",
              tr: "top-1 right-1 border-t border-r",
              bl: "bottom-1 left-1 border-b border-l",
              br: "bottom-1 right-1 border-b border-r",
            };
            return <span key={p} aria-hidden className={`absolute ${map[p]} w-3 h-3 border-[var(--site-accent)]/50`} />;
          })}

          <div className="grid grid-cols-1 md:grid-cols-[1.4fr_auto_1fr] gap-4 md:gap-8 items-center">
            <div>
              <span className={`${garamond} italic text-[10px] tracking-[0.3em] text-[var(--site-accent)] block mb-1`}>
                CARTE POSTALE
              </span>
              <p className={`${caveat} text-[16px] text-[var(--site-bg)] leading-snug`}>
                L&apos;atelier reste ouvert sur rendez-vous, la lumière est belle en novembre, chaque pièce part avec un nom.
              </p>
              <span className={`${caveat} text-[18px] text-[var(--site-accent)] block mt-1`}>
                — {FOOTER_DATA.founder}
              </span>
            </div>

            <div className="hidden md:block w-px bg-[var(--site-bg)]/20 self-stretch" />

            <div className="flex items-center gap-3">
              <PostmarkCircle />
              <p className={`${caveat} text-[12px] text-[var(--site-bg)]/80 leading-snug`}>
                {FOOTER_DATA.brand}
                <br />
                {FOOTER_DATA.address.street}
                <br />
                {FOOTER_DATA.address.zip} {FOOTER_DATA.address.city}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-2 mt-3">
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
