import { V3BNav } from "@/components/v3b/V3BNav";
import { V3BHero } from "@/components/v3b/V3BHero";
import { V3BVitrine } from "@/components/v3b/V3BVitrine";
import { V3BCartelAtelier } from "@/components/v3b/V3BCartelAtelier";
import { V3BEntretien } from "@/components/v3b/V3BEntretien";
import { V3BVisite } from "@/components/v3b/V3BVisite";
import { V3BAcquisitions } from "@/components/v3b/V3BAcquisitions";
import { V3BProcess } from "@/components/v3b/V3BProcess";
import { V3BVernissages } from "@/components/v3b/V3BVernissages";
import { V3BFooter } from "@/components/v3b/V3BFooter";

export const metadata = {
  title: "Précieuse — Galerie de joaillerie, Lisboa",
  description:
    "Joaillerie artisanale à la cire perdue. Chaque pièce est une œuvre numérotée, fabriquée à Lisbonne en or 19kt et diamants GVS certifiés.",
};

export default function V3BPage() {
  return (
    <div className="bg-[#ffffff] text-[#0d0d0d] font-[family-name:var(--font-manrope)] antialiased">
      <V3BNav />
      <main>
        <V3BHero />
        <V3BVitrine />
        <V3BCartelAtelier />
        <V3BEntretien />
        <V3BProcess />
        <V3BAcquisitions />
        <V3BVisite />
        <V3BVernissages />
      </main>
      <V3BFooter />
    </div>
  );
}
