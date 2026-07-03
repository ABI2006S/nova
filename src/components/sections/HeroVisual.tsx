import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Bell, Code2, Palette, ShoppingBag, Smartphone } from "lucide-react"
import { useEffect, useState, type CSSProperties, type PointerEvent } from "react"

const themes = [
  {
    name: "Launch",
    primary: "#0B57D0",
    secondary: "#22C55E",
    glow: "#79C4FF",
    glowRgb: "121 196 255",
    soft: "#EAF4FF",
  },
  {
    name: "Checkout",
    primary: "#E11D48",
    secondary: "#F59E0B",
    glow: "#FDBA74",
    glowRgb: "253 186 116",
    soft: "#FFF7ED",
  },
  {
    name: "Product",
    primary: "#0F766E",
    secondary: "#84CC16",
    glow: "#99F6E4",
    glowRgb: "153 246 228",
    soft: "#ECFDF5",
  },
]

const codeLines = [82, 58, 74, 46, 88, 64, 52]

const notifications = [
  { icon: ShoppingBag, title: "Orders: 18", body: "Checkout live", delay: 0 },
  { icon: Bell, title: "Lead: audit", body: "Website request", delay: 2.2 },
  { icon: ShoppingBag, title: "Paid: #4821", body: "Store order", delay: 4.4 },
]

const spring = { stiffness: 120, damping: 22, mass: 0.8 }

