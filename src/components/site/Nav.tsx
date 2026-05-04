import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export const Nav = ({ onCalc }: { onCalc: () => void }) => (
  <nav className="fixed top-0 inset-x-0 z-50 glass border-b border-border/40">
    <div className="container flex items-center justify-between h-16">
      <a href="#" className="flex items-center gap-2 font-bold text-lg">
        <span className="w-8 h-8 rounded-lg bg-gradient-hero flex items-center justify-center shadow-glow">
          <Sparkles className="w-4 h-4 text-primary-foreground" />
        </span>
        <span className="gradient-text">Nexus</span>
      </a>
      <div className="hidden md:flex items-center gap-8 text-sm">
        <a href="#services" className="hover:text-primary transition-smooth">Services</a>
        <a href="#pricing" className="hover:text-primary transition-smooth">Pricing</a>
        <a href="#calculator" className="hover:text-primary transition-smooth">Calculator</a>
      </div>
      <Button onClick={onCalc} size="sm" className="bg-gradient-hero shadow-glow">Get Started</Button>
    </div>
  </nav>
);