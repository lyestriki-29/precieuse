'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Instagram, MessageCircle } from 'lucide-react'

const footerLinks = {
  boutique: [
    { label: 'Collections', href: '#collections' },
    { label: 'Sur-Mesure', href: '#sur-mesure' },
    { label: 'Guide des Tailles', href: '#' },
  ],
  maison: [
    { label: 'Notre Histoire', href: '#' },
    { label: 'L\'Atelier', href: '#atelier' },
    { label: 'Journal', href: '#journal' },
  ],
  legal: [
    { label: 'Mentions Légales', href: '#' },
    { label: 'CGV', href: '#' },
    { label: 'Confidentialité', href: '#' },
  ],
}

// Instagram preview thumbnails (watercolor-style placeholders)
const instagramPreviews = [
  { id: 1, color: '#DAC8C8' },
  { id: 2, color: '#B8C4A6' },
  { id: 3, color: '#C9A961' },
  { id: 4, color: '#BD0762' },
]

export function Footer() {
  return (
    <footer className="relative bg-[#DAC8C8]/30 overflow-hidden">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <h3 className="font-[var(--font-playfair)] text-2xl text-[#2A1F1A]">
                Précieuse
              </h3>
            </Link>
            <p className="mt-4 text-sm text-[#5A4F4A] font-[var(--font-cormorant)] leading-relaxed">
              Joaillerie artisanale française, façonnée à la main dans notre atelier au Portugal.
            </p>
            
            {/* Signature */}
            <div className="mt-6">
              <span className="font-[var(--font-script)] text-2xl text-[#BD0762]">
                Eméline
              </span>
              <p className="text-xs text-[#5A4F4A] tracking-wider uppercase font-[var(--font-inter)] mt-1">
                Fondatrice
              </p>
            </div>
          </div>

          {/* Links columns */}
          <div>
            <h4 className="text-xs text-[#2A1F1A] tracking-widest uppercase font-[var(--font-inter)] mb-4">
              Boutique
            </h4>
            <ul className="space-y-3">
              {footerLinks.boutique.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="text-sm text-[#5A4F4A] hover:text-[#BD0762] transition-colors font-[var(--font-cormorant)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs text-[#2A1F1A] tracking-widest uppercase font-[var(--font-inter)] mb-4">
              La Maison
            </h4>
            <ul className="space-y-3">
              {footerLinks.maison.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="text-sm text-[#5A4F4A] hover:text-[#BD0762] transition-colors font-[var(--font-cormorant)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="text-xs text-[#2A1F1A] tracking-widest uppercase font-[var(--font-inter)] mb-4">
              Nous suivre
            </h4>
            
            {/* Instagram preview grid */}
            <div className="grid grid-cols-4 gap-2 mb-6">
              {instagramPreviews.map((item, index) => (
                <motion.a
                  key={item.id}
                  href="#"
                  className="aspect-square relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                  aria-label={`Instagram post ${index + 1}`}
                >
                  <div 
                    className="absolute inset-0"
                    style={{ backgroundColor: item.color, opacity: 0.6 }}
                  />
                  <div 
                    className="absolute inset-0 flex items-center justify-center"
                    style={{ 
                      background: `radial-gradient(circle, ${item.color}40 0%, transparent 70%)` 
                    }}
                  >
                    <div 
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                  </div>
                </motion.a>
              ))}
            </div>
            
            {/* Social buttons */}
            <div className="flex gap-3">
              <a
                href="#"
                className="flex items-center gap-2 px-4 py-2 bg-[#F8F1EA] hover:bg-[#DAC8C8] transition-colors text-[#2A1F1A]"
                aria-label="Suivez-nous sur Instagram"
              >
                <Instagram size={16} />
                <span className="text-xs tracking-wider uppercase font-[var(--font-inter)]">
                  Instagram
                </span>
              </a>
              <a
                href="#"
                className="flex items-center gap-2 px-4 py-2 bg-[#25D366] hover:bg-[#20bd5a] transition-colors text-white"
                aria-label="Contactez-nous sur WhatsApp"
              >
                <MessageCircle size={16} />
                <span className="text-xs tracking-wider uppercase font-[var(--font-inter)]">
                  WhatsApp
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#DAC8C8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-[#5A4F4A] font-[var(--font-inter)]">
              © {new Date().getFullYear()} Précieuse. Tous droits réservés.
            </p>
            <div className="flex gap-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-xs text-[#5A4F4A] hover:text-[#BD0762] transition-colors font-[var(--font-inter)]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
