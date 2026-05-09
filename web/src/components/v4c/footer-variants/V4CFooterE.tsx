import Link from "next/link";
import { FOOTER_DATA, FOOTER_FONTS } from "./data";

const { garamond, caveat, inter } = FOOTER_FONTS;

const COLUMNS = [
  {
    title: "Maison",
    links: [
      { label: "À propos", href: "/fr/creatrice" },
      { label: "L'Atelier", href: "/fr/atelier" },
      { label: "Le Carnet", href: "/fr/carnet" },
    ],
  },
  {
    title: "Collection",
    links: [
      { label: "Pièces signatures", href: "/fr/collection" },
      { label: "Sur-mesure", href: "/fr/sur-mesure" },
      { label: "Pierres précieuses", href: "/fr/matieres" },
    ],
  },
  {
    title: "Pratique",
    links: [
      { label: "Visite atelier", href: "/fr/visite" },
      { label: "Contact", href: "/fr/contact" },
      { label: "Newsletter", href: "/fr/cahier" },
    ],
  },
];

export function V4CFooterE() {
  return (
    <footer className="relative bg-[var(--site-text)] text-[var(--site-bg)] py-10 px-8 lg:px-16">
      <div className="mx-auto max-w-[1340px]">
        <div className="flex items-baseline justify-between gap-4 mb-6 pb-4 border-b border-[var(--site-bg)]/15">
          <div className="flex items-baseline gap-3">
            <h3 className={`${garamond} italic text-[20px] text-[var(--site-bg)] leading-none`}>
              {FOOTER_DATA.brand}
            </h3>
            <p className={`${caveat} text-[13px] text-[var(--site-bg)]/55`}>
              joaillerie artisanale · {FOOTER_DATA.city} · {FOOTER_DATA.founded}
            </p>
          </div>
          <div className="flex gap-4">
            {FOOTER_DATA.social.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className={`${garamond} italic text-[12px] text-[var(--site-bg)]/70 hover:text-[var(--site-accent)] transition-colors`}>
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-5">
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className={`${garamond} italic text-[10px] tracking-[0.3em] text-[var(--site-accent)] mb-2`}>
                {col.title.toUpperCase()}
              </h4>
              <ul className="space-y-1">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className={`${garamond} italic text-[12px] text-[var(--site-bg)]/80 hover:text-[var(--site-bg)] transition-colors`}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className={`${garamond} italic text-[10px] tracking-[0.3em] text-[var(--site-accent)] mb-2`}>ATELIER</h4>
            <p className={`${garamond} italic text-[12px] text-[var(--site-bg)]/80 leading-snug`}>
              {FOOTER_DATA.address.street}
              <br />
              {FOOTER_DATA.address.zip} {FOOTER_DATA.address.city}
            </p>
            <p className={`${caveat} text-[12px] text-[var(--site-accent)] mt-1`}>
              {FOOTER_DATA.hours}
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-2 pt-3 border-t border-[var(--site-bg)]/10">
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
