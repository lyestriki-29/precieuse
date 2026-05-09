import Image from "next/image";

const playfair = "font-[family-name:var(--font-playfair)]";
const inter = "font-[family-name:var(--font-inter)]";

export function V3Creatrice() {
  return (
    <section className="mx-auto mb-24 max-w-[1440px] px-6 py-20 sm:mb-40 sm:px-10 sm:py-28 lg:px-20">
      <div className="grid grid-cols-12 items-center gap-8 lg:gap-16">
        <div className="col-span-12 md:col-span-5">
          <div className="relative aspect-square overflow-hidden bg-[#f8f2fa]">
            <Image
              src="/images/stitch-v3/creatrice-emeline-portrait.jpg"
              alt="Portrait éditorial noir et blanc d'Eméline, fondatrice"
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover grayscale"
            />
          </div>
        </div>

        <div className="col-span-12 flex flex-col gap-8 md:col-span-6 md:col-start-7">
          <div className="flex flex-col gap-2">
            <h2 className={`${playfair} text-[64px] sm:text-[88px] lg:text-[96px] leading-[1.1] italic text-[#4f378a]`}>
              Eméline
            </h2>
            <span className={`${inter} text-[12px] font-medium uppercase tracking-[0.2em] text-[#494551]`}>
              Fondatrice &amp; Maître joaillière
            </span>
          </div>

          <div className={`${inter} flex flex-col gap-5 text-[18px] sm:text-[20px] leading-[1.8] tracking-[0.01em] font-light text-[#494551]`}>
            <p>
              Après des années dans les maisons traditionnelles, Eméline a fondé
              Précieuse pour revenir à l&apos;essence brute du bijou :
              l&apos;intersection du feu, du métal et du temps.
            </p>
            <p>
              Sa philosophie est celle de la retenue. Seul ce qui est nécessaire
              est gardé ; seul ce qui est vrai est célébré.
            </p>
          </div>

          <dl className="grid grid-cols-2 gap-6 border-t border-[#cbc4d2]/40 pt-8">
            <div className="flex flex-col gap-1">
              <dt className={`${inter} text-[12px] font-medium uppercase tracking-[0.2em] text-[#765b00]`}>
                Formation
              </dt>
              <dd className={`${inter} text-[12px] font-medium uppercase tracking-[0.15em] text-[#1d1b20]`}>
                École Boulle, Paris
              </dd>
            </div>
            <div className="flex flex-col gap-1">
              <dt className={`${inter} text-[12px] font-medium uppercase tracking-[0.2em] text-[#765b00]`}>
                Expertise
              </dt>
              <dd className={`${inter} text-[12px] font-medium uppercase tracking-[0.15em] text-[#1d1b20]`}>
                Cire perdue
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
