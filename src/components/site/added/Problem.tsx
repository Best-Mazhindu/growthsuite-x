import { Hourglass, TrendingDown, BrainCog, Banknote } from "lucide-react";

const cards = [
  { icon: Hourglass, t: "Manual Processes Are Killing Growth", d: "Hours wasted on tasks that AI can complete in seconds. Your team is burnt out on admin while competitors automate and scale exponentially." },
  { icon: TrendingDown, t: "Losing Ground to AI-Powered Competitors", d: "Global and regional businesses using AI marketing, analytics, and automation are eating your market share — right now, today." },
  { icon: BrainCog, t: "Critical Shortage of AI Skills & Infrastructure", d: "Your team lacks the tools to use AI, cloud systems, or data analytics effectively. Training is scattered, expensive, and inaccessible." },
  { icon: Banknote, t: "Massive Missed Revenue Opportunities", d: "AI-driven businesses see 3–5× more efficiency and revenue growth. Every month without AI is real money left on the table." },
];

export const Problem = () => (
  <section id="problem" className="py-24 scroll-mt-20">
    <div className="container">
      <div className="max-w-3xl mb-12 animate-fade-in">
        <span className="text-sm font-medium text-primary uppercase tracking-wider">⚠️ The Problem</span>
        <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">
          Africa Is Falling Behind.<br />
          <span className="gradient-text">Every Day Costs You.</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          While the world automates, optimizes, and scales with AI — most African businesses are still trapped in manual, outdated systems. The gap is widening. Fast.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((c, i) => (
          <div key={c.t} className="glass rounded-2xl p-6 hover:-translate-y-1 hover:shadow-glow transition-all animate-fade-in" style={{ animationDelay: `${i * 80}ms` }}>
            <div className="w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center shadow-glow mb-4">
              <c.icon className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="font-semibold mb-2">{c.t}</h3>
            <p className="text-sm text-muted-foreground">{c.d}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);