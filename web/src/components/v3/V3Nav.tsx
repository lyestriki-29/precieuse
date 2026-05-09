"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const inter = "font-[family-name:var(--font-inter)]";
const playfair = "font-[family-name:var(--font-playfair)]";

type NavItem = { label: string; href: string; match?: string };

const leftLinks: NavItem[] = [
  { label: "Collections", href: "/fr/collection", match: "/fr/collection" },
  { label: "Sur-Mesure", href: "/fr/sur-mesure", match: "/fr/sur-mesure" },
];

const rightLinks: NavItem[] = [
  { label: "L'Atelier", href: "/fr/creatrice", match: "/fr/creatrice" },
  { label: "Journal", href: "#" },
];

function NavLink({
  label,
  href,
  active,
}: {
  label: string;
  href: string;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={`${inter} group relative inline-flex items-center text-[12px] font-medium uppercase tracking-[0.18em] transition-opacity duration-500 hover:opacity-100 ${
        active ? "text-[#4f378a]" : "text-[#494551]/80 hover:text-[#4f378a]"
      }`}
    >
      {label}
      <span
        aria-hidden
        className={`pointer-events-none absolute -bottom-1 left-1/2 h-px bg-[#4f378a] transition-[width,left] duration-500 ease-out ${
          active
            ? "left-0 w-full"
            : "w-0 group-hover:left-0 group-hover:w-full"
        }`}
      />
    </Link>
  );
}

export function V3Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 30);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-[background-color,backdrop-filter,border-color,padding] duration-500 ${
        scrolled
          ? "bg-[#fdf7ff]/85 backdrop-blur-md border-b border-[#cbc4d2]/40"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      {/* Top meta strip */}
      <div
        className={`hidden border-b border-[#cbc4d2]/30 transition-[max-height,opacity] duration-500 md:block ${
          scrolled ? "max-h-0 overflow-hidden opacity-0" : "max-h-10 opacity-100"
        }`}
      >
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-2 sm:px-10 lg:px-20">
          <span
            className={`${inter} text-[10px] font-medium uppercase tracking-[0.3em] text-[#494551]/70`}
          >
            Maison · Portugal · MMXXVI
          </span>
          <span
            className={`${inter} text-[10px] font-medium uppercase tracking-[0.3em] text-[#494551]/70`}
          >
            Livraison soignée · Pièces uniques
          </span>
        </div>
      </div>

      {/* Main nav row */}
      <nav className="mx-auto flex max-w-[1440px] items-center justify-between gap-6 px-6 py-5 sm:px-10 sm:py-6 lg:px-20">
        {/* Left cluster : nav links */}
        <div className="hidden flex-1 items-center gap-10 md:flex">
          {leftLinks.map((l) => (
            <NavLink
              key={l.label}
              label={l.label}
              href={l.href}
              active={l.match ? pathname.startsWith(l.match) : false}
            />
          ))}
        </div>

        {/* Center : brand */}
        <Link
          href="/fr/v3"
          className={`${playfair} flex flex-col items-center text-[#4f378a] leading-none transition-opacity hover:opacity-80`}
        >
          <span
            className={`text-[36px] sm:text-[44px] lg:text-[48px] italic transition-[font-size] duration-500 ${
              scrolled ? "sm:text-[36px] lg:text-[40px]" : ""
            }`}
          >
            Précieuse
          </span>
          <span
            className={`${inter} mt-1 text-[8px] font-medium uppercase tracking-[0.5em] text-[#4f378a]/60 transition-opacity duration-500 ${
              scrolled ? "opacity-0" : "opacity-100"
            }`}
          >
            Joaillerie · Lisboa
          </span>
        </Link>

        {/* Right cluster : nav links + icons */}
        <div className="flex flex-1 items-center justify-end gap-6 md:gap-10">
          <div className="hidden items-center gap-10 md:flex">
            {rightLinks.map((l) => (
              <NavLink
                key={l.label}
                label={l.label}
                href={l.href}
                active={l.match ? pathname.startsWith(l.match) : false}
              />
            ))}
          </div>
          <span
            aria-hidden
            className="hidden h-4 w-px bg-[#cbc4d2] md:block"
          />
          <div className="flex items-center gap-5">
            <button
              aria-label="Compte"
              className="text-[#4f378a] transition-opacity hover:opacity-70"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.3"
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
                strokeWidth="1.3"
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
        </div>
      </nav>
    </header>
  );
}
