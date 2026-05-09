const STEPS = [
  {
    number: "01",
    title: "Esquisse",
    subtitle: "Le geste premier",
    description:
      "Tout commence sur papier. Un crayon, parfois de l'aquarelle pour saisir la transparence d'une pierre. L'esquisse fixe les proportions, la silhouette, l'intention. Elle peut naître en cinq minutes ou en trois semaines.",
    symbol: "✦",
  },
  {
    number: "02",
    title: "Modèle cire",
    subtitle: "La forme avant la matière",
    description:
      "Le modèle en cire est sculpté à la main — jamais imprimé. Il reproduit exactement ce que sera la bague en métal. On peut le tenir, le tourner dans la lumière, corriger. C'est la dernière chance avant la fonte.",
    symbol: "◈",
  },
  {
    number: "03",
    title: "Fonte or",
    subtitle: "La cire perdue",
    description:
      "La cire est enveloppée de plâtre réfractaire. Chauffée, elle disparaît — c'est la technique de la cire perdue, millénaire. L'or en fusion prend sa place exacte. Un seul passage possible. Aucune erreur permise.",
    symbol: "◉",
  },
  {
    number: "04",
    title: "Polissage main",
    subtitle: "L'heure de vérité",
    description:
      "Le métal brut sort de la fonte rugueux, mat. Il faut plusieurs heures de polissage — différents grains, différentes directions — pour atteindre le brillant final. C'est ici que l'artisan signe la pièce, sans apposer son nom.",
    symbol: "◇",
  },
];

export function V3AProcess() {
  return (
    <section className="bg-[#1a1614] px-12 sm:px-20 lg:px-32 py-20">
      <div className="mx-auto max-w-[1280px]">
        <p className="font-[family-name:var(--font-jetbrains)] text-[11px] uppercase tracking-[0.4em] text-[#4a4540] mb-8">
          <span className="text-[#8b1e2d]">IV</span>
          &nbsp;———&nbsp;Le Geste
        </p>

        <h2 className="font-[family-name:var(--font-bodoni)] text-[48px] italic text-[#f6f1ea] mb-4 leading-tight">
          La cire perdue,<br />
          <span className="text-[#8b1e2d]">millénaire et vivante</span>
        </h2>
        <p className="font-[family-name:var(--font-inter)] text-[15px] font-light italic text-[#4a4540] mb-16">
          Quatre étapes. Une seule intention.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#4a4540]/30">
          {STEPS.map((step) => (
            <div
              key={step.number}
              className="bg-[#1a1614] p-8 flex flex-col gap-4 group hover:bg-[#231e1b] transition-colors duration-300"
            >
              <div className="flex items-start justify-between">
                <span className="font-[family-name:var(--font-jetbrains)] text-[10px] uppercase tracking-[0.4em] text-[#4a4540]">
                  {step.number}
                </span>
                <span className="text-[#8b1e2d] text-[20px] opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                  {step.symbol}
                </span>
              </div>

              <div>
                <h3 className="font-[family-name:var(--font-bodoni)] text-[28px] italic text-[#f6f1ea] leading-tight mb-1">
                  {step.title}
                </h3>
                <p className="font-[family-name:var(--font-jetbrains)] text-[10px] uppercase tracking-[0.25em] text-[#8b1e2d]">
                  {step.subtitle}
                </p>
              </div>

              <div className="w-8 h-px bg-[#d4cdc1]/30 group-hover:w-16 transition-[width] duration-500" />

              <p className="font-[family-name:var(--font-inter)] text-[13px] font-light leading-[1.8] text-[#d4cdc1]/70">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
