import Image from "next/image";

const garamond = "font-[family-name:var(--font-eb-garamond)]";
const caveat = "font-[family-name:var(--font-caveat)]";
const inter = "font-[family-name:var(--font-inter)]";

// Variante C — Cinematic letterbox. Bandes noires, credits style ouverture de film.
export function V4CHeroC() {
  return (
    <section className="relative min-h-screen bg-black text-[#e8d9b3] pt-16 overflow-hidden">
      {/* Image de fond N&B + flash or */}
      <div className="absolute inset-0">
        <Image
          src="/images/bijoux-officiels/josephine.jpg"
          alt=""
          fill
          sizes="100vw"
          priority
          className="object-cover opacity-70"
          style={{ filter: "grayscale(0.85) contrast(1.15) brightness(0.9)" }}
        />
        {/* Vignette dramatique */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.75) 75%, rgba(0,0,0,0.95) 100%)",
          }}
        />
        {/* Couche or chaude */}
        <div
          aria-hidden
          className="absolute inset-0 mix-blend-overlay opacity-40"
          style={{
            background:
              "radial-gradient(circle at 50% 55%, rgba(212,175,55,0.5), transparent 60%)",
          }}
        />
      </div>

      {/* Bandes noires haut/bas — letterbox */}
      <div aria-hidden className="absolute top-16 inset-x-0 h-[18vh] bg-black z-10 border-b border-[#d4af37]/15" />
      <div aria-hidden className="absolute bottom-0 inset-x-0 h-[18vh] bg-black z-10 border-t border-[#d4af37]/15" />

      {/* Bande supérieure — credits */}
      <div className="relative z-20 mx-auto max-w-[1440px] px-8 lg:px-16 pt-6 pb-4 flex items-start justify-between">
        <div>
          <span className={`${inter} block text-[10px] uppercase tracking-[0.5em] text-[#d4af37]/70`}>
            Maison Précieuse présente
          </span>
          <span className={`${inter} block text-[10px] uppercase tracking-[0.4em] text-white/35 mt-1`}>
            une collection en cinq pièces
          </span>
        </div>
        <span className={`${inter} text-[10px] uppercase tracking-[0.5em] text-white/35`}>
          MMXXVI · 4:3 · noir &amp; or
        </span>
      </div>

      {/* Cœur — titre type carton de film */}
      <div className="relative z-20 mx-auto max-w-[1440px] px-8 lg:px-16 min-h-[64vh] flex flex-col items-center justify-center text-center">
        <span className={`${inter} text-[11px] uppercase tracking-[0.6em] text-[#d4af37]/80 mb-10`}>
          un film de Eméline
        </span>

        <h1
          className={`${garamond} italic leading-[0.85] text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.6)]`}
          style={{ fontSize: "clamp(80px, 14vw, 220px)" }}
        >
          Précieuse
        </h1>

        <span className={`${caveat} text-[26px] text-[#d4af37] mt-8 italic`}>
          — bientôt —
        </span>

        <p className={`${inter} text-[11px] uppercase tracking-[0.5em] text-white/45 mt-12 max-w-md leading-loose`}>
          tournage Lisbonne · printemps mmxxvi
          <br />
          aucune image retouchée · aucun bijou pressé
        </p>
      </div>

      {/* Bande inférieure — generique */}
      <div className="absolute bottom-0 inset-x-0 z-30 mx-auto max-w-[1440px] px-8 lg:px-16 pb-6 flex items-end justify-between gap-8">
        <div className={`${inter} text-[9px] uppercase tracking-[0.45em] text-white/45 leading-loose`}>
          <span className="block">Direction · Eméline</span>
          <span className="block">Photographie · F. Almeida</span>
        </div>
        <div className={`${inter} text-[9px] uppercase tracking-[0.45em] text-white/45 leading-loose text-center`}>
          <span className="block text-[#d4af37]/80">⏵ lecture</span>
          <span className="block">scrollez pour démarrer</span>
        </div>
        <div className={`${inter} text-[9px] uppercase tracking-[0.45em] text-white/45 leading-loose text-right`}>
          <span className="block">Lisboa · Bairro Alto</span>
          <span className="block">© Précieuse MMXXVI</span>
        </div>
      </div>
    </section>
  );
}
