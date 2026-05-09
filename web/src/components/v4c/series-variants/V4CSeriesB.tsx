"use client";

import Image from "next/image";
import Link from "next/link";
import { PRODUCTS } from "@/lib/content/products";

const garamond = "font-[family-name:var(--font-eb-garamond)]";
const caveat = "font-[family-name:var(--font-caveat)]";

const ROMAN = ["I", "II", "III", "IV", "V"] as const;

export function V4CSeriesB() {
  return (
    <section className="relative bg-[#f4ede0] py-14 px-8 lg:px-16">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className={`${garamond} italic text-[40px] text-[#3d2817] leading-none mb-1`}>
              La Collection
            </h2>
            <p className={`${caveat} text-[18px] text-[#1e3a5f]`}>
              — faire défiler pour explorer
            </p>
          </div>
          <span className={`${garamond} italic text-[13px] text-[#a08552] hidden md:block`}>
            p. 04
          </span>
        </div>

        {/* Carousel horizontal snap-scroll */}
        <div
          className="flex gap-6 overflow-x-auto pb-4"
          style={{
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
          }}
        >
          {PRODUCTS.map((product, i) => (
            <article
              key={product.slug}
              className="flex-shrink-0 w-[72vw] max-w-[340px] md:w-[38vw] lg:w-[28vw] bg-[#ede4d5]"
              style={{ scrollSnapAlign: "start" }}
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.imageAlt}
                  fill
                  sizes="(max-width: 768px) 72vw, 340px"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
                <span className={`${garamond} absolute top-3 left-3 text-[40px] text-[#a08552]/50 leading-none`}>
                  {ROMAN[i]}
                </span>
              </div>

              <div className="p-5">
                <h3 className={`${garamond} italic text-[28px] text-[#3d2817] leading-none mb-1`}>
                  {product.name}
                </h3>
                <p className={`${caveat} text-[15px] text-[#1e3a5f] mb-3`}>
                  {product.tagline}
                </p>
                <div className="flex items-center justify-between">
                  <span className={`${garamond} italic text-[13px] text-[#a08552]`}>
                    {product.price}
                  </span>
                  <Link
                    href={`/fr/collection/${product.slug}`}
                    className={`${garamond} italic text-[13px] text-[#3d2817]/60 hover:text-[#3d2817] transition-colors`}
                  >
                    voir la fiche →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Progress indicators */}
        <div className="mt-4 flex items-center justify-center gap-2" aria-hidden>
          {PRODUCTS.map((p, i) => (
            <span
              key={p.slug}
              className={`block rounded-full transition-all duration-300 ${
                i === 0
                  ? "w-6 h-1.5 bg-[#3d2817]"
                  : "w-1.5 h-1.5 bg-[#3d2817]/30"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 border-t-2 border-double border-[#3d2817]/15" />
    </section>
  );
}
