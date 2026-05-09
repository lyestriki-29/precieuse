const garamond = "font-[family-name:var(--font-eb-garamond)]";
const caveat = "font-[family-name:var(--font-caveat)]";

export function V3CAvantPropos() {
  return (
    <section className="relative bg-[#f4ede0] py-24 px-8 lg:px-16">
      {/* Liseret top */}
      <div className="absolute top-0 left-0 right-0 border-t-2 border-double border-[#3d2817]/15" />

      <div className="mx-auto max-w-[1440px]">
        {/* Titre de section */}
        <h2 className={`${garamond} italic text-[32px] text-[#a08552] mb-12 text-center tracking-wide`}>
          Avant-propos
        </h2>

        {/* Deux colonnes manuscrites */}
        <div className="mx-auto max-w-2xl grid grid-cols-1 md:grid-cols-2 gap-10">
          <p className={`${caveat} text-[24px] text-[#1e3a5f] leading-[1.6]`}>
            Ce carnet est né d&apos;une envie simple : montrer ce qui se passe vraiment ici, entre ces murs blanchis à la chaux, avec la lumière de novembre qui entre en biais par la fenêtre.
          </p>
          <p className={`${caveat} text-[24px] text-[#1e3a5f] leading-[1.6]`}>
            Chaque dessin, chaque hésitation, chaque pièce fondue trop vite — tout est là, consigné sans filtre. C&apos;est le travail, honnêtement.
          </p>
        </div>

        {/* Signature */}
        <div className="mt-10 flex justify-center md:justify-end max-w-2xl mx-auto">
          <span className={`${garamond} italic text-[28px] text-[#3d2817]`}>É.</span>
        </div>

        {/* Numéro de page */}
        <div className="mt-16 flex justify-end">
          <span className={`${garamond} italic text-[13px] text-[#a08552]`}>p. 02</span>
        </div>
      </div>

      {/* Liseret bottom */}
      <div className="absolute bottom-0 left-0 right-0 border-t-2 border-double border-[#3d2817]/15" />
    </section>
  );
}
