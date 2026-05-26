import { CheckCircle2 } from "lucide-react";
import { useTranslation } from "@/hooks/use-i18n";

export const HowWeWork = () => {
  const { t } = useTranslation();

  const steps = [
    {
      number: "01",
      title: "Descubrimiento & Estrategia",
      description: "Analizamos tu negocio, objetivos y audiencia para definir una estrategia clara y resultados medibles.",
      points: ["Análisis competitivo", "Research de usuarios", "Definición de KPIs"],
    },
    {
      number: "02",
      title: "Diseño & Prototipado",
      description: "Creamos wireframes y prototipos interactivos para validar la solución antes de la ejecución.",
      points: ["Diseño UI/UX", "Prototipos interactivos", "Validación con usuarios"],
    },
    {
      number: "03",
      title: "Desarrollo & Optimización",
      description: "Código limpio, responsivo y optimizado con las mejores prácticas de la industria.",
      points: ["Desarrollo full-stack", "Performance optimization", "Testing y QA"],
    },
    {
      number: "04",
      title: "Lanzamiento & Soporte",
      description: "Deployamos con seguridad, monitoreamos el rendimiento y proveemos soporte continuo.",
      points: ["Deployment seguro", "Monitoreo 24/7", "Soporte técnico"],
    },
  ];

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-secondary/5 pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Section Label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-xs font-medium text-muted-foreground tracking-[0.3em] uppercase">
            ¿Cómo trabajamos?
          </span>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-border to-transparent" />
        </div>

        {/* Header */}
        <div className="max-w-4xl mb-20">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold leading-[1.05] mb-6">
            <span className="block">Proceso probado</span>
            <span className="block text-gradient">y trasparente</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mt-8">
            Metodología ágil con entregas regulares, comunicación clara y foco absoluto en resultados medibles.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="group relative p-8 rounded-xl border border-border/30 hover:border-primary/50 bg-card/40 hover:bg-card/60 transition-all duration-500"
            >
              {/* Number background */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -z-10 group-hover:bg-primary/10 transition-all" />

              {/* Step number */}
              <span className="text-6xl font-display font-bold text-primary/20 group-hover:text-primary/30 transition-colors">
                {step.number}
              </span>

              {/* Content */}
              <h3 className="text-2xl font-display font-bold mb-4 mt-4 group-hover:text-primary transition-colors">
                {step.title}
              </h3>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {step.description}
              </p>

              {/* Points */}
              <div className="space-y-3">
                {step.points.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-electric flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{point}</span>
                  </div>
                ))}
              </div>

              {/* Hover line */}
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-primary to-electric group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="mt-20 p-8 rounded-xl border border-primary/20 bg-gradient-to-r from-primary/5 to-electric/5">
          <div className="max-w-2xl">
            <h3 className="text-2xl font-display font-bold mb-4">Listo para comenzar tu proyecto?</h3>
            <p className="text-muted-foreground mb-6">
              Contáctanos hoy y conoce cómo podemos transformar tu visión en realidad.
            </p>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-medium transition-all hover:shadow-lg"
            >
              Iniciar conversación
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

              Optimizamos constantemente basados en datos reales de rendimiento.
            </p>
          </div>
        </div>
      </FlowSection>

      <FlowSection 
        aria-label="Nuestro Compromiso" 
        style={{ backgroundColor: '#1a1a2e', color: '#fff' }}
      >
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400">
          La Diferencia HitOcean
        </p>
        <hr className="my-[2vw] border-none border-t border-blue-500/30" />
        <div>
          <h3 className="text-[clamp(2.5rem,10vw,12rem)] font-bold leading-[0.85] uppercase tracking-tight">
            Socios en
            <br />
            tu Éxito
          </h3>
        </div>
        <hr className="my-[2vw] border-none border-t border-blue-500/30" />
        <p className="mt-auto max-w-[50ch] text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed">
          Nos comprometemos con tu crecimiento a largo plazo. Tu éxito es nuestro éxito.
        </p>
      </FlowSection>
    </FlowArt>
  );
};
