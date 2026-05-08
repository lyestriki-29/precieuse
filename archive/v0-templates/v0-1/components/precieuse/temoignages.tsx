"use client"

import { useState, useEffect } from "react"

const testimonials = [
  {
    quote: "Un bijou qui porte en lui toute l'histoire de notre famille. Eméline a su traduire nos émotions en or.",
    author: "Marie L.",
  },
  {
    quote: "La délicatesse et l'attention portée à chaque détail m'ont profondément touchée.",
    author: "Sophie B.",
  },
  {
    quote: "Ma bague de fiançailles est exactement ce que j'avais imaginé, en plus beau encore.",
    author: "Camille R.",
  },
  {
    quote: "Un processus de création magique. On sent que chaque bijou est unique.",
    author: "Isabelle M.",
  },
  {
    quote: "Précieuse a créé le pendentif parfait pour transmettre un souvenir précieux.",
    author: "Nathalie D.",
  },
  {
    quote: "L'écoute et le savoir-faire d'Eméline sont exceptionnels.",
    author: "Claire P.",
  },
  {
    quote: "Un travail d'une finesse remarquable. Je recommande sans hésiter.",
    author: "Anne-Marie F.",
  },
  {
    quote: "Chaque détail compte chez Précieuse. Le résultat est à la hauteur de mes espérances.",
    author: "Hélène G.",
  },
  {
    quote: "Une expérience sur-mesure inoubliable, du premier échange jusqu'à la livraison.",
    author: "Béatrice C.",
  },
]

export function Temoignages() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
        setIsVisible(true)
      }, 500)
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-24 md:py-32 px-8 md:px-16 lg:px-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl tracking-tight text-foreground mb-16 text-center">
          Témoignages
        </h2>

        <div className="relative min-h-[200px] flex flex-col items-center justify-center">
          <blockquote 
            className={`font-serif italic text-2xl md:text-3xl lg:text-4xl leading-snug text-center text-foreground/90 transition-opacity duration-500 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            &ldquo;{testimonials[currentIndex].quote}&rdquo;
          </blockquote>
          
          <p 
            className={`mt-8 text-sm tracking-widest uppercase text-foreground/60 transition-opacity duration-500 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            — {testimonials[currentIndex].author}
          </p>

          {/* Numeric counter */}
          <div className="mt-12 text-sm tracking-wider text-foreground/40">
            <span className="text-foreground/70">{String(currentIndex + 1).padStart(2, "0")}</span>
            <span className="mx-2">/</span>
            <span>{String(testimonials.length).padStart(2, "0")}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
