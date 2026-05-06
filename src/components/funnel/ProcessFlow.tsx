export const ProcessFlow = ({ eyebrow, title, steps }: { eyebrow: string; title: string; steps: { title: string; desc: string }[] }) => (
  <section className="py-24 relative">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-sm font-medium text-primary uppercase tracking-wider">{eyebrow}</span>
        <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">{title}</h2>
      </div>
      <div className="relative max-w-4xl mx-auto">
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/40 to-transparent md:-translate-x-px" />
        <div className="space-y-8">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className={`relative flex gap-6 md:gap-8 items-start animate-fade-in ${i % 2 === 1 ? "md:flex-row-reverse md:text-right" : ""}`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="md:w-1/2 md:flex md:justify-end md:px-8" style={i % 2 === 1 ? { justifyContent: "flex-start" } : undefined}>
                <div className="glass rounded-2xl p-6 hover:-translate-y-1 transition-transform hover:shadow-glow w-full md:max-w-sm">
                  <div className="text-xs font-semibold text-primary mb-1">STEP {String(i + 1).padStart(2, "0")}</div>
                  <h3 className="text-lg font-bold mb-1">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </div>
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-hero shadow-glow flex items-center justify-center text-primary-foreground font-bold">
                {i + 1}
              </div>
              <div className="md:w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);