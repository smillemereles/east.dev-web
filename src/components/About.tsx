import { Link2, Code2, Palette, Rocket } from "lucide-react";

export const About = () => {
  return (
    <section id="nosotros" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-sm font-medium text-primary tracking-wider uppercase">
              Sobre Nosotros
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mt-4 mb-6">
              El puente entre tu idea y la{" "}
              <span className="text-gradient">realidad digital</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">east.dev</strong> nació en Ciudad del Este, 
                inspirada en el icónico Puente de la Amistad que conecta dos mundos. 
                De la misma manera, conectamos tecnología y creatividad para dar vida 
                a proyectos web únicos.
              </p>
              <p>
                Como desarrolladora y diseñadora web, combino la precisión técnica con 
                una visión artística para crear experiencias digitales que no solo funcionan 
                perfectamente, sino que también cuentan historias y generan conexiones 
                reales con tu audiencia.
              </p>
              <p>
                Cada proyecto es una oportunidad de construir puentes: entre tu marca y 
                tus clientes, entre lo tradicional y lo innovador, entre la idea y la solución.
              </p>
            </div>
          </div>

          {/* Right Content - Values */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-card p-6 rounded-xl shadow-elegant hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-border/50">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Link2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">Conexión</h3>
              <p className="text-sm text-muted-foreground">
                Unimos diseño y desarrollo para crear experiencias coherentes y memorables.
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-elegant hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-border/50">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Palette className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">Creatividad</h3>
              <p className="text-sm text-muted-foreground">
                Cada proyecto tiene su propia identidad visual única y personalizada.
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-elegant hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-border/50">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Code2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">Precisión</h3>
              <p className="text-sm text-muted-foreground">
                Código limpio y optimizado que garantiza rendimiento y escalabilidad.
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-elegant hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-border/50">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Rocket className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">Innovación</h3>
              <p className="text-sm text-muted-foreground">
                Tecnologías modernas y tendencias actuales en cada proyecto.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
