import { motion } from "framer-motion"
import { Zap, Cpu, Smartphone, Search, Layers, HeartHandshake } from "lucide-react"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { Counter } from "@/components/ui/Counter"
import { fadeUp, staggerContainer } from "@/components/ui/Reveal"

const features = [
  { icon: Zap, title: "Fast Delivery", desc: "Rapid, reliable turnaround without compromising quality." },
  { icon: Cpu, title: "Modern Technologies", desc: "Built with the latest, battle-tested tech stack." },
  { icon: Smartphone, title: "Responsive Design", desc: "Flawless experiences on every screen and device." },
  { icon: Search, title: "SEO Optimized", desc: "Engineered to rank and to be found by your customers." },
  { icon: Layers, title: "Scalable Architecture", desc: "Foundations that grow seamlessly with your business." },
  { icon: HeartHandshake, title: "Client Focused", desc: "A true partnership built on transparency and trust." },
]

const stats = [
  { to: 120, suffix: "+", label: "Projects Completed" },
  { to: 98, suffix: "%", label: "Client Satisfaction" },
  { to: 40, suffix: "+", label: "Team Experts" },
  { to: 12, suffix: "", label: "Industries Served" },
]

export function WhyChoose() {
  return (
    <section className="relative overflow-hidden bg-surface py-24 md:py-32">
      <div className="absolute right-0 top-1/4 h-80 w-80 rounded-full bg-glow/15 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Why Choose NOVA"
          title="Built for performance, designed for trust"
          subtitle="Everything we do is engineered to give your business a measurable, lasting competitive edge."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="flex items-start gap-4 rounded-2xl border border-border bg-background p-6 shadow-soft transition-shadow hover:shadow-glow"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <f.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground">{f.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 gap-6 rounded-3xl border border-border bg-background p-8 shadow-soft md:grid-cols-4 md:p-10"
        >
          {stats.map((s) => (
            <motion.div key={s.label} variants={fadeUp} className="text-center">
              <Counter
                to={s.to}
                suffix={s.suffix}
                className="font-display text-4xl font-extrabold text-gradient md:text-5xl"
              />
              <p className="mt-2 text-sm text-muted">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
