import type { Metadata } from "next";
import { V3ANav } from "@/components/v3a/V3ANav";
import { V3AMasthead } from "@/components/v3a/V3AMasthead";
import { V3ACoverStory } from "@/components/v3a/V3ACoverStory";
import { V3AGallery } from "@/components/v3a/V3AGallery";
import { V3AReportage } from "@/components/v3a/V3AReportage";
import { V3AProcess } from "@/components/v3a/V3AProcess";
import { V3APullQuote } from "@/components/v3a/V3APullQuote";
import { V3ACarnet } from "@/components/v3a/V3ACarnet";
import { V3ANewsletter } from "@/components/v3a/V3ANewsletter";
import { V3AFooter } from "@/components/v3a/V3AFooter";

export const metadata: Metadata = {
  title: "Précieuse — Numéro I · MMXXVI",
  description:
    "Joaillerie artisanale française, dessinée et fabriquée à la main à Lisbonne. Or 19kt, diamants GVS certifiés. Pièces sur commande.",
};

export default function V3AHomePage() {
  return (
    <div className="bg-[#f6f1ea] text-[#1a1614] font-[family-name:var(--font-inter)] antialiased">
      <V3ANav />
      <main>
        <V3AMasthead />
        <V3ACoverStory />
        <V3AGallery />
        <V3AReportage />
        <V3AProcess />
        <V3APullQuote />
        <V3ACarnet />
        <V3ANewsletter />
      </main>
      <V3AFooter />
    </div>
  );
}
