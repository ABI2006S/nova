import { Github, Linkedin, Twitter, Instagram } from "lucide-react"
import { Logo } from "@/components/ui/Logo"

const columns = [
  {
    title: "Company",
    links: ["About", "Careers", "Process", "Blog"],
  },
  {
    title: "Services",
    links: ["Web Development", "Web Apps", "UI/UX Design", "SEO & Marketing"],
  },
  {
    title: "Portfolio",
    links: ["Case Studies", "Featured Work", "Industries", "Testimonials"],
  },
  {
    title: "Contact",
    links: ["hello@nova.studio", "WhatsApp", "Schedule a Call", "Support"],
  },
]

const socials = [
  { icon: Twitter, label: "Twitter" },
  { icon: Linkedin, label: "LinkedIn" },
  { icon: Github, label: "GitHub" },
  { icon: Instagram, label: "Instagram" },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2">
            <Logo className="text-3xl" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              We build digital experiences that drive growth. Custom websites, applications, branding, and
              marketing for ambitious businesses.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-muted transition-all hover:border-primary/40 hover:text-primary"
                >
                  <s.icon className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-foreground">{col.title}</h4>
              <ul className="mt-4 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-muted transition-colors hover:text-primary">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted sm:flex-row">
          <p>© {new Date().getFullYear()} NOVA Studio. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-primary">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
