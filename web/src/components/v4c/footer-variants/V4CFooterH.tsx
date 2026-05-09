import Link from "next/link";
import { FOOTER_DATA, FOOTER_FONTS } from "./data";

const { garamond, caveat, inter } = FOOTER_FONTS;

function MapLisbonne() {
  return (
    <svg aria-hidden viewBox="0 0 280 200" className="w-full h-full text-[var(--site-bg)]/40">
      {/* Cadre type carnet */}
      <rect x="2" y="2" width="276" height="196" fill="none" stroke="currentColor" strokeWidth="0.6" strokeDasharray="3 3" />

      {/* Lignes hachurées (esquisse Tage) */}
      <path d="M0 130 Q70 110 140 125 T280 115" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
      <path d="M0 138 Q70 118 140 133 T280 123" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />

      {/* Quartiers (lignes à main levée) */}
      <path d="M40 60 L80 55 L130 70 L150 50 L200 65 L240 55" fill="none" stroke="currentColor" strokeWidth="0.7" opacity="0.4" />
      <path d="M50 80 L90 75 L120 85 L160 80 L200 90" fill="none" stroke="currentColor" strokeWidth="0.7" opacity="0.4" />

      {/* Pointage atelier (étoile + label) */}
      <g transform="translate(150, 75)">
        <circle r="5" fill="currentColor" opacity="0.9" />
        <circle r="9" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />
        <path d="M0 -16 L2 -6 L11 -6 L4 0 L7 9 L0 4 L-7 9 L-4 0 L-11 -6 L-2 -6Z" fill="currentColor" opacity="0.7" transform="translate(0, -20) scale(0.5)" />
      </g>
      <text x="165" y="68" fontSize="9" fill="currentColor" fontFamily="cursive" fontStyle="italic" opacity="0.85">
        atelier
      </text>

      {/* Légende */}
      <text x="14" y="186" fontSize="7" fill="currentColor" fontFamily="serif" fontStyle="italic" letterSpacing="2" opacity="0.5">
        LISBOA — BAIRRO ALTO
      </text>
    </svg>
  );
}

export function V4CFooterH() {
  return (
    <footer className="relative bg-[var(--site-text)] text-[var(--site-bg)] py-16 px-8 lg:px-16">
      <div className="mx-auto max-w-[1100px]">
        {/* Surtitre carnet */}
        <div className="flex items-center gap-4 mb-10">
          <span className={`${garamond} italic text-[10px] tracking-[0.45em] text-[var(--site-accent)]`}>
            CARNET D&apos;ADRESSES — DERNIÈRE PAGE
          </span>
          <span className="block flex-1 h-px bg-[var(--site-accent)]/30" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-12 items-center">
          {/* Gauche — adresse manuscrite */}
          <div>
            <span className={`${caveat} text-[16px] text-[var(--site-bg)]/55 italic block mb-2`}>
              pour venir nous voir —
            </span>
            <p className={`${caveat} text-[28px] lg:text-[32px] text-[var(--site-bg)] leading-tight mb-3`}>
              {FOOTER_DATA.address.street}
              <br />
              {FOOTER_DATA.address.zip} {FOOTER_DATA.address.city}
            </p>
            <p className={`${caveat} text-[18px] text-[var(--site-accent)] mb-5`}>
              {FOOTER_DATA.hours}
            </p>
            <p className={`${garamond} italic text-[13px] text-[var(--site-bg)]/70`}>
              ou nous écrire :{" "}
              <a href={`mailto:${FOOTER_DATA.email}`} className="border-b border-[var(--site-accent)]/40 hover:border-[var(--site-accent)] transition-colors">
                {FOOTER_DATA.email}
              </a>
            </p>
          </div>

          {/* Carte SVG centrale */}
          <div className="w-full max-w-[260px] mx-auto md:mx-0 aspect-[7/5] bg-[var(--site-bg)]/[0.04] p-2">
            <MapLisbonne />
          </div>

          {/* Droite — Eméline + signature */}
          <div className="md:text-right">
            <span className={`${caveat} text-[14px] text-[var(--site-bg)]/55 italic block mb-2`}>
              écrit et tenu par —
            </span>
            <span className={`${caveat} text-[64px] lg:text-[80px] text-[var(--site-accent)] leading-none block`}>
              {FOOTER_DATA.founder}
            </span>
            <span className={`${garamond} italic text-[10px] tracking-[0.35em] text-[var(--site-bg)]/50 block mt-2`}>
              FONDATRICE · {FOOTER_DATA.founded}
            </span>
          </div>
        </div>

        {/* Liens primaires */}
        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 mt-12 pt-6 border-t border-[var(--site-bg)]/15">
          {FOOTER_DATA.primaryNav.map((l) => (
            <Link key={l.label} href={l.href} className={`${garamond} italic text-[13px] text-[var(--site-bg)]/70 hover:text-[var(--site-accent)] transition-colors`}>
              {l.label}
            </Link>
          ))}
        </nav>

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
