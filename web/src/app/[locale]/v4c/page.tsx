import { V4CNav } from "@/components/v4c/V4CNav";
import { V4CHero } from "@/components/v4c/V4CHero";
import { V4CAvantPropos } from "@/components/v4c/V4CAvantPropos";
import { V4CNouveautes } from "@/components/v4c/V4CNouveautes";
import { V4CSeries } from "@/components/v4c/V4CSeries";
import { V4CMatieres } from "@/components/v4c/V4CMatieres";
import { V4CPieceDuMois } from "@/components/v4c/V4CPieceDuMois";
import { V4CEtabli } from "@/components/v4c/V4CEtabli";
import { V4CLettres } from "@/components/v4c/V4CLettres";
import { V4CDuCahier } from "@/components/v4c/V4CDuCahier";
import { V4CMaisonEngagements } from "@/components/v4c/V4CMaisonEngagements";
import { V4CVisite } from "@/components/v4c/V4CVisite";
import { V4CSurMesure } from "@/components/v4c/V4CSurMesure";
import { V4CTrustStrip } from "@/components/v4c/V4CTrustStrip";
import { V4CJournal } from "@/components/v4c/V4CJournal";
import { V4CFooter } from "@/components/v4c/V4CFooter";
import { V4CReveal } from "@/components/v4c/V4CReveal";

export const metadata = {
  title: "Le Carnet — Précieuse · Joaillerie artisanale, Lisboa",
  description:
    "Feuilletez le carnet d'atelier d'Eméline — pièces dessinées à la main, or 19kt, Lisboa MMXXVI.",
};

export default function V4CPage() {
  return (
    <div className="-mt-16 bg-[#f4ede0] text-[#3d2817] antialiased">
      <V4CNav />
      <main>
        {/* Hero above-fold : pas de reveal */}
        <V4CHero />

        <V4CReveal>
          <V4CAvantPropos />
        </V4CReveal>

        <V4CReveal delay={80}>
          <V4CNouveautes />
        </V4CReveal>

        <V4CReveal delay={60}>
          <V4CSeries />
        </V4CReveal>

        <V4CReveal delay={60}>
          <V4CMatieres />
        </V4CReveal>

        <V4CReveal delay={40}>
          <V4CPieceDuMois />
        </V4CReveal>

        <V4CReveal delay={60}>
          <V4CEtabli />
        </V4CReveal>

        <V4CReveal delay={60}>
          <V4CLettres />
        </V4CReveal>

        <V4CReveal delay={60}>
          <V4CDuCahier />
        </V4CReveal>

        <V4CReveal delay={60}>
          <V4CMaisonEngagements />
        </V4CReveal>

        <V4CReveal delay={60}>
          <V4CVisite />
        </V4CReveal>

        <V4CReveal delay={60}>
          <V4CSurMesure />
        </V4CReveal>

        <V4CReveal delay={40}>
          <V4CTrustStrip />
        </V4CReveal>

        <V4CReveal delay={60}>
          <V4CJournal />
        </V4CReveal>
      </main>
      <V4CFooter />
    </div>
  );
}
