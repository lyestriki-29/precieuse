import Link from "next/link";

export function V3AFooter() {
  return (
    <footer className="bg-[#1a1614] px-12 sm:px-20 lg:px-32 pt-20 pb-12">
      <div className="mx-auto max-w-[1280px]">
        {/* Colophon / Ours */}
        <div className="border border-[#d4cdc1]/20 p-8 mb-16 text-center">
          <p className="font-[family-name:var(--font-jetbrains)] text-[10px] uppercase tracking-[0.5em] text-[#d4cdc1]/50">
            Précieuse · Atelier Ourivesaria, Lisboa<br className="sm:hidden" />
            <span className="hidden sm:inline"> · </span>
            Maison fondée MMXXVI · Tirage limité
          </p>
        </div>

        {/* Main footer grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <h2 className="font-[family-name:var(--font-bodoni)] text-[40px] italic text-[#f6f1ea] mb-4 leading-none">
              Précieuse
            </h2>
            <p className="font-[family-name:var(--font-inter)] text-[13px] font-light leading-[1.8] text-[#d4cdc1]/60">
              Joaillerie artisanale, dessinée et fabriquée à la main à Lisbonne. Or 19kt, diamants GVS certifiés. Pièces sur commande, délai 4 à 8 semaines.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-[family-name:var(--font-jetbrains)] text-[10px] uppercase tracking-[0.4em] text-[#4a4540] mb-6">
              Navigation
            </p>
            <nav className="flex flex-col gap-3">
              {[
                { label: "Collections", href: "/fr/collection" },
                { label: "Sur-Mesure", href: "/fr/sur-mesure" },
                { label: "La Créatrice", href: "/fr/creatrice" },
                { label: "Contact", href: "/fr/contact" },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="font-[family-name:var(--font-inter)] text-[13px] font-light text-[#d4cdc1]/70 hover:text-[#f6f1ea] transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact & Adresse */}
          <div>
            <p className="font-[family-name:var(--font-jetbrains)] text-[10px] uppercase tracking-[0.4em] text-[#4a4540] mb-6">
              Atelier
            </p>
            <address className="not-italic space-y-2">
              <p className="font-[family-name:var(--font-inter)] text-[13px] font-light text-[#d4cdc1]/70">
                Lisbonne, Portugal
              </p>
              <p className="font-[family-name:var(--font-inter)] text-[13px] font-light text-[#d4cdc1]/70">
                Quartier de l&rsquo;Ourivesaria
              </p>
              <Link
                href="mailto:bonjour@precieuse.fr"
                className="block font-[family-name:var(--font-inter)] text-[13px] font-light text-[#d4cdc1]/70 hover:text-[#f6f1ea] transition-colors duration-300 mt-4"
              >
                bonjour@precieuse.fr
              </Link>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#d4cdc1]/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-[family-name:var(--font-jetbrains)] text-[10px] uppercase tracking-[0.3em] text-[#4a4540]">
            © MMXXVI Précieuse — Tous droits réservés
          </p>
          <div className="flex gap-8">
            {[
              { label: "Mentions légales", href: "/fr/mentions-legales" },
              { label: "Confidentialité", href: "/fr/confidentialite" },
              { label: "CGV", href: "/fr/cgv" },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-[family-name:var(--font-jetbrains)] text-[10px] uppercase tracking-[0.2em] text-[#4a4540] hover:text-[#d4cdc1] transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
