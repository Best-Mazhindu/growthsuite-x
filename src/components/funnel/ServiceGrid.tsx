import { LucideIcon } from "lucide-react";

export interface ServiceItem {
  icon: LucideIcon;
  title: string;
  items: string[];
}

export const ServiceGrid = ({ eyebrow, title, subtitle, services, tone = "white" }: { eyebrow: string; title: string; subtitle: string; services: ServiceItem[]; tone?: "white" | "surface" | "sky" }) => (
  <section className={`py-24 relative ${tone === "surface" ? "bg-surface" : tone === "sky" ? "bg-sky" : ""}`}>
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-sm font-medium text-primary uppercase tracking-wider">{eyebrow}</span>
        <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">{title}</h2>
        <p className="text-muted-foreground text-lg">{subtitle}</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <div
            key={s.title}
            className="glass rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-glow hover:border-primary/40 animate-fade-in"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center mb-4 shadow-glow">
              <s.icon className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold mb-3">{s.title}</h3>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              {s.items.map((it) => (
                <li key={it} className="flex gap-2"><span className="text-primary">•</span>{it}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);