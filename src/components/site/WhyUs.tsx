import { Brain, Wrench, Layers, Zap, LifeBuoy } from "lucide-react";

const items = [
  { icon: Brain, t: "AI-Driven Solutions", d: "Every system is built with intelligence baked in — not bolted on." },
  { icon: Wrench, t: "Custom-Built Systems", d: "No bloated templates. Engineered specifically for your workflow." },
  { icon: Layers, t: "Scalable Architecture", d: "From MVP to millions of users — your stack grows with you." },
  { icon: Zap, t: "Fast Deployment", d: "Ship in weeks, not quarters. Iterate fast, win faster." },
  { icon: LifeBuoy, t: "End-to-End Support", d: "From discovery to long-term maintenance — one accountable team." },
];

export const WhyUs = () => (
  <section id="why-us" className="py-24 scroll-mt-20">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-sm font-medium text-primary uppercase tracking-wider">Why Intelli-Sys</span>
        <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">Built different. Built to last.</h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
        {items.map((it, i) => (
          <div key={it.t} className="glass rounded-2xl p-6 hover:-translate-y-2 hover:shadow-glow transition-all animate-fade-in" style={{ animationDelay: `${i * 80}ms` }}>
            <div className="w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center shadow-glow mb-4">
              <it.icon className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="font-semibold mb-1">{it.t}</h3>
            <p className="text-sm text-muted-foreground">{it.d}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);