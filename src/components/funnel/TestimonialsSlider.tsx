import { useEffect, useState } from "react";
import { Star } from "lucide-react";

const items = [
  { name: "Tendai M.", role: "CEO, Retail Co", quote: "Intelli-Sys transformed our online presence — leads tripled in 90 days.", rating: 5 },
  { name: "Sarah K.", role: "Founder, FinTech Startup", quote: "Their AI automation cut our support workload in half. Game changer.", rating: 5 },
  { name: "David N.", role: "Operations Director", quote: "Best development partner we've worked with. Delivered ahead of schedule.", rating: 5 },
  { name: "Linda C.", role: "Marketing Lead", quote: "Campaigns that actually convert. Their team is data-obsessed.", rating: 5 },
];

export const TestimonialsSlider = () => {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % items.length), 5000);
    return () => clearInterval(t);
  }, []);
  return (
    <section className="py-20 bg-gradient-soft">
      <div className="container max-w-3xl">
        <div className="text-center mb-10">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Trusted by Teams</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3">What Our Clients Say</h2>
        </div>
        <div className="relative h-56">
          {items.map((it, idx) => (
            <div key={idx} className={`glass rounded-2xl p-8 absolute inset-0 transition-all duration-700 ${idx === i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}>
              <div className="flex gap-1 mb-3">
                {Array.from({ length: it.rating }).map((_, k) => <Star key={k} className="w-4 h-4 fill-primary text-primary" />)}
              </div>
              <p className="text-lg mb-4 italic">"{it.quote}"</p>
              <div className="font-semibold">{it.name}</div>
              <div className="text-sm text-muted-foreground">{it.role}</div>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-2 mt-4">
          {items.map((_, idx) => (
            <button key={idx} onClick={() => setI(idx)} className={`h-1.5 rounded-full transition-all ${idx === i ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30"}`} aria-label={`Go to ${idx + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
};