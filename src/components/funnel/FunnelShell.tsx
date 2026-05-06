import { ReactNode, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, MessageCircle, ArrowUp } from "lucide-react";
import logo from "@/assets/intellisys-logo.png";
import { waLink } from "@/lib/pricing";

const links = [
  { href: "/", label: "Home" },
  { href: "/digital-marketing", label: "Marketing" },
  { href: "/ai-solutions", label: "AI Solutions" },
  { href: "/systems-development", label: "Development" },
];

export const FunnelShell = ({ children, ctaMessage }: { children: ReactNode; ctaMessage: string }) => {
  const [open, setOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="min-h-screen scroll-smooth bg-background">
      <nav className="fixed top-0 inset-x-0 z-50 glass border-b border-border/40">
        <div className="container flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 font-bold">
            <img src={logo} alt="Intelli-Sys" className="h-9 w-9 object-contain" />
            <span className="gradient-text text-lg hidden sm:inline">Intelli-Sys</span>
          </Link>
          <div className="hidden lg:flex items-center gap-6 text-sm">
            {links.map((l) => (
              <Link key={l.href} to={l.href} className="hover:text-primary transition-colors">{l.label}</Link>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <Button asChild size="sm" className="bg-gradient-hero shadow-glow hidden sm:inline-flex">
              <a href={waLink(ctaMessage)} target="_blank" rel="noopener noreferrer">Book Consultation</a>
            </Button>
            <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
        {open && (
          <div className="lg:hidden glass border-t border-border/40">
            <div className="container py-4 grid gap-2">
              {links.map((l) => (
                <Link key={l.href} to={l.href} onClick={() => setOpen(false)} className="py-2 text-sm hover:text-primary">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      <div className="pt-16">{children}</div>

      {/* Sticky floating CTA */}
      <a
        href={waLink(ctaMessage)}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-hero text-primary-foreground shadow-glow hover:scale-105 transition-transform animate-float"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="font-medium hidden sm:inline">Chat with us</span>
      </a>

      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 left-6 z-40 p-3 rounded-full glass border-primary/30 hover:border-primary transition-colors"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5 text-primary" />
        </button>
      )}

      <footer className="border-t border-border/40 bg-gradient-soft mt-20">
        <div className="container py-12 grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 font-bold mb-3">
              <img src={logo} alt="" className="h-8 w-8" />
              <span className="gradient-text">Intelli-Sys</span>
            </div>
            <p className="text-sm text-muted-foreground">Intelligent systems for modern businesses across Africa.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/digital-marketing" className="hover:text-primary">Digital Marketing</Link></li>
              <li><Link to="/ai-solutions" className="hover:text-primary">AI Solutions</Link></li>
              <li><Link to="/systems-development" className="hover:text-primary">Systems Development</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>WhatsApp: +263 775 526 709</li>
              <li>Harare, Zimbabwe</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Get Started</h4>
            <Button asChild className="bg-gradient-hero shadow-glow w-full">
              <a href={waLink(ctaMessage)} target="_blank" rel="noopener noreferrer">Book Free Call</a>
            </Button>
          </div>
        </div>
        <div className="border-t border-border/40 py-4 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Intelli-Sys. All rights reserved.
        </div>
      </footer>
    </main>
  );
};