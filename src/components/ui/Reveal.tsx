import { motion, type Variants } from "framer-motion"
import type { ReactNode } from "react"

const easeOut = [0.22, 1, 0.36, 1] as const

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
}

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  align?: "left" | "center" | "right"
  /** When true, children animate with stagger using fadeUp on each direct motion child */
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
        viewport={{ once: true, margin: "-80px" }}
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
      viewport={{ once: true, margin: "-80px" }}
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
