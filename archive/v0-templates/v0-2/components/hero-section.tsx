'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { WatercolorBlob, BotanicalDecoration, FallingPetals } from '@/components/decorations'

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#F8F1EA]">
      {/* Background watercolor washes */}
      <WatercolorBlob 
        className="top-0 right-0 w-[600px] h-[600px] -translate-y-1/4 translate-x-1/4"
        color="#DAC8C8"
      />
      <WatercolorBlob 
        className="bottom-0 left-0 w-[500px] h-[500px] translate-y-1/4 -translate-x-1/4"
        color="#B8C4A6"
      />
      
      {/* Falling petals - desktop only */}
      <div className="hidden lg:block">
        <FallingPetals count={5} />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[80vh]">
          {/* Left - Ring Image with Peony */}
          <motion.div
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Peony decoration behind ring */}
            <BotanicalDecoration 
              variant="peony" 
              className="absolute -top-16 -left-12 w-48 h-48 lg:w-64 lg:h-64 opacity-60"
            />
            
            {/* Ring placeholder - elegant frame */}
            <div className="relative mx-auto max-w-md lg:max-w-lg">
              <div className="aspect-square relative">
                {/* Watercolor backdrop for ring */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-4/5 h-4/5 rounded-full bg-gradient-to-br from-[#DAC8C8]/40 to-[#F8F1EA]/20 blur-2xl" />
                </div>
                
                {/* Ring illustration */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg viewBox="0 0 200 200" className="w-3/4 h-3/4">
                    {/* Ring band */}
                    <ellipse cx="100" cy="120" rx="60" ry="25" fill="none" stroke="#C9A961" strokeWidth="8" />
                    <ellipse cx="100" cy="120" rx="60" ry="25" fill="none" stroke="#F8F1EA" strokeWidth="3" opacity="0.5" />
                    
                    {/* Gem setting */}
                    <ellipse cx="100" cy="95" rx="8" ry="6" fill="none" stroke="#C9A961" strokeWidth="2" />
                    
                    {/* Center stone */}
                    <circle cx="100" cy="70" r="18" fill="#BD0762" opacity="0.8" />
                    <circle cx="100" cy="70" r="14" fill="none" stroke="#F8F1EA" strokeWidth="0.5" opacity="0.6" />
                    <path d="M92 65 L100 60 L108 65 L105 75 L95 75 Z" fill="#F8F1EA" opacity="0.3" />
                    
                    {/* Small accent stones */}
                    <circle cx="85" cy="85" r="4" fill="#DAC8C8" />
                    <circle cx="115" cy="85" r="4" fill="#DAC8C8" />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Bottom botanical decoration */}
            <BotanicalDecoration 
              variant="leaves" 
              className="absolute -bottom-8 -right-8 w-32 h-48 opacity-40"
              flip
            />
          </motion.div>

          {/* Right - Text Content */}
          <motion.div
            className="order-1 lg:order-2 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="font-[var(--font-playfair)] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-[#2A1F1A] leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="block">Chaque bijou</span>
              <span className="block">raconte une histoire.</span>
              <span className="block text-[#BD0762] italic">La vôtre.</span>
            </motion.h2>
            
            <motion.p
              className="mt-8 text-lg sm:text-xl text-[#5A4F4A] font-[var(--font-cormorant)] max-w-lg mx-auto lg:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Joaillerie artisanale, façonnée à la main au Portugal.
            </motion.p>

            <motion.div
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <Button 
                size="lg"
                className="bg-[#BD0762] hover:bg-[#9a0550] text-[#F8F1EA] rounded-none px-8 py-6 text-sm tracking-widest uppercase font-[var(--font-inter)]"
              >
                Découvrir les Collections
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-[#2A1F1A] text-[#2A1F1A] hover:bg-[#2A1F1A] hover:text-[#F8F1EA] rounded-none px-8 py-6 text-sm tracking-widest uppercase font-[var(--font-inter)]"
              >
                Créer Sur-Mesure
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        animate={!prefersReducedMotion ? { y: [0, 8, 0] } : {}}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-[#2A1F1A]/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-[#2A1F1A]/50 rounded-full" />
        </div>
      </motion.div>
    </section>
  )
}
