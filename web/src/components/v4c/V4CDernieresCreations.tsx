"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { PRODUCTS } from "@/lib/content/products";

const garamond = "font-[family-name:var(--font-eb-garamond)]";
const caveat = "font-[family-name:var(--font-caveat)]";

const SLUGS = ["aurore", "eugenie", "thelma"] as const;
const ANNOTATIONS = ["— ajoutée en mars", "— esquissée en avril", "— fondue en mai"] as const;
const PAGE_NUMS = ["p. 03", "p. 04", "p. 05"] as const;
const INTERVAL_MS = 7000;

const items = SLUGS.map((slug) => PRODUCTS.find((p) => p.slug === slug)).filter(
  Boolean
) as NonNullable<(typeof PRODUCTS)[number]>[];

export function V4CDernieresCreations() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const goTo = useCallback(
    (index: number) => {
      if (reducedMotion) {
        setCurrent(index);
        return;
      }
      setVisible(false);
      setTimeout(() => {
        setCurrent(index);
        setVisible(true);
      }, 400);
    },
    [reducedMotion]
  );

  const next = useCallback(() => goTo((current + 1) % items.length), [current, goTo]);
  const prev = useCallback(
    () => goTo((current - 1 + items.length) % items.length),
    [current, goTo]
  );

  const resetTimer = useCallback(
    (targetIndex?: number) => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (targetIndex !== undefined) goTo(targetIndex);
      if (!reducedMotion) {
        timerRef.current = setInterval(next, INTERVAL_MS);
      }
    },
    [goTo, next, reducedMotion]
  );

  useEffect(() => {
    if (reducedMotion || paused) return;
    timerRef.current = setInterval(next, INTERVAL_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [next, paused, reducedMotion]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") { resetTimer((current + 1) % items.length); }
    if (e.key === "ArrowLeft") { resetTimer((current - 1 + items.length) % items.length); }
  };

  const product = items[current];
  if (!product) return null;

  return (
    <section
      className="relative bg-[#2a1d10] py-0 overflow-hidden outline-none focus-visible:ring-2 focus-visible:ring-[#a08552]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      aria-label="Carousel — Dernières créations"
      aria-roledescription="carousel"
    >
      <div
        className="mx-auto max-w-[1440px] flex flex-col lg:flex-row min-h-[70vh] transition-opacity duration-[800ms] ease-in-out"
        style={{ opacity: visible ? 1 : 0 }}
        aria-live="polite"
        aria-atomic="true"
      >
        {/* Image macro gauche — 70% */}
        <div className="relative w-full lg:w-[70%] aspect-[4/3] lg:aspect-auto min-h-[400px]">
          <Image
            src={product.image}
            alt={product.imageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 70vw"
            className="object-cover opacity-90"
            priority={current === 0}
          />
          <div className="absolute inset-0 bg-[#2a1d10]/20" />
          <svg aria-hidden className="pointer-events-none absolute inset-0 w-full h-full" viewBox="0 0 700 500" fill="none">
            <ellipse cx="350" cy="250" rx="280" ry="200"
              stroke="#a08552" strokeWidth="0.8" strokeDasharray="5 12" strokeOpacity="0.25" />
          </svg>
        </div>

        {/* Bloc texte droite — 30% */}
        <div className="w-full lg:w-[30%] flex flex-col justify-center px-8 py-16 lg:px-12">
          <span className={`${caveat} text-[16px] text-[#a08552] mb-8 block italic`}>
            {ANNOTATIONS[current]}
          </span>

          <h2 className={`${garamond} italic text-[#f4ede0] leading-none mb-4 text-[clamp(40px,4vw,72px)]`}>
            {product.name}
          </h2>

          <p className={`${caveat} text-[19px] mb-8 leading-relaxed text-[#7ca0cc]`}>
            {product.tagline}
          </p>

          <p className="font-[family-name:var(--font-inter)] text-[13px] font-light text-[#f4ede0]/60 leading-relaxed mb-6 max-w-[220px]">
            {product.materials}
          </p>

          <p className={`${garamond} italic text-[22px] text-[#a08552] mb-10`}>
            {product.price}
          </p>

          <Link
            href={`/fr/collection/${product.slug}`}
            className={`${garamond} italic text-[18px] text-[#f4ede0] underline underline-offset-4 decoration-[#f4ede0]/30 hover:decoration-[#f4ede0]/80 transition-all`}
          >
            demander à voir
          </Link>

          {/* Flèches + dots */}
          <div className="mt-12 flex flex-col gap-3 items-end">
            <div className="flex gap-2" role="group" aria-label="Navigation carousel">
              <button
                onClick={() => { prev(); resetTimer(); }}
                aria-label="Création précédente"
                className={`${caveat} w-8 h-8 flex items-center justify-center text-[#1e3a5f] hover:opacity-70 transition-opacity`}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                  <polyline points="10,2 4,8 10,14" stroke="#1e3a5f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                onClick={() => { next(); resetTimer(); }}
                aria-label="Création suivante"
                className={`${caveat} w-8 h-8 flex items-center justify-center text-[#1e3a5f] hover:opacity-70 transition-opacity`}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                  <polyline points="6,2 12,8 6,14" stroke="#1e3a5f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
            <div className="flex gap-2" role="tablist" aria-label="Indicateurs">
              {items.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === current}
                  aria-label={`Création ${i + 1}`}
                  onClick={() => resetTimer(i)}
                  className="w-2 h-2 rounded-full transition-colors"
                  style={{ backgroundColor: i === current ? "#a08552" : "#cbb898" }}
                />
              ))}
            </div>
          </div>

          <div className="mt-8">
            <span className={`${garamond} italic text-[13px] text-[#a08552]`}>{PAGE_NUMS[current]}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
