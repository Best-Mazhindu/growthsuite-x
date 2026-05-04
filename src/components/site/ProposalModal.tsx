import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Check, MessageCircle, ArrowRight } from "lucide-react";
import { Pkg, formatRange, waLink } from "@/lib/pricing";

interface Props {
  pkg: Pkg | null;
  open: boolean;
  onClose: () => void;
  onProceed: (p: Pkg) => void;
}

export const ProposalModal = ({ pkg, open, onClose, onProceed }: Props) => {
  if (!pkg) return null;
  const msg = `Hello, I'm interested in ${pkg.name}. Please assist me.`;
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl glass border-primary/20 max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <span className="text-xs font-medium text-primary uppercase tracking-wider">Custom Solution Proposal</span>
          <DialogTitle className="text-3xl gradient-text">{pkg.name}</DialogTitle>
        </DialogHeader>

        <div className="space-y-6 mt-2">
          <div className="p-5 rounded-xl bg-gradient-soft border border-border">
            <div className="text-sm text-muted-foreground mb-1">Investment</div>
            <div className="text-3xl font-bold gradient-text">{formatRange(pkg.min, pkg.max)}</div>
            <div className="text-sm text-muted-foreground mt-1">{pkg.billing === "monthly" ? "Monthly retainer" : "One-off project"}</div>
          </div>

          <Section title="Deliverables" items={pkg.deliverables} />
          <Section title="What's included" items={pkg.features} />
          <Section title="Benefits" items={pkg.benefits} />

          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-xl glass">
              <div className="text-xs text-muted-foreground mb-1">Timeline</div>
              <div className="font-semibold">{pkg.timeline}</div>
            </div>
            <div className="p-4 rounded-xl glass">
              <div className="text-xs text-muted-foreground mb-1">Best for</div>
              <div className="font-semibold text-sm">{pkg.forWho}</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Button onClick={() => onProceed(pkg)} className="flex-1 bg-gradient-hero shadow-glow gap-2 h-12">
              Proceed with this Package <ArrowRight className="w-4 h-4" />
            </Button>
            <Button asChild variant="outline" className="flex-1 h-12 gap-2 border-primary/20">
              <a href={waLink(msg)} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4" /> Speak to Sales
              </a>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const Section = ({ title, items }: { title: string; items: string[] }) => (
  <div>
    <div className="text-sm font-semibold mb-2">{title}</div>
    <ul className="space-y-2">
      {items.map((it) => (
        <li key={it} className="flex gap-2 text-sm">
          <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" /> <span>{it}</span>
        </li>
      ))}
    </ul>
  </div>
);