import logo from "@/assets/intellisys-logo.png";

export const Footer = () => (
  <footer className="border-t border-border bg-gradient-soft">
    <div className="container py-12 grid md:grid-cols-4 gap-8">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <img src={logo} alt="Intelli-Sys" className="h-10 w-10 object-contain" />
          <span className="font-bold text-lg gradient-text">Intelli-Sys</span>
        </div>
        <p className="text-sm text-muted-foreground">It is possible. Software, AI & growth — engineered to scale.</p>
      </div>
      <FooterCol title="Company" links={[["About", "#about"], ["Why Us", "#why-us"], ["Insights", "#insights"], ["Contact", "#contact"]]} />
      <FooterCol title="Solutions" links={[["Services", "#services"], ["Industries", "#industries"], ["Portfolio", "#portfolio"], ["Pricing", "#pricing"]]} />
      <FooterCol title="Get Started" links={[["Calculator", "#calculator"], ["FAQ", "#faq"], ["Book Consultation", "#contact"]]} />
    </div>
    <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
      © {new Date().getFullYear()} Intelli-Sys. All rights reserved.
    </div>
  </footer>
);

const FooterCol = ({ title, links }: { title: string; links: [string, string][] }) => (
  <div>
    <div className="font-semibold mb-3 text-sm">{title}</div>
    <ul className="space-y-2">
      {links.map(([l, h]) => (
        <li key={l}><a href={h} className="text-sm text-muted-foreground hover:text-primary transition-smooth">{l}</a></li>
      ))}
    </ul>
  </div>
);