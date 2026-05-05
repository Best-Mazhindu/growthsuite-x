import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "How is pricing structured?", a: "Every package has a transparent range. Use our calculator to estimate based on your scope, add-ons and urgency. Final pricing is locked after a discovery call." },
  { q: "How long does a typical project take?", a: "Starter builds ship in 1–2 weeks. Business systems take 3–6 weeks. Enterprise platforms 8–16 weeks. Marketing & AI engagements are ongoing." },
  { q: "Do you offer ongoing support?", a: "Yes. Every project includes a support window, and you can extend with a maintenance retainer covering updates, monitoring and improvements." },
  { q: "Can you customize an existing package?", a: "Absolutely. Packages are starting points — we tailor scope, integrations and add-ons to fit your business." },
  { q: "Do you work with international clients?", a: "Yes. We deliver remotely worldwide with async-first communication and weekly syncs." },
];

export const FAQ = () => (
  <section id="faq" className="py-24 bg-gradient-soft scroll-mt-20">
    <div className="container max-w-3xl">
      <div className="text-center mb-12">
        <span className="text-sm font-medium text-primary uppercase tracking-wider">FAQ</span>
        <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">Answers, upfront.</h2>
      </div>
      <Accordion type="single" collapsible className="glass rounded-2xl px-6">
        {faqs.map((f, i) => (
          <AccordionItem key={f.q} value={`item-${i}`} className="border-border/60">
            <AccordionTrigger className="text-left font-semibold">{f.q}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);