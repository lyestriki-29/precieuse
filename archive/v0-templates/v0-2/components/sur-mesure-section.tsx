'use client'

import { motion } from 'framer-motion'
import { BotanicalDecoration, FloralDivider } from '@/components/decorations'

const steps = [
  {
    id: 1,
    title: 'L\'Envie',
    description: 'Nous écoutons votre histoire, vos rêves',
    icon: (
      <svg viewBox="0 0 60 60" className="w-full h-full">
        {/* Lightbulb/heart idea */}
        <circle cx="30" cy="25" r="12" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M24 37 L24 42 L36 42 L36 37" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M27 42 L27 46 L33 46 L33 42" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M30 15 L30 20" stroke="currentColor" strokeWidth="1" />
        <circle cx="30" cy="25" r="3" fill="currentColor" opacity="0.3" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Le Dessin',
    description: 'Votre bijou prend forme sur papier',
    icon: (
      <svg viewBox="0 0 60 60" className="w-full h-full">
        {/* Pencil sketch */}
        <path d="M15 45 L40 20 L45 25 L20 50 L12 52 Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M38 22 L43 27" stroke="currentColor" strokeWidth="1.5" />
        <path d="M20 40 Q25 42 22 48" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'La Cire',
    description: 'Le modèle en cire sculpté à la main',
    icon: (
      <svg viewBox="0 0 60 60" className="w-full h-full">
        {/* Wax model/candle */}
        <ellipse cx="30" cy="45" rx="12" ry="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M18 45 L18 25 Q18 15 30 15 Q42 15 42 25 L42 45" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M30 15 L30 10 Q28 8 30 5 Q32 8 30 10" fill="none" stroke="currentColor" strokeWidth="1" />
        <ellipse cx="30" cy="30" rx="5" ry="8" fill="currentColor" opacity="0.2" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'La Fonte',
    description: 'L\'or prend vie dans le moule',
    icon: (
      <svg viewBox="0 0 60 60" className="w-full h-full">
        {/* Crucible pouring */}
        <path d="M15 20 L20 40 L40 40 L45 20 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 18 L48 18" stroke="currentColor" strokeWidth="1.5" />
        <path d="M45 25 Q55 30 50 50" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
        <ellipse cx="30" cy="32" rx="8" ry="4" fill="currentColor" opacity="0.3" />
      </svg>
    ),
  },
  {
    id: 5,
    title: 'Le Sertissage',
    description: 'Les pierres trouvent leur écrin',
    icon: (
      <svg viewBox="0 0 60 60" className="w-full h-full">
        {/* Ring with gem */}
        <ellipse cx="30" cy="38" rx="15" ry="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M22 35 Q30 20 38 35" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <polygon points="30,18 25,25 30,30 35,25" fill="currentColor" opacity="0.4" stroke="currentColor" strokeWidth="1" />
        <circle cx="30" cy="24" r="2" fill="none" stroke="currentColor" strokeWidth="0.5" />
      </svg>
    ),
  },
]

export function SurMesureSection() {
  return (
    <section id="sur-mesure" className="relative py-24 lg:py-32 bg-[#F8F1EA] overflow-hidden">
      {/* Botanical decorations */}
      <BotanicalDecoration 
        variant="rose" 
        className="absolute top-16 left-8 w-20 h-20 lg:w-28 lg:h-28 opacity-30"
      />
      <BotanicalDecoration 
        variant="rose" 
        className="absolute bottom-16 right-8 w-16 h-16 lg:w-24 lg:h-24 opacity-25"
        flip
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <FloralDivider className="mb-8" />
          <h2 className="font-[var(--font-playfair)] text-3xl sm:text-4xl lg:text-5xl text-[#2A1F1A]">
            De l&apos;envie au bijou
          </h2>
          <p className="mt-4 text-lg text-[#5A4F4A] font-[var(--font-cormorant)] max-w-2xl mx-auto">
            Cinq étapes pour donner vie à votre création unique
          </p>
        </motion.div>

        {/* Timeline - Desktop */}
        <div className="hidden lg:block">
          {/* Connecting line */}
          <div className="absolute top-1/2 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-[#DAC8C8] to-transparent" aria-hidden="true" />
          
          <div className="grid grid-cols-5 gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                className="relative text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                {/* Icon */}
                <div className="relative mx-auto w-16 h-16 mb-6">
                  <div className="absolute inset-0 rounded-full bg-[#F8F1EA] border border-[#DAC8C8]" />
                  <div className="absolute inset-2 text-[#C9A961]">
                    {step.icon}
                  </div>
                </div>
                
                {/* Step number */}
                <span className="text-xs text-[#BD0762] font-[var(--font-inter)] tracking-widest">
                  0{step.id}
                </span>
                
                {/* Title */}
                <h3 className="mt-2 font-[var(--font-playfair)] text-lg text-[#2A1F1A] italic">
                  {step.title}
                </h3>
                
                {/* Description */}
                <p className="mt-2 text-sm text-[#5A4F4A] font-[var(--font-cormorant)]">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline - Mobile (vertical) */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              className="relative flex items-start gap-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Vertical line */}
              {index < steps.length - 1 && (
                <div 
                  className="absolute left-7 top-16 w-px h-full bg-gradient-to-b from-[#DAC8C8] to-transparent"
                  aria-hidden="true"
                />
              )}
              
              {/* Icon */}
              <div className="relative flex-shrink-0 w-14 h-14">
                <div className="absolute inset-0 rounded-full bg-[#F8F1EA] border border-[#DAC8C8]" />
                <div className="absolute inset-2 text-[#C9A961]">
                  {step.icon}
                </div>
              </div>
              
              {/* Content */}
              <div className="pt-1">
                <span className="text-xs text-[#BD0762] font-[var(--font-inter)] tracking-widest">
                  0{step.id}
                </span>
                <h3 className="mt-1 font-[var(--font-playfair)] text-lg text-[#2A1F1A] italic">
                  {step.title}
                </h3>
                <p className="mt-1 text-sm text-[#5A4F4A] font-[var(--font-cormorant)]">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <a 
            href="#"
            className="inline-flex items-center justify-center bg-[#BD0762] hover:bg-[#9a0550] text-[#F8F1EA] px-8 py-4 text-sm tracking-widest uppercase font-[var(--font-inter)] transition-colors"
          >
            Commencer votre projet
          </a>
        </motion.div>
      </div>
    </section>
  )
}
