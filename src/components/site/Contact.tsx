import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { MessageCircle, MapPin, Mail, Send } from "lucide-react";
import { waLink } from "@/lib/pricing";

const schema = z.object({
  name: z.string().trim().min(2, "Name too short").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(10, "Tell us a bit more").max(2000),
});

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
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
      business_type: "Contact form",
      details: { message: parsed.data.message, source: "contact_form" },
    });
    setLoading(false);
    if (error) {
      toast.error("Couldn't send — try WhatsApp instead.");
      return;
    }
    toast.success("Message received. We'll get back to you shortly.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 scroll-mt-20">
      <div className="container grid lg:grid-cols-2 gap-10">
        <div>
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Contact</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">Let's build something intelligent.</h2>
          <p className="text-muted-foreground text-lg mb-8">Tell us about your project — we'll respond within one business day.</p>

          <div className="space-y-4">
            <a href={waLink("Hello Intelli-Sys, I'd like to discuss a project.")} target="_blank" rel="noopener noreferrer" className="glass rounded-xl p-4 flex items-center gap-4 hover:-translate-y-1 hover:shadow-glow transition-all">
              <div className="w-11 h-11 rounded-lg bg-gradient-hero flex items-center justify-center shadow-glow"><MessageCircle className="w-5 h-5 text-primary-foreground" /></div>
              <div>
                <div className="font-semibold text-sm">WhatsApp</div>
                <div className="text-xs text-muted-foreground">Chat with our team instantly</div>
              </div>
            </a>
            <div className="glass rounded-xl p-4 flex items-center gap-4">
              <div className="w-11 h-11 rounded-lg bg-gradient-hero flex items-center justify-center shadow-glow"><Mail className="w-5 h-5 text-primary-foreground" /></div>
              <div>
                <div className="font-semibold text-sm">Email</div>
                <div className="text-xs text-muted-foreground">hello@intelli-sys.com</div>
              </div>
            </div>
            <div className="glass rounded-xl p-4 flex items-center gap-4">
              <div className="w-11 h-11 rounded-lg bg-gradient-hero flex items-center justify-center shadow-glow"><MapPin className="w-5 h-5 text-primary-foreground" /></div>
              <div>
                <div className="font-semibold text-sm">Location</div>
                <div className="text-xs text-muted-foreground">Remote-first · serving clients worldwide</div>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={submit} className="glass rounded-2xl p-8 space-y-4 self-start">
          <div>
            <Label htmlFor="cname">Name</Label>
            <Input id="cname" value={form.name} maxLength={100} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
          </div>
          <div>
            <Label htmlFor="cemail">Email</Label>
            <Input id="cemail" type="email" maxLength={255} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
          </div>
          <div>
            <Label htmlFor="cmsg">Message</Label>
            <Textarea id="cmsg" rows={5} maxLength={2000} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required />
          </div>
          <Button type="submit" disabled={loading} className="w-full bg-gradient-hero shadow-glow h-12 gap-2">
            {loading ? "Sending…" : <>Send Message <Send className="w-4 h-4" /></>}
          </Button>
        </form>
      </div>
    </section>
  );
};