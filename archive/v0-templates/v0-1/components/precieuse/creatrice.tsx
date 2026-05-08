import Image from "next/image"

export function Creatrice() {
  return (
    <section className="py-24 md:py-32 px-8 md:px-16 lg:px-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left: Portrait */}
        <div className="relative aspect-[3/4] lg:order-1">
          <Image
            src="/images/creatrice.jpg"
            alt="Eméline, créatrice de Précieuse"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        {/* Right: Quote and CTA */}
        <div className="lg:order-2">
          <h2 className="font-serif text-3xl md:text-4xl tracking-tight text-foreground mb-8">
            La Créatrice
          </h2>
          <blockquote className="font-serif italic text-2xl md:text-3xl lg:text-4xl leading-snug text-foreground/90 mb-10">
            &ldquo;Chaque bijou raconte une histoire. La vôtre mérite d&apos;être écrite avec le plus grand soin.&rdquo;
          </blockquote>
          <p className="text-base font-light leading-relaxed text-foreground/70 mb-10">
            Eméline a fondé Précieuse avec une vision simple : créer des bijoux qui traversent le temps 
            et portent en eux l&apos;essence de ceux qui les portent.
          </p>
          <a 
            href="#contact"
            className="group inline-flex items-center gap-3 text-sm tracking-widest uppercase text-foreground hover:text-raspberry transition-colors duration-300"
          >
            <span>Rencontrer Eméline</span>
            <span className="w-8 h-px bg-current transition-all duration-300 group-hover:w-12" />
          </a>
        </div>
      </div>
    </section>
  )
}
