import { useState, useEffect, useRef, type FormEvent } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Mail, MessageCircle, MapPin, CheckCircle2, Send, Twitter, Linkedin, Github, Instagram, Trash2, Loader2, Eye, X } from "lucide-react"
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
const budgets = [
  "₹5,000 – ₹25,000",
  "₹25,000 – ₹50,000",
  "₹50,000 – ₹1,00,000",
  "₹1,00,000 – ₹5,00,000",
  "₹5,00,000+"
]

const initial: FormState = { name: "", email: "", phone: "", company: "", service: "", budget: "", message: "" }

const contactInfo = [
  { icon: Mail, label: "Email", value: "hello@nova.studio" },
  { icon: MessageCircle, label: "WhatsApp", value: "+91 98765 43210" },
  { icon: MapPin, label: "Location", value: "Bengaluru, India" },
]

const socials = [
  { icon: Twitter, href: "https://twitter.com" },
  { icon: Linkedin, href: "https://linkedin.com" },
  { icon: Github, href: "https://github.com" },
  { icon: Instagram, href: "https://instagram.com" },
]

export function Contact() {
  const [form, setForm] = useState<FormState>(initial)
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSubmissions, setShowSubmissions] = useState(false)
  const [storedSubmissions, setStoredSubmissions] = useState<FormState[]>([])

  const nameInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const data = localStorage.getItem("nova_submissions")
    if (data) {
      try {
        setStoredSubmissions(JSON.parse(data))
      } catch (err) {
        console.error(err)
      }
    }
  }, [])

  useEffect(() => {
    const handleSelect = (e: Event) => {
      const serviceName = (e as CustomEvent<string>).detail
      if (serviceName) {
        update("service", serviceName)
        setTimeout(() => {
          nameInputRef.current?.focus()
        }, 100)
      }
    }
    window.addEventListener("select-service", handleSelect)
    return () => window.removeEventListener("select-service", handleSelect)
  }, [])

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
    setIsSubmitting(true)

    // Simulate API delay
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)

      const newSub = { ...form }
      const updated = [newSub, ...storedSubmissions]
      setStoredSubmissions(updated)
      localStorage.setItem("nova_submissions", JSON.stringify(updated))

      setForm(initial)
      setTimeout(() => setSubmitted(false), 4000)
    }, 1200)
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
              {socials.map((soc, i) => (
                <a
                  key={i}
                  href={soc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Social link"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-muted transition-all hover:border-primary/40 hover:text-primary cursor-pointer"
                >
                  <soc.icon className="h-4.5 w-4.5" />
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
                  <input
                    ref={nameInputRef}
                    className={fieldClass("name")}
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    placeholder="Enter your name"
                  />
                </Field>
                <Field label="Email Address" error={errors.email}>
                  <input className={fieldClass("email")} value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="Enter your email" />
                </Field>
                <Field label="Phone Number">
                  <input className={fieldClass("phone")} value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder="Enter your phone number" />
                </Field>
                <Field label="Company Name">
                  <input className={fieldClass("company")} value={form.company} onChange={(e) => update("company", e.target.value)} placeholder="Enter your company name" />
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

              <Button type="submit" size="lg" className="mt-6 w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    Sending Inquiry...
                    <Loader2 className="h-4 w-4 animate-spin" />
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="h-4 w-4" />
                  </>
                )}
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

            {/* Submissions drawer toggle */}
            <div className="mt-8 flex justify-center">
              <button
                type="button"
                onClick={() => setShowSubmissions(true)}
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted/65 transition-colors hover:text-primary cursor-pointer"
              >
                <Eye className="h-4 w-4" />
                View Form Submissions Log ({storedSubmissions.length})
              </button>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Submissions Panel Drawer Overlay */}
      <AnimatePresence>
        {showSubmissions && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
              onClick={() => setShowSubmissions(false)}
            />
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col border-l border-border bg-background p-6 shadow-glow"
            >
              <div className="flex items-center justify-between border-b border-border pb-4">
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground">Submissions Dashboard</h3>
                  <p className="text-xs text-muted">Review locally stored client inquiries.</p>
                </div>
                <button
                  onClick={() => setShowSubmissions(false)}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-foreground hover:bg-surface hover:text-primary transition-all cursor-pointer"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto py-4 space-y-4">
                {storedSubmissions.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-20 text-center text-muted">
                    <Mail className="h-10 w-10 opacity-30" />
                    <p className="mt-4 text-sm font-medium">No submissions recorded yet.</p>
                    <p className="mt-1 text-xs max-w-xs leading-normal">Submit the contact form to populate and review records here.</p>
                  </div>
                ) : (
                  storedSubmissions.map((sub, i) => (
                    <div key={i} className="rounded-xl border border-border bg-surface p-4 text-xs space-y-2">
                      <div className="flex items-start justify-between">
                        <div className="font-display text-sm font-bold text-foreground">{sub.name}</div>
                        <span className="rounded-full bg-primary/10 px-2 py-0.5 font-medium text-primary text-[10px]">
                          {sub.service}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-muted">
                        <div><strong className="text-foreground/80 font-normal">Email:</strong> {sub.email}</div>
                        {sub.phone && <div><strong className="text-foreground/80 font-normal">Phone:</strong> {sub.phone}</div>}
                        {sub.company && <div><strong className="text-foreground/80 font-normal">Company:</strong> {sub.company}</div>}
                        {sub.budget && <div><strong className="text-foreground/80 font-normal">Budget:</strong> {sub.budget}</div>}
                      </div>
                      {sub.message && (
                        <div className="mt-2 border-t border-border/50 pt-2 text-foreground/90 italic">
                          "{sub.message}"
                        </div>
                      )}
                    </div>
                  ))
                )}
              </div>

              {storedSubmissions.length > 0 && (
                <div className="border-t border-border pt-4">
                  <Button
                    variant="secondary"
                    className="w-full text-red-500 hover:text-red-600 hover:border-red-200"
                    onClick={() => {
                      if (confirm("Are you sure you want to clear all stored submissions?")) {
                        setStoredSubmissions([])
                        localStorage.removeItem("nova_submissions")
                      }
                    }}
                  >
                    <Trash2 className="h-4 w-4" />
                    Clear Submissions Log
                  </Button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
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
