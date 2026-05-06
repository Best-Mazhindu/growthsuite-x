import { useState } from "react";
import { Share2, Bot, Search, Image as ImageIcon, Megaphone, BarChart3, Zap, Globe2, Users, ShieldCheck, Sparkles, TrendingUp } from "lucide-react";
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
import heroImg from "@/assets/marketing-hero.jpg";

const services = [
  { icon: Share2, title: "Social Media Marketing", items: ["Facebook marketing", "Instagram growth", "LinkedIn marketing", "TikTok marketing", "Content management"] },
  { icon: Bot, title: "AI Marketing Automation", items: ["Chatbots", "Automated responses", "Email automation", "Lead nurturing systems", "CRM automation"] },
  { icon: Search, title: "SEO & Visibility", items: ["Google ranking", "Keyword optimization", "Local SEO", "Technical SEO"] },
  { icon: ImageIcon, title: "Content Creation", items: ["Graphics", "Video ads", "Promotional content", "AI-generated creatives"] },
  { icon: Megaphone, title: "Paid Advertising", items: ["Facebook Ads", "Google Ads", "Retargeting campaigns", "Conversion optimization"] },
  { icon: BarChart3, title: "Analytics & Reporting", items: ["ROI tracking", "Campaign reports", "Analytics dashboards"] },
];

const tiers = [
  { name: "Starter", price: "$299/mo", yearly: "$254/mo", tagline: "Get online and consistent.", features: ["Social media setup", "12 posts monthly", "Basic SEO", "Monthly analytics", "1 campaign"], ctaMessage: "Hi Intelli-Sys, I'm interested in the Marketing Starter package ($299/mo)." },
  { name: "Growth", price: "$799/mo", yearly: "$679/mo", tagline: "The full growth engine.", highlighted: true, features: ["Full social media management", "AI automation", "Paid ads management", "Content creation", "SEO optimization", "Analytics dashboard"], ctaMessage: "Hi Intelli-Sys, I'm interested in the Marketing Growth package ($799/mo)." },
  { name: "Enterprise", price: "Custom", tagline: "Own your category.", features: ["Multi-platform campaigns", "Full automation", "AI marketing systems", "Dedicated strategist", "Enterprise analytics", "Conversion optimization"], ctaMessage: "Hi Intelli-Sys, I'd like a custom Enterprise Marketing quote." },
];

const steps = [
  { title: "Consultation", desc: "Free strategy call to understand your business goals." },
  { title: "Strategy Development", desc: "We craft a data-driven marketing roadmap." },
  { title: "Campaign Setup", desc: "Channels, ads, content calendar, and pixels go live." },
  { title: "Automation Integration", desc: "AI bots, email flows, and CRM synced together." },
  { title: "Launch", desc: "Campaigns go live with daily monitoring." },
  { title: "Optimization & Reporting", desc: "Continuous A/B tests and monthly performance reports." },
];

const timelines = [
  { phase: "Setup", duration: "3–7 Days" },
  { phase: "Campaign Launch", duration: "1–2 Weeks" },
  { phase: "Optimization", duration: "Ongoing" },
  { phase: "Reporting", duration: "Monthly" },
];

const whys = [
  { icon: Sparkles, title: "AI-Powered Strategies", desc: "Smarter targeting, faster experiments, better ROAS." },
  { icon: Zap, title: "Fast Execution", desc: "Campaigns live within days, not months." },
  { icon: TrendingUp, title: "Affordable Pricing", desc: "Enterprise quality without enterprise cost." },
  { icon: Globe2, title: "Africa-Focused", desc: "Built for Zimbabwean & African markets." },
  { icon: BarChart3, title: "Data-Driven", desc: "Every decision backed by performance data." },
  { icon: Users, title: "Dedicated Support", desc: "Real strategists, real-time on WhatsApp." },
];

const faqs = [
  { q: "How soon will I see results?", a: "Most clients see measurable engagement within 2 weeks and lead growth within 30–60 days." },
  { q: "Do you manage ad budgets separately?", a: "Yes, ad spend is paid directly to Meta/Google. Our fee covers strategy, creative, and management." },
  { q: "Can I cancel anytime?", a: "All plans are month-to-month. Cancel anytime with 14-day notice." },
  { q: "Do you create the content?", a: "Yes — graphics, captions, video edits, and AI creatives are all included." },
];

