import Image from "next/image"

export function Atelier() {
  return (
    <section className="py-24 md:py-32">
      <div className="relative aspect-[21/9] md:aspect-[3/1] w-full">
        <Image
          src="/images/atelier.jpg"
          alt="L'atelier Précieuse au Portugal"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>
      <div className="px-8 md:px-16 lg:px-20 mt-8">
        <p className="text-xs md:text-sm tracking-[0.2em] uppercase text-foreground/60">
          Notre atelier au Portugal — Où chaque création prend vie
        </p>
      </div>
    </section>
  )
}
