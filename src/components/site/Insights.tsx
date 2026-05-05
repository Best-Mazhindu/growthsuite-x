import { ArrowRight } from "lucide-react";

const posts = [
  { tag: "AI Trends", title: "How AI Agents Will Replace SaaS Dashboards by 2027", excerpt: "From clicking through dashboards to instructing agents — the next interface shift." },
  { tag: "Automation", title: "5 Workflows Every Growing Business Should Automate First", excerpt: "Quick wins that pay back in weeks, not quarters." },
  { tag: "Digital Transformation", title: "Why Custom Systems Beat Off-the-Shelf for Scale-ups", excerpt: "When templates start costing more than they save." },
];

export const Insights = () => (
  <section id="insights" className="py-24 scroll-mt-20">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-sm font-medium text-primary uppercase tracking-wider">Insights</span>
        <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">Ideas, trends & playbooks.</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {posts.map((p, i) => (
          <article key={p.title} className="glass rounded-2xl p-6 hover:-translate-y-2 hover:shadow-glow transition-all animate-fade-in cursor-pointer" style={{ animationDelay: `${i * 80}ms` }}>
            <span className="text-xs font-semibold uppercase text-primary tracking-wider">{p.tag}</span>
            <h3 className="font-bold text-lg mt-3 mb-2">{p.title}</h3>
            <p className="text-sm text-muted-foreground mb-4">{p.excerpt}</p>
            <span className="text-sm font-semibold text-primary inline-flex items-center gap-1">Read article <ArrowRight className="w-3.5 h-3.5" /></span>
          </article>
        ))}
      </div>
    </div>
  </section>
);