import { useState } from "react";
import { ArrowLeft, ExternalLink, Instagram, Palette, Image, Globe, MapPin, ShoppingCart, Code } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo-eastdev.jpg";
import llevaConocelaweb from "@/assets/portfolio/lleva-conocelaweb.png";
import llevaDescubrelamarca from "@/assets/portfolio/lleva-descubrelamarca.png";
import llevaDestino2026 from "@/assets/portfolio/lleva-destino2026.png";
import llevaPromosalvador from "@/assets/portfolio/lleva-promosalvador.png";
import llevaVisionboard from "@/assets/portfolio/lleva-visionboard.png";
import citytourTbt from "@/assets/portfolio/citytour-tbt.png";
import citytourHistorias from "@/assets/portfolio/citytour-historias.png";
import citytourIndependencia from "@/assets/portfolio/citytour-independencia.png";
import citytourCasa from "@/assets/portfolio/citytour-casa.png";
import citytourAmor from "@/assets/portfolio/citytour-amor.png";

interface DesignWork {
  id: number;
  title: string;
  type: string;
  description: string;
  aspect: "square" | "portrait" | "landscape";
  image?: string;
}

interface ClientPortfolio {
  name: string;
  slug: string;
  description: string;
  category: string;
  icon: React.ReactNode;
  works: DesignWork[];
}

