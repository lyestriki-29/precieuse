import Link from "next/link";

export function V3BNav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#ffffff] border-b border-[#e8e6e1]">
      <div className="max-w-[1080px] mx-auto px-6 h-14 flex items-center justify-between">
        <Link
          href="/fr/v3b"
          className="font-[family-name:var(--font-cormorant)] text-[15px] font-light italic tracking-[0.2em] text-[#0d0d0d] uppercase"
        >
          Précieuse
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {(
            [
              ["Œuvres", "#vitrine"],
              ["Atelier", "#atelier"],
              ["Visite", "#visite"],
            ] as [string, string][]
          ).map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="group font-[family-name:var(--font-manrope)] text-[11px] font-light tracking-[0.18em] text-[#0d0d0d] uppercase relative"
            >
              {label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#b08d57] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <span className="font-[family-name:var(--font-manrope)] text-[10px] font-light tracking-[0.2em] text-[#a8a39a] uppercase hidden md:block">
          Galerie · Lisboa
        </span>
      </div>
    </header>
  );
}
