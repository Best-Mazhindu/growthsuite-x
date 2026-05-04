export const WHATSAPP = "263775526709";

export const waLink = (msg: string) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;

export type Pkg = {
  id: string;
  name: string;
  min: number;
  max: number;
  billing: "once" | "monthly";
  features: string[];
  forWho: string;
  useCases: string[];
  deliverables: string[];
  timeline: string;
  benefits: string[];
};

export type Category = {
  id: string;
  name: string;
  tagline: string;
  packages: Pkg[];
};

export const categories: Category[] = [
  {
    id: "tech",
    name: "Technology & Software Solutions",
    tagline: "Custom-built software, web apps, and platforms that scale.",
    packages: [
      {
        id: "tech-starter",
        name: "Starter Build",
        min: 250,
        max: 750,
        billing: "once",
        features: ["Landing page or simple web tool", "Mobile responsive", "Basic forms & integrations", "1 round of revisions"],
        forWho: "Founders validating an idea or small businesses going digital",
        useCases: ["MVP landing pages", "Booking forms", "Simple internal tools"],
        deliverables: ["1 production-ready site", "Hosting setup guidance", "Source code handover"],
        timeline: "1–2 weeks",
        benefits: ["Launch fast", "Test the market", "Affordable entry point"],
      },
      {
        id: "tech-business",
        name: "Business System",
        min: 1000,
        max: 3500,
        billing: "once",
        features: ["Multi-page web app", "Custom dashboards", "Database & user accounts", "API integrations", "Admin panel"],
        forWho: "Growing businesses replacing spreadsheets and manual workflows",
        useCases: ["CRM systems", "Inventory & POS", "Client portals"],
        deliverables: ["Full-stack web app", "Admin dashboard", "Documentation & training"],
        timeline: "3–6 weeks",
        benefits: ["Automate operations", "Scale without hiring", "Data in one place"],
      },
      {
        id: "tech-enterprise",
        name: "Enterprise Solution",
        min: 4000,
        max: 12500,
        billing: "once",
        features: ["Enterprise-grade architecture", "Multi-role access & SSO", "Advanced integrations", "High-availability hosting", "Ongoing support"],
        forWho: "Established companies needing mission-critical platforms",
        useCases: ["ERP systems", "SaaS platforms", "Industry-specific suites"],
        deliverables: ["Production platform", "DevOps pipeline", "Security audit", "SLA support"],
        timeline: "8–16 weeks",
        benefits: ["Enterprise reliability", "Built to scale to millions", "Long-term partnership"],
      },
    ],
  },
  {
    id: "creative",
    name: "Creative & Growth Hub",
    tagline: "Brand, content, and marketing that compounds month over month.",
    packages: [
      {
        id: "creative-starter",
        name: "Starter Growth",
        min: 100,
        max: 400,
        billing: "monthly",
        features: ["Social media management (2 platforms)", "8 posts / month", "Basic graphics", "Monthly report"],
        forWho: "Small businesses building online presence",
        useCases: ["Local businesses", "Personal brands", "New product launches"],
        deliverables: ["Content calendar", "Branded post templates", "Performance snapshot"],
        timeline: "Ongoing monthly",
        benefits: ["Stay consistently visible", "Save 20+ hours/month", "Grow your audience"],
      },
      {
        id: "creative-engine",
        name: "Growth Engine",
        min: 500,
        max: 1500,
        billing: "monthly",
        features: ["Multi-platform strategy", "20+ posts/month", "Paid ads management", "Email marketing", "Analytics dashboard"],
        forWho: "Brands ready to invest in serious growth",
        useCases: ["E-commerce scaling", "Lead-gen funnels", "Personal brand growth"],
        deliverables: ["Full strategy doc", "Ad campaigns live", "Email sequences", "Monthly reporting"],
        timeline: "Ongoing monthly",
        benefits: ["Predictable lead flow", "Higher ROAS", "Data-driven decisions"],
      },
      {
        id: "creative-dominator",
        name: "Market Dominator",
        min: 2000,
        max: 5000,
        billing: "monthly",
        features: ["Full marketing department on retainer", "Video & photo production", "PR & influencer outreach", "Conversion-rate optimization", "Dedicated strategist"],
        forWho: "Brands competing for category leadership",
        useCases: ["Funded startups", "Multi-location businesses", "Aggressive market expansion"],
        deliverables: ["End-to-end marketing ops", "Quarterly creative shoots", "Weekly reporting"],
        timeline: "Ongoing monthly",
        benefits: ["Own your category", "Compete with industry giants", "All-in-one team"],
      },
    ],
  },
  {
    id: "ai",
    name: "AI, Automation & Data Solutions",
    tagline: "Turn your business into an intelligent, self-driving machine.",
    packages: [
      {
        id: "ai-starter",
        name: "AI Starter",
        min: 250,
        max: 750,
        billing: "once",
        features: ["1 AI workflow automation", "Chatbot or assistant setup", "Integration with 1 tool", "Basic training"],
        forWho: "Teams beginning their AI journey",
        useCases: ["Customer-support bots", "Email auto-responders", "Lead qualification"],
        deliverables: ["Configured AI workflow", "Documentation", "30-day support"],
        timeline: "1–2 weeks",
        benefits: ["Save hours weekly", "24/7 automation", "Quick AI win"],
      },
      {
        id: "ai-transform",
        name: "AI Transformation",
        min: 1000,
        max: 4000,
        billing: "once",
        features: ["Multi-step automations", "Custom GPT/agent training", "CRM + sales automation", "Data dashboards", "Team training"],
        forWho: "Businesses ready to automate core operations",
        useCases: ["Sales pipelines", "Document processing", "Predictive analytics"],
        deliverables: ["Automation suite", "Custom AI agents", "Reporting dashboards"],
        timeline: "4–8 weeks",
        benefits: ["Cut operational cost 40%+", "Faster decisions", "Scalable systems"],
      },
      {
        id: "ai-enterprise",
        name: "Intelligent Enterprise",
        min: 5000,
        max: 25000,
        billing: "once",
        features: ["Custom AI models", "Enterprise data pipelines", "Predictive & generative AI", "Compliance & governance", "Dedicated AI team"],
        forWho: "Enterprises building AI as a core competitive advantage",
        useCases: ["Industry-specific LLMs", "Computer vision", "Real-time analytics"],
        deliverables: ["Trained models", "Production AI infra", "Governance framework", "Long-term roadmap"],
        timeline: "12–24 weeks",
        benefits: ["Defensible AI moat", "Industry-leading capabilities", "Future-proof"],
      },
    ],
  },
];

export type AddOn = {
  id: string;
  name: string;
  min: number;
  max: number;
  unit: string;
  billing: "once" | "monthly";
};

export const addOns: AddOn[] = [
  { id: "maintenance", name: "Maintenance", min: 50, max: 500, unit: "/month", billing: "monthly" },
  { id: "hosting", name: "Hosting", min: 25, max: 250, unit: "/month", billing: "monthly" },
  { id: "saas", name: "SaaS Setup", min: 2.5, max: 25, unit: "/user/month", billing: "monthly" },
  { id: "training", name: "Training", min: 25, max: 250, unit: "/participant", billing: "once" },
];

export const formatRange = (min: number, max: number) =>
  `$${min.toLocaleString()} – $${max.toLocaleString()}${max >= 12000 ? "+" : ""}`;