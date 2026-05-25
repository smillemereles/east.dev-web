// Imágenes Vital X
import vitalHero from "@/assets/portfolio/vital-hero.png";
import vitalCarrito from "@/assets/portfolio/vital-carrito.png";
import vitalProduct from "@/assets/portfolio/vital-product.png";
// Imágenes Farmacia Do Sul
import farmaHero from "@/assets/portfolio/farma-hero.png";
import farmaProductos from "@/assets/portfolio/farma-productos.png";
import farmaCheckout from "@/assets/portfolio/farma-checkout.png";
// Imágenes NevenHost
import nevenHero from "@/assets/portfolio/neven-hero.png";
import nevenPropiedades from "@/assets/portfolio/neven-propiedades.png";
import nevenGaleria from "@/assets/portfolio/neven-galeria.png";
// Imágenes City Tour Asunción
import citytourTbt from "@/assets/portfolio/citytour-tbt.png";
import citytourHistorias from "@/assets/portfolio/citytour-historias.png";
import citytourIndependencia from "@/assets/portfolio/citytour-independencia.png";
import citytourCasa from "@/assets/portfolio/citytour-casa.png";
import citytourAmor from "@/assets/portfolio/citytour-amor.png";
// Imágenes Lleva Viajes
import llevaConocelaweb from "@/assets/portfolio/lleva-conocelaweb.png";
import llevaDescubrelamarca from "@/assets/portfolio/lleva-descubrelamarca.png";
import llevaDestino2026 from "@/assets/portfolio/lleva-destino2026.png";
import llevaPromosalvador from "@/assets/portfolio/lleva-promosalvador.png";
import llevaVisionboard from "@/assets/portfolio/lleva-visionboard.png";
// Imágenes Farma Next
import farmanextLanderbar from "@/assets/portfolio/farmanext-landerbar.png";
import farmanextDesejadas from "@/assets/portfolio/farmanext-desejadas.png";
import farmanextLaca from "@/assets/portfolio/farmanext-laca.png";
import farmanextOfertas from "@/assets/portfolio/farmanext-ofertas.png";
import farmanextPascoa from "@/assets/portfolio/farmanext-pascoa.png";
import farmanextMelatonin from "@/assets/portfolio/farmanext-melatonin.png";
import farmanextMentovick from "@/assets/portfolio/farmanext-mentovick.png";
import farmanextGripe from "@/assets/portfolio/farmanext-gripe.png";
import { ArrowLeft, ExternalLink, Image, Globe, MapPin, ShoppingCart, Code } from "lucide-react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { useState } from "react";
import { useTranslation } from "@/hooks/use-i18n";

interface DesignWork {
  id: number;
  title: string;
  type: string;
  description: string;
  aspect: "square" | "portrait" | "landscape";
  image: string;
}

interface ClientPortfolio {
  name: string;
  slug: string;
  description: string;
  category: string;
  icon: React.ReactNode;
  url?: string;
  works: DesignWork[];
  image: string;
}

