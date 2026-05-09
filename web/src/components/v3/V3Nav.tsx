"use client";

import Link from "next/link";

const inter = "font-[family-name:var(--font-inter)]";
const playfair = "font-[family-name:var(--font-playfair)]";

const links = [
  { label: "Collections", href: "/fr/collection", active: true },
  { label: "Sur-Mesure", href: "/fr/sur-mesure" },
  { label: "L'Atelier", href: "/fr/creatrice" },
  { label: "Journal", href: "#" },
];

export function V3Nav() {
  return (
    <header className="fixed top-0 z-50 w-full bg-transparent text-[#4f378a] backdrop-blur-sm transition-all duration-500 hover:bg-[#fdf7ff]/80">
      <nav className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-6 sm:px-10 sm:py-8 lg:px-20">
        <div className="flex items-center gap-10">
          <Link
            href="/fr/v3"
            className={`${playfair} text-[32px] sm:text-[40px] italic text-[#4f378a]`}
          >
            Précieuse
          </Link>
          <div className="ml-12 hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className={`${inter} text-[12px] font-medium uppercase tracking-[0.15em] transition-opacity duration-500 hover:opacity-70 ${
                  l.active
                    ? "text-[#4f378a] border-b border-[#4f378a] pb-1"
                    : "text-[#494551]"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-6">
          <button
            aria-label="Compte"
            className="text-[#4f378a] transition-opacity hover:opacity-70"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
          </button>
          <button
            aria-label="Panier"
            className="text-[#4f378a] transition-opacity hover:opacity-70"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007Z"
              />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
