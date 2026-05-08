'use client'

import { motion, useReducedMotion } from 'framer-motion'

// Watercolor blob shape for backgrounds
export function WatercolorBlob({ 
  className = '', 
  color = '#DAC8C8',
  animate = true 
}: { 
  className?: string
  color?: string
  animate?: boolean
}) {
  const prefersReducedMotion = useReducedMotion()
  const shouldAnimate = animate && !prefersReducedMotion

  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 0.6,
        scale: shouldAnimate ? [1, 1.05, 1] : 1,
        rotate: shouldAnimate ? [0, 2, 0] : 0,
      }}
      transition={{
        opacity: { duration: 1 },
        scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
        rotate: { duration: 8, repeat: Infinity, ease: "easeInOut" },
      }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <defs>
          <filter id={`watercolor-${color.replace('#', '')}`}>
            <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="3" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="30" />
            <feGaussianBlur stdDeviation="5" />
          </filter>
        </defs>
        <ellipse
          cx="100"
          cy="100"
          rx="80"
          ry="70"
          fill={color}
          filter={`url(#watercolor-${color.replace('#', '')})`}
          opacity="0.7"
        />
      </svg>
    </motion.div>
  )
}

// Botanical illustration decorations
export function BotanicalDecoration({ 
  variant = 'peony',
  className = '',
  flip = false 
}: { 
  variant?: 'peony' | 'leaves' | 'branch' | 'rose'
  className?: string
  flip?: boolean
}) {
  const prefersReducedMotion = useReducedMotion()

  const illustrations = {
    peony: (
      <svg viewBox="0 0 120 120" className="w-full h-full">
        <g opacity="0.3">
          {/* Peony petals - hand-drawn style */}
          <path d="M60 20 Q40 35 45 55 Q35 45 25 60 Q35 75 55 70 Q45 85 60 100 Q75 85 65 70 Q85 75 95 60 Q85 45 75 55 Q80 35 60 20" 
            fill="none" stroke="#BD0762" strokeWidth="0.5" strokeLinecap="round" />
          <path d="M60 30 Q48 42 52 58 Q42 50 35 62 Q45 72 58 68 Q50 80 60 90 Q70 80 62 68 Q75 72 85 62 Q78 50 68 58 Q72 42 60 30" 
            fill="none" stroke="#DAC8C8" strokeWidth="0.8" strokeLinecap="round" />
          <circle cx="60" cy="60" r="8" fill="none" stroke="#C9A961" strokeWidth="0.5" />
          {/* Stamens */}
          <line x1="60" y1="52" x2="60" y2="45" stroke="#C9A961" strokeWidth="0.3" />
          <line x1="55" y1="54" x2="50" y2="48" stroke="#C9A961" strokeWidth="0.3" />
          <line x1="65" y1="54" x2="70" y2="48" stroke="#C9A961" strokeWidth="0.3" />
        </g>
      </svg>
    ),
    leaves: (
      <svg viewBox="0 0 100 150" className="w-full h-full">
        <g opacity="0.25">
          {/* Delicate leaves */}
          <path d="M50 10 Q30 40 40 80 Q50 100 50 140" fill="none" stroke="#B8C4A6" strokeWidth="0.8" strokeLinecap="round" />
          <path d="M50 30 Q35 35 25 50" fill="none" stroke="#B8C4A6" strokeWidth="0.5" strokeLinecap="round" />
          <path d="M50 50 Q65 55 75 70" fill="none" stroke="#B8C4A6" strokeWidth="0.5" strokeLinecap="round" />
          <path d="M50 70 Q35 75 28 90" fill="none" stroke="#B8C4A6" strokeWidth="0.5" strokeLinecap="round" />
          <path d="M50 90 Q62 95 70 110" fill="none" stroke="#B8C4A6" strokeWidth="0.5" strokeLinecap="round" />
        </g>
      </svg>
    ),
    branch: (
      <svg viewBox="0 0 150 80" className="w-full h-full">
        <g opacity="0.2">
          <path d="M10 40 Q50 30 80 40 Q110 50 140 40" fill="none" stroke="#B8C4A6" strokeWidth="1" strokeLinecap="round" />
          <ellipse cx="30" cy="35" rx="8" ry="5" fill="none" stroke="#B8C4A6" strokeWidth="0.5" transform="rotate(-20 30 35)" />
          <ellipse cx="60" cy="38" rx="10" ry="6" fill="none" stroke="#B8C4A6" strokeWidth="0.5" transform="rotate(10 60 38)" />
          <ellipse cx="95" cy="42" rx="8" ry="5" fill="none" stroke="#B8C4A6" strokeWidth="0.5" transform="rotate(-15 95 42)" />
          <ellipse cx="125" cy="38" rx="9" ry="5" fill="none" stroke="#B8C4A6" strokeWidth="0.5" transform="rotate(5 125 38)" />
        </g>
      </svg>
    ),
    rose: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <g opacity="0.25">
          {/* Rose spiral */}
          <path d="M50 50 Q55 45 52 40 Q48 35 55 32 Q62 30 58 38 Q54 46 60 50 Q66 54 60 58 Q54 62 50 55 Q46 48 42 52 Q38 56 44 60 Q50 64 55 58" 
            fill="none" stroke="#BD0762" strokeWidth="0.5" strokeLinecap="round" />
          {/* Outer petals */}
          <path d="M50 30 Q40 25 35 35 Q30 45 38 50" fill="none" stroke="#DAC8C8" strokeWidth="0.4" strokeLinecap="round" />
          <path d="M65 45 Q75 40 75 50 Q75 60 65 58" fill="none" stroke="#DAC8C8" strokeWidth="0.4" strokeLinecap="round" />
          <path d="M45 65 Q40 75 50 75 Q60 75 58 65" fill="none" stroke="#DAC8C8" strokeWidth="0.4" strokeLinecap="round" />
        </g>
      </svg>
    ),
  }

  return (
    <motion.div
      className={`pointer-events-none ${className}`}
      style={{ transform: flip ? 'scaleX(-1)' : undefined }}
      animate={!prefersReducedMotion ? {
        y: [0, -8, 0],
        rotate: [0, 1, 0],
      } : {}}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      aria-hidden="true"
    >
      {illustrations[variant]}
    </motion.div>
  )
}

