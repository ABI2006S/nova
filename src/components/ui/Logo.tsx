import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
  tone?: "primary" | "light"
}
export function Logo({ className, tone = "primary" }: LogoProps) {
  return (
    <span
      className={cn(
        "font-display font-extrabold lowercase tracking-tight select-none",
        tone === "primary" ? "text-primary" : "text-primary-foreground",
        className,
      )}
      aria-label="NOVA"
    >
      nova<span className="text-secondary">.</span>
    </span>
  )
}
