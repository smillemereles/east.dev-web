import { Link2, Code2, Palette, Rocket } from "lucide-react";

export const About = () => {
  return (
    <section id="nosotros" className="section-padding relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Section Label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-xs font-medium text-muted-foreground tracking-[0.3em] uppercase">
            Sobre Nosotros
          </span>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-border to-transparent" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-[1.1] mb-8">
              El puente entre
              <br />
              <span className="text-gradient">tu visión</span> y la
              <br />
              realidad digital
            </h2>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
              <p>
                <span className="text-foreground font-semibold">east.dev</span> nació en Ciudad del Este, 
                inspirada en el icónico Puente de la Amistad. Conectamos tecnología 
                y creatividad para dar vida a proyectos web únicos.
              </p>
              <p>
                Cada proyecto es una oportunidad de construir puentes: entre tu marca 
                y tus clientes, entre lo tradicional y lo innovador.
              </p>
            </div>
          </div>

          {/* Right Content - Values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: Link2, title: "Conexión", desc: "Unimos diseño y desarrollo para experiencias coherentes." },
              { icon: Palette, title: "Creatividad", desc: "Cada proyecto tiene su propia identidad visual única." },
              { icon: Code2, title: "Precisión", desc: "Código limpio y optimizado para rendimiento óptimo." },
              { icon: Rocket, title: "Innovación", desc: "Tecnologías modernas y tendencias actuales." },
            ].map((item, i) => (
              <div
                key={item.title}
                className="group glass-card p-6 rounded-2xl hover:border-primary/30 transition-all duration-500 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
