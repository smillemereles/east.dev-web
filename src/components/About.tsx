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

        {/* Big statement */}
        <div className="max-w-5xl mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold leading-[1.05] mb-10">
            El puente entre{" "}
            <span className="text-gradient">tu visión</span> y la
            realidad digital
          </h2>
        </div>

        {/* Two-column narrative */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 mb-20">
          <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
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
          <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
            <p>
              Trabajamos codo a codo con emprendedores, pymes y marcas que buscan 
              destacar en el mundo digital con soluciones a medida y diseño con propósito.
            </p>
            <p>
              Nuestro enfoque combina código limpio, diseño moderno y estrategia 
              para entregar resultados que impactan.
            </p>
          </div>
        </div>

        {/* Stats / pillars row */}
        <div className="border-t border-border/40 pt-12 grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {[
            { number: "50+", label: "Proyectos entregados" },
            { number: "20+", label: "Clientes satisfechos" },
            { number: "3+", label: "Años de experiencia" },
            { number: "100%", label: "Compromiso" },
          ].map((stat) => (
            <div key={stat.label} className="text-center lg:text-left">
              <span className="block text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-primary mb-2">
                {stat.number}
              </span>
              <span className="text-sm text-muted-foreground tracking-wide">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
