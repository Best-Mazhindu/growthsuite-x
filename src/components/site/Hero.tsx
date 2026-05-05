import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calculator, Rocket, Network } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/intellisys-logo.png";
import { waLink } from "@/lib/pricing";

const slides = [
  {
    eyebrow: "Intelli-Sys",
    title: "Build, Scale & Automate with Intelli-Sys",
    sub: "We design intelligent systems combining software, AI, and growth strategies to transform businesses.",
  },
  {
    eyebrow: "Idea → Product",
    title: "From Idea to Scalable Software — Engineered to Win",
    sub: "MVPs to enterprise platforms, shipped fast and built to scale with you.",
  },
  {
    eyebrow: "AI-Powered",
    title: "Turn Your Business into an AI-Powered Ecosystem",
    sub: "Automations, agents, and data pipelines that compound results day after day.",
  },
];

interface Props {
  onCalc: () => void;
  onStart: () => void;
}

export const Hero = ({ onCalc, onStart }: Props) => {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % slides.length), 5500);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="home" className="relative overflow-hidden min-h-[92vh] flex items-center">
      <img
        src={heroBg}
        alt=""
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-primary/20 blur-3xl animate-float" />
      <div className="absolute -bottom-40 -left-32 w-[500px] h-[500px] rounded-full bg-accent/40 blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
      <img src={logo} alt="" aria-hidden className="absolute right-6 bottom-6 w-32 md:w-44 opacity-10 pointer-events-none select-none" />

      <div className="container relative z-10 py-24">
        <div className="max-w-4xl mx-auto text-center">
          {slides.map((s, idx) => (
            <div
              key={idx}
              className={`transition-all duration-700 ${idx === i ? "opacity-100 translate-y-0 relative" : "opacity-0 -translate-y-6 absolute inset-x-0 pointer-events-none"}`}
            >
              <span className="inline-block px-4 py-1.5 rounded-full glass text-sm font-medium text-primary mb-6">
                {s.eyebrow}
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.05]">
                <span className="gradient-text">{s.title}</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
                {s.sub}
              </p>
            </div>
          ))}

          <div className="flex flex-wrap items-center justify-center gap-3 relative z-10">
            <Button asChild size="lg" className="bg-gradient-hero shadow-glow hover:opacity-95 transition-smooth gap-2 h-14 px-7 text-base">
              <a href={waLink("Hi Intelli-Sys, I'd like to book a free AI consultation.")} target="_blank" rel="noopener noreferrer">
                <Rocket className="w-4 h-4" /> Book Free AI Consultation
              </a>
            </Button>
            <Button size="lg" variant="outline" onClick={onStart} className="glass h-14 px-7 text-base gap-2 border-primary/20 hover:border-primary/50">
              <Network className="w-4 h-4" /> Join the AI Ecosystem
            </Button>
            <Button size="lg" variant="ghost" onClick={onCalc} className="h-14 px-7 text-base gap-2 hover:bg-primary/10">
              <Calculator className="w-4 h-4" /> Calculate Pricing <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          <div className="flex items-center justify-center gap-2 mt-12">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                aria-label={`Slide ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all ${idx === i ? "w-10 bg-primary" : "w-2 bg-muted-foreground/30"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};