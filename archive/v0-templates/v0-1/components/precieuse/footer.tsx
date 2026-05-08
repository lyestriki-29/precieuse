export function Footer() {
  return (
    <footer className="py-16 md:py-20 px-8 md:px-16 lg:px-20 border-t border-foreground/10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
        {/* Left column */}
        <div>
          <h3 className="font-serif italic text-2xl text-foreground mb-6">
            Précieuse
          </h3>
          <p className="text-sm font-light text-foreground/60 leading-relaxed max-w-xs">
            Joaillerie artisanale française. Atelier au Portugal.
          </p>
        </div>

        {/* Right column */}
        <div className="flex flex-col md:items-end">
          <nav className="flex flex-col gap-3 md:items-end">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-foreground/60 hover:text-raspberry transition-colors duration-300"
            >
              Instagram
            </a>
            <a 
              href="https://wa.me/33600000000" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-foreground/60 hover:text-raspberry transition-colors duration-300"
            >
              WhatsApp
            </a>
          </nav>

          <div className="mt-8 flex flex-col md:items-end gap-2">
            <a 
              href="#" 
              className="text-xs text-foreground/40 hover:text-foreground/60 transition-colors duration-300"
            >
              Mentions légales
            </a>
            <a 
              href="#" 
              className="text-xs text-foreground/40 hover:text-foreground/60 transition-colors duration-300"
            >
              Politique de confidentialité
            </a>
          </div>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-foreground/5">
        <p className="text-xs text-foreground/30 text-center">
          © {new Date().getFullYear()} Précieuse. Tous droits réservés.
        </p>
      </div>
    </footer>
  )
}
