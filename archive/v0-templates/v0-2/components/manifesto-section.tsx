'use client'

import { motion } from 'framer-motion'
import { BotanicalDecoration, FloralDivider } from '@/components/decorations'

export function ManifestoSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-[#F8F1EA] overflow-hidden">
      {/* Left botanical decoration */}
      <BotanicalDecoration 
        variant="leaves" 
        className="absolute left-0 top-1/4 w-24 h-36 lg:w-32 lg:h-48 opacity-40"
      />
      
      {/* Right botanical decoration */}
      <BotanicalDecoration 
        variant="leaves" 
        className="absolute right-0 top-1/3 w-24 h-36 lg:w-32 lg:h-48 opacity-40"
        flip
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FloralDivider className="mb-12" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          {/* Herbarium-style frame */}
          <div className="relative border border-[#DAC8C8]/50 p-8 sm:p-12 lg:p-16 paper-grain">
            {/* Corner decorations */}
            <div className="absolute top-4 left-4 w-8 h-8 border-l border-t border-[#C9A961]/40" aria-hidden="true" />
            <div className="absolute top-4 right-4 w-8 h-8 border-r border-t border-[#C9A961]/40" aria-hidden="true" />
            <div className="absolute bottom-4 left-4 w-8 h-8 border-l border-b border-[#C9A961]/40" aria-hidden="true" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-r border-b border-[#C9A961]/40" aria-hidden="true" />
            
            <p className="font-[var(--font-playfair)] text-2xl sm:text-3xl lg:text-4xl text-[#2A1F1A] leading-relaxed italic">
              &ldquo;Aux bijoux qui marquent,
              <br />
              qui protègent,
              <br />
              qui célèbrent.&rdquo;
            </p>
            
            <div className="mt-8">
              <span className="font-[var(--font-script)] text-2xl text-[#BD0762]">
                Eméline
              </span>
              <p className="mt-2 text-sm text-[#5A4F4A] tracking-widest uppercase font-[var(--font-inter)]">
                Fondatrice
              </p>
            </div>
          </div>
        </motion.div>
        
        <FloralDivider className="mt-12" />
      </div>
      
      {/* Bottom decorative branches */}
      <BotanicalDecoration 
        variant="branch" 
        className="absolute bottom-8 left-1/4 w-40 h-20 opacity-20"
      />
      <BotanicalDecoration 
        variant="branch" 
        className="absolute bottom-12 right-1/4 w-32 h-16 opacity-15"
        flip
      />
    </section>
  )
}
