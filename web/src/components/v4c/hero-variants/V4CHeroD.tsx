import Image from "next/image";

const garamond = "font-[family-name:var(--font-eb-garamond)]";
const caveat = "font-[family-name:var(--font-caveat)]";
const inter = "font-[family-name:var(--font-inter)]";

// Variante D — Diorama vitrine nocturne. Sombre, halo radial, profondeur.
export function V4CHeroD() {
  return (
    <section className="relative min-h-screen bg-[#0e0a06] text-[#f4ede0] pt-16 overflow-hidden">
      {/* Halo lumineux radial */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 55%, rgba(212,175,55,0.18), transparent 60%), radial-gradient(circle at 50% 50%, rgba(255,228,170,0.08), transparent 70%)",
        }}
      />

      {/* Particules d'or scintillantes (statiques, décoratives) */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        {[
          [12, 22], [18, 78], [24, 35], [30, 60], [36, 82], [42, 18],
          [48, 70], [54, 28], [62, 88], [68, 42], [74, 15], [80, 64],
          [86, 30], [88, 82], [16, 50],
        ].map(([t, l], i) => (
          <span
            key={i}
            className="absolute w-[2px] h-[2px] rounded-full bg-[#d4af37]"
            style={{
              top: `${t}%`,
              left: `${l}%`,
              opacity: 0.3 + ((i * 17) % 50) / 100,
              boxShadow: "0 0 4px rgba(212,175,55,0.8)",
            }}
          />
        ))}
      </div>

      {/* Grain */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.95' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative mx-auto max-w-[1440px] px-8 lg:px-16 min-h-[calc(100vh-4rem)] grid grid-cols-1 lg:grid-cols-[1fr_1.1fr_1fr] gap-8 items-center pt-12 pb-16">
        {/* Strate gauche — texte murmuré */}
        <div className="relative z-20 lg:pl-4">
          <span className={`${inter} text-[10px] uppercase tracking-[0.5em] text-[#d4af37]/70 block mb-6`}>
            ◆ pièce unique · 01 / 01
          </span>
          <h1
            className={`${garamond} italic leading-[0.92] text-[#f4ede0]`}
            style={{ fontSize: "clamp(48px, 6vw, 84px)" }}
          >
            Joséphine
            <br />
            <span className="text-[#d4af37]">veille</span>
            <br />
            la nuit.
          </h1>
          <p className={`${caveat} text-[20px] text-[#f4ede0]/70 mt-6 italic leading-snug max-w-[260px]`}>
            taille émeraude · or 18k · saphir Ceylan, 1.4ct
          </p>
        </div>

        {/* Strate centrale — bague flottante avec ombre dramatique */}
        <div className="relative z-30 flex items-center justify-center">
          {/* Anneau de lumière */}
          <div
            aria-hidden
            className="absolute w-[420px] h-[420px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(212,175,55,0.35), transparent 65%)",
              filter: "blur(20px)",
            }}
          />
          {/* Cadre de la pièce */}
          <div className="relative w-[280px] lg:w-[360px] aspect-square">
            <div className="absolute inset-0 rounded-full overflow-hidden border border-[#d4af37]/25 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8),inset_0_0_40px_rgba(212,175,55,0.15)]">
              <Image
                src="/images/bijoux-officiels/josephine.jpg"
                alt="Joséphine"
                fill
                sizes="(min-width: 1024px) 360px, 280px"
                priority
                className="object-cover"
                style={{ filter: "brightness(1.1) contrast(1.05)" }}
              />
            </div>
            {/* Cercles concentriques */}
            <span aria-hidden className="absolute -inset-4 rounded-full border border-[#d4af37]/15" />
            <span aria-hidden className="absolute -inset-10 rounded-full border border-[#d4af37]/8" />
          </div>

          {/* Étiquette suspendue */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#0e0a06] border border-[#d4af37]/30 px-5 py-2 z-40">
            <span className={`${inter} text-[9px] uppercase tracking-[0.4em] text-[#d4af37]/70 block`}>
              n° d&apos;archive
            </span>
            <span className={`${garamond} italic text-[14px] text-[#f4ede0]`}>
              PRC · 2026 · 001
            </span>
          </div>
        </div>

        {/* Strate droite — encart contemplatif */}
        <div className="relative z-20 lg:text-right lg:pr-4">
          <span className={`${inter} text-[10px] uppercase tracking-[0.5em] text-[#d4af37]/70 block mb-6`}>
            visite à la lampe ◆
          </span>
          <p className={`${garamond} italic text-[18px] lg:text-[20px] text-[#f4ede0]/85 leading-relaxed`}>
            La vitrine est restée
            <br />
            allumée pour vous.
          </p>
          <p className={`${caveat} text-[18px] text-[#d4af37] mt-4 italic`}>
            — pousser la porte
          </p>
          <div className={`${inter} mt-10 text-[9px] uppercase tracking-[0.5em] text-[#f4ede0]/40 leading-loose`}>
            Rua da Boavista, 84
            <br />
            mardi → samedi · sur RDV
          </div>
        </div>
      </div>
    </section>
  );
}
