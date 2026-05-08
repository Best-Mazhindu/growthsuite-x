import { useMemo, useState } from "react";
import { Server, Laptop, Wifi, Printer, Cpu, MapPin, Boxes, Cloud, ShoppingCart, Search, Star, ShieldCheck, Truck, Headphones, Zap, Plus, Minus, X, ArrowRight, Building2, Handshake } from "lucide-react";
import { FunnelShell } from "@/components/funnel/FunnelShell";
import { FunnelHero } from "@/components/funnel/FunnelHero";
import { HumanFeature } from "@/components/funnel/HumanFeature";
import { DeepBand } from "@/components/funnel/DeepBand";
import { WhyCards } from "@/components/funnel/WhyCards";
import { LeadForm } from "@/components/funnel/LeadForm";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { waLink } from "@/lib/pricing";
import { toast } from "sonner";
import heroImg from "@/assets/store-hero.jpg";
import enterpriseImg from "@/assets/store-enterprise.jpg";

type Product = {
  id: string;
  name: string;
  category: string;
  brand: string;
  price: number;
  desc: string;
  tag?: string;
  inStock: boolean;
};

const categories = [
  { id: "all", name: "All Products", icon: Boxes },
  { id: "servers", name: "Servers & Infrastructure", icon: Server },
  { id: "computers", name: "Computers & Workstations", icon: Laptop },
  { id: "networking", name: "Networking & Internet", icon: Wifi },
  { id: "printers", name: "Printers & Office", icon: Printer },
  { id: "iot", name: "IoT & Smart Devices", icon: Cpu },
  { id: "tracking", name: "Tracking & Security", icon: MapPin },
  { id: "is", name: "IS Branded Devices", icon: Zap },
  { id: "software", name: "Software & Subscriptions", icon: Cloud },
];

const products: Product[] = [
  { id: "p1", name: "Dell PowerEdge R750 Rack Server", category: "servers", brand: "Dell", price: 4850, desc: "Dual Xeon, 64GB RAM, enterprise-grade reliability.", tag: "Bestseller", inStock: true },
  { id: "p2", name: "HP ProLiant AI Server", category: "servers", brand: "HP", price: 7200, desc: "Optimised for AI workloads with GPU acceleration.", inStock: true },
  { id: "p3", name: "HP EliteBook 840 G10", category: "computers", brand: "HP", price: 1450, desc: "Business-grade ultrabook, i7, 16GB, 512GB SSD.", inStock: true },
  { id: "p4", name: "Lenovo ThinkPad X1 Carbon", category: "computers", brand: "Lenovo", price: 1890, desc: "Premium business laptop, ultra-light, military-grade.", tag: "New", inStock: true },
  { id: "p5", name: "AI Workstation Pro", category: "computers", brand: "IS", price: 3200, desc: "RTX 4090, 64GB, perfect for ML & data science.", tag: "AI-Ready", inStock: true },
  { id: "p6", name: "Cisco Catalyst 1000 Switch", category: "networking", brand: "Cisco", price: 680, desc: "Managed Gigabit switch for enterprise networks.", inStock: true },
  { id: "p7", name: "MikroTik RB5009 Router", category: "networking", brand: "MikroTik", price: 320, desc: "High-performance enterprise routing & firewall.", inStock: true },
  { id: "p8", name: "Starlink Business Kit", category: "networking", brand: "Starlink", price: 2500, desc: "High-speed satellite internet for any location.", tag: "Popular", inStock: true },
  { id: "p9", name: "HP LaserJet Enterprise M507", category: "printers", brand: "HP", price: 540, desc: "Fast monochrome laser, 45ppm, network-ready.", inStock: true },
  { id: "p10", name: "GPS Fleet Tracker Pro", category: "tracking", brand: "IS", price: 95, desc: "Real-time vehicle tracking with mobile dashboard.", inStock: true },
  { id: "p11", name: "8-Camera CCTV Bundle", category: "tracking", brand: "Hikvision", price: 1250, desc: "Full HD surveillance kit with NVR & cloud backup.", tag: "Bundle", inStock: true },
  { id: "p12", name: "IS Smart Office Hub", category: "is", brand: "IS", price: 850, desc: "Centralised control for lighting, security & devices.", tag: "IS Branded", inStock: true },
  { id: "p13", name: "IoT Gateway Industrial", category: "iot", brand: "IS", price: 410, desc: "Connect sensors & devices to your cloud platform.", inStock: true },
  { id: "p14", name: "Microsoft 365 Business Premium", category: "software", brand: "Microsoft", price: 22, desc: "Per user / month — full productivity suite.", inStock: true },
  { id: "p15", name: "ESET Endpoint Protection", category: "software", brand: "ESET", price: 35, desc: "Per device / year — enterprise antivirus.", inStock: true },
  { id: "p16", name: "IS Cloud ERP Suite", category: "software", brand: "IS", price: 199, desc: "Per user / month — finance, HR, inventory in one.", tag: "IS Branded", inStock: true },
];

