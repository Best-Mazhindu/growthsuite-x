import { useState } from "react";
import { Button } from "@/components/ui/button";
import { waLink } from "@/lib/pricing";

type UC = { icon: string; t: string; d: string };
type Industry = { icon: string; name: string; title: string; sub: string; cta: string; uses: UC[] };

const industries: Industry[] = [
  {
    icon: "🌾", name: "Agribusiness", title: "Agribusiness & Smart Farming",
    sub: "AI is transforming how Africa grows, harvests, and distributes food — making farming smarter, more predictable, and more profitable at every scale.",
    cta: "Ready to bring AI to your agribusiness? We've worked with farming cooperatives, agro-dealers, and food producers across Africa.",
    uses: [
      { icon: "🌦️", t: "Crop Yield Prediction", d: "AI models forecast yields using satellite imagery, weather data, and soil sensors — enabling proactive planning." },
      { icon: "🐛", t: "Pest & Disease Detection", d: "Computer vision identifies crop diseases from images before they spread, saving entire harvests." },
      { icon: "💧", t: "Smart Irrigation", d: "Automated irrigation systems powered by AI reduce water waste by 40% while maximizing crop health." },
      { icon: "📦", t: "Supply Chain Optimization", d: "AI routes produce from farm to market faster, reducing spoilage and improving margins for farmers." },
      { icon: "📊", t: "Market Price Analytics", d: "Predictive analytics help farmers time their sales to peak market prices using real-time data." },
      { icon: "🤖", t: "Farm Management Systems", d: "End-to-end digital farm management platforms with AI recommendations built in." },
    ],
  },
  {
    icon: "🏥", name: "Healthcare", title: "Healthcare & Medical Services",
    sub: "AI in healthcare means faster diagnoses, smarter patient management, and more accessible care — transforming health outcomes across Africa.",
    cta: "Transforming healthcare delivery with AI. From clinics to hospitals to health ministries.",
    uses: [
      { icon: "🔬", t: "AI-Assisted Diagnostics", d: "Machine learning models assist clinicians in diagnosing conditions from medical images and test data." },
      { icon: "📋", t: "Patient Record Management", d: "AI-powered EHR systems that extract insights, flag risks, and reduce administrative burden." },
      { icon: "💊", t: "Drug Inventory AI", d: "Predictive restocking systems ensure pharmacies and clinics never run out of essential medications." },
      { icon: "🤖", t: "Virtual Health Assistants", d: "AI chatbots triage patients, answer medical FAQs, and book appointments 24/7." },
      { icon: "📡", t: "Telemedicine Platforms", d: "Remote consultation systems powered by AI that extend care to rural and underserved communities." },
      { icon: "📊", t: "Health Data Analytics", d: "Population health insights that help administrators allocate resources and predict demand." },
    ],
  },
  {
    icon: "🏫", name: "Education", title: "Education & Learning Institutions",
    sub: "AI is personalizing education, automating administration, and empowering teachers to do what they do best — while machines handle the rest.",
    cta: "AI for schools, universities, and training institutions. We build education technology that works in Africa.",
    uses: [
      { icon: "🧠", t: "AI Tutoring Systems", d: "Personalized learning engines that adapt to each student's pace, style, and knowledge gaps." },
      { icon: "📝", t: "Automated Grading", d: "AI grades essays, assignments, and exams — freeing teachers for higher-value instruction time." },
      { icon: "📚", t: "E-Learning Platforms", d: "Custom LMS platforms with AI-driven content recommendations and progress tracking." },
      { icon: "🏫", t: "School Management AI", d: "Attendance, fees, timetabling, and staff management — all automated and interconnected." },
      { icon: "🎓", t: "AI Skills Training", d: "Digital literacy and AI training programs for students, teachers, and education administrators." },
      { icon: "📊", t: "Learning Analytics", d: "Real-time dashboards giving administrators visibility into student performance across institutions." },
    ],
  },
  {
    icon: "💳", name: "Finance", title: "Finance & Financial Services",
    sub: "AI is rewriting the rules of financial services — enabling faster lending decisions, smarter fraud prevention, and more accessible financial products for Africa.",
    cta: "Modernizing financial services with AI. From banks to microfinance institutions to fintech startups.",
    uses: [
      { icon: "🔍", t: "AI Credit Scoring", d: "Alternative data scoring models that extend credit to underserved populations without traditional credit history." },
      { icon: "🛡️", t: "Fraud Detection", d: "Real-time transaction monitoring AI that flags suspicious activity before losses occur." },
      { icon: "📈", t: "Financial Forecasting", d: "Predictive models for cash flow, revenue, and risk that give CFOs strategic foresight." },
      { icon: "🤖", t: "AI Customer Service", d: "Virtual banking assistants that handle queries, transfers, and account management 24/7." },
      { icon: "📊", t: "Regulatory Reporting", d: "Automated compliance and reporting systems that reduce regulatory risk and manual effort." },
      { icon: "💹", t: "Investment Analytics", d: "AI-driven market analysis and portfolio optimization tools for investment firms and advisors." },
    ],
  },
  {
    icon: "🛒", name: "Retail & E-comm", title: "Retail & E-Commerce",
    sub: "AI-powered retail means smarter inventory, personalized shopping, and automated customer service — driving more revenue with fewer resources.",
    cta: "AI for retail — from single stores to regional chains.",
    uses: [
      { icon: "🎯", t: "Personalized Recommendations", d: "AI recommendation engines that increase average order value by showing customers exactly what they want." },
      { icon: "📦", t: "Inventory Optimization", d: "Demand forecasting AI that eliminates stockouts and overstock — reducing holding costs significantly." },
      { icon: "💬", t: "AI Customer Support", d: "Chatbots and virtual assistants that handle 80% of customer queries instantly, around the clock." },
      { icon: "💰", t: "Dynamic Pricing", d: "Automated pricing systems that respond to demand, competition, and market conditions in real time." },
      { icon: "🛍️", t: "E-Commerce Platforms", d: "Full AI-integrated online stores with payment, logistics, analytics, and marketing automation built in." },
      { icon: "📊", t: "Sales Analytics", d: "Deep retail intelligence — from customer behaviour to product performance to store analytics." },
    ],
  },
  {
    icon: "🚚", name: "Logistics", title: "Logistics & Supply Chain",
    sub: "AI is eliminating inefficiency from African supply chains — optimizing routes, reducing fuel costs, and ensuring goods reach their destination faster and smarter.",
    cta: "Smarter logistics, lower costs, faster delivery. AI for logistics companies across Africa.",
    uses: [
      { icon: "🗺️", t: "Route Optimization", d: "AI calculates the most efficient delivery routes in real time — reducing fuel costs by up to 25%." },
      { icon: "🚛", t: "Fleet Management AI", d: "Monitor vehicle health, driver performance, and utilization through AI-powered fleet dashboards." },
      { icon: "📡", t: "Real-Time Tracking", d: "End-to-end shipment visibility for businesses and customers from dispatch to delivery." },
      { icon: "🏭", t: "Warehouse Automation", d: "AI-driven warehouse management systems that automate picking, packing, and inventory updates." },
      { icon: "📦", t: "Demand Forecasting", d: "Predict what, when, and where inventory is needed — preventing stockouts across the supply chain." },
      { icon: "📊", t: "Supply Chain Analytics", d: "End-to-end supply chain visibility and performance analytics for operational decision-making." },
    ],
  },
  {
    icon: "🏛️", name: "Government & NGOs", title: "Government & NGOs",
    sub: "AI-powered governance means better service delivery, smarter resource allocation, and data-driven policy — enabling governments and NGOs to do more with less.",
    cta: "Digital transformation for government and development sector. We understand compliance, scale, and public service.",
    uses: [
      { icon: "🌐", t: "Citizen Services AI", d: "AI portals and chatbots that handle citizen queries, applications, and service requests 24/7." },
      { icon: "📊", t: "Policy Analytics", d: "Data-driven policy modelling tools that simulate the impact of decisions before implementation." },
      { icon: "🔒", t: "Public Data Management", d: "Secure, compliant data infrastructure for government records, registries, and public databases." },
      { icon: "💰", t: "Revenue & Budget AI", d: "AI models that optimize tax collection, budget allocation, and financial planning for government entities." },
      { icon: "🎓", t: "Capacity Building", d: "Digital skills and AI training programs for government staff at all levels — building internal capability." },
      { icon: "🤝", t: "NGO Impact Tracking", d: "Monitoring and evaluation platforms that measure program impact and optimize resource deployment." },
    ],
  },
  {
    icon: "📱", name: "Media & Marketing", title: "Media, Marketing & Creative",
    sub: "AI is rewriting the rules of content, marketing, and brand building — enabling African businesses to compete with global budgets at local costs.",
    cta: "AI for media, marketing, and creative agencies across Africa.",
    uses: [
      { icon: "✍️", t: "AI Content Generation", d: "Automated blog posts, social captions, ad copy, and email campaigns created at scale using GenAI." },
      { icon: "🎯", t: "Audience Targeting AI", d: "Machine learning that identifies and reaches your ideal customers with unprecedented precision." },
      { icon: "📊", t: "Campaign Analytics", d: "Real-time performance dashboards that show exactly what's working and optimize spend automatically." },
      { icon: "🤖", t: "Social Media Automation", d: "AI-powered scheduling, engagement, and community management tools that save teams hours daily." },
      { icon: "🎨", t: "AI Creative Tools", d: "Design automation, video generation, and brand asset creation powered by generative AI." },
      { icon: "📧", t: "Email & SMS Campaigns", d: "Personalized, AI-optimized email and bulk SMS campaigns with automated segmentation and timing." },
    ],
  },
];

