"use client";

import { useState } from "react";
import Link from "next/link";
import { V4CSiteTheme } from "@/components/v4c/V4CSiteTheme";
import { V4CAvantProposLuxeA } from "@/components/v4c/avantpropos-luxe-variants/V4CAvantProposLuxeA";
import { V4CAvantProposLuxeB } from "@/components/v4c/avantpropos-luxe-variants/V4CAvantProposLuxeB";
import { V4CAvantProposLuxeC } from "@/components/v4c/avantpropos-luxe-variants/V4CAvantProposLuxeC";
import { V4CAvantProposLuxeD } from "@/components/v4c/avantpropos-luxe-variants/V4CAvantProposLuxeD";

const garamond = "font-[family-name:var(--font-eb-garamond)]";
const caveat = "font-[family-name:var(--font-caveat)]";

type VariantKey = "A" | "B" | "C" | "D";

const VARIANTS: { key: VariantKey; label: string; description: string }[] = [
  { key: "A", label: "A — Cartier impérial", description: "Didot espacé, numérotation romaine I-IV, filets fins, monochrome accent or — codes Cartier" },
  { key: "B", label: "B — Tiffany éditorial", description: "Cadre fin or autour du portrait, headline serif imposante, paires en grille 2×2 minimaliste — codes Tiffany" },
  { key: "C", label: "C — Buccellati intime", description: "Paires manuscrites + éditoriales en duo, ornements art déco, ambiance carnet — codes Buccellati" },
  { key: "D", label: "D — Bulgari architectural", description: "MAISON PRÉCIEUSE en display ALL CAPS, contraste fort Pas/Mais, portrait plein format sans tilt — codes Bulgari" },
];

const COMPONENTS: Record<VariantKey, React.ReactNode> = {
  A: <V4CAvantProposLuxeA />,
  B: <V4CAvantProposLuxeB />,
  C: <V4CAvantProposLuxeC />,
  D: <V4CAvantProposLuxeD />,
};

export default function AvantProposLuxePreviewPage() {
  const [active, setActive] = useState<VariantKey>("A");
  const current = VARIANTS.find((v) => v.key === active)!;

  return (
    <V4CSiteTheme>
      <div className="min-h-screen bg-[var(--site-bg)] -mt-16 antialiased">
        <div className="sticky top-0 z-50 bg-[var(--site-bg)]/95 backdrop-blur-sm border-b border-[var(--site-text)]/20">
          <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
            <div className="flex items-center justify-between py-3 border-b border-[var(--site-text)]/10">
              <div className="flex items-center gap-4">
                <Link
                  href="/fr"
                  className={`${garamond} italic text-[14px] text-[var(--site-text)]/60 hover:text-[var(--site-text)] transition-colors`}
                >
                  ← accueil
                </Link>
                <span className="text-[var(--site-text)]/30">·</span>
                <Link
                  href="/fr/preview/avant-propos"
                  className={`${garamond} italic text-[14px] text-[var(--site-text)]/60 hover:text-[var(--site-text)] transition-colors`}
                >
                  voir set typographique →
                </Link>
              </div>
              <span className={`${caveat} text-[14px] text-[var(--site-caveat)]`}>
                comparateur · Avant-propos · set luxe
              </span>
            </div>

            <div className="flex gap-0 -mb-px pt-2 overflow-x-auto">
              {VARIANTS.map((v) => (
                <button
                  key={v.key}
                  onClick={() => setActive(v.key)}
                  className={`${garamond} italic text-[14px] px-4 py-2 border-b-2 transition-all duration-200 whitespace-nowrap ${
                    active === v.key
                      ? "text-[var(--site-text)] border-[var(--site-text)]"
                      : "text-[var(--site-text)]/40 border-transparent hover:text-[var(--site-text)]/70"
                  }`}
                >
                  {v.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-[1440px] px-8 lg:px-16 py-6">
          <div className="flex items-center gap-5">
            <span className={`${garamond} italic text-[36px] text-[var(--site-accent)] leading-none`}>
              {current.key}
            </span>
            <p className={`${caveat} text-[16px] text-[var(--site-caveat)] leading-snug max-w-[720px]`}>
              {current.description}
            </p>
          </div>
        </div>

        <div>{COMPONENTS[active]}</div>
      </div>
    </V4CSiteTheme>
  );
}
