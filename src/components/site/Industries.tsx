import { Landmark, ShoppingBag, HeartPulse, Truck, GraduationCap, Building2 } from "lucide-react";

const items = [
  { icon: Landmark, name: "Finance", desc: "Banking, fintech & insurance platforms." },
  { icon: ShoppingBag, name: "Retail & E-commerce", desc: "Storefronts, POS & customer journeys." },
  { icon: HeartPulse, name: "Healthcare", desc: "Clinic systems, telehealth & patient data." },
  { icon: Truck, name: "Logistics", desc: "Tracking, dispatch & supply-chain automation." },
  { icon: GraduationCap, name: "Education", desc: "LMS, e-learning & student platforms." },
  { icon: Building2, name: "Corporate Enterprises", desc: "Internal tools, ERP & data dashboards." },
];

export const Industries = () => (
  <section id="industries" className="py-24 bg-gradient-soft scroll-mt-20">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-sm font-medium text-primary uppercase tracking-wider">Industries</span>
        <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">Trusted across sectors.</h2>
        <p className="text-muted-foreground text-lg">From regulated finance to fast-moving retail — Intelli-Sys ships systems built for the realities of your industry.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((it, i) => (
          <div key={it.name} className="glass rounded-2xl p-6 flex gap-4 items-start hover:-translate-y-1 hover:shadow-glow transition-all animate-fade-in" style={{ animationDelay: `${i * 70}ms` }}>
            <div className="w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center shadow-glow shrink-0">
              <it.icon className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">{it.name}</h3>
              <p className="text-sm text-muted-foreground">{it.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);