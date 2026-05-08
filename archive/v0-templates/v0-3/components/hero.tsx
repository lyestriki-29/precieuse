'use client'

import { useEffect, useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden" aria-label="Hero section">
      {/* Video/Gradient Background */}
      <div className="absolute inset-0">
        {/* Placeholder gradient simulating hands at jeweler's bench */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-charcoal via-concrete to-charcoal"
          style={{
            backgroundImage: `
              radial-gradient(ellipse at 30% 70%, rgba(184, 146, 78, 0.3) 0%, transparent 50%),
              radial-gradient(ellipse at 70% 40%, rgba(184, 146, 78, 0.15) 0%, transparent 40%),
              linear-gradient(to bottom right, #1A1614, #6B6560, #1A1614)
            `
          }}
        />
        {/* Video element placeholder - muted autoplay */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover opacity-0"
          autoPlay
          muted
          loop
          playsInline
          aria-describedby="hero-video-description"
        >
          <track kind="descriptions" src="" label="Hands crafting a ring at a jeweler's bench" />
        </video>
        <span id="hero-video-description" className="sr-only">
          Hands of an artisan crafting a gold ring at a traditional jeweler&apos;s workbench
        </span>
        
        {/* Subtle texture overlay */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-12 lg:p-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          {/* Main Title - Bottom Left */}
          <div 
            className={`max-w-2xl transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl text-bone leading-tight mb-4">
              Le geste juste.
              <br />
              La matière vraie.
            </h1>
            <p className="font-sans text-base md:text-lg text-bone/80 max-w-md leading-relaxed">
              Joaillerie 100% fait main au Portugal. Or 19 carats. Diamants certifiés GIA/HRD.
            </p>
          </div>

          {/* Vertical Text - Bottom Right */}
          <div 
            className={`hidden md:block transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          >
            <p 
              className="font-mono text-xs tracking-[0.3em] text-bone/60 uppercase"
              style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
            >
              EST. LISBONNE — 19KT — RJC
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div 
          className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        >
          <span className="font-mono text-[10px] tracking-[0.2em] text-bone/50 uppercase">Scroll</span>
          <ChevronDown className="w-5 h-5 text-bone/50 animate-bounce" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}
