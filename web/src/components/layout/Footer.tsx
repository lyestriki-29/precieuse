import Link from "next/link";
import { FOOTER_LINKS, SITE } from "@/lib/content/site";

export function Footer() {
  return (
    <footer className="border-t border-black/5">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-16 sm:px-8 lg:grid-cols-3 lg:px-12">
        <div>
          <p className="font-heading text-2xl">{SITE.brand}</p>
          <p className="text-foreground/60 mt-3 max-w-xs text-sm leading-relaxed font-light">
            Joaillerie artisanale, dessinée et fabriquée à la main au Portugal.
          </p>
        </div>

        <nav
          aria-label="Liens utiles"
          className="flex flex-col gap-3 text-sm font-light"
        >
          {FOOTER_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="hover:text-raspberry w-fit transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-3 text-sm font-light">
          <a
            href={SITE.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-raspberry w-fit transition-colors"
          >
            Instagram
          </a>
          <a
            href={`mailto:${SITE.email}`}
            className="hover:text-raspberry w-fit transition-colors"
          >
            {SITE.email}
          </a>
          <p className="text-foreground/40 mt-2 text-xs tracking-wider uppercase">
            Newsletter — bientôt
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-10 sm:px-8 lg:px-12">
        <p className="text-foreground/40 text-xs tracking-wider uppercase">
          © {new Date().getFullYear()} {SITE.brand} · Tous droits réservés
        </p>
      </div>
    </footer>
  );
}
