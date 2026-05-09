export function V3AMasthead() {
  return (
    <section className="bg-[#f6f1ea] px-12 sm:px-20 lg:px-32 py-20 border-b border-[#d4cdc1]">
      <div className="mx-auto max-w-[1280px]">
        {/* Section number */}
        <p className="font-[family-name:var(--font-jetbrains)] text-[11px] uppercase tracking-[0.4em] text-[#4a4540] mb-8">
          <span className="text-[#8b1e2d]">Édito</span>
          &nbsp;———&nbsp;Lettre de la directrice
        </p>

        {/* Decorative rule */}
        <div className="w-full h-px bg-[#d4cdc1] mb-10" />

        {/* Édito layout : 2 colonnes */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 items-start">
          {/* Left : headline + signature */}
          <div>
            <h2 className="font-[family-name:var(--font-bodoni)] text-[56px] italic text-[#1a1614] leading-tight mb-6">
              De la rareté<br />
              <span className="text-[#8b1e2d]">comme langage</span>
            </h2>
            <p className="font-[family-name:var(--font-jetbrains)] text-[11px] uppercase tracking-[0.3em] text-[#4a4540]">
              Éméline O.<br />
              Directrice de création
            </p>
          </div>

          {/* Right : édito text avec drop cap */}
          <div className="space-y-6">
            <p className="font-[family-name:var(--font-inter)] text-[16px] font-light leading-[1.85] text-[#1a1614]">
              <span
                className="float-left font-[family-name:var(--font-bodoni)] text-[96px] italic leading-[0.75] mr-3 mt-2 text-[#8b1e2d]"
                aria-hidden="true"
              >
                C
              </span>
              haque bague que nous créons porte en elle une décision — celle de refuser le superflu, de ne jamais transiger sur le geste. Nous travaillons à Lisbonne, dans un atelier discret qui ouvre sur le soleil de l&rsquo;Atlantique. Il n&rsquo;y a pas de chaîne ici. Seulement des mains, du métal, et du temps.
            </p>
            <p className="font-[family-name:var(--font-inter)] text-[15px] font-light leading-[1.85] text-[#4a4540]">
              Ce premier numéro de <em>Précieuse</em> est une invitation — à regarder autrement ce que signifie posséder un bijou. Pas un accessoire de mode. Pas un investissement spéculatif. Quelque chose de plus rare : une pièce unique qui vous ressemble, fabriquée dans la durée, pensée pour traverser les décennies.
            </p>
            <p className="font-[family-name:var(--font-inter)] text-[15px] font-light leading-[1.85] text-[#4a4540]">
              Ce que vous tenez entre les mains — ou plutôt, ce que vous lisez sur cet écran — est notre façon de vous inviter dans l&rsquo;atelier. Dans les coulisses du geste, de la décision, de la matière. Bienvenue.
            </p>
          </div>
        </div>

        <div className="w-full h-px bg-[#d4cdc1] mt-10" />
      </div>
    </section>
  );
}
