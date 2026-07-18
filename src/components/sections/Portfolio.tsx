import { useState, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowUpRight, ArrowRight, X } from "lucide-react"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { Button } from "@/components/ui/Button"
import { fadeUp, staggerContainer } from "@/components/ui/Reveal"

const projects = [
  {
    title: "Apex Fintech Platform",
    desc: "A real-time financial dashboard for a high-growth fintech startup.",
    image: "/projects/fintech.png",
    stack: ["React", "TypeScript", "Tailwind"],
    challenge: "The client needed a highly performant interface to render real-time financial markets without causing thread-blocking lag. The UI had to be intuitive yet carry dense numerical and analytical graphs.",
    solution: "We engineered a clean React SPA utilising high-performance canvas libraries for charts and a custom state sync manager. Staggered web worker processes offload computing overhead.",
    results: ["+140% User Engagement", "<100ms Chart Updates", "99.9% Platform Uptime"],
    features: ["Real-time data feeds", "Interactive charts", "Currency converters", "CSV/PDF reports"]
  },
  {
    title: "Lumen Commerce",
    desc: "A premium headless e-commerce storefront with seamless checkout.",
    image: "/projects/ecommerce.png",
    stack: ["Next.js", "Supabase", "Stripe"],
    challenge: "Lumen required an ultra-fast loading store that could handle heavy dynamic inventory and localized pricing, keeping bounce rates minimal and conversions high.",
    solution: "We designed a headless Next.js architecture with incremental static regeneration (ISR) and unified global content delivery via Vercel Edge. Payment processing is streamlined with Stripe Elements.",
    results: ["+45% Conversion Rate", "1.1s Mobile Load Time", "+300% Page Speed Score"],
    features: ["Stripe Checkout integration", "Stock tracking", "Custom configurator", "Multi-currency support"]
  },
  {
    title: "Orbit Analytics",
    desc: "An enterprise SaaS analytics suite with custom data visualizations.",
    image: "/projects/saas.png",
    stack: ["React", "Vercel", "D3"],
    challenge: "Enterprise managers struggled to parse complex analytics. They required customized visual dashboards that could aggregate millions of rows of data across various systems.",
    solution: "We created a scalable SaaS dashboard driven by D3.js and Tailwind. We optimized database aggregation queries and built user-configurable widget boards.",
    results: ["-60% Report Assembly Time", "+80% Active Retention", "ISO-27001 Security Standard"],
    features: ["Widget drag & drop", "D3 visualization library", "Automated email updates", "Role-based access"]
  },
  {
    title: "Pulse Mobile",
    desc: "A cross-platform mobile experience with a refined brand system.",
    image: "/projects/branding.png",
    stack: ["React Native", "Figma", "Framer"],
    challenge: "Pulse wanted a native iOS & Android application that matched their luxury design guidelines with smooth 60fps micro-animations.",
    solution: "We crafted a comprehensive design system in Figma and built the app using React Native and Framer Motion / Reanimated. We compiled custom packages for native platform interactions.",
    results: ["4.9 App Store Rating", "1M+ App Downloads", "+85% Mobile Conversion"],
    features: ["Silky 60fps animations", "Native biometric login", "Dark mode & Haptics", "Offline sync cache"]
  },
]

export function Portfolio() {
  const [activeProject, setActiveProject] = useState<(typeof projects)[0] | null>(null)

  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [activeProject])

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
          viewport={{ once: true, margin: "-20px" }}
          className="mt-16 grid gap-7 md:grid-cols-2"
        >
          {projects.map((p) => (
            <motion.article
              key={p.title}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              onClick={() => setActiveProject(p)}
              className="group relative cursor-pointer overflow-hidden rounded-3xl border border-border bg-background shadow-soft transition-all hover:border-primary/20 hover:shadow-glow"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={p.image}
                  alt={`${p.title} project preview`}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>

              <div className="flex flex-col gap-3 p-7">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-xl font-bold text-foreground transition-colors group-hover:text-primary">{p.title}</h3>
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

      {/* Case Study Modal */}
      <AnimatePresence>
        {activeProject && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-md"
              onClick={() => setActiveProject(null)}
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-4 z-50 mx-auto flex max-w-4xl flex-col overflow-hidden rounded-3xl border border-border bg-background shadow-glow md:inset-y-12 md:inset-x-8"
            >
              {/* Header bar */}
              <div className="flex items-center justify-between border-b border-border bg-surface px-6 py-4">
                <span className="font-display text-sm font-semibold text-primary">Case Study Analysis</span>
                <button
                  onClick={() => setActiveProject(null)}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-foreground hover:bg-surface hover:text-primary transition-all cursor-pointer"
                  aria-label="Close details"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto p-6 md:p-8">
                <div className="grid gap-8 md:grid-cols-2">
                  <div>
                    <div className="overflow-hidden rounded-2xl border border-border aspect-[16/10] bg-surface">
                      <img
                        src={activeProject.image}
                        alt={activeProject.title}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <h3 className="mt-6 font-display text-2xl font-bold text-foreground">{activeProject.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{activeProject.desc}</p>

                    {/* Results Box */}
                    <div className="mt-6 rounded-2xl border border-primary/10 bg-primary/[0.02] p-5">
                      <h4 className="font-display text-xs font-semibold uppercase tracking-wider text-primary">Key Outcomes</h4>
                      <div className="mt-3 grid gap-3">
                        {activeProject.results.map((r, i) => (
                          <div key={i} className="flex items-center gap-2.5 text-sm font-medium text-foreground">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                            {r}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between">
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-display text-xs font-semibold uppercase tracking-wider text-muted">The Challenge</h4>
                        <p className="mt-1 text-sm leading-relaxed text-foreground">{activeProject.challenge}</p>
                      </div>

                      <div>
                        <h4 className="font-display text-xs font-semibold uppercase tracking-wider text-muted">Our Solution</h4>
                        <p className="mt-1 text-sm leading-relaxed text-foreground">{activeProject.solution}</p>
                      </div>

                      <div>
                        <h4 className="font-display text-xs font-semibold uppercase tracking-wider text-muted">Project Focus</h4>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {activeProject.features.map((f, i) => (
                            <span key={i} className="rounded-xl border border-border bg-surface px-3 py-1 text-xs text-muted">
                              {f}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-display text-xs font-semibold uppercase tracking-wider text-muted">Tech Stack</h4>
                        <div className="mt-2 flex flex-wrap gap-1.5">
                          {activeProject.stack.map((t) => (
                            <span key={t} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 border-t border-border pt-6">
                      <a
                        href="#contact"
                        onClick={() => {
                          const serviceMap: Record<string, string> = {
                            "Apex Fintech Platform": "Web Applications",
                            "Lumen Commerce": "Website Development",
                            "Orbit Analytics": "Web Applications",
                            "Pulse Mobile": "UI/UX Design",
                          }
                          const service = serviceMap[activeProject.title] || "Website Development"
                          window.dispatchEvent(new CustomEvent("select-service", { detail: service }))
                          setActiveProject(null)
                        }}
                      >
                        <Button className="w-full">
                          Start a Project Like This
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}
