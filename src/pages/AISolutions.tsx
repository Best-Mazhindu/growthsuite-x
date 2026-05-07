import { useState } from "react";
import { Bot, Brain, Workflow, LineChart, Megaphone, Headphones, LayoutDashboard, GraduationCap, Cpu, Plug, ShieldCheck, Cloud, Rocket, Users, Globe2 } from "lucide-react";
import { FunnelShell } from "@/components/funnel/FunnelShell";
import { FunnelHero } from "@/components/funnel/FunnelHero";
import { ServiceGrid } from "@/components/funnel/ServiceGrid";
import { PricingTiers } from "@/components/funnel/PricingTiers";
import { ProcessFlow } from "@/components/funnel/ProcessFlow";
import { Timeline } from "@/components/funnel/Timeline";
import { WhyCards } from "@/components/funnel/WhyCards";
import { TestimonialsSlider } from "@/components/funnel/TestimonialsSlider";
import { FAQAccordion } from "@/components/funnel/FAQAccordion";
import { LeadForm } from "@/components/funnel/LeadForm";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { waLink } from "@/lib/pricing";
import heroImg from "@/assets/ai-hero.jpg";
import humanAI from "@/assets/human-ai.jpg";
import humanTeam from "@/assets/human-team.jpg";
import { HumanFeature } from "@/components/funnel/HumanFeature";
import { DeepBand } from "@/components/funnel/DeepBand";

const services = [
  { icon: Bot, title: "AI Chatbots", items: ["24/7 customer engagement", "Multi-channel deployment", "Lead capture & qualification"] },
  { icon: Brain, title: "AI Virtual Assistants", items: ["Voice & text assistants", "Custom GPT agents", "Knowledge-base trained"] },
  { icon: Workflow, title: "Business Automation", items: ["Workflow automations", "RPA integrations", "End-to-end pipelines"] },
  { icon: LineChart, title: "Predictive Analytics", items: ["Forecasting models", "Risk scoring", "Customer churn prediction"] },
  { icon: Megaphone, title: "AI Marketing Systems", items: ["Personalization engines", "Auto-generated creatives", "Campaign optimization"] },
  { icon: Headphones, title: "AI Customer Support", items: ["Ticket triage", "Auto-resolution", "Sentiment analysis"] },
  { icon: LayoutDashboard, title: "AI Dashboards", items: ["Live KPIs", "Anomaly detection", "Natural-language queries"] },
  { icon: GraduationCap, title: "AI Training & Workshops", items: ["Team upskilling", "Custom curriculum", "Certification programs"] },
  { icon: Cpu, title: "Machine Learning Systems", items: ["Custom model training", "Computer vision", "NLP solutions"] },
  { icon: Plug, title: "AI Integrations", items: ["CRM, ERP & SaaS", "OpenAI, Gemini, Claude", "Custom APIs"] },
];

const tiers = [
  { name: "AI Starter", price: "$299", tagline: "Begin your AI journey.", features: ["Basic chatbot", "AI consultation", "Automation setup", "30-day support"], ctaMessage: "Hi Intelli-Sys, I want the AI Starter package ($299)." },
  { name: "AI Business", price: "$799", tagline: "Automate your operations.", highlighted: true, features: ["AI chatbot", "AI workflow automation", "Analytics dashboard", "AI integrations", "Team training"], ctaMessage: "Hi Intelli-Sys, I want the AI Business package ($799)." },
  { name: "Enterprise AI", price: "Custom", tagline: "Full AI transformation.", features: ["Full AI transformation", "Enterprise automation", "Custom AI systems", "Advanced analytics", "Dedicated AI team"], ctaMessage: "Hi Intelli-Sys, I'd like an Enterprise AI proposal." },
];

const steps = [
  { title: "AI Readiness Assessment", desc: "We audit your data, processes, and goals." },
  { title: "Solution Planning", desc: "Tailored AI roadmap with measurable KPIs." },
  { title: "AI Development", desc: "Models, agents, and automations built to spec." },
  { title: "Integration", desc: "Connected to your CRM, ERP, and tools." },
  { title: "Testing", desc: "Rigorous QA, accuracy, and bias testing." },
  { title: "Deployment", desc: "Production rollout with monitoring." },
  { title: "Optimization", desc: "Continuous learning and improvement." },
];

