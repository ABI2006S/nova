import { Github, Linkedin, Twitter, Instagram } from "lucide-react"
import { Logo } from "@/components/ui/Logo"

interface FooterLink {
  label: string
  href: string
  service?: string
}

interface FooterColumn {
  title: string
  links: FooterLink[]
}

const columns: FooterColumn[] = [
  {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Careers", href: "#contact" },
      { label: "Process", href: "#process" },
      { label: "Blog", href: "#portfolio" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Web Development", href: "#services", service: "Website Development" },
      { label: "Web Apps", href: "#services", service: "Web Applications" },
      { label: "UI/UX Design", href: "#services", service: "UI/UX Design" },
      { label: "SEO & Marketing", href: "#services", service: "SEO & Marketing" },
    ],
  },
  {
    title: "Portfolio",
    links: [
      { label: "Case Studies", href: "#portfolio" },
      { label: "Featured Work", href: "#portfolio" },
      { label: "Industries", href: "#portfolio" },
      { label: "Testimonials", href: "#portfolio" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "hello@nova.studio", href: "mailto:hello@nova.studio" },
      { label: "WhatsApp", href: "https://wa.me/919876543210" },
      { label: "Schedule a Call", href: "#contact" },
      { label: "Support", href: "#contact" },
    ],
  },
]

const socials = [
  { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: Github, label: "GitHub", href: "https://github.com" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
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
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
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
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={() => {
                        if (link.service) {
                          window.dispatchEvent(new CustomEvent("select-service", { detail: link.service }))
                        }
                      }}
                      className="text-sm text-muted transition-colors hover:text-primary"
                      target={link.href.startsWith("http") || link.href.startsWith("mailto") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      {link.label}
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
