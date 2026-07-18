import { motion } from "framer-motion"
import { CalendarCheck } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Particles } from "@/components/effects/Particles"

export function FinalCTA() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[2rem] border border-border bg-primary px-6 py-16 text-center md:px-12 md:py-24"
        >
          {/* glow accents */}
          <div className="absolute -left-20 -top-24 h-72 w-72 rounded-full bg-glow/40 blur-[100px]" />
          <div className="absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-secondary/50 blur-[100px]" />
          <Particles count={16} className="opacity-60" />

          <div className="relative mx-auto max-w-2xl">
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-primary-foreground text-balance sm:text-4xl md:text-5xl">
              Ready To Grow Your Business?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/80 md:text-lg">
              Let&apos;s discuss your next project and build something your customers will love.
            </p>
            <div className="mt-9 flex justify-center">
              <a href="#contact">
                <Button variant="secondary" size="lg" className="border-transparent">
                  <CalendarCheck className="h-4 w-4" />
                  Schedule a Consultation
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
