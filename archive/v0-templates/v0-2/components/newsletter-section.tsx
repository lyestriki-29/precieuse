'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { BotanicalDecoration, FloralDivider } from '@/components/decorations'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      setEmail('')
    }
  }

  return (
    <section className="relative py-24 lg:py-32 bg-[#F8F1EA] overflow-hidden">
      {/* Botanical frame */}
      <BotanicalDecoration 
        variant="branch" 
        className="absolute top-8 left-1/4 w-48 h-24 opacity-20"
      />
      <BotanicalDecoration 
        variant="branch" 
        className="absolute bottom-8 right-1/4 w-40 h-20 opacity-15"
        flip
      />
      <BotanicalDecoration 
        variant="peony" 
        className="absolute top-1/3 left-8 w-24 h-24 opacity-20"
      />
      <BotanicalDecoration 
        variant="rose" 
        className="absolute bottom-1/3 right-8 w-20 h-20 opacity-15"
      />

      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FloralDivider className="mb-8" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-[var(--font-playfair)] text-3xl sm:text-4xl text-[#2A1F1A]">
            Confidences d&apos;atelier
          </h2>
          
          <p className="mt-4 text-lg text-[#5A4F4A] font-[var(--font-cormorant)]">
            Recevez nos confidences d&apos;atelier, une fois par mois.
          </p>
          
          {isSubmitted ? (
            <motion.div
              className="mt-8 p-6 border border-[#B8C4A6] bg-[#B8C4A6]/10"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <p className="font-[var(--font-cormorant)] text-lg text-[#2A1F1A]">
                Merci de votre confiance. À très bientôt dans votre boîte aux lettres.
              </p>
              <span className="block mt-3 font-[var(--font-script)] text-xl text-[#BD0762]">
                Eméline
              </span>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8">
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Votre adresse email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 bg-white/50 border-[#DAC8C8] text-[#2A1F1A] placeholder:text-[#5A4F4A]/60 rounded-none px-4 py-3 font-[var(--font-cormorant)]"
                />
                <Button 
                  type="submit"
                  className="bg-[#BD0762] hover:bg-[#9a0550] text-[#F8F1EA] rounded-none px-8 py-3 text-xs tracking-widest uppercase font-[var(--font-inter)]"
                >
                  S&apos;inscrire
                </Button>
              </div>
              <p className="mt-4 text-xs text-[#5A4F4A] font-[var(--font-inter)]">
                Pas de spam, promis. Désinscription en un clic.
              </p>
            </form>
          )}
        </motion.div>
        
        <FloralDivider className="mt-12" />
      </div>
    </section>
  )
}
