"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/utils";
import { NAV_LINKS, SITE } from "@/lib/content/site";

const links = NAV_LINKS;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
          "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300",
          scrolled
            ? "bg-cream/85 border-b border-black/5 backdrop-blur-md"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12">
          <Link
            href="/fr"
            className="font-heading text-xl tracking-tight"
            onClick={() => setOpen(false)}
          >
            {SITE.brand}
          </Link>

          <nav className="hidden gap-10 md:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="hover:text-raspberry text-sm font-light tracking-wide transition-colors"
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
