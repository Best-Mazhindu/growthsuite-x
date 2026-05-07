import { LucideIcon } from "lucide-react";

export const WhyCards = ({ eyebrow, title, cards, tone = "white" }: { eyebrow: string; title: string; cards: { icon: LucideIcon; title: string; desc: string }[]; tone?: "white" | "surface" | "sky" }) => (
  <section className={`py-24 ${tone === "surface" ? "bg-surface" : tone === "sky" ? "bg-sky" : ""}`}>
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-sm font-medium text-primary uppercase tracking-wider">{eyebrow}</span>
        <h2 className="text-3xl md:text-5xl font-bold mt-3">{title}</h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {cards.map((c, i) => (
          <div key={c.title} className="glass rounded-2xl p-6 hover:-translate-y-2 hover:shadow-glow transition-all animate-scale-in" style={{ animationDelay: `${i * 70}ms` }}>
            <div className="w-11 h-11 rounded-lg bg-accent flex items-center justify-center mb-4">
              <c.icon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-bold mb-2">{c.title}</h3>
            <p className="text-sm text-muted-foreground">{c.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);