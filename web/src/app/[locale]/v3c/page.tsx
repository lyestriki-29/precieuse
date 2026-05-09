import { V3CNav } from "@/components/v3c/V3CNav";
import { V3CHero } from "@/components/v3c/V3CHero";
import { V3CAvantPropos } from "@/components/v3c/V3CAvantPropos";
import { V3CSeries } from "@/components/v3c/V3CSeries";
import { V3CEtabli } from "@/components/v3c/V3CEtabli";
import { V3CLettres } from "@/components/v3c/V3CLettres";
import { V3CVisite } from "@/components/v3c/V3CVisite";
import { V3CSurMesure } from "@/components/v3c/V3CSurMesure";
import { V3CJournal } from "@/components/v3c/V3CJournal";
import { V3CFooter } from "@/components/v3c/V3CFooter";

export const metadata = {
  title: "Le Carnet — Précieuse · Joaillerie artisanale, Lisboa",
  description:
    "Feuilletez le carnet d'atelier d'Eméline — pièces dessinées à la main, or 19kt, Lisboa MMXXVI.",
};

export default function V3CPage() {
  return (
    <div className="-mt-16 bg-[#f4ede0] text-[#3d2817] antialiased">
      <V3CNav />
      <main>
        <V3CHero />
        <V3CAvantPropos />
        <V3CSeries />
        <V3CEtabli />
        <V3CLettres />
        <V3CVisite />
        <V3CSurMesure />
        <V3CJournal />
      </main>
      <V3CFooter />
    </div>
  );
}
