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
      {/* Double cercle tampon */}
      <circle cx="90" cy="90" r="82" stroke="#3d2817" strokeWidth="2" />
      <circle cx="90" cy="90" r="72" stroke="#3d2817" strokeWidth="0.8" />

      {/* Texte en arc haut — "Précieuse · Lisboa" */}
      <path id="arc-top" d="M 20 90 A 70 70 0 0 1 160 90" fill="none" />
      <text fontSize="11" fill="#3d2817" letterSpacing="3" fontFamily="serif" fontStyle="italic">
        <textPath href="#arc-top" startOffset="5%">Précieuse · Lisboa</textPath>
      </text>

      {/* Texte en arc bas — "MMXXVI" */}
      <path id="arc-bot" d="M 20 90 A 70 70 0 0 0 160 90" fill="none" />
      <text fontSize="11" fill="#3d2817" letterSpacing="5" fontFamily="serif">
        <textPath href="#arc-bot" startOffset="30%">MMXXVI</textPath>
      </text>

      {/* Étoile centrale décorative */}
      <path d="M90 68 L93 82 L107 82 L96 91 L100 105 L90 97 L80 105 L84 91 L73 82 L87 82Z"
        stroke="#3d2817" strokeWidth="0.8" fill="none" opacity="0.6" />
    </svg>
  );
}

export function V3CFooter() {
  return (
    <footer className="relative bg-[#3d2817] py-20 px-8 lg:px-16">
      <div className="mx-auto max-w-[1440px]">
        {/* Note de bas de carnet */}
        <div className="text-center mb-12">
          <span className={`${garamond} italic text-[14px] text-[#a08552]`}>
            p. 08 — fin du chapitre I
          </span>
        </div>

        {/* Tampon + signature */}
        <div className="flex flex-col items-center gap-6 mb-16">
          <TamponSVG />
          <span className={`${caveat} text-[32px] text-[#f4ede0]/70`}>
            Eméline
          </span>
          <address className={`${caveat} text-[16px] text-[#f4ede0]/50 not-italic text-center`}>
            Rua da Boavista, 84 — 1200-070 Lisboa<br />
            sur rendez-vous · mardi–samedi
          </address>
        </div>

        {/* Liseret séparateur */}
        <div className="border-t border-double border-[#f4ede0]/10 mb-8" />

        {/* Mentions discrètes */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="font-[family-name:var(--font-inter)] text-[11px] font-light text-[#f4ede0]/30">
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
                className="font-[family-name:var(--font-inter)] text-[11px] font-light text-[#f4ede0]/30 hover:text-[#f4ede0]/60 transition-colors"
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
