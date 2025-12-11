import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

const words = ["Directores", "Diseñadores", "Agencias", "Marcas", "Startups"];

const images = [
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop",
];

export const Hero = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentWord((prev) => (prev + 1) % words.length);
        setIsAnimating(false);
      }, 300);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="inicio"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden"
    >
      {/* Background Glow Effects */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-electric/5 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                          linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
        backgroundSize: '80px 80px'
      }} />

      <div className="container-custom relative z-10 pt-32 pb-20">
        {/* Top Label */}
        <div className="flex items-center gap-4 mb-12 animate-fade-up">
          <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-primary" />
          <span className="text-xs font-medium text-muted-foreground tracking-[0.3em] uppercase">
            Desarrollo web premium
          </span>
        </div>

        {/* Main Headline */}
        <div className="max-w-5xl">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-display font-bold leading-[0.9] tracking-tight mb-8">
            <span className="block animate-fade-up" style={{ animationDelay: "0.1s" }}>
              El socio
            </span>
            <span className="block animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <span className="text-gradient">creativo</span>
            </span>
            <span className="block text-muted-foreground/50 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              para{" "}
              <span 
                className={`inline-block text-foreground transition-all duration-300 ${
                  isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
                }`}
              >
                {words[currentWord]}
              </span>
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed mb-12 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            Diseño y desarrollo web con identidad propia. Construimos experiencias 
            digitales que transforman marcas.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.5s" }}>
            <Button variant="hero" size="xl">
              Ver Proyectos
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="xl">
              Empezar proyecto
            </Button>
          </div>
        </div>

        {/* Floating Images */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-4 opacity-60">
          {images.slice(0, 3).map((img, i) => (
            <div
              key={i}
              className="w-32 h-24 rounded-lg overflow-hidden animate-float"
              style={{ 
                animationDelay: `${i * 0.5}s`,
                transform: `translateX(${i % 2 === 0 ? '0' : '20px'})`
              }}
            >
              <img src={img} alt="" className="w-full h-full object-cover opacity-70" />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Marquee */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-border/30 py-6 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-16 mx-8">
              {["DESARROLLO WEB", "UI/UX DESIGN", "BRANDING", "MARKETING", "SEO", "E-COMMERCE"].map((item) => (
                <span key={item} className="text-sm font-medium text-muted-foreground/50 tracking-[0.2em] uppercase flex items-center gap-4">
                  {item}
                  <span className="w-2 h-2 rounded-full bg-primary/30" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
