import { motion } from "framer-motion"
import { SectionHeading } from "@/components/ui/SectionHeading"
import FlowingMenu from "@/components/ui/FlowingMenu"

const services = [
  {
    title: "Website Development",
    desc: "Business websites, portfolios, and high-converting landing pages built for speed and scale.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Web Applications",
    desc: "Custom platforms, dashboards, and SaaS products engineered for performance.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "UI/UX Design",
    desc: "Modern interfaces and intuitive user experiences that delight and convert.",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "SEO & Marketing",
    desc: "Growth-focused digital marketing that drives qualified traffic and revenue.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Maintenance & Support",
    desc: "Ongoing support, monitoring, and continuous optimization for peace of mind.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Automation & AI",
    desc: "Smart workflows and AI integrations that save time and unlock new value.",
    image: "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=600&q=80",
  },
]

export function Services() {
  const menuItems = services.map((s) => ({
    link: "#contact",
    text: s.title,
    image: s.image,
    onClick: () => {
      window.dispatchEvent(new CustomEvent("select-service", { detail: s.title }))
    },
  }))

  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="What We Do"
          title="End-to-end digital solutions for modern businesses"
          subtitle="Hover over our capabilities below to explore our services or click to start your project."
        />

        {/* Interactive Flowing Menu Component */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mt-10 md:mt-12 h-[400px] sm:h-[460px] md:h-[540px] overflow-hidden rounded-2xl md:rounded-3xl border border-border/80 shadow-soft bg-surface"
        >
          <FlowingMenu
            items={menuItems}
            speed={15}
            textColor="#111827"
            bgColor="#f8fafc"
            marqueeBgColor="#0b57d0"
            marqueeTextColor="#ffffff"
            borderColor="#e5e7eb"
          />
        </motion.div>
      </div>
    </section>
  )
}


