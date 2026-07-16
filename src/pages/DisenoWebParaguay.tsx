import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

const faqs = [
  {
    q: "¿Cuánto cuesta el diseño de una página web en Paraguay?",
    a: "En Paraguay el diseño web profesional parte desde USD 450 para una landing, USD 900 para un sitio corporativo y USD 1.500 para un e-commerce. En east.dev incluimos diseño UI/UX, versión móvil y SEO técnico básico.",
  },
  {
    q: "¿Qué incluye un servicio de diseño web en Paraguay?",
    a: "Incluye investigación de marca, wireframes, diseño visual en Figma, prototipo interactivo, desarrollo responsive, integración con WhatsApp y formularios, y capacitación para que puedas actualizar tu contenido.",
  },
  {
    q: "¿Trabajan con clientes de Asunción, Ciudad del Este y todo Paraguay?",
    a: "Sí. Tenemos base en Ciudad del Este pero trabajamos de forma remota con clientes de Asunción, Encarnación, Coronel Oviedo y todo el país, además de Paraguayos residentes en el exterior.",
  },
  {
    q: "¿Diseñan tiendas online (e-commerce) en Paraguay?",
    a: "Sí. Desarrollamos tiendas online con pasarelas de pago locales (Bancard, Pagopar), envíos, catálogo y panel administrativo. También integraciones con Instagram Shopping y WhatsApp Catalog.",
  },
  {
    q: "¿Por qué elegir un estudio de diseño web paraguayo en lugar de uno del exterior?",
    a: "Un estudio local entiende el mercado paraguayo, los medios de pago del país, la logística y hasta el lenguaje coloquial. Además evitás diferencias horarias grandes y podés facturar en guaraníes.",
  },
];

const services = [
  "Diseño UI/UX profesional",
  "Sitios web corporativos",
  "Landing pages para campañas",
  "E-commerce con pasarela local",
  "Rediseño de webs desactualizadas",
  "Branding y diseño gráfico digital",
  "SEO on-page para Paraguay",
  "Integración con WhatsApp Business",
];

const DisenoWebParaguay = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const desc =
    "Estudio de diseño web en Paraguay. Diseño UI/UX, sitios corporativos, e-commerce y landing pages con estándares internacionales. Presupuesto por WhatsApp.";

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Diseño Web Paraguay | Estudio Profesional · east.dev</title>
        <meta name="description" content={desc} />
        <link rel="canonical" href="https://eastdevpy.com/diseno-web-paraguay" />
        <meta property="og:url" content="https://eastdevpy.com/diseno-web-paraguay" />
        <meta property="og:title" content="Diseño Web Paraguay | east.dev" />
        <meta property="og:description" content={desc} />
        <script type="application/ld+json">{JSON.stringify(faqLd)}</script>
      </Helmet>
      <Navbar />

      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-brand/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="container-custom relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-primary" />
            <span className="text-xs font-medium text-muted-foreground tracking-[0.3em] uppercase">
              Paraguay · Remoto
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-[1] tracking-tight mb-6 max-w-4xl">
            <span className="text-gradient">Diseño web</span> en Paraguay con estándares internacionales
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-8">
            Estudio paraguayo de diseño y desarrollo web. Combinamos identidad de marca, UI/UX y código
            propio para crear webs que se ven profesionales y venden. Base en Ciudad del Este, clientes en
            todo Paraguay y el exterior.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://wa.link/jfxdzh" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="xl">
                Pedir presupuesto
                <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
            <Link to="/portafolio">
              <Button variant="heroOutline" size="xl">
                Ver trabajos
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
                Un estudio de diseño web paraguayo con mirada global
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Trabajamos para marcas paraguayas que quieren dejar atrás las plantillas y para clientes
                internacionales que buscan un socio en Latinoamérica. Ese cruce nos da una perspectiva
                única: entendemos el mercado local y sabemos qué está funcionando afuera.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                No hacemos diseños genéricos. Cada web se piensa desde tu marca, tu público y tus
                objetivos comerciales.
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
            Empecemos tu proyecto de diseño web
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Escribinos por WhatsApp y recibí una propuesta personalizada en menos de 24 horas hábiles.
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

export default DisenoWebParaguay;
