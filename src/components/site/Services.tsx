import { Code2, Sparkles, Brain } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const services = [
  {
    icon: Code2,
    name: "Software Solutions",
    desc: "Custom web apps, platforms, and tools built to fit your business — from MVPs to enterprise systems.",
    deep: "We design and ship full-stack software: marketing sites, internal tools, SaaS platforms, dashboards, and APIs. Built with modern stacks, optimized for performance, and ready to scale.",
  },
  {
    icon: Sparkles,
    name: "Creative Hub",
    desc: "Brand, content, and growth marketing engineered to compound — not one-off campaigns.",
    deep: "Strategy, content production, paid media, email, and CRO under one roof. We measure everything and double down on what wins, so your marketing stops being a cost center.",
  },
  {
    icon: Brain,
    name: "AI & Automation",
    desc: "Workflows, agents, and data pipelines that take repetitive work off your team.",
    deep: "From simple no-code automations to custom AI agents and predictive models. We integrate with your existing stack to cut hours, errors, and operational cost.",
  },
];

export const Services = () => (
  <section id="services" className="py-24 relative">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in">
        <span className="text-sm font-medium text-primary uppercase tracking-wider">What we do</span>
        <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">Three engines. One growth machine.</h2>
        <p className="text-muted-foreground text-lg">Pick a service or combine all three. Every engagement is sold by the calculator below — no quote calls, no surprises.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <HoverCard key={s.name} openDelay={150}>
            <HoverCardTrigger asChild>
              <div
                className="glass rounded-2xl p-8 group cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-glow animate-fade-in"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-hero flex items-center justify-center mb-6 shadow-glow group-hover:scale-110 transition-transform">
                  <s.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{s.name}</h3>
                <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </HoverCardTrigger>
            <HoverCardContent className="w-80 glass border-primary/20">
              <p className="text-sm leading-relaxed">{s.deep}</p>
            </HoverCardContent>
          </HoverCard>
        ))}
      </div>
    </div>
  </section>
);