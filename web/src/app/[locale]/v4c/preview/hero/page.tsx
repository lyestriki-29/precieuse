"use client";

import { useState } from "react";
import Link from "next/link";
import { V4CSiteTheme } from "@/components/v4c/V4CSiteTheme";
import { V4CHeroE } from "@/components/v4c/hero-variants/V4CHeroE";
import { V4CHeroE1 } from "@/components/v4c/hero-variants/V4CHeroE1";
import { V4CHeroE2 } from "@/components/v4c/hero-variants/V4CHeroE2";
import { V4CHeroE3 } from "@/components/v4c/hero-variants/V4CHeroE3";
import { V4CHeroE4 } from "@/components/v4c/hero-variants/V4CHeroE4";
import { V4CHeroE5 } from "@/components/v4c/hero-variants/V4CHeroE5";

const garamond = "font-[family-name:var(--font-eb-garamond)]";
const caveat = "font-[family-name:var(--font-caveat)]";

type VariantKey = "E" | "E1" | "E2" | "E3" | "E4" | "E5";

const VARIANTS: { key: VariantKey; label: string; description: string }[] = [
  { key: "E",  label: "E · racine",        description: "Type-as-Image origine — lettres clipées sur image, fond vélin clair (sans direction graphique)." },
  { key: "E1", label: "E1 · Sceau (A)",    description: "Direction A line-art — poinçon embossé + cartouche héraldique, guilloché, marques de poinçon, bague gravée." },
  { key: "E2", label: "E2 · Filigrane (A)", description: "Direction A line-art — calligraphie SVG + croquis bague gravée, schéma brillant, marques de poinçon." },
  { key: "E3", label: "E3 · Constellation (B)", description: "Direction B Art Nouveau — lettres parallax + vignes, volutes coup-de-fouet, fleur stylisée." },
  { key: "E4", label: "E4 · Vitrine (C)",  description: "Direction C Art Déco — verre dépoli + sunburst, schéma brillant, cadres aux coins, frise losanges." },
  { key: "E5", label: "E5 · Marqueterie (C)", description: "Direction C Art Déco — 9 gemmes + sunburst, schéma brillant en filigrane, cadres aux coins, frise." },
];

const COMPONENTS: Record<VariantKey, React.ReactNode> = {
  E:  <V4CHeroE />,
  E1: <V4CHeroE1 />,
  E2: <V4CHeroE2 />,
  E3: <V4CHeroE3 />,
  E4: <V4CHeroE4 />,
  E5: <V4CHeroE5 />,
};

export default function HeroPreviewPage() {
  const [active, setActive] = useState<VariantKey>("E1");
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
                comparateur · Hero · directions A line-art · B Art Nouveau · C Art Déco
              </span>
            </div>

            <div className="flex flex-wrap gap-1 -mb-px pt-2">
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
            preview · non publié · Précieuse v4c · hero · déclinaisons E
          </p>
        </div>
      </div>
    </V4CSiteTheme>
  );
}
