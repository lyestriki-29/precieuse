import Image from "next/image";
import Link from "next/link";
import { V2Footer } from "@/components/v2/V2Footer";
import { V2Nav } from "@/components/v2/V2Nav";

export const metadata = {
  title: "Eugénie — Précieuse",
  description: "La bague de princesse par excellence — création exclusive Précieuse.",
};

const playfair = "font-[family-name:var(--font-playfair)]";
const inter = "font-[family-name:var(--font-inter)]";

export default function EugenieV2Page() {
  return (
    <div className={`-mt-16 bg-[#fdf7ff] text-[#1d1b20] ${inter} antialiased`}>
      <V2Nav />

      {/* Hero plein écran avec titre italic Eugénie 140px */}
      <header className="relative h-screen w-full overflow-hidden">
        <Image
          src="/images/stitch-v2/hero-eugenie-hand-silk.jpg"
          alt="Bague Eugénie sur une main, soie crème en fond, lumière éthérée"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <h1
            className={`${playfair} text-[64px] sm:text-[100px] lg:text-[140px] leading-[1.1] tracking-[-0.03em] italic text-[#fdf7ff] drop-shadow-2xl`}
          >
            Eugénie
          </h1>
        </div>
      </header>

      {/* Intro */}
      <section className="mx-auto max-w-[1440px] px-6 pt-24 sm:px-10 sm:pt-40 lg:px-20">
        <span className={`${inter} text-[12px] font-medium uppercase tracking-[0.15em] text-[#765b00] mb-10 block`}>
          CRÉATION EXCLUSIVE
        </span>
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-7">
            <h2 className={`${playfair} text-[32px] sm:text-[40px] lg:text-[48px] leading-[1.3] italic mb-8`}>
              La bague de princesse par excellence
            </h2>
            <p className={`${inter} text-[18px] sm:text-[20px] leading-[1.8] tracking-[0.01em] font-light text-[#494551] max-w-2xl`}>
              Inspirée par l&apos;élégance souveraine, la bague Eugénie incarne la
              quintessence du savoir-faire de notre atelier. Chaque pierre est
              sélectionnée pour sa clarté exceptionnelle, montée avec une précision
              chirurgicale sur un anneau d&apos;or pur. C&apos;est une pièce de
              transmission, un secret murmuré entre les générations, capturant la
              lumière pour l&apos;éternité dans un écrin de métal précieux.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing + 4 macros */}
      <section className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 sm:py-40 lg:px-20">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2">
          <div className="flex h-full flex-col justify-center">
            <span className={`${playfair} text-[56px] sm:text-[72px] leading-[1.2] tracking-tight text-[#4f378a] mb-12 block`}>
              7 500 €
            </span>
            <Link
              href="/fr/contact?modele=eugenie"
              className={`${inter} text-[12px] font-medium uppercase tracking-[0.2em] text-[#4f378a] border-b border-[#4f378a] pb-2 hover:opacity-70 transition-opacity inline-block w-fit`}
            >
              Recevoir plus d&apos;informations
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { src: "macro-1-setting-detail", alt: "Détail de la monture diamantée" },
              { src: "macro-2-navette-closeup", alt: "Gros plan diamant navette sur or", offset: true },
              { src: "macro-3-topdown-linen", alt: "Vue plongeante sur lin texturé" },
              { src: "macro-4-back-setting", alt: "Architecture cachée au revers de la pierre", offset: true },
            ].map((m) => (
              <div key={m.src} className={`relative aspect-square w-full overflow-hidden ${m.offset ? "mt-12" : ""}`}>
                <Image
                  src={`/images/stitch-v2/${m.src}.jpg`}
                  alt={m.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Détails techniques */}
      <section className="mx-auto max-w-[1440px] border-t border-[#cbc4d2]/30 px-6 py-24 sm:px-10 sm:py-40 lg:px-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4 lg:col-start-9">
            <h3 className={`${inter} text-[12px] font-medium uppercase tracking-[0.15em] text-[#765b00] mb-8`}>
              Détails techniques
            </h3>
            <ul className="space-y-6">
              {[
                ["Matière", "5 g d'or 19 carats"],
                ["Pierre principale", "1 diamant navette 8×4 mm"],
                ["Accompagnement", "4 diamants navette 3×1,5 mm"],
                ["Détails", "6 diamants baguette 2×1,5 mm · 4 diamants ronds 1,5 mm · 2 diamants ronds 2 mm"],
              ].map(([label, value]) => (
                <li
                  key={label}
                  className="flex items-start justify-between gap-4 border-b border-[#cbc4d2]/30 pb-4"
                >
                  <span className={`${inter} text-[10px] uppercase tracking-[0.15em] text-[#494551]`}>
                    {label}
                  </span>
                  <span className={`${inter} text-[14px] font-light leading-relaxed text-right text-[#1d1b20]`}>
                    {value}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Atelier wide */}
      <section className="relative my-24 h-[500px] w-full overflow-hidden bg-[#ded8e0] sm:my-40 sm:h-[716px]">
        <Image
          src="/images/stitch-v2/atelier-azulejos-lisboa.jpg"
          alt="Atelier de joaillerie traditionnel à Lisbonne, azulejos bleus, artisans à l'établi"
          fill
          sizes="100vw"
          className="object-cover opacity-60 grayscale-[0.2]"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/10 px-6 text-center">
          <h2 className={`${playfair} text-[40px] sm:text-[56px] lg:text-[72px] leading-[1.2] italic text-[#fdf7ff] mb-4`}>
            L&apos;excellence du geste
          </h2>
          <p className={`${inter} text-[12px] font-medium uppercase tracking-[0.3em] text-[#fdf7ff]/80`}>
            ATELIER OURIVESARIA · LISBOA
          </p>
        </div>
      </section>

      {/* Le mot d'Eméline */}
      <section className="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 px-6 py-24 sm:px-10 sm:py-40 lg:grid-cols-12 lg:px-20">
        <div className="text-center lg:col-span-8 lg:col-start-3">
          <span className={`${inter} text-[12px] font-medium uppercase tracking-[0.15em] text-[#765b00] mb-10 block`}>
            LE MOT D&apos;ÉMELINE
          </span>
          <blockquote className={`${playfair} text-[32px] sm:text-[40px] lg:text-[48px] leading-[1.3] italic mb-10`}>
            « J&apos;ai voulu créer Eugénie comme un hommage aux lignées de femmes
            qui nous ont précédées. C&apos;est une pièce qui porte en elle une
            certaine autorité, mais toujours voilée de douceur. »
          </blockquote>
          <p className={`${inter} text-[18px] sm:text-[20px] leading-[1.8] tracking-[0.01em] font-light text-[#494551] mb-12 max-w-2xl mx-auto`}>
            Chaque courbe a été pensée pour épouser la main avec une aisance
            naturelle. Le choix des diamants baguette et navette crée un rythme
            visuel unique, une symphonie de reflets qui change à chaque mouvement.
            C&apos;est plus qu&apos;un bijou, c&apos;est une part de notre âme que
            nous partageons avec vous.
          </p>
          <div className={`${playfair} text-[36px] italic text-[#4f378a]`}>
            Eméline O.
          </div>
        </div>
      </section>

      {/* Pairing recommendations */}
      <section className="bg-[#f2ecf4] py-24 sm:py-40">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-20">
          <h4 className={`${inter} text-[12px] font-medium uppercase tracking-[0.15em] text-[#494551] mb-16 block text-center`}>
            ACCOMPAGNER VOTRE PIÈCE
          </h4>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <Link href="/fr/collection/louise" className="group cursor-pointer">
              <div className="mb-8 aspect-[4/5] overflow-hidden bg-[#fdf7ff]">
                <Image
                  src="/images/bijoux-officiels/louise.jpg"
                  alt="Bague Louise — alliance pavée"
                  width={1600}
                  height={2000}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex items-baseline justify-between">
                <div>
                  <h5 className={`${playfair} text-[36px] sm:text-[48px] leading-[1.3] mb-2`}>
                    Louise
                  </h5>
                  <span className={`${inter} text-[12px] font-medium uppercase tracking-[0.15em] text-[#494551]`}>
                    BAGUE ÉTERNITÉ
                  </span>
                </div>
                <span className={`${inter} text-[12px] font-medium uppercase tracking-[0.15em] text-[#4f378a]`}>
                  À partir de 1 200 €
                </span>
              </div>
            </Link>
            <div className="hidden md:block" />
          </div>
        </div>
      </section>

      <V2Footer />
    </div>
  );
}
