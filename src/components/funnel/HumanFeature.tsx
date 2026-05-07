import { LucideIcon, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { waLink } from "@/lib/pricing";

interface Props {
  eyebrow: string;
  title: string;
  description: string;
  bullets: { icon: LucideIcon; label: string }[];
  image: string;
  imageSide?: "left" | "right";
  variant?: "light" | "sky";
  ctaLabel?: string;
  ctaMessage?: string;
  floatStat?: { value: string; label: string };
}

export const HumanFeature = ({
  eyebrow, title, description, bullets, image,
  imageSide = "right", variant = "light", ctaLabel, ctaMessage, floatStat,
}: Props) => {
  const bg = variant === "sky" ? "bg-sky" : "bg-surface";
  return (
    <section className={`${bg} py-20 md:py-28 relative overflow-hidden`}>
      <div className="absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-primary-glow/10 blur-3xl" />
      <div className={`container relative grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${imageSide === "left" ? "lg:[&>div:first-child]:order-2" : ""}`}>
        <div className="animate-fade-in">
          <span className="inline-block px-3 py-1 rounded-full glass text-xs font-semibold text-primary uppercase tracking-wider mb-4">{eyebrow}</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-5">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground mb-7">{description}</p>
          <ul className="space-y-3 mb-8">
            {bullets.map((b) => (
              <li key={b.label} className="flex items-start gap-3">
                <span className="mt-0.5 w-9 h-9 rounded-lg bg-accent flex items-center justify-center shrink-0">
                  <b.icon className="w-4 h-4 text-primary" />
                </span>
                <span className="text-foreground/90 pt-1.5">{b.label}</span>
              </li>
            ))}
          </ul>
          {ctaLabel && ctaMessage && (
            <Button asChild size="lg" className="bg-gradient-hero shadow-glow">
              <a href={waLink(ctaMessage)} target="_blank" rel="noopener noreferrer">{ctaLabel}</a>
            </Button>
          )}
        </div>
        <div className="relative animate-scale-in">
          <div className="absolute -inset-6 bg-gradient-hero opacity-20 blur-3xl rounded-[2rem]" />
          <div className="relative rounded-3xl overflow-hidden shadow-glow group">
            <img
              src={image}
              alt=""
              loading="lazy"
              width={1280}
              height={960}
              className="w-full h-auto object-cover aspect-[4/3] transition-transform duration-700 group-hover:scale-105 animate-float"
            />
          </div>
          {floatStat && (
            <div className="absolute -bottom-5 -left-5 md:-left-8 glass rounded-2xl p-4 shadow-glow">
              <div className="text-xs text-muted-foreground">{floatStat.label}</div>
              <div className="text-2xl font-bold gradient-text">{floatStat.value}</div>
            </div>
          )}
          <div className="absolute -top-5 -right-5 md:-right-8 glass rounded-2xl p-3 hidden md:flex items-center gap-2 shadow-card">
            <CheckCircle2 className="w-4 h-4 text-primary" />
            <span className="text-xs font-medium">Live & monitored</span>
          </div>
        </div>
      </div>
    </section>
  );
};