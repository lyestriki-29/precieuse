"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const garamond = "font-[family-name:var(--font-eb-garamond)]";
const caveat = "font-[family-name:var(--font-caveat)]";

const navLinks = [
  { label: "La Collection", href: "/fr/collection" },
  { label: "L'Atelier", href: "/fr/creatrice" },
  { label: "Sur-Mesure", href: "/fr/sur-mesure" },
];

export function V4CNav() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 z-50 w-full bg-[#f4ede0]/95 backdrop-blur-sm border-b border-[#3d2817]/20">
      <nav className="mx-auto flex max-w-[1440px] items-center justify-between px-8 py-3 lg:px-16">
        <Link
          href="/fr/v4c"
          className={`${garamond} italic text-[28px] text-[#3d2817] leading-none transition-opacity hover:opacity-70`}
        >
          Précieuse
        </Link>

        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className={`${garamond} italic text-[14px] text-[#3d2817]/70 transition-colors hover:text-[#3d2817] ${
                pathname.startsWith(l.href) ? "text-[#3d2817]" : ""
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <span className={`${caveat} text-[16px] text-[#1e3a5f] hidden md:block`}>
          Numéro II · MMXXVI
        </span>
      </nav>
    </header>
  );
}
