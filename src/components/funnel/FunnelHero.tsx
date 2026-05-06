import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { waLink } from "@/lib/pricing";

interface Props {
  eyebrow: string;
  title: string;
  subtitle: string;
  primaryLabel: string;
  secondaryLabel: string;
  onSecondary: () => void;
  primaryMessage: string;
  image: string;
  stats: { value: string; label: string }[];
}

export const FunnelHero = ({ eyebrow, title, subtitle, primaryLabel, secondaryLabel, onSecondary, primaryMessage, image, stats }: Props) => (
  <section className="relative overflow-hidden min-h-[88vh] flex items-center">
    <div className="absolute inset-0 bg-gradient-soft" />
    <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-primary/20 blur-3xl animate-float" />
    <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-accent/50 blur-3xl animate-float" style={{ animationDelay: "2s" }} />

    <div className="container relative z-10 py-20 grid lg:grid-cols-2 gap-12 items-center">
      <div className="animate-fade-in">
        <span className="inline-block px-4 py-1.5 rounded-full glass text-sm font-medium text-primary mb-6">
          {eyebrow}
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.1]">
          <span className="gradient-text">{title}</span>
        </h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-xl">{subtitle}</p>
        <div className="flex flex-wrap gap-3 mb-10">
          <Button asChild size="lg" className="bg-gradient-hero shadow-glow h-13 px-7 gap-2">
            <a href={waLink(primaryMessage)} target="_blank" rel="noopener noreferrer">
              <Phone className="w-4 h-4" /> {primaryLabel}
            </a>
          </Button>
          <Button size="lg" variant="outline" onClick={onSecondary} className="glass h-13 px-7 gap-2 border-primary/30 hover:border-primary">
            {secondaryLabel} <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
        <div className="grid grid-cols-3 gap-4 max-w-md">
          {stats.map((s) => (
            <div key={s.label} className="glass rounded-xl p-3 text-center">
              <div className="text-2xl font-bold gradient-text">{s.value}</div>
              <div className="text-xs text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="relative animate-scale-in">
        <div className="absolute -inset-4 bg-gradient-hero opacity-20 blur-3xl rounded-3xl" />
        <img src={image} alt="" className="relative rounded-3xl shadow-glow w-full h-auto object-cover aspect-[4/3]" loading="eager" />
        <div className="absolute -bottom-6 -left-6 glass rounded-2xl p-4 hidden md:block animate-float">
          <div className="text-xs text-muted-foreground">Avg. Project ROI</div>
          <div className="text-2xl font-bold gradient-text">+312%</div>
        </div>
      </div>
    </div>
  </section>
);