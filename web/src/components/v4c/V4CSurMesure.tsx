import Image from "next/image";
import Link from "next/link";

const garamond = "font-[family-name:var(--font-eb-garamond)]";
const caveat = "font-[family-name:var(--font-caveat)]";

export function V4CSurMesure() {
  return (
    <section className="relative bg-[var(--site-surface)] py-12 lg:py-16 px-8 lg:px-16">
      <div className="absolute top-0 left-0 right-0 border-t border-[var(--site-text)]/15" />

      <div className="mx-auto max-w-[1100px] grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-8 lg:gap-12 items-center">
        <div>
          <span className={`${caveat} text-[14px] text-[var(--site-caveat)] block mb-2`}>
            — trois commissions par mois, pas plus
          </span>

          <h2 className={`${garamond} italic text-[28px] lg:text-[32px] text-[var(--site-text)] mb-4 leading-tight`}>
            Une commande particulière&nbsp;?
          </h2>

          <p className={`${garamond} italic text-[15px] text-[var(--site-text)]/80 leading-relaxed mb-5 max-w-md`}>
            Écrivez-nous votre histoire, nous dessinerons la pièce qui en porte la mémoire. Un projet commence toujours par une conversation — pas un formulaire.
          </p>

          <Link
            href="/fr/sur-mesure"
            className={`${garamond} italic text-[15px] text-[var(--site-text)] border-b border-[var(--site-text)]/40 pb-1 hover:border-[var(--site-text)] transition-all inline-flex items-center gap-2`}
          >
            Initier une commande
            <span aria-hidden>→</span>
          </Link>
        </div>

        <div className="relative aspect-[5/4] w-full max-w-[280px] md:max-w-[320px] md:ml-auto rotate-[0.5deg] hover:rotate-0 transition-transform duration-500">
          <Image
            src="/images/stitch-v3/sur-mesure-sketching.jpg"
            alt="Eméline en train de dessiner une pièce sur-mesure"
            fill
            sizes="(max-width: 768px) 100vw, 320px"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
