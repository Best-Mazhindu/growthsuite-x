import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
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

const funnels = [
  { to: "/digital-marketing", label: "Digital Marketing" },
  { to: "/ai-solutions", label: "AI Solutions" },
  { to: "/systems-development", label: "Development" },
  { to: "/digital-store", label: "IS Digital Store" },
];

export const Nav = ({ onCalc }: { onCalc: () => void }) => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 inset-x-0 z-50 glass border-b border-border/40">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2 font-bold">
          <img src={logo} alt="Intelli-Sys logo" className="h-9 w-9 object-contain" />
          <span className="gradient-text text-lg hidden sm:inline">Intelli-Sys</span>
        </Link>
        <div className="hidden lg:flex items-center gap-6 text-sm">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-primary transition-smooth">{l.label}</a>
          ))}
          <div className="relative group">
            <button className="hover:text-primary transition-smooth">Funnels ▾</button>
            <div className="absolute right-0 top-full pt-2 hidden group-hover:block">
              <div className="glass border border-border/40 rounded-lg p-2 min-w-[220px] shadow-lg">
                {funnels.map((f) => (
                  <Link key={f.to} to={f.to} className="block px-3 py-2 rounded hover:bg-primary/10 hover:text-primary transition-smooth">
                    {f.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
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
            <div className="pt-2 mt-2 border-t border-border/40 text-xs uppercase tracking-wider text-muted-foreground">Funnels</div>
            {funnels.map((f) => (
              <Link key={f.to} to={f.to} onClick={() => setOpen(false)} className="py-2 text-sm hover:text-primary transition-smooth">
                {f.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};