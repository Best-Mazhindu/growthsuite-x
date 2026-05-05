import { useState } from "react";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { Industries } from "@/components/site/Industries";
import { Portfolio } from "@/components/site/Portfolio";
import { WhyUs } from "@/components/site/WhyUs";
import { About } from "@/components/site/About";
import { Pricing } from "@/components/site/Pricing";
import { Calculator } from "@/components/site/Calculator";
import { Funnel } from "@/components/site/Funnel";
import { Trust } from "@/components/site/Trust";
import { Insights } from "@/components/site/Insights";
import { FAQ } from "@/components/site/FAQ";
import { Contact } from "@/components/site/Contact";
import { FinalCTA } from "@/components/site/FinalCTA";
import { LeadGate } from "@/components/site/LeadGate";
import { Footer } from "@/components/site/Footer";
import { Problem } from "@/components/site/added/Problem";
import { Solution } from "@/components/site/added/Solution";
import { WhatWeBuild } from "@/components/site/added/WhatWeBuild";
import { UseCaseExplorer } from "@/components/site/added/UseCaseExplorer";
import { AISolutions } from "@/components/site/added/AISolutions";
import { IndustrySolutions } from "@/components/site/added/IndustrySolutions";
import { HowItWorks } from "@/components/site/added/HowItWorks";
import { HowWeWork } from "@/components/site/added/HowWeWork";
import { WhyIntelliSys } from "@/components/site/added/WhyIntelliSys";
import { EcosystemCTA } from "@/components/site/added/EcosystemCTA";
import { CommunityFAQ } from "@/components/site/added/CommunityFAQ";
import { Emerging } from "@/components/site/added/Emerging";
import { Partners } from "@/components/site/added/Partners";
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
    <main className="min-h-screen scroll-smooth">
      <Nav onCalc={() => scrollTo("calculator")} />
      <Hero onCalc={() => scrollTo("calculator")} onStart={() => scrollTo("services")} />
      <Problem />
      <Solution />
      <WhatWeBuild />
      <Services />
      <AISolutions />
      <UseCaseExplorer />
      <Industries />
      <IndustrySolutions />
      <Portfolio />
      <HowItWorks />
      <HowWeWork />
      <WhyUs />
      <WhyIntelliSys />
      <About />
      <Pricing onProceed={(pkg) => openGate({ pkg })} />
      <Calculator onGetProposal={(d) => openGate(d)} />
      <Funnel />
      <Trust />
      <EcosystemCTA />
      <Emerging />
      <Insights />
      <FAQ />
      <CommunityFAQ />
      <Partners />
      <Contact />
      <FinalCTA onCalc={() => scrollTo("calculator")} />
      <Footer />
      <LeadGate open={gateOpen} onClose={() => setGateOpen(false)} context={ctx} />
    </main>
  );
};

export default Index;
