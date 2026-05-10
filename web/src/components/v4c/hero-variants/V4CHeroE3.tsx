"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

const garamond = "font-[family-name:var(--font-eb-garamond)]";
const caveat = "font-[family-name:var(--font-caveat)]";
const inter = "font-[family-name:var(--font-inter)]";

const LETTERS = [
  { ch: "P", delay: 80, offsetX: -180, offsetY: -120, depth: 0.8 },
  { ch: "r", delay: 220, offsetX: 140, offsetY: -160, depth: 1.4 },
  { ch: "é", delay: 360, offsetX: -90, offsetY: 200, depth: 0.5 },
  { ch: "c", delay: 500, offsetX: 220, offsetY: 60, depth: 1.1 },
  { ch: "i", delay: 640, offsetX: -240, offsetY: -40, depth: 1.6 },
  { ch: "e", delay: 780, offsetX: 160, offsetY: 180, depth: 0.7 },
  { ch: "u", delay: 920, offsetX: -120, offsetY: -180, depth: 1.3 },
  { ch: "s", delay: 1060, offsetX: 80, offsetY: 220, depth: 0.9 },
  { ch: "e", delay: 1200, offsetX: 260, offsetY: -80, depth: 1.5 },
];

const STARS = Array.from({ length: 80 }, (_, i) => {
  const seed = (i * 9301 + 49297) % 233280;
  return {
    x: seed % 1600,
    y: (seed * 7) % 900,
    r: ((seed % 13) / 13) * 1.4 + 0.3,
    o: ((seed % 7) / 7) * 0.5 + 0.25,
    dur: 2 + (seed % 30) / 10,
    delay: (seed % 50) / 10,
  };
});

export function V4CHeroE3() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    let tx = 0;
    let ty = 0;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      tx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      ty = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      if (!raf) {
        raf = requestAnimationFrame(() => {
          el.style.setProperty("--mx", String(tx));
          el.style.setProperty("--my", String(ty));
          raf = 0;
        });
      }
    };
    el.addEventListener("mousemove", onMove);
    return () => {
      el.removeEventListener("mousemove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      ref={ref}
      className="relative min-h-screen pt-16 overflow-hidden flex flex-col"
      style={{
        background:
          "radial-gradient(ellipse at 50% 30%, #1f1538 0%, #120a24 55%, #06030f 100%)",
      }}
    >
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
          {STARS.map((s, i) => (
            <circle
              key={i}
              cx={s.x}
              cy={s.y}
              r={s.r}
              fill="#f3eedb"
              opacity={s.o}
              className="motion-safe:[animation:twinkle_var(--dur)_ease-in-out_var(--del)_infinite_alternate]"
              style={{
                ["--dur" as string]: `${s.dur}s`,
                ["--del" as string]: `${s.delay}s`,
              }}
            />
          ))}
        </svg>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.18] mix-blend-screen"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.4' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.35'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative mx-auto max-w-[1440px] w-full px-8 lg:px-16 py-6 flex items-baseline justify-between border-b border-[#e8c987]/15">
        <span className={`${inter} text-[10px] uppercase tracking-[0.4em] text-[#e8c987]/55`}>
          Constellation · pierres précieuses
        </span>
        <span className={`${caveat} text-[16px] italic text-[#e8c987]/80`}>
          carte du ciel —
        </span>
        <span className={`${inter} text-[10px] uppercase tracking-[0.4em] text-[#e8c987]/55`}>
          MMXXVI · Lisboa
        </span>
      </div>

      <div className="relative flex-1 flex items-center justify-center px-4 lg:px-12">
        <h1
          aria-label="Précieuse — joaillerie artisanale, Lisboa"
          className={`${garamond} italic leading-none tracking-[-0.04em] flex items-baseline justify-center select-none`}
          style={{ fontSize: "clamp(80px, 16vw, 240px)" }}
        >
          {LETTERS.map((l, i) => (
            <span
              key={i}
              className="inline-block motion-safe:animate-[converge_2s_cubic-bezier(0.2,0.7,0.2,1)_both]"
              style={{
                color: i % 3 === 0 ? "#e8c987" : i % 3 === 1 ? "#d8b366" : "#f3d999",
                textShadow:
                  "0 0 24px rgba(232,201,135,0.35), 0 0 8px rgba(243,217,153,0.5)",
                animationDelay: `${l.delay}ms`,
                ["--ox" as string]: `${l.offsetX}px`,
                ["--oy" as string]: `${l.offsetY}px`,
                ["--depth" as string]: l.depth,
                transform: `translate3d(calc(var(--mx, 0) * var(--depth, 1) * 12px), calc(var(--my, 0) * var(--depth, 1) * 8px), 0)`,
                transition: "transform 380ms cubic-bezier(0.2,0.8,0.2,1)",
              }}
            >
              {l.ch}
            </span>
          ))}
        </h1>

        <style>{`
          @keyframes converge {
            0% { opacity: 0; transform: translate3d(var(--ox,0), var(--oy,0), 0) rotate(-8deg); filter: blur(8px); }
            60% { opacity: 1; filter: blur(0); }
            100% { opacity: 1; transform: translate3d(0,0,0) rotate(0); filter: blur(0); }
          }
          @keyframes twinkle {
            from { opacity: 0.2; }
            to { opacity: 0.9; }
          }
          @keyframes fadeUp {
            0% { opacity: 0; transform: translateY(12px); }
            100% { opacity: 1; transform: translateY(0); }
          }
        `}</style>

        <Link
          href="/fr/v4c/preview/collection"
          className={`group ${garamond} italic absolute bottom-8 left-1/2 -translate-x-1/2 inline-flex items-center gap-3 text-[15px] lg:text-[17px] text-[#f3d999] px-7 py-3 border border-[#e8c987]/45 backdrop-blur-[2px] hover:bg-[#e8c987] hover:text-[#0a0613] transition-all duration-300 motion-safe:animate-[fadeUp_1.4s_ease-out_2200ms_both]`}
        >
          <span>Lire la carte</span>
          <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
        </Link>
      </div>

      <div className="relative mx-auto max-w-[1440px] w-full px-8 lg:px-16 pb-10">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-4">
            <span className={`${inter} text-[10px] uppercase tracking-[0.4em] text-[#e8c987]/55 block`}>
              001 · ouverture
            </span>
            <p className={`${garamond} italic text-[20px] lg:text-[24px] text-[#f4ebd0] leading-snug mt-2`}>
              La pierre choisit la main qui la taille.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-3 lg:col-start-7">
            <span className={`${caveat} text-[14px] text-[#e8c987] italic`}>
              — un atelier, à Lisbonne
            </span>
            <p className={`${inter} text-[11px] text-[#f4ebd0]/65 leading-relaxed mt-3 max-w-[28ch]`}>
              Chaque bague naît d&apos;une commande, d&apos;une main, d&apos;un nom. Aucun stock.
              Aucune répétition.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-2 lg:col-start-11 self-end text-right">
            <span className={`${garamond} italic text-[14px] text-[#e8c987] block`}>voir</span>
            <span className={`${inter} text-[10px] uppercase tracking-[0.4em] text-[#e8c987]/55 block mt-1`}>
              ↓ collection
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
