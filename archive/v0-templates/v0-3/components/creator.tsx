export function Creator() {
  return (
    <section 
      className="py-16 md:py-24 bg-bone"
      aria-labelledby="creator-title"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content - Left */}
          <div className="order-2 lg:order-1">
            <p className="font-mono text-xs tracking-[0.3em] text-concrete uppercase mb-3">
              LA CRÉATRICE
            </p>
            <h2 id="creator-title" className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal mb-8">
              Eméline
            </h2>
            
            {/* Quote */}
            <blockquote className="border-l-2 border-gold pl-6 mb-8">
              <p className="font-serif text-xl md:text-2xl text-charcoal/80 italic leading-relaxed">
                &ldquo;La joaillerie, c&apos;est transformer un métal précieux en émotion. Chaque pièce raconte une histoire — celle de qui la porte, celle de mes mains qui l&apos;ont façonnée.&rdquo;
              </p>
            </blockquote>

            <p className="font-sans text-concrete leading-relaxed mb-8 max-w-lg">
              Après dix années passées dans les ateliers de Lisbonne, Eméline a fondé Précieuse avec une conviction : la joaillerie artisanale doit rester un art vivant, transmis et perpétué.
            </p>

            {/* Credentials in Monospace */}
            <div className="font-mono text-xs text-concrete bg-charcoal/5 p-4 space-y-2">
              <div className="flex justify-between border-b border-concrete/10 pb-2">
                <span className="tracking-wider">EXPÉRIENCE</span>
                <span>10 ans</span>
              </div>
              <div className="flex justify-between border-b border-concrete/10 pb-2">
                <span className="tracking-wider">CERTIFICATION</span>
                <span>RJC Membre</span>
              </div>
              <div className="flex justify-between border-b border-concrete/10 pb-2">
                <span className="tracking-wider">SPÉCIALITÉ</span>
                <span>Cire perdue</span>
              </div>
              <div className="flex justify-between">
                <span className="tracking-wider">ATELIER</span>
                <span>Lisbonne, Portugal</span>
              </div>
            </div>
          </div>

          {/* Portrait - Right */}
          <div className="order-1 lg:order-2">
            <div className="relative aspect-[3/4] overflow-hidden">
              {/* Black and white portrait placeholder */}
              <div 
                className="absolute inset-0"
                style={{
                  backgroundImage: `
                    radial-gradient(ellipse at 50% 30%, rgba(107, 101, 96, 0.3) 0%, transparent 60%),
                    linear-gradient(180deg, #9A9490 0%, #6B6560 50%, #4A4644 100%)
                  `,
                  filter: 'grayscale(100%) contrast(1.1)'
                }}
              />
              {/* Portrait silhouette */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="w-28 h-36 rounded-t-full bg-charcoal/30" />
                  <div className="absolute top-[70%] left-1/2 -translate-x-1/2 w-40 h-32 bg-charcoal/20 rounded-t-3xl" />
                  {/* Hands holding piece */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border-2 border-gold/40" />
                </div>
              </div>
              
              {/* Corner label */}
              <div className="absolute bottom-6 left-6 font-mono text-xs text-bone/60 tracking-wider">
                PORTRAIT — 2024
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
