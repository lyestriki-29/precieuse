const PRESSE = [
  {
    publication: "Vogue Paris",
    extrait:
      "«&nbsp;Une nouvelle voix de la joaillerie française installée au Portugal — épurée, personnelle, et d&rsquo;une précision rare.&nbsp;»",
    date: "Printemps 2026",
  },
  {
    publication: "Madame Figaro",
    extrait:
      "«&nbsp;Précieuse fait partie de ces maisons qui réinventent le bijou de transmission sans sacrifier le geste artisan.&nbsp;»",
    date: "Hiver 2025",
  },
  {
    publication: "L'Officiel",
    extrait:
      "«&nbsp;La bague Joséphine s&rsquo;impose comme la pièce à commander avant que tout le monde en parle.&nbsp;»",
    date: "Été 2025",
  },
  {
    publication: "AD France",
    extrait:
      "«&nbsp;L&rsquo;atelier de Lisbonne est à lui seul une déclaration esthétique — sobre, lumineuse, profondément habitée.&nbsp;»",
    date: "Automne 2025",
  },
];

export function V3ACarnet() {
  return (
    <section className="bg-[#f6f1ea] px-12 sm:px-20 lg:px-32 py-20 border-b border-[#d4cdc1]">
      <div className="mx-auto max-w-[1280px]">
        <p className="font-[family-name:var(--font-jetbrains)] text-[11px] uppercase tracking-[0.4em] text-[#4a4540] mb-8">
          <span className="text-[#8b1e2d]">VI</span>
          &nbsp;———&nbsp;Revue de Presse
        </p>

        <h2 className="font-[family-name:var(--font-bodoni)] text-[48px] italic text-[#1a1614] mb-16 leading-tight">
          Ce qu&rsquo;ils en disent
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#d4cdc1]">
          {PRESSE.map((item) => (
            <article
              key={item.publication}
              className="bg-[#f6f1ea] p-10 group"
            >
              <div className="flex items-start justify-between mb-6">
                <h3 className="font-[family-name:var(--font-bodoni)] text-[24px] italic text-[#1a1614] group-hover:text-[#8b1e2d] transition-colors duration-300">
                  {item.publication}
                </h3>
                <span className="font-[family-name:var(--font-jetbrains)] text-[10px] uppercase tracking-[0.25em] text-[#4a4540]">
                  {item.date}
                </span>
              </div>
              <div className="w-8 h-px bg-[#8b1e2d] mb-6 group-hover:w-16 transition-[width] duration-500" />
              <p
                className="font-[family-name:var(--font-inter)] text-[15px] font-light italic leading-[1.75] text-[#4a4540]"
                dangerouslySetInnerHTML={{ __html: item.extrait }}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
