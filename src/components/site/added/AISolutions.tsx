import { Cloud, Settings, RefreshCw, ClipboardList, GraduationCap, FlaskConical, Users, Bot, Ruler, BarChart3, Cog } from "lucide-react";

const cards = [
  { icon: ClipboardList, t: "AI Project Management", d: "Intelligent planning, resource allocation, and progress tracking — AI that keeps your projects on time and on budget automatically." },
  { icon: GraduationCap, t: "AI Trainings", d: "Practical, hands-on training programs for teams, schools and organizations ready to adopt and leverage AI tools in their daily operations." },
  { icon: FlaskConical, t: "AI Research", d: "Applied AI research tailored to African industry challenges — from agriculture to finance — translating academic innovation into deployable solutions." },
  { icon: Users, t: "Employee Training & AI Adoption", d: "Structured change management and upskilling programs that ensure your workforce embraces AI confidently and effectively across every department." },
  { icon: Bot, t: "Chatbots & Virtual Assistants", d: "Custom AI-powered chatbots that handle customer service, lead qualification, FAQs, and internal helpdesks — 24/7, without human intervention." },
  { icon: Ruler, t: "AI in Data Science", d: "From data collection and cleaning to model building and deployment — we turn your raw data into predictive intelligence that drives smarter decisions." },
  { icon: BarChart3, t: "AI in Analytics", d: "Real-time dashboards, KPI monitoring, and predictive analytics that give leadership a clear, data-driven view of business performance at all times." },
  { icon: Cog, t: "AI in Business Processes", d: "End-to-end automation of finance, HR, procurement, and operations processes — reducing overhead and eliminating human error at every workflow stage." },
];

const backbones = [
  { icon: Cloud, t: "AI & Cloud: The Backbone of Modern Business", d: "Just as electricity powered the industrial revolution, AI and cloud infrastructure are now the foundational layer of every competitive business operation — enabling intelligence, agility, and scale." },
  { icon: Settings, t: "Digital Transformation Strategy", d: "We guide organizations through a structured, end-to-end shift into digital-first operations — from legacy systems to cloud-native, AI-augmented business models built for sustained growth." },
  { icon: RefreshCw, t: "AI & Business Process Automation (BPA)", d: "We replace slow, error-prone manual workflows with intelligent automation — freeing your teams to focus on high-value work while AI handles the repetitive, time-consuming tasks." },
];

export const AISolutions = () => (
  <section id="ai-solutions" className="py-24 scroll-mt-20">
    <div className="container">
      <div className="grid lg:grid-cols-2 gap-12 mb-16 items-start">
        <div className="animate-fade-in">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">🧠 Generative AI for Business</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">
            How AI Transforms<br />
            <span className="gradient-text">Businesses in Africa</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-4">
            Generative AI is not a future concept — it is a present competitive advantage. African businesses that deploy AI across their operations are compounding growth, cutting costs, and unlocking entirely new revenue streams.
          </p>
          <p className="text-muted-foreground mb-8">
            From intelligent chatbots and data analytics to automated workflows and digital transformation strategy, Intelli-Sys delivers AI that works in Africa's real business environment.
          </p>
          <div className="grid grid-cols-3 gap-4">
            {[{ n: "3×", l: "Faster decisions" }, { n: "60%", l: "Cost reduction" }, { n: "24/7", l: "AI-powered ops" }].map((s) => (
              <div key={s.l} className="glass rounded-xl p-4 text-center">
                <div className="text-3xl font-bold gradient-text">{s.n}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-4 animate-fade-in">
          {backbones.map((b) => (
            <div key={b.t} className="glass rounded-2xl p-5 flex gap-4 items-start">
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center shrink-0">
                <b.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">{b.t}</h4>
                <p className="text-sm text-muted-foreground">{b.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {cards.map((c, i) => (
          <div key={c.t} className="glass rounded-2xl p-5 hover:-translate-y-1 hover:shadow-glow transition-all animate-fade-in" style={{ animationDelay: `${i * 60}ms` }}>
            <div className="w-11 h-11 rounded-xl bg-accent flex items-center justify-center mb-3">
              <c.icon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">{c.t}</h3>
            <p className="text-xs text-muted-foreground">{c.d}</p>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-10">
        <div className="glass rounded-2xl p-6 flex gap-4 items-start">
          <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center shrink-0">
            <Cloud className="w-7 h-7 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">AI & Cloud as the Backbone of Business Operations</h3>
            <p className="text-sm text-muted-foreground">Cloud infrastructure and AI are no longer optional add-ons — they are the operating system of competitive business. Intelli-Sys helps organizations architect, migrate, and optimize their AI-cloud backbone for scalability, security, and performance. From hybrid cloud setups to fully managed AI environments, we build the foundation that lets every other business system run smarter.</p>
          </div>
        </div>
        <div className="glass rounded-2xl p-6 flex gap-4 items-start">
          <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center shrink-0">
            <RefreshCw className="w-7 h-7 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Digital Transformation Strategy & AI-Driven BPA</h3>
            <p className="text-sm text-muted-foreground">True digital transformation goes beyond software — it requires rethinking how your entire business operates. Our strategists map your current state, identify automation opportunities, and design a transformation roadmap that integrates AI, cloud, and BPA frameworks. The result: a leaner, faster, more intelligent organization that can adapt, compete, and grow in the AI era.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);