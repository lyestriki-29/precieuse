import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/luxe";
import { PRODUCTS } from "@/lib/content/products";

const FEATURED_SLUG = "josephine";

export function HomeProductsTeaser() {
  const featured = PRODUCTS.find((p) => p.slug === FEATURED_SLUG)!;
  const secondary = PRODUCTS.filter((p) => p.slug !== FEATURED_SLUG).slice(0, 2);

  return (
    <section className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 sm:py-28 lg:px-16">
      <Reveal>
        <div className="mb-12 flex items-baseline justify-between gap-4">
          <h2 className="font-display-lg italic">La Collection</h2>
          <Link
            href="/fr/collection"
            className="font-technical-label uppercase tracking-[0.15em] border-b border-foreground hover:text-raspberry hover:border-raspberry transition-colors"
          >
            Voir tout
          </Link>
        </div>
      </Reveal>

      <div className="grid grid-cols-12 gap-6 lg:gap-8">
        <Link
          href={`/fr/collection/${featured.slug}`}
          className="group col-span-12 overflow-hidden bg-surface-container-low md:col-span-7"
        >
          <div className="relative aspect-[4/3] overflow-hidden bg-surface-dim">
            <Image
              src={featured.image}
              alt={featured.imageAlt}
              fill
              sizes="(min-width: 768px) 58vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col gap-2 p-6">
            <div className="flex items-center justify-between gap-4">
              <h3 className="font-display-lg font-headline-md">{featured.name}</h3>
              <span className="font-technical-label bg-surface-dim/40 px-3 py-1">
                ID: PR-001-26
              </span>
            </div>
            <div className="mt-2 flex flex-wrap gap-x-8 gap-y-1">
              <span className="font-technical-label opacity-60">
                Or 19kt jaune
              </span>
              <span className="font-technical-label opacity-60">
                Diamants GVS
              </span>
              <span className="font-technical-label opacity-60">
                {featured.price}
              </span>
            </div>
          </div>
        </Link>

        <div className="col-span-12 grid grid-cols-1 gap-6 md:col-span-5 lg:gap-8">
          {secondary.map((product, i) => (
            <Link
              key={product.slug}
              href={`/fr/collection/${product.slug}`}
              className="group flex gap-5 bg-surface-container-low p-5"
            >
              <div className="relative aspect-square w-1/3 overflow-hidden bg-surface-dim">
                <Image
                  src={product.image}
                  alt={product.imageAlt}
                  fill
                  sizes="200px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between py-1">
                <div>
                  <h4 className="font-display-lg text-lg italic">
                    {product.name}
                  </h4>
                  <p className="font-technical-label mt-1 opacity-60">
                    {product.tagline}
                  </p>
                </div>
                <span className="font-technical-label tracking-[0.15em] text-tertiary group-hover:text-raspberry transition-colors">
                  {i === 0 ? "DISPONIBLE SUR DEMANDE" : "VOIR LE DÉTAIL"}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
