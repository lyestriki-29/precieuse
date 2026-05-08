import Image from "next/image";

export function HomeHero() {
  return (
    <section className="relative -mt-16 flex h-screen w-full items-end overflow-hidden bg-surface-dim">
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />

      <Image
        src="/images/stitch/hero-atelier-dusk.jpg"
        alt="Atelier de joaillière au crépuscule — or brut, loupe et outils"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div className="relative z-20 mx-auto flex w-full max-w-[1440px] items-end justify-between gap-8 px-6 pb-20 sm:px-10 lg:px-16">
        <h1 className="font-display-xl max-w-2xl leading-none text-white italic">
          Le geste juste.
          <br />
          La matière vraie.
        </h1>

        <div className="hidden flex-col items-end gap-1 pb-3 sm:flex">
          <span className="font-technical-label uppercase text-white/80 [writing-mode:vertical-rl] tracking-[0.2em]">
            EST. LISBONNE — 19KT — RJC
          </span>
        </div>
      </div>
    </section>
  );
}
