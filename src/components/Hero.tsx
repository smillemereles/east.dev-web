import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/30 to-silver-light/20" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-silver/20 rounded-full blur-3xl" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                          linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-8 animate-fade-up">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Desarrollo web premium desde Ciudad del Este</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Conectamos tu{" "}
            <span className="text-gradient">visión</span>
            <br />
            con la tecnología
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Diseño y desarrollo web con identidad propia. Creamos experiencias digitales 
            que transforman marcas y conectan con audiencias.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl">
              Ver Proyectos
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="xl">
              Solicitar Presupuesto
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20 pt-10 border-t border-border/50 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div>
              <p className="text-3xl sm:text-4xl font-display font-bold text-primary">15+</p>
              <p className="text-sm text-muted-foreground mt-1">Proyectos completados</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-display font-bold text-primary">100%</p>
              <p className="text-sm text-muted-foreground mt-1">Clientes satisfechos</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-display font-bold text-primary">3+</p>
              <p className="text-sm text-muted-foreground mt-1">Años de experiencia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
