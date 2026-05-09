import Image from "next/image";
import Link from "next/link";
import { FOOTER_DATA, FOOTER_FONTS } from "./data";

const { garamond, caveat, inter } = FOOTER_FONTS;

export function V4CFooterF() {
  return (
    <footer className="relative bg-[var(--site-text)] text-[var(--site-bg)] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/stitch/hero-atelier-dusk.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--site-text)] via-[var(--site-text)]/85 to-[var(--site-text)]/55" />
      </div>

      <div className="relative px-8 lg:px-16 py-10">
        <div className="mx-auto max-w-[1100px]">
          <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-6 items-center">
            <div>
              <span className={`${garamond} italic text-[10px] tracking-[0.4em] text-[var(--site-accent)] block mb-1`}>
                ATELIER PRÉCIEUSE
              </span>
              <p className={`${garamond} italic text-[18px] lg:text-[22px] text-[var(--site-bg)] leading-snug`}>
                Une lumière, deux mains, un bureau près de la fenêtre — c&apos;est tout ce qu&apos;il faut.
              </p>
              <span className={`${caveat} text-[15px] text-[var(--site-accent)] mt-1 block`}>
                — {FOOTER_DATA.city}, {FOOTER_DATA.address.country}
              </span>
            </div>

            <div className="md:text-right space-y-1">
              <p className={`${garamond} italic text-[13px] text-[var(--site-bg)]/85`}>
                {FOOTER_DATA.address.street} · {FOOTER_DATA.address.zip} {FOOTER_DATA.address.city}
              </p>
              <p className={`${caveat} text-[14px] text-[var(--site-bg)]/85`}>
                {FOOTER_DATA.hours}
              </p>
              <p className={`${garamond} italic text-[12px] text-[var(--site-bg)]/70`}>
                {FOOTER_DATA.email}
              </p>
            </div>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-[var(--site-accent)]/40 to-transparent my-4" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-2">
            <span className={`${inter} text-[10px] tracking-wider font-light text-[var(--site-bg)]/40`}>
              {FOOTER_DATA.copyright}
            </span>
            <nav className="flex gap-4">
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
