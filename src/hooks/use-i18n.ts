import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

type Locale = "es" | "en";

type TranslationValue = string | string[] | Record<string, string> | Record<string, any>;

const translations: Record<Locale, Record<string, TranslationValue>> = {
  es: {
    nav: {
      home: "Inicio",
      about: "Nosotros",
      services: "Servicios",
      projects: "Proyectos",
      portfolio: "Portafolio",
      contact: "Contacto",
      contactButton: "Contactar",
    },
    hero: {
      label: "Desarrollo web premium",
      titleLine1: "El socio",
      titleLine2: "creativo",
      subtitle: "para",
      description: "Diseño y desarrollo web con identidad propia. Construimos experiencias digitales que transforman marcas.",
      ctaProjects: "Ver Proyectos",
      ctaContact: "Empezar proyecto",
      words: ["Directores", "Diseñadores", "Agencias", "Marcas", "Startups"],
    },
    about: {
      section: "Sobre Nosotros",
      title: "El puente entre tu visión y la realidad digital",
      paragraph1: "east.dev nació en Ciudad del Este, inspirada en el icónico Puente de la Amistad. Conectamos tecnología y creatividad para dar vida a proyectos web únicos.",
      paragraph2: "Cada proyecto es una oportunidad de construir puentes: entre tu marca y tus clientes, entre lo tradicional y lo innovador.",
      paragraph3: "Trabajamos codo a codo con emprendedores, pymes y marcas que buscan destacar en el mundo digital con soluciones a medida y diseño con propósito.",
      paragraph4: "Nuestro enfoque combina código limpio, diseño moderno y estrategia para entregar resultados que impactan.",
    },
    services: {
      section: "Servicios",
      header: "Soluciones completas para tu presencia digital",
      description: "Un conjunto integral de servicios diseñados para llevar tu marca al siguiente nivel.",
      items: [
        {
          title: "Desarrollo Web",
          description: "Sitios web y aplicaciones responsivas con las últimas tecnologías.",
        },
        {
          title: "Diseño UI/UX",
          description: "Interfaces intuitivas que mejoran la experiencia del usuario.",
        },
        {
          title: "Branding Digital",
          description: "Identidad visual coherente que refleja tu marca.",
        },
        {
          title: "Marketing Digital",
          description: "Estrategias para aumentar tu visibilidad online.",
        },
        {
          title: "Redes Sociales",
          description: "Gestión y estrategias de contenido efectivas.",
        },
        {
          title: "Maquetación Web",
          description: "Diseños transformados en código pixel-perfect.",
        },
        {
          title: "SEO",
          description: "Optimización para mejor posicionamiento.",
        },
        {
          title: "Optimización",
          description: "Mejora de rendimiento y velocidad.",
        },
      ],
    },
    projects: {
      section: "Proyectos",
      subtitle: "Design With Purpose",
      subtitleAlt: "Build With Impact",
      header: "Trabajos que hablan por nosotros",
      prototypesLabel: "Prototipos Web",
      prototypeAction: "Ver prototipo",
    },
    howWeWork: {
      section: "¿Cómo trabajamos?",
      subtitle: "Proceso probado",
      subtitleHighlight: "y trasparente",
      description: "Metodología ágil con entregas regulares, comunicación clara y foco absoluto en resultados medibles.",
      steps: [
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
      ],
      ctaTitle: "Listo para comenzar tu proyecto?",
      ctaDescription: "Contáctanos hoy y conoce cómo podemos transformar tu visión en realidad.",
      ctaButton: "Iniciar conversación",
    },
    team: {
      section: "Por Qué Elegir a east.dev",
      title: "Conoce a tu socio digital",
      titleAlt: "para diseño y desarrollo web",
      description: "Como diseñadora web y digital, estratega y creadora de contenido, desarrollo proyectos con foco en branding, experiencia de usuario, rendimiento y resultados comerciales.",
      stats: {
        projects: "Proyectos Completados",
        clients: "Clientes Satisfechos",
        team: "Equipo",
      },
    },
    portfolio: {
      sectionLabel: "Portafolio de Diseño Digital",
      headerTitleLine1: "Contenido que",
      headerTitleLine2: "conecta marcas",
      headerDescription: "Diseño de posteos, stories, carousels y piezas visuales para redes sociales. Cada pieza está pensada para comunicar la esencia de cada marca.",
      ctaTitle: "¿Necesitás contenido para tu marca?",
      ctaDescription: "Creamos piezas visuales que comunican la esencia de tu negocio.",
      ctaButton: "Solicitar presupuesto",
      filterAll: "Todos",
      pieces: "piezas",
    },
    contact: {
      section: "Contacto",
      question: "¿Listo para",
      highlight: "comenzar?",
      description: "Cuéntanos sobre tu proyecto y recibe una cotización personalizada. Estamos listos para dar vida a tu visión.",
      emailLabel: "Email",
      locationLabel: "Ubicación",
      email: "east.devpy@gmail.com",
      location: "Ciudad del Este, Paraguay",
      form: {
        name: "Nombre",
        email: "Email",
        project: "Tipo de Proyecto",
        budget: "Presupuesto",
        message: "Mensaje",
        namePlaceholder: "Tu nombre",
        emailPlaceholder: "tu@email.com",
        projectPlaceholder: "Seleccionar...",
        budgetPlaceholder: "Seleccionar...",
        messagePlaceholder: "Cuéntanos sobre tu proyecto...",
        submit: "Enviar mensaje",
      },
      projectOptions: {
        website: "Sitio Web",
        ecommerce: "E-commerce",
        webapp: "Aplicación Web",
        landing: "Landing Page",
        redesign: "Rediseño",
      },
      budgetOptions: {
        "500-1000": "$500 - $1,000",
        "1000-2500": "$1,000 - $2,500",
        "2500-5000": "$2,500 - $5,000",
        "5000+": "$5,000+$",
      },
      whatsapp: {
        greeting: "👋 ¡Hola! Soy *{name}*",
        details: "📋 *Detalles del proyecto:*",
        typeLabel: "• Tipo: {project}",
        budgetLabel: "• Presupuesto: {budget}",
        messageLabel: "💬 *Mensaje:*",
      },
    },
    footer: {
      description: "Diseño y desarrollo web con identidad propia desde Ciudad del Este. Conectamos tu visión con la tecnología.",
      navigation: "Navegación",
      services: "Servicios",
      reserved: "© {year} east.dev — Todos los derechos reservados",
      location: "Ciudad del Este, Paraguay",
      phone: "+595 973213591",
    },
    notFound: {
      title: "404",
      message: "Página no encontrada",
      back: "Volver al inicio",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      projects: "Projects",
      portfolio: "Portfolio",
      contact: "Contact",
      contactButton: "Contact",
    },
    hero: {
      label: "Premium web development",
      titleLine1: "The creative",
      titleLine2: "partner",
      subtitle: "for",
      description: "Design and web development with its own identity. We build digital experiences that transform brands.",
      ctaProjects: "See Projects",
      ctaContact: "Start Project",
      words: ["Directors", "Designers", "Agencies", "Brands", "Startups"],
    },
    about: {
      section: "About Us",
      title: "The bridge between your vision and digital reality",
      paragraph1: "east.dev was born in Ciudad del Este, inspired by the iconic Friendship Bridge. We connect technology and creativity to bring unique web projects to life.",
      paragraph2: "Each project is an opportunity to build bridges: between your brand and your customers, between the traditional and the innovative.",
      paragraph3: "We work side by side with entrepreneurs, SMEs and brands seeking to stand out in the digital world with tailored solutions and purposeful design.",
      paragraph4: "Our approach combines clean code, modern design and strategy to deliver results that make an impact.",
    },
    services: {
      section: "Services",
      header: "Complete solutions for your digital presence",
      description: "A comprehensive set of services designed to take your brand to the next level.",
      items: [
        {
          title: "Web Development",
          description: "Responsive websites and applications built with the latest technologies.",
        },
        {
          title: "UI/UX Design",
          description: "Intuitive interfaces that enhance the user experience.",
        },
        {
          title: "Digital Branding",
          description: "Consistent visual identity that reflects your brand.",
        },
        {
          title: "Digital Marketing",
          description: "Strategies to increase your online visibility.",
        },
        {
          title: "Social Media",
          description: "Effective content management and campaign strategies.",
        },
        {
          title: "Web Layout",
          description: "Designs turned into pixel-perfect code.",
        },
        {
          title: "SEO",
          description: "Optimization for better search rankings.",
        },
        {
          title: "Performance",
          description: "Improvement of speed and loading times.",
        },
      ],
    },
    projects: {
      section: "Projects",
      subtitle: "Design With Purpose",
      subtitleAlt: "Build With Impact",
      header: "Work that speaks for us",
      prototypesLabel: "Web Prototypes",
      prototypeAction: "See prototype",
    },
    howWeWork: {
      section: "How We Work",
      subtitle: "Proven Process",
      subtitleHighlight: "and Transparent",
      description: "Agile methodology with regular deliveries, clear communication and absolute focus on measurable results.",
      steps: [
        {
          number: "01",
          title: "Discovery & Strategy",
          description: "We analyze your business, goals and audience to define clear strategy and measurable outcomes.",
          points: ["Competitive Analysis", "User Research", "KPI Definition"],
        },
        {
          number: "02",
          title: "Design & Prototyping",
          description: "We create wireframes and interactive prototypes to validate the solution before execution.",
          points: ["UI/UX Design", "Interactive Prototypes", "User Validation"],
        },
        {
          number: "03",
          title: "Development & Optimization",
          description: "Clean, responsive code optimized with industry best practices.",
          points: ["Full-stack Development", "Performance Optimization", "Testing & QA"],
        },
        {
          number: "04",
          title: "Launch & Support",
          description: "We deploy securely, monitor performance and provide continuous support.",
          points: ["Secure Deployment", "24/7 Monitoring", "Technical Support"],
        },
      ],
      ctaTitle: "Ready to start your project?",
      ctaDescription: "Contact us today and discover how we can transform your vision into reality.",
      ctaButton: "Start Conversation",
    },
    team: {
      section: "Why Choose east.dev",
      title: "Meet your digital partner",
      titleAlt: "for web design and development",
      description: "As a web and digital designer, strategist and content creator, I build projects focused on branding, UX, performance and measurable outcomes.",
      stats: {
        projects: "Projects Completed",
        clients: "Satisfied Clients",
        team: "Team",
      },
    },
    portfolio: {
      sectionLabel: "Digital Design Portfolio",
      headerTitleLine1: "Content that",
      headerTitleLine2: "connects brands",
      headerDescription: "Design for posts, stories, carousels and visual assets for social media. Each piece is created to communicate the essence of each brand.",
      ctaTitle: "Need content for your brand?",
      ctaDescription: "We create visual pieces that communicate the essence of your business.",
      ctaButton: "Request a quote",
      filterAll: "All",
      pieces: "pieces",
    },
    contact: {
      section: "Contact",
      question: "Ready to",
      highlight: "get started?",
      description: "Tell us about your project and receive a custom quote. We are ready to bring your vision to life.",
      emailLabel: "Email",
      locationLabel: "Location",
      email: "east.devpy@gmail.com",
      location: "Ciudad del Este, Paraguay",
      form: {
        name: "Name",
        email: "Email",
        project: "Project Type",
        budget: "Budget",
        message: "Message",
        namePlaceholder: "Your name",
        emailPlaceholder: "you@email.com",
        projectPlaceholder: "Select...",
        budgetPlaceholder: "Select...",
        messagePlaceholder: "Tell us about your project...",
        submit: "Send message",
      },
      projectOptions: {
        website: "Website",
        ecommerce: "E-commerce",
        webapp: "Web App",
        landing: "Landing Page",
        redesign: "Redesign",
      },
      budgetOptions: {
        "500-1000": "$500 - $1,000",
        "1000-2500": "$1,000 - $2,500",
        "2500-5000": "$2,500 - $5,000",
        "5000+": "$5,000+",
      },
      whatsapp: {
        greeting: "👋 Hi! I'm *{name}*",
        details: "📋 *Project details:*",
        typeLabel: "• Type: {project}",
        budgetLabel: "• Budget: {budget}",
        messageLabel: "💬 *Message:*",
      },
    },
    footer: {
      description: "Design and web development with a unique identity from Ciudad del Este. We connect your vision with technology.",
      navigation: "Navigation",
      services: "Services",
      reserved: "© {year} east.dev — All rights reserved",
      location: "Ciudad del Este, Paraguay",
      phone: "+595 973213591",
    },
    notFound: {
      title: "404",
      message: "Page not found",
      back: "Back to home",
    },
  },
};

