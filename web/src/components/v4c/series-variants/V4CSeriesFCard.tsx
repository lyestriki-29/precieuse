"use client";

import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/content/products";

const garamond = "font-[family-name:var(--font-eb-garamond)]";
const caveat = "font-[family-name:var(--font-caveat)]";

const ROMAN = ["I", "II", "III", "IV", "V"] as const;

type CardRole = "focus" | "peek-left" | "peek-right" | "hidden";

interface V4CSeriesFCardProps {
  product: Product;
  index: number;
  role: CardRole;
  reducedMotion: boolean;
  onClickPeek?: () => void;
}

function getCardClasses(role: CardRole): string {
  const base =
    "absolute top-0 flex-shrink-0 overflow-hidden " +
    "transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]";

  if (role === "focus") {
    return (
      base +
      " left-1/2 -translate-x-1/2 z-20 opacity-100 scale-100 w-[60%] max-w-[720px] " +
      "shadow-[0_30px_80px_-20px_rgba(61,40,23,0.35)] cursor-default"
    );
  }
  if (role === "peek-left") {
    return (
      base +
      " left-[2%] z-10 opacity-55 scale-[0.85] w-[35%] max-w-[420px] " +
      "blur-[1px] cursor-pointer hover:opacity-75 hover:scale-[0.88] hover:blur-0 " +
      "hidden lg:block"
    );
  }
  if (role === "peek-right") {
    return (
      base +
      " right-[2%] z-10 opacity-55 scale-[0.85] w-[35%] max-w-[420px] " +
      "blur-[1px] cursor-pointer hover:opacity-75 hover:scale-[0.88] hover:blur-0 " +
      "hidden lg:block"
    );
  }
  // hidden: préchargé hors-écran
  return base + " left-1/2 -translate-x-1/2 z-0 opacity-0 pointer-events-none w-[60%] max-w-[720px]";
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
  const isHidden = role === "hidden";

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
          : `${index + 1} sur 5 : ${product.name}`
      }
      tabIndex={isPeek ? 0 : undefined}
      onClick={isPeek ? onClickPeek : undefined}
      onKeyDown={handleKeyDown}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] w-full">
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          sizes={
            isFocus || isHidden
              ? "(min-width: 1024px) 60vw, 80vw"
              : "(min-width: 1024px) 35vw, 0vw"
          }
          className="object-cover"
          priority={isFocus}
        />

        {/* Gradient overlay en bas (focus uniquement) */}
        {isFocus && (
          <div className="absolute inset-0 bg-gradient-to-t from-[#f4ede0] via-[#f4ede0]/60 to-transparent" />
        )}

        {/* Numéro romain top-left */}
        {isFocus && (
          <span
            className={`${garamond} absolute top-5 left-7 italic text-[24px] text-[#a08552]/70 leading-none select-none`}
          >
            {ROMAN[index]}
          </span>
        )}

        {/* Bloc texte focus */}
        {isFocus && (
          <div className="absolute bottom-0 left-0 right-0 p-8" aria-live="polite" aria-atomic="true">
            <h3
              className={`${garamond} italic text-[clamp(40px,5vw,72px)] text-[#3d2817] leading-none mb-2`}
            >
              {product.name}
            </h3>
            <p className={`${caveat} text-[22px] text-[#1e3a5f] mb-3`}>
              {product.tagline}
            </p>
            <div className="flex items-baseline gap-4">
              <span className={`${garamond} italic text-[18px] text-[#a08552]`}>
                {product.price}
              </span>
              <Link
                href={`/fr/collection/${product.slug}`}
                className={`${garamond} italic text-[13px] text-[#3d2817]/60 underline underline-offset-2 hover:text-[#3d2817] transition-colors`}
              >
                découvrir →
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
