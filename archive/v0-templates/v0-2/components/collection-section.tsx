'use client'

import { motion } from 'framer-motion'
import { WatercolorBlob, FloralDivider } from '@/components/decorations'

const rings = [
  { 
    id: 1, 
    name: 'Aurore', 
    description: 'Bague solitaire en or rose',
    color: '#BD0762',
    accentColor: '#DAC8C8'
  },
  { 
    id: 2, 
    name: 'Céleste', 
    description: 'Bague pavée en or jaune',
    color: '#B8C4A6',
    accentColor: '#C9A961'
  },
  { 
    id: 3, 
    name: 'Étoile', 
    description: 'Bague trilogie en or blanc',
    color: '#DAC8C8',
    accentColor: '#BD0762'
  },
  { 
    id: 4, 
    name: 'Lumière', 
    description: 'Bague marquise en or rose',
    color: '#C9A961',
    accentColor: '#B8C4A6'
  },
  { 
    id: 5, 
    name: 'Songe', 
    description: 'Bague entrelacée en or jaune',
    color: '#BD0762',
    accentColor: '#C9A961'
  },
]

function RingCard({ ring, index }: { ring: typeof rings[0]; index: number }) {
  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="relative aspect-square overflow-hidden">
        {/* Watercolor blob background */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="w-4/5 h-4/5 rounded-full opacity-40"
            style={{ backgroundColor: ring.color }}
            initial={{ filter: 'blur(30px)' }}
            whileHover={{ filter: 'blur(40px)', scale: 1.1 }}
            transition={{ duration: 0.4 }}
          />
        </div>
        
        {/* Ring illustration */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <motion.svg 
            viewBox="0 0 100 100" 
            className="w-3/5 h-3/5"
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            {/* Ring band */}
            <ellipse cx="50" cy="60" rx="30" ry="12" fill="none" stroke="#C9A961" strokeWidth="4" />
            <ellipse cx="50" cy="60" rx="30" ry="12" fill="none" stroke="#F8F1EA" strokeWidth="1.5" opacity="0.4" />
            
            {/* Gem setting */}
            <ellipse cx="50" cy="48" rx="4" ry="3" fill="none" stroke="#C9A961" strokeWidth="1" />
            
            {/* Center stone */}
            <circle cx="50" cy="38" r="10" fill={ring.color} opacity="0.9" />
            <circle cx="50" cy="38" r="7" fill="none" stroke="#F8F1EA" strokeWidth="0.3" opacity="0.5" />
            <path d="M46 36 L50 33 L54 36 L52 40 L48 40 Z" fill="#F8F1EA" opacity="0.25" />
            
            {/* Small accent stones */}
            <circle cx="42" cy="45" r="2" fill={ring.accentColor} opacity="0.8" />
            <circle cx="58" cy="45" r="2" fill={ring.accentColor} opacity="0.8" />
          </motion.svg>
        </div>
        
        {/* Silk texture overlay on hover */}
        <motion.div
          className="absolute inset-0 silk-texture opacity-0 group-hover:opacity-30 transition-opacity duration-500"
          aria-hidden="true"
        />
      </div>
      
      {/* Text content */}
      <div className="mt-6 text-center">
        <h3 className="font-[var(--font-playfair)] text-xl italic text-[#2A1F1A] relative inline-block">
          {ring.name}
          {/* Underline animation */}
          <motion.span
            className="absolute bottom-0 left-0 h-px bg-[#BD0762]"
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
          />
        </h3>
        <p className="mt-2 text-sm text-[#5A4F4A] font-[var(--font-cormorant)]">
          {ring.description}
        </p>
      </div>
    </motion.div>
  )
}

export function CollectionSection() {
  return (
    <section id="collections" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Soft pink silk background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F8F1EA] via-[#DAC8C8]/20 to-[#F8F1EA]" />
      <div className="absolute inset-0 silk-texture opacity-20" aria-hidden="true" />
      
      {/* Watercolor accents */}
      <WatercolorBlob 
        className="top-0 left-0 w-96 h-96 -translate-x-1/2"
        color="#DAC8C8"
      />
      <WatercolorBlob 
        className="bottom-0 right-0 w-80 h-80 translate-x-1/3"
        color="#B8C4A6"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <FloralDivider className="mb-8" />
          <h2 className="font-[var(--font-playfair)] text-3xl sm:text-4xl lg:text-5xl text-[#2A1F1A]">
            Nos Créations
          </h2>
          <p className="mt-4 text-lg text-[#5A4F4A] font-[var(--font-cormorant)] max-w-2xl mx-auto">
            Cinq pièces uniques, façonnées avec amour dans notre atelier lisboète
          </p>
        </motion.div>

        {/* Rings grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
          {rings.map((ring, index) => (
            <RingCard key={ring.id} ring={ring} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a 
            href="#"
            className="inline-flex items-center gap-2 text-[#BD0762] font-[var(--font-inter)] text-sm tracking-widest uppercase hover:text-[#9a0550] transition-colors"
          >
            Voir toute la collection
            <span aria-hidden="true">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
