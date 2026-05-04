import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { categories, addOns, formatRange, Pkg } from "@/lib/pricing";
import { Sparkles } from "lucide-react";

interface Props {
  onGetProposal: (data: { pkg: Pkg; total: number; addOns: string[]; urgency: string }) => void;
}

export const Calculator = ({ onGetProposal }: Props) => {
  const [catId, setCatId] = useState(categories[0].id);
  const [pkgId, setPkgId] = useState(categories[0].packages[0].id);
  const [selected, setSelected] = useState<string[]>([]);
  const [urgency, setUrgency] = useState<"normal" | "urgent">("normal");

  const cat = categories.find((c) => c.id === catId)!;
  const pkg = cat.packages.find((p) => p.id === pkgId) || cat.packages[0];

  const total = useMemo(() => {
    const base = (pkg.min + pkg.max) / 2;
    const add = selected.reduce((sum, id) => {
      const a = addOns.find((x) => x.id === id);
      if (!a) return sum;
      return sum + (a.min + a.max) / 2;
    }, 0);
    const sub = base + add;
    return Math.round(urgency === "urgent" ? sub * 1.25 : sub);
  }, [pkg, selected, urgency]);

  const toggle = (id: string) =>
    setSelected((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]));

  return (
    <section id="calculator" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/5 blur-3xl" />
      <div className="container relative">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Pricing Calculator</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">Estimate your investment in 30 seconds.</h2>
        </div>

        <div className="max-w-5xl mx-auto glass rounded-3xl p-6 md:p-10 grid lg:grid-cols-[1fr,360px] gap-8 shadow-soft">
          <div className="space-y-6">
            <div>
              <Label className="text-sm font-semibold mb-3 block">1. Choose a category</Label>
              <div className="grid sm:grid-cols-3 gap-2">
                {categories.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => { setCatId(c.id); setPkgId(c.packages[0].id); }}
                    className={`p-3 rounded-xl text-sm text-left transition-all ${catId === c.id ? "bg-gradient-hero text-primary-foreground shadow-glow" : "glass hover:border-primary/40"}`}
                  >
                    {c.name.split(" & ")[0].split(",")[0]}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <Label className="text-sm font-semibold mb-3 block">2. Select a package</Label>
              <div className="grid sm:grid-cols-3 gap-2">
                {cat.packages.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setPkgId(p.id)}
                    className={`p-3 rounded-xl text-sm text-left transition-all ${pkgId === p.id ? "bg-gradient-hero text-primary-foreground shadow-glow" : "glass hover:border-primary/40"}`}
                  >
                    <div className="font-semibold">{p.name}</div>
                    <div className="text-xs opacity-80 mt-0.5">{formatRange(p.min, p.max)}</div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <Label className="text-sm font-semibold mb-3 block">3. Add-ons</Label>
              <div className="grid sm:grid-cols-2 gap-2">
                {addOns.map((a) => (
                  <button
                    key={a.id}
                    onClick={() => toggle(a.id)}
                    className={`p-3 rounded-xl text-sm text-left transition-all ${selected.includes(a.id) ? "bg-gradient-hero text-primary-foreground shadow-glow" : "glass hover:border-primary/40"}`}
                  >
                    <div className="flex justify-between gap-2">
                      <span className="font-semibold">{a.name}</span>
                      <span className="text-xs opacity-80">${a.min}–${a.max}{a.unit}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <Label className="text-sm font-semibold mb-3 block">4. Urgency</Label>
              <div className="grid grid-cols-2 gap-2">
                {(["normal", "urgent"] as const).map((u) => (
                  <button
                    key={u}
                    onClick={() => setUrgency(u)}
                    className={`p-3 rounded-xl text-sm capitalize transition-all ${urgency === u ? "bg-gradient-hero text-primary-foreground shadow-glow" : "glass hover:border-primary/40"}`}
                  >
                    {u} {u === "urgent" && <span className="text-xs opacity-80">(+25%)</span>}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:sticky lg:top-6 self-start glass rounded-2xl p-6 bg-gradient-card">
            <div className="text-xs font-semibold text-primary uppercase tracking-wider">Estimated total</div>
            <div className="text-5xl font-bold gradient-text my-3 transition-all">${total.toLocaleString()}</div>
            <div className="text-sm text-muted-foreground mb-6">
              {pkg.billing === "monthly" ? "Approx. monthly" : "Approx. one-off"} · final scoped on call
            </div>
            <div className="space-y-2 text-sm border-t border-border pt-4">
              <Row k="Package" v={pkg.name} />
              <Row k="Add-ons" v={selected.length ? `${selected.length} selected` : "None"} />
              <Row k="Urgency" v={urgency === "urgent" ? "Urgent (+25%)" : "Normal"} />
            </div>
            <Button
              onClick={() => onGetProposal({ pkg, total, addOns: selected, urgency })}
              className="w-full mt-6 bg-gradient-hero shadow-glow h-12 gap-2"
            >
              <Sparkles className="w-4 h-4" /> Get My Proposal
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Row = ({ k, v }: { k: string; v: string }) => (
  <div className="flex justify-between gap-3">
    <span className="text-muted-foreground">{k}</span>
    <span className="font-medium text-right">{v}</span>
  </div>
);