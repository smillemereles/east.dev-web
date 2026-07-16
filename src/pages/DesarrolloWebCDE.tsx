import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

const faqs = [
  {
    q: "¿Cuánto cuesta desarrollar una página web en Ciudad del Este?",
    a: "El precio de una web en Ciudad del Este depende del alcance: una landing page profesional parte desde USD 450, un sitio corporativo desde USD 900 y una tienda online (e-commerce) desde USD 1.500. Todos nuestros proyectos incluyen diseño a medida, versión móvil, SEO técnico básico y capacitación.",
  },
  {
    q: "¿Qué diferencia hay entre una agencia y un desarrollador web freelance en Ciudad del Este?",
    a: "east.dev funciona como estudio boutique: obtenés la cercanía y precio de un programador freelance en Ciudad del Este, con la metodología y calidad de una agencia web. Trabajamos con procesos ágiles, reuniones semanales y entregas iterativas.",
  },
  {
    q: "¿Hacen diseño web además del desarrollo?",
    a: "Sí. Somos empresa de diseño y desarrollo web en Ciudad del Este: cubrimos UI/UX, branding digital, prototipado en Figma y desarrollo frontend/backend en el mismo equipo, sin tercerizar.",
  },
  {
    q: "¿Trabajan con empresas de Ciudad del Este, Presidente Franco y Hernandarias?",
    a: "Sí. Somos locales del Alto Paraná. Atendemos comercios, importadores, restaurantes y profesionales de Ciudad del Este, Presidente Franco, Hernandarias y Minga Guazú, con reuniones presenciales cuando el proyecto lo requiere.",
  },
  {
    q: "¿Cuánto tiempo tarda el desarrollo de un sitio web?",
    a: "Una landing tarda entre 2 y 3 semanas. Un sitio corporativo entre 4 y 6 semanas. Un e-commerce con pasarela de pago y panel administrativo, entre 6 y 10 semanas, según el catálogo.",
  },
  {
    q: "¿Ofrecen mantenimiento y hosting después de entregar la web?",
    a: "Sí. Ofrecemos planes mensuales de mantenimiento, hosting administrado, respaldos automáticos, actualizaciones de seguridad y soporte por WhatsApp para clientes en Ciudad del Este y todo Paraguay.",
  },
];

const services = [
  "Diseño web a medida (UI/UX profesional)",
  "Desarrollo frontend y backend",
  "Tiendas online (e-commerce) con pasarela de pago",
  "Landing pages para campañas publicitarias",
  "Sistemas Smart Order para restaurantes",
  "SEO local para posicionar en Google Ciudad del Este",
  "Integración con WhatsApp Business",
  "Mantenimiento web mensual",
];

const DesarrolloWebCDE = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const desc =
    "Empresa de desarrollo y diseño web en Ciudad del Este, Paraguay. Sitios corporativos, e-commerce, landing pages y sistemas para restaurantes. Presupuesto por WhatsApp.";

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://eastdevpy.com/" },
      {
        "@type": "ListItem",
        position: 2,
        name: "Desarrollo web en Ciudad del Este",
        item: "https://eastdevpy.com/desarrollo-web-ciudad-del-este",
      },
    ],
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Desarrollo Web en Ciudad del Este | Diseño Web Paraguay · east.dev</title>
        <meta name="description" content={desc} />
        <link rel="canonical" href="https://eastdevpy.com/desarrollo-web-ciudad-del-este" />
        <meta property="og:url" content="https://eastdevpy.com/desarrollo-web-ciudad-del-este" />
        <meta property="og:title" content="Desarrollo Web en Ciudad del Este | east.dev" />
        <meta property="og:description" content={desc} />
        <script type="application/ld+json">{JSON.stringify(faqLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbLd)}</script>
      </Helmet>

      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-brand/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="container-custom relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-primary" />
            <span className="text-xs font-medium text-muted-foreground tracking-[0.3em] uppercase">
              Alto Paraná · Paraguay
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-[1] tracking-tight mb-6 max-w-4xl">
            Empresa de <span className="text-gradient">desarrollo y diseño web</span> en Ciudad del Este
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-8">
            Estudio local en Ciudad del Este que diseña y programa sitios web, tiendas online y sistemas
            digitales para empresas, comercios y profesionales del Alto Paraná. Diseño a medida, código
            propio, entregas rápidas y soporte por WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://wa.link/jfxdzh" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="xl">
                Pedir presupuesto por WhatsApp
                <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
            <Link to="/portafolio">
              <Button variant="heroOutline" size="xl">
                Ver portafolio
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-border/30">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Programadores y diseñadores web locales, con estándares internacionales
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                east.dev es un estudio con base en Ciudad del Este que trabaja con marcas locales del Alto
                Paraná y clientes internacionales de Estados Unidos, Europa y Latinoamérica. Esa doble
                mirada nos permite entregar webs con acabado global y hablar el mismo idioma que tu negocio
                aquí.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Cada proyecto se construye a medida: sin plantillas genéricas, con diseño propio, código
                mantenible y foco en resultados: más consultas por WhatsApp, más ventas online y una marca
                que se ve profesional en cualquier pantalla.
              </p>
            </div>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                  <span className="text-foreground/90">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-border/30">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-10">Preguntas frecuentes</h2>
          <div className="space-y-6">
            {faqs.map((f) => (
              <div key={f.q} className="border-b border-border/30 pb-6">
                <h3 className="text-lg font-semibold mb-2">{f.q}</h3>
                <p className="text-muted-foreground leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-border/30">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            ¿Listo para tu nueva web en Ciudad del Este?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contanos tu proyecto por WhatsApp y te enviamos una propuesta con alcance, plazos y precio en
            menos de 24 horas hábiles.
          </p>
          <a href="https://wa.link/jfxdzh" target="_blank" rel="noopener noreferrer">
            <Button variant="hero" size="xl">
              Escribir por WhatsApp
              <ArrowRight className="w-5 h-5" />
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default DesarrolloWebCDE;
