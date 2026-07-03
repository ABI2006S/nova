import { useState, type FormEvent } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Mail, MessageCircle, MapPin, CheckCircle2, Send, Twitter, Linkedin, Github, Instagram } from "lucide-react"
import { Reveal } from "@/components/ui/Reveal"
import { Button } from "@/components/ui/Button"
import { cn } from "@/lib/utils"

interface FormState {
  name: string
  email: string
  phone: string
  company: string
  service: string
  budget: string
  message: string
}

const services = ["Website Development", "Web Applications", "UI/UX Design", "SEO & Marketing", "Maintenance & Support", "Automation & AI"]
const budgets = ["₹50K – ₹1L", "₹1L – ₹2L", "₹2L – ₹5L", "₹5L+"]

const initial: FormState = { name: "", email: "", phone: "", company: "", service: "", budget: "", message: "" }

const contactInfo = [
  { icon: Mail, label: "Email", value: "hello@nova.studio" },
  { icon: MessageCircle, label: "WhatsApp", value: "+91 98765 43210" },
  { icon: MapPin, label: "Location", value: "Bengaluru, India" },
]

const socials = [Twitter, Linkedin, Github, Instagram]

export function Contact() {
  const [form, setForm] = useState<FormState>(initial)
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})
  const [submitted, setSubmitted] = useState(false)

  const update = (key: keyof FormState, value: string) => {
    setForm((f) => ({ ...f, [key]: value }))
    setErrors((e) => ({ ...e, [key]: undefined }))
  }

  const validate = () => {
    const next: Partial<Record<keyof FormState, string>> = {}
    if (!form.name.trim()) next.name = "Please enter your name"
    if (!form.email.trim()) next.email = "Please enter your email"
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Enter a valid email"
    if (!form.service) next.service = "Select a service"
    if (!form.message.trim()) next.message = "Tell us about your project"
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setSubmitted(true)
    setForm(initial)
    setTimeout(() => setSubmitted(false), 4000)
  }

  const fieldClass = (key: keyof FormState) =>
    cn(
      "w-full rounded-xl border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted/70 focus:border-primary",
      errors[key] ? "border-red-400" : "border-border",
    )

  return (
    <section id="contact" className="relative overflow-hidden bg-surface py-24 md:py-32">
      <div className="absolute -left-20 top-1/3 h-80 w-80 rounded-full bg-glow/15 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-10">
          {/* info column */}
          <Reveal align="left" className="flex flex-col items-start gap-6 lg:col-span-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Contact
            </span>
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl md:text-5xl">
              Let&apos;s Build Something Great Together
            </h2>
            <p className="max-w-md text-base leading-relaxed text-muted">
              Tell us about your project and we&apos;ll get back to you within one business day with next steps.
            </p>

            <div className="mt-2 flex flex-col gap-4">
              {contactInfo.map((c) => (
                <div key={c.label} className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wide text-muted">{c.label}</div>
                    <div className="text-sm font-medium text-foreground">{c.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-2 flex gap-3">
              {socials.map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-muted transition-all hover:border-primary/40 hover:text-primary"
                >
                  <Icon className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>
          </Reveal>

          {/* form card */}
          <Reveal delay={0.1} className="lg:col-span-3">
            <form
              onSubmit={onSubmit}
              noValidate
              className="relative rounded-3xl border border-border bg-background/80 p-7 shadow-soft backdrop-blur-xl md:p-9"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Full Name" error={errors.name}>
                  <input className={fieldClass("name")} value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="Jane Doe" />
                </Field>
                <Field label="Email Address" error={errors.email}>
                  <input className={fieldClass("email")} value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="jane@company.com" />
                </Field>
                <Field label="Phone Number">
                  <input className={fieldClass("phone")} value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder="+91 00000 00000" />
                </Field>
                <Field label="Company Name">
                  <input className={fieldClass("company")} value={form.company} onChange={(e) => update("company", e.target.value)} placeholder="Acme Inc." />
                </Field>
                <Field label="Service Required" error={errors.service}>
                  <select className={fieldClass("service")} value={form.service} onChange={(e) => update("service", e.target.value)}>
                    <option value="">Select a service</option>
                    {services.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Budget Range">
                  <select className={fieldClass("budget")} value={form.budget} onChange={(e) => update("budget", e.target.value)}>
                    <option value="">Select a range</option>
                    {budgets.map((b) => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                </Field>
              </div>

              <div className="mt-5">
                <Field label="Project Description" error={errors.message}>
                  <textarea
                    rows={4}
                    className={cn(fieldClass("message"), "resize-none")}
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                    placeholder="Tell us about your goals, timeline, and scope..."
                  />
                </Field>
              </div>

              <Button type="submit" size="lg" className="mt-6 w-full">
                Send Message
                <Send className="h-4 w-4" />
              </Button>

              <AnimatePresence>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-primary/10 px-4 py-3 text-sm font-medium text-primary"
                  >
                    <CheckCircle2 className="h-5 w-5" />
                    Thank you! Your message has been sent successfully.
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-sm font-medium text-foreground">{label}</span>
      {children}
      {error && <span className="text-xs text-red-500">{error}</span>}
    </label>
  )
}
