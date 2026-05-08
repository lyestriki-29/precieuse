import { Button } from '@/components/ui/button'

export function SurMesure() {
  return (
    <section 
      className="py-16 md:py-24 bg-rose/20"
      aria-labelledby="sur-mesure-title"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] lg:aspect-square overflow-hidden">
            {/* Eméline at work placeholder */}
            <div 
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  radial-gradient(ellipse at 40% 60%, rgba(184, 146, 78, 0.15) 0%, transparent 50%),
                  linear-gradient(135deg, #E8E3DC 0%, #D4CFC8 50%, #DAC8C8 100%)
                `
              }}
            />
            {/* Silhouette placeholder */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-40 rounded-t-full bg-concrete/20 relative">
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full bg-concrete/10" />
              </div>
            </div>
            {/* Corner accent */}
            <div className="absolute bottom-6 right-6 font-mono text-xs text-concrete/60 tracking-wider">
              ATELIER LISBONNE
            </div>
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <p className="font-mono text-xs tracking-[0.3em] text-concrete uppercase mb-3">
              SUR-MESURE
            </p>
            <h2 id="sur-mesure-title" className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal mb-6">
              Une idée, un projet ?
            </h2>
            <p className="font-serif text-2xl text-charcoal/80 italic mb-6">
              Parlons-en.
            </p>
            <p className="font-sans text-concrete leading-relaxed mb-8 max-w-md">
              Bague de fiançailles, alliance, pièce unique pour un anniversaire — chaque projet commence par une conversation. Ensemble, nous donnons forme à votre vision.
            </p>
            
            {/* CTA Button */}
            <Button 
              className="bg-raspberry hover:bg-raspberry/90 text-bone font-mono text-sm tracking-wider uppercase px-8 py-6 h-auto rounded-sm transition-all duration-300 hover:scale-[1.02]"
            >
              Démarrer un projet sur-mesure
            </Button>

            {/* Trust elements */}
            <div className="mt-8 flex flex-wrap gap-6 font-mono text-xs text-concrete/60 tracking-wider">
              <span>CONSULTATION GRATUITE</span>
              <span>·</span>
              <span>RÉPONSE SOUS 24H</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
