"use client";

import { useState } from "react";
import Link from "next/link";
import { V4CSeriesA } from "@/components/v4c/series-variants/V4CSeriesA";
import { V4CSeriesB } from "@/components/v4c/series-variants/V4CSeriesB";
import { V4CSeriesC } from "@/components/v4c/series-variants/V4CSeriesC";
import { V4CSeriesD } from "@/components/v4c/series-variants/V4CSeriesD";
import { V4CSeriesE } from "@/components/v4c/series-variants/V4CSeriesE";

const garamond = "font-[family-name:var(--font-eb-garamond)]";
const caveat = "font-[family-name:var(--font-caveat)]";

type VariantKey = "A" | "B" | "C" | "D" | "E";

const VARIANTS: { key: VariantKey; label: string; description: string }[] = [
  {
    key: "A",
    label: "Variante A",
    description: "Réduction radicale — 3 produits hero + CTA global",
  },
  {
    key: "B",
    label: "Variante B",
    description: "Carousel horizontal défilant — snap-scroll, 1 viewport",
  },
  {
    key: "C",
    label: "Variante C",
    description: "Focus + grid — Joséphine hero 60% + 4 produits 2×2",
  },
  {
    key: "D",
    label: "Variante D",
    description: "Tabs catégories — filtre Solitaires / Entourage / Alliances / Statement",
  },
  {
    key: "E",
    label: "Variante E",
    description: "Liste éditoriale — sommaire vertical type table des matières",
  },
];

const COMPONENTS: Record<VariantKey, React.ReactNode> = {
  A: <V4CSeriesA />,
  B: <V4CSeriesB />,
  C: <V4CSeriesC />,
  D: <V4CSeriesD />,
  E: <V4CSeriesE />,
};

export default function CollectionPreviewPage() {
  const [active, setActive] = useState<VariantKey>("A");
  const current = VARIANTS.find((v) => v.key === active)!;

  return (
    <div className="min-h-screen bg-[#f4ede0]">
      {/* Sticky header */}
      <div className="sticky top-0 z-50 bg-[#f4ede0]/95 backdrop-blur-sm border-b border-[#3d2817]/20">
        <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
          <div className="flex items-center justify-between py-3 border-b border-[#3d2817]/10 mb-0">
            <Link
              href="/fr/v4c"
              className={`${garamond} italic text-[14px] text-[#3d2817]/60 hover:text-[#3d2817] transition-colors`}
            >
              ← retour à v4c
            </Link>
            <span className={`${caveat} text-[14px] text-[#1e3a5f]`}>
              comparateur · section Collection
            </span>
          </div>

          {/* Tabs */}
          <div className="flex gap-1 -mb-px pt-2">
            {VARIANTS.map((v) => (
              <button
                key={v.key}
                onClick={() => setActive(v.key)}
                className={`${garamond} italic text-[15px] px-5 py-2 border-b-2 transition-all duration-200 ${
                  active === v.key
                    ? "text-[#3d2817] border-[#3d2817]"
                    : "text-[#3d2817]/40 border-transparent hover:text-[#3d2817]/70"
                }`}
              >
                {v.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Description de la variante active */}
      <div className="mx-auto max-w-[1440px] px-8 lg:px-16 py-6">
        <div className="flex items-center gap-4">
          <span
            className={`${garamond} italic text-[32px] text-[#a08552] leading-none`}
          >
            {current.key}
          </span>
          <div>
            <p className={`${garamond} italic text-[18px] text-[#3d2817]`}>
              {current.label}
            </p>
            <p className={`${caveat} text-[15px] text-[#1e3a5f]`}>
              {current.description}
            </p>
          </div>
        </div>
      </div>

      {/* Variante rendue */}
      <div className="mx-auto max-w-[1440px]">
        {COMPONENTS[active]}
      </div>

      {/* Footer comparateur */}
      <div className="mx-auto max-w-[1440px] px-8 lg:px-16 py-8 mt-4 border-t border-[#3d2817]/10">
        <p className={`${caveat} text-[14px] text-[#3d2817]/40 text-center`}>
          preview · non publié · Précieuse v4c
        </p>
      </div>
    </div>
  );
}