interface I18nContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string, params?: Record<string, string>) => any;
}

const LanguageContext = createContext<I18nContextValue | undefined>(undefined);

const getTranslation = (locale: Locale, key: string): TranslationValue => {
  return key.split('.').reduce<Record<string, any> | TranslationValue>((acc, part) => {
    if (typeof acc === 'object' && acc !== null && part in acc) {
      return acc[part];
    }
    return acc;
  }, translations[locale]) as TranslationValue;
};

const interpolate = (value: string, params?: Record<string, string>) => {
  if (!params) return value;
  return Object.entries(params).reduce(
    (text, [param, replacement]) => text.replace(new RegExp(`\\{${param}\\}`, 'g'), replacement),
    value,
  );
};

const getInitialLocale = (): Locale => {
  if (typeof window === "undefined") return "es";
  const stored = localStorage.getItem("locale");
  if (stored === "en" || stored === "es") return stored;
  return navigator.language.startsWith("en") ? "en" : "es";
};

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [locale, setLocale] = useState<Locale>(getInitialLocale);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("locale", locale);
    }
  }, [locale]);

  const value = useMemo<I18nContextValue>(() => ({
    locale,
    setLocale,
    t: (key: string, params?: Record<string, string>) => {
      const translation = getTranslation(locale, key);
      if (typeof translation === "string") {
        return interpolate(translation, params);
      }
      return translation;
    },
  }), [locale]);

  return React.createElement(
    LanguageContext.Provider,
    { value },
    children
  );
};

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useTranslation must be used within a LanguageProvider");
  }
  return context;
};
