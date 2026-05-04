import { Button } from "@/components/ui/button";
import { Calculator, MessageCircle } from "lucide-react";
import { waLink } from "@/lib/pricing";

export const FinalCTA = ({ onCalc }: { onCalc: () => void }) => (
  <section className="py-24">
    <div className="container">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-hero p-10 md:p-16 text-center shadow-glow">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_30%_20%,white,transparent_50%)]" />
        <div className="relative">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Let's Build Your System</h2>
          <p className="text-primary-foreground/85 max-w-xl mx-auto mb-8 text-lg">
            Stop stitching tools together. Get one team that builds, markets, and automates your business.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" onClick={onCalc} className="bg-background text-foreground hover:bg-background/90 h-14 px-8 gap-2">
              <Calculator className="w-4 h-4" /> Calculate Pricing
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/40 text-primary-foreground bg-transparent hover:bg-primary-foreground/10 h-14 px-8 gap-2">
              <a href={waLink("Hello, I'd like to speak to an expert.")} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4" /> Speak to Expert
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
);