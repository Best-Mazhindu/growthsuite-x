const projects = [
  { title: "FinFlow Dashboard", category: "Fintech · Software", desc: "Real-time analytics platform for a regional bank — 40% faster reporting." },
  { title: "RetailEdge POS", category: "Retail · System", desc: "Multi-branch POS + inventory replacing 3 legacy tools." },
  { title: "MediCare Connect", category: "Healthcare · AI", desc: "Patient triage assistant cutting front-desk load by 60%." },
  { title: "FleetIQ", category: "Logistics · Automation", desc: "Live tracking + auto-dispatch for a 200-vehicle fleet." },
  { title: "ScholarHub LMS", category: "Education · Platform", desc: "Custom LMS serving 12k+ active students." },
  { title: "Apex Growth Engine", category: "Marketing · Growth", desc: "Lead engine generating 1,200 SQLs in 90 days for a SaaS startup." },
];

export const Portfolio = () => (
  <section id="portfolio" className="py-24 scroll-mt-20">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-sm font-medium text-primary uppercase tracking-wider">Portfolio</span>
        <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">Selected work.</h2>
        <p className="text-muted-foreground text-lg">A snapshot of intelligent systems we've shipped — each one designed to move a business metric.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <article key={p.title} className="group glass rounded-2xl overflow-hidden hover:-translate-y-2 hover:shadow-glow transition-all duration-500 animate-fade-in" style={{ animationDelay: `${i * 80}ms` }}>
            <div className="h-44 bg-gradient-hero relative overflow-hidden">
              <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_30%_30%,white,transparent_60%)]" />
              <div className="absolute bottom-3 left-4 text-xs font-semibold tracking-wider text-primary-foreground/90 uppercase">
                {p.category}
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-smooth">{p.title}</h3>
              <p className="text-sm text-muted-foreground">{p.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);