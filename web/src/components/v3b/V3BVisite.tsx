export function V3BVisite() {
  return (
    <section id="visite" className="bg-[#ffffff] py-40 sm:py-56 px-6">
      <div className="max-w-[1080px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Informations */}
          <div>
            <p className="font-[family-name:var(--font-manrope)] text-[10px] font-light tracking-[0.35em] text-[#b08d57] uppercase mb-6">
              Studio
            </p>
            <h2 className="font-[family-name:var(--font-cormorant)] text-[38px] sm:text-[48px] font-light italic text-[#0d0d0d] leading-tight mb-14">
              Visite
            </h2>

            <div className="space-y-8">
              <div className="border-t border-[#e8e6e1] pt-6">
                <p className="font-[family-name:var(--font-manrope)] text-[10px] font-light tracking-[0.2em] text-[#a8a39a] uppercase mb-2">
                  Adresse
                </p>
                <p className="font-[family-name:var(--font-cormorant)] text-[20px] font-light italic text-[#0d0d0d]">
                  Rua da Boavista, 84
                </p>
                <p className="font-[family-name:var(--font-cormorant)] text-[20px] font-light italic text-[#0d0d0d]">
                  1200-070 Lisboa
                </p>
              </div>

              <div className="border-t border-[#e8e6e1] pt-6">
                <p className="font-[family-name:var(--font-manrope)] text-[10px] font-light tracking-[0.2em] text-[#a8a39a] uppercase mb-2">
                  Horaires
                </p>
                <p className="font-[family-name:var(--font-manrope)] text-[13px] font-light text-[#0d0d0d]">
                  Sur rendez-vous uniquement
                </p>
                <p className="font-[family-name:var(--font-manrope)] text-[13px] font-light text-[#a8a39a]">
                  Du mardi au samedi
                </p>
              </div>

              <div className="border-t border-[#e8e6e1] pt-6">
                <p className="font-[family-name:var(--font-manrope)] text-[10px] font-light tracking-[0.2em] text-[#a8a39a] uppercase mb-2">
                  Contact
                </p>
                <a
                  href="mailto:contact@precieuse.pt"
                  className="font-[family-name:var(--font-manrope)] text-[13px] font-light text-[#0d0d0d] hover:text-[#b08d57] transition-colors duration-200"
                >
                  contact@precieuse.pt
                </a>
              </div>

              <div className="border-t border-[#e8e6e1] pt-8">
                <a
                  href="mailto:contact@precieuse.pt?subject=Demande%20de%20visite%20studio"
                  className="inline-block font-[family-name:var(--font-manrope)] text-[11px] font-light tracking-[0.2em] text-[#0d0d0d] uppercase border border-[#0d0d0d] px-8 py-3 hover:bg-[#0d0d0d] hover:text-[#ffffff] transition-colors duration-300"
                >
                  Programmer une visite
                </a>
              </div>
            </div>
          </div>

          {/* Carte abstraite Lisbonne */}
          <div className="lg:pt-16">
            <div className="bg-[#fafaf8] border border-[#e8e6e1] aspect-square flex items-center justify-center p-10">
              <svg
                viewBox="0 0 400 400"
                className="w-full h-full max-w-[320px]"
                aria-label="Plan abstrait — Lisbonne, Rua da Boavista"
              >
                {/* Grille de rues abstraite */}
                <line x1="40" y1="200" x2="360" y2="200" stroke="#e8e6e1" strokeWidth="1" />
                <line x1="200" y1="40" x2="200" y2="360" stroke="#e8e6e1" strokeWidth="1" />
                <line x1="40" y1="140" x2="360" y2="140" stroke="#e8e6e1" strokeWidth="0.5" />
                <line x1="40" y1="260" x2="360" y2="260" stroke="#e8e6e1" strokeWidth="0.5" />
                <line x1="120" y1="40" x2="120" y2="360" stroke="#e8e6e1" strokeWidth="0.5" />
                <line x1="280" y1="40" x2="280" y2="360" stroke="#e8e6e1" strokeWidth="0.5" />
                {/* Diagonale Tage */}
                <line x1="40" y1="320" x2="360" y2="280" stroke="#e8e6e1" strokeWidth="1.5" />
                {/* Point de localisation */}
                <circle cx="200" cy="200" r="4" fill="#b08d57" />
                <circle cx="200" cy="200" r="12" fill="none" stroke="#b08d57" strokeWidth="0.8" />
                {/* Label */}
                <text
                  x="216"
                  y="196"
                  fontSize="7"
                  fill="#a8a39a"
                  fontFamily="sans-serif"
                  letterSpacing="1.5"
                >
                  RUA DA BOAVISTA
                </text>
                <text
                  x="216"
                  y="207"
                  fontSize="6"
                  fill="#e8e6e1"
                  fontFamily="sans-serif"
                  letterSpacing="1"
                >
                  LISBOA
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