const clients: ClientPortfolio[] = [
  {
    name: "Hoplon Lounge",
    slug: "hoplon",
    description: "Contenido visual y estrategia digital para lounge bar premium. Diseño de posteos, stories y piezas promocionales.",
    category: "Gastronomía & Nightlife",
    icon: <Palette className="w-5 h-5" />,
    works: [
      { id: 1, title: "Promo Viernes", type: "Post Instagram", description: "Diseño promocional para eventos de viernes", aspect: "square" },
      { id: 2, title: "Menú Digital", type: "Carousel", description: "Carousel de menú para stories e Instagram", aspect: "square" },
      { id: 3, title: "Opening Night", type: "Post Instagram", description: "Pieza visual para inauguración", aspect: "portrait" },
      { id: 4, title: "Happy Hour", type: "Story", description: "Story animado para promoción de happy hour", aspect: "portrait" },
      { id: 5, title: "Brand Identity", type: "Branding", description: "Identidad visual para redes sociales", aspect: "landscape" },
      { id: 6, title: "Evento Especial", type: "Post Instagram", description: "Diseño para evento temático", aspect: "square" },
    ],
  },
  {
    name: "La Mansa",
    slug: "lamansa",
    description: "Estrategia de contenido y diseño digital para restaurante. Creación de identidad visual en redes sociales.",
    category: "Gastronomía",
    icon: <Instagram className="w-5 h-5" />,
    works: [
      { id: 1, title: "Plato del Día", type: "Post Instagram", description: "Serie de posteos de platos destacados", aspect: "square" },
      { id: 2, title: "Ambiente", type: "Carousel", description: "Carousel mostrando el ambiente del local", aspect: "square" },
      { id: 3, title: "Promo Delivery", type: "Story", description: "Stories promocionales de delivery", aspect: "portrait" },
      { id: 4, title: "Menú Semanal", type: "Post Instagram", description: "Diseño de menú semanal", aspect: "square" },
      { id: 5, title: "Reseñas", type: "Story", description: "Highlight de reseñas de clientes", aspect: "portrait" },
    ],
  },
  {
    name: "Lleva Viajes",
    slug: "llevaviajes",
    description: "Contenido visual para agencia de viajes. Diseño de posteos, promociones y piezas para campañas estacionales.",
    category: "Turismo & Viajes",
    icon: <Image className="w-5 h-5" />,
    works: [
      { id: 1, title: "Conocé la Web", type: "Post Instagram", description: "Presentación de la web oficial de Lleva Viajes con 15 años de trayectoria", aspect: "portrait", image: llevaConocelaweb },
      { id: 2, title: "Servicios Exclusivos", type: "Carousel", description: "Promoción de servicios: viajes 2x1, en grupo y de bodas", aspect: "portrait", image: llevaDescubrelamarca },
      { id: 3, title: "Destinos Brasil 2026", type: "Post Instagram", description: "Paquetes a Natal, Rio de Janeiro y Porto de Galinhas desde 980 USD", aspect: "portrait", image: llevaDestino2026 },
      { id: 4, title: "Salvador Bahía", type: "Story", description: "Promo Semana Santa 2026 a Salvador Bahía, 7 noches desde 7.300.000 Gs", aspect: "portrait", image: llevaPromosalvador },
      { id: 5, title: "Vision Board Colombia", type: "Post Instagram", description: "Paquete a Colombia: Eje Cafetero, San Andrés y Cartagena", aspect: "portrait", image: llevaVisionboard },
    ],
  },
  {
    name: "City Tour Asunción",
    slug: "citytour-asu",
    description: "Diseño de contenido digital para experiencias turísticas en Asunción. Posteos, stories y material promocional.",
    category: "Turismo",
    icon: <MapPin className="w-5 h-5" />,
    works: [
      { id: 1, title: "#TBT Recorridos", type: "Post Instagram", description: "Throwback de grandes recorridos por Asunción con grupos de turistas", aspect: "portrait", image: citytourTbt },
      { id: 2, title: "Historias de la Ciudad", type: "Post Instagram", description: "Cada ciudad guarda historias que merecen ser contadas, descubrí las casas más antiguas de Asunción", aspect: "portrait", image: citytourHistorias },
      { id: 3, title: "Casa de la Independencia", type: "Post Instagram", description: "La Casa de la Independencia, punto clave donde se gestó la libertad del Paraguay en 1811", aspect: "portrait", image: citytourIndependencia },
      { id: 4, title: "Historia Independencia", type: "Carousel", description: "Recorrido histórico por la Casa de la Independencia, museo y sitio emblemático de Asunción", aspect: "portrait", image: citytourCasa },
      { id: 5, title: "Semana del Amor", type: "Story", description: "City Tour 2x1 para parejas, Semana del Amor en Asunción del 10 al 13 de febrero 2026", aspect: "portrait", image: citytourAmor },
    ],
  },
  {
    name: "City Tour CDE",
    slug: "citytour-cde",
    description: "Contenido visual y estrategia digital para tours turísticos en Ciudad del Este. Piezas que destacan la cultura local.",
    category: "Turismo",
    icon: <MapPin className="w-5 h-5" />,
    works: [
      { id: 1, title: "Puente de la Amistad", type: "Post Instagram", description: "Pieza visual del ícono de la ciudad", aspect: "square" },
      { id: 2, title: "Compras & Cultura", type: "Carousel", description: "Guía visual de experiencias en CDE", aspect: "square" },
      { id: 3, title: "Itaipú Experience", type: "Post Instagram", description: "Promoción de visita a la represa", aspect: "landscape" },
      { id: 4, title: "Vida Nocturna", type: "Story", description: "Contenido de entretenimiento nocturno", aspect: "portrait" },
      { id: 5, title: "Paquete Familiar", type: "Post Instagram", description: "Promoción de tour para familias", aspect: "square" },
    ],
  },
  {
    name: "NevenHost",
    slug: "nevenhost",
    description: "Proyecto piloto de web para inmobiliaria. Diseño de plataforma con listado de propiedades, búsqueda y fichas de inmuebles.",
    category: "Web — Proyecto Piloto",
    icon: <Globe className="w-5 h-5" />,
    works: [
      { id: 1, title: "Landing Page", type: "Web Design", description: "Diseño de página principal con propiedades destacadas", aspect: "landscape" },
      { id: 2, title: "Listado de Propiedades", type: "Web Design", description: "Vista de catálogo con filtros de búsqueda", aspect: "landscape" },
      { id: 3, title: "Ficha de Inmueble", type: "Web Design", description: "Página de detalle con galería y datos del inmueble", aspect: "landscape" },
    ],
  },
  {
    name: "Farmacia Do Sul",
    slug: "farmacia-dosul",
    description: "Proyecto piloto de e-commerce para farmacia. Diseño de tienda online con catálogo de productos y carrito de compras.",
    category: "E-commerce — Proyecto Piloto",
    icon: <ShoppingCart className="w-5 h-5" />,
    works: [
      { id: 1, title: "Homepage", type: "Web Design", description: "Diseño de página principal con ofertas destacadas", aspect: "landscape" },
      { id: 2, title: "Catálogo", type: "Web Design", description: "Vista de catálogo de productos", aspect: "landscape" },
      { id: 3, title: "Carrito & Checkout", type: "Web Design", description: "Flujo de compra y checkout", aspect: "landscape" },
    ],
  },
  {
    name: "Vital X",
    slug: "vitalx",
    description: "Proyecto piloto de plataforma web para marca de salud y bienestar. Diseño de sitio informativo y e-commerce.",
    category: "Web — Proyecto Piloto",
    icon: <Code className="w-5 h-5" />,
    works: [
      { id: 1, title: "Landing Page", type: "Web Design", description: "Página principal con propuesta de valor", aspect: "landscape" },
      { id: 2, title: "Productos", type: "Web Design", description: "Sección de catálogo de productos", aspect: "landscape" },
      { id: 3, title: "Blog & Contenido", type: "Web Design", description: "Diseño de sección de blog", aspect: "landscape" },
    ],
  },
];

