import Link from "next/link";

const garamond = "font-[family-name:var(--font-eb-garamond)]";
const caveat = "font-[family-name:var(--font-caveat)]";

function TamponSVG() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 180 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[120px] h-[120px] opacity-30"
    >
      <circle cx="90" cy="90" r="82" stroke="#3d2817" strokeWidth="2" />
      <circle cx="90" cy="90" r="72" stroke="#3d2817" strokeWidth="0.8" />
      <path id="arc-top-v4" d="M 20 90 A 70 70 0 0 1 160 90" fill="none" />
      <text fontSize="11" fill="#3d2817" letterSpacing="3" fontFamily="serif" fontStyle="italic">
        <textPath href="#arc-top-v4" startOffset="5%">Précieuse · Lisboa</textPath>
      </text>
      <path id="arc-bot-v4" d="M 20 90 A 70 70 0 0 0 160 90" fill="none" />
      <text fontSize="11" fill="#3d2817" letterSpacing="5" fontFamily="serif">
        <textPath href="#arc-bot-v4" startOffset="30%">MMXXVI</textPath>
      </text>
      <path d="M90 68 L93 82 L107 82 L96 91 L100 105 L90 97 L80 105 L84 91 L73 82 L87 82Z"
        stroke="#3d2817" strokeWidth="0.8" fill="none" opacity="0.6" />
    </svg>
  );
}

export function V4CFooter() {
  return (
    <footer className="relative bg-[var(--site-text)] py-20 px-8 lg:px-16">
      <div className="mx-auto max-w-[1440px]">
        <div className="text-center mb-12">
          <span className={`${garamond} italic text-[14px] text-[var(--site-accent)]`}>
            p. 14 — fin du chapitre II
          </span>
        </div>

        <div className="flex flex-col items-center gap-6 mb-16">
          <TamponSVG />
          <span className={`${caveat} text-[32px] text-[var(--site-bg)]/70`}>Eméline</span>
          <address className={`${caveat} text-[16px] text-[var(--site-bg)]/50 not-italic text-center`}>
            Rua da Boavista, 84 — 1200-070 Lisboa<br />
            sur rendez-vous · mardi–samedi
          </address>
        </div>

        <div className="border-t border-double border-[var(--site-bg)]/10 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="font-[family-name:var(--font-inter)] text-[11px] font-light text-[var(--site-bg)]/30">
            © Précieuse MMXXVI — Joaillerie artisanale, Portugal
          </span>
          <nav className="flex gap-6">
            {[
              { label: "Mentions légales", href: "/fr/mentions-legales" },
              { label: "Confidentialité", href: "/fr/confidentialite" },
              { label: "CGV", href: "/fr/cgv" },
            ].map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="font-[family-name:var(--font-inter)] text-[11px] font-light text-[var(--site-bg)]/30 hover:text-[var(--site-bg)]/60 transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
