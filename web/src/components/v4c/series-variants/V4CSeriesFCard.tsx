"use client";

import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/content/products";

const garamond = "font-[family-name:var(--font-eb-garamond)]";
const caveat = "font-[family-name:var(--font-caveat)]";
const inter = "font-[family-name:var(--font-inter)]";

const ROMAN = ["I", "II", "III", "IV", "V"] as const;

type CardRole = "focus" | "peek-left" | "peek-right" | "hidden";

interface V4CSeriesFCardProps {
  product: Product;
  index: number;
  role: CardRole;
  reducedMotion: boolean;
  onClickPeek?: () => void;
}

const PRIORITY_INDEX = 0;

const CARD_TRANSITION =
  "transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]";

function getCardClasses(role: CardRole): string {
  const base = `absolute top-0 bottom-0 my-auto h-fit overflow-hidden bg-[#ede4d5] ${CARD_TRANSITION}`;

  if (role === "focus") {
    return `${base} left-1/2 -translate-x-1/2 z-20 opacity-100 scale-100 w-[88%] max-w-[1080px] shadow-[0_30px_80px_-20px_rgba(61,40,23,0.35)] cursor-default`;
  }
  if (role === "peek-left") {
    return `${base} left-[1%] z-10 opacity-50 scale-[0.78] w-[24%] max-w-[300px] aspect-[3/4] blur-[1.5px] cursor-pointer hover:opacity-75 hover:scale-[0.82] hover:blur-0 hidden lg:block`;
  }
  if (role === "peek-right") {
    return `${base} right-[1%] z-10 opacity-50 scale-[0.78] w-[24%] max-w-[300px] aspect-[3/4] blur-[1.5px] cursor-pointer hover:opacity-75 hover:scale-[0.82] hover:blur-0 hidden lg:block`;
  }
  return `${base} left-1/2 -translate-x-1/2 z-0 opacity-0 pointer-events-none w-[88%] max-w-[1080px]`;
}

function FocusCardContent({ product, index }: { product: Product; index: number }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] aspect-[5/3] md:aspect-[16/9]">
      {/* Image side */}
      <div className="relative bg-[#ede4d5] overflow-hidden">
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          sizes="(min-width: 1024px) 50vw, 80vw"
          className="object-cover"
          priority={index === PRIORITY_INDEX}
        />
      </div>

      {/* Info panel */}
      <div className="relative bg-[#f4ede0] flex flex-col justify-center px-8 lg:px-12 py-10 lg:py-14" aria-live="polite" aria-atomic="true">
        <span className={`${garamond} italic text-[20px] text-[#a08552] leading-none mb-6 select-none`}>
          {ROMAN[index]}
        </span>

        <h3 className={`${garamond} italic text-[clamp(40px,4.5vw,64px)] text-[#3d2817] leading-[1.05] mb-3`}>
          {product.name}
        </h3>

        <p className={`${caveat} text-[22px] lg:text-[24px] text-[#1e3a5f] mb-6 leading-snug`}>
          {product.tagline}
        </p>

        <p className={`${inter} font-light text-[13px] text-[#6b4423] leading-relaxed mb-8 line-clamp-3`}>
          {product.materials}
        </p>

        <div className="flex flex-col gap-4 pt-6 border-t border-[#3d2817]/15">
          <span className={`${garamond} italic text-[20px] text-[#a08552]`}>
            {product.price}
          </span>
          <Link
            href={`/fr/collection/${product.slug}`}
            className={`${garamond} italic text-[14px] text-[#3d2817] underline underline-offset-4 decoration-[#a08552]/40 hover:decoration-[#3d2817] transition-colors w-fit`}
          >
            découvrir cette pièce →
          </Link>
        </div>
      </div>
    </div>
  );
}

function PeekCardContent({ product }: { product: Product }) {
  return (
    <div className="relative w-full h-full bg-[#ede4d5]">
      <Image
        src={product.image}
        alt={product.imageAlt}
        fill
        sizes="(min-width: 1024px) 24vw, 0vw"
        className="object-cover"
      />
    </div>
  );
}

export function V4CSeriesFCard({
  product,
  index,
  role,
  reducedMotion,
  onClickPeek,
}: V4CSeriesFCardProps) {
  const isFocus = role === "focus";
  const isPeek = role === "peek-left" || role === "peek-right";
  const transitionClass = reducedMotion ? "transition-none" : "";

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (isPeek && onClickPeek && (e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      onClickPeek();
    }
  };

  return (
    <div
      className={`${getCardClasses(role)} ${transitionClass}`}
      role={isPeek ? "button" : "group"}
      aria-roledescription={isPeek ? undefined : "slide"}
      aria-label={
        isPeek
          ? `Mettre en focus ${product.name}`
          : `${index + 1} sur 5 : ${product.name}`
      }
      tabIndex={isPeek ? 0 : undefined}
      onClick={isPeek ? onClickPeek : undefined}
      onKeyDown={handleKeyDown}
    >
      {isFocus ? (
        <FocusCardContent product={product} index={index} />
      ) : (
        <PeekCardContent product={product} />
      )}
    </div>
  );
}
