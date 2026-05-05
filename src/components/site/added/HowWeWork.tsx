const phases = [
  { n: "Phase 01", t: "Discovery & AI Readiness Assessment", d: "We start by deeply understanding your business — your goals, your challenges, your existing systems, and your team's capabilities. This gives us the foundation to design a solution that truly fits.", l: ["Business goals & pain point mapping", "Current technology and data audit", "AI readiness scoring", "Opportunity identification report", "Stakeholder alignment workshop"] },
  { n: "Phase 02", t: "Strategy & Solution Architecture", d: "We design your AI transformation roadmap — a clear, phased plan that prioritizes high-impact initiatives, defines the technical architecture, and sets measurable success criteria from day one.", l: ["Custom AI strategy document", "Technical architecture blueprint", "Phased implementation roadmap", "ROI projection and KPI framework", "Risk assessment and mitigation plan"] },
  { n: "Phase 03", t: "Build, Deploy & Integrate", d: "Our engineering team builds your solution — developing AI models, cloud systems, automation workflows, and software applications — then deploys and integrates everything into your existing operations.", l: ["Agile development sprints", "Weekly progress reviews", "Quality assurance and testing", "System integration and data migration", "User acceptance testing (UAT)"] },
  { n: "Phase 04", t: "Training & Change Management", d: "Technology only creates value if your team can use it confidently. We deliver comprehensive training, documentation, and change management support to ensure successful adoption across your organization.", l: ["Role-specific training programs", "User guides and documentation", "Change management support", "AI literacy workshops for all staff", "Hands-on tool onboarding sessions"] },
  { n: "Phase 05", t: "Optimize, Scale & Innovate", d: "After launch, we don't disappear. We stay engaged — monitoring performance, optimizing models, responding to feedback, and continuously identifying new opportunities to extend your AI advantage.", l: ["Performance monitoring & analytics", "Model retraining and optimization", "Monthly strategic review calls", "New feature development", "Ongoing AI advisory and support"] },
];

export const HowWeWork = () => (
  <section id="how-we-work" className="py-24 scroll-mt-20">
    <div className="container">
      <div className="max-w-3xl mb-12 animate-fade-in">
        <span className="text-sm font-medium text-primary uppercase tracking-wider">⚙️ How We Work</span>
        <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">A Process Built for<br /><span className="gradient-text">Real Results.</span></h2>
        <p className="text-muted-foreground text-lg">We don't believe in generic projects. Every engagement follows a structured, collaborative process that ensures what we build actually works — and keeps working.</p>
      </div>
      <div className="space-y-6">
        {phases.map((p, i) => (
          <div key={p.n} className="glass rounded-2xl p-6 md:p-8 grid lg:grid-cols-2 gap-8 hover:shadow-glow transition-all animate-fade-in" style={{ animationDelay: `${i * 80}ms` }}>
            <div>
              <div className="text-sm font-semibold text-primary mb-2">{p.n}</div>
              <h3 className="text-2xl font-bold mb-3">{p.t}</h3>
              <p className="text-muted-foreground">{p.d}</p>
            </div>
            <ul className="space-y-2 lg:border-l lg:border-border lg:pl-8">
              {p.l.map((it) => (
                <li key={it} className="flex items-start gap-3 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);