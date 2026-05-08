const STEPS = [
  { n: "01", title: "DESSIN", body: "Conceptualisation de l'âme du bijou." },
  { n: "02", title: "CIRE", body: "Sculpture du modèle en cire perdue." },
  { n: "03", title: "MOULE", body: "Coulée du moule en plâtre réfractaire." },
  { n: "04", title: "FONTE", body: "L'or en fusion remplace la cire." },
  { n: "05", title: "SERTISSAGE", body: "Mise en place précise des pierres." },
  { n: "06", title: "POLISSAGE", body: "Révélation finale de la lumière." },
];

export function HomeProcessCirePerdue() {
  return (
    <section className="overflow-hidden bg-inverse-surface py-20 text-white sm:py-28">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
        <div className="mb-16 max-w-2xl">
          <span className="font-technical-label mb-4 block tracking-[0.2em] uppercase text-tertiary">
            La Méthode
          </span>
          <h2 className="font-display-xl leading-tight">
            L&apos;archéologie du futur : la cire perdue.
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6 lg:gap-4">
          {STEPS.map((step) => (
            <div
              key={step.n}
              className="flex flex-col gap-2 border-t border-white/15 pt-5"
            >
              <span className="font-technical-label tracking-[0.1em] text-tertiary">
                {step.n} — {step.title}
              </span>
              <p className="text-sm leading-relaxed text-white/55">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