const timelines = [
  { phase: "Consultation", duration: "1–3 Days" },
  { phase: "AI Prototype", duration: "1–2 Weeks" },
  { phase: "Deployment", duration: "2–6 Weeks" },
  { phase: "Optimization", duration: "Ongoing" },
];

const whys = [
  { icon: Brain, title: "AI-First Company", desc: "AI is in our DNA — not a side service." },
  { icon: Globe2, title: "Africa-Focused AI", desc: "Solutions built for African markets." },
  { icon: Cloud, title: "Modern Cloud Systems", desc: "Built on AWS, GCP, and Azure." },
  { icon: Rocket, title: "Scalable Architecture", desc: "From 1 user to 1 million." },
  { icon: Workflow, title: "Intelligent Automation", desc: "Real ROI from day one." },
  { icon: ShieldCheck, title: "Enterprise-Grade", desc: "Security, compliance, governance built-in." },
];

const faqs = [
  { q: "Do I need a lot of data to use AI?", a: "Not necessarily. We can leverage pre-trained models and your existing operational data." },
  { q: "Will AI replace my staff?", a: "No — AI augments your team, removing repetitive work so they focus on high-value tasks." },
  { q: "Which AI models do you use?", a: "OpenAI GPT, Google Gemini, Claude, Llama, plus custom-trained models depending on the use case." },
  { q: "Is my data safe?", a: "Yes. We use private cloud deployments and never train public models on your data." },
];

