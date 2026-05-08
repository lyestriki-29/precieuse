import type { Metadata } from "next";
import { Bodoni_Moda, Inter, JetBrains_Mono, Playfair_Display } from "next/font/google";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Précieuse — Joaillerie artisanale",
  description:
    "Bijoux en or 19kt et diamants GVS, dessinés et fabriqués à la main au Portugal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // TODO Phase 5 : `lang` deviendra dynamique via next-intl quand EN/PT seront actifs.
    <html
      lang="fr"
      className={`${playfair.variable} ${bodoni.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="bg-cream text-foreground flex min-h-full flex-col font-sans">
        <Nav />
        <main className="flex flex-1 flex-col pt-16">{children}</main>
        <Footer />
        <Toaster richColors position="bottom-right" />
      </body>
    </html>
  );
}
