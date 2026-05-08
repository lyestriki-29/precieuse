import Image from "next/image";
import { Reveal } from "@/components/luxe";

export function HomeCreatrice() {
  return (
    <section className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 sm:py-28 lg:px-16">
      <div className="grid grid-cols-12 items-center gap-8 lg:gap-12">
        <Reveal className="col-span-12 md:col-span-5">
          <div className="relative aspect-square overflow-hidden bg-surface-dim">
            <Image
              src="/images/stitch/creatrice-emeline-portrait.jpg"
              alt="Portrait éditorial noir et blanc d'Eméline, fondatrice"
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover grayscale"
            />
          </div>
        </Reveal>

        <Reveal
          delay={0.15}
          className="col-span-12 flex flex-col gap-8 md:col-span-6 md:col-start-7"
        >
          <div className="flex flex-col gap-2">
            <h2 className="font-display-xl italic">Eméline</h2>
            <span className="font-technical-label tracking-[0.2em] uppercase text-on-surface-variant">
              Fondatrice &amp; Maître joaillière
            </span>
          </div>

          <div className="font-body-lg flex flex-col gap-5 text-on-surface-variant">
            <p>
              Après des années dans les maisons traditionnelles, Eméline a
              fondé Précieuse pour revenir à l&apos;essence brute du bijou :
              l&apos;intersection du feu, du métal et du temps.
            </p>
            <p>
              Sa philosophie est celle de la retenue. Seul ce qui est
              nécessaire est gardé ; seul ce qui est vrai est célébré.
            </p>
          </div>

          <dl className="grid grid-cols-2 gap-6 border-t border-outline-variant/40 pt-8">
            <div className="flex flex-col gap-1">
              <dt className="font-technical-label tracking-[0.15em] uppercase text-tertiary">
                Formation
              </dt>
              <dd className="font-technical-label tracking-[0.1em] uppercase">
                École Boulle, Paris
              </dd>
            </div>
            <div className="flex flex-col gap-1">
              <dt className="font-technical-label tracking-[0.15em] uppercase text-tertiary">
                Expertise
              </dt>
              <dd className="font-technical-label tracking-[0.1em] uppercase">
                Cire perdue
              </dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
