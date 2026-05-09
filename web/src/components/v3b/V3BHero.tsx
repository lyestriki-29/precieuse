import Image from "next/image";

export function V3BHero() {
  return (
    <section className="min-h-screen bg-[#ffffff] flex flex-col items-center justify-center px-6 pt-14">
      <div className="max-w-[1080px] w-full mx-auto">
        {/* Titre galerie */}
        <div className="text-center mb-20">
          <p className="font-[family-name:var(--font-manrope)] text-[10px] font-light tracking-[0.35em] text-[#a8a39a] uppercase mb-6">
            Galerie · Lisboa — 2026
          </p>
          <h1 className="font-[family-name:var(--font-cormorant)] text-[88px] sm:text-[120px] font-light italic text-[#0d0d0d] leading-none tracking-[-0.02em]">
            Précieuse
          </h1>
        </div>

        {/* Œuvre du moment */}
        <div className="relative w-full max-w-[520px] mx-auto">
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src="/images/stitch-v2/hero-eugenie-hand-silk.jpg"
              alt="Eugénie — Or 19kt, diamant navette"
              fill
              sizes="(max-width: 768px) 90vw, 520px"
              className="object-cover"
              priority
            />
          </div>

          {/* Cartel musée */}
          <div className="mt-8 border-t border-[#e8e6e1] pt-6">
            <p className="font-[family-name:var(--font-manrope)] text-[11px] font-light tracking-[0.2em] text-[#b08d57] mb-2">
              № 01
            </p>
            <p className="font-[family-name:var(--font-cormorant)] text-[22px] font-light italic text-[#0d0d0d] mb-3">
              Eugénie
            </p>
            <p className="font-[family-name:var(--font-manrope)] text-[11px] font-light tracking-[0.12em] text-[#a8a39a] uppercase">
              Or 19kt · Diamant navette GVS · 2026
            </p>
            <p className="font-[family-name:var(--font-manrope)] text-[11px] font-light tracking-[0.12em] text-[#a8a39a] uppercase mt-1">
              Acquisition sur demande
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="text-center mt-24 mb-10">
          <span className="font-[family-name:var(--font-manrope)] text-[10px] font-light tracking-[0.3em] text-[#e8e6e1] uppercase">
            ↓
          </span>
        </div>
      </div>
    </section>
  );
}
