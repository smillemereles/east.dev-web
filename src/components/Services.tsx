import { 
  Globe, 
  Paintbrush, 
  Megaphone, 
  Share2, 
  Code, 
  Search,
  Layers,
  Zap
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Desarrollo Web",
    description: "Sitios web y aplicaciones responsivas, rápidas y optimizadas con las últimas tecnologías.",
  },
  {
    icon: Paintbrush,
    title: "Diseño UI/UX",
    description: "Interfaces intuitivas y atractivas que mejoran la experiencia del usuario y aumentan conversiones.",
  },
  {
    icon: Layers,
    title: "Branding Digital",
    description: "Creación de identidad visual coherente que refleja los valores de tu marca.",
  },
  {
    icon: Megaphone,
    title: "Marketing Digital",
    description: "Estrategias personalizadas para aumentar la visibilidad y alcance de tu negocio.",
  },
  {
    icon: Share2,
    title: "Redes Sociales",
    description: "Gestión y estrategias de contenido para conectar con tu audiencia en todas las plataformas.",
  },
  {
    icon: Code,
    title: "Maquetación Web",
    description: "Transformación de diseños en código HTML/CSS pixel-perfect y semántico.",
  },
  {
    icon: Search,
    title: "SEO",
    description: "Optimización para motores de búsqueda que mejora tu posicionamiento orgánico.",
  },
  {
    icon: Zap,
    title: "Optimización",
    description: "Mejora de rendimiento y velocidad de carga para una mejor experiencia de usuario.",
  },
];

export const Services = () => {
  return (
    <section id="servicios" className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-primary tracking-wider uppercase">
            Servicios
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mt-4 mb-6">
            Soluciones completas para tu{" "}
            <span className="text-gradient">presencia digital</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Ofrecemos un conjunto integral de servicios diseñados para llevar 
            tu marca al siguiente nivel en el mundo digital.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-card p-6 rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-silver-light/30 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-3">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
