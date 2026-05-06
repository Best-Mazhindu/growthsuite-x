import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { waLink } from "@/lib/pricing";

export interface Tier {
  name: string;
  price: string;
  yearly?: string;
  tagline: string;
  features: string[];
  highlighted?: boolean;
  ctaMessage: string;
}

export const PricingTiers = ({ eyebrow, title, tiers, showToggle = true }: { eyebrow: string; title: string; tiers: Tier[]; showToggle?: boolean }) => {
  const [yearly, setYearly] = useState(false);
  return (
    <section id="packages" className="py-24 bg-gradient-soft scroll-mt-20">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">{eyebrow}</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">{title}</h2>
          <p className="text-muted-foreground text-lg">Transparent pricing. No surprises. Cancel anytime.</p>
        </div>

        {showToggle && (
          <div className="flex justify-center mb-10">
            <div className="glass rounded-full p-1 inline-flex">
              <button onClick={() => setYearly(false)} className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${!yearly ? "bg-gradient-hero text-primary-foreground shadow-glow" : ""}`}>Monthly</button>
              <button onClick={() => setYearly(true)} className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${yearly ? "bg-gradient-hero text-primary-foreground shadow-glow" : ""}`}>Yearly · Save 15%</button>
            </div>
          </div>
        )}

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {tiers.map((t, i) => (
            <div
              key={t.name}
              className={`glass rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 animate-scale-in ${t.highlighted ? "ring-2 ring-primary shadow-glow" : "hover:shadow-card"}`}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              {t.highlighted && (
                <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-gradient-hero text-primary-foreground mb-3">Most Popular</span>
              )}
              <h3 className="text-xl font-bold">{t.name}</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-4">{t.tagline}</p>
              <div className="mb-6">
                <div className="text-4xl font-bold gradient-text">{yearly && t.yearly ? t.yearly : t.price}</div>
              </div>
              <ul className="space-y-2.5 mb-6">
                {t.features.map((f) => (
                  <li key={f} className="flex gap-2 text-sm"><Check className="w-4 h-4 text-primary shrink-0 mt-0.5" /><span>{f}</span></li>
                ))}
              </ul>
              <Button asChild className="w-full bg-gradient-hero shadow-glow">
                <a href={waLink(t.ctaMessage)} target="_blank" rel="noopener noreferrer">Get Started</a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};