interface Material {
  title: string
  subtitle: string
  description: string
}

const materials: Material[] = [
  {
    title: 'L\'or 19 carats',
    subtitle: 'POURQUOI 19, PAS 18',
    description: 'Au Portugal, la tradition joaillière privilégie l\'or 19 carats — 79.2% d\'or pur contre 75% pour le 18 carats. Cette proportion offre une couleur plus profonde, une durabilité supérieure, et un éclat incomparable. C\'est le secret des maîtres joailliers portugais depuis des siècles.'
  },
  {
    title: 'Les diamants GVS',
    subtitle: 'COULEUR G · PURETÉ VS',
    description: 'Chaque diamant est sélectionné selon les critères les plus stricts : couleur G (blanc nuancé), pureté VS (inclusions invisibles à l\'œil nu). Certifiés GIA ou HRD, ils garantissent une brillance exceptionnelle et une traçabilité totale de la mine à votre doigt.'
  },
  {
    title: 'La traçabilité',
    subtitle: 'PROCESSUS DE KIMBERLEY',
    description: 'Nos diamants suivent le Processus de Kimberley, garantissant leur origine éthique. Chaque pierre est accompagnée d\'un certificat attestant qu\'elle ne finance aucun conflit. La transparence n\'est pas une option — c\'est un engagement.'
  },
]

export function Materials() {
  return (
    <section 
      className="py-16 md:py-24 bg-bone"
      aria-labelledby="materials-title"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <p className="font-mono text-xs tracking-[0.3em] text-concrete uppercase mb-3">
            MATÉRIAUX
          </p>
          <h2 id="materials-title" className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal">
            La matière vraie
          </h2>
        </div>

        {/* Three Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {materials.map((material, index) => (
            <article 
              key={material.title}
              className="group"
            >
              {/* Visual Accent */}
              <div className="mb-6 h-px bg-gradient-to-r from-gold via-gold/50 to-transparent" />
              
              {/* Number */}
              <span className="font-mono text-xs text-gold tracking-wider">
                0{index + 1}
              </span>
              
              {/* Subtitle in Monospace */}
              <p className="font-mono text-xs tracking-[0.2em] text-concrete uppercase mt-4 mb-2">
                {material.subtitle}
              </p>
              
              {/* Title */}
              <h3 className="font-serif text-2xl md:text-3xl text-charcoal mb-4">
                {material.title}
              </h3>
              
              {/* Description */}
              <p className="font-sans text-sm text-concrete leading-relaxed">
                {material.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
