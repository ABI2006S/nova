import { useMemo } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface ParticlesProps {
  count?: number
  className?: string
}

/** Subtle floating glowing dots used as a decorative background accent. */
export function Particles({ count = 18, className }: ParticlesProps) {
  const dots = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 4 + 2,
        duration: Math.random() * 8 + 8,
        delay: Math.random() * 6,
        opacity: Math.random() * 0.4 + 0.15,
      })),
    [count],
  )

  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)} aria-hidden="true">
      {dots.map((d) => (
        <motion.span
          key={d.id}
          className="absolute rounded-full bg-secondary"
          style={{
            left: `${d.left}%`,
            top: `${d.top}%`,
            width: d.size,
            height: d.size,
            opacity: d.opacity,
            boxShadow: "0 0 12px 2px rgba(121,196,255,0.6)",
          }}
          animate={{ y: [0, -28, 0], opacity: [d.opacity, d.opacity * 1.8, d.opacity] }}
          transition={{ duration: d.duration, delay: d.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  )
}
