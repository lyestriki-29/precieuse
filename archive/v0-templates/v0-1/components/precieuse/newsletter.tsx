"use client"

import { useState } from "react"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      setEmail("")
    }
  }

  return (
    <section id="contact" className="py-24 md:py-32 px-8 md:px-16 lg:px-20">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="font-serif italic text-3xl md:text-4xl tracking-tight text-foreground mb-4">
          Lettres Rares
        </h2>
        <p className="text-sm text-foreground/60 mb-12">
          Recevoir nos lettres rares.
        </p>

        {isSubmitted ? (
          <p className="text-foreground/70 font-light">
            Merci. Vous recevrez bientôt de nos nouvelles.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Votre adresse email"
              required
              className="w-full bg-transparent border-0 border-b border-foreground/30 py-4 text-center text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-foreground/60 transition-colors duration-300"
            />
            <button
              type="submit"
              className="absolute right-0 top-1/2 -translate-y-1/2 text-sm tracking-widest uppercase text-foreground/60 hover:text-raspberry transition-colors duration-300"
            >
              →
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