const Calc = () => {
  const [platforms, setPlatforms] = useState([3]);
  const [adBudget, setAdBudget] = useState([1000]);
  const [content, setContent] = useState([20]);
  const [automation, setAutomation] = useState(true);
  const [seo, setSeo] = useState(true);

  const base = 199;
  const platformCost = platforms[0] * 75;
  const contentCost = content[0] * 12;
  const mgmtFee = adBudget[0] * 0.12;
  const autoCost = automation ? 199 : 0;
  const seoCost = seo ? 249 : 0;
  const total = Math.round(base + platformCost + contentCost + mgmtFee + autoCost + seoCost);

  const msg = `Hi Intelli-Sys, my marketing estimate is ~$${total}/mo (${platforms[0]} platforms, $${adBudget[0]} ad budget, ${content[0]} pieces, automation: ${automation}, SEO: ${seo}). Please send a proposal.`;

  return (
    <section id="calculator" className="py-24 scroll-mt-20">
      <div className="container max-w-5xl">
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Pricing Calculator</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3">Estimate Your Monthly Marketing Investment</h2>
        </div>
        <div className="glass rounded-3xl p-6 md:p-10 grid md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div>
              <Label className="flex justify-between mb-3"><span>Number of platforms</span><span className="text-primary font-bold">{platforms[0]}</span></Label>
              <Slider value={platforms} onValueChange={setPlatforms} min={1} max={6} step={1} />
            </div>
            <div>
              <Label className="flex justify-between mb-3"><span>Monthly ad budget</span><span className="text-primary font-bold">${adBudget[0]}</span></Label>
              <Slider value={adBudget} onValueChange={setAdBudget} min={200} max={10000} step={100} />
            </div>
            <div>
              <Label className="flex justify-between mb-3"><span>Content volume / month</span><span className="text-primary font-bold">{content[0]}</span></Label>
              <Slider value={content} onValueChange={setContent} min={4} max={60} step={2} />
            </div>
            <div className="flex items-center justify-between"><Label>AI Automation</Label><Switch checked={automation} onCheckedChange={setAutomation} /></div>
            <div className="flex items-center justify-between"><Label>SEO Optimization</Label><Switch checked={seo} onCheckedChange={setSeo} /></div>
          </div>
          <div className="flex flex-col justify-center text-center bg-gradient-hero rounded-2xl p-8 text-primary-foreground shadow-glow">
            <div className="text-sm uppercase tracking-wider opacity-90">Estimated Monthly Investment</div>
            <div className="text-5xl md:text-6xl font-bold my-4">${total.toLocaleString()}</div>
            <p className="text-sm opacity-90 mb-6">Includes management, content, and automation. Ad spend paid separately.</p>
            <Button asChild size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
              <a href={waLink(msg)} target="_blank" rel="noopener noreferrer">Request Detailed Proposal</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const DigitalMarketing = () => {
  const ctaMsg = "Hi Intelli-Sys, I'd like a free digital marketing strategy call.";
  return (
    <FunnelShell ctaMessage={ctaMsg}>
      <FunnelHero
        eyebrow="Digital Marketing Funnel"
        title="Scale Your Business With AI-Powered Digital Marketing"
        subtitle="We help businesses grow faster using intelligent marketing strategies, automation, content creation, SEO, and high-converting campaigns."
        primaryLabel="Get Free Strategy Call"
        secondaryLabel="View Packages"
        onSecondary={() => document.getElementById("packages")?.scrollIntoView({ behavior: "smooth" })}
        primaryMessage={ctaMsg}
        image={heroImg}
        stats={[{ value: "+312%", label: "Avg. ROAS" }, { value: "150+", label: "Campaigns" }, { value: "24h", label: "Setup" }]}
      />
      <ServiceGrid eyebrow="Services" title="Everything You Need to Grow Online" subtitle="Full-stack marketing — from strategy to creative to automation." services={services} />
      <PricingTiers eyebrow="Packages" title="Choose Your Growth Plan" tiers={tiers} />
      <Calc />
      <ProcessFlow eyebrow="Our Process" title="How We Drive Growth" steps={steps} />
      <Timeline eyebrow="Timelines" title="What to Expect" items={timelines} />
      <WhyCards eyebrow="Why Intelli-Sys" title="Built for Performance" cards={whys} />
      <TestimonialsSlider />
      <FAQAccordion items={faqs} />
      <LeadForm category="digital-marketing" headline="Ready To Grow Your Brand?" subline="Tell us about your business — we'll send back a tailored growth plan within 24 hours." ctaLabel="Request Quotation" waMessagePrefix="Hi Intelli-Sys, I want to grow my brand with your marketing services." />
    </FunnelShell>
  );
};

export default DigitalMarketing;