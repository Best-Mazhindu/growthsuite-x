import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, MessageCircle } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { categories, Pkg, formatRange, waLink } from "@/lib/pricing";
import { ProposalModal } from "./ProposalModal";

interface Props {
  onProceed: (p: Pkg) => void;
}

export const Pricing = ({ onProceed }: Props) => {
  const [active, setActive] = useState(categories[0].id);
  const [modal, setModal] = useState<Pkg | null>(null);
  const cat = categories.find((c) => c.id === active)!;

  return (
    <section id="pricing" className="py-24 bg-gradient-soft relative scroll-mt-20">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Pricing</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">Transparent tiers. Real ranges.</h2>
          <p className="text-muted-foreground text-lg">Hover any package to see who it's for. Click to view a full proposal.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                active === c.id ? "bg-gradient-hero text-primary-foreground shadow-glow" : "glass hover:border-primary/40"
              }`}
            >
              {c.name.split(" & ")[0].split(",")[0]}
            </button>
          ))}
        </div>

        <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto">{cat.tagline}</p>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {cat.packages.map((p, i) => (
            <HoverCard key={p.id} openDelay={200}>
              <HoverCardTrigger asChild>
                <div
                  className={`glass rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 animate-scale-in ${
                    i === 1 ? "ring-2 ring-primary shadow-glow" : "hover:shadow-card"
                  }`}
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  {i === 1 && (
                    <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-gradient-hero text-primary-foreground mb-3">
                      Most popular
                    </span>
                  )}
                  <h3 className="text-xl font-bold">{p.name}</h3>
                  <div className="mt-4 mb-2">
                    <div className="text-3xl font-bold gradient-text">{formatRange(p.min, p.max)}</div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {p.billing === "monthly" ? "per month" : "one-off project"}
                    </div>
                  </div>
                  <ul className="space-y-2.5 my-6">
                    {p.features.slice(0, 5).map((f) => (
                      <li key={f} className="flex gap-2 text-sm">
                        <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" /> <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="space-y-2 mt-6">
                    <Button onClick={() => setModal(p)} className="w-full bg-gradient-hero shadow-glow">
                      View Proposal
                    </Button>
                    <Button asChild variant="ghost" className="w-full gap-2">
                      <a href={waLink(`Hello, I'm interested in ${p.name}. Please assist me.`)} target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="w-4 h-4" /> Speak to Sales
                      </a>
                    </Button>
                  </div>
                </div>
              </HoverCardTrigger>
              <HoverCardContent className="w-80 glass border-primary/20">
                <div className="text-xs font-semibold text-primary uppercase mb-1">Best for</div>
                <p className="text-sm mb-3">{p.forWho}</p>
                <div className="text-xs font-semibold text-primary uppercase mb-1">Use cases</div>
                <ul className="text-sm space-y-1">
                  {p.useCases.map((u) => <li key={u}>• {u}</li>)}
                </ul>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>
      </div>

      <ProposalModal pkg={modal} open={!!modal} onClose={() => setModal(null)} onProceed={(p) => { setModal(null); onProceed(p); }} />
    </section>
  );
};