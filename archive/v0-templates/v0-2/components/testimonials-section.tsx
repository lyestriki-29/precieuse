'use client'

import { motion } from 'framer-motion'
import { FloralDivider } from '@/components/decorations'

const testimonials = [
  {
    id: 1,
    quote: "Ma bague de fiançailles est exactement ce que j'avais imaginé. Un vrai bijou d'émotion.",
    author: "Marie-Claire",
    location: "Paris",
    rotation: -2,
  },
  {
    id: 2,
    quote: "L'attention portée aux détails est extraordinaire. Chaque fois que je regarde ma bague, je pense à ce moment.",
    author: "Isabelle",
    location: "Lyon",
    rotation: 1.5,
  },
  {
    id: 3,
    quote: "Un service sur-mesure d'une rare délicatesse. Eméline a su capturer notre histoire.",
    author: "Sophie & Thomas",
    location: "Bordeaux",
    rotation: -1,
  },
]

function TestimonialCard({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 30, rotate: 0 }}
      whileInView={{ opacity: 1, y: 0, rotate: testimonial.rotation }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      {/* Paper card effect */}
      <div className="relative bg-[#F8F1EA] p-8 paper-grain shadow-sm">
        {/* Watercolor stain decoration */}
        <div 
          className="absolute -top-4 -right-4 w-16 h-16 rounded-full opacity-20"
          style={{ 
            background: index === 0 ? '#BD0762' : index === 1 ? '#B8C4A6' : '#C9A961',
            filter: 'blur(15px)',
          }}
          aria-hidden="true"
        />
        
        {/* Corner fold effect */}
        <div 
          className="absolute top-0 right-0 w-8 h-8"
          style={{
            background: 'linear-gradient(135deg, transparent 50%, #DAC8C8 50%)',
          }}
          aria-hidden="true"
        />
        
        {/* Quote mark */}
        <span 
          className="absolute top-4 left-4 font-[var(--font-playfair)] text-5xl text-[#DAC8C8] leading-none"
          aria-hidden="true"
        >
          &ldquo;
        </span>
        
        {/* Quote text */}
        <blockquote className="relative z-10 pt-6">
          <p className="font-[var(--font-cormorant)] text-lg text-[#2A1F1A] italic leading-relaxed">
            {testimonial.quote}
          </p>
        </blockquote>
        
        {/* Author */}
        <footer className="mt-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-[#DAC8C8]" />
          <div className="text-right">
            <cite className="not-italic font-[var(--font-script)] text-xl text-[#BD0762]">
              {testimonial.author}
            </cite>
            <p className="text-xs text-[#5A4F4A] tracking-wider uppercase font-[var(--font-inter)] mt-1">
              {testimonial.location}
            </p>
          </div>
        </footer>
      </div>
    </motion.div>
  )
}

export function TestimonialsSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-[#F8F1EA] overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Elles témoignent
          </h2>
          <p className="mt-4 text-lg text-[#5A4F4A] font-[var(--font-cormorant)]">
            Les histoires de celles qui portent nos créations
          </p>
        </motion.div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
