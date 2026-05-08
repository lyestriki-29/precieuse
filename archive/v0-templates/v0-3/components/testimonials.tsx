'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Testimonial {
  quote: string
  name: string
  city: string
  project: string
}

const testimonials: Testimonial[] = [
  {
    quote: 'Eméline a su capturer exactement ce que j\'imaginais. La bague est parfaite, unique, et l\'expérience sur-mesure était exceptionnelle.',
    name: 'Charles',
    city: 'Paris',
    project: 'Bague de fiançailles 2025'
  },
  {
    quote: 'Un savoir-faire rare. On sent chaque geste, chaque attention dans le bijou. C\'est devenu un héritage familial.',
    name: 'Marie',
    city: 'Lyon',
    project: 'Alliance sur-mesure'
  },
  {
    quote: 'La transparence sur les matériaux et le processus m\'a convaincu. Enfin une joaillière qui explique son art.',
    name: 'Thomas',
    city: 'Bordeaux',
    project: 'Bague anniversaire 10 ans'
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const current = testimonials[currentIndex]

  return (
    <section 
      className="py-16 md:py-24 bg-charcoal text-bone"
      aria-labelledby="testimonials-title"
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="font-mono text-xs tracking-[0.3em] text-gold uppercase mb-3">
            TÉMOIGNAGES
          </p>
          <h2 id="testimonials-title" className="font-serif text-3xl md:text-4xl text-bone">
            Ils nous font confiance
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="relative">
          <div className="text-center">
            {/* Quote */}
            <blockquote className="mb-8">
              <p className="font-serif text-xl md:text-2xl lg:text-3xl text-bone/90 italic leading-relaxed">
                &ldquo;{current.quote}&rdquo;
              </p>
            </blockquote>

            {/* Attribution */}
            <div className="font-mono text-sm tracking-wider text-bone/60">
              <span className="text-gold">{current.name}</span>
              <span className="mx-2">·</span>
              <span>{current.city}</span>
              <span className="mx-2">·</span>
              <span className="text-bone/40">{current.project}</span>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={prev}
              className="p-2 border border-bone/20 hover:border-gold hover:text-gold transition-colors rounded-sm"
              aria-label="Témoignage précédent"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-gold' : 'bg-bone/30'
                  }`}
                  aria-label={`Aller au témoignage ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={next}
              className="p-2 border border-bone/20 hover:border-gold hover:text-gold transition-colors rounded-sm"
              aria-label="Témoignage suivant"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
