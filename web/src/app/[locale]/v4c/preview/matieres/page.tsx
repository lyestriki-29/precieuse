"use client";

import { useState } from "react";
import Link from "next/link";
import { V4CMatieres1 } from "@/components/v4c/matieres-variants/V4CMatieres1";
import { V4CMatieres2 } from "@/components/v4c/matieres-variants/V4CMatieres2";
import { V4CMatieres3 } from "@/components/v4c/matieres-variants/V4CMatieres3";
import { V4CMatieres4 } from "@/components/v4c/matieres-variants/V4CMatieres4";
import { V4CMatieres5 } from "@/components/v4c/matieres-variants/V4CMatieres5";
import { V4CMatieres6 } from "@/components/v4c/matieres-variants/V4CMatieres6";

const garamond = "font-[family-name:var(--font-eb-garamond)]";
const caveat = "font-[family-name:var(--font-caveat)]";

type VariantKey = "1" | "2" | "3" | "4" | "5" | "6";

const VARIANTS: { key: VariantKey; label: string; description: string }[] = [
  { key: "1", label: "1 — Grid", description: "5 cards en grille, séparateurs fins, espacement généreux" },
  { key: "2", label: "2 — Bandeau", description: "Défilement horizontal scroll-snap, 5 cards 320px" },
  { key: "3", label: "3 — Accordion", description: "Liste verticale dépliable, une matière à la fois" },
  { key: "4", label: "4 — Carousel", description: "Plein écran cinématique, auto-play 6s, fade 700ms" },
  { key: "5", label: "5 — Mosaïque", description: "Grid asymétrique éditorial, overlay hover vélin" },
  { key: "6", label: "6 — Fiche", description: "Livret 2 colonnes alternées, format magazine dense" },
];

const COMPONENTS: Record<VariantKey, React.ReactNode> = {
  "1": <V4CMatieres1 />,
  "2": <V4CMatieres2 />,
  "3": <V4CMatieres3 />,
  "4": <V4CMatieres4 />,
  "5": <V4CMatieres5 />,
  "6": <V4CMatieres6 />,
};

export default function MatierePreviewPage() {
  const [active, setActive] = useState<VariantKey>("1");
  const current = VARIANTS.find((v) => v.key === active)!;

  return (
    <div className="min-h-screen bg-[#f4ede0]">
      {/* Sticky header */}
      <div className="sticky top-0 z-50 bg-[#f4ede0]/95 backdrop-blur-sm border-b border-[#3d2817]/20">
        <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
          <div className="flex items-center justify-between py-3 border-b border-[#3d2817]/10">
            <Link
              href="/fr/v4c"
              className={`${garamond} italic text-[14px] text-[#3d2817]/60 hover:text-[#3d2817] transition-colors`}
            >
              ← retour à v4c
            </Link>
            <span className={`${caveat} text-[14px] text-[#1e3a5f]`}>
              comparateur · section Matières
            </span>
          </div>

          {/* Tabs */}
          <div className="flex gap-0 -mb-px pt-2 overflow-x-auto">
            {VARIANTS.map((v) => (
              <button
                key={v.key}
                onClick={() => setActive(v.key)}
                className={`${garamond} italic text-[14px] px-4 py-2 border-b-2 transition-all duration-200 whitespace-nowrap ${
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

      {/* Description variante active */}
      <div className="mx-auto max-w-[1440px] px-8 lg:px-16 py-6">
        <div className="flex items-center gap-5">
          <span className={`${garamond} italic text-[36px] text-[#a08552] leading-none`}>
            {current.key}
          </span>
          <div>
            <p className={`${garamond} italic text-[18px] text-[#3d2817]`}>
              Variante {current.key}
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

      {/* Footer */}
      <div className="mx-auto max-w-[1440px] px-8 lg:px-16 py-8 mt-4 border-t border-[#3d2817]/10">
        <p className={`${caveat} text-[14px] text-[#3d2817]/40 text-center`}>
          preview · non publié · Précieuse v4c
        </p>
      </div>
    </div>
  );
}
