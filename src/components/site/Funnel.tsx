import { MousePointer2, Settings2, DollarSign, FileText, MessageCircle } from "lucide-react";

const steps = [
  { icon: MousePointer2, title: "Choose Service", desc: "Pick the engine you need." },
  { icon: Settings2, title: "Customize Solution", desc: "Add features & add-ons." },
  { icon: DollarSign, title: "See Price", desc: "Real-time transparent total." },
  { icon: FileText, title: "Get Proposal", desc: "Full scope in one click." },
  { icon: MessageCircle, title: "Talk to Sales", desc: "Close on WhatsApp." },
];

export const Funnel = () => (
  <section className="py-24">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-sm font-medium text-primary uppercase tracking-wider">How it works</span>
        <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">From curious to closed in 5 steps.</h2>
      </div>
      <div className="relative max-w-5xl mx-auto">
        <div className="absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/0 via-primary/40 to-primary/0 hidden md:block" />
        <div className="grid md:grid-cols-5 gap-8">
          {steps.map((s, i) => (
            <div key={s.title} className="text-center animate-fade-in" style={{ animationDelay: `${i * 80}ms` }}>
              <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-hero shadow-glow mb-4 mx-auto">
                <s.icon className="w-7 h-7 text-primary-foreground" />
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full glass text-xs font-bold flex items-center justify-center">{i + 1}</span>
              </div>
              <h3 className="font-semibold mb-1">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);