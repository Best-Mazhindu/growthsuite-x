const items = [
  { e: "🌾", t: "Agribusiness", d: "Smart farming predictions, supply chain automation, crop analytics & yield optimization" },
  { e: "🏫", t: "Education", d: "AI tutors, e-learning platforms, digital literacy programs & institutional management" },
  { e: "🏥", t: "Healthcare", d: "Patient management AI, diagnostic support, health data analytics & telemedicine systems" },
  { e: "💳", t: "Finance & Fintech", d: "AI credit scoring, fraud detection, automated reporting & financial forecasting" },
  { e: "🛒", t: "Retail & E-commerce", d: "Personalized AI shopping, inventory automation, AI customer service & sales analytics" },
  { e: "🚚", t: "Logistics", d: "Route optimization, fleet management AI, delivery tracking & warehouse automation" },
  { e: "🏛️", t: "Government & NGOs", d: "Digital transformation programs, citizen services AI, data management & policy analytics" },
  { e: "📱", t: "Media & Marketing", d: "AI content creation, campaign automation, audience analytics & brand intelligence" },
];

export const IndustrySolutions = () => (
  <section id="industry-solutions" className="py-24 scroll-mt-20">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-12 animate-fade-in">
        <span className="text-sm font-medium text-primary uppercase tracking-wider">🏭 Industry Solutions</span>
        <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4"><span className="gradient-text">AI for Every Sector</span> in Africa</h2>
        <p className="text-muted-foreground text-lg">No matter your industry, we have a solution built for your specific challenges and opportunities.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {items.map((it, i) => (
          <div key={it.t} className="glass rounded-2xl p-5 hover:-translate-y-1 hover:shadow-glow transition-all animate-fade-in text-center" style={{ animationDelay: `${i * 50}ms` }}>
            <div className="text-4xl mb-3">{it.e}</div>
            <h3 className="font-semibold mb-2">{it.t}</h3>
            <p className="text-xs text-muted-foreground">{it.d}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);