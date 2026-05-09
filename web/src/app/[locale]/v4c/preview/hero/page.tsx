"use client";

import { useState } from "react";
import Link from "next/link";
import { V4CSiteTheme } from "@/components/v4c/V4CSiteTheme";
import { V4CHeroA } from "@/components/v4c/hero-variants/V4CHeroA";
import { V4CHeroB } from "@/components/v4c/hero-variants/V4CHeroB";
import { V4CHeroC } from "@/components/v4c/hero-variants/V4CHeroC";
import { V4CHeroD } from "@/components/v4c/hero-variants/V4CHeroD";
import { V4CHeroE } from "@/components/v4c/hero-variants/V4CHeroE";
import { V4CHeroF } from "@/components/v4c/hero-variants/V4CHeroF";

const garamond = "font-[family-name:var(--font-eb-garamond)]";
const caveat = "font-[family-name:var(--font-caveat)]";

type VariantKey = "A" | "B" | "C" | "D" | "E" | "F";

const VARIANTS: { key: VariantKey; label: string; description: string }[] = [
  { key: "A", label: "Variante A", description: "Éditorial Magazine — masthead, typo italique gigantesque, dossier 03 pages." },
  { key: "B", label: "Variante B", description: "Carnet polaroid — collage tactile, scotch, écriture caveat manuscrite." },
  { key: "C", label: "Variante C", description: "Cinematic letterbox — bandes noires, credits, B&N + flash or, un film de Eméline." },
  { key: "D", label: "Variante D", description: "Diorama vitrine nocturne — sombre, halo radial, bague flottante, particules d'or." },
  { key: "E", label: "Variante E", description: "Type-as-Image — lettres géantes contenant l'image (background-clip)." },
  { key: "F", label: "Variante F", description: "Herbarium botanique — planche d'herbier vintage, étiquette manuscrite, latin." },
];

const COMPONENTS: Record<VariantKey, React.ReactNode> = {
  A: <V4CHeroA />,
  B: <V4CHeroB />,
  C: <V4CHeroC />,
  D: <V4CHeroD />,
  E: <V4CHeroE />,
  F: <V4CHeroF />,
};

export default function HeroPreviewPage() {
  const [active, setActive] = useState<VariantKey>("A");
  const current = VARIANTS.find((v) => v.key === active)!;

  return (
    <V4CSiteTheme>
      <div className="min-h-screen bg-[var(--site-bg)]">
        <div className="sticky top-0 z-50 bg-[var(--site-bg)]/95 backdrop-blur-sm border-b border-[var(--site-text)]/20">
          <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
            <div className="flex items-center justify-between py-3 border-b border-[var(--site-text)]/10">
              <Link
                href="/fr/v4c"
                className={`${garamond} italic text-[14px] text-[var(--site-text)]/60 hover:text-[var(--site-text)] transition-colors`}
              >
                ← retour à v4c
              </Link>
              <span className={`${caveat} text-[14px] text-[var(--site-caveat)]`}>
                comparateur · section Hero
              </span>
            </div>

            <div className="flex gap-1 -mb-px pt-2">
              {VARIANTS.map((v) => (
                <button
                  key={v.key}
                  type="button"
                  onClick={() => setActive(v.key)}
                  className={`${garamond} italic text-[15px] px-5 py-2 border-b-2 transition-all duration-200 ${
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
          <div className="flex items-center gap-4">
            <span className={`${garamond} italic text-[32px] text-[var(--site-accent)] leading-none`}>
              {current.key}
            </span>
            <div>
              <p className={`${garamond} italic text-[18px] text-[var(--site-text)]`}>
                {current.label}
              </p>
              <p className={`${caveat} text-[15px] text-[var(--site-caveat)]`}>
                {current.description}
              </p>
            </div>
          </div>
        </div>

        <div>{COMPONENTS[active]}</div>

        <div className="mx-auto max-w-[1440px] px-8 lg:px-16 py-8 mt-4 border-t border-[var(--site-text)]/10">
          <p className={`${caveat} text-[14px] text-[var(--site-text)]/40 text-center`}>
            preview · non publié · Précieuse v4c · hero
          </p>
        </div>
      </div>
    </V4CSiteTheme>
  );
}