export const UseCaseExplorer = () => {
  const [active, setActive] = useState(0);
  const cur = industries[active];
  return (
    <section id="use-case-explorer" className="py-24 bg-gradient-soft scroll-mt-20">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12 animate-fade-in">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">🏭 Industries We Transform</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4"><span className="gradient-text">AI Use Case Explorer</span></h2>
          <p className="text-muted-foreground text-lg">Select your industry and explore exactly how Intelli-Sys applies AI to drive growth, efficiency, and innovation in your sector.</p>
        </div>
        <div className="grid lg:grid-cols-[260px_1fr] gap-6">
          <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {industries.map((it, i) => (
              <button
                key={it.name}
                onClick={() => setActive(i)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium whitespace-nowrap transition-all border ${
                  i === active
                    ? "bg-gradient-hero text-primary-foreground border-transparent shadow-glow"
                    : "glass border-border hover:border-primary/40"
                }`}
              >
                <span className="text-lg">{it.icon}</span>
                <span>{it.name}</span>
              </button>
            ))}
          </div>
          <div className="glass rounded-2xl p-6 md:p-8 animate-fade-in" key={active}>
            <div className="flex items-start gap-4 mb-6">
              <div className="text-4xl">{cur.icon}</div>
              <div>
                <h3 className="text-2xl font-bold mb-1">{cur.title}</h3>
                <p className="text-sm text-muted-foreground">{cur.sub}</p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {cur.uses.map((u) => (
                <div key={u.t} className="rounded-xl border border-border bg-card/50 p-4 hover:border-primary/40 hover:-translate-y-0.5 transition-all">
                  <div className="text-2xl mb-2">{u.icon}</div>
                  <h4 className="font-semibold text-sm mb-1">{u.t}</h4>
                  <p className="text-xs text-muted-foreground">{u.d}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-accent/40 border border-border">
              <p className="text-sm"><strong>{cur.cta}</strong></p>
              <Button asChild className="bg-gradient-hero shadow-glow shrink-0">
                <a href={waLink(`Hi Intelli-Sys, I'd like an AI consultation for ${cur.title}.`)} target="_blank" rel="noreferrer">
                  Get AI Consultation →
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};