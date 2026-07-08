import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { useTranslation } from "@/hooks/use-i18n";
import heroBgPng from "@/assets/hero-bridge-bg.png.asset.json";
import heroBgWebp from "@/assets/hero-bridge-bg.webp.asset.json";
import heroBgAvif from "@/assets/hero-bridge-bg.avif.asset.json";



export const Hero = () => {
  const { t } = useTranslation();
  const words = t("hero.words") as string[];
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
      {/* Subtle hero background image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <picture>
          <source srcSet={heroBgAvif.url} type="image/avif" />
          <source srcSet={heroBgWebp.url} type="image/webp" />
          <img
            src={heroBgPng.url}
            alt="Puente de la Amistad con conexión digital"
            className="w-full h-full object-cover opacity-20"
            loading="eager"
            decoding="async"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-background/70" />
      </div>

      {/* Background Glow Effects */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-electric/5 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                          linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
        backgroundSize: '80px 80px'
      }} />

      <div className="container-custom relative z-10 pt-24 sm:pt-32 pb-16 sm:pb-20">
        {/* Top Label */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8 sm:mb-12 animate-fade-up">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-primary" />
            <span className="text-xs font-medium text-muted-foreground tracking-[0.3em] uppercase">
              {t("hero.label")}
            </span>
          </div>
          <span className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-xs font-medium text-primary tracking-wide">
            {t("hero.internationalBadge")}
          </span>
        </div>

        {/* Main Headline */}
        <div className="max-w-5xl">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-display font-bold leading-[0.9] tracking-tight mb-6 sm:mb-8">
            <span className="block animate-fade-up" style={{ animationDelay: "0.1s" }}>
              {t("hero.titleLine1")}
            </span>
            <span className="block animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <span className="text-gradient">{t("hero.titleLine2")}</span>
            </span>
            <span className="block text-muted-foreground/50 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              {t("hero.subtitle")} {" "}
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
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed mb-8 sm:mb-12 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            {t("hero.description")}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.5s" }}>
            <Button variant="hero" size="xl" onClick={() => document.getElementById('proyectos')?.scrollIntoView({ behavior: 'smooth' })}>
              {t("hero.ctaProjects")}
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="xl" onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}>
              {t("hero.ctaContact")}
            </Button>
            <a href="https://wa.link/jfxdzh" target="_blank" rel="noopener noreferrer" className="inline-flex">
              <Button variant="heroOutline" size="xl">
                {t("hero.internationalCta")}
              </Button>
            </a>
          </div>
        </div>

        {/* Floating images removed per design preference */}
      </div>

      {/* Bottom Marquee */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-border/30 py-4 sm:py-6 overflow-hidden hidden sm:block">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 sm:gap-16 mx-4 sm:mx-8">
              {(t("hero.marquee") as string[]).map((item) => (
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
