import { useState } from "react";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { Pricing } from "@/components/site/Pricing";
import { Calculator } from "@/components/site/Calculator";
import { Funnel } from "@/components/site/Funnel";
import { Trust } from "@/components/site/Trust";
import { FinalCTA } from "@/components/site/FinalCTA";
import { LeadGate } from "@/components/site/LeadGate";
import { Pkg } from "@/lib/pricing";

const Index = () => {
  const [gateOpen, setGateOpen] = useState(false);
  const [ctx, setCtx] = useState<{ pkg?: Pkg | null; total?: number; addOns?: string[]; urgency?: string } | null>(null);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const openGate = (data: typeof ctx) => {
    setCtx(data);
    setGateOpen(true);
  };

  return (
    <main className="min-h-screen">
      <Nav onCalc={() => scrollTo("calculator")} />
      <Hero onCalc={() => scrollTo("calculator")} onStart={() => scrollTo("services")} />
      <Services />
      <Pricing onProceed={(pkg) => openGate({ pkg })} />
      <Calculator onGetProposal={(d) => openGate(d)} />
      <Funnel />
      <Trust />
      <FinalCTA onCalc={() => scrollTo("calculator")} />
      <footer className="py-10 border-t border-border text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Nexus — Software, Growth & AI in one team.
      </footer>
      <LeadGate open={gateOpen} onClose={() => setGateOpen(false)} context={ctx} />
    </main>
  );
};

export default Index;
