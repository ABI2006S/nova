import { motion, type HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

type Variant = "primary" | "secondary" | "ghost"
type Size = "md" | "lg"

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
  variant?: Variant
  size?: Size
  children: ReactNode
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 disabled:opacity-60 disabled:pointer-events-none"

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-primary-foreground shadow-[0_10px_30px_-8px_rgba(11,87,208,0.5)] hover:bg-[#0a4cb8]",
  secondary:
    "bg-background text-foreground border border-border hover:border-primary/40 hover:text-primary",
  ghost: "bg-transparent text-foreground hover:text-primary",
}

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-13 px-7 text-[15px]",
}

export function Button({ variant = "primary", size = "md", className, children, ...props }: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </motion.button>
  )
}
