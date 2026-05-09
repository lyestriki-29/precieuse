"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { PRODUCTS, type Product } from "@/lib/content/products";

const garamond = "font-[family-name:var(--font-eb-garamond)]";
const caveat = "font-[family-name:var(--font-caveat)]";

type Category = "Toutes" | "Solitaires" | "Entourage" | "Alliances" | "Statement";

const CATEGORIES: Category[] = ["Toutes", "Solitaires", "Entourage", "Alliances", "Statement"];

const PRODUCT_CATEGORIES: Record<string, Category> = {
  aurore: "Solitaires",
  josephine: "Entourage",
  eugenie: "Entourage",
  louise: "Alliances",
  thelma: "Statement",
};

const CATEGORY_COUNTS: Record<Category, number> = {
  Toutes: 5,
  Solitaires: 1,
  Entourage: 2,
  Alliances: 1,
  Statement: 1,
};

function filterProducts(cat: Category): Product[] {
  if (cat === "Toutes") return PRODUCTS;
  return PRODUCTS.filter((p) => PRODUCT_CATEGORIES[p.slug] === cat);
}

export function V4CSeriesD() {
  const [active, setActive] = useState<Category>("Toutes");
  const displayed = filterProducts(active);

  return (
    <section className="relative bg-[var(--site-bg)] py-14 px-8 lg:px-16">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-8 flex items-end justify-between">
          <h2 className={`${garamond} italic text-[40px] text-[var(--site-text)] leading-none`}>
            La Collection
          </h2>
          <span className={`${garamond} italic text-[13px] text-[var(--site-accent)]`}>p. 04</span>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-1 mb-10 border-b border-[var(--site-text)]/15">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`${garamond} italic text-[16px] px-4 py-2 -mb-px transition-colors duration-200 ${
                active === cat
                  ? "text-[var(--site-text)] border-b-2 border-[var(--site-text)]"
                  : "text-[var(--site-text)]/40 hover:text-[var(--site-text)]/70"
              }`}
            >
              {cat}{" "}
              <span className={`${caveat} text-[13px] not-italic`}>
                ({CATEGORY_COUNTS[cat]})
              </span>
            </button>
          ))}
        </div>

        {/* Grid avec crossfade */}
        <div
          key={active}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 animate-[fadeIn_300ms_ease]"
          style={{ animation: "fadeIn 300ms ease" }}
        >
          {displayed.map((product) => (
            <Link
              key={product.slug}
              href={`/fr/collection/${product.slug}`}
              className="group block bg-[var(--site-surface)] overflow-hidden"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.imageAlt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className={`${caveat} absolute top-2 right-2 text-[12px] text-[var(--site-bg)]/70 bg-[var(--site-text)]/30 px-2 py-0.5`}>
                  {PRODUCT_CATEGORIES[product.slug]}
                </span>
              </div>
              <div className="p-4">
                <h3 className={`${garamond} italic text-[22px] text-[var(--site-text)] leading-none mb-1`}>
                  {product.name}
                </h3>
                <p className={`${caveat} text-[14px] text-[var(--site-caveat)] mb-2`}>
                  {product.tagline}
                </p>
                <p className={`${garamond} italic text-[13px] text-[var(--site-accent)]`}>
                  {product.price}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <style>{`
          @keyframes fadeIn { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
        `}</style>
      </div>

      <div className="absolute bottom-0 left-0 right-0 border-t-2 border-double border-[var(--site-text)]/15" />
    </section>
  );
}
