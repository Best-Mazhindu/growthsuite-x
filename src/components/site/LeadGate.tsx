import { useState } from "react";
import { z } from "zod";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Pkg, waLink } from "@/lib/pricing";
import { ArrowRight } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(2, "Name too short").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  business_type: z.string().trim().min(2, "Required").max(100),
});

interface Props {
  open: boolean;
  onClose: () => void;
  context: { pkg?: Pkg | null; total?: number; addOns?: string[]; urgency?: string } | null;
}

export const LeadGate = ({ open, onClose, context }: Props) => {
  const [form, setForm] = useState({ name: "", email: "", business_type: "" });
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
      business_type: parsed.data.business_type,
      package_name: context?.pkg?.name ?? null,
      category: context?.pkg?.id?.split("-")[0] ?? null,
      estimated_total: context?.total ?? null,
      details: { addOns: context?.addOns ?? [], urgency: context?.urgency ?? null },
    });
    setLoading(false);
    if (error) {
      toast.error("Could not submit — try WhatsApp instead.");
      return;
    }
    toast.success("Got it! Redirecting you to our team on WhatsApp…");
    const msg = `Hello, I'm ${parsed.data.name} (${parsed.data.business_type}). I'm interested in ${context?.pkg?.name ?? "your services"}${context?.total ? ` — estimated $${context.total.toLocaleString()}` : ""}. Please assist me.`;
    setTimeout(() => window.open(waLink(msg), "_blank"), 600);
    onClose();
    setForm({ name: "", email: "", business_type: "" });
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-md glass border-primary/20">
        <DialogHeader>
          <span className="text-xs font-medium text-primary uppercase tracking-wider">One quick step</span>
          <DialogTitle className="text-2xl">Tell us where to send your proposal</DialogTitle>
        </DialogHeader>
        <form onSubmit={submit} className="space-y-4 mt-2">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required maxLength={100} />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required maxLength={255} />
          </div>
          <div>
            <Label htmlFor="bt">Business type</Label>
            <Input id="bt" placeholder="e.g. E-commerce, SaaS, Agency" value={form.business_type} onChange={(e) => setForm({ ...form, business_type: e.target.value })} required maxLength={100} />
          </div>
          <Button type="submit" disabled={loading} className="w-full bg-gradient-hero shadow-glow h-12 gap-2">
            {loading ? "Submitting…" : <>Send Proposal <ArrowRight className="w-4 h-4" /></>}
          </Button>
          <p className="text-xs text-muted-foreground text-center">We never share your details. Used only to follow up on this request.</p>
        </form>
      </DialogContent>
    </Dialog>
  );
};