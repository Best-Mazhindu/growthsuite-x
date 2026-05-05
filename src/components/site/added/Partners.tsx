import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { waLink } from "@/lib/pricing";

const tags = [
  "💰 Investors",
  "🏛️ Government Bodies",
  "🌱 NGOs & Development Organizations",
  "🤝 Technology Partners",
  "📣 Marketing Partners",
  "🏫 Educational Institutions",
  "🌍 Pan-African Networks",
];

export const Partners = () => (
  <section id="partners" className="py-24 scroll-mt-20">
    <div className="container">
      <div className="glass rounded-3xl p-10 md:p-14 text-center max-w-5xl mx-auto animate-fade-in">
        <span className="text-sm font-medium text-primary uppercase tracking-wider">🤝 Partners & Investors</span>
        <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">
          Partner With Us to Build<br /><span className="gradient-text">Africa's AI Future</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-8 max-w-3xl mx-auto">
          The AI revolution in Africa is just beginning. We're looking for strategic partners, investors, and collaborators who want to shape the future of an entire continent.
        </p>
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {tags.map((t) => (
            <span key={t} className="text-sm px-4 py-2 rounded-full bg-accent text-accent-foreground border border-border">{t}</span>
          ))}
        </div>
        <Button asChild size="lg" className="bg-gradient-hero shadow-glow">
          <a href={waLink("Hi Intelli-Sys, I'd like to explore partnership opportunities.")} target="_blank" rel="noreferrer">
            Explore Partnership Opportunities <ArrowRight className="w-4 h-4" />
          </a>
        </Button>
      </div>
    </div>
  </section>
);