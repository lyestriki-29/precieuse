import Image from "next/image";
import Link from "next/link";
import { PRODUCTS } from "@/lib/content/products";

const garamond = "font-[family-name:var(--font-eb-garamond)]";
const caveat = "font-[family-name:var(--font-caveat)]";

export function V4CSeriesC() {
  const [hero, ...rest] = PRODUCTS;

  return (
    <section className="relative bg-[var(--site-bg)] py-14 px-8 lg:px-16">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-10 flex items-end justify-between">
          <h2 className={`${garamond} italic text-[40px] text-[var(--site-text)] leading-none`}>
            La Collection
          </h2>
          <span className={`${garamond} italic text-[13px] text-[var(--site-accent)]`}>p. 04</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8 items-start">
          {/* Hero gauche — Joséphine */}
          <Link
            href={`/fr/collection/${hero.slug}`}
            className="group relative block bg-[var(--site-surface)] overflow-hidden"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <Image
                src={hero.image}
                alt={hero.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-103"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--site-text)]/50 via-[var(--site-text)]/10 to-transparent" />

              <svg aria-hidden className="pointer-events-none absolute inset-0 w-full h-full"
                viewBox="0 0 600 750" fill="none">
                <rect x="10" y="10" width="580" height="730" rx="1"
                  stroke="var(--site-bg)" strokeWidth="0.8" strokeDasharray="4 8" strokeOpacity="0.35" />
              </svg>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-8">
              <p className={`${caveat} text-[16px] text-[var(--site-bg)]/70 mb-2`}>
                — pièce signature
              </p>
              <h3 className={`${garamond} italic text-[64px] text-[var(--site-bg)] leading-none mb-2`}>
                {hero.name}
              </h3>
              <p className={`${caveat} text-[18px] text-[var(--site-bg)]/80 mb-4`}>
                {hero.tagline}
              </p>
              <div className="flex items-center justify-between">
                <span className={`${garamond} italic text-[15px] text-[var(--site-accent)]`}>
                  {hero.price}
                </span>
                <span className={`${garamond} italic text-[14px] text-[var(--site-bg)]/60`}>
                  découvrir →
                </span>
              </div>
            </div>
          </Link>

          {/* Grid 2×2 droite */}
          <div className="grid grid-cols-2 gap-4">
            {rest.map((product) => (
              <Link
                key={product.slug}
                href={`/fr/collection/${product.slug}`}
                className="group relative block bg-[var(--site-surface)] overflow-hidden"
              >
                <div className="relative aspect-square w-full overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 50vw, 20vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-3">
                  <h3 className={`${garamond} italic text-[20px] text-[var(--site-text)] leading-none mb-0.5`}>
                    {product.name}
                  </h3>
                  <p className={`${caveat} text-[13px] text-[var(--site-caveat)]`}>
                    {product.tagline}
                  </p>
                  <p className={`${garamond} italic text-[12px] text-[var(--site-accent)] mt-1`}>
                    {product.price}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 border-t-2 border-double border-[var(--site-text)]/15" />
    </section>
  );
}