const aspectClasses = {
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
};

const typeColors: Record<string, string> = {
  "Post Instagram": "bg-electric/20 text-electric",
  "Carousel": "bg-accent/20 text-accent-foreground",
  "Story": "bg-purple-500/20 text-purple-300",
  "Branding": "bg-emerald-500/20 text-emerald-300",
  "Web Design": "bg-sky-500/20 text-sky-300",
};

export default function Portfolio() {
  const [activeClient, setActiveClient] = useState<string | null>(null);

  const filteredClients = activeClient
    ? clients.filter((c) => c.slug === activeClient)
    : clients;

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-effect py-4">
        <div className="container-custom flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={logo}
              alt="east.dev"
              className="h-10 w-auto brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity"
            />
          </Link>
          <Link
            to="/"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm uppercase tracking-wide"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-24 sm:pt-32 pb-10 sm:pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-electric/5 via-transparent to-transparent" />
        <div className="container-custom relative">
          <p className="text-electric text-sm uppercase tracking-[0.3em] mb-4 font-medium">
            Portafolio de Diseño Digital
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] mb-6">
            Contenido que
            <br />
            <span className="text-gradient">conecta marcas</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl leading-relaxed">
            Diseño de posteos, stories, carousels y piezas visuales para redes
            sociales. Cada pieza está pensada para comunicar la esencia de cada
            marca.
          </p>
        </div>
      </section>

      {/* Client Filter */}
      <section className="pb-4 sm:pb-8 sticky top-[72px] z-40 glass-effect">
        <div className="container-custom overflow-x-auto scrollbar-hide">
          <div className="flex flex-nowrap sm:flex-wrap gap-2 sm:gap-3 pb-2 sm:pb-0">
            <button
              onClick={() => setActiveClient(null)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                !activeClient
                  ? "bg-electric text-background"
                  : "bg-card/50 text-muted-foreground hover:text-foreground border border-border/30"
              }`}
            >
              Todos
            </button>
            {clients.map((client) => (
              <button
                key={client.slug}
                onClick={() =>
                  setActiveClient(
                    activeClient === client.slug ? null : client.slug
                  )
                }
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 flex items-center gap-1.5 sm:gap-2 whitespace-nowrap shrink-0 ${
                  activeClient === client.slug
                    ? "bg-electric text-background"
                    : "bg-card/50 text-muted-foreground hover:text-foreground border border-border/30"
                }`}
              >
                {client.icon}
                {client.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Client Sections */}
      <section className="pb-16 sm:pb-32">
        <div className="container-custom space-y-16 sm:space-y-24">
          {filteredClients.map((client) => (
            <div key={client.slug}>
              {/* Client Header */}
              <div className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                <div>
                  <span className="text-electric/70 text-xs uppercase tracking-[0.2em] mb-2 block">
                    {client.category}
                  </span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold">
                    {client.name}
                  </h2>
                  <p className="text-muted-foreground mt-2 max-w-xl leading-relaxed">
                    {client.description}
                  </p>
                </div>
                <span className="text-muted-foreground/50 text-sm">
                  {client.works.length} piezas
                </span>
              </div>

              {/* Works Grid - Masonry style */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {client.works.map((work) => (
                  <div
                    key={work.id}
                    className="group relative rounded-xl overflow-hidden bg-card/30 border border-border/20 hover:border-electric/30 transition-all duration-500"
                  >
                    <div
                      className={`${aspectClasses[work.aspect]} ${work.image ? "" : "bg-gradient-to-br from-card via-card/80 to-electric/5"} flex items-center justify-center overflow-hidden`}
                    >
                      {work.image ? (
                        <img
                          src={work.image}
                          alt={work.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      ) : (
                        <div className="text-center p-4">
                          <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-electric/10 flex items-center justify-center">
                            <Image className="w-6 h-6 text-electric/50" />
                          </div>
                          <p className="text-xs text-muted-foreground/50">
                            Imagen próximamente
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-4">
                      <span
                        className={`text-xs px-2.5 py-1 rounded-full w-fit mb-2 ${typeColors[work.type] || "bg-card text-foreground"}`}
                      >
                        {work.type}
                      </span>
                      <h3 className="text-sm font-semibold">{work.title}</h3>
                      <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                        {work.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-border/20">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            ¿Necesitás contenido para tu marca?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Creamos piezas visuales que comunican la esencia de tu negocio.
          </p>
          <Link
            to="/#contacto"
            className="inline-flex items-center gap-2 bg-electric text-background px-8 py-3.5 rounded-full font-semibold hover:bg-electric/90 transition-colors"
          >
            Solicitar presupuesto
            <ExternalLink className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
