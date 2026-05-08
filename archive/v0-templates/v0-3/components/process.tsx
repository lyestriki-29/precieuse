'use client'

import { useEffect, useRef, useState } from 'react'

interface Step {
  number: string
  title: string
  titleFr: string
  description: string
}

const steps: Step[] = [
  {
    number: '01',
    title: 'Dessin',
    titleFr: 'Le Dessin',
    description: 'Chaque pièce naît d\'un croquis précis, dialogue entre vision et technique.'
  },
  {
    number: '02',
    title: 'Cire',
    titleFr: 'La Cire',
    description: 'Le modèle prend forme dans la cire, sculptée à la main avec patience.'
  },
  {
    number: '03',
    title: 'Moule',
    titleFr: 'Le Moule',
    description: 'Le plâtre réfractaire capture chaque détail du modèle en cire.'
  },
  {
    number: '04',
    title: 'Fonte',
    titleFr: 'La Fonte',
    description: 'L\'or 19 carats en fusion prend la place de la cire — la cire perdue.'
  },
  {
    number: '05',
    title: 'Sertissage',
    titleFr: 'Le Sertissage',
    description: 'Chaque diamant est serti à la main, maintenu par des griffes d\'or.'
  },
  {
    number: '06',
    title: 'Polissage',
    titleFr: 'Le Polissage',
    description: 'Le toucher final révèle l\'éclat de l\'or, miroir de la lumière.'
  },
]

export function Process() {
  const [visibleSteps, setVisibleSteps] = useState<Set<number>>(new Set())
  const stepRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers = stepRefs.current.map((ref, index) => {
      if (!ref) return null
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSteps(prev => new Set([...prev, index]))
          }
        },
        { threshold: 0.3 }
      )
      
      observer.observe(ref)
      return observer
    })

    return () => {
      observers.forEach(observer => observer?.disconnect())
    }
  }, [])

  return (
    <section 
      className="py-16 md:py-24 bg-charcoal text-bone"
      aria-labelledby="process-title"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-12 md:mb-20">
          <p className="font-mono text-xs tracking-[0.3em] text-gold uppercase mb-3">
            SAVOIR-FAIRE
          </p>
          <h2 id="process-title" className="font-serif text-3xl md:text-4xl lg:text-5xl text-bone">
            La cire perdue
          </h2>
          <p className="font-sans text-bone/60 mt-4 max-w-xl leading-relaxed">
            Une technique millénaire, perfectionnée par des générations d&apos;artisans. Six étapes pour transformer la matière en émotion.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <div
              key={step.number}
              ref={el => { stepRefs.current[index] = el }}
              className={`relative transition-all duration-700 ${
                visibleSteps.has(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Step Image Placeholder */}
              <div className="relative aspect-[4/3] mb-6 overflow-hidden bg-slate">
                <div 
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `
                      radial-gradient(ellipse at 50% 50%, rgba(184, 146, 78, 0.2) 0%, transparent 70%),
                      linear-gradient(135deg, #2A2522 0%, #3A3532 100%)
                    `
                  }}
                />
                {/* Gesture icon placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full border-2 border-gold/30 flex items-center justify-center">
                    <span className="font-mono text-gold/60 text-sm">{step.number}</span>
                  </div>
                </div>
              </div>

              {/* Step Content */}
              <div>
                <div className="flex items-baseline gap-4 mb-2">
                  <span className="font-mono text-xs text-gold tracking-wider">{step.number}</span>
                  <h3 className="font-mono text-sm tracking-[0.2em] text-bone/80 uppercase">
                    {step.title}
                  </h3>
                </div>
                <h4 className="font-serif text-2xl text-bone mb-3">
                  {step.titleFr}
                </h4>
                <p className="font-sans text-sm text-bone/60 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connecting line for larger screens */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-[25%] -right-6 w-12 h-px bg-gradient-to-r from-gold/30 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
