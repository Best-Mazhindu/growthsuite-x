import { Bot, Cloud, BarChart3, GraduationCap } from "lucide-react";

const pills = [
  { icon: Bot, t: "AI Solutions & Automation", d: "Custom AI systems, chatbots, workflow automation" },
  { icon: Cloud, t: "Cloud & Digital Infrastructure", d: "Scalable, secure, high-performance cloud systems" },
  { icon: BarChart3, t: "Data Analytics & Intelligence", d: "Real insights from your business data, powered by AI" },
  { icon: GraduationCap, t: "AI Training & Empowerment", d: "Practical programs for teams, youth, schools & NGOs" },
];

const steps = [
  { n: 1, t: "Learn", d: "AI literacy & digital skills for your entire team" },
  { n: 2, t: "Automate", d: "Replace manual tasks with smart, efficient systems" },
  { n: 3, t: "Innovate", d: "Build AI-powered products and market differentiators" },
  { n: 4, t: "Scale", d: "Grow faster with data, cloud & AI infrastructure" },
];

export const Solution = () => (
  <section id="solution" className="py-24 bg-gradient-soft scroll-mt-20">
    <div className="container grid lg:grid-cols-2 gap-12 items-start">
      <div className="animate-fade-in">
        <span className="text-sm font-medium text-primary uppercase tracking-wider">💡 The Solution</span>
        <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">
          We Are the Bridge Between Africa &<br />
          <span className="gradient-text">the AI Future</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-8">
          Intelli-Sys is an end-to-end AI solutions company — we don't just consult, we implement, train, and scale with you.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {pills.map((p) => (
            <div key={p.t} className="glass rounded-xl p-4 flex gap-3 items-start">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center shrink-0">
                <p.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-sm">{p.t}</h4>
                <p className="text-xs text-muted-foreground mt-1">{p.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="glass rounded-2xl p-8 animate-fade-in">
        <div className="font-semibold mb-6 text-lg">🗺️ Your Transformation Journey</div>
        <div className="space-y-4">
          {steps.map((s) => (
            <div key={s.n} className="flex items-start gap-4 p-4 rounded-xl bg-card/50 border border-border">
              <div className="w-10 h-10 rounded-full bg-gradient-hero text-primary-foreground font-bold flex items-center justify-center shrink-0 shadow-glow">
                {s.n}
              </div>
              <div>
                <div className="font-semibold">{s.t}</div>
                <p className="text-sm text-muted-foreground">{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);