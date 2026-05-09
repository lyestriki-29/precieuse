import Image from "next/image";

const inter = "font-[family-name:var(--font-inter)]";

export function V3Atelier() {
  return (
    <section className="mb-24 sm:mb-40">
      <div className="relative aspect-[21/9] w-full overflow-hidden">
        <Image
          src="/images/stitch-v3/atelier-portugal-wide.jpg"
          alt="Atelier de joaillerie au Portugal"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#1d1b20]/10" />
      </div>
      <div className="mx-auto mt-12 flex max-w-[1440px] justify-center px-6 sm:px-10 lg:px-20">
        <div className="max-w-xl text-center">
          <p className={`${inter} text-[12px] font-medium uppercase tracking-[0.3em] text-[#494551]`}>
            Un savoir-faire joaillier, une création qui vous ressemble.
          </p>
          <div className="mx-auto mt-8 h-px w-24 bg-[#cbc4d2]" />
        </div>
      </div>
    </section>
  );
}
