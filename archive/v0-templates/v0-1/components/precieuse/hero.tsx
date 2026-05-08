"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export function Hero() {
  const imageRef = useRef<HTMLDivElement>(null)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const parallaxOffset = scrollY * 0.3

  return (
    <section className="min-h-screen relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Left: Typography */}
        <div className="flex flex-col justify-center px-8 md:px-16 lg:px-20 py-20 lg:py-0">
          <h1 className="font-serif italic text-[72px] md:text-[100px] lg:text-[140px] leading-[0.9] tracking-tight text-foreground">
            Précieuse
          </h1>
          <p className="mt-8 md:mt-12 text-lg md:text-xl font-light leading-relaxed max-w-md text-foreground/80">
            Un savoir-faire joaillier, une création qui vous ressemble.
          </p>
        </div>

        {/* Right: Hero Image */}
        <div 
          ref={imageRef}
          className="relative h-[70vh] lg:h-screen overflow-hidden"
        >
          <div 
            className="absolute inset-0 transition-transform duration-100"
            style={{ transform: `translateY(${parallaxOffset}px)` }}
          >
            <Image
              src="/images/hero-ring.jpg"
              alt="Bague artisanale Précieuse"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>

      {/* CTA below the fold */}
      <div className="absolute bottom-12 left-8 md:left-16 lg:left-20">
        <a 
          href="#collection" 
          className="group inline-flex items-center gap-3 text-sm tracking-widest uppercase text-foreground/70 hover:text-raspberry transition-colors duration-300"
        >
          <span>Découvrir la collection</span>
          <span className="w-8 h-px bg-current transition-all duration-300 group-hover:w-12" />
        </a>
      </div>
    </section>
  )
}
