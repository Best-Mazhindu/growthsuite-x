import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const FAQAccordion = ({ items }: { items: { q: string; a: string }[] }) => (
  <section className="py-20">
    <div className="container max-w-3xl">
      <div className="text-center mb-10">
        <span className="text-sm font-medium text-primary uppercase tracking-wider">FAQ</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-3">Frequently Asked Questions</h2>
      </div>
      <Accordion type="single" collapsible className="glass rounded-2xl px-6">
        {items.map((it, i) => (
          <AccordionItem key={i} value={`item-${i}`} className="border-border/40">
            <AccordionTrigger className="text-left">{it.q}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">{it.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);