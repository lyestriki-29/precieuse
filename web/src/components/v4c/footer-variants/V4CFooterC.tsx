import Link from "next/link";
import { FOOTER_DATA, FOOTER_FONTS } from "./data";

const { garamond, caveat, inter } = FOOTER_FONTS;

function WaxSeal() {
  return (
    <div className="relative w-32 h-32 mx-auto">
      <div
        className="absolute inset-0 rounded-full shadow-[inset_0_4px_8px_rgba(255,255,255,0.25),inset_0_-4px_8px_rgba(0,0,0,0.4),0_8px_24px_rgba(0,0,0,0.3)]"
        style={{ background: "radial-gradient(circle at 30% 30%, #c97060 0%, #a04030 45%, #6b1d18 100%)" }}
      />
      <div className="absolute inset-2 rounded-full border border-white/20 pointer-events-none" />
      <div className="absolute inset-5 rounded-full border border-white/10 pointer-events-none" />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-[family-name:var(--font-eb-garamond)] italic text-[64px] text-white/95 leading-none drop-shadow-[0_2px_2px_rgba(0,0,0,0.4)]">
          P
        </span>
        <span className="font-[family-name:var(--font-eb-garamond)] italic text-[8px] tracking-[0.4em] text-white/70 mt-1">
          MMXIX
        </span>
      </div>
    </div>
  );
}

export function V4CFooterC() {
  return (
    <footer className="relative bg-[var(--site-text)] text-[var(--site-bg)] py-20 px-8 lg:px-16">
      <div className="mx-auto max-w-[1100px] text-center">
        <WaxSeal />

        <h3 className={`${garamond} italic text-[28px] text-[var(--site-bg)] mt-8 mb-1`}>
          Maison Précieuse
        </h3>
        <p className={`${garamond} italic text-[12px] tracking-[0.4em] text-[var(--site-accent)] mb-6`}>
          FONDÉE À LISBONNE — {FOOTER_DATA.founded}
        </p>

        <p className={`${caveat} text-[18px] text-[var(--site-bg)]/70 max-w-[480px] mx-auto leading-relaxed`}>
          Pièces uniques scellées à la main — chaque création part avec son histoire.
        </p>

        {/* Doubles règles ornementales */}
        <div className="my-12 flex flex-col items-center gap-1">
          <span className="block w-full max-w-[500px] h-px bg-[var(--site-bg)]/30" />
          <span className="block w-full max-w-[500px] h-px bg-[var(--site-bg)]/15" />
        </div>

        {/* Coordonnées en 3 colonnes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[900px] mx-auto mb-12">
          <div>
            <span className={`${garamond} italic text-[10px] tracking-[0.35em] text-[var(--site-accent)] block mb-3`}>
              ATELIER
            </span>
            <p className={`${caveat} text-[15px] text-[var(--site-bg)]/80 leading-snug`}>
              {FOOTER_DATA.address.street}
              <br />
              {FOOTER_DATA.address.zip} {FOOTER_DATA.address.city}
            </p>
          </div>
          <div>
            <span className={`${garamond} italic text-[10px] tracking-[0.35em] text-[var(--site-accent)] block mb-3`}>
              VISITES
            </span>
            <p className={`${caveat} text-[15px] text-[var(--site-bg)]/80 leading-snug`}>
              Sur rendez-vous
              <br />
              du mardi au samedi
            </p>
          </div>
          <div>
            <span className={`${garamond} italic text-[10px] tracking-[0.35em] text-[var(--site-accent)] block mb-3`}>
              CORRESPONDANCE
            </span>
            <p className={`${caveat} text-[15px] text-[var(--site-bg)]/80 leading-snug break-all`}>
              {FOOTER_DATA.email}
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-[var(--site-bg)]/10">
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
