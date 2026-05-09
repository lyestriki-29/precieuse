"use client";

import { useState } from "react";
import { V4CFooterA } from "./footer-variants/V4CFooterA";
import { V4CFooterB } from "./footer-variants/V4CFooterB";
import { V4CFooterC } from "./footer-variants/V4CFooterC";
import { V4CFooterD } from "./footer-variants/V4CFooterD";
import { V4CFooterE } from "./footer-variants/V4CFooterE";
import { V4CFooterF } from "./footer-variants/V4CFooterF";
import { V4CFooterG } from "./footer-variants/V4CFooterG";
import { V4CFooterH } from "./footer-variants/V4CFooterH";

const garamond = "font-[family-name:var(--font-eb-garamond)]";
const caveat = "font-[family-name:var(--font-caveat)]";

type Key = "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H";

const VARIANTS: { key: Key; label: string; sub: string }[] = [
  { key: "A", label: "Colophon", sub: "fin de livre · fleuron central" },
  { key: "B", label: "Lettre signée", sub: "manifeste + signature Caveat XL" },
  { key: "C", label: "Sceau & cachet", sub: "wax seal P + 3 colonnes" },
  { key: "D", label: "Carte postale", sub: "recto/verso + cachet circulaire" },
  { key: "E", label: "Magazine", sub: "4 colonnes éditoriales structurées" },
  { key: "F", label: "Atelier photo", sub: "image arrière-plan cinématique" },
  { key: "G", label: "Baroque", sub: "ornements ❦ ❖ ✦ + capitales" },
  { key: "H", label: "Carnet d'adresses", sub: "carte SVG Lisbonne + signature" },
];

const COMPONENTS: Record<Key, React.ReactNode> = {
  A: <V4CFooterA />,
  B: <V4CFooterB />,
  C: <V4CFooterC />,
  D: <V4CFooterD />,
  E: <V4CFooterE />,
  F: <V4CFooterF />,
  G: <V4CFooterG />,
  H: <V4CFooterH />,
};

export function V4CFooter() {
  const [active, setActive] = useState<Key>("A");
  const current = VARIANTS.find((v) => v.key === active)!;

  return (
    <div className="relative">
      {/* Switcher pastille — top-right */}
      <div className="absolute top-4 right-4 lg:top-6 lg:right-8 z-30 bg-[var(--site-bg)]/10 backdrop-blur-md border border-[var(--site-accent)]/40 px-3 py-2.5 max-w-[260px]">
        <div className="flex items-center justify-between mb-2">
          <span className={`${caveat} italic text-[12px] text-[var(--site-accent)]`}>
            preview footer —
          </span>
          <span className={`${garamond} italic text-[11px] tracking-widest text-[var(--site-bg)]/80`}>
            {active}
          </span>
        </div>
        <div className="grid grid-cols-8 gap-1">
          {VARIANTS.map((v) => (
            <button
              key={v.key}
              type="button"
              onClick={() => setActive(v.key)}
              aria-pressed={active === v.key}
              title={`${v.label} — ${v.sub}`}
              className={`${garamond} italic text-[11px] py-1 transition-all duration-200 ${
                active === v.key
                  ? "text-[var(--site-bg)] border-b border-[var(--site-accent)]"
                  : "text-[var(--site-bg)]/50 hover:text-[var(--site-bg)] border-b border-transparent"
              }`}
            >
              {v.key}
            </button>
          ))}
        </div>
        <p className={`${garamond} italic text-[11px] text-[var(--site-bg)]/85 mt-2 leading-snug`}>
          {current.label}
          <span className={`${caveat} text-[11px] text-[var(--site-accent)]/90 italic block`}>
            {current.sub}
          </span>
        </p>
      </div>

      {COMPONENTS[active]}
    </div>
  );
}
