import { Star } from "lucide-react";

const stats = [
  { n: "180+", l: "Projects shipped" },
  { n: "75+", l: "Happy clients" },
  { n: "12", l: "Industries served" },
  { n: "98%", l: "Retention rate" },
];

const testimonials = [
  { name: "Tendai M.", role: "Founder, RetailCo", quote: "They replaced our entire ops stack with one custom platform. Cut 30 hours/week of manual work." },
  { name: "Sarah K.", role: "CMO, FinTech Startup", quote: "The Growth Engine package took us from 0 to 1,200 qualified leads in 90 days. ROAS of 6x." },
  { name: "Daniel O.", role: "CEO, LogisticsHub", quote: "Their AI agents now handle 70% of our customer support. The team thought it was magic." },
];

export const Trust = () => (
  <section className="py-24 bg-gradient-soft">
    <div className="container">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {stats.map((s, i) => (
          <div key={s.l} className="glass rounded-2xl p-6 text-center animate-fade-in" style={{ animationDelay: `${i * 80}ms` }}>
            <div className="text-3xl md:text-4xl font-bold gradient-text">{s.n}</div>
            <div className="text-sm text-muted-foreground mt-1">{s.l}</div>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <div key={t.name} className="glass rounded-2xl p-6 animate-fade-in" style={{ animationDelay: `${i * 100}ms` }}>
            <div className="flex gap-0.5 mb-3">
              {[...Array(5)].map((_, k) => <Star key={k} className="w-4 h-4 fill-primary text-primary" />)}
            </div>
            <p className="text-sm leading-relaxed mb-4">"{t.quote}"</p>
            <div className="text-sm">
              <div className="font-semibold">{t.name}</div>
              <div className="text-muted-foreground text-xs">{t.role}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 flex flex-wrap items-center justify-center gap-x-12 gap-y-4 opacity-60">
        {["NORTHWIND", "ACME", "STELLAR", "VERTEX", "AURORA", "HELIX"].map((l) => (
          <span key={l} className="text-lg font-bold tracking-widest text-muted-foreground">{l}</span>
        ))}
      </div>
    </div>
  </section>
);