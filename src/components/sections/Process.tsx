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

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-20px" }}
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-6 lg:gap-3"
          >
            {steps.map((s) => (
              <motion.div
                key={s.num}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative flex flex-col items-start rounded-2xl border border-transparent p-4 transition-all duration-300 hover:border-border hover:bg-background hover:shadow-soft lg:items-center lg:text-center"
              >
                <div className="relative z-10 flex h-[88px] w-[88px] items-center justify-center rounded-2xl border border-border bg-background shadow-soft transition-all duration-300 group-hover:border-primary/30 group-hover:shadow-glow">
                  <s.icon className="h-7 w-7 text-primary transition-transform duration-300 group-hover:scale-110" />
                  <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    {s.num}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-foreground transition-colors group-hover:text-primary">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted lg:px-0.5">{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