const whys = [
  { icon: ShieldCheck, title: "Trusted Technology Solutions", desc: "Authorised supplier of leading global brands." },
  { icon: Cpu, title: "AI-Ready Infrastructure", desc: "Hardware engineered for modern AI workloads." },
  { icon: Server, title: "Enterprise Hardware Experts", desc: "Decades of combined deployment experience." },
  { icon: Truck, title: "Local & International Supply", desc: "Fast delivery across Zimbabwe and the region." },
  { icon: Zap, title: "Fast Deployment Support", desc: "Plug-and-play setups and on-site installation." },
  { icon: Headphones, title: "Warranty & Tech Assistance", desc: "Backed by full warranties and ongoing support." },
  { icon: Building2, title: "Business-Focused Solutions", desc: "Tailored packages for SMEs and enterprises." },
  { icon: Boxes, title: "Scalable Technology Ecosystem", desc: "Grow without ripping out what you have." },
];

type CartItem = { product: Product; qty: number };

const ProductCard = ({ p, onAdd, onQuote }: { p: Product; onAdd: (p: Product) => void; onQuote: (p: Product) => void }) => {
  const Icon = categories.find((c) => c.id === p.category)?.icon || Boxes;
  return (
    <article className="group bg-card rounded-2xl border border-border/50 shadow-card hover:shadow-glow hover:-translate-y-1 transition-all overflow-hidden flex flex-col">
      <div className="relative aspect-[4/3] bg-gradient-soft flex items-center justify-center overflow-hidden">
        <Icon className="w-20 h-20 text-primary/60 group-hover:scale-110 transition-transform duration-500" />
        {p.tag && <Badge className="absolute top-3 left-3 bg-gradient-hero text-primary-foreground border-0">{p.tag}</Badge>}
        <span className={`absolute top-3 right-3 text-xs px-2 py-0.5 rounded-full ${p.inStock ? "bg-green-500/15 text-green-700" : "bg-muted text-muted-foreground"}`}>
          {p.inStock ? "In stock" : "On request"}
        </span>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{p.brand}</div>
        <h3 className="font-semibold leading-tight mb-2 line-clamp-2">{p.name}</h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{p.desc}</p>
        <div className="mt-auto">
          <div className="text-2xl font-bold gradient-text mb-3">${p.price.toLocaleString()}</div>
          <div className="flex gap-2">
            <Button size="sm" className="flex-1 bg-gradient-hero shadow-glow" onClick={() => onAdd(p)}>
              <ShoppingCart className="w-4 h-4" /> Add
            </Button>
            <Button size="sm" variant="outline" className="border-primary/30" onClick={() => onQuote(p)}>
              Quote
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
};

const DigitalStore = () => {
  const ctaMsg = "Hi Intelli-Sys, I'd like info on the IS Digital Store.";
  const [cart, setCart] = useState<CartItem[]>([]);
  const [activeCat, setActiveCat] = useState("all");
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);

  const filtered = useMemo(
    () => products.filter((p) =>
      (activeCat === "all" || p.category === activeCat) &&
      (p.name.toLowerCase().includes(search.toLowerCase()) || p.brand.toLowerCase().includes(search.toLowerCase())),
    ),
    [activeCat, search],
  );

  const featured = products.filter((p) => p.tag);

  const addToCart = (p: Product) => {
    setCart((c) => {
      const existing = c.find((i) => i.product.id === p.id);
      if (existing) return c.map((i) => (i.product.id === p.id ? { ...i, qty: i.qty + 1 } : i));
      return [...c, { product: p, qty: 1 }];
    });
    toast.success(`${p.name} added to cart`);
  };

  const updateQty = (id: string, delta: number) => {
    setCart((c) => c.flatMap((i) => {
      if (i.product.id !== id) return [i];
      const qty = i.qty + delta;
      return qty <= 0 ? [] : [{ ...i, qty }];
    }));
  };

  const removeItem = (id: string) => setCart((c) => c.filter((i) => i.product.id !== id));

  const cartTotal = cart.reduce((s, i) => s + i.product.price * i.qty, 0);
  const cartCount = cart.reduce((s, i) => s + i.qty, 0);

  const checkoutMsg = `Hi Intelli-Sys, I'd like to order the following from IS Digital Store:%0A${cart
    .map((i) => `• ${i.qty}x ${i.product.name} – $${(i.product.price * i.qty).toLocaleString()}`)
    .join("%0A")}%0A%0ATotal: $${cartTotal.toLocaleString()}`;

  const requestQuote = (p: Product) => {
    window.open(waLink(`Hi Intelli-Sys, I'd like a quote for: ${p.name} ($${p.price}). Please share availability & bulk pricing.`), "_blank");
  };

  return (
    <FunnelShell ctaMessage={ctaMsg}>
      {/* Sticky cart trigger */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <button
            className="fixed top-20 right-4 z-40 flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-hero text-primary-foreground shadow-glow hover:scale-105 transition-transform"
            aria-label="Open cart"
          >
            <ShoppingCart className="w-4 h-4" />
            <span className="font-semibold text-sm">Cart</span>
            {cartCount > 0 && (
              <span className="bg-white/20 rounded-full text-xs font-bold w-6 h-6 flex items-center justify-center">{cartCount}</span>
            )}
          </button>
        </SheetTrigger>
        <SheetContent className="w-full sm:max-w-md flex flex-col">
          <SheetHeader>
            <SheetTitle>Your Cart ({cartCount})</SheetTitle>
          </SheetHeader>
          <div className="flex-1 overflow-auto py-4 space-y-3">
            {cart.length === 0 && <p className="text-center text-muted-foreground py-12">Cart is empty. Browse products to add.</p>}
            {cart.map((i) => (
              <div key={i.product.id} className="flex gap-3 p-3 rounded-xl border border-border/50">
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-sm truncate">{i.product.name}</div>
                  <div className="text-xs text-muted-foreground mb-2">${i.product.price.toLocaleString()}</div>
                  <div className="flex items-center gap-2">
                    <button onClick={() => updateQty(i.product.id, -1)} className="w-7 h-7 rounded-md border flex items-center justify-center hover:bg-muted"><Minus className="w-3 h-3" /></button>
                    <span className="text-sm font-semibold w-6 text-center">{i.qty}</span>
                    <button onClick={() => updateQty(i.product.id, 1)} className="w-7 h-7 rounded-md border flex items-center justify-center hover:bg-muted"><Plus className="w-3 h-3" /></button>
                    <button onClick={() => removeItem(i.product.id)} className="ml-auto text-muted-foreground hover:text-destructive"><X className="w-4 h-4" /></button>
                  </div>
                </div>
                <div className="font-bold text-primary">${(i.product.price * i.qty).toLocaleString()}</div>
              </div>
            ))}
          </div>
          {cart.length > 0 && (
            <div className="border-t pt-4 space-y-3">
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span className="gradient-text">${cartTotal.toLocaleString()}</span>
              </div>
              <Button asChild className="w-full bg-gradient-hero shadow-glow h-12">
                <a href={`https://wa.me/263775526709?text=${checkoutMsg}`} target="_blank" rel="noopener noreferrer">
                  Checkout via WhatsApp <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              <p className="text-xs text-center text-muted-foreground">Our team confirms stock & arranges payment + delivery.</p>
            </div>
          )}
        </SheetContent>
      </Sheet>

      <FunnelHero
        eyebrow="IS Digital Store"
        title="Your Smart Technology & AI Infrastructure Store"
        subtitle="Access enterprise technology, AI-ready infrastructure, networking devices, smart systems, and IS-branded digital solutions designed for modern businesses."
        primaryLabel="Shop Devices"
        secondaryLabel="Request Custom Quote"
        onSecondary={() => document.getElementById("catalog")?.scrollIntoView({ behavior: "smooth" })}
        primaryMessage="Hi Intelli-Sys, I'd like to browse the IS Digital Store catalog."
        image={heroImg}
        stats={[{ value: "500+", label: "Products" }, { value: "20+", label: "Brands" }, { value: "48h", label: "Delivery" }]}
      />

      {/* Featured products */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Featured</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">Trending Hardware This Month</h2>
            <p className="text-muted-foreground">Hand-picked devices and bundles powering modern African businesses.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featured.map((p) => <ProductCard key={p.id} p={p} onAdd={addToCart} onQuote={requestQuote} />)}
          </div>
        </div>
      </section>

      {/* Categories — sky band */}
      <section className="py-20 bg-sky">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Browse Categories</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">Everything Your Business Runs On</h2>
            <p className="text-muted-foreground">From rack servers to smart office kits — explore by category.</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories.filter((c) => c.id !== "all").map((c) => (
              <button
                key={c.id}
                onClick={() => { setActiveCat(c.id); document.getElementById("catalog")?.scrollIntoView({ behavior: "smooth" }); }}
                className="bg-card rounded-2xl p-6 text-left border border-border/40 shadow-card hover:shadow-glow hover:-translate-y-1 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center mb-4 shadow-glow group-hover:scale-110 transition-transform">
                  <c.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold mb-1">{c.name}</h3>
                <p className="text-xs text-muted-foreground">Explore range →</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Catalog with filters */}
      <section id="catalog" className="py-20 bg-background scroll-mt-20">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Catalog</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2">Shop the Full Range</h2>
            </div>
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search products or brands…" className="pl-9 h-11" />
            </div>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-3 mb-6 -mx-4 px-4">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveCat(c.id)}
                className={`shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                  activeCat === c.id ? "bg-gradient-hero text-primary-foreground border-transparent shadow-glow" : "bg-card border-border hover:border-primary/40"
                }`}
              >
                <c.icon className="w-4 h-4" /> {c.name}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-16 text-muted-foreground">No products match your filters.</div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filtered.map((p) => <ProductCard key={p.id} p={p} onAdd={addToCart} onQuote={requestQuote} />)}
            </div>
          )}
        </div>
      </section>

      {/* Enterprise band */}
      <DeepBand
        eyebrow="Enterprise Solutions"
        title="Enterprise Technology Solutions, Delivered End-to-End"
        description="Corporate IT infrastructure, enterprise networking, server deployment, AI infrastructure, smart office installation and full digital transformation — under one roof."
        features={[
          { icon: Server, title: "Server Deployment", desc: "Rack design, install, configure, monitor." },
          { icon: Wifi, title: "Enterprise Networking", desc: "Fiber, wireless, SD-WAN, security." },
          { icon: Cpu, title: "AI Infrastructure", desc: "GPU servers, MLOps, data pipelines." },
        ]}
        ctaLabel="Request Enterprise Consultation"
        ctaMessage="Hi Intelli-Sys, I need an enterprise infrastructure consultation."
      />

      {/* Human enterprise feature */}
      <HumanFeature
        eyebrow="Trusted by Modern Businesses"
        title="Hardware. Networks. Cloud. One partner."
        description="From a single workstation to a full data centre rollout — our engineers design, supply, install and support every layer of your technology stack."
        bullets={[
          { icon: ShieldCheck, label: "Authorised supplier of global enterprise brands" },
          { icon: Truck, label: "Fast nationwide delivery & professional installation" },
          { icon: Headphones, label: "Local technical support and warranty handling" },
        ]}
        image={enterpriseImg}
        imageSide="right"
        variant="light"
        ctaLabel="Talk to a Solutions Engineer"
        ctaMessage="Hi Intelli-Sys, I'd like to talk to a solutions engineer about my infrastructure."
        floatStat={{ value: "48h", label: "Avg. Deployment" }}
      />

      {/* Why */}
      <WhyCards eyebrow="Why IS Digital Store" title="Built for Serious Businesses" cards={whys} />

      {/* Supplier / Partner section */}
      <section className="py-24 bg-sky">
        <div className="container max-w-5xl">
          <div className="text-center mb-10">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Partner With Us</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">Become a Supplier or Technology Partner</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Are you a manufacturer, distributor or technology brand? Join our growing network and reach businesses across the region.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card rounded-2xl p-8 shadow-card border border-border/40">
              <Handshake className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">What we offer partners</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Listing across the IS Digital Store catalog</li>
                <li>• Distribution to enterprise & SME clients</li>
                <li>• Joint marketing & lead generation</li>
                <li>• Logistics, installation & support coverage</li>
              </ul>
            </div>
            <SupplierForm />
          </div>
        </div>
      </section>

      {/* Final lead form */}
      <LeadForm
        category="digital-store"
        headline="Need a Custom Hardware Quote?"
        subline="Send us your requirements — we'll respond with availability, pricing and delivery within 24 hours."
        ctaLabel="Request Custom Quote"
        waMessagePrefix="Hi Intelli-Sys, I need a custom hardware quote from IS Digital Store."
      />
    </FunnelShell>
  );
};

const SupplierForm = () => {
  const [f, setF] = useState({ company: "", contact: "", email: "", products: "" });
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!f.company || !f.contact || !f.email) {
      toast.error("Please fill in all required fields.");
      return;
    }
    const msg = `Hi Intelli-Sys, I'd like to apply as a supplier.%0ACompany: ${f.company}%0AContact: ${f.contact}%0AEmail: ${f.email}%0AProducts: ${f.products}`;
    window.open(`https://wa.me/263775526709?text=${msg}`, "_blank");
    toast.success("Opening WhatsApp to send your application…");
  };
  return (
    <form onSubmit={submit} className="bg-card rounded-2xl p-8 shadow-card border border-border/40 space-y-3">
      <h3 className="text-xl font-bold mb-2">Supplier Application</h3>
      <div>
        <Label htmlFor="company">Company *</Label>
        <Input id="company" value={f.company} onChange={(e) => setF({ ...f, company: e.target.value })} maxLength={120} />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <Label htmlFor="contact">Contact name *</Label>
          <Input id="contact" value={f.contact} onChange={(e) => setF({ ...f, contact: e.target.value })} maxLength={100} />
        </div>
        <div>
          <Label htmlFor="email">Email *</Label>
          <Input id="email" type="email" value={f.email} onChange={(e) => setF({ ...f, email: e.target.value })} maxLength={255} />
        </div>
      </div>
      <div>
        <Label htmlFor="products">Products / Catalog summary</Label>
        <Textarea id="products" rows={3} value={f.products} onChange={(e) => setF({ ...f, products: e.target.value })} maxLength={1000} />
      </div>
      <Button type="submit" className="w-full bg-gradient-hero shadow-glow h-11">Submit Application</Button>
    </form>
  );
};

export default DigitalStore;