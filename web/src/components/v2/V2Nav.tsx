import Link from "next/link";

export function V2Nav() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[#cbc4d2]/30 bg-[#fdf7ff]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-3 sm:px-10 lg:px-20">
        <div className="hidden gap-10 md:flex">
          <Link
            href="/fr/collection"
            className="font-[family-name:var(--font-inter)] text-[12px] font-medium uppercase tracking-[0.15em] text-[#494551] transition-colors duration-300 hover:text-[#4f378a]"
          >
            Collections
          </Link>
          <Link
            href="/fr/creatrice"
            className="font-[family-name:var(--font-inter)] text-[12px] font-medium uppercase tracking-[0.15em] text-[#494551] transition-colors duration-300 hover:text-[#4f378a]"
          >
            Atelier
          </Link>
        </div>

        <Link
          href="/fr"
          className="font-[family-name:var(--font-playfair)] text-[28px] sm:text-[40px] tracking-widest uppercase text-[#4f378a]"
        >
          PRÉCIEUSE
        </Link>

        <div className="hidden items-center gap-10 md:flex">
          <Link
            href="/fr/sur-mesure"
            className="font-[family-name:var(--font-inter)] text-[12px] font-medium uppercase tracking-[0.15em] text-[#494551] transition-colors duration-300 hover:text-[#4f378a]"
          >
            Heritage
          </Link>
          <Link
            href="/fr/contact"
            aria-label="Contact"
            className="text-[#4f378a] transition-opacity hover:opacity-70"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007Z"
              />
            </svg>
          </Link>
        </div>
      </div>
    </nav>
  );
}
