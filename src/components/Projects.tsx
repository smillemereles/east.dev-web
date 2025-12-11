import { ExternalLink, Clock } from "lucide-react";
import { Button } from "./ui/button";

const completedProjects = [
  {
    name: "Hoplon Lounge",
    description: "Sitio web elegante para un lounge bar con reservas online y menú digital interactivo.",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=600&h=400&fit=crop",
    link: "#",
  },
  {
    name: "La Mansa",
    description: "Plataforma gastronómica con sistema de pedidos y gestión de carta digital.",
    technologies: ["Next.js", "Supabase", "Stripe"],
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
    link: "#",
  },
  {
    name: "YoCreo",
    description: "Página web institucional para organización con diseño moderno y accesible.",
    technologies: ["React", "TypeScript", "Tailwind"],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
    link: "#",
  },
  {
    name: "Lleva Viajes",
    description: "Agencia de viajes online con catálogo de destinos y sistema de cotización.",
    technologies: ["React", "Node.js", "MongoDB"],
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&h=400&fit=crop",
    link: "#",
  },
];

const inProgressProjects = [
  {
    name: "E-commerce Premium",
    description: "Tienda online completa con pasarela de pagos y gestión de inventario.",
    progress: 75,
  },
  {
    name: "App de Reservas",
    description: "Sistema de reservas para salones de belleza con recordatorios automáticos.",
    progress: 40,
  },
  {
    name: "Dashboard Analytics",
    description: "Panel de control con métricas y reportes en tiempo real.",
    progress: 60,
  },
];

export const Projects = () => {
  return (
    <section id="proyectos" className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-primary tracking-wider uppercase">
            Proyectos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mt-4 mb-6">
            Trabajos que hablan por{" "}
            <span className="text-gradient">nosotros</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Cada proyecto es único. Descubre cómo hemos ayudado a diferentes marcas 
            a alcanzar sus objetivos digitales.
          </p>
        </div>

        {/* Completed Projects */}
        <div className="mb-20">
          <h3 className="text-xl font-display font-semibold mb-8 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500" />
            Proyectos Finalizados
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {completedProjects.map((project, index) => (
              <div
                key={project.name}
                className="group bg-card rounded-2xl overflow-hidden shadow-elegant hover:shadow-card-hover transition-all duration-500 border border-border/50"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6">
                    <Button variant="metallic" size="sm">
                      Ver proyecto
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h4 className="font-display font-semibold text-xl mb-2">{project.name}</h4>
                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* In Progress Projects */}
        <div>
          <h3 className="text-xl font-display font-semibold mb-8 flex items-center gap-2">
            <Clock className="w-5 h-5 text-silver-dark" />
            En Desarrollo
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {inProgressProjects.map((project) => (
              <div
                key={project.name}
                className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border/50"
              >
                <h4 className="font-display font-semibold mb-2">{project.name}</h4>
                <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                
                {/* Progress bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Progreso</span>
                    <span className="font-medium text-primary">{project.progress}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-navy-light rounded-full transition-all duration-500"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
