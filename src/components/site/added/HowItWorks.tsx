const steps = [
  { n: "01", t: "Consultation", d: "We assess your business, goals, and challenges in a free AI readiness session tailored to you." },
  { n: "02", t: "Strategy", d: "We craft a custom AI roadmap aligned to your specific industry and business objectives." },
  { n: "03", t: "Implementation", d: "Our expert team builds, deploys, and integrates your AI systems — completely end to end." },
  { n: "04", t: "Scale", d: "We monitor, optimize, and help you grow with continuous support and innovation cycles." },
];

export const HowItWorks = () => (
  <section id="how-it-works" className="py-24 bg-gradient-soft scroll-mt-20">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-14 animate-fade-in">
        <span className="text-sm font-medium text-primary uppercase tracking-wider">⚙️ How It Works</span>
        <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">Simple. <span className="gradient-text">Fast. Effective.</span></h2>
        <p className="text-muted-foreground text-lg">From first call to full AI transformation — our proven 4-step process.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
        {steps.map((s, i) => (
          <div key={s.n} className="relative glass rounded-2xl p-6 text-center hover:-translate-y-1 hover:shadow-glow transition-all animate-fade-in" style={{ animationDelay: `${i * 100}ms` }}>
            <div className="w-16 h-16 mx-auto rounded-full bg-gradient-hero text-primary-foreground font-bold text-lg flex items-center justify-center shadow-glow mb-4">
              {s.n}
            </div>
            <h3 className="font-semibold mb-2">{s.t}</h3>
            <p className="text-sm text-muted-foreground">{s.d}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);