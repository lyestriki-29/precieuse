"use client"

import { useState, useEffect } from "react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-sm py-4" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="px-8 md:px-16 lg:px-20 flex items-center justify-between">
        <a href="/" className="font-serif italic text-xl text-foreground">
          Précieuse
        </a>
        
        <nav className="hidden md:flex items-center gap-8">
          <a 
            href="#collection" 
            className="text-xs tracking-widest uppercase text-foreground/70 hover:text-foreground transition-colors duration-300"
          >
            Collection
          </a>
          <a 
            href="#contact" 
            className="text-xs tracking-widest uppercase text-foreground/70 hover:text-foreground transition-colors duration-300"
          >
            Sur-Mesure
          </a>
          <a 
            href="#contact" 
            className="text-xs tracking-widest uppercase text-foreground/70 hover:text-foreground transition-colors duration-300"
          >
            Contact
          </a>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-foreground"
          aria-label="Menu"
        >
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1.5"
          >
            <line x1="4" y1="8" x2="20" y2="8" />
            <line x1="4" y1="16" x2="20" y2="16" />
          </svg>
        </button>
      </div>
    </header>
  )
}
