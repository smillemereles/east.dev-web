import { ArrowUpRight, Clock } from "lucide-react";
import { useState } from "react";

const completedProjects = [
  {
    name: "Hoplon Lounge",
    description: "Sitio web elegante para lounge bar con reservas online y menú digital.",
    technologies: ["React", "Tailwind", "Motion"],
    image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800&h=600&fit=crop",
    year: "2024",
  },
  {
    name: "La Mansa",
    description: "Plataforma gastronómica con sistema de pedidos y carta digital.",
    technologies: ["Next.js", "Supabase", "Stripe"],
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
    year: "2024",
  },
  {
    name: "YoCreo",
    description: "Web institucional con diseño moderno y accesible.",
    technologies: ["React", "TypeScript"],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
    year: "2023",
  },
  {
    name: "Lleva Viajes",
    description: "Agencia de viajes con catálogo de destinos y cotización.",
    technologies: ["React", "Node.js"],
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&h=600&fit=crop",
    year: "2023",
  },
];

const inProgressProjects = [
  { name: "E-commerce Premium", progress: 75 },
  { name: "App de Reservas", progress: 40 },
  { name: "Dashboard Analytics", progress: 60 },
];

export const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="proyectos" className="section-padding relative">
      <div className="container-custom">
        {/* Section Label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-xs font-medium text-muted-foreground tracking-[0.3em] uppercase">
            03 — Proyectos
          </span>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-border to-transparent" />
        </div>

        {/* Header */}
        <div className="max-w-3xl mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-[1.1] mb-6">
            Trabajos que{" "}
            <span className="text-gradient">hablan</span>
            <br />por nosotros
          </h2>
        </div>

        {/* Projects List */}
        <div className="border-t border-border/30">
          {completedProjects.map((project, index) => (
            <div
              key={project.name}
              className="group relative border-b border-border/30 py-8 cursor-pointer"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-8">
                  <span className="text-sm font-mono text-muted-foreground/50 w-8">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-display font-bold group-hover:text-primary transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mt-1 max-w-md">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <span className="text-sm text-muted-foreground hidden sm:block">{project.year}</span>
                  <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:border-primary group-hover:bg-primary transition-all">
                    <ArrowUpRight className="w-5 h-5 group-hover:text-primary-foreground transition-colors" />
                  </div>
                </div>
              </div>

              {/* Hover Image */}
              <div 
                className={`absolute right-24 top-1/2 -translate-y-1/2 w-64 h-40 rounded-lg overflow-hidden pointer-events-none transition-all duration-300 z-10 ${
                  hoveredProject === index ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
              >
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        {/* In Progress */}
        <div className="mt-20">
          <div className="flex items-center gap-3 mb-8">
            <Clock className="w-5 h-5 text-muted-foreground" />
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
              En desarrollo
            </span>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            {inProgressProjects.map((project) => (
              <div
                key={project.name}
                className="glass-card p-6 rounded-xl"
              >
                <h4 className="font-display font-semibold mb-4">{project.name}</h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Progreso</span>
                    <span className="text-primary font-mono">{project.progress}%</span>
                  </div>
                  <div className="h-1 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-electric rounded-full"
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
