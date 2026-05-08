import Link from "next/link";

const playfair = "font-[family-name:var(--font-playfair)]";
const inter = "font-[family-name:var(--font-inter)]";

export function V2Footer() {
  return (
    <footer className="w-full border-t border-[#cbc4d2]/30 bg-[#fdf7ff] py-24 sm:py-40">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 px-6 sm:px-10 md:grid-cols-2 lg:px-20">
        <div className="flex flex-col gap-12">
          <div className={`${playfair} text-[40px] sm:text-[48px] tracking-widest uppercase text-[#4f378a]`}>
            PRÉCIEUSE
          </div>
          <p className={`${inter} max-w-sm text-[16px] leading-[1.6] font-light text-[#494551]`}>
            L&apos;expression ultime de la joaillerie française, où chaque
            création raconte une histoire de passion et d&apos;excellence
            artisanale.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className={`${inter} text-[12px] font-medium uppercase tracking-[0.15em] text-[#494551] underline decoration-1 underline-offset-4 hover:text-[#4f378a]`}
            >
              Instagram
            </a>
            <a
              href="#"
              className={`${inter} text-[12px] font-medium uppercase tracking-[0.15em] text-[#494551] underline decoration-1 underline-offset-4 hover:text-[#4f378a]`}
            >
              Pinterest
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-10">
          <div className="flex flex-col gap-4">
            <h6 className={`${inter} mb-2 text-[12px] font-medium uppercase tracking-[0.15em] text-[#4f378a]`}>
              L&apos;ATELIER
            </h6>
            {[
              ["Le savoir-faire", "/fr/creatrice"],
              ["Approvisionnement éthique", "/fr"],
              ["Entretien", "/fr"],
            ].map(([label, href]) => (
              <Link
                key={label}
                href={href}
                className={`${inter} text-[16px] font-light text-[#494551] hover:text-[#4f378a] transition-colors`}
              >
                {label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <h6 className={`${inter} mb-2 text-[12px] font-medium uppercase tracking-[0.15em] text-[#4f378a]`}>
              SERVICES
            </h6>
            {[
              ["Sur-mesure", "/fr/sur-mesure"],
              ["Livraison & retours", "/fr/cgv"],
              ["Contact", "/fr/contact"],
            ].map(([label, href]) => (
              <Link
                key={label}
                href={href}
                className={`${inter} text-[16px] font-light text-[#494551] hover:text-[#4f378a] transition-colors`}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto mt-24 max-w-[1440px] px-6 text-center sm:px-10 lg:px-20">
        <p className={`${inter} text-[10px] uppercase tracking-[0.15em] text-[#494551]/60`}>
          © {new Date().getFullYear()} Atelier Précieuse · Tous droits réservés
        </p>
      </div>
    </footer>
  );
}
