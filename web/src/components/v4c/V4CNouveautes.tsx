import Image from "next/image";
import Link from "next/link";
import { PRODUCTS } from "@/lib/content/products";

const garamond = "font-[family-name:var(--font-eb-garamond)]";
const caveat = "font-[family-name:var(--font-caveat)]";

const NOUVEAUTES_SLUGS = ["aurore", "eugenie", "thelma"] as const;
const DATES_AJOUT = ["ajoutée en mars", "esquissée en avril", "fondue en mai"] as const;
const ROTATIONS = ["rotate-1", "-rotate-1", "rotate-[0.5deg]"] as const;

export function V4CNouveautes() {
  const items = NOUVEAUTES_SLUGS.map((slug) =>
    PRODUCTS.find((p) => p.slug === slug)
  ).filter(Boolean);

  return (
    <section className="relative bg-[#ede4d5] py-24 px-8 lg:px-16">
      <div className="absolute top-0 left-0 right-0 border-t-2 border-double border-[#3d2817]/15" />

      <div className="mx-auto max-w-[1440px]">
        <div className="mb-16">
          <h2 className={`${garamond} italic text-[42px] text-[#3d2817] mb-2`}>
            Dernières créations
          </h2>
          <p className={`${caveat} text-[20px] text-[#1e3a5f]`}>
            — fraîchement sorties de l&apos;atelier
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((product, i) => {
            if (!product) return null;
            return (
              <article
                key={product.slug}
                className={`group bg-[#f4ede0] p-4 ${ROTATIONS[i]} hover:rotate-0 transition-transform duration-500`}
              >
                {/* Photo carrée */}
                <div className="relative w-full aspect-square mb-4 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
                  />
                  {/* Cadre esquisse */}
                  <svg
                    aria-hidden
                    className="pointer-events-none absolute inset-0 w-full h-full"
                    viewBox="0 0 400 400"
                    fill="none"
                  >
                    <rect x="8" y="8" width="384" height="384" rx="1"
                      stroke="#3d2817" strokeWidth="0.8" strokeDasharray="3 6" strokeOpacity="0.25" />
                  </svg>
                </div>

                <h3 className={`${garamond} italic text-[28px] text-[#3d2817] mb-1`}>
                  {product.name}
                </h3>
                <p className={`${caveat} text-[17px] text-[#1e3a5f] mb-3`}>
                  {product.tagline}
                </p>
                <p className="font-[family-name:var(--font-inter)] text-[12px] font-light text-[#6b4423]/60 mb-4">
                  {product.price}
                </p>

                <div className="flex items-center justify-between border-t border-[#3d2817]/10 pt-3">
                  <span className={`${caveat} text-[14px] text-[#1e3a5f] italic opacity-70`}>
                    {DATES_AJOUT[i]}
                  </span>
                  <Link
                    href={`/fr/collection/${product.slug}`}
                    className={`${garamond} italic text-[14px] text-[#3d2817] underline underline-offset-2 decoration-[#3d2817]/30 hover:decoration-[#3d2817] transition-all`}
                  >
                    voir
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-16 flex justify-end">
          <span className={`${garamond} italic text-[13px] text-[#a08552]`}>p. 03</span>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 border-t-2 border-double border-[#3d2817]/15" />
    </section>
  );
}
