import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/luxe";

export function HomeBespoke() {
  return (
    <section className="border-y border-outline-variant/30 bg-surface-container-low py-20 sm:py-28">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-16 px-6 sm:px-10 md:grid-cols-2 lg:gap-20 lg:px-16">
        <Reveal className="order-2 md:order-1">
          <span className="font-technical-label mb-4 block tracking-[0.3em] uppercase text-tertiary">
            Pièce unique
          </span>
          <h2 className="font-display-xl mb-8 leading-tight">
            Une idée, un projet ? Parlons-en.
          </h2>
          <p className="font-body-lg mb-10 max-w-md text-on-surface-variant">
            L&apos;atelier est ouvert aux créations sur-mesure. Ensemble, nous
            transformons votre histoire personnelle en un objet permanent, doté
            de poids et de sens.
          </p>
          <Link
            href="/fr/sur-mesure"
            className="inline-block bg-raspberry px-10 py-4 text-white font-technical-label uppercase tracking-[0.15em] hover:opacity-90 transition-opacity"
          >
            Démarrer un projet sur-mesure
          </Link>
        </Reveal>

        <Reveal delay={0.15} className="relative order-1 md:order-2">
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src="/images/stitch/sur-mesure-emeline-atelier.jpg"
              alt="Eméline travaillant à l'établi sur un modèle en cire"
              fill
              sizes="(min-width: 768px) 45vw, 100vw"
              className="object-cover grayscale"
            />
          </div>
          <div className="absolute -bottom-3 -right-3 max-w-xs border border-outline-variant bg-cream p-5 shadow-sm">
            <p className="font-technical-label italic leading-relaxed">
              « Chaque pièce sur-mesure commence par une conversation sur la
              lumière et l&apos;héritage. »
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
