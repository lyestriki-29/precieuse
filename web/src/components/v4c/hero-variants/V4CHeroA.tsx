import Image from "next/image";

const garamond = "font-[family-name:var(--font-eb-garamond)]";
const caveat = "font-[family-name:var(--font-caveat)]";
const inter = "font-[family-name:var(--font-inter)]";

// Variante A — Éditorial Magazine. Pleine typo italique gigantesque, masthead, p.01.
export function V4CHeroA() {
  return (
    <section className="relative min-h-screen bg-[var(--site-bg)] pt-16 overflow-hidden">
      {/* Grain papier */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Masthead haut — type Vogue/AnOther */}
      <header className="relative mx-auto max-w-[1440px] px-8 lg:px-16 py-6 border-b-2 border-double border-[var(--site-text)]/25">
        <div className={`${inter} flex items-center justify-between text-[10px] uppercase tracking-[0.4em] text-[var(--site-text)]/60`}>
          <span>Numéro II · Printemps MMXXVI</span>
          <span className={`${garamond} italic text-[20px] tracking-normal text-[var(--site-text)] normal-case`}>
            Précieuse
          </span>
          <span>Lisboa · €</span>
        </div>
      </header>

      {/* Bloc principal — typo qui dépasse */}
      <div className="relative mx-auto max-w-[1440px] px-8 lg:px-16 pt-12 pb-20">
        <div className="grid grid-cols-12 gap-6">
          {/* Numéro de page éditorial */}
          <div className="col-span-12 lg:col-span-2 lg:pt-4">
            <span className={`${garamond} italic text-[14px] text-[var(--site-accent)] tracking-[0.3em]`}>
              p. 01
            </span>
            <span className={`${caveat} block text-[18px] text-[var(--site-caveat)] mt-2 leading-tight`}>
              édito —<br />par Eméline
            </span>
          </div>

          {/* Titre géant italique */}
          <div className="col-span-12 lg:col-span-10">
            <h1
              className={`${garamond} italic text-[var(--site-text)] leading-[0.82] tracking-[-0.02em]`}
              style={{ fontSize: "clamp(72px, 13vw, 196px)" }}
            >
              Une <span className="text-[var(--site-accent)]">pierre</span>,
              <br />
              <span className="pl-[0.15em]">une mémoire,</span>
              <br />
              <span className="italic text-[var(--site-caveat)]">un nom.</span>
            </h1>
          </div>
        </div>

        {/* Dossier — colonne droite avec photo + caption */}
        <div className="grid grid-cols-12 gap-6 mt-16 items-end">
          <div className="col-span-12 lg:col-span-7 lg:pr-12">
            <div className="border-t border-[var(--site-text)]/30 pt-6">
              <span className={`${inter} text-[10px] uppercase tracking-[0.35em] text-[var(--site-text)]/55 block mb-3`}>
                Dossier · 03 pages
              </span>
              <p className={`${garamond} text-[18px] lg:text-[21px] leading-[1.5] text-[var(--site-text)]/85 max-w-[55ch]`}>
                Chaque pièce est <em className="text-[var(--site-caveat)]">portée par une histoire</em> —
                celle d&apos;une transmission, d&apos;une rencontre, d&apos;un éclat de
                Lisbonne attrapé un jour de mai. Un carnet d&apos;atelier, ouvert.
              </p>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-5 relative">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/bijoux-officiels/josephine.jpg"
                alt="Bague Joséphine"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover grayscale-[0.15]"
                priority
              />
              {/* Cadre fin */}
              <div className="absolute inset-2 border border-[var(--site-bg)]/30 pointer-events-none" />
            </div>
            <div className="flex items-baseline justify-between mt-3 border-t border-[var(--site-text)]/20 pt-2">
              <span className={`${caveat} text-[15px] text-[var(--site-caveat)]`}>
                Joséphine, taille émeraude
              </span>
              <span className={`${inter} text-[10px] uppercase tracking-[0.3em] text-[var(--site-text)]/50`}>
                fig. 01
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer ruban */}
      <div className="relative border-t-2 border-double border-[var(--site-text)]/25 mt-2">
        <div className={`${inter} mx-auto max-w-[1440px] px-8 lg:px-16 py-3 flex items-center justify-between text-[10px] uppercase tracking-[0.4em] text-[var(--site-text)]/55`}>
          <span>Sommaire · Le Carnet · L&apos;Atelier · Sur-mesure</span>
          <span className={`${caveat} text-[14px] tracking-normal text-[var(--site-caveat)] normal-case italic`}>
            faire défiler →
          </span>
        </div>
      </div>
    </section>
  );
}
