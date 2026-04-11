import { ArrowUpRight, Clock } from "lucide-react";
import { useState } from "react";

const completedProjects = [
  {
    name: "Hoplon Lounge",
    description: "Sitio web elegante para lounge bar con reservas online y menú digital.",
    technologies: ["React", "Tailwind", "Motion"],
    image: "hoplon/hoplonhero.png",
    year: "2025",
    url: "https://hoplonclub.com.py/",
  },
  {
    name: "La Mansa",
    description: "Plataforma gastronómica con sistema de pedidos y carta digital.",
    technologies: ["Next.js", "Supabase", "Stripe"],
    image: "Lamansa/lamansahero.png",
    year: "2025",
    url: "https://lamansapy.com/",
  },
  {
    name: "Lleva Viajes",
    description: "Agencia de viajes con catálogo de destinos y cotización.",
    technologies: ["React", "Node.js"],
    image: "llevaviajes/llevahero.png",
    year: "2026",
    url: "https://lleva.com.py/",
  },
];

const prototypeProjects = [
  {
    name: "Lleva Elite Journeys",
    description: "Prototipo de plataforma de viajes premium con experiencias exclusivas.",
    url: "https://lleva-elite-journeys.vercel.app/",
  },
  {
    name: "Farmacia Do Sul",
    description: "Prototipo de e-commerce para farmacia con catálogo de productos.",
    url: "https://farmacia-do-sul-e-commerce.vercel.app/",
  },
  {
    name: "YoCreo",
    description: "Prototipo de hub digital con diseño moderno y accesible.",
    url: "https://yocreo-digital-hub.vercel.app/",
  },
];

export const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="proyectos" className="section-padding relative bg-muted/40">
      <div className="container-custom">
        {/* Section Label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-xs font-medium text-muted-foreground tracking-[0.3em] uppercase">
            Proyectos
          </span>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-border to-transparent" />
        </div>

        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-[1.1] mb-6">
            Trabajos que{" "}
            <span className="text-gradient">hablan</span>
            <br />por nosotros
          </h2>
        </div>

        {/* Projects List */}
        <div className="border-t border-border/30">
          {completedProjects.map((project, index) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative border-b border-border/30 py-6 sm:py-8 cursor-pointer block"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 sm:gap-8 min-w-0">
                  <span className="text-sm font-mono text-muted-foreground/50 w-8 shrink-0 hidden sm:block">
                    0{index + 1}
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-lg sm:text-2xl md:text-3xl font-display font-bold group-hover:text-primary transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-muted-foreground text-xs sm:text-sm mt-1 max-w-md hidden sm:block">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 sm:gap-6 shrink-0">
                  <span className="text-sm text-muted-foreground hidden sm:block">{project.year}</span>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-border flex items-center justify-center group-hover:border-primary group-hover:bg-primary transition-all">
                    <ArrowUpRight className="w-5 h-5 group-hover:text-primary-foreground transition-colors" />
                  </div>
                </div>
              </div>

              {/* Hover Image */}
              <div 
                className={`absolute right-24 top-1/2 -translate-y-1/2 w-64 h-40 rounded-lg overflow-hidden pointer-events-none transition-all duration-300 z-10 hidden md:block ${
                  hoveredProject === index ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
              >
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </a>
          ))}
        </div>

        {/* Prototypes */}
        <div className="mt-20">
          <div className="flex items-center gap-3 mb-8">
            <Clock className="w-5 h-5 text-muted-foreground" />
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
              Prototipos Web
            </span>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {prototypeProjects.map((project) => (
              <a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-6 rounded-xl group hover:border-primary/50 transition-all"
              >
                <h4 className="font-display font-semibold mb-2 group-hover:text-primary transition-colors">{project.name}</h4>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                <div className="flex items-center gap-2 text-sm text-primary">
                  <span>Ver prototipo</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
