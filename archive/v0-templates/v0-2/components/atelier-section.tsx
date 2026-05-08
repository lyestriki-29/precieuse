'use client'

import { motion } from 'framer-motion'
import { WatercolorBlob, FloralDivider } from '@/components/decorations'

export function AtelierSection() {
  return (
    <section id="atelier" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Sage green watercolor wash overlay */}
      <div className="absolute inset-0 bg-[#F8F1EA]" />
      <WatercolorBlob 
        className="absolute inset-0 w-full h-full"
        color="#B8C4A6"
        animate={false}
      />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image placeholder - hands working */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              {/* Sage watercolor overlay */}
              <div className="absolute inset-0 bg-[#B8C4A6]/10 z-10 mix-blend-multiply" />
              
              {/* Illustration of artisan hands */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#DAC8C8]/30 to-[#F8F1EA]">
                <svg viewBox="0 0 300 400" className="w-full h-full p-8">
                  {/* Workbench surface */}
                  <rect x="30" y="280" width="240" height="8" fill="#C9A961" opacity="0.4" rx="2" />
                  
                  {/* Left hand */}
                  <g opacity="0.6">
                    <path d="M60 250 Q50 200 70 180 Q80 165 95 175 Q100 160 115 170 Q120 155 135 165 Q140 150 155 165 Q175 155 170 180 Q180 200 160 250 Q130 270 60 250" 
                      fill="none" stroke="#5A4F4A" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M95 180 L95 220" stroke="#5A4F4A" strokeWidth="0.5" />
                    <path d="M115 175 L115 215" stroke="#5A4F4A" strokeWidth="0.5" />
                    <path d="M135 170 L135 210" stroke="#5A4F4A" strokeWidth="0.5" />
                    <path d="M155 170 L150 205" stroke="#5A4F4A" strokeWidth="0.5" />
                  </g>
                  
                  {/* Right hand holding tool */}
                  <g opacity="0.6">
                    <path d="M200 220 Q180 180 195 160 Q200 145 215 155 Q220 140 235 150 Q240 135 255 150 Q275 145 265 175 Q280 200 250 240 Q220 260 200 220" 
                      fill="none" stroke="#5A4F4A" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M215 160 L215 195" stroke="#5A4F4A" strokeWidth="0.5" />
                    <path d="M235 155 L230 190" stroke="#5A4F4A" strokeWidth="0.5" />
                    <path d="M255 155 L245 185" stroke="#5A4F4A" strokeWidth="0.5" />
                  </g>
                  
                  {/* Tool/burnisher in hand */}
                  <path d="M230 170 L200 260 L195 258 L225 168" fill="#C9A961" opacity="0.5" />
                  
                  {/* Ring being worked on */}
                  <g transform="translate(120, 240)">
                    <ellipse cx="0" cy="0" rx="25" ry="10" fill="none" stroke="#C9A961" strokeWidth="3" />
                    <circle cx="0" cy="-15" r="8" fill="#BD0762" opacity="0.6" />
                  </g>
                  
                  {/* Scattered tools */}
                  <rect x="50" y="270" width="30" height="3" fill="#5A4F4A" opacity="0.3" rx="1" transform="rotate(-5 50 270)" />
                  <circle cx="240" cy="268" r="4" fill="#C9A961" opacity="0.4" />
                  <circle cx="255" cy="272" r="3" fill="#BD0762" opacity="0.3" />
                </svg>
              </div>
              
              {/* Frame effect */}
              <div className="absolute inset-4 border border-[#C9A961]/30 pointer-events-none" />
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <FloralDivider className="mb-8 justify-start" />
            
            <h2 className="font-[var(--font-playfair)] text-3xl sm:text-4xl lg:text-5xl text-[#2A1F1A] leading-tight">
              Au cœur de Lisbonne,
              <br />
              <span className="italic text-[#BD0762]">dans notre atelier</span>
            </h2>
            
            <div className="mt-8 space-y-6 text-[#5A4F4A] font-[var(--font-cormorant)] text-lg leading-relaxed">
              <p>
                Dans les ruelles pavées de l&apos;Alfama, notre atelier perpétue les gestes ancestraux de la joaillerie portugaise. Chaque pièce naît ici, façonnée avec patience et passion.
              </p>
              <p>
                Nos artisans, héritiers d&apos;un savoir-faire séculaire, transforment l&apos;or et les pierres précieuses en bijoux uniques. Un travail minutieux où chaque détail compte.
              </p>
            </div>
            
            <motion.div
              className="mt-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <a 
                href="#"
                className="inline-flex items-center gap-2 text-[#BD0762] font-[var(--font-inter)] text-sm tracking-widest uppercase hover:text-[#9a0550] transition-colors"
              >
                Découvrir notre histoire
                <span aria-hidden="true">→</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
