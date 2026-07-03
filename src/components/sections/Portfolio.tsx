import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { fadeUp, staggerContainer } from "@/components/ui/Reveal"

const projects = [
  {
    title: "Apex Fintech Platform",
    desc: "A real-time financial dashboard for a high-growth fintech startup.",
    image: "/projects/fintech.png",
    stack: ["React", "TypeScript", "Tailwind"],
  },
  {
    title: "Lumen Commerce",
    desc: "A premium headless e-commerce storefront with seamless checkout.",
    image: "/projects/ecommerce.png",
    stack: ["Next.js", "Supabase", "Stripe"],
  },
  {
    title: "Orbit Analytics",
    desc: "An enterprise SaaS analytics suite with custom data visualizations.",
    image: "/projects/saas.png",
    stack: ["React", "Vercel", "D3"],
  },
  {
    title: "Pulse Mobile",
    desc: "A cross-platform mobile experience with a refined brand system.",
    image: "/projects/branding.png",
    stack: ["React Native", "Figma", "Framer"],
  },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Featured Projects"
          title="A showcase of our recent work"
          subtitle="Real products, real results. Explore a selection of the experiences we've crafted for our partners."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16 grid gap-7 md:grid-cols-2"
        >
          {projects.map((p) => (
            <motion.article
              key={p.title}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-background shadow-soft transition-shadow hover:shadow-glow"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={p.image}
                  alt={`${p.title} project preview`}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>

              <div className="flex flex-col gap-3 p-7">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-xl font-bold text-foreground">{p.title}</h3>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-muted transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-muted">{p.desc}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-surface px-3 py-1 text-xs font-medium text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