const Calc = () => {
  const [users, setUsers] = useState([100]);
  const [integrations, setIntegrations] = useState([2]);
  const [workflows, setWorkflows] = useState([3]);
  const [complexity, setComplexity] = useState([2]);
  const [analytics, setAnalytics] = useState(true);

  const base = 499;
  const userCost = users[0] * 1.5;
  const integCost = integrations[0] * 350;
  const wfCost = workflows[0] * 280;
  const complexCost = complexity[0] * 450;
  const analyticsCost = analytics ? 600 : 0;
  const total = Math.round(base + userCost + integCost + wfCost + complexCost + analyticsCost);

  const msg = `Hi Intelli-Sys, my AI project estimate is ~$${total} (${users[0]} users, ${integrations[0]} integrations, ${workflows[0]} workflows, complexity ${complexity[0]}/5, analytics: ${analytics}). Please send a proposal.`;

  return (
    <section id="calculator" className="py-24 scroll-mt-20 bg-gradient-soft">
      <div className="container max-w-5xl">
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">AI Project Calculator</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3">Estimate Your AI Investment</h2>
        </div>
        <div className="glass rounded-3xl p-6 md:p-10 grid md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div><Label className="flex justify-between mb-3"><span>Number of users</span><span className="text-primary font-bold">{users[0]}</span></Label><Slider value={users} onValueChange={setUsers} min={10} max={5000} step={10} /></div>
            <div><Label className="flex justify-between mb-3"><span>AI integrations</span><span className="text-primary font-bold">{integrations[0]}</span></Label><Slider value={integrations} onValueChange={setIntegrations} min={1} max={10} step={1} /></div>
            <div><Label className="flex justify-between mb-3"><span>Automation workflows</span><span className="text-primary font-bold">{workflows[0]}</span></Label><Slider value={workflows} onValueChange={setWorkflows} min={1} max={15} step={1} /></div>
            <div><Label className="flex justify-between mb-3"><span>Chatbot complexity (1–5)</span><span className="text-primary font-bold">{complexity[0]}</span></Label><Slider value={complexity} onValueChange={setComplexity} min={1} max={5} step={1} /></div>
            <div className="flex items-center justify-between"><Label>Analytics features</Label><Switch checked={analytics} onCheckedChange={setAnalytics} /></div>
          </div>
          <div className="flex flex-col justify-center text-center bg-gradient-hero rounded-2xl p-8 text-primary-foreground shadow-glow">
            <div className="text-sm uppercase tracking-wider opacity-90">Estimated Project Cost</div>
            <div className="text-5xl md:text-6xl font-bold my-4">${total.toLocaleString()}</div>
            <p className="text-sm opacity-90 mb-6">One-off build with optional monthly support.</p>
            <Button asChild size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
              <a href={waLink(msg)} target="_blank" rel="noopener noreferrer">Get Detailed Proposal</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const AISolutionsPage = () => {
  const ctaMsg = "Hi Intelli-Sys, I'd like a free AI consultation.";
  return (
    <FunnelShell ctaMessage={ctaMsg}>
      <FunnelHero
        eyebrow="AI Solutions Funnel"
        title="Transform Your Business With Artificial Intelligence"
        subtitle="Deploy intelligent AI systems, automation tools, chatbots, analytics, and business intelligence solutions designed for modern organizations."
        primaryLabel="Get AI Consultation"
        secondaryLabel="Explore AI Packages"
        onSecondary={() => document.getElementById("packages")?.scrollIntoView({ behavior: "smooth" })}
        primaryMessage={ctaMsg}
        image={heroImg}
        stats={[{ value: "60%", label: "Cost Cut" }, { value: "24/7", label: "AI Uptime" }, { value: "10x", label: "Faster" }]}
      />
      <ServiceGrid eyebrow="AI Services" title="Intelligent Solutions Built For You" subtitle="From chatbots to enterprise ML — we ship AI that actually works." services={services} />
      <HumanFeature
        eyebrow="AI With A Human Touch"
        title="Real consultants. Real models. Real ROI."
        description="We don't drop AI on you and disappear. Our consultants sit with your team to design automations and agents that solve specific business problems."
        bullets={[
          { icon: Brain, label: "Bespoke AI agents trained on your data" },
          { icon: Workflow, label: "End-to-end workflow automation" },
          { icon: ShieldCheck, label: "Private deployments — your data stays yours" },
        ]}
        image={humanAI}
        imageSide="right"
        variant="sky"
        floatStat={{ value: "60%", label: "Cost reduction" }}
      />
      <PricingTiers eyebrow="AI Packages" title="Pick Your AI Tier" tiers={tiers} showToggle={false} />
      <DeepBand
        eyebrow="Trusted By Growing Enterprises"
        title="Why teams choose Intelli-Sys for AI"
        description="Africa-focused AI built on world-class infrastructure — fast to deploy, safe to scale."
        features={[
          { icon: Brain, title: "AI-First DNA", desc: "Models, agents and automations are our core craft." },
          { icon: Cloud, title: "Enterprise Cloud", desc: "AWS, GCP, Azure — your choice of region." },
          { icon: ShieldCheck, title: "Private & Compliant", desc: "Your data never trains public models." },
        ]}
        ctaLabel="Talk to an AI consultant"
        ctaMessage="Hi Intelli-Sys, I'd like a free AI consultation."
      />
      <Calc />
      <HumanFeature
        eyebrow="Adoption That Actually Sticks"
        title="We train your team to win with AI"
        description="Every deployment includes onboarding, documentation, and live training sessions so your people own the tools — not just rent them."
        bullets={[
          { icon: GraduationCap, label: "Hands-on team workshops" },
          { icon: Users, label: "Champion enablement program" },
          { icon: Rocket, label: "Continuous optimisation post-launch" },
        ]}
        image={humanTeam}
        imageSide="left"
        variant="light"
      />
      <ProcessFlow eyebrow="AI Process" title="From Concept to Deployment" steps={steps} tone="sky" />
      <Timeline eyebrow="Timelines" title="AI Project Phases" items={timelines} tone="surface" />
      <WhyCards eyebrow="Why Intelli-Sys AI" title="The AI Partner of Choice" cards={whys} />
      <TestimonialsSlider />
      <FAQAccordion items={faqs} tone="surface" />
      <LeadForm category="ai-solutions" headline="Start Your AI Transformation Today" subline="Schedule a demo or get a custom AI proposal — free." ctaLabel="Get Proposal" waMessagePrefix="Hi Intelli-Sys, I want to start my AI transformation." />
    </FunnelShell>
  );
};

export default AISolutionsPage;