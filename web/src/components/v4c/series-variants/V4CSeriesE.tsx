import Image from "next/image";
import Link from "next/link";
import { PRODUCTS } from "@/lib/content/products";

const garamond = "font-[family-name:var(--font-eb-garamond)]";
const caveat = "font-[family-name:var(--font-caveat)]";

const ROMAN = ["I", "II", "III", "IV", "V"] as const;

export function V4CSeriesE() {
  return (
    <section className="relative bg-[var(--site-bg)] py-14 px-8 lg:px-16">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className={`${garamond} italic text-[40px] text-[var(--site-text)] leading-none mb-1`}>
              La Collection
            </h2>
            <p className={`${caveat} text-[17px] text-[var(--site-caveat)]`}>
              — cinq séries, une par une
            </p>
          </div>
          <span className={`${garamond} italic text-[13px] text-[var(--site-accent)]`}>p. 04</span>
        </div>

        {/* Liste éditoriale */}
        <ol className="divide-y divide-[var(--site-text)]/12">
          {PRODUCTS.map((product, i) => (
            <li key={product.slug}>
              <Link
                href={`/fr/collection/${product.slug}`}
                className="group flex items-center gap-6 py-5 hover:bg-[var(--site-surface)]/50 transition-colors duration-200 -mx-4 px-4"
              >
                {/* Numéro romain */}
                <span
                  className={`${garamond} text-[32px] text-[var(--site-accent)] leading-none w-10 flex-shrink-0 opacity-70`}
                >
                  {ROMAN[i]}
                </span>

                {/* Thumb */}
                <div className="relative w-[80px] h-[80px] flex-shrink-0 overflow-hidden bg-[var(--site-surface)]">
                  <Image
                    src={product.image}
                    alt={product.imageAlt}
                    fill
                    sizes="80px"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Nom + tagline */}
                <div className="flex-1 min-w-0">
                  <h3
                    className={`${garamond} italic text-[28px] md:text-[32px] text-[var(--site-text)] leading-none mb-1`}
                  >
                    {product.name}
                  </h3>
                  <p className={`${caveat} text-[15px] text-[var(--site-caveat)] truncate`}>
                    {product.tagline}
                  </p>
                </div>

                {/* Prix */}
                <span
                  className={`${garamond} italic text-[14px] text-[var(--site-accent)] flex-shrink-0 hidden sm:block`}
                >
                  {product.price}
                </span>

                {/* Flèche */}
                <span
                  className={`${garamond} italic text-[18px] text-[var(--site-text)]/30 group-hover:text-[var(--site-text)]/70 transition-colors flex-shrink-0`}
                >
                  →
                </span>
              </Link>
            </li>
          ))}
        </ol>

        <div className="mt-8 flex justify-center">
          <Link
            href="/fr/collection"
            className={`${caveat} text-[16px] text-[var(--site-caveat)] hover:text-[var(--site-text)] transition-colors`}
          >
            — voir toute la collection
          </Link>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 border-t-2 border-double border-[var(--site-text)]/15" />
    </section>
  );
}
