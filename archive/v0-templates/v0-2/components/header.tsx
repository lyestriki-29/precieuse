'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

const navLinks = [
  { href: '#collections', label: 'Collections' },
  { href: '#sur-mesure', label: 'Sur-Mesure' },
  { href: '#atelier', label: 'L\'Atelier' },
  { href: '#journal', label: 'Journal' },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F8F1EA]/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="relative z-10">
            <h1 className="font-[var(--font-playfair)] text-2xl sm:text-3xl tracking-wide text-[#2A1F1A]">
              Précieuse
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#2A1F1A] text-sm tracking-widest uppercase hover:text-[#BD0762] transition-colors duration-300 font-[var(--font-inter)]"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              className="bg-[#BD0762] hover:bg-[#9a0550] text-[#F8F1EA] rounded-none px-6 py-2 text-xs tracking-widest uppercase font-[var(--font-inter)]"
            >
              Contact
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[#2A1F1A]"
            aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#F8F1EA] border-t border-[#DAC8C8]"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-[#2A1F1A] text-sm tracking-widest uppercase py-2 font-[var(--font-inter)]"
                >
                  {link.label}
                </Link>
              ))}
              <Button 
                className="w-full bg-[#BD0762] hover:bg-[#9a0550] text-[#F8F1EA] rounded-none px-6 py-2 text-xs tracking-widest uppercase mt-4 font-[var(--font-inter)]"
              >
                Contact
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
