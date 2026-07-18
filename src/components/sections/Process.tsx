import { motion } from "framer-motion"
import { Search, Compass, PenTool, Code2, ShieldCheck, Rocket } from "lucide-react"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { fadeUp, staggerContainer } from "@/components/ui/Reveal"

const steps = [
  { num: "01", icon: Search, title: "Discovery", desc: "We dig deep to understand your goals, audience, and challenges." },
  { num: "02", icon: Compass, title: "Strategy", desc: "We map a clear roadmap aligned with measurable outcomes." },
  { num: "03", icon: PenTool, title: "Design", desc: "We craft beautiful, intuitive interfaces that reflect your brand." },
  { num: "04", icon: Code2, title: "Development", desc: "We build with clean, scalable, and performant code." },
  { num: "05", icon: ShieldCheck, title: "Testing", desc: "We rigorously test across devices, browsers, and edge cases." },
  { num: "06", icon: Rocket, title: "Launch", desc: "We deploy, monitor, and optimize for a flawless go-live." },
]

export function Process() {
  return (
    <section id="process" className="relative overflow-hidden bg-surface py-24 md:py-32">
      <div className="absolute left-1/4 top-0 h-72 w-72 rounded-full bg-secondary/10 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="How We Work"
          title="A proven process, built for results"
          subtitle="Six deliberate steps that take your idea from concept to a polished, launched product."
        />

        <div className="relative mt-16">
          {/* connecting glowing line (desktop) */}
          <div className="absolute left-0 right-0 top-[60px] hidden h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent lg:block" />

          {/* connecting vertical line (mobile) */}
          <div className="absolute left-[36px] top-[36px] bottom-[36px] w-px border-l border-dashed border-border lg:hidden" />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-20px" }}
            className="grid gap-10 lg:grid-cols-6 lg:gap-3"
          >
            {steps.map((s) => (
              <motion.div
                key={s.num}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative flex flex-row items-start gap-6 transition-all duration-300 lg:flex-col lg:items-center lg:text-center lg:gap-0 lg:p-4"
              >
                {/* Step Circle Icon Container */}
                <div className="relative z-10 flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-2xl border border-border bg-background shadow-soft transition-all duration-300 group-hover:border-primary/30 group-hover:shadow-glow lg:h-[88px] lg:w-[88px]">
                  <s.icon className="h-6 w-6 text-primary transition-transform duration-300 group-hover:scale-110 lg:h-7 lg:w-7" />
                  <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground lg:h-7 lg:w-7 lg:text-xs">
                    {s.num}
                  </span>
                </div>
                
                {/* Text Content */}
                <div className="flex-1 min-w-0 pt-1 lg:mt-5 lg:pt-0">
                  <h3 className="font-display text-base font-semibold text-foreground transition-colors group-hover:text-primary lg:text-lg">
                    {s.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted lg:mt-2 lg:px-0.5">
                    {s.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
