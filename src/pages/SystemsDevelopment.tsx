import { useState } from "react";
import { Globe, Smartphone, Layers, Building2, UsersRound, ShoppingCart, GraduationCap, Boxes, Plug, Cloud, Rocket, ShieldCheck, Wrench, Code2 } from "lucide-react";
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
import heroImg from "@/assets/dev-hero.jpg";

const services = [
  { icon: Globe, title: "Website Development", items: ["Corporate sites", "Landing pages", "CMS-powered sites"] },
  { icon: Smartphone, title: "Mobile App Development", items: ["iOS & Android", "React Native", "Native performance"] },
  { icon: Layers, title: "SaaS Platforms", items: ["Multi-tenant", "Subscription billing", "Scalable architecture"] },
  { icon: Building2, title: "ERP Systems", items: ["HR, Finance, Inventory", "Custom modules", "Reporting"] },
  { icon: UsersRound, title: "CRM Systems", items: ["Sales pipelines", "Customer 360", "Automations"] },
  { icon: ShoppingCart, title: "E-Commerce Systems", items: ["Online stores", "Payment integrations", "Inventory sync"] },
  { icon: GraduationCap, title: "School Management", items: ["Student records", "Fees & billing", "Parent portal"] },
  { icon: Boxes, title: "POS & Inventory", items: ["Point of sale", "Stock management", "Multi-branch"] },
  { icon: Plug, title: "API Integrations", items: ["Third-party APIs", "Custom microservices", "Webhooks"] },
  { icon: Cloud, title: "Cloud Infrastructure", items: ["AWS / GCP / Azure", "DevOps & CI/CD", "Monitoring"] },
];

const tiers = [
  { name: "Starter System", price: "$499", tagline: "Get your business online.", features: ["Business website", "Admin dashboard", "Responsive UI", "Hosting setup"], ctaMessage: "Hi Intelli-Sys, I want the Starter System package ($499)." },
  { name: "Business Automation", price: "$799+", tagline: "Automate your workflows.", highlighted: true, features: ["Custom workflows", "Dashboards", "Integrations", "Automation systems", "Training"], ctaMessage: "Hi Intelli-Sys, I want the Business Automation package ($799+)." },
  { name: "Enterprise Development", price: "Custom", tagline: "Mission-critical systems.", features: ["Large-scale systems", "Mobile apps", "Cloud deployment", "Enterprise integrations", "SLA support"], ctaMessage: "Hi Intelli-Sys, I'd like an Enterprise Development quote." },
];

const steps = [
  { title: "Discovery", desc: "Requirements workshop and scope definition." },
  { title: "UI/UX Design", desc: "Wireframes, prototypes, and design system." },
  { title: "System Architecture", desc: "Database, APIs, and tech stack planning." },
  { title: "Development", desc: "Agile sprints with weekly demos." },
  { title: "Testing", desc: "QA, security audits, performance testing." },
  { title: "Deployment", desc: "Cloud rollout with zero downtime." },
  { title: "Maintenance & Support", desc: "Ongoing updates, monitoring, and SLA." },
];

const timelines = [
  { phase: "UI/UX Design", duration: "3–7 Days" },
  { phase: "MVP Development", duration: "2–4 Weeks" },
  { phase: "Enterprise Systems", duration: "1–3 Months" },
  { phase: "Maintenance", duration: "Ongoing" },
];

const whys = [
  { icon: Layers, title: "Scalable Architecture", desc: "Built to handle 10x growth without rewrites." },
  { icon: Code2, title: "Modern Technologies", desc: "React, Node, Postgres, TypeScript, cloud-native." },
  { icon: Cloud, title: "Cloud-Ready Systems", desc: "Deployed on AWS, GCP, or your private cloud." },
  { icon: Rocket, title: "Fast Deployment", desc: "MVPs shipped in weeks, not months." },
  { icon: ShieldCheck, title: "Enterprise Security", desc: "Encryption, RBAC, audit logs out of the box." },
  { icon: Wrench, title: "Ongoing Support", desc: "Dedicated maintenance and feature pipelines." },
];

const faqs = [
  { q: "Do I own the source code?", a: "Yes — full source code and IP transfer on project completion." },
  { q: "Can you maintain existing systems?", a: "Yes, we audit and take over legacy systems regularly." },
  { q: "What tech stack do you use?", a: "React, Node.js, TypeScript, Postgres, and cloud platforms (AWS/GCP). We adapt to your stack if needed." },
  { q: "Do you sign NDAs?", a: "Always. NDAs are signed before any technical discovery begins." },
];

