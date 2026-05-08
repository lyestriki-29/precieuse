'use client'

import { useState } from 'react'

interface Ring {
  id: number
  name: string
  goldWeight: string
  diamonds: string
  carat: string
  price: string
}

const rings: Ring[] = [
  { id: 1, name: 'Éclat', goldWeight: '4.2g', diamonds: '1', carat: '0.30ct', price: '2 450€' },
  { id: 2, name: 'Aurore', goldWeight: '5.8g', diamonds: '3', carat: '0.45ct', price: '3 180€' },
  { id: 3, name: 'Solstice', goldWeight: '3.9g', diamonds: '0', carat: '—', price: '1 890€' },
  { id: 4, name: 'Lumière', goldWeight: '6.4g', diamonds: '7', carat: '0.70ct', price: '4 650€' },
  { id: 5, name: 'Éternité', goldWeight: '7.2g', diamonds: '12', carat: '1.20ct', price: '6 900€' },
]

export function Collection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section className="py-16 md:py-24 bg-bone" aria-labelledby="collection-title">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <p className="font-mono text-xs tracking-[0.3em] text-concrete uppercase mb-3">
            COLLECTION
          </p>
          <h2 id="collection-title" className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal">
            Pièces d&apos;exception
          </h2>
        </div>

        {/* Ring Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {rings.map((ring) => (
            <article
              key={ring.id}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredId(ring.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image Container with Concrete Texture */}
              <div className="relative aspect-square mb-4 overflow-hidden">
                {/* Concrete texture background */}
                <div 
                  className="absolute inset-0 bg-gradient-to-br from-concrete/20 via-concrete/10 to-concrete/20"
                  style={{
                    backgroundImage: `
                      url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E"),
                      linear-gradient(135deg, #E8E3DC 0%, #D4CFC8 50%, #E8E3DC 100%)
                    `
                  }}
                />
                
                {/* Ring placeholder - gold accent */}
                <div 
                  className={`absolute inset-0 flex items-center justify-center transition-transform duration-500 ${
                    hoveredId === ring.id ? 'scale-105 rotate-3' : 'scale-100 rotate-0'
                  }`}
                >
                  <div className="w-24 h-24 md:w-28 md:h-28 rounded-full border-4 border-gold/60 relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-gold/80 rounded-full shadow-lg" />
                  </div>
                </div>
              </div>

              {/* Ring Info - Workshop Label Style */}
              <div className="space-y-2">
                <h3 className="font-serif text-xl text-charcoal group-hover:text-gold transition-colors">
                  {ring.name}
                </h3>
                
                {/* Technical Specs in Monospace */}
                <div className="font-mono text-xs text-concrete space-y-1 bg-bone border border-rose/20 p-3">
                  <div className="flex justify-between">
                    <span className="tracking-wider">OR 19KT</span>
                    <span>{ring.goldWeight}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="tracking-wider">DIAMANTS</span>
                    <span>{ring.diamonds}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="tracking-wider">CARAT</span>
                    <span>{ring.carat}</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-rose/20">
                    <span className="tracking-wider">PRIX</span>
                    <span className="text-charcoal font-medium">{ring.price}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
