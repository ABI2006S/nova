import { motion, type Variants } from "framer-motion"
import type { ReactNode } from "react"

const easeOut = [0.22, 1, 0.36, 1] as const

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: easeOut } },
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.02 } },
}

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  align?: "left" | "center" | "right"
  stagger?: boolean
  as?: "div" | "section" | "ul" | "li" | "span"
}

export function Reveal({ children, className, delay = 0, stagger = false, as = "div" }: RevealProps) {
  const MotionTag = motion[as] as typeof motion.div

  if (stagger) {
    return (
      <MotionTag
        className={className}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-20px" }}
      >
        {children}
      </MotionTag>
    )
  }

  return (
    <MotionTag
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-20px" }}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  )
}

/** Use as a direct child of a stagger Reveal */
export function RevealItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div className={className} variants={fadeUp}>
      {children}
    </motion.div>
  )
}
