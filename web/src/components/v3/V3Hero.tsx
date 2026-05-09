import Image from "next/image";
import Link from "next/link";

const playfair = "font-[family-name:var(--font-playfair)]";
const inter = "font-[family-name:var(--font-inter)]";

export function V3Hero() {
  return (
    <section className="relative mx-auto mb-24 flex min-h-screen max-w-[1440px] flex-col items-center px-6 pt-32 sm:mb-40 sm:px-10 md:flex-row lg:px-20">
      <div className="z-10 w-full md:w-5/12">
        <h1 className={`${playfair} mb-8 text-[88px] sm:text-[120px] lg:text-[140px] leading-[1.1] tracking-[-0.03em] italic text-[#4f378a]`}>
          Précieuse
        </h1>
        <p className={`${playfair} max-w-md text-[32px] sm:text-[40px] lg:text-[48px] leading-tight text-[#494551]`}>
          Nous ne créons pas simplement des bijoux. Nous créons des liens.
        </p>
        <div className="mt-16 inline-block group sm:mt-24">
          <Link
            href="#collections"
            className={`${inter} flex items-center gap-4 text-[12px] font-medium uppercase tracking-[0.2em] text-[#4f378a]`}
          >
            DÉCOUVRIR LA COLLECTION
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              className="h-5 w-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </Link>
          <div className="mt-2 h-px w-0 bg-[#7a7582] transition-[width] duration-700 ease-out group-hover:w-full" />
        </div>
      </div>

      <div className="relative mt-12 aspect-[4/5] w-full overflow-hidden md:mt-0 md:w-7/12">
        <Image
          src="/images/stitch-v3/hero-bague-portrait.jpg"
          alt="Bague Précieuse, lumière naturelle"
          fill
          priority
          sizes="(min-width: 768px) 58vw, 100vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}
