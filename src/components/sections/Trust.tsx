const techs = ["React", "TypeScript", "Tailwind", "Next.js", "Vercel", "Figma", "Supabase", "Framer"]

export function Trust() {
  const row = [...techs, ...techs]

  return (
    <section className="border-y border-border bg-surface/60 py-12">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <p className="text-center text-xs font-medium uppercase tracking-[0.25em] text-muted">
          Trusted Technologies
        </p>

        <div className="mask-fade-edges mt-8 overflow-hidden">
          <div className="flex w-max animate-marquee items-center gap-14">
            {row.map((tech, i) => (
              <span
                key={`${tech}-${i}`}
                className="whitespace-nowrap font-display text-xl font-semibold text-muted/70 transition-colors hover:text-primary md:text-2xl"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
