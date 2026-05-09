import Link from "next/link";

const inter = "font-[family-name:var(--font-inter)]";
const playfair = "font-[family-name:var(--font-playfair)]";

export function V3Footer() {
  return (
    <footer className="border-t border-[#cbc4d2]/30 bg-[#f8f2fa] px-6 py-24 sm:px-10 sm:py-40 lg:px-20">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 md:grid-cols-2">
        <div>
          <Link
            href="/fr/v3"
            className={`${playfair} mb-12 block text-[40px] sm:text-[48px] italic text-[#4f378a]`}
          >
            Précieuse
          </Link>
          <p className={`${inter} mb-12 max-w-xs text-[16px] leading-[1.6] font-light text-[#494551]`}>
            Joaillerie d&apos;émotion, conçue entre Paris et Porto, pour durer
            plusieurs vies.
          </p>
          <div className="flex gap-8">
            <a href="#" className={`${inter} text-[12px] font-medium uppercase tracking-[0.15em] hover:text-[#4f378a]`}>
              Instagram
            </a>
            <a href="#" className={`${inter} text-[12px] font-medium uppercase tracking-[0.15em] hover:text-[#4f378a]`}>
              WhatsApp
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-10 md:justify-items-end">
          <div className="flex flex-col gap-4">
            {[
              ["Collections", "/fr/collection"],
              ["Sur-Mesure", "/fr/sur-mesure"],
              ["L'Atelier", "/fr/creatrice"],
              ["Journal", "#"],
            ].map(([l, h]) => (
              <Link
                key={l}
                href={h}
                className={`${inter} text-[16px] font-light text-[#494551] hover:text-[#4f378a] transition-colors`}
              >
                {l}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            {[
              ["Mentions légales", "/fr/mentions-legales"],
              ["Entretien", "#"],
              ["Livraison", "/fr/cgv"],
              ["Contact", "/fr/contact"],
            ].map(([l, h]) => (
              <Link
                key={l}
                href={h}
                className={`${inter} text-[16px] font-light text-[#494551] hover:text-[#4f378a] transition-colors`}
              >
                {l}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto mt-24 flex max-w-[1440px] flex-col items-center justify-between gap-3 opacity-40 md:flex-row">
        <p className={`${inter} text-[12px] font-medium uppercase tracking-[0.15em]`}>
          © {new Date().getFullYear()} Précieuse. Tous droits réservés.
        </p>
        <p className={`${inter} text-[12px] font-medium uppercase tracking-[0.15em]`}>
          Joaillerie éditoriale
        </p>
      </div>
    </footer>
  );
}
