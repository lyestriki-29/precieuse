"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/utils";
import { NAV_LINKS, SITE } from "@/lib/content/site";

const links = NAV_LINKS;

const HERO_FULLSCREEN_ROUTES = ["/fr", "/fr/"];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const onHero = HERO_FULLSCREEN_ROUTES.includes(pathname);
  const showLight = onHero && !scrolled;

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 40);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter,color] duration-300",
          showLight
            ? "border-b border-transparent bg-transparent text-white"
            : "bg-cream/90 border-b border-black/5 backdrop-blur-md text-foreground",
        )}
      >
        <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-6 sm:px-10 lg:px-16">
          <Link
            href="/fr"
            className="font-display text-xl italic tracking-tight"
            onClick={() => setOpen(false)}
          >
            {SITE.brand}
          </Link>

          <nav className="hidden gap-8 md:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="font-technical-label uppercase tracking-[0.15em] hover:text-tertiary transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            className="md:hidden"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="block h-px w-6 bg-current" />
            <span className="mt-1.5 block h-px w-6 bg-current" />
            <span className="mt-1.5 block h-px w-4 bg-current" />
          </button>
        </div>
      </header>

      {open && typeof document !== "undefined"
        ? createPortal(
            <div className="bg-cream fixed inset-0 z-40 flex flex-col items-center justify-center gap-10 pt-16 md:hidden">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-heading text-3xl"
                >
                  {l.label}
                </Link>
              ))}
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
