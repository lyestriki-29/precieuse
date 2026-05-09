import Image from "next/image";
import Link from "next/link";
import { PRODUCTS } from "@/lib/content/products";

const playfair = "font-[family-name:var(--font-playfair)]";
const inter = "font-[family-name:var(--font-inter)]";

export function V3Series() {
  return (
    <section
      id="collections"
      className="mx-auto mb-24 max-w-[1440px] px-6 sm:mb-40 sm:px-10 lg:px-20"
    >
      <div className="mb-16 flex items-end justify-between sm:mb-20">
        <h2 className={`${playfair} text-[40px] sm:text-[56px] lg:text-[72px] leading-[1.2] italic`}>
          Nos Séries
        </h2>
        <div className="mb-6 hidden h-px w-32 bg-[#cbc4d2] md:block" />
      </div>

      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-5">
        {PRODUCTS.map((p, i) => (
          <Link
            key={p.slug}
            href={`/fr/collection/${p.slug}`}
            className={`group block overflow-hidden ${i % 2 === 1 ? "md:mt-12" : ""}`}
          >
            <div className="mb-6 aspect-[3/4] overflow-hidden bg-[#f8f2fa]">
              <Image
                src={p.image}
                alt={p.imageAlt}
                width={900}
                height={1200}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <p className={`${playfair} text-[32px] sm:text-[40px] italic transition-colors duration-500 group-hover:text-[#BD0762]`}>
              {p.name}
            </p>
            <p className={`${inter} mt-2 text-[12px] font-medium uppercase tracking-[0.15em] text-[#494551]`}>
              {p.price}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
