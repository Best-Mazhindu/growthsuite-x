import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
import { waLink } from "@/lib/pricing";

const roles = ["Innovators", "Investors", "Marketers", "Developers", "Strategic Partners"];

export const EcosystemCTA = () => (
  <section className="py-16">
    <div className="container">
      <div className="glass rounded-3xl p-8 md:p-12 grid lg:grid-cols-[1fr_auto] gap-8 items-center bg-gradient-card animate-fade-in">
        <div>
          <h3 className="text-3xl md:text-4xl font-bold mb-3">
            Be Part of the <span className="gradient-text">AI Revolution</span>
          </h3>
          <p className="text-muted-foreground mb-5 max-w-2xl">
            We're building Africa's most powerful AI ecosystem. Join innovators, investors, developers & partners shaping the continent's digital future.
          </p>
          <div className="flex flex-wrap gap-2">
            {roles.map((r) => (
              <span key={r} className="text-sm px-3 py-1.5 rounded-full bg-accent text-accent-foreground border border-border">→ {r}</span>
            ))}
          </div>
        </div>
        <Button asChild size="lg" className="bg-gradient-hero shadow-glow whitespace-nowrap">
          <a href={waLink("Hi Intelli-Sys, I want to join the AI Ecosystem.")} target="_blank" rel="noreferrer">
            <Zap className="w-5 h-5" /> Join the AI Ecosystem
          </a>
        </Button>
      </div>
    </div>
  </section>
);