// Falling petals animation
export function FallingPetals({ count = 6 }: { count?: number }) {
  const prefersReducedMotion = useReducedMotion()
  
  if (prefersReducedMotion) return null

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10" aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: '-20px',
          }}
          animate={{
            y: ['0vh', '110vh'],
            x: [0, Math.random() * 100 - 50],
            rotate: [0, 360],
            opacity: [0, 0.6, 0.6, 0],
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            delay: i * 2.5,
            ease: "linear",
          }}
        >
          <svg width="12" height="14" viewBox="0 0 12 14">
            <ellipse cx="6" cy="7" rx="5" ry="6" fill="#DAC8C8" opacity="0.6" />
            <path d="M6 1 Q4 4 6 7 Q8 4 6 1" fill="#BD0762" opacity="0.3" />
          </svg>
        </motion.div>
      ))}
    </div>
  )
}

// Decorative divider
export function FloralDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`} aria-hidden="true">
      <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#DAC8C8]" />
      <svg width="24" height="24" viewBox="0 0 24 24" className="text-[#C9A961]">
        <path 
          d="M12 4 Q8 8 10 12 Q8 8 4 12 Q8 16 12 14 Q8 16 12 20 Q16 16 12 14 Q16 16 20 12 Q16 8 12 12 Q16 8 12 4" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="0.75"
          strokeLinecap="round"
        />
      </svg>
      <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#DAC8C8]" />
    </div>
  )
}
