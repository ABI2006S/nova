import { motion } from "framer-motion"
import { ArrowRight, Play, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { HeroVisual } from "./HeroVisual"
import { Particles } from "@/components/effects/Particles"

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.35 } },
}
const item = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
}

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20 md:pt-40 md:pb-28">
      {/* background accents */}
      <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_at_center,#000_30%,transparent_75%)]" />
      <div className="absolute -left-28 top-16 h-40 w-[520px] -rotate-12 rounded-[40px] bg-glow/20 blur-[90px]" />
      <div className="absolute -right-28 top-52 h-44 w-[460px] rotate-12 rounded-[40px] bg-secondary/15 blur-[100px]" />
      <Particles count={14} />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 sm:gap-14 md:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(360px,560px)] lg:gap-10">
        <motion.div variants={container} initial="hidden" animate="visible" className="flex min-w-0 flex-col items-start">
          <motion.h1
            variants={item}
            className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground text-balance sm:text-5xl lg:text-6xl"
          >
            We Build Digital <br className="hidden sm:block" />
            Experiences That <span className="text-gradient">Drive Growth</span>
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg text-pretty">
            Custom websites, web applications, branding, and digital marketing solutions crafted to help
            businesses stand out and scale confidently.
          </motion.p>

          <motion.div variants={item} className="mt-8 grid w-full max-w-md gap-3 sm:flex sm:max-w-none sm:flex-row">
            <a href="#contact" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto">
                Start Your Project
                <ArrowRight className="h-4 w-4" />
              </Button>
            </a>
            <a href="#portfolio" className="w-full sm:w-auto">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                <Play className="h-4 w-4" />
                View Portfolio
              </Button>
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-10 grid w-full max-w-xl grid-cols-3 gap-3 sm:mt-12 sm:gap-6">
            {[
              { value: "50+", label: "Projects Delivered" },
              { value: "98%", label: "Client Retention" },
              { value: "2+", label: "Years Experience" },
            ].map((stat) => (
              <div key={stat.label} className="min-w-0">
                <div className="font-display text-xl font-bold text-foreground sm:text-2xl">{stat.value}</div>
                <div className="mt-1 text-[11px] leading-snug text-muted sm:text-xs">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full lg:justify-self-end"
        >
          <HeroVisual />
        </motion.div>
      </div>
    </section>
  )
}
