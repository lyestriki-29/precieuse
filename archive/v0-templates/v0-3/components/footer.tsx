import { Instagram } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-slate text-bone py-16 md:py-20" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo & Brand */}
          <div className="lg:col-span-1">
            <h2 className="font-serif text-2xl md:text-3xl text-bone mb-4">
              Précieuse
            </h2>
            <p className="font-sans text-sm text-bone/60 leading-relaxed mb-6">
              Joaillerie artisanale<br />
              Lisbonne, Portugal
            </p>
            {/* Social */}
            <a 
              href="#" 
              className="inline-flex items-center gap-2 font-mono text-xs tracking-wider text-bone/60 hover:text-gold transition-colors"
              aria-label="Suivez-nous sur Instagram"
            >
              <Instagram className="w-4 h-4" />
              @precieuse.joaillerie
            </a>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-mono text-xs tracking-[0.2em] text-gold uppercase mb-6">
              CONTACT
            </h3>
            <div className="space-y-3 font-sans text-sm text-bone/60">
              <p>
                <a href="mailto:atelier@precieuse.pt" className="hover:text-gold transition-colors">
                  atelier@precieuse.pt
                </a>
              </p>
              <p>
                <a href="tel:+351912345678" className="hover:text-gold transition-colors">
                  +351 912 345 678
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span>WhatsApp 7/7</span>
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-mono text-xs tracking-[0.2em] text-gold uppercase mb-6">
              NAVIGATION
            </h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-3 font-sans text-sm text-bone/60">
                <li>
                  <a href="#" className="hover:text-gold transition-colors">Collection</a>
                </li>
                <li>
                  <a href="#" className="hover:text-gold transition-colors">Sur-mesure</a>
                </li>
                <li>
                  <a href="#" className="hover:text-gold transition-colors">Savoir-faire</a>
                </li>
                <li>
                  <a href="#" className="hover:text-gold transition-colors">Journal</a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-mono text-xs tracking-[0.2em] text-gold uppercase mb-6">
              INFORMATIONS
            </h3>
            <ul className="space-y-3 font-sans text-sm text-bone/60">
              <li>
                <a href="#" className="hover:text-gold transition-colors">Mentions légales</a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition-colors">Politique de confidentialité</a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition-colors">CGV</a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition-colors">Livraison & Retours</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-bone/10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="font-mono text-xs text-bone/40 tracking-wider">
              © 2025 PRÉCIEUSE. TOUS DROITS RÉSERVÉS.
            </p>
            <div className="flex items-center gap-6 font-mono text-[10px] text-bone/30 tracking-wider">
              <span>RJC CERTIFIED</span>
              <span>·</span>
              <span>GIA DIAMONDS</span>
              <span>·</span>
              <span>MADE IN PORTUGAL</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
