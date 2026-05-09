import Image from "next/image";
import Link from "next/link";

const inter = "font-[family-name:var(--font-inter)]";

export function V3SurMesure() {
  return (
    <section className="mx-auto mb-24 max-w-[1440px] px-6 sm:mb-40 sm:px-10 lg:px-20">
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-12">
        <div className="aspect-video overflow-hidden md:col-span-7">
          <Image
            src="/images/stitch-v3/sur-mesure-sketching.jpg"
            alt="Esquisse de bijou sur-mesure à l'établi"
            width={1600}
            height={900}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="py-8 md:col-span-5 md:pl-16">
          <h3 className={`${inter} mb-8 text-[12px] font-medium uppercase tracking-[0.2em] text-[#4f378a]`}>
            L&apos;EXCEPTIONNEL
          </h3>
          <p className={`${inter} mb-12 text-[18px] sm:text-[20px] leading-[1.8] tracking-[0.01em] font-light text-[#494551]`}>
            Précieuse, c&apos;est la rencontre entre l&apos;excellence
            artisanale et l&apos;écoute intime. Nous transformons vos histoires
            en objets d&apos;exception.
          </p>
          <div className="group inline-block">
            <Link
              href="/fr/sur-mesure"
              className={`${inter} text-[12px] font-medium uppercase tracking-[0.2em] text-[#4f378a]`}
            >
              IMAGINER MA CRÉATION
            </Link>
            <div className="mt-2 h-px w-0 bg-[#7a7582] transition-[width] duration-700 ease-out group-hover:w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
