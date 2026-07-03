import { motion } from "framer-motion"
import { Code2, LayoutDashboard, Palette, TrendingUp, LifeBuoy, Bot, ArrowUpRight } from "lucide-react"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { fadeUp, staggerContainer } from "@/components/ui/Reveal"

const services = [
  {
    icon: Code2,
    title: "Website Development",
    desc: "Business websites, portfolios, and high-converting landing pages built for speed and scale.",
  },
  {
    icon: LayoutDashboard,
    title: "Web Applications",
    desc: "Custom platforms, dashboards, and SaaS products engineered for performance.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "Modern interfaces and intuitive user experiences that delight and convert.",
  },
  {
    icon: TrendingUp,
    title: "SEO & Marketing",
    desc: "Growth-focused digital marketing that drives qualified traffic and revenue.",
  },
  {
    icon: LifeBuoy,
    title: "Maintenance & Support",
    desc: "Ongoing support, monitoring, and continuous optimization for peace of mind.",
  },
  {
    icon: Bot,
    title: "Automation & AI",
    desc: "Smart workflows and AI integrations that save time and unlock new value.",
  },
]

export function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="What We Do"
          title="End-to-end digital solutions for modern businesses"
          subtitle="From first concept to launch and beyond, we deliver everything your business needs to thrive online."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((s) => (
            <motion.article
              key={s.title}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-background p-7 shadow-soft transition-shadow hover:shadow-glow"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-glow/0 blur-2xl transition-all duration-500 group-hover:bg-glow/40" />

              <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                <s.icon className="h-6 w-6" />
              </div>

              <h3 className="relative mt-6 font-display text-xl font-bold text-foreground">{s.title}</h3>
              <p className="relative mt-3 text-sm leading-relaxed text-muted">{s.desc}</p>

              <div className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary opacity-0 transition-all duration-300 group-hover:opacity-100">
                Learn more
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
