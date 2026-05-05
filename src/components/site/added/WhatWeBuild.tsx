import { Bot, Cloud, Zap, BarChart3, Smartphone, GraduationCap } from "lucide-react";

const cards = [
  { n: "01", icon: Bot, t: "Custom AI Systems", d: "We design and deploy AI models, recommendation engines, and intelligent automation pipelines that learn from your data and continuously improve decision-making across your operations.", tags: ["Machine Learning", "NLP", "Computer Vision", "GenAI"] },
  { n: "02", icon: Cloud, t: "Cloud & AI Infrastructure", d: "From hybrid cloud architectures to fully managed AI environments — we build the digital backbone that makes everything else possible: scalable, secure, and always available.", tags: ["Multi-Cloud", "Hybrid Architecture", "DevOps", "Security"] },
  { n: "03", icon: Zap, t: "Business Process Automation", d: "We map, redesign, and automate your most critical workflows — replacing slow, error-prone manual processes with intelligent systems that run faster, cheaper, and smarter.", tags: ["RPA", "Workflow AI", "Integration", "BPM"] },
  { n: "04", icon: BarChart3, t: "Data & Analytics Platforms", d: "We turn raw business data into strategic intelligence — building dashboards, predictive models, and BI platforms that give leadership real-time visibility and foresight.", tags: ["Data Science", "BI Dashboards", "Predictive AI", "ETL"] },
  { n: "05", icon: Smartphone, t: "Software & Application Development", d: "Web apps, mobile platforms, desktop systems, and AI-integrated SaaS products — built fast, deployed reliably, and designed to scale with your business from day one.", tags: ["Web Apps", "Mobile", "APIs", "SaaS"] },
  { n: "06", icon: GraduationCap, t: "AI Training & Digital Skills", d: "We build human capacity — delivering structured AI literacy programs, hands-on tool training, and digital transformation education for teams, institutions, and communities.", tags: ["AI Literacy", "Corporate Training", "Certification", "Workshops"] },
];

export const WhatWeBuild = () => (
  <section id="what-we-build" className="py-24 scroll-mt-20">
    <div className="container">
      <div className="max-w-3xl mb-12 animate-fade-in">
        <span className="text-sm font-medium text-primary uppercase tracking-wider">🔧 What We Build</span>
        <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">
          Intelligent Systems.<br />
          <span className="gradient-text">Built to Work. Built to Last.</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          Every solution we deliver is purposefully engineered — combining AI, cloud, automation, and software into systems that create measurable business outcomes.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((c, i) => (
          <div key={c.n} className="relative glass rounded-2xl p-6 hover:-translate-y-1 hover:shadow-glow transition-all animate-fade-in" style={{ animationDelay: `${i * 70}ms` }}>
            <div className="absolute top-4 right-5 text-4xl font-bold text-muted/40">{c.n}</div>
            <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4">
              <c.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-2">{c.t}</h3>
            <p className="text-sm text-muted-foreground mb-4">{c.d}</p>
            <div className="flex flex-wrap gap-2">
              {c.tags.map((t) => (
                <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground border border-border">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);