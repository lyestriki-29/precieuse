import Link from "next/link";
import { FOOTER_DATA, FOOTER_FONTS } from "./data";

const { garamond, caveat, inter } = FOOTER_FONTS;

function WaxSeal() {
  return (
    <div className="relative w-16 h-16 shrink-0">
      <div
        className="absolute inset-0 rounded-full shadow-[inset_0_2px_4px_rgba(255,255,255,0.25),inset_0_-2px_4px_rgba(0,0,0,0.4),0_4px_12px_rgba(0,0,0,0.3)]"
        style={{ background: "radial-gradient(circle at 30% 30%, #c97060 0%, #a04030 45%, #6b1d18 100%)" }}
      />
      <div className="absolute inset-1 rounded-full border border-white/20 pointer-events-none" />
      <span className="font-[family-name:var(--font-eb-garamond)] absolute inset-0 flex items-center justify-center italic text-[32px] text-white/95 leading-none">
        P
      </span>
    </div>
  );
}

export function V4CFooterC() {
  return (
    <footer className="relative bg-[var(--site-text)] text-[var(--site-bg)] py-10 px-8 lg:px-16">
      <div className="mx-auto max-w-[1100px]">
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_1fr_1fr] gap-6 md:gap-8 items-center mb-5">
          <div className="flex items-center gap-4">
            <WaxSeal />
            <div>
              <span className={`${garamond} italic text-[16px] text-[var(--site-bg)] block leading-none`}>
                Maison Précieuse
              </span>
              <span className={`${garamond} italic text-[10px] tracking-[0.3em] text-[var(--site-accent)]`}>
                {FOOTER_DATA.city.toUpperCase()} — {FOOTER_DATA.founded}
              </span>
            </div>
          </div>
          <div>
            <span className={`${garamond} italic text-[10px] tracking-[0.3em] text-[var(--site-accent)] block`}>ATELIER</span>
            <p className={`${caveat} text-[14px] text-[var(--site-bg)]/80 leading-snug`}>
              {FOOTER_DATA.address.street} · {FOOTER_DATA.address.zip} {FOOTER_DATA.address.city}
            </p>
          </div>
          <div>
            <span className={`${garamond} italic text-[10px] tracking-[0.3em] text-[var(--site-accent)] block`}>VISITES</span>
            <p className={`${caveat} text-[14px] text-[var(--site-bg)]/80`}>{FOOTER_DATA.hours}</p>
          </div>
          <div>
            <span className={`${garamond} italic text-[10px] tracking-[0.3em] text-[var(--site-accent)] block`}>CONTACT</span>
            <p className={`${caveat} text-[14px] text-[var(--site-bg)]/80 break-all`}>{FOOTER_DATA.email}</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-2 pt-4 border-t border-[var(--site-bg)]/10">
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
