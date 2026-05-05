import { Dna } from "lucide-react";

const supporting = ["Autonomous Agents", "Cognitive Systems", "Adaptive AI", "Multi-modal Reasoning", "Quantum Horizon"];
const comingSoon = [
  "🌐 Web3 & Decentralized AI",
  "🤖 Humanoid Robotics",
  "🧠 Brain-Computer Interfaces",
  "🌍 AI for Climate & Agriculture",
  "🔐 Post-Quantum Cryptography",
];

export const Emerging = () => (
  <section id="emerging" className="py-24 bg-gradient-soft scroll-mt-20">
    <div className="container">
      <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
        <span className="text-sm font-medium text-primary uppercase tracking-wider">🔭 What's Coming Next</span>
        <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">The Future Is <span className="gradient-text">Already Being Built</span></h2>
        <p className="text-muted-foreground text-lg">
          Beyond current AI — the next wave of transformative technologies is arriving. Intelli-Sys is positioning Africa to be at the forefront of these breakthroughs.
        </p>
      </div>

      <div className="grid lg:grid-cols-1 gap-6 mb-10">
        <div className="relative glass rounded-3xl p-8 md:p-10 overflow-hidden hover:shadow-glow transition-all animate-fade-in">
          <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-gradient-hero opacity-15 blur-3xl" />
          <div className="relative">
            <div className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-full bg-accent text-accent-foreground border border-border mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Emerging Technology
            </div>
            <div className="flex items-start gap-4 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center shrink-0">
                <Dna className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-2">🧬 Synthetic Intelligence</h3>
                <p className="text-muted-foreground">
                  Beyond narrow AI — synthetic intelligence combines reasoning, learning, and creativity in ways that mirror and extend human cognitive capability. It opens new frontiers in autonomous decision-making, adaptive systems, and creative problem-solving at machine speed.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-6">
              {supporting.map((s) => (
                <span key={s} className="text-xs px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground border border-border">
                  • {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="glass rounded-2xl p-6 md:p-8 grid lg:grid-cols-[1fr_auto] gap-6 items-center animate-fade-in">
        <div>
          <h4 className="text-xl font-bold mb-2">🚀 More Emerging Technologies on the Roadmap</h4>
          <p className="text-sm text-muted-foreground">
            Intelli-Sys is actively researching and preparing Africa-ready deployment strategies for the next wave of transformative technologies.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {comingSoon.map((p) => (
            <span key={p} className="text-xs px-3 py-1.5 rounded-full bg-accent text-accent-foreground border border-border">{p}</span>
          ))}
        </div>
      </div>
    </div>
  </section>
);