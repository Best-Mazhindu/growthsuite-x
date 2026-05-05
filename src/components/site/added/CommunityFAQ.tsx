import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { MessageCircle, Globe } from "lucide-react";
import { waLink } from "@/lib/pricing";

const cats = ["All", "Community", "Benefits", "Structure", "Partnerships"];

const faqs = [
  { cat: "Community", q: "How do I join the Intelli-Sys AI Community / Ecosystem?", a: "Joining is simple and free. Click the \"Join the AI Ecosystem\" button anywhere on this page and fill in the short form — selecting the areas that interest you most. Our team will reach out within 24 hours to explore the right entry point for you. Whether you want to partner, invest, refer, contribute skills, or simply be part of the network, there is a place for you." },
  { cat: "Benefits", q: "What are the benefits of joining the AI Ecosystem?", a: "Members of the Intelli-Sys AI Ecosystem gain access to: referral income through our affiliate commission model; early access to new AI tools, products, and research; business growth support — strategy, marketing, and technology; a network of innovators, investors, and decision-makers across Africa; priority access to training programs and certification; co-creation opportunities on new AI projects and ventures; and investment and revenue-sharing opportunities as Intelli-Sys grows." },
  { cat: "Structure", q: "What is the structure of the ecosystem? How is it organized?", a: "The Intelli-Sys ecosystem is organized into six engagement tracks — you can be part of one or multiple: Referral Partners (earn commissions by connecting businesses to our services); Investors & Shareholders (fund growth and participate in equity or revenue share); Marketing & Sales Partners (drive growth through business development activities); Talent & Contributors (join as employees, freelancers, or subject matter experts); Training Partners (co-deliver AI training programs); Strategic IT Partners (long-term technology collaboration)." },
  { cat: "Partnerships", q: "Why should I collaborate with Intelli-Sys rather than another tech company?", a: "Intelli-Sys is purpose-built for the African market — not a generic global company retrofitting solutions for Africa. We offer deep local market understanding, end-to-end AI solutions, a growing ecosystem to grow with, revenue-sharing and equity opportunities for serious collaborators, and a mission-driven team focused on Africa's AI future, not just profit." },
  { cat: "Community", q: "Is there a cost to join the community?", a: "Joining the Intelli-Sys AI Community is completely free. There are no membership fees, no sign-up costs, and no obligations. You apply, we assess alignment, and we agree on a collaboration structure that works for both parties. Investment tracks involve capital contributions, but these are separate and entirely optional." },
  { cat: "Benefits", q: "How does the referral / affiliate model work?", a: "Once accepted as a referral partner, you receive a unique referral link and code. When you refer a business that becomes a paying client, you earn a commission on the service value — typically between 10% and 20% depending on the package. Commissions are tracked transparently and paid monthly. There is no cap on earnings, and top referral partners unlock higher tiers with better rates and bonuses." },
  { cat: "Community", q: "What kind of businesses or people is the ecosystem designed for?", a: "Entrepreneurs and business owners who want to adopt or promote AI; tech professionals — developers, data scientists, cloud engineers; marketers and business development professionals; educators and trainers in digital and technology fields; NGOs, government agencies, and development organizations; investors looking for high-growth African tech opportunities." },
  { cat: "Benefits", q: "What support does Intelli-Sys provide to ecosystem members?", a: "All ecosystem members receive dedicated onboarding, access to our knowledge base, and a point of contact within our team. Depending on your track, support may include co-marketing materials, training content, proposal templates, technical documentation, and regular ecosystem updates covering new products, opportunities, and AI developments relevant to Africa." },
];

export const CommunityFAQ = () => {
  const [cat, setCat] = useState("All");
  const list = cat === "All" ? faqs : faqs.filter((f) => f.cat === cat);
  return (
    <section id="community-faq" className="py-24 scroll-mt-20">
      <div className="container grid lg:grid-cols-[340px_1fr] gap-10">
        <aside className="animate-fade-in">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">❓ FAQ</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">Everything You Need to Know</h2>
          <p className="text-muted-foreground mb-6">Questions about joining our AI community, partnership structure, benefits, and how to get involved. If you don't see your question here, reach out directly.</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`text-xs px-3 py-1.5 rounded-full border transition-all ${
                  c === cat ? "bg-gradient-hero text-primary-foreground border-transparent shadow-glow" : "glass border-border hover:border-primary/40"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="glass rounded-2xl p-5">
            <p className="text-sm mb-4">Have a specific question about joining the ecosystem or collaborating with Intelli-Sys?</p>
            <Button asChild className="w-full bg-gradient-hero shadow-glow mb-3">
              <a href={waLink("Hi Intelli-Sys, I want to join the Ecosystem.")} target="_blank" rel="noreferrer">
                <Globe className="w-4 h-4" /> Join the Ecosystem
              </a>
            </Button>
            <a href={waLink("Hi Intelli-Sys, I have a question about the ecosystem.")} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 text-sm font-semibold text-primary">
              <MessageCircle className="w-4 h-4" /> Ask on WhatsApp
            </a>
          </div>
        </aside>
        <Accordion type="single" collapsible className="glass rounded-2xl px-6 animate-fade-in">
          {list.map((f, i) => (
            <AccordionItem key={f.q} value={`cf-${i}`} className="border-border/60">
              <AccordionTrigger className="text-left font-semibold">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};