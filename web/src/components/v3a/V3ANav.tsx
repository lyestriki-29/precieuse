"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "Collections", href: "/fr/collection" },
  { label: "Sur-Mesure", href: "/fr/sur-mesure" },
  { label: "L'Atelier", href: "/fr/creatrice" },
  { label: "Contact", href: "/fr/contact" },
];

export function V3ANav() {
  const pathname = usePathname();

  return (
    <header className="w-full bg-[#f6f1ea] border-b border-[#d4cdc1]">
      {/* Top strip */}
      <div className="border-b border-[#d4cdc1] py-2 px-12 sm:px-20 lg:px-32">
        <div className="mx-auto max-w-[1280px] flex items-center justify-between">
          <span className="font-[family-name:var(--font-jetbrains)] text-[10px] uppercase tracking-[0.3em] text-[#4a4540]">
            Numéro I · Printemps MMXXVI · Lisboa
          </span>
          <span className="font-[family-name:var(--font-jetbrains)] text-[10px] uppercase tracking-[0.3em] text-[#4a4540]">
            Joaillerie Artisanale · Or 19kt
          </span>
        </div>
      </div>

      {/* Brand center */}
      <div className="py-6 px-12 sm:px-20 lg:px-32 text-center">
        <Link href="/fr/v3a">
          <h1 className="font-[family-name:var(--font-bodoni)] text-[72px] sm:text-[96px] italic font-normal text-[#1a1614] leading-none tracking-tight hover:text-[#8b1e2d] transition-colors duration-300">
            Précieuse
          </h1>
        </Link>
        <p className="font-[family-name:var(--font-jetbrains)] text-[10px] uppercase tracking-[0.5em] text-[#4a4540] mt-2">
          Joaillerie · Lisboa · Portugal
        </p>
      </div>

      {/* Nav links */}
      <nav className="border-t border-[#d4cdc1] py-3 px-12 sm:px-20 lg:px-32">
        <div className="mx-auto max-w-[1280px] flex items-center justify-center gap-12">
          {NAV_LINKS.map((link) => {
            const isActive = pathname.startsWith(link.href);
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`group relative font-[family-name:var(--font-inter)] text-[11px] uppercase tracking-[0.25em] transition-colors duration-300 ${
                  isActive ? "text-[#8b1e2d]" : "text-[#4a4540] hover:text-[#1a1614]"
                }`}
              >
                {link.label}
                <span
                  aria-hidden
                  className={`absolute -bottom-px left-0 h-px bg-[#8b1e2d] transition-[width] duration-300 ease-out ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
