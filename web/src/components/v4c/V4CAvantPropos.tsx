import Image from "next/image";

const garamond = "font-[family-name:var(--font-eb-garamond)]";
const caveat = "font-[family-name:var(--font-caveat)]";

function SignatureSVG() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 120 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[90px] h-auto opacity-70"
    >
      {/* Lettre É — trait cursif simplifié */}
      <path
        d="M20 45 Q 18 20 30 15 Q 45 10 50 22 Q 52 28 40 30 Q 28 32 38 45"
        stroke="#3d2817" strokeWidth="1.8" strokeLinecap="round" fill="none"
      />
      {/* Accent aigu */}
      <path d="M26 12 L30 7" stroke="#3d2817" strokeWidth="1.2" strokeLinecap="round" />
      {/* Trait de fin signature */}
      <path d="M38 45 Q 60 48 85 42" stroke="#3d2817" strokeWidth="1.2"
        strokeLinecap="round" fill="none" />
      {/* Petit point final */}
      <circle cx="86" cy="42" r="1.5" fill="#3d2817" opacity="0.6" />
    </svg>
  );
}

export function V4CAvantPropos() {
  return (
    <section className="relative bg-[var(--site-bg)] py-24 px-8 lg:px-16">
      <div className="absolute top-0 left-0 right-0 border-t-2 border-double border-[var(--site-text)]/15" />

      <div className="mx-auto max-w-[1440px]">
        <h2 className={`${garamond} italic text-[32px] text-[var(--site-accent)] mb-12 text-center tracking-wide`}>
          Avant-propos
        </h2>

        {/* Grid 3 col : portrait | texte | texte */}
        <div className="mx-auto max-w-[1100px] grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          {/* Portrait Eméline */}
          <div className="relative mx-auto md:mx-0 -rotate-1 hover:rotate-0 transition-transform duration-500">
            <div className="relative w-full max-w-[260px] aspect-[3/4] border-4 border-[var(--site-bg)] shadow-md">
              <Image
                src="/images/stitch-v3/creatrice-emeline-portrait.jpg"
                alt="Portrait d'Eméline, créatrice de Précieuse"
                fill
                sizes="260px"
                className="object-cover"
              />
              {/* Cadre esquisse */}
              <svg
                aria-hidden
                className="pointer-events-none absolute inset-0 w-full h-full"
                viewBox="0 0 260 347"
                fill="none"
              >
                <rect x="6" y="8" width="248" height="331" rx="1"
                  stroke="#3d2817" strokeWidth="0.8" strokeDasharray="3 7" strokeOpacity="0.3" />
              </svg>
            </div>
            <span className={`${caveat} text-[14px] text-[var(--site-caveat)] block text-center mt-2 opacity-70`}>
              Eméline, Lisboa
            </span>
          </div>

          {/* Colonne 1 */}
          <p className={`${caveat} text-[22px] text-[var(--site-caveat)] leading-[1.6]`}>
            Ce carnet est né d&apos;une envie simple : montrer ce qui se passe vraiment ici, entre ces murs blanchis à la chaux, avec la lumière de novembre qui entre en biais par la fenêtre.
          </p>

          {/* Colonne 2 */}
          <p className={`${caveat} text-[22px] text-[var(--site-caveat)] leading-[1.6]`}>
            Chaque dessin, chaque hésitation, chaque pièce fondue trop vite — tout est là, consigné sans filtre. C&apos;est le travail, honnêtement.
          </p>
        </div>

        {/* Signature SVG */}
        <div className="mt-10 flex justify-end max-w-[1100px] mx-auto">
          <div className="flex flex-col items-end gap-1">
            <SignatureSVG />
            <span className={`${garamond} italic text-[15px] text-[var(--site-text)]/80`}>
              Eméline Bastos
            </span>
          </div>
        </div>

        <div className="mt-12 flex justify-end">
          <span className={`${garamond} italic text-[13px] text-[var(--site-accent)]`}>p. 02</span>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 border-t-2 border-double border-[var(--site-text)]/15" />
    </section>
  );
}
