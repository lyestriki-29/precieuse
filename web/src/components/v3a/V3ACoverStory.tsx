import Image from "next/image";
import Link from "next/link";
import { PRODUCTS } from "@/lib/content/products";

export function V3ACoverStory() {
  const josephine = PRODUCTS.find((p) => p.slug === "josephine")!;

  return (
    <section className="bg-[#f6f1ea] px-12 sm:px-20 lg:px-32 py-20 border-b border-[#d4cdc1]">
      <div className="mx-auto max-w-[1280px]">
        {/* Section header */}
        <p className="font-[family-name:var(--font-jetbrains)] text-[11px] uppercase tracking-[0.4em] text-[#4a4540] mb-8">
          <span className="text-[#8b1e2d]">I</span>
          &nbsp;———&nbsp;La Pièce du Mois
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 items-center">
          {/* Image */}
          <div className="relative aspect-[16/9] overflow-hidden group">
            <Image
              src={josephine.image}
              alt={josephine.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              priority
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
            {/* Légende photo */}
            <div className="absolute bottom-4 left-4">
              <span className="font-[family-name:var(--font-jetbrains)] text-[10px] uppercase tracking-[0.3em] text-white/80 bg-[#1a1614]/40 px-3 py-1 backdrop-blur-sm">
                {josephine.name} · Or 19kt · Diamants GVS
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center gap-6">
            <h2 className="font-[family-name:var(--font-bodoni)] text-[64px] italic text-[#1a1614] leading-tight">
              {josephine.name}
            </h2>
            <div className="w-12 h-px bg-[#8b1e2d]" />
            <p className="font-[family-name:var(--font-inter)] text-[17px] font-light leading-[1.8] text-[#4a4540] italic">
              &ldquo;{josephine.tagline}&rdquo;
            </p>
            <p className="font-[family-name:var(--font-inter)] text-[15px] font-light leading-[1.75] text-[#4a4540]">
              {josephine.description}
            </p>
            <p className="font-[family-name:var(--font-jetbrains)] text-[12px] uppercase tracking-[0.3em] text-[#4a4540]">
              {josephine.materials}
            </p>
            <p className="font-[family-name:var(--font-bodoni)] text-[32px] text-[#1a1614]">
              {josephine.price}
            </p>
            <Link
              href="/fr/contact"
              className="group inline-flex items-center gap-3 border border-[#1a1614] px-8 py-4 font-[family-name:var(--font-inter)] text-[11px] uppercase tracking-[0.3em] text-[#1a1614] transition-all duration-300 hover:bg-[#1a1614] hover:text-[#f6f1ea] w-fit"
            >
              Demander cette pièce
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