const clients: ClientPortfolio[] = [
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
    image: llevaConocelaweb,
  },
  {
    name: "Farma Next",
    slug: "farmanext",
    description: "Contenido visual y diseño digital para farmacia e-commerce. Piezas promocionales, campañas de productos y branding en redes sociales.",
    category: "Farmacia & E-commerce",
    icon: <ShoppingCart className="w-5 h-5" />,
    works: [
      { id: 1, title: "Lander Bar Protein", type: "Post Instagram", description: "Barra proteica Lander Bar sabor Dulce de Leche, 15g de proteína, sem glúten y libre de colesterol", aspect: "portrait", image: farmanextLanderbar },
      { id: 2, title: "As Mais Desejadas", type: "Post Instagram", description: "Promo semanal con productos desde 449 R$ en medicamentos, vitaminas, cosméticos e importados", aspect: "portrait", image: farmanextDesejadas },
      { id: 3, title: "Linha Masculina LACA", type: "Post Instagram", description: "Lanzamiento de la línea masculina LACA Laboratorio con productos de cuidado facial", aspect: "portrait", image: farmanextLaca },
      { id: 4, title: "Farma Ofertas", type: "Post Instagram", description: "Evento Farma Ofertas con hasta 50% OFF en medicamentos, vitaminas, cosméticos y productos importados", aspect: "portrait", image: farmanextOfertas },
      { id: 5, title: "Páscoa Saudável", type: "Post Instagram", description: "Campaña de Pascua 'Algo muito saudável está chegando' con premios y chocolate saludable", aspect: "portrait", image: farmanextPascoa },
      { id: 6, title: "Melatonin Sleep", type: "Post Instagram", description: "Melatonina 10mg LanderFit para noches profundas y días más leves, equilibrio y calma mental", aspect: "portrait", image: farmanextMelatonin },
      { id: 7, title: "Mento Vick Deportivo", type: "Post Instagram", description: "Crema analgésica Mento Vick, fórmula anti-inflamatoria para alivio del dolor tras el esfuerzo", aspect: "portrait", image: farmanextMentovick },
      { id: 8, title: "Antigripales", type: "Post Instagram", description: "Línea completa antigripal: Vitamina C, Cortagrip y Mento Vick Té Caliente de INDUFAR", aspect: "portrait", image: farmanextGripe },
    ],
    image: farmanextLanderbar,
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
    image: citytourTbt,
  },
  {
    name: "NevenHost",
    slug: "nevenhost",
    description: "Proyecto piloto de web para inmobiliaria. Diseño de plataforma con listado de propiedades, búsqueda y fichas de inmuebles.",
    category: "Web — Proyecto Piloto",
    icon: <Globe className="w-5 h-5" />,
    works: [
      { id: 1, title: "Hero Principal", type: "Web Design", description: "Landing 'Aquí comienza tu nuevo hogar' con selección exclusiva de casas y terrenos en venta", aspect: "landscape", image: nevenHero },
      { id: 2, title: "Listado de Propiedades", type: "Web Design", description: "Catálogo con filtros por habitaciones, ubicación y rango de precio en USD", aspect: "landscape", image: nevenPropiedades },
      { id: 3, title: "Galería de Propiedades", type: "Web Design", description: "Galería con filtros por exteriores, interiores y áreas comunes con imágenes cautivadoras", aspect: "landscape", image: nevenGaleria },
    ],
    image: nevenHero,
  },
  {
    name: "Farmacia Do Sul",
    slug: "farmacia-dosul",
    description: "Proyecto piloto de e-commerce para farmacia. Diseño de tienda online con catálogo de productos y carrito de compras.",
    category: "E-commerce — Proyecto Piloto",
    icon: <ShoppingCart className="w-5 h-5" />,
    works: [
      { id: 1, title: "Hero Principal", type: "Web Design", description: "Landing 'Tu Salud, Nuestra Prioridad' con +20 años de confianza y laboratorios aliados como INDUFAR y Eticos", aspect: "landscape", image: farmaHero },
      { id: 2, title: "Tienda de Productos", type: "Web Design", description: "Catálogo de Tirzepatida (T.G) en distintas dosis con precios en guaraníes y reales", aspect: "landscape", image: farmaProductos },
      { id: 3, title: "Checkout", type: "Web Design", description: "Flujo de checkout con información del cliente, envío gratis y resumen de pedido en guaraníes", aspect: "landscape", image: farmaCheckout },
    ],
    image: farmaHero,
  },
  {
    name: "Vital X",
    slug: "vitalx",
    description: "Proyecto piloto de plataforma web para marca de salud y bienestar. Diseño de sitio informativo y e-commerce.",
    category: "Web — Proyecto Piloto",
    icon: <Code className="w-5 h-5" />,
    works: [
      { id: 1, title: "Hero Principal", type: "Web Design", description: "Landing page con slider hero 'Activa tu Versión X', suplementación deportiva premium 100% online en Paraguay", aspect: "landscape", image: vitalHero },
      { id: 2, title: "Tienda de Productos", type: "Web Design", description: "Catálogo e-commerce con productos Tirzepatida de INDUFAR y QUIMFA, precios en guaraníes y reales", aspect: "landscape", image: vitalProduct },
      { id: 3, title: "Carrito de Compras", type: "Web Design", description: "Flujo de carrito con resumen de compra, cantidades editables y checkout integrado", aspect: "landscape", image: vitalCarrito },
    ],
    image: vitalHero,
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
  const { t } = useTranslation();
  const [activeClient, setActiveClient] = useState<string | null>(null);

  const filteredClients = activeClient
    ? clients.filter((c) => c.slug === activeClient)
    : clients;

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      {/* Header removido, Navbar general se usa arriba */}

      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-electric/5 via-transparent to-transparent" />
        <div className="container-custom relative">
          <p className="text-electric text-sm uppercase tracking-[0.3em] mb-4 font-medium">
            {t("portfolio.sectionLabel")}
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] mb-6">
            {t("portfolio.headerTitleLine1")}
            <br />
            <span className="text-gradient">{t("portfolio.headerTitleLine2")}</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl leading-relaxed">
            {t("portfolio.headerDescription")}
          </p>
        </div>
      </section>

      {/* Client Filter */}
      <section className="pb-8 sticky top-[72px] z-40 glass-effect">
        <div className="container-custom">
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setActiveClient(null)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                !activeClient
                  ? "bg-electric text-background"
                  : "bg-card/50 text-muted-foreground hover:text-foreground border border-border/30"
              }`}
            >
              {t("portfolio.filterAll")}
            </button>
            {clients.map((client) => (
              <button
                key={client.slug}
                onClick={() =>
                  setActiveClient(
                    activeClient === client.slug ? null : client.slug
                  )
                }
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
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
      <section className="pb-32">
        <div className="container-custom space-y-24">
          {filteredClients.map((client) => (
            <div key={client.slug}>
              {/* Client Header */}
              <div className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                <div>
                  <span className="text-electric/70 text-xs uppercase tracking-[0.2em] mb-2 block">
                    {client.category}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-display font-bold">
                    {client.name}
                  </h2>
                  <p className="text-muted-foreground mt-2 max-w-xl leading-relaxed">
                    {client.description}
                  </p>
                </div>
                <span className="text-muted-foreground/50 text-sm">
                  {client.works.length} {t("portfolio.pieces")}
                </span>
              </div>

              {/* Works Grid - Masonry style */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {client.works.map((work) => (
                  <div
                    key={work.id}
                    className="group relative rounded-xl overflow-hidden bg-card/30 border border-border/20 hover:border-electric/30 transition-all duration-500"
                  >
                    <div
                      className={`${aspectClasses[work.aspect]} bg-gradient-to-br from-card via-card/80 to-electric/5 flex items-stretch justify-stretch`}
                    >
                      {work.image ? (
                        <img
                          src={work.image}
                          alt={work.title}
                          className="object-cover w-full h-full"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center text-center p-4">
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
            {t("portfolio.ctaTitle")}
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            {t("portfolio.ctaDescription")}
          </p>
          <a
            href="https://wa.link/jfxdzh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-electric text-background px-8 py-3.5 rounded-full font-semibold hover:bg-electric/90 transition-colors"
          >
            {t("portfolio.ctaButton")}
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </section>
    </main>
  );
}
