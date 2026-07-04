import { ArrowUpRight, Clock } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "@/hooks/use-i18n";

type Project = {
  name: string;
  description: string;
  image: string;
  year: string;
  url: string;
};

type Category = {
  id: string;
  label: string;
  projects: Project[];
};

const categories: Category[] = [
  {
    id: "gastronomia",
    label: "Restaurantes & Gastronomía",
    projects: [
      {
        name: "Smart order for Masarte Pizzeria",
        description: "Link de pedidos inteligente con video para Meta Ads. El cliente hace clic, arma su pedido y la orden llega organizada por WhatsApp a la pizzería.",
        image: "masarte/masartehero.png",
        year: "2026",
        url: "https://masartepizzeriapy.shop",
      },
      {
        name: "Hoplon Lounge",
        description: "Sitio web elegante para lounge bar con reservas online y menú digital.",
        image: "hoplon/hoplonhero.png",
        year: "2025",
        url: "https://hoplonclub.com.py/",
      },
      {
        name: "La Mansa",
        description: "Plataforma gastronómica con sistema de pedidos y carta digital.",
        image: "Lamansa/lamansahero.png",
        year: "2025",
        url: "https://lamansapy.com/",
      },
    ],
  },
  {
    id: "ecommerce",
    label: "E-commerce & Retail",
    projects: [
      {
        name: "Farma Next",
        description: "E-commerce farmacéutico con catálogo de productos y compra online.",
        image: "farmanext/farmanexthero.png",
        year: "2025",
        url: "https://www.farmanext.com.py",
      },
      {
        name: "Black Colors",
        description: "E-commerce y landing de impresión sustentable con catálogo y servicios de leasing.",
        image: "blackcolors/hero.png",
        year: "2025",
        url: "https://blackcolors.com.py/",
      },
      {
        name: "Mania Group",
        description: "Tienda online multi-categoría: celulares, vapes y perfumería premium.",
        image: "maniagroup/hero.png",
        year: "2025",
        url: "https://www.maniagroup.com.py/",
      },
    ],
  },
  {
    id: "agro",
    label: "Agro & Industria",
    projects: [
      {
        name: "CMP Agro",
        description: "Sitio corporativo para soluciones tecnológicas al agro-negocio, con catálogo de productos y marcas.",
        image: "cmpagro/hero.png",
        year: "2025",
        url: "https://cmpagro.com.py/",
      },
    ],
  },
  {
    id: "turismo",
    label: "Turismo & Viajes",
    projects: [
      {
        name: "Lleva Viajes",
        description: "Agencia de viajes con catálogo de destinos y cotización.",
        image: "llevaviajes/llevahero.png",
        year: "2026",
        url: "https://lleva.com.py/",
      },
    ],
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
  const { t } = useTranslation();
  const [hoveredKey, setHoveredKey] = useState<string | null>(null);

  return (
    <section id="proyectos" className="section-padding relative bg-muted/40">
      <div className="container-custom">
        {/* Section Label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-xs font-medium text-muted-foreground tracking-[0.3em] uppercase">
            {t("projects.section")}
          </span>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-border to-transparent" />
        </div>

        {/* Header */}
        <div className="max-w-4xl mb-12 sm:mb-20">
          <div className="mb-8">
            <span className="inline-block text-sm font-medium text-primary/70 mb-4 tracking-wide">
              {t("projects.subtitle")}
            </span>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold leading-[1.05] mb-6">
              {t("projects.header")}
            </h2>
            <p className="text-2xl sm:text-3xl text-muted-foreground font-light">
              {t("projects.subtitleAlt")}
            </p>
          </div>
        </div>

        {/* Categories */}
        <div className="space-y-16">
          {categories.map((category) => (
            <div key={category.id}>
              <div className="flex items-baseline justify-between gap-4 mb-6">
                <h3 className="text-xl sm:text-2xl font-display font-semibold text-foreground/90">
                  {category.label}
                </h3>
                <span className="text-xs font-mono text-muted-foreground/60 tracking-wider">
                  {String(category.projects.length).padStart(2, "0")}{" "}
                  {category.projects.length === 1 ? "proyecto" : "proyectos"}
                </span>
              </div>

              <div className="border-t border-border/30">
                {category.projects.map((project, index) => {
                  const key = `${category.id}-${index}`;
                  return (
                    <a
                      key={key}
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative border-b border-border/30 py-5 sm:py-8 cursor-pointer block"
                      onMouseEnter={() => setHoveredKey(key)}
                      onMouseLeave={() => setHoveredKey(null)}
                    >
                      <div className="flex items-center gap-4">
                        {/* Mobile thumbnail */}
                        <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0 md:hidden border border-border/20">
                          <img
                            src={project.image}
                            alt={project.name}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>

                        <div className="flex items-center justify-between gap-4 flex-1 min-w-0">
                          <div className="flex items-center gap-3 sm:gap-8 min-w-0">
                            <span className="text-sm font-mono text-muted-foreground/50 w-8 shrink-0 hidden sm:block">
                              0{index + 1}
                            </span>
                            <div className="min-w-0">
                              <h4 className="text-lg sm:text-2xl md:text-3xl font-display font-bold group-hover:text-primary transition-colors">
                                {project.name}
                              </h4>
                              <p className="text-muted-foreground text-xs sm:text-sm mt-1 max-w-md block">
                                {project.description}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center gap-3 sm:gap-6 shrink-0">
                            <span className="text-sm text-muted-foreground hidden sm:block">
                              {project.year}
                            </span>
                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-border flex items-center justify-center group-hover:border-primary group-hover:bg-primary transition-all">
                              <ArrowUpRight className="w-5 h-5 group-hover:text-primary-foreground transition-colors" />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Hover Image */}
                      <div
                        className={`absolute right-24 top-1/2 -translate-y-1/2 w-64 h-40 rounded-lg overflow-hidden pointer-events-none transition-all duration-300 z-10 hidden md:block ${
                          hoveredKey === key ? "opacity-100 scale-100" : "opacity-0 scale-95"
                        }`}
                      >
                        <img
                          src={project.image}
                          alt={project.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Prototypes */}
        <div className="mt-20">
          <div className="flex items-center gap-3 mb-8">
            <Clock className="w-5 h-5 text-muted-foreground" />
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
              {t("projects.prototypesLabel")}
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
                <h4 className="font-display font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.name}
                </h4>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                <div className="flex items-center gap-2 text-sm text-primary">
                  <span>{t("projects.prototypeAction")}</span>
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
