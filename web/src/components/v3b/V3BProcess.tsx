type Etape = {
  numero: string;
  titre: string;
  description: string;
  svgPath: React.ReactNode;
};

const ETAPES: Etape[] = [
  {
    numero: "I",
    titre: "Esquisse",
    description:
      "Chaque pièce naît sur papier. L'aquarelle permet d'évaluer les proportions, la lumière, le rapport à la main.",
    svgPath: (
      <svg viewBox="0 0 60 60" className="w-12 h-12" aria-hidden="true">
        <line x1="10" y1="50" x2="50" y2="10" stroke="#0d0d0d" strokeWidth="1" />
        <line x1="10" y1="50" x2="18" y2="42" stroke="#0d0d0d" strokeWidth="1" />
        <line x1="10" y1="50" x2="18" y2="50" stroke="#0d0d0d" strokeWidth="1" />
        <circle cx="50" cy="10" r="2" fill="none" stroke="#0d0d0d" strokeWidth="1" />
      </svg>
    ),
  },
  {
    numero: "II",
    titre: "Modèle cire",
    description:
      "Un modèle en cire d'abeille est sculpté à la main selon le dessin. Il deviendra l'empreinte exacte de la pièce finale.",
    svgPath: (
      <svg viewBox="0 0 60 60" className="w-12 h-12" aria-hidden="true">
        <circle cx="30" cy="30" r="16" fill="none" stroke="#0d0d0d" strokeWidth="1" />
        <circle cx="30" cy="30" r="6" fill="none" stroke="#0d0d0d" strokeWidth="1" />
      </svg>
    ),
  },
  {
    numero: "III",
    titre: "Fonte or",
    description:
      "Le moule en plâtre reçoit l'or en fusion à 1 064 °C. La cire disparaît, l'or prend exactement sa place.",
    svgPath: (
      <svg viewBox="0 0 60 60" className="w-12 h-12" aria-hidden="true">
        <polygon
          points="30,8 52,46 8,46"
          fill="none"
          stroke="#0d0d0d"
          strokeWidth="1"
        />
        <line x1="30" y1="46" x2="30" y2="52" stroke="#0d0d0d" strokeWidth="1" />
      </svg>
    ),
  },
  {
    numero: "IV",
    titre: "Polissage",
    description:
      "La finition à la main est ce qui distingue une pièce artisanale d'une pièce industrielle. Plusieurs heures, des outils minuscules.",
    svgPath: (
      <svg viewBox="0 0 60 60" className="w-12 h-12" aria-hidden="true">
        <rect
          x="12"
          y="24"
          width="36"
          height="12"
          fill="none"
          stroke="#0d0d0d"
          strokeWidth="1"
        />
        <line x1="12" y1="30" x2="48" y2="30" stroke="#0d0d0d" strokeWidth="0.5" />
      </svg>
    ),
  },
];

export function V3BProcess() {
  return (
    <section className="bg-[#ffffff] py-40 sm:py-56 px-6">
      <div className="max-w-[1080px] mx-auto">
        <div className="mb-20">
          <p className="font-[family-name:var(--font-manrope)] text-[10px] font-light tracking-[0.35em] text-[#b08d57] uppercase mb-4">
            Méthode
          </p>
          <h2 className="font-[family-name:var(--font-cormorant)] text-[38px] sm:text-[48px] font-light italic text-[#0d0d0d] leading-tight">
            Geste technique
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#e8e6e1]">
          {ETAPES.map((etape) => (
            <div key={etape.numero} className="bg-[#ffffff] p-10">
              <div className="mb-8">{etape.svgPath}</div>
              <p className="font-[family-name:var(--font-manrope)] text-[10px] font-light tracking-[0.3em] text-[#b08d57] uppercase mb-3">
                {etape.numero}
              </p>
              <p className="font-[family-name:var(--font-cormorant)] text-[20px] font-light italic text-[#0d0d0d] mb-4">
                {etape.titre}
              </p>
              <p className="font-[family-name:var(--font-manrope)] text-[12px] font-light leading-relaxed text-[#a8a39a]">
                {etape.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
