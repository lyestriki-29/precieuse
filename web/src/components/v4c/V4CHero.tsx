import Image from "next/image";

const garamond = "font-[family-name:var(--font-eb-garamond)]";
const caveat = "font-[family-name:var(--font-caveat)]";

export function V4CHero() {
  return (
    <section className="relative min-h-screen bg-[var(--site-bg)] flex items-center overflow-hidden pt-16">
      {/* Texture grain papier vélin */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
          backgroundSize: "256px 256px",
        }}
      />

      <div className="relative mx-auto grid max-w-[1440px] grid-cols-1 gap-12 px-8 py-20 lg:grid-cols-2 lg:gap-0 lg:px-16 lg:py-32">
        {/* Texte gauche */}
        <div className="flex flex-col justify-center">
          <span className={`${caveat} text-[18px] text-[var(--site-caveat)] mb-6 block`}>
            — ouverture du carnet, printemps 2026
          </span>

          <h1
            className={`${garamond} italic text-[var(--site-text)] leading-[0.9] mb-8 text-[72px] sm:text-[96px] lg:text-[120px]`}
          >
            Le Carnet
          </h1>

          <p className={`${caveat} text-[22px] text-[var(--site-caveat)] mb-4 leading-relaxed`}>
            — macro, détail, lumière
          </p>

          <p className="font-[family-name:var(--font-inter)] text-[15px] font-light text-[var(--site-text)]/80 leading-relaxed max-w-sm mt-4">
            Chaque pièce naît ici, sur cet établi, dans la lumière de Lisbonne. Ce carnet en garde la mémoire.
          </p>

          <span className={`${garamond} italic text-[13px] text-[var(--site-accent)] mt-16 block`}>
            p. 01
          </span>
        </div>

        {/* Image droite — macro bague sur vélin */}
        <div className="relative flex items-center justify-center lg:justify-end">
          <div className="relative w-full max-w-[520px] aspect-[3/4]">
            <Image
              src="/images/stitch-v2/macro-2-navette-closeup.jpg"
              alt="Macro détail d'une bague navette Précieuse sur papier vélin"
              fill
              sizes="(max-width: 1024px) 100vw, 520px"
              priority
              className="object-cover"
            />
            {/* Esquisse SVG crayon par-dessus */}
            <svg
              aria-hidden
              className="pointer-events-none absolute inset-0 w-full h-full"
              viewBox="0 0 520 693"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="12" y="18" width="496" height="657" rx="2"
                stroke="#3d2817" strokeWidth="1" strokeDasharray="4 6" strokeOpacity="0.35"
              />
              <path d="M12 80 Q 40 60 80 18" stroke="#3d2817" strokeWidth="1.2"
                strokeLinecap="round" strokeOpacity="0.3" />
              <path d="M440 675 Q 480 690 508 660" stroke="#3d2817" strokeWidth="1.2"
                strokeLinecap="round" strokeOpacity="0.3" />
              {/* Ellipse indiquant la pierre */}
              <ellipse cx="260" cy="360" rx="100" ry="80"
                stroke="#1e3a5f" strokeWidth="1" strokeDasharray="3 8" strokeOpacity="0.3" />
              <path d="M170 260 Q 210 240 250 275" stroke="#1e3a5f" strokeWidth="1.2"
                strokeLinecap="round" strokeOpacity="0.4" />
              <path d="M248 273 L250 275 L246 278" stroke="#1e3a5f" strokeWidth="1"
                strokeLinecap="round" strokeOpacity="0.4" />
            </svg>
          </div>

          {/* Liseret séparateur gauche */}
          <div className="absolute -left-6 top-1/4 hidden h-1/2 flex-col justify-center lg:flex">
            <div className="w-px h-full border-l-2 border-double border-[var(--site-text)]/20" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 border-t-2 border-double border-[var(--site-text)]/15" />
    </section>
  );
}
