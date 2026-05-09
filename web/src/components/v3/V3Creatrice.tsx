import Image from "next/image";
import Link from "next/link";

const playfair = "font-[family-name:var(--font-playfair)]";
const inter = "font-[family-name:var(--font-inter)]";

export function V3Creatrice() {
  return (
    <section className="mx-auto mb-24 max-w-[1440px] px-6 sm:mb-40 sm:px-10 lg:px-20">
      <div className="flex flex-col items-center gap-16 md:flex-row md:gap-20">
        <div className="w-full md:w-1/2">
          <div className="relative mx-auto aspect-[4/5] max-w-md">
            <Image
              src="/images/stitch-v3/creatrice-emeline-portrait.jpg"
              alt="Portrait éditorial d'Eméline, fondatrice"
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover grayscale brightness-110"
            />
            <div className="absolute -bottom-8 -right-8 -z-10 h-40 w-40 bg-white" />
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <blockquote className={`${playfair} mb-12 text-[36px] sm:text-[44px] lg:text-[48px] leading-[1.3] italic text-[#4f378a]`}>
            « La joaillerie est pour moi une confidence. Chaque pierre choisie,
            chaque métal martelé, raconte le fragment d&apos;une vie, une
            promesse que l&apos;on se fait à soi-même ou à l&apos;autre. »
          </blockquote>
          <div className="flex flex-wrap items-center gap-12">
            <div className="group inline-block">
              <Link
                href="/fr/creatrice"
                className={`${inter} text-[12px] font-medium uppercase tracking-[0.2em] text-[#4f378a]`}
              >
                RENCONTRER ÉMELINE
              </Link>
              <div className="mt-2 h-px w-0 bg-[#7a7582] transition-[width] duration-700 ease-out group-hover:w-full" />
            </div>
            <span className={`${inter} text-[12px] font-medium italic uppercase tracking-[0.15em] text-[#cbc4d2]`}>
              — Fondatrice &amp; Créatrice
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
