import Image from "next/image";
import Link from "next/link";

const garamond = "font-[family-name:var(--font-eb-garamond)]";
const caveat = "font-[family-name:var(--font-caveat)]";

export function V3CSurMesure() {
  return (
    <section className="relative bg-[#ede4d5] py-24 px-8 lg:px-16">
      <div className="absolute top-0 left-0 right-0 border-t-2 border-double border-[#3d2817]/15" />

      <div className="mx-auto max-w-[1440px] grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Texte */}
        <div>
          {/* Annotation marginale */}
          <span className={`${caveat} text-[17px] text-[#1e3a5f] block mb-6`}>
            — trois commissions par mois, pas plus
          </span>

          <h2 className={`${garamond} italic text-[42px] text-[#3d2817] mb-8 leading-tight`}>
            Une commande particulière ?
          </h2>

          <p className="font-[family-name:var(--font-inter)] text-[15px] font-light text-[#6b4423] leading-[1.8] mb-10 max-w-md">
            Chaque mois, nous acceptons trois commandes de pièces uniques. Écrivez-nous votre histoire, nous dessinerons la pièce qui en porte la mémoire.
          </p>

          <p className={`${caveat} text-[20px] text-[#1e3a5f] leading-relaxed mb-10 max-w-sm`}>
            Un projet commence toujours par une conversation — pas un formulaire.
          </p>

          <Link
            href="/fr/sur-mesure"
            className={`${garamond} italic text-[20px] text-[#3d2817] border-b border-[#3d2817]/40 pb-1 hover:border-[#3d2817] transition-all`}
          >
            Initier une commande
          </Link>
        </div>

        {/* Image */}
        <div className="relative aspect-[4/5] w-full max-w-[480px] mx-auto lg:mx-0 rotate-[0.5deg] hover:rotate-0 transition-transform duration-500">
          <Image
            src="/images/stitch-v3/sur-mesure-sketching.jpg"
            alt="Eméline en train de dessiner une pièce sur-mesure dans son atelier"
            fill
            sizes="(max-width: 1024px) 100vw, 480px"
            className="object-cover"
          />
          {/* Cadre esquisse */}
          <svg
            aria-hidden
            className="pointer-events-none absolute inset-0 w-full h-full"
            viewBox="0 0 480 600"
            fill="none"
          >
            <rect x="10" y="12" width="460" height="576" rx="1"
              stroke="#3d2817" strokeWidth="0.8" strokeDasharray="4 8"
              strokeOpacity="0.25" />
          </svg>
        </div>
      </div>

      <div className="mt-16 flex justify-end max-w-[1440px] mx-auto">
        <span className={`${garamond} italic text-[13px] text-[#a08552]`}>p. 07</span>
      </div>

      <div className="absolute bottom-0 left-0 right-0 border-t-2 border-double border-[#3d2817]/15" />
    </section>
  );
}
