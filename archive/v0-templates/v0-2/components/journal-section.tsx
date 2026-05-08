'use client'

import { motion } from 'framer-motion'
import { WatercolorBlob, FloralDivider, BotanicalDecoration } from '@/components/decorations'

export function JournalSection() {
  return (
    <section id="journal" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F8F1EA] via-[#DAC8C8]/10 to-[#F8F1EA]" />
      <WatercolorBlob 
        className="top-0 right-0 w-64 h-64 translate-x-1/3"
        color="#DAC8C8"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <FloralDivider className="mb-8" />
          <h2 className="font-[var(--font-playfair)] text-3xl sm:text-4xl lg:text-5xl text-[#2A1F1A]">
            Le Journal
          </h2>
        </motion.div>

        {/* Magazine clipping style article teaser */}
        <motion.article
          className="relative max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative bg-[#F8F1EA] p-8 lg:p-12 paper-grain border border-[#DAC8C8]/30">
            {/* Corner decorations */}
            <BotanicalDecoration 
              variant="leaves" 
              className="absolute -top-6 -left-6 w-20 h-32 opacity-30"
            />
            <BotanicalDecoration 
              variant="leaves" 
              className="absolute -bottom-6 -right-6 w-16 h-24 opacity-25"
              flip
            />
            
            {/* Category tag */}
            <span className="inline-block text-xs text-[#BD0762] tracking-widest uppercase font-[var(--font-inter)] mb-4">
              Guide
            </span>
            
            {/* Article title */}
            <h3 className="font-[var(--font-playfair)] text-2xl sm:text-3xl text-[#2A1F1A] leading-snug">
              Comment choisir sa taille de doigt
            </h3>
            
            {/* Decorative line */}
            <div className="my-6 flex items-center gap-4">
              <div className="h-px flex-1 bg-[#DAC8C8]" />
              <svg width="16" height="16" viewBox="0 0 16 16" className="text-[#C9A961]" aria-hidden="true">
                <circle cx="8" cy="8" r="6" fill="none" stroke="currentColor" strokeWidth="1" />
                <circle cx="8" cy="8" r="2" fill="currentColor" />
              </svg>
              <div className="h-px flex-1 bg-[#DAC8C8]" />
            </div>
            
            {/* Excerpt */}
            <p className="font-[var(--font-cormorant)] text-lg text-[#5A4F4A] leading-relaxed">
              Trouver la bague parfaite commence par connaître sa taille exacte. Découvrez nos astuces d&apos;atelier pour mesurer votre doigt avec précision, et les secrets pour un confort optimal tout au long de la journée...
            </p>
            
            {/* Read more link */}
            <motion.div
              className="mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <a 
                href="#"
                className="inline-flex items-center gap-2 text-[#BD0762] font-[var(--font-inter)] text-sm tracking-widest uppercase hover:text-[#9a0550] transition-colors group"
              >
                Lire l&apos;article
                <span 
                  className="inline-block transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  →
                </span>
              </a>
            </motion.div>
          </div>
        </motion.article>
      </div>
    </section>
  )
}
