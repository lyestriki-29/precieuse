import Image from "next/image";
import Link from "next/link";
import { FOOTER_DATA, FOOTER_FONTS } from "./data";

const { garamond, caveat, inter } = FOOTER_FONTS;

export function V4CFooterF() {
  return (
    <footer className="relative bg-[var(--site-text)] text-[var(--site-bg)] overflow-hidden">
      {/* Image atelier en arrière-plan */}
      <div className="absolute inset-0">
        <Image
          src="/images/stitch/hero-atelier-dusk.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-25"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--site-text)] via-[var(--site-text)]/80 to-[var(--site-text)]/50" />
      </div>

      <div className="relative px-8 lg:px-16 py-24 lg:py-32">
        <div className="mx-auto max-w-[1100px]">
          {/* Hero phrase */}
          <div className="text-center mb-16">
            <span className={`${garamond} italic text-[11px] tracking-[0.5em] text-[var(--site-accent)] block mb-6`}>
              ATELIER PRÉCIEUSE
            </span>
            <h3 className={`${garamond} italic text-[36px] lg:text-[52px] text-[var(--site-bg)] leading-[1.05] max-w-[720px] mx-auto`}>
              Une lumière, deux mains, un bureau près de la fenêtre — c&apos;est tout ce qu&apos;il faut.
            </h3>
            <span className={`${caveat} text-[20px] text-[var(--site-accent)] mt-6 block`}>
              — {FOOTER_DATA.city}, {FOOTER_DATA.address.country}
            </span>
          </div>

          {/* Coordonnées en grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-[900px] mx-auto">
            <div className="text-center md:text-left">
              <span className={`${garamond} italic text-[10px] tracking-[0.4em] text-[var(--site-accent)] block mb-2`}>
                ADRESSE
              </span>
              <p className={`${garamond} italic text-[14px] text-[var(--site-bg)]/85 leading-snug`}>
                {FOOTER_DATA.address.street}
                <br />
                {FOOTER_DATA.address.zip} {FOOTER_DATA.address.city}
              </p>
            </div>
            <div className="text-center">
              <span className={`${garamond} italic text-[10px] tracking-[0.4em] text-[var(--site-accent)] block mb-2`}>
                VISITES
              </span>
              <p className={`${caveat} text-[16px] text-[var(--site-bg)]/85`}>
                sur rendez-vous
                <br />
                mardi — samedi
              </p>
            </div>
            <div className="text-center md:text-right">
              <span className={`${garamond} italic text-[10px] tracking-[0.4em] text-[var(--site-accent)] block mb-2`}>
                CORRESPONDRE
              </span>
              <p className={`${garamond} italic text-[14px] text-[var(--site-bg)]/85`}>
                {FOOTER_DATA.email}
              </p>
            </div>
          </div>

          {/* Filet doré */}
          <div className="h-px bg-gradient-to-r from-transparent via-[var(--site-accent)]/50 to-transparent mb-8" />

          {/* Pied */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <span className={`${inter} text-[10px] tracking-wider font-light text-[var(--site-bg)]/40`}>
              {FOOTER_DATA.copyright}
            </span>
            <nav className="flex gap-5">
              {FOOTER_DATA.legalNav.map((l) => (
                <Link key={l.label} href={l.href} className={`${inter} text-[10px] tracking-wider font-light text-[var(--site-bg)]/40 hover:text-[var(--site-bg)]/70 transition-colors`}>
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
