import Image from "next/image";
import Link from "next/link";
import { PRODUCTS } from "@/lib/content/products";

const garamond = "font-[family-name:var(--font-eb-garamond)]";
const caveat = "font-[family-name:var(--font-caveat)]";

const HERO_SLUGS = ["josephine", "aurore", "thelma"];

export function V4CSeriesA() {
  const heroProducts = PRODUCTS.filter((p) => HERO_SLUGS.includes(p.slug));

  return (
    <section className="relative bg-[var(--site-bg)] py-14 px-8 lg:px-16">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className={`${garamond} italic text-[40px] text-[var(--site-text)] leading-none mb-2`}>
              La Collection
            </h2>
            <p className={`${caveat} text-[18px] text-[var(--site-caveat)]`}>
              5 séries — 5 manières d&apos;incarner la lumière
            </p>
          </div>
          <span className={`${garamond} italic text-[13px] text-[var(--site-accent)] hidden md:block`}>
            p. 04
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {heroProducts.map((product) => (
            <Link
              key={product.slug}
              href={`/fr/collection/${product.slug}`}
              className="group relative block overflow-hidden bg-[var(--site-surface)] hover:bg-[var(--site-surface)]/60 transition-colors duration-300"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--site-text)]/40 via-transparent to-transparent" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className={`${garamond} italic text-[28px] text-[var(--site-bg)] leading-none mb-1`}>
                  {product.name}
                </h3>
                <p className={`${caveat} text-[15px] text-[var(--site-bg)]/80`}>
                  {product.tagline}
                </p>
                <p className={`${garamond} italic text-[13px] text-[var(--site-accent)] mt-2`}>
                  {product.price}
                </p>
              </div>

              <svg
                aria-hidden
                className="pointer-events-none absolute inset-0 w-full h-full"
                viewBox="0 0 300 400"
                fill="none"
              >
                <rect x="6" y="6" width="288" height="388" rx="1"
                  stroke="var(--site-bg)" strokeWidth="0.6" strokeDasharray="3 6" strokeOpacity="0.3" />
              </svg>
            </Link>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center gap-3">
          <p className={`${caveat} text-[16px] text-[var(--site-caveat)]`}>
            et encore Eugénie, Louise…
          </p>
          <Link
            href="/fr/collection"
            className={`${garamond} italic text-[18px] text-[var(--site-text)] border border-[var(--site-text)]/40 px-8 py-3 hover:bg-[var(--site-text)] hover:text-[var(--site-bg)] transition-colors duration-300`}
          >
            Voir toute la collection →
          </Link>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 border-t-2 border-double border-[var(--site-text)]/15" />
    </section>
  );
}
