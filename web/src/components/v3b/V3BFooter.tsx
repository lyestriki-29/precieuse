export function V3BFooter() {
  return (
    <footer className="bg-[#ffffff] border-t border-[#e8e6e1] py-16 px-6">
      <div className="max-w-[1080px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
          {/* Marque */}
          <div>
            <p className="font-[family-name:var(--font-cormorant)] text-[16px] font-light italic text-[#0d0d0d] mb-3">
              Précieuse
            </p>
            <p className="font-[family-name:var(--font-manrope)] text-[11px] font-light tracking-[0.15em] text-[#a8a39a] uppercase">
              Joaillerie artisanale
            </p>
            <p className="font-[family-name:var(--font-manrope)] text-[11px] font-light tracking-[0.15em] text-[#a8a39a] uppercase">
              Lisboa · Portugal
            </p>
          </div>

          {/* Adresse */}
          <div>
            <p className="font-[family-name:var(--font-manrope)] text-[10px] font-light tracking-[0.25em] text-[#b08d57] uppercase mb-3">
              Studio
            </p>
            <p className="font-[family-name:var(--font-manrope)] text-[12px] font-light text-[#0d0d0d]">
              Rua da Boavista, 84
            </p>
            <p className="font-[family-name:var(--font-manrope)] text-[12px] font-light text-[#0d0d0d]">
              1200-070 Lisboa
            </p>
            <p className="font-[family-name:var(--font-manrope)] text-[12px] font-light text-[#a8a39a] mt-2">
              Sur rendez-vous uniquement
            </p>
          </div>

          {/* Contact & mentions */}
          <div>
            <p className="font-[family-name:var(--font-manrope)] text-[10px] font-light tracking-[0.25em] text-[#b08d57] uppercase mb-3">
              Contact
            </p>
            <a
              href="mailto:contact@precieuse.pt"
              className="font-[family-name:var(--font-manrope)] text-[12px] font-light text-[#0d0d0d] hover:text-[#b08d57] transition-colors duration-200 block"
            >
              contact@precieuse.pt
            </a>
            <div className="mt-6 space-y-1">
              <a
                href="/fr/mentions-legales"
                className="font-[family-name:var(--font-manrope)] text-[10px] font-light tracking-[0.12em] text-[#a8a39a] uppercase hover:text-[#0d0d0d] transition-colors duration-200 block"
              >
                Mentions légales
              </a>
              <a
                href="/fr/confidentialite"
                className="font-[family-name:var(--font-manrope)] text-[10px] font-light tracking-[0.12em] text-[#a8a39a] uppercase hover:text-[#0d0d0d] transition-colors duration-200 block"
              >
                Politique de confidentialité
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-[#e8e6e1] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <p className="font-[family-name:var(--font-manrope)] text-[10px] font-light tracking-[0.12em] text-[#a8a39a] uppercase">
            © 2026 Précieuse — Tous droits réservés
          </p>
          <p className="font-[family-name:var(--font-manrope)] text-[10px] font-light tracking-[0.12em] text-[#a8a39a] uppercase">
            Bijoux numérotés · Certificats d'authenticité
          </p>
        </div>
      </div>
    </footer>
  );
}
