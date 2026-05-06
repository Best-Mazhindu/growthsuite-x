import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { waLink } from "@/lib/pricing";
import { ArrowRight } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(2, "Name too short").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().min(6, "Phone required").max(30),
  business_type: z.string().trim().max(100).optional().or(z.literal("")),
  message: z.string().trim().max(1000).optional().or(z.literal("")),
});

export const LeadForm = ({ category, headline, subline, ctaLabel, waMessagePrefix }: { category: string; headline: string; subline: string; ctaLabel: string; waMessagePrefix: string }) => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", business_type: "", message: "" });
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    setLoading(true);
    const { error } = await supabase.from("leads").insert({
      name: parsed.data.name,
      email: parsed.data.email,
      business_type: parsed.data.business_type || null,
      category,
      details: { phone: parsed.data.phone, message: parsed.data.message, source: category },
    });
    setLoading(false);
    if (error) {
      toast.error("Something went wrong. Please try WhatsApp.");
      return;
    }
    toast.success("Thanks! We'll be in touch shortly.");
    const msg = `${waMessagePrefix} I'm ${parsed.data.name} (${parsed.data.phone}). ${parsed.data.message || ""}`.trim();
    setTimeout(() => window.open(waLink(msg), "_blank"), 600);
    setForm({ name: "", email: "", phone: "", business_type: "", message: "" });
  };

  return (
    <section id="lead" className="py-24 scroll-mt-20">
      <div className="container max-w-2xl">
        <div className="text-center mb-8">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Get Started</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-3">{headline}</h2>
          <p className="text-muted-foreground">{subline}</p>
        </div>
        <form onSubmit={submit} className="glass rounded-2xl p-6 md:p-8 space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Full Name *</Label>
              <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required maxLength={100} />
            </div>
            <div>
              <Label htmlFor="email">Email *</Label>
              <Input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required maxLength={255} />
            </div>
            <div>
              <Label htmlFor="phone">Phone / WhatsApp *</Label>
              <Input id="phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} required maxLength={30} />
            </div>
            <div>
              <Label htmlFor="biz">Business Type</Label>
              <Input id="biz" placeholder="e.g. Retail, SaaS" value={form.business_type} onChange={(e) => setForm({ ...form, business_type: e.target.value })} maxLength={100} />
            </div>
          </div>
          <div>
            <Label htmlFor="msg">Tell us about your project</Label>
            <Textarea id="msg" rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} maxLength={1000} />
          </div>
          <Button type="submit" disabled={loading} className="w-full bg-gradient-hero shadow-glow h-12 gap-2">
            {loading ? "Sending…" : <>{ctaLabel} <ArrowRight className="w-4 h-4" /></>}
          </Button>
          <p className="text-xs text-center text-muted-foreground">Your info is private. We respond within 24 hours.</p>
        </form>
      </div>
    </section>
  );
};