export function HeroVisual() {
  const [active, setActive] = useState(0)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const smoothX = useSpring(mx, spring)
  const smoothY = useSpring(my, spring)
  const rotateX = useSpring(useTransform(smoothY, [-0.5, 0.5], [5, -5]), spring)
  const rotateY = useSpring(useTransform(smoothX, [-0.5, 0.5], [-6, 6]), spring)
  const glowX = useTransform(smoothX, [-0.5, 0.5], [26, 74])
  const glowY = useTransform(smoothY, [-0.5, 0.5], [24, 76])
  const pointerGlow = useMotionTemplate`radial-gradient(circle at ${glowX}% ${glowY}%, rgba(var(--scene-glow-rgb), 0.58), transparent 36%)`
  const theme = themes[active]

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % themes.length)
    }, 4200)

    return () => window.clearInterval(timer)
  }, [])

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    mx.set((event.clientX - rect.left) / rect.width - 0.5)
    my.set((event.clientY - rect.top) / rect.height - 0.5)
  }

  const handlePointerLeave = () => {
    mx.set(0)
    my.set(0)
  }

  const sceneStyle = {
    "--scene-primary": theme.primary,
    "--scene-secondary": theme.secondary,
    "--scene-glow": theme.glow,
    "--scene-glow-rgb": theme.glowRgb,
    "--scene-soft": theme.soft,
  } as CSSProperties & Record<string, string>

  return (
    <motion.div
      className="relative mx-auto aspect-[0.92] w-full max-w-[min(620px,94vw)] touch-none select-none sm:aspect-[1.16] lg:aspect-[1.05]"
      style={{ ...sceneStyle, rotateX, rotateY, transformPerspective: 1200 }}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div className="absolute inset-0 rounded-[34px] opacity-80 blur-3xl" style={{ background: pointerGlow }} />

      <motion.div
        className="absolute inset-0 overflow-hidden rounded-[28px] border border-border bg-white/88 shadow-soft backdrop-blur"
        animate={{
          borderColor: theme.glow,
          boxShadow: `0 26px 90px -42px ${theme.primary}`,
          background: `linear-gradient(135deg, ${theme.soft} 0%, #ffffff 46%, ${theme.glow}33 100%)`,
        }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
      >
        <div className="absolute inset-0 grid-bg opacity-60" />

        <div className="absolute left-[6%] right-[20%] top-[8%] h-[62%] sm:right-[18%]">
          <motion.div
            className="relative h-full overflow-hidden rounded-[18px] border border-white/80 bg-[#0B1220] p-2.5 shadow-[0_22px_60px_-28px_rgba(15,23,42,0.85)]"
            animate={{ borderColor: theme.glow }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-2 flex items-center justify-between gap-3 rounded-[12px] bg-white/8 px-3 py-2">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </div>
              <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/58">
                <Code2 className="h-3.5 w-3.5" />
                Studio
              </div>
            </div>

            <div className="grid h-[calc(100%-44px)] grid-cols-[42%_1fr] gap-2.5">
              <div className="overflow-hidden rounded-[14px] border border-white/10 bg-white/[0.06] p-3">
                <div className="mb-3 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/55">
                  <Code2 className="h-3.5 w-3.5" />
                  Dev
                </div>
                <div className="space-y-2.5">
                  {codeLines.map((width, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <motion.span
                        className="h-1.5 w-1.5 rounded-full"
                        animate={{ backgroundColor: index % 2 ? theme.secondary : theme.glow }}
                        transition={{ duration: 0.8 }}
                      />
                      <motion.span
                        className="h-2 rounded-full"
                        animate={{
                          width: [`${Math.max(28, width - 18)}%`, `${width}%`, `${Math.max(34, width - 10)}%`],
                          backgroundColor: index % 3 === 0 ? theme.secondary : "#DBEAFE",
                        }}
                        transition={{
                          duration: 2.8 + index * 0.2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.12,
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[14px] border border-white/10 bg-white/[0.08] p-3">
                <div className="mb-2 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/55">
                  <Palette className="h-3.5 w-3.5" />
                  Design
                </div>

                <motion.div
                  className="absolute left-[12%] top-[24%] h-[30%] w-[58%] rounded-[12px]"
                  animate={{
                    x: [-8, 12, -8],
                    rotate: [-4, 2, -4],
                    backgroundColor: theme.primary,
                  }}
                  transition={{ duration: 6.8, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  className="absolute right-[9%] top-[34%] h-[26%] w-[44%] rounded-[12px]"
                  animate={{
                    y: [8, -10, 8],
                    rotate: [4, -2, 4],
                    backgroundColor: theme.secondary,
                  }}
                  transition={{ duration: 7.4, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  className="absolute bottom-[12%] left-[16%] h-[20%] w-[70%] rounded-[12px] bg-white/85"
                  animate={{ x: [0, 12, 0] }}
                  transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="grid h-full grid-cols-3 gap-2 p-2">
                    {[0, 1, 2].map((item) => (
                      <motion.div
                        key={item}
                        className="rounded-[8px] bg-surface"
                        animate={{ opacity: [0.7, 1, 0.7], y: item === 1 ? [0, -4, 0] : [0, 3, 0] }}
                        transition={{ duration: 3 + item * 0.35, repeat: Infinity, ease: "easeInOut" }}
                      />
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  className="absolute z-20 h-6 w-6 rounded-full border border-white/90 bg-white/85 shadow-soft"
                  animate={{
                    left: ["18%", "66%", "42%", "76%", "18%"],
                    top: ["28%", "30%", "62%", "48%", "28%"],
                  }}
                  transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <motion.span
                    className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full"
                    animate={{ backgroundColor: theme.primary }}
                    transition={{ duration: 0.8 }}
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-[20%] left-[12%] right-[24%] h-[7%] rounded-b-[22px] bg-slate-900 shadow-[0_18px_34px_-26px_rgba(15,23,42,0.9)]" />
        <div className="absolute bottom-[15%] left-[19%] right-[31%] h-[5%] rounded-[999px] bg-slate-300/80" />

        <motion.div
          className="absolute bottom-[7%] right-[4%] h-[68%] w-[30%] min-w-[122px] max-w-[176px] rounded-[28px] border border-slate-900/90 bg-slate-950 p-2 shadow-[0_26px_60px_-30px_rgba(15,23,42,0.95)]"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 7.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="relative h-full overflow-hidden rounded-[22px] bg-slate-100">
            <motion.div
              className="absolute inset-x-0 top-0 h-[34%]"
              animate={{
                background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`,
              }}
              transition={{ duration: 0.8 }}
            />
            <div className="relative z-10 flex items-center justify-between px-3 pt-3 text-white">
              <Smartphone className="h-4 w-4" />
              <div className="h-1.5 w-10 rounded-full bg-white/75" />
            </div>
            <div className="relative z-10 mt-4 px-3">
              <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/75">NOVA App</div>
              <div className="mt-1 font-display text-lg font-bold leading-none text-white">Live</div>
            </div>

            <div className="absolute inset-x-2 top-[34%] bottom-2 overflow-hidden rounded-[18px] bg-white/82 p-2">
              {notifications.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="absolute left-2 right-2 rounded-[14px] border border-border bg-white p-2 shadow-soft"
                  style={{ top: `${8 + index * 30}%` }}
                  initial={false}
                  animate={{
                    x: [36, 0, 0, -18],
                    opacity: [0, 1, 1, 0],
                    scale: [0.95, 1, 1, 0.98],
                  }}
                  transition={{
                    duration: 6.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: item.delay,
                    times: [0, 0.16, 0.76, 1],
                  }}
                >
                  <div className="flex items-start gap-2">
                    <motion.span
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[8px] text-white"
                      animate={{ backgroundColor: index % 2 ? theme.secondary : theme.primary }}
                      transition={{ duration: 0.8 }}
                    >
                      <item.icon className="h-3.5 w-3.5" />
                    </motion.span>
                    <div className="min-w-0">
                      <div className="truncate text-[10px] font-bold leading-tight text-foreground">{item.title}</div>
                      <div className="mt-0.5 truncate text-[9px] text-muted">{item.body}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="absolute bottom-[8%] left-[6%] flex max-w-[50%] gap-2">
          {themes.map((item, index) => (
            <button
              key={item.name}
              type="button"
              aria-label={`Use ${item.name} scene`}
              title={item.name}
              onClick={() => setActive(index)}
              className="h-7 w-7 rounded-[8px] border border-white/80 shadow-soft transition-transform duration-300 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
              style={{
                background: `linear-gradient(135deg, ${item.primary}, ${item.secondary})`,
                boxShadow: active === index ? `0 0 0 2px ${item.glow}` : undefined,
              }}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}
