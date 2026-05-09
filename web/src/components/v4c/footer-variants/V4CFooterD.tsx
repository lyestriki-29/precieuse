import Link from "next/link";
import { FOOTER_DATA, FOOTER_FONTS } from "./data";

const { garamond, caveat, inter } = FOOTER_FONTS;

function PostmarkCircle() {
  return (
    <svg aria-hidden viewBox="0 0 100 100" className="w-24 h-24 text-[var(--site-bg)]/40">
      <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.7" />
      <text x="50" y="38" textAnchor="middle" fontSize="9" fill="currentColor" fontFamily="serif" fontStyle="italic" letterSpacing="2">
        LISBOA
      </text>
      <line x1="20" y1="50" x2="80" y2="50" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 1" />
      <text x="50" y="62" textAnchor="middle" fontSize="8" fill="currentColor" fontFamily="serif" fontStyle="italic">
        MMXXVI
      </text>
      <text x="50" y="76" textAnchor="middle" fontSize="6" fill="currentColor" fontFamily="sans-serif" letterSpacing="1.5">
        ATELIER
      </text>
    </svg>
  );
}

export function V4CFooterD() {
  return (
    <footer className="relative bg-[var(--site-text)] text-[var(--site-bg)] py-16 px-8 lg:px-16">
      <div className="mx-auto max-w-[1100px]">
        {/* Carte postale */}
        <div className="relative bg-[var(--site-text)] border-2 border-[var(--site-bg)]/15 p-6 lg:p-10">
          {/* Petits coins décoratifs */}
          {(["tl", "tr", "bl", "br"] as const).map((p) => {
            const map = {
              tl: "top-2 left-2 border-t border-l",
              tr: "top-2 right-2 border-t border-r",
              bl: "bottom-2 left-2 border-b border-l",
              br: "bottom-2 right-2 border-b border-r",
            };
            return <span key={p} aria-hidden className={`absolute ${map[p]} w-4 h-4 border-[var(--site-accent)]/50`} />;
          })}

          <div className="grid grid-cols-1 md:grid-cols-[1.4fr_auto_1fr] gap-6 lg:gap-10 items-start">
            {/* Gauche — message */}
            <div>
              <span className={`${garamond} italic text-[10px] tracking-[0.4em] text-[var(--site-accent)] block mb-3`}>
                CARTE POSTALE — RECTO/VERSO
              </span>
              <p className={`${caveat} text-[20px] text-[var(--site-bg)] leading-snug mb-4`}>
                Quelques lignes pour vous dire — l&apos;atelier reste ouvert sur rendez-vous, la lumière est belle en novembre, et chaque pièce part avec un nom.
              </p>
              <span className={`${caveat} text-[24px] text-[var(--site-accent)]`}>
                — {FOOTER_DATA.founder}
              </span>
            </div>

            {/* Filet vertical */}
            <div className="hidden md:block w-px bg-[var(--site-bg)]/20 self-stretch" />

            {/* Droite — adresse + cachet */}
            <div className="flex flex-col items-start md:items-end gap-3">
              <PostmarkCircle />
              <div className="md:text-right">
                <span className={`${garamond} italic text-[10px] tracking-[0.3em] text-[var(--site-accent)] block mb-2`}>
                  EXPÉDITEUR
                </span>
                <p className={`${caveat} text-[14px] text-[var(--site-bg)]/80 leading-snug`}>
                  {FOOTER_DATA.brand}
                  <br />
                  {FOOTER_DATA.address.street}
                  <br />
                  {FOOTER_DATA.address.zip} {FOOTER_DATA.address.city}, {FOOTER_DATA.address.country}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Pied légal */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 mt-6">
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
