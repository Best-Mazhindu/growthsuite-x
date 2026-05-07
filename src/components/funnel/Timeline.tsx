import { Clock } from "lucide-react";

export const Timeline = ({ eyebrow, title, items, tone = "sky" }: { eyebrow: string; title: string; items: { phase: string; duration: string }[]; tone?: "white" | "surface" | "sky" | "soft" }) => (
  <section className={`py-20 ${tone === "soft" ? "bg-gradient-soft" : tone === "surface" ? "bg-surface" : tone === "sky" ? "bg-sky" : ""}`}>
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-sm font-medium text-primary uppercase tracking-wider">{eyebrow}</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-3">{title}</h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
        {items.map((it, i) => (
          <div key={it.phase} className="glass rounded-2xl p-6 text-center hover:-translate-y-1 transition-transform animate-fade-in" style={{ animationDelay: `${i * 80}ms` }}>
            <Clock className="w-7 h-7 text-primary mx-auto mb-3" />
            <div className="font-semibold mb-1">{it.phase}</div>
            <div className="text-sm text-muted-foreground">{it.duration}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);