const Calc = () => {
  const [modules, setModules] = useState([5]);
  const [users, setUsers] = useState([50]);
  const [integrations, setIntegrations] = useState([2]);
  const [roles, setRoles] = useState([3]);
  const [mobile, setMobile] = useState(false);
  const [cloud, setCloud] = useState(true);

  const base = 799;
  const moduleCost = modules[0] * 380;
  const userCost = users[0] * 6;
  const integCost = integrations[0] * 420;
  const roleCost = roles[0] * 180;
  const mobileCost = mobile ? 2500 : 0;
  const cloudCost = cloud ? 650 : 0;
  const total = Math.round(base + moduleCost + userCost + integCost + roleCost + mobileCost + cloudCost);

  const msg = `Hi Intelli-Sys, my system project estimate is ~$${total} (${modules[0]} modules, ${users[0]} users, ${integrations[0]} integrations, ${roles[0]} roles, mobile: ${mobile}, cloud: ${cloud}). Please send a proposal.`;

  return (
    <section id="calculator" className="py-24 scroll-mt-20">
      <div className="container max-w-5xl">
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Project Calculator</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3">Estimate Your Build Cost</h2>
        </div>
        <div className="glass rounded-3xl p-6 md:p-10 grid md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div><Label className="flex justify-between mb-3"><span>Number of modules</span><span className="text-primary font-bold">{modules[0]}</span></Label><Slider value={modules} onValueChange={setModules} min={1} max={20} step={1} /></div>
            <div><Label className="flex justify-between mb-3"><span>Number of users</span><span className="text-primary font-bold">{users[0]}</span></Label><Slider value={users} onValueChange={setUsers} min={5} max={2000} step={5} /></div>
            <div><Label className="flex justify-between mb-3"><span>Integrations</span><span className="text-primary font-bold">{integrations[0]}</span></Label><Slider value={integrations} onValueChange={setIntegrations} min={0} max={10} step={1} /></div>
            <div><Label className="flex justify-between mb-3"><span>Admin roles</span><span className="text-primary font-bold">{roles[0]}</span></Label><Slider value={roles} onValueChange={setRoles} min={1} max={10} step={1} /></div>
            <div className="flex items-center justify-between"><Label>Mobile app included</Label><Switch checked={mobile} onCheckedChange={setMobile} /></div>
            <div className="flex items-center justify-between"><Label>Cloud hosting</Label><Switch checked={cloud} onCheckedChange={setCloud} /></div>
          </div>
          <div className="flex flex-col justify-center text-center bg-gradient-hero rounded-2xl p-8 text-primary-foreground shadow-glow">
            <div className="text-sm uppercase tracking-wider opacity-90">Estimated Project Cost</div>
            <div className="text-5xl md:text-6xl font-bold my-4">${total.toLocaleString()}</div>
            <p className="text-sm opacity-90 mb-6">One-off build. Maintenance plans available from $99/mo.</p>
            <Button asChild size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
              <a href={waLink(msg)} target="_blank" rel="noopener noreferrer">Request Development Quote</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const SystemsDevelopment = () => {
  const ctaMsg = "Hi Intelli-Sys, I'd like to book a free discovery call for a custom system.";
  return (
    <FunnelShell ctaMessage={ctaMsg}>
      <FunnelHero
        eyebrow="Systems Development Funnel"
        title="Custom Systems Built For Growth & Automation"
        subtitle="We develop scalable websites, mobile apps, SaaS platforms, business systems, ERP solutions, and automation tools tailored to your organization."
        primaryLabel="Start Your Project"
        secondaryLabel="View Development Packages"
        onSecondary={() => document.getElementById("packages")?.scrollIntoView({ behavior: "smooth" })}
        primaryMessage={ctaMsg}
        image={heroImg}
        stats={[{ value: "80+", label: "Systems Built" }, { value: "99.9%", label: "Uptime" }, { value: "4wk", label: "MVP Speed" }]}
      />
      <ServiceGrid eyebrow="Development Services" title="Every System Your Business Needs" subtitle="From websites to enterprise SaaS — engineered to scale." services={services} />
      <PricingTiers eyebrow="Packages" title="Development Packages" tiers={tiers} showToggle={false} />
      <Calc />
      <ProcessFlow eyebrow="Our Process" title="How We Build" steps={steps} />
      <Timeline eyebrow="Timelines" title="Project Phases" items={timelines} />
      <WhyCards eyebrow="Why Intelli-Sys" title="Engineering Excellence" cards={whys} />
      <TestimonialsSlider />
      <FAQAccordion items={faqs} />
      <LeadForm category="systems-development" headline="Build Your Next Digital System With Intelli-Sys" subline="Send us your project details — we'll respond with scope, timeline, and pricing within 24 hours." ctaLabel="Request Development Quote" waMessagePrefix="Hi Intelli-Sys, I want to build a custom system." />
    </FunnelShell>
  );
};

export default SystemsDevelopment;