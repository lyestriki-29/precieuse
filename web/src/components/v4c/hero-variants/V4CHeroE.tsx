import Image from "next/image";

const garamond = "font-[family-name:var(--font-eb-garamond)]";
const caveat = "font-[family-name:var(--font-caveat)]";
const inter = "font-[family-name:var(--font-inter)]";

// Variante E — Type-as-Image. Lettres géantes contenant l'image (background-clip).
export function V4CHeroE() {
  return (
    <section className="relative min-h-screen bg-[var(--site-bg)] pt-16 overflow-hidden flex flex-col">
      {/* Marqueurs typographiques fond */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, transparent 0 119px, var(--site-text) 119px 120px)",
        }}
      />

      {/* Top — petits métadata */}
      <div className="relative mx-auto max-w-[1440px] w-full px-8 lg:px-16 py-6 flex items-baseline justify-between border-b border-[var(--site-text)]/15">
        <span className={`${inter} text-[10px] uppercase tracking-[0.4em] text-[var(--site-text)]/55`}>
          Précieuse · joaillerie · Lisboa
        </span>
        <span className={`${caveat} text-[16px] text-[var(--site-caveat)] italic`}>
          chapitre I —
        </span>
        <span className={`${inter} text-[10px] uppercase tracking-[0.4em] text-[var(--site-text)]/55`}>
          MMXXVI
        </span>
      </div>

      {/* Bloc typographique géant — la photo remplit les lettres */}
      <div className="relative flex-1 flex items-center justify-center px-4 lg:px-12">
        <h1
          aria-label="Précieuse"
          className={`${garamond} italic leading-[0.78] tracking-[-0.04em] text-center select-none`}
          style={{
            fontSize: "clamp(120px, 22vw, 360px)",
            backgroundImage: "url(/images/bijoux-officiels/josephine.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center 40%",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            WebkitTextFillColor: "transparent",
            filter: "contrast(1.1) saturate(1.1)",
          }}
        >
          Précieuse
        </h1>

        {/* Texte de remplacement accessible — invisible, conservé pour l'esprit */}
        <span className="sr-only">Précieuse — joaillerie artisanale, Lisboa</span>

        {/* Image décorative en-dessous (révélée hors mask, ambiance) */}
        <div
          aria-hidden
          className="absolute inset-0 -z-10 opacity-[0.06]"
        >
          <Image
            src="/images/bijoux-officiels/josephine.jpg"
            alt=""
            fill
            sizes="100vw"
            priority
            className="object-cover"
          />
        </div>
      </div>

      {/* Sous-titre en regard, alignement asymétrique */}
      <div className="relative mx-auto max-w-[1440px] w-full px-8 lg:px-16 pb-10">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-4 lg:col-start-1">
            <span className={`${inter} text-[10px] uppercase tracking-[0.4em] text-[var(--site-text)]/45 block`}>
              001 ·
            </span>
            <p className={`${garamond} italic text-[20px] lg:text-[24px] text-[var(--site-text)] leading-snug mt-2`}>
              La pierre choisit la main qui la taille.
            </p>
          </div>

          <div className="col-span-12 lg:col-span-3 lg:col-start-7">
            <span className={`${caveat} text-[14px] text-[var(--site-caveat)] italic`}>
              — un atelier, à Lisbonne
            </span>
            <p className={`${inter} text-[11px] text-[var(--site-text)]/60 leading-relaxed mt-3 max-w-[28ch]`}>
              Chaque bague naît d&apos;une commande, d&apos;une main, d&apos;un nom.
              Aucun stock. Aucune répétition.
            </p>
          </div>

          <div className="col-span-12 lg:col-span-2 lg:col-start-11 self-end text-right">
            <span className={`${garamond} italic text-[14px] text-[var(--site-accent)] block`}>
              voir
            </span>
            <span className={`${inter} text-[10px] uppercase tracking-[0.4em] text-[var(--site-text)]/45 block mt-1`}>
              ↓ collection
            </span>
          </div>
        </div>
      </div>

      {/* Marque-page latéral */}
      <div
        aria-hidden
        className={`${garamond} italic absolute right-3 top-1/2 -translate-y-1/2 text-[12px] tracking-[0.4em] text-[var(--site-text)]/35 [writing-mode:vertical-rl] uppercase`}
      >
        chapitre · I · ouverture
      </div>
    </section>
  );
}
