"use client"

import { useRef } from "react"
import Image from "next/image"

const collections = [
  { name: "Aurore", price: 890, image: "/images/collection-aurore.jpg" },
  { name: "Eugénie", price: 1250, image: "/images/collection-eugenie.jpg" },
  { name: "Joséphine", price: 1450, image: "/images/collection-josephine.jpg" },
  { name: "Thelma", price: 980, image: "/images/collection-thelma.jpg" },
  { name: "Louise", price: 750, image: "/images/collection-louise.jpg" },
]

export function CollectionTeaser() {
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <section id="collection" className="py-24 md:py-32">
      <div className="px-8 md:px-16 lg:px-20 mb-12">
        <h2 className="font-serif text-3xl md:text-4xl tracking-tight text-foreground">
          La Collection
        </h2>
      </div>

      <div 
        ref={scrollRef}
        className="flex gap-6 md:gap-8 overflow-x-auto scrollbar-hide px-8 md:px-16 lg:px-20 pb-4"
      >
        {collections.map((item) => (
          <article 
            key={item.name}
            className="group flex-shrink-0 w-[280px] md:w-[340px] cursor-pointer"
          >
            <div className="relative aspect-[3/4] overflow-hidden mb-6">
              <Image
                src={item.image}
                alt={`Collection ${item.name}`}
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                sizes="(max-width: 768px) 280px, 340px"
              />
            </div>
            <h3 className="font-serif italic text-2xl md:text-3xl transition-colors duration-300 group-hover:text-raspberry">
              {item.name}
            </h3>
            <p className="mt-2 text-sm text-foreground/60 tracking-wide">
              à partir de {item.price.toLocaleString("fr-FR")} €
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
