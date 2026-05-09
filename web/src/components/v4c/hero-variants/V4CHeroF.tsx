import Image from "next/image";

const garamond = "font-[family-name:var(--font-eb-garamond)]";
const caveat = "font-[family-name:var(--font-caveat)]";
const inter = "font-[family-name:var(--font-inter)]";

// Variante F — Herbarium botanique. Planche d'herbier vintage, bijou comme spécimen.
export function V4CHeroF() {
  return (
    <section className="relative min-h-screen bg-[var(--site-bg)] pt-16 overflow-hidden">
      {/* Papier ivoire vieilli */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 600 600' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='age'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.02' numOctaves='3'/%3E%3CfeColorMatrix values='0 0 0 0 0.5 0 0 0 0 0.35 0 0 0 0 0.15 0 0 0 0.6 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23age)'/%3E%3C/svg%3E\")",
          backgroundSize: "600px 600px",
        }}
      />

      {/* Cadre planche — bordure double */}
      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-12 py-8">
        <div className="relative border border-[var(--site-text)]/40 p-6 lg:p-12">
          <div className="absolute inset-2 border border-[var(--site-text)]/15 pointer-events-none" />

          {/* En-tête planche style scientifique */}
          <header className="flex items-baseline justify-between border-b border-[var(--site-text)]/30 pb-4 mb-6">
            <div>
              <span className={`${inter} text-[10px] uppercase tracking-[0.4em] text-[var(--site-text)]/60 block`}>
                Herbarium Preciosum
              </span>
              <span className={`${garamond} italic text-[14px] text-[var(--site-text)]/75 mt-1 block`}>
                Pl. I — Joséphine, taille émeraude
              </span>
            </div>
            <div className="text-right">
              <span className={`${inter} text-[10px] uppercase tracking-[0.35em] text-[var(--site-text)]/55`}>
                Coll. Eméline · Lisboa
              </span>
              <span className={`${caveat} block text-[15px] text-[var(--site-caveat)] italic mt-1`}>
                récolté printemps mmxxvi
              </span>
            </div>
          </header>

          <div className="grid grid-cols-12 gap-6 lg:gap-10">
            {/* Spécimen — l'image bague comme planche */}
            <div className="col-span-12 lg:col-span-7 relative">
              <div className="relative aspect-[5/6] overflow-hidden bg-[var(--site-bg)]">
                <Image
                  src="/images/bijoux-officiels/josephine.jpg"
                  alt="Spécimen Joséphine"
                  fill
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  priority
                  className="object-cover"
                  style={{ filter: "sepia(0.15) contrast(1.05)" }}
                />
                {/* Croquis trait fin par-dessus */}
                <svg
                  aria-hidden
                  viewBox="0 0 500 600"
                  className="absolute inset-0 w-full h-full text-[var(--site-text)]/40 pointer-events-none"
                >
                  {/* Fines flèches d'annotation */}
                  <line x1="60" y1="120" x2="220" y2="270" stroke="currentColor" strokeWidth="0.6" strokeDasharray="3 4" />
                  <circle cx="220" cy="270" r="3" fill="none" stroke="currentColor" strokeWidth="0.7" />
                  <line x1="440" y1="180" x2="320" y2="320" stroke="currentColor" strokeWidth="0.6" strokeDasharray="3 4" />
                  <circle cx="320" cy="320" r="3" fill="none" stroke="currentColor" strokeWidth="0.7" />
                  <line x1="80" y1="500" x2="240" y2="430" stroke="currentColor" strokeWidth="0.6" strokeDasharray="3 4" />
                  <circle cx="240" cy="430" r="3" fill="none" stroke="currentColor" strokeWidth="0.7" />
                </svg>
              </div>

              {/* Étiquette manuscrite épinglée */}
              <div className="absolute -bottom-4 -right-4 lg:right-6 bg-[var(--site-bg)] border border-[var(--site-text)]/30 px-4 py-2 rotate-[-2deg] shadow-[0_8px_18px_-8px_rgba(0,0,0,0.25)]">
                <span className={`${caveat} text-[14px] text-[var(--site-text)]/85 italic block leading-tight`}>
                  N. vulgaire — Joséphine
                </span>
                <span className={`${garamond} italic text-[11px] text-[var(--site-caveat)]`}>
                  Anulus aureus saphirinus
                </span>
              </div>
            </div>

            {/* Colonne légende — annotations latines */}
            <aside className="col-span-12 lg:col-span-5 space-y-5">
              <div>
                <span className={`${inter} text-[9px] uppercase tracking-[0.4em] text-[var(--site-text)]/50 block mb-1`}>
                  Désignation
                </span>
                <h1
                  className={`${garamond} italic text-[var(--site-text)] leading-[0.95]`}
                  style={{ fontSize: "clamp(40px, 5vw, 72px)" }}
                >
                  Joséphine
                </h1>
                <span className={`${caveat} text-[18px] text-[var(--site-caveat)] italic`}>
                  saphir bleu nuit, taille émeraude
                </span>
              </div>

              <dl className={`${inter} text-[12px] text-[var(--site-text)]/80 leading-relaxed space-y-2`}>
                <div className="flex gap-3 border-b border-dotted border-[var(--site-text)]/25 pb-1">
                  <dt className="uppercase tracking-[0.25em] text-[10px] text-[var(--site-text)]/55 w-24 shrink-0">Famille</dt>
                  <dd>
                    <em>Solitaires d&apos;intimité</em>
                  </dd>
                </div>
                <div className="flex gap-3 border-b border-dotted border-[var(--site-text)]/25 pb-1">
                  <dt className="uppercase tracking-[0.25em] text-[10px] text-[var(--site-text)]/55 w-24 shrink-0">Origine</dt>
                  <dd>Ceylan · 1.4 ct</dd>
                </div>
                <div className="flex gap-3 border-b border-dotted border-[var(--site-text)]/25 pb-1">
                  <dt className="uppercase tracking-[0.25em] text-[10px] text-[var(--site-text)]/55 w-24 shrink-0">Monture</dt>
                  <dd>or jaune 18k, repoussé main</dd>
                </div>
                <div className="flex gap-3 border-b border-dotted border-[var(--site-text)]/25 pb-1">
                  <dt className="uppercase tracking-[0.25em] text-[10px] text-[var(--site-text)]/55 w-24 shrink-0">Floraison</dt>
                  <dd>tardive · à porter le soir</dd>
                </div>
              </dl>

              <p className={`${garamond} italic text-[15px] text-[var(--site-text)]/85 leading-relaxed pt-3 border-t border-[var(--site-text)]/20`}>
                « On dit qu&apos;elle se réchauffe au contact de la peau, et qu&apos;à la
                tombée du jour le bleu y vire au violet. Je l&apos;ai vu. »
                <span className={`${caveat} block text-[14px] text-[var(--site-caveat)] mt-2 not-italic`}>
                  — Eméline, mai 2026
                </span>
              </p>

              <a
                href="#collection"
                className={`${inter} inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.4em] text-[var(--site-text)] border-b border-[var(--site-text)]/40 pb-1 hover:border-[var(--site-text)] transition-colors`}
              >
                consulter la planche II
                <span aria-hidden>→</span>
              </a>
            </aside>
          </div>

          <footer className={`${inter} mt-8 pt-3 border-t border-[var(--site-text)]/20 flex justify-between text-[9px] uppercase tracking-[0.4em] text-[var(--site-text)]/45`}>
            <span>Pl. I / V</span>
            <span>Maison Précieuse · classification 2026</span>
            <span>échelle 1:1</span>
          </footer>
        </div>
      </div>
    </section>
  );
}
