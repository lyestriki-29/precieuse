import Image from "next/image"

export function SurMesure() {
  return (
    <section className="py-24 md:py-32 px-8 md:px-16 lg:px-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left: Image */}
        <div className="relative aspect-[4/5] lg:aspect-[3/4]">
          <Image
            src="/images/sur-mesure.jpg"
            alt="Création sur-mesure - mains esquissant un bijou"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        {/* Right: Content */}
        <div className="lg:pl-8">
          <h2 className="font-serif italic text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight text-foreground mb-8">
            Sur-Mesure
          </h2>
          <p className="text-lg md:text-xl font-light leading-relaxed text-foreground/80 mb-6">
            Nous ne créons pas simplement des bijoux. Nous créons des liens.
          </p>
          <p className="text-base font-light leading-relaxed text-foreground/70 mb-10">
            Précieuse, c&apos;est la rencontre entre l&apos;excellence artisanale et l&apos;écoute intime, 
            pour des créations qui célèbrent ce que vous avez d&apos;unique à transmettre.
          </p>
          <a 
            href="#contact"
            className="group inline-flex items-center gap-3 text-sm tracking-widest uppercase text-foreground hover:text-raspberry transition-colors duration-300"
          >
            <span>Imaginer ma création</span>
            <span className="w-8 h-px bg-current transition-all duration-300 group-hover:w-12" />
          </a>
        </div>
      </div>
    </section>
  )
}
