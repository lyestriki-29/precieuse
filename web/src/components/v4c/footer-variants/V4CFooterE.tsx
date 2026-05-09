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
      { label: "Engagements", href: "/fr/engagements" },
    ],
  },
  {
    title: "Collection",
    links: [
      { label: "Pièces signatures", href: "/fr/collection" },
      { label: "Sur-mesure", href: "/fr/sur-mesure" },
      { label: "Pierres précieuses", href: "/fr/matieres" },
      { label: "Archives", href: "/fr/archives" },
    ],
  },
  {
    title: "Pratique",
    links: [
      { label: "Visite atelier", href: "/fr/visite" },
      { label: "Contact", href: "/fr/contact" },
      { label: "Cahier · Newsletter", href: "/fr/cahier" },
      { label: "Soin & garantie", href: "/fr/soin" },
    ],
  },
];

export function V4CFooterE() {
  return (
    <footer className="relative bg-[var(--site-text)] text-[var(--site-bg)] py-20 px-8 lg:px-16">
      <div className="mx-auto max-w-[1340px]">
        {/* En-tête maison */}
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14 pb-8 border-b border-[var(--site-bg)]/15">
          <div>
            <h3 className={`${garamond} italic text-[36px] text-[var(--site-bg)] leading-none mb-2`}>
              {FOOTER_DATA.brand}
            </h3>
            <p className={`${caveat} text-[16px] text-[var(--site-bg)]/60`}>
              joaillerie artisanale · {FOOTER_DATA.city} · depuis {FOOTER_DATA.founded}
            </p>
          </div>
          <div className="flex gap-6">
            {FOOTER_DATA.social.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className={`${garamond} italic text-[14px] text-[var(--site-bg)]/70 hover:text-[var(--site-accent)] transition-colors border-b border-[var(--site-bg)]/30 pb-0.5`}>
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* 4 colonnes */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 mb-14">
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className={`${garamond} italic text-[11px] tracking-[0.4em] text-[var(--site-accent)] mb-5`}>
                {col.title.toUpperCase()}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className={`${garamond} italic text-[14px] text-[var(--site-bg)]/80 hover:text-[var(--site-bg)] transition-colors`}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* 4ème col — adresse */}
          <div>
            <h4 className={`${garamond} italic text-[11px] tracking-[0.4em] text-[var(--site-accent)] mb-5`}>
              ATELIER
            </h4>
            <p className={`${garamond} italic text-[14px] text-[var(--site-bg)]/80 leading-relaxed`}>
              {FOOTER_DATA.address.street}
              <br />
              {FOOTER_DATA.address.zip} {FOOTER_DATA.address.city}
              <br />
              {FOOTER_DATA.address.country}
            </p>
            <p className={`${caveat} text-[14px] text-[var(--site-accent)] mt-3`}>
              {FOOTER_DATA.hours}
            </p>
          </div>
        </div>

        {/* Pied légal */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-[var(--site-bg)]/15">
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
