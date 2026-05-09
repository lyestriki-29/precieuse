type Temoignage = {
  citation: string;
  initiales: string;
  ville: string;
  annee: string;
  oeuvre: string;
};

const TEMOIGNAGES: Temoignage[] = [
  {
    citation:
      "Une pièce que j'aurais pu hériter. Le soin apporté à chaque détail, la qualité de l'or, la netteté du sertissage — rien n'est laissé au hasard.",
    initiales: "L.M.",
    ville: "Paris",
    annee: "2025",
    oeuvre: "№ 03 — Joséphine",
  },
  {
    citation:
      "Je cherchais une bague qui n'aurait pas l'air achetée. Précieuse est la seule maison qui m'ait proposé quelque chose sans que je sente le commerce.",
    initiales: "S.B.",
    ville: "Genève",
    annee: "2024",
    oeuvre: "№ 01 — Eugénie",
  },
  {
    citation:
      "Le certificat d'authenticité, la numérotation, la boîte — tout parle de permanence. C'est exactement ce que je voulais transmettre à ma fille.",
    initiales: "C.R.",
    ville: "Bordeaux",
    annee: "2025",
    oeuvre: "№ 07 — Aurore",
  },
];

export function V3BAcquisitions() {
  return (
    <section className="bg-[#fafaf8] py-40 sm:py-56 px-6">
      <div className="max-w-[1080px] mx-auto">
        <div className="mb-20">
          <p className="font-[family-name:var(--font-manrope)] text-[10px] font-light tracking-[0.35em] text-[#b08d57] uppercase mb-4">
            Témoignages
          </p>
          <h2 className="font-[family-name:var(--font-cormorant)] text-[38px] sm:text-[48px] font-light italic text-[#0d0d0d] leading-tight">
            Collectionneurs
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-[#e8e6e1]">
          {TEMOIGNAGES.map((t) => (
            <div key={t.oeuvre} className="bg-[#fafaf8] p-10 sm:p-12">
              <p className="font-[family-name:var(--font-cormorant)] text-[20px] sm:text-[22px] font-light italic text-[#0d0d0d] leading-relaxed mb-10">
                &ldquo;{t.citation}&rdquo;
              </p>
              <div className="border-t border-[#e8e6e1] pt-6 space-y-1">
                <p className="font-[family-name:var(--font-manrope)] text-[11px] font-light tracking-[0.15em] text-[#0d0d0d] uppercase">
                  {t.initiales}, {t.ville} · {t.annee}
                </p>
                <p className="font-[family-name:var(--font-manrope)] text-[10px] font-light tracking-[0.15em] text-[#b08d57] uppercase">
                  {t.oeuvre}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
