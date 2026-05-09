import Image from "next/image";
import { MANIFESTO, FONT } from "./data";

const { garamond, caveat } = FONT;

export function V4CCreationsManifesto() {
  return (
    <div className="relative px-8 lg:px-16 pt-24 pb-20 lg:pt-32 lg:pb-28">
      <div className="mx-auto max-w-[1340px]">
        {/* Surtitre */}
        <div className="flex items-center gap-4 mb-12">
          <span className="block w-16 h-px bg-[var(--site-accent)]" />
          <span className={`${garamond} italic text-[12px] tracking-[0.4em] text-[var(--site-accent)]`}>
            {MANIFESTO.surtitle}
          </span>
          <span className="block flex-1 h-px bg-[var(--site-accent)]/30" />
        </div>

        {/* Hook + image en split */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-16 items-center mb-16 lg:mb-20">
          <h2 className={`${garamond} italic text-[44px] sm:text-[60px] lg:text-[80px] text-[var(--site-text)] leading-[0.98]`}>
            {MANIFESTO.hook}
          </h2>

          {/* Image atmosphère — mains des aïeuls */}
          <figure className="relative aspect-[4/5] w-full max-w-[440px] mx-auto lg:ml-auto overflow-hidden shadow-[0_30px_60px_-30px_rgba(0,0,0,0.4)]">
            <Image
              src={MANIFESTO.atmosphere.src}
              alt={MANIFESTO.atmosphere.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 440px"
              className="object-cover sepia-[0.1]"
              priority
            />
            <figcaption className={`${caveat} absolute bottom-3 right-4 text-[15px] text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]`}>
              les mains qui ont tout commencé
            </figcaption>
          </figure>
        </div>

        {/* Corps — 2 paragraphes */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-start">
          <div className="space-y-7 max-w-[720px]">
            {MANIFESTO.body.map((p, i) => (
              <p
                key={i}
                className={`${garamond} italic text-[20px] lg:text-[22px] text-[var(--site-text)]/85 leading-[1.65]`}
              >
                {p}
              </p>
            ))}
            <p className={`${garamond} italic text-[20px] lg:text-[22px] text-[var(--site-text)]/85 leading-[1.65] pt-4 border-t border-[var(--site-text)]/15`}>
              {MANIFESTO.closing}
            </p>
          </div>

          {/* Signature manuscrite */}
          <aside className="flex flex-col items-end gap-2 lg:pt-12">
            <span className={`${caveat} text-[16px] text-[var(--site-caveat)]/70 italic`}>
              — Carnet d&apos;atelier
            </span>
            <span className={`${caveat} text-[56px] lg:text-[72px] text-[var(--site-caveat)] leading-none`}>
              {MANIFESTO.signature}
            </span>
            <span className={`${garamond} italic text-[12px] tracking-[0.3em] text-[var(--site-accent)]`}>
              LISBOA · MMXXVI
            </span>
          </aside>
        </div>

        {/* Décor bas */}
        <div className="mt-16 flex items-center gap-4">
          <span className="block flex-1 h-px bg-[var(--site-accent)]/30" />
          <span aria-hidden className={`${garamond} italic text-[20px] text-[var(--site-accent)]`}>
            ※
          </span>
          <span className="block flex-1 h-px bg-[var(--site-accent)]/30" />
        </div>
      </div>
    </div>
  );
}
