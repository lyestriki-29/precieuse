import Image from "next/image";
import Link from "next/link";

const garamond = "font-[family-name:var(--font-eb-garamond)]";
const caveat = "font-[family-name:var(--font-caveat)]";

export function V4CMaisonEngagements() {
  return (
    <section className="relative bg-[var(--site-bg)] py-24 px-8 lg:px-16">
      <div className="absolute top-0 left-0 right-0 border-t-2 border-double border-[var(--site-text)]/15" />

      <div className="mx-auto max-w-[1440px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Carte La Maison */}
          <div className="bg-[var(--site-surface)] p-8 rotate-[-0.5deg] hover:rotate-0 transition-transform duration-500">
            <h2 className={`${garamond} italic text-[36px] text-[var(--site-text)] mb-6`}>
              La Maison
            </h2>

            <div className="relative w-full aspect-[3/2] mb-6 overflow-hidden">
              <Image
                src="/images/emeline/emeline-atelier.jpg"
                alt="Eméline dans son atelier de joaillerie à Lisbonne"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <svg
                aria-hidden
                className="pointer-events-none absolute inset-0 w-full h-full"
                viewBox="0 0 500 333" fill="none"
              >
                <rect x="8" y="8" width="484" height="317" rx="1"
                  stroke="#3d2817" strokeWidth="0.8" strokeDasharray="3 7" strokeOpacity="0.25" />
              </svg>
            </div>

            <p className={`${caveat} text-[19px] text-[var(--site-caveat)] leading-relaxed mb-6`}>
              Un atelier à Lisbonne, une créatrice, un geste transmis — Précieuse existe depuis 2019, pour celles qui veulent comprendre ce qu&apos;elles portent.
            </p>

            <Link
              href="/fr/creatrice"
              className={`${garamond} italic text-[16px] text-[var(--site-text)] underline underline-offset-2 decoration-[var(--site-text)]/30 hover:decoration-[var(--site-text)] transition-all`}
            >
              découvrir
            </Link>
          </div>

          {/* Carte Nos Engagements */}
          <div className="bg-[var(--site-surface)] p-8 rotate-[0.5deg] hover:rotate-0 transition-transform duration-500 md:mt-8">
            <h2 className={`${garamond} italic text-[36px] text-[var(--site-text)] mb-6`}>
              Nos Engagements
            </h2>

            <div className="relative w-full aspect-[3/2] mb-6 overflow-hidden">
              <Image
                src="/images/stitch/materiaux-tracabilite.jpg"
                alt="Traçabilité et engagements éthiques de Précieuse"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <svg
                aria-hidden
                className="pointer-events-none absolute inset-0 w-full h-full"
                viewBox="0 0 500 333" fill="none"
              >
                <rect x="8" y="8" width="484" height="317" rx="1"
                  stroke="#3d2817" strokeWidth="0.8" strokeDasharray="3 7" strokeOpacity="0.25" />
              </svg>
            </div>

            <p className={`${caveat} text-[19px] text-[var(--site-caveat)] leading-relaxed mb-6`}>
              Or traçable, pierres certifiées, emballages sans plastique — nos choix ne sont pas des arguments marketing, ils sont des contraintes que l&apos;on s&apos;impose.
            </p>

            <Link
              href="/fr/creatrice"
              className={`${garamond} italic text-[16px] text-[var(--site-text)] underline underline-offset-2 decoration-[var(--site-text)]/30 hover:decoration-[var(--site-text)] transition-all`}
            >
              découvrir
            </Link>
          </div>
        </div>

        <div className="mt-16 flex justify-end">
          <span className={`${garamond} italic text-[13px] text-[var(--site-accent)]`}>p. 11</span>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 border-t-2 border-double border-[var(--site-text)]/15" />
    </section>
  );
}
