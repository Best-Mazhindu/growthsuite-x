const cards = [
  { n: "01", t: "AI-First Company", d: "Everything we do is built around AI and automation — not as an add-on, but as the foundation of every solution we deliver." },
  { n: "02", t: "Africa-Focused Solutions", d: "We understand the African business landscape, infrastructure realities, and market dynamics. Our solutions are built for local context." },
  { n: "03", t: "End-to-End Delivery", d: "From strategy to implementation to training — we handle everything. One partner for your complete AI transformation journey." },
  { n: "04", t: "Fast Execution", d: "We deploy quickly, iterate fast, and get you results. No lengthy projects that drag on — we move at actual business speed." },
  { n: "05", t: "Research & Innovation Driven", d: "We stay at the cutting edge of AI so you don't have to. Our team continuously explores new tools and capabilities for you." },
  { n: "06", t: "Affordable & Scalable", d: "Enterprise-grade AI solutions at accessible prices. We grow with you — starting small and scaling as your business expands." },
];

export const WhyIntelliSys = () => (
  <section id="why-intellisys" className="py-24 bg-gradient-soft scroll-mt-20">
    <div className="container">
      <div className="max-w-3xl mb-12 animate-fade-in">
        <span className="text-sm font-medium text-primary uppercase tracking-wider">🌍 Why Intelli-Sys</span>
        <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">Built Different. <span className="gradient-text">Built for Africa.</span></h2>
        <p className="text-muted-foreground text-lg">We're not a generic tech company. We understand the African market, its opportunities, and its challenges — deeply.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((c, i) => (
          <div key={c.n} className="relative glass rounded-2xl p-6 hover:-translate-y-1 hover:shadow-glow transition-all animate-fade-in" style={{ animationDelay: `${i * 70}ms` }}>
            <div className="text-5xl font-bold gradient-text opacity-60 mb-3">{c.n}</div>
            <h3 className="font-semibold text-lg mb-2">{c.t}</h3>
            <p className="text-sm text-muted-foreground">{c.d}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);