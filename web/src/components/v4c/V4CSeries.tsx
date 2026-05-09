import Image from "next/image";
import { PRODUCTS } from "@/lib/content/products";

const garamond = "font-[family-name:var(--font-eb-garamond)]";
const caveat = "font-[family-name:var(--font-caveat)]";

const ROMAN = ["I", "II", "III", "IV", "V"] as const;
const DATES = [
  "dessinée le 14 mars",
  "fondue le 3 février",
  "esquissée le 22 janvier",
  "polie le 8 avril",
  "gravée le 17 novembre",
] as const;

const ROTATIONS = [
  "rotate-1",
  "-rotate-1",
  "rotate-[0.5deg]",
  "-rotate-[1.5deg]",
  "rotate-[1.5deg]",
] as const;

function SketchOverlay() {
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute inset-0 w-full h-full"
      viewBox="0 0 400 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="8" y="10" width="384" height="480" rx="1"
        stroke="var(--site-text)" strokeWidth="0.8" strokeDasharray="3 7" strokeOpacity="0.25" />
      <path d="M8 90 Q 30 70 60 10" stroke="var(--site-text)" strokeWidth="1"
        strokeLinecap="round" strokeOpacity="0.2" />
      <path d="M340 490 Q 380 480 392 450" stroke="var(--site-text)" strokeWidth="1"
        strokeLinecap="round" strokeOpacity="0.2" />
    </svg>
  );
}

export function V4CSeries() {
  return (
    <section className="relative bg-[var(--site-bg)] py-24 px-8 lg:px-16">
      <div className="mx-auto max-w-[1440px]">
        <h2 className={`${garamond} italic text-[42px] text-[var(--site-text)] mb-4 text-center`}>
          La Collection
        </h2>
        <p className={`${caveat} text-[20px] text-[var(--site-caveat)] text-center mb-20`}>
          cinq pièces, cinq caractères
        </p>

        <div className="absolute left-4 top-32 hidden xl:block rotate-[-3deg]">
          <span className={`${caveat} text-[16px] text-[var(--site-caveat)] opacity-70`}>
            toutes portables au quotidien
          </span>
        </div>

        <div className="space-y-20">
          {PRODUCTS.map((product, i) => {
            const isEven = i % 2 === 0;
            return (
              <article
                key={product.slug}
                className={`flex flex-col gap-10 md:flex-row md:items-center md:gap-16 ${isEven ? "" : "md:flex-row-reverse"}`}
              >
                <div className={`relative flex-shrink-0 w-full max-w-[400px] mx-auto md:mx-0 transition-transform duration-500 hover:rotate-0 ${ROTATIONS[i]}`}>
                  <div className="relative w-full aspect-[4/5]">
                    <Image
                      src={product.image}
                      alt={product.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      className="object-cover"
                    />
                    <SketchOverlay />
                  </div>
                </div>

                <div className="flex-1 max-w-md">
                  <span className={`${garamond} text-[80px] text-[var(--site-accent)] leading-none opacity-40 block`}>
                    {ROMAN[i]}
                  </span>

                  <h3 className={`${garamond} italic text-[52px] text-[var(--site-text)] leading-none mb-3 -mt-4`}>
                    {product.name}
                  </h3>

                  <p className={`${caveat} text-[20px] text-[var(--site-caveat)] mb-6`}>
                    {product.tagline}
                  </p>

                  <p className="font-[family-name:var(--font-inter)] text-[14px] font-light text-[var(--site-text)]/80 leading-relaxed mb-8 max-w-xs">
                    {product.description}
                  </p>

                  <div className="flex items-end justify-between">
                    <span className="font-[family-name:var(--font-inter)] text-[13px] font-light text-[var(--site-text)]/60 tracking-wide">
                      {product.price}
                    </span>
                    <span className={`${caveat} text-[15px] text-[var(--site-text)]/80 italic`}>
                      {DATES[i]}
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-20 flex justify-end">
          <span className={`${garamond} italic text-[13px] text-[var(--site-accent)]`}>p. 04</span>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 border-t-2 border-double border-[var(--site-text)]/15" />
    </section>
  );
}
