import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/intellisys-logo.png";

const links = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#industries", label: "Industries" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#why-us", label: "Why Us" },
  { href: "#about", label: "About" },
  { href: "#insights", label: "Insights" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export const Nav = ({ onCalc }: { onCalc: () => void }) => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 inset-x-0 z-50 glass border-b border-border/40">
      <div className="container flex items-center justify-between h-16">
        <a href="#home" className="flex items-center gap-2 font-bold">
          <img src={logo} alt="Intelli-Sys logo" className="h-9 w-9 object-contain" />
          <span className="gradient-text text-lg hidden sm:inline">Intelli-Sys</span>
        </a>
        <div className="hidden lg:flex items-center gap-6 text-sm">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-primary transition-smooth">{l.label}</a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <Button onClick={onCalc} size="sm" className="bg-gradient-hero shadow-glow hidden sm:inline-flex">Book Consultation</Button>
          <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden glass border-t border-border/40">
          <div className="container py-4 grid gap-2">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2 text-sm hover:text-primary transition-smooth">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};