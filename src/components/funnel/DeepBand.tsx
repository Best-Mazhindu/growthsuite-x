import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { waLink } from "@/lib/pricing";

interface Stat { value: string; label: string }
interface Props {
  eyebrow: string;
  title: string;
  description: string;
  stats?: Stat[];
  features?: { icon: LucideIcon; title: string; desc: string }[];
  ctaLabel?: string;
  ctaMessage?: string;
}

export const DeepBand = ({ eyebrow, title, description, stats, features, ctaLabel, ctaMessage }: Props) => (
  <section className="bg-deep relative py-24 overflow-hidden">
    <div className="absolute inset-0 opacity-30 pointer-events-none">
      <div className="absolute top-1/3 left-10 w-96 h-96 rounded-full bg-primary/40 blur-3xl animate-float" />
      <div className="absolute bottom-0 right-10 w-[500px] h-[500px] rounded-full bg-primary-glow/30 blur-3xl animate-float" style={{ animationDelay: "2s" }} />
    </div>
    <div className="container relative text-white">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-sm font-semibold uppercase tracking-wider text-primary-glow">{eyebrow}</span>
        <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-5">{title}</h2>
        <p className="text-lg text-white/75">{description}</p>
      </div>
      {stats && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
          {stats.map((s) => (
            <div key={s.label} className="glass-on-deep rounded-2xl p-5 text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-glow">{s.value}</div>
              <div className="text-xs uppercase tracking-wider text-white/70 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      )}
      {features && (
        <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto mb-10">
          {features.map((f, i) => (
            <div key={f.title} className="glass-on-deep rounded-2xl p-6 hover:-translate-y-1 transition-transform animate-fade-in" style={{ animationDelay: `${i * 80}ms` }}>
              <div className="w-11 h-11 rounded-lg bg-primary/20 flex items-center justify-center mb-3">
                <f.icon className="w-5 h-5 text-primary-glow" />
              </div>
              <h3 className="font-bold mb-1.5">{f.title}</h3>
              <p className="text-sm text-white/70">{f.desc}</p>
            </div>
          ))}
        </div>
      )}
      {ctaLabel && ctaMessage && (
        <div className="text-center">
          <Button asChild size="lg" className="bg-white text-foreground hover:bg-white/90 h-12 px-7 gap-2">
            <a href={waLink(ctaMessage)} target="_blank" rel="noopener noreferrer">
              {ctaLabel} <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
        </div>
      )}
    </div>
  </section>
);