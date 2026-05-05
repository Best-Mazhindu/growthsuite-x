import logo from "@/assets/intellisys-logo.png";
import { Target, Eye, Cpu } from "lucide-react";

export const About = () => (
  <section id="about" className="py-24 bg-gradient-soft scroll-mt-20">
    <div className="container grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <span className="text-sm font-medium text-primary uppercase tracking-wider">About Intelli-Sys</span>
        <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6">It is possible.</h2>
        <p className="text-muted-foreground text-lg mb-4">
          Intelli-Sys is a technology and intelligence company building the systems modern businesses run on.
          We combine software engineering, AI, and growth strategy under one roof — so our clients move faster and compete smarter.
        </p>
        <div className="grid sm:grid-cols-3 gap-4 mt-8">
          <div className="glass rounded-xl p-5">
            <Target className="w-6 h-6 text-primary mb-2" />
            <div className="font-semibold text-sm">Mission</div>
            <p className="text-xs text-muted-foreground mt-1">Make intelligent technology accessible to every business.</p>
          </div>
          <div className="glass rounded-xl p-5">
            <Eye className="w-6 h-6 text-primary mb-2" />
            <div className="font-semibold text-sm">Vision</div>
            <p className="text-xs text-muted-foreground mt-1">An AI-powered ecosystem where every operation runs smarter.</p>
          </div>
          <div className="glass rounded-xl p-5">
            <Cpu className="w-6 h-6 text-primary mb-2" />
            <div className="font-semibold text-sm">Expertise</div>
            <p className="text-xs text-muted-foreground mt-1">Software, AI, automation & data — engineered end-to-end.</p>
          </div>
        </div>
      </div>
      <div className="relative flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-hero opacity-20 blur-3xl rounded-full" />
        <img src={logo} alt="Intelli-Sys logo" className="relative w-72 md:w-96 object-contain drop-shadow-2xl" />
      </div>
    </div>
  </section>
);