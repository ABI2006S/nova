import { motion } from "framer-motion"
import { Target, Eye, Gem } from "lucide-react"
import { Reveal, fadeUp, staggerContainer } from "@/components/ui/Reveal"

const pillars = [
  {
    icon: Target,
    title: "Our Mission",
    desc: "To empower ambitious businesses with digital products that are as effective as they are beautiful.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    desc: "A web where every brand we touch sets the standard for craft, clarity, and performance.",
  },
  {
    icon: Gem,
    title: "Our Values",
    desc: "Craftsmanship, transparency, and partnership guide every decision we make together.",
  },
]

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 md:px-8 lg:grid-cols-2 lg:gap-16">
        <div>
          <Reveal align="left" className="flex flex-col items-start gap-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              About NOVA
            </span>
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl md:text-5xl">
              Building Digital Experiences With Purpose
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 text-base leading-relaxed text-muted md:text-lg">
              NOVA is a team of designers, engineers, and strategists obsessed with building digital
              experiences that move businesses forward. Since day one, we've partnered with founders and
              enterprises alike to turn bold ideas into refined, high-performing products.
            </p>
          </Reveal>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-20px" }}
            className="mt-10 flex flex-col gap-5"
          >
            {pillars.map((p) => (
              <motion.div key={p.title} variants={fadeUp} className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <p.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground">{p.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* animated visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-square w-full overflow-hidden rounded-3xl border border-border bg-surface p-8 shadow-soft"
        >
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-glow/25 blur-3xl" />
          <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-secondary/20 blur-3xl" />

          <div className="relative grid h-full grid-cols-2 gap-4">
            {[
              { k: "2024", v: "Founded" },
              { k: "50+", v: "Projects" },
              { k: "10", v: "Experts" },
              { k: "3", v: "Freelancers" },
            ].map((b, i) => (
              <motion.div
                key={b.v}
                animate={{ y: [0, i % 2 === 0 ? -10 : 10, 0] }}
                transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut" }}
                className="flex flex-col items-center justify-center rounded-2xl border border-border bg-background shadow-soft"
              >
                <span className="font-display text-3xl font-extrabold text-gradient">{b.k}</span>
                <span className="mt-1 text-sm text-muted">{b.v}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
