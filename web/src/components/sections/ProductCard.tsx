import Link from "next/link";
import type { Product } from "@/lib/content/products";

type Props = {
  product: Product;
};

export function ProductCard({ product }: Props) {
  return (
    <Link
      href={`/fr/collection/${product.slug}`}
      className="group block"
    >
      <div className="aspect-[3/4] w-full overflow-hidden rounded-md border border-black/5 bg-white">
        <div className="bg-gold-whisper/20 flex h-full w-full items-center justify-center">
          <span className="font-heading text-foreground/30 text-2xl">
            {product.name}
          </span>
        </div>
      </div>
      <div className="mt-5 flex items-baseline justify-between gap-4">
        <h3 className="font-heading group-hover:text-raspberry text-2xl transition-colors">
          {product.name}
        </h3>
        <span className="text-foreground/50 text-xs tracking-wider whitespace-nowrap uppercase">
          {product.price}
        </span>
      </div>
      <p className="text-foreground/60 mt-2 text-sm leading-relaxed font-light">
        {product.tagline}
      </p>
    </Link>
  );
}
