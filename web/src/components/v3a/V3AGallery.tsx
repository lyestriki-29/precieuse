import Image from "next/image";
import Link from "next/link";
import { PRODUCTS } from "@/lib/content/products";

const ROMAN = ["I", "II", "III", "IV", "V"];

export function V3AGallery() {
  return (
    <section className="bg-[#f6f1ea] px-12 sm:px-20 lg:px-32 py-20 border-b border-[#d4cdc1]">
      <div className="mx-auto max-w-[1280px]">
        <p className="font-[family-name:var(--font-jetbrains)] text-[11px] uppercase tracking-[0.4em] text-[#4a4540] mb-4">
          <span className="text-[#8b1e2d]">II</span>
          &nbsp;———&nbsp;Nos Héroïnes
        </p>
        <h2 className="font-[family-name:var(--font-bodoni)] text-[48px] italic text-[#1a1614] mb-12 leading-tight">
          Cinq portraits,<br />
          <span className="text-[#8b1e2d]">cinq caractères</span>
        </h2>

        {/* Mosaïque éditoriale asymétrique */}
        <div className="grid grid-cols-12 grid-rows-[auto] gap-4">
          {/* Grande image : Joséphine */}
          <GalleryCard product={PRODUCTS[0]} roman={ROMAN[0]} colSpan="col-span-12 lg:col-span-7" aspectClass="aspect-[4/3]" />

          {/* Aurore */}
          <GalleryCard product={PRODUCTS[1]} roman={ROMAN[1]} colSpan="col-span-12 lg:col-span-5" aspectClass="aspect-[3/4]" />

          {/* Eugénie — petite */}
          <GalleryCard product={PRODUCTS[2]} roman={ROMAN[2]} colSpan="col-span-12 sm:col-span-6 lg:col-span-4" aspectClass="aspect-square" />

          {/* Thelma — large */}
          <GalleryCard product={PRODUCTS[3]} roman={ROMAN[3]} colSpan="col-span-12 sm:col-span-6 lg:col-span-5" aspectClass="aspect-[4/3]" />

          {/* Louise — verticale */}
          <GalleryCard product={PRODUCTS[4]} roman={ROMAN[4]} colSpan="col-span-12 lg:col-span-3" aspectClass="aspect-[3/4]" />
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/fr/collection"
            className="group inline-flex items-center gap-3 font-[family-name:var(--font-inter)] text-[11px] uppercase tracking-[0.3em] text-[#4a4540] border-b border-[#4a4540] pb-px hover:text-[#8b1e2d] hover:border-[#8b1e2d] transition-colors duration-300"
          >
            Voir toutes les pièces
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function GalleryCard({
  product,
  roman,
  colSpan,
  aspectClass,
}: {
  product: (typeof PRODUCTS)[number];
  roman: string;
  colSpan: string;
  aspectClass: string;
}) {
  return (
    <div className={colSpan}>
      <div className={`relative ${aspectClass} overflow-hidden group`}>
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-[#1a1614]/0 group-hover:bg-[#1a1614]/20 transition-colors duration-500" />
        {/* Caption */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#1a1614]/60 to-transparent">
          <p className="font-[family-name:var(--font-jetbrains)] text-[10px] uppercase tracking-[0.3em] text-white/60 mb-1">
            {roman}
          </p>
          <p className="font-[family-name:var(--font-bodoni)] text-[22px] italic text-white leading-tight">
            {product.name}
          </p>
          <p className="font-[family-name:var(--font-inter)] text-[11px] font-light text-white/70 mt-1">
            {product.price}
          </p>
        </div>
      </div>
    </div>
  );
}
