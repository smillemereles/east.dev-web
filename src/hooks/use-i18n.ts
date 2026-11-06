import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Locale = "es" | "en" | "pt";
export const LOCALES: Locale[] = ["es", "en", "pt"];

type TranslationValue = string | string[] | Record<string, any> | any[];

const translations: Record<Locale, Record<string, any>> = {
es: {
    nav: {
      home: "Inicio",
      about: "Sobre mí",
      services: "Servicios",
      projects: "Proyectos",
      portfolio: "Portafolio",
      featured: "Proyectos",
      international: "Internacional",
      contact: "Contacto",
      contactButton: "Contactar",
    },
    hero: {
      label: "Desarrollo web premium · Ciudad del Este",
      titleLine1: "La socia",
      titleLine2: "creativa",
      subtitle: "para",
      description: "Diseño y desarrollo web con identidad propia. Construyo experiencias digitales que transforman marcas.",
      ctaProjects: "Ver Proyectos",
      ctaContact: "Empezar proyecto",
      words: ["Directores", "Diseñadores", "Agencias", "Marcas", "Startups"],
      marquee: ["DESARROLLO WEB", "UI/UX DESIGN", "BRANDING", "MARKETING", "SEO", "E-COMMERCE"],
      internationalBadge: "🌍 Disponible para proyectos internacionales",
      internationalCta: "Proyecto internacional",
    },
    scrollReveal: {
      title: "",
      subtitle: "",
    },
    about: {
      section: "Sobre mí",
      title: "El puente entre tu visión y la realidad digital",
      paragraph1: "east.dev nació en Ciudad del Este, inspirada en el icónico Puente de la Amistad. Conecto tecnología y creatividad para dar vida a proyectos web únicos.",
      paragraph2: "Cada proyecto es una oportunidad de construir puentes: entre tu marca y tus clientes, entre lo tradicional y lo innovador.",
      paragraph3: "Trabajo codo a codo con emprendedores, pymes y marcas que buscan destacar en el mundo digital con soluciones a medida y diseño con propósito.",
      paragraph4: "Mi enfoque combina código limpio, diseño moderno y estrategia para entregar resultados que impactan.",
      paragraph5: "Desde Paraguay colaboro con equipos de todo el mundo. Trabajo de forma remota con comunicación clara, procesos ágiles y entregas que se adaptan a tu zona horaria.",
    },
    services: {
      section: "Servicios",
      header: "Soluciones completas para tu presencia digital",
      description: "Un conjunto integral de servicios diseñados para llevar tu marca al siguiente nivel, con alcance internacional.",
      internationalNote: "Trabajo de forma remota con equipos y clientes de cualquier país.",
      items: [
        { title: "Desarrollo Web", description: "Sitios web y aplicaciones responsivas con las últimas tecnologías." },
        { title: "Diseño UI/UX", description: "Interfaces intuitivas que mejoran la experiencia del usuario." },
        { title: "Branding Digital", description: "Identidad visual coherente que refleja tu marca." },
        { title: "Marketing Digital", description: "Estrategias para aumentar tu visibilidad online." },
        { title: "Redes Sociales", description: "Gestión y estrategias de contenido efectivas." },
        { title: "Maquetación Web", description: "Diseños transformados en código pixel-perfect." },
        { title: "SEO", description: "Optimización para mejor posicionamiento." },
        { title: "Optimización", description: "Mejora de rendimiento y velocidad." },
      ],
    },
    projects: {
      section: "Proyectos",
      subtitle: "Design With Purpose",
      subtitleAlt: "Build With Impact",
      header: "Trabajos que hablan por mí",
      projectSingular: "proyecto",
      projectPlural: "proyectos",
      categories: {
        gastronomia: {
          label: "Restaurantes & Gastronomía",
          projects: {
            "Hoplon Lounge": "Sitio web elegante para lounge bar con reservas online y menú digital.",
            "La Mansa": "Plataforma gastronómica con sistema de pedidos y carta digital.",
          },
        },
        ecommerce: {
          label: "E-commerce & Retail",
          projects: {
            "Farma Next": "E-commerce farmacéutico con catálogo de productos y compra online.",
            "Farmacia Do Sul": "E-commerce farmacéutico con catálogo de productos, carrito de compras y checkout en guaraníes.",
            "Black Colors": "E-commerce y landing de impresión sustentable con catálogo y servicios de leasing.",
            "Mania Group": "Tienda online multi-categoría: celulares, vapes y perfumería premium.",
          },
        },
        agro: {
          label: "Agro & Industria",
          projects: {
            "SAISA": "Sitio web corporativo para servicios ambientales integrales, enfocado en empresas e industrias con soluciones sostenibles y economía circular.",
            "CMP Agro": "Sitio corporativo para soluciones tecnológicas al agro-negocio, con catálogo de productos y marcas.",
          },
        },
        turismo: {
          label: "Turismo & Viajes",
          projects: {
            "Lleva Viajes": "Agencia de viajes con catálogo de destinos y cotización.",
          },
        },
      },
    },
    featuredProjects: {
      title: "Proyectos que",
      titleHighlight: "destacan",
      description: "Una selección de proyectos donde estrategia, diseño y código se unen para generar resultados reales.",
      badge: "Proyecto Estrella",
      visitSite: "Visitar sitio",
      items: [
        {
          category: "E-commerce Farmacéutico",
          description: "Farmacia en Ciudad del Este especializada en brindar una experiencia de compra simple para clientes paraguayos y brasileños. Uno de los objetivos principales fue facilitar las compras internacionales desde Brasil.",
          features: [
            "Pasarela de pago con PIX",
            "Catálogo completo de productos",
            "Información detallada de tratamientos",
            "Diseño 100% responsive",
            "Optimización para clientes brasileños",
            "Integración con WhatsApp",
            "Optimizado para velocidad y conversión",
          ],
        },
        {
          category: "Sitio Institucional · Agro",
          description: "Empresa del sector agrario para la que desarrollé un sitio web institucional que presenta la compañía y exhibe sus productos de forma clara y profesional. El objetivo fue generar presencia digital y facilitar el contacto con nuevos clientes.",
          features: [
            "Sitio institucional profesional",
            "Catálogo de productos y marcas",
            "Presentación del agro-negocio",
            "Formularios de contacto",
            "Diseño responsive",
            "Optimización SEO",
            "Navegación sencilla e intuitiva",
          ],
        },
        {
          category: "Tienda Online Multi-categoría",
          description: "Empresa que eligió desarrollar una tienda online completa para mostrar y comercializar su amplio catálogo. La plataforma fue diseñada para ofrecer una experiencia moderna y facilitar todo el proceso de compra.",
          features: [
            "Tienda online completa",
            "Categorías: electrónica, perfumes, vapes, accesorios",
            "Buscador de productos",
            "WhatsApp para finalizar pedidos",
            "Panel de administración de productos",
            "Diseño responsive",
            "Experiencia de compra rápida",
          ],
        },
        {
          category: "Salud · Sitio Institucional",
          description: "El mundo de la salud también confía en mi trabajo. Desarrollé la presencia digital del Sanatorio San Carlos (Coronel Oviedo, Caaguazú): un sitio claro y humano que presenta especialidades, servicios y canales de contacto para pacientes.",
          features: [
            "Presentación de especialidades médicas",
            "Servicios y urgencias destacados",
            "Cuerpo médico y equipo profesional",
            "Contacto y agendamiento simple",
            "Diseño responsive para pacientes",
            "Optimización SEO local",
            "Navegación clara y accesible",
          ],
        },
      ],
    },
    howWeWork: {
      section: "¿Cómo trabajo?",
      subtitle: "Así lo hago",
      subtitleHighlight: "simple y claro",
      description: "Te cuento paso a paso cómo llevo tu idea a la web, sin tecnicismos ni complicaciones.",
      internationalNote: "Trabajo de forma remota con clientes en cualquier país y zona horaria.",
      steps: [
        { number: "01", title: "Conversamos", description: "Nos reunimos para conocer tu negocio, lo que necesitas y qué quieres lograr.", points: ["Escucho tu idea", "Reviso tu marca", "Definimos objetivos claros"] },
        { number: "02", title: "Diseño", description: "Preparo bocetos y una versión de prueba para que veas cómo quedará antes de construir.", points: ["Diseño a tu medida", "Prototipo visual", "Ajustes antes de programar"] },
        { number: "03", title: "Construyo", description: "Programo tu sitio para que se vea bien en celular, tablet y computadora.", points: ["Desarrollo web", "Versión móvil incluida", "Pruebas de funcionamiento"] },
        { number: "04", title: "Lanzo", description: "Publico tu sitio y te acompaño para que todo funcione bien desde el primer día.", points: ["Publicación online", "Soporte inicial", "Mejoras continuas"] },
      ],
      ctaTitle: "¿Querés que trabajemos juntos?",
      ctaDescription: "Escribime y contame tu idea. Te ayudo a llevarla a la web de forma clara y sin vueltas.",
      ctaButton: "Empezar ahora",
    },
    smartOrder: {
      section: "Smart Order",
      badge: "Para restaurantes y gastronomía",
      title: "Pedidos online simples para tu restaurante",
      subtitle: "Vendé más sin complicaciones",
      description: "Smart Order facilita la vida de tus clientes. Ellos hacen clic, arman su pedido y la orden llega organizada por WhatsApp a tu negocio. Sin comisiones, sin apps de terceros, sin vueltas.",
      features: [
        "Pedidos directos por WhatsApp",
        "Link ideal para Meta Ads",
        "Fácil de usar desde el celular",
        "Sin comisiones por venta",
        "Configurado a tu menú",
      ],
      cta: "Quiero Smart Order para mi restaurante",
      ctaNote: "Disponible para pizzerías, restaurantes, cafeterías y cualquier negocio de gastronomía.",
      whatsappMessage: "Hola, quiero Smart Order para mi restaurante. Me interesa recibir pedidos online por WhatsApp.",
      imageAlt: "Smart Order en acción: pedidos online para restaurantes",
      floatingCard: {
        title: "Nuevo pedido",
        time: "Ahora",
        message: "El cliente armó su pedido y ya llegó a tu WhatsApp organizado.",
      },
    },
    internationalWorks: {
      section: "Trabajos Internacionales",
      badge: "Clientes en Estados Unidos",
      title: "Diseño webs con agendamiento",
      titleAlt: "para profesionales en el exterior",
      description: "Trabajo con clientes de distintos países creando sitios web que funcionan como carta de presentación profesional y a la vez permiten a sus clientes agendar servicios online, sin llamadas ni idas y vueltas por mensaje.",
      caseLocation: "Park City, Utah · USA",
      caseName: "Chef David Sánchez",
      caseTitle: "Una web pensada para vender experiencias",
      caseDescription: "Le construí al chef David Sánchez una web elegante que presenta sus servicios de chef privado en Park City, Utah, y le da a sus clientes una forma clara y directa de agendar una experiencia culinaria en su casa. Menos fricción, más reservas.",
      features: [
        "Sistema de agendamiento online integrado",
        "Presentación profesional de servicios y menús",
        "Preparada para clientes internacionales (ES / EN)",
      ],
      cta: "Quiero una web con agendamiento",
      ctaNote: "Ideal para chefs, coaches, fotógrafos, estudios, terapeutas y cualquier profesional que venda servicios con turnos.",
      whatsappMessage: "Hola, quiero una web con sistema de agendamiento para ofrecer mis servicios profesionales, similar a la del chef David Sánchez.",
      imageAlt: "Sitio web del chef David Sánchez en Park City, Utah",
    },
    team: {
      section: "¿Por qué elegir east.dev?",
      answer: "Porque como desarrolladora independiente, uno diseño, tecnología y comunicación de forma directa. Trabajo a distancia con procesos claros, entrego código limpio y diseño con propósito, y me enfoco en resultados reales: más reservas, más ventas y una marca que se destaca.",
    },
    portfolio: {
      sectionLabel: "Portafolio de Diseño Digital",
      headerTitleLine1: "Contenido que",
      headerTitleLine2: "conecta marcas",
      headerDescription: "Diseño de posteos, stories, carousels y piezas visuales para redes sociales. Cada pieza está pensada para comunicar la esencia de cada marca.",
      ctaTitle: "¿Necesitás contenido para tu marca?",
      ctaDescription: "Creo piezas visuales que comunican la esencia de tu negocio.",
      ctaButton: "Solicitar presupuesto",
      filterAll: "Todos",
      pieces: "piezas",
      imageComingSoon: "Imagen próximamente",
      workTypes: {
        "Post Instagram": "Post Instagram",
        "Carousel": "Carousel",
        "Story": "Story",
        "Branding": "Branding",
        "Web Design": "Diseño Web",
      },
      clients: {
        llevaviajes: {
          category: "Turismo & Viajes",
          description: "Contenido visual para agencia de viajes. Diseño de posteos, promociones y piezas para campañas estacionales.",
          works: {
            "1": { title: "Conocé la Web", description: "Presentación de la web oficial de Lleva Viajes con 15 años de trayectoria" },
            "2": { title: "Servicios Exclusivos", description: "Promoción de servicios: viajes 2x1, en grupo y de bodas" },
            "3": { title: "Destinos Brasil 2026", description: "Paquetes a Natal, Rio de Janeiro y Porto de Galinhas desde 980 USD" },
            "4": { title: "Salvador Bahía", description: "Promo Semana Santa 2026 a Salvador Bahía, 7 noches desde 7.300.000 Gs" },
            "5": { title: "Vision Board Colombia", description: "Paquete a Colombia: Eje Cafetero, San Andrés y Cartagena" },
          },
        },
        farmanext: {
          category: "Farmacia & E-commerce",
          description: "Contenido visual y diseño digital para farmacia e-commerce. Piezas promocionales, campañas de productos y branding en redes sociales.",
          works: {
            "1": { title: "Lander Bar Protein", description: "Barra proteica Lander Bar sabor Dulce de Leche, 15g de proteína, sin gluten y libre de colesterol" },
            "2": { title: "As Mais Desejadas", description: "Promo semanal con productos desde 449 R$ en medicamentos, vitaminas, cosméticos e importados" },
            "3": { title: "Linha Masculina LACA", description: "Lanzamiento de la línea masculina LACA Laboratorio con productos de cuidado facial" },
            "4": { title: "Farma Ofertas", description: "Evento Farma Ofertas con hasta 50% OFF en medicamentos, vitaminas, cosméticos y productos importados" },
            "5": { title: "Páscoa Saudável", description: "Campaña de Pascua con premios y chocolate saludable" },
            "6": { title: "Melatonin Sleep", description: "Melatonina 10mg LanderFit para noches profundas, equilibrio y calma mental" },
            "7": { title: "Mento Vick Deportivo", description: "Crema analgésica Mento Vick, fórmula anti-inflamatoria para alivio del dolor tras el esfuerzo" },
            "8": { title: "Antigripales", description: "Línea completa antigripal: Vitamina C, Cortagrip y Mento Vick Té Caliente de INDUFAR" },
          },
        },
        "citytour-asu": {
          category: "Turismo",
          description: "Diseño de contenido digital para experiencias turísticas en Asunción. Posteos, stories y material promocional.",
          works: {
            "1": { title: "#TBT Recorridos", description: "Throwback de grandes recorridos por Asunción con grupos de turistas" },
            "2": { title: "Historias de la Ciudad", description: "Cada ciudad guarda historias que merecen ser contadas, descubrí las casas más antiguas de Asunción" },
            "3": { title: "Casa de la Independencia", description: "La Casa de la Independencia, punto clave donde se gestó la libertad del Paraguay en 1811" },
            "4": { title: "Historia Independencia", description: "Recorrido histórico por la Casa de la Independencia, museo y sitio emblemático de Asunción" },
            "5": { title: "Semana del Amor", description: "City Tour 2x1 para parejas, Semana del Amor en Asunción del 10 al 13 de febrero 2026" },
          },
        },
        nevenhost: {
          category: "Web — Proyecto Piloto",
          description: "Proyecto piloto de web para inmobiliaria. Diseño de plataforma con listado de propiedades, búsqueda y fichas de inmuebles.",
          works: {
            "1": { title: "Hero Principal", description: "Landing 'Aquí comienza tu nuevo hogar' con selección exclusiva de casas y terrenos en venta" },
            "2": { title: "Listado de Propiedades", description: "Catálogo con filtros por habitaciones, ubicación y rango de precio en USD" },
            "3": { title: "Galería de Propiedades", description: "Galería con filtros por exteriores, interiores y áreas comunes con imágenes cautivadoras" },
          },
        },
        "farmacia-dosul": {
          category: "E-commerce — Proyecto Piloto",
          description: "Proyecto piloto de e-commerce para farmacia. Diseño de tienda online con catálogo de productos y carrito de compras.",
          works: {
            "1": { title: "Hero Principal", description: "Landing 'Tu Salud, Nuestra Prioridad' con más de 20 años de confianza y laboratorios aliados como INDUFAR y Éticos" },
            "2": { title: "Tienda de Productos", description: "Catálogo de Tirzepatida (T.G) en distintas dosis con precios en guaraníes y reales" },
            "3": { title: "Checkout", description: "Flujo de checkout con información del cliente, envío gratis y resumen de pedido en guaraníes" },
          },
        },
        vitalx: {
          category: "Web — Proyecto Piloto",
          description: "Proyecto piloto de plataforma web para marca de salud y bienestar. Diseño de sitio informativo y e-commerce.",
          works: {
            "1": { title: "Hero Principal", description: "Landing page con slider hero 'Activa tu Versión X', suplementación deportiva premium 100% online en Paraguay" },
            "2": { title: "Tienda de Productos", description: "Catálogo e-commerce con productos Tirzepatida de INDUFAR y QUIMFA, precios en guaraníes y reales" },
            "3": { title: "Carrito de Compras", description: "Flujo de carrito con resumen de compra, cantidades editables y checkout integrado" },
          },
        },
      },
    },
    contact: {
      section: "Contacto",
      question: "¿Listo para",
      highlight: "comenzar?",
      description: "Cuéntame sobre tu proyecto y recibe una cotización personalizada. Estoy lista para dar vida a tu visión, sin importar tu país o zona horaria.",
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
        messagePlaceholder: "Cuéntame sobre tu proyecto...",
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
        "5000+": "$5,000+",
      },
      whatsapp: {
        greeting: "👋 ¡Hola! Soy *{name}*",
        details: "📋 *Detalles del proyecto:*",
        typeLabel: "• Tipo: {project}",
        budgetLabel: "• Presupuesto: {budget}",
        messageLabel: "💬 *Mensaje:*",
      },
      internationalNote: "🌍 Trabajo con clientes de todo el mundo. Escríbeme en español o inglés.",
      internationalCta: "Iniciar proyecto internacional",
    },
    footer: {
      description: "Diseño y desarrollo web con identidad propia desde Ciudad del Este. Conecto tu visión con la tecnología.",
      navigation: "Navegación",
      services: "Servicios",
      reserved: "© {year} east.dev — Todos los derechos reservados",
      location: "Ciudad del Este, Paraguay",
      phone: "+595 973213591",
      internationalNote: "Desarrolladora remota · Clientes internacionales",
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
      featured: "Projects",
      international: "International",
      contact: "Contact",
      contactButton: "Contact",
    },
    hero: {
      label: "Premium web development",
      titleLine1: "The creative",
      titleLine2: "partner",
      subtitle: "for",
      description: "Design and web development with its own identity. I build digital experiences that transform brands.",
      ctaProjects: "See Projects",
      ctaContact: "Start Project",
      words: ["Directors", "Designers", "Agencies", "Brands", "Startups"],
      marquee: ["WEB DEVELOPMENT", "UI/UX DESIGN", "BRANDING", "MARKETING", "SEO", "E-COMMERCE"],
      internationalBadge: "🌍 Available for international projects",
      internationalCta: "International project",
    },
    scrollReveal: {
      title: "",
      subtitle: "",
    },
    about: {
      section: "About Me",
      title: "The bridge between your vision and digital reality",
      paragraph1: "east.dev was born in Ciudad del Este, inspired by the iconic Friendship Bridge. As an independent developer, I connect technology and creativity to bring unique web projects to life.",
      paragraph2: "Each project is an opportunity to build bridges: between your brand and your customers, between the traditional and the innovative.",
      paragraph3: "I work side by side with entrepreneurs, SMEs and brands seeking to stand out in the digital world with tailored solutions and purposeful design.",
      paragraph4: "My approach combines clean code, modern design and strategy to deliver results that make an impact.",
      paragraph5: "From Ciudad del Este, Paraguay, I collaborate with teams around the world. I work remotely with clear communication, agile processes and deliveries adapted to your timezone.",
    },
    services: {
      section: "Services",
      header: "Complete solutions for your digital presence",
      description: "A comprehensive set of services designed to take your brand to the next level, available for international clients.",
      internationalNote: "I work remotely with teams and clients from any country.",
      items: [
        { title: "Web Development", description: "Responsive websites and applications built with the latest technologies." },
        { title: "UI/UX Design", description: "Intuitive interfaces that enhance the user experience." },
        { title: "Digital Branding", description: "Consistent visual identity that reflects your brand." },
        { title: "Digital Marketing", description: "Strategies to increase your online visibility." },
        { title: "Social Media", description: "Effective content management and campaign strategies." },
        { title: "Web Layout", description: "Designs turned into pixel-perfect code." },
        { title: "SEO", description: "Optimization for better search rankings." },
        { title: "Performance", description: "Improvement of speed and loading times." },
      ],
    },
    projects: {
      section: "Projects",
      subtitle: "Design With Purpose",
      subtitleAlt: "Build With Impact",
      header: "Work that speaks for itself",
      projectSingular: "project",
      projectPlural: "projects",
      categories: {
        gastronomia: {
          label: "Restaurants & Gastronomy",
          projects: {
            "Hoplon Lounge": "Elegant website for a lounge bar with online reservations and a digital menu.",
            "La Mansa": "Gastronomy platform with an ordering system and digital menu.",
          },
        },
        ecommerce: {
          label: "E-commerce & Retail",
          projects: {
            "Farma Next": "Pharmaceutical e-commerce with a product catalog and online purchasing.",
            "Farmacia Do Sul": "Pharmaceutical e-commerce with product catalog, shopping cart and checkout in guaraníes.",
            "Black Colors": "E-commerce and landing page for sustainable printing with catalog and leasing services.",
            "Mania Group": "Multi-category online store: phones, vapes and premium perfumery.",
          },
        },
        agro: {
          label: "Agri & Industry",
          projects: {
            "SAISA": "Corporate website for integrated environmental services, focused on companies and industries with sustainable solutions and circular economy.",
            "CMP Agro": "Corporate site for agri-business tech solutions, with product and brand catalog.",
          },
        },
        turismo: {
          label: "Tourism & Travel",
          projects: {
            "Lleva Viajes": "Travel agency with destination catalog and quote requests.",
          },
        },
      },
    },
    featuredProjects: {
      title: "Projects that",
      titleHighlight: "stand out",
      description: "A curated selection of projects where strategy, design and code come together to deliver real results.",
      badge: "Featured Project",
      visitSite: "Visit site",
      items: [
        {
          category: "Pharmaceutical E-commerce",
          description: "A pharmacy in Ciudad del Este focused on delivering a simple shopping experience for Paraguayan and Brazilian customers. A key goal was making international purchases from Brazil frictionless.",
          features: [
            "PIX payment gateway",
            "Complete product catalog",
            "Detailed treatment information",
            "100% responsive design",
            "Optimized for Brazilian customers",
            "WhatsApp integration",
            "Optimized for speed and conversion",
          ],
        },
        {
          category: "Corporate Site · Agri",
          description: "An agri-business for which I built a corporate website that introduces the company and showcases its products clearly and professionally. The goal was to build digital presence and make it easy for new customers to get in touch.",
          features: [
            "Professional corporate site",
            "Product and brand catalog",
            "Agri-business presentation",
            "Contact forms",
            "Responsive design",
            "SEO optimization",
            "Simple, intuitive navigation",
          ],
        },
        {
          category: "Multi-category Online Store",
          description: "A company that chose to build a complete online store to showcase and sell its wide catalog. The platform was designed to offer a modern experience and streamline the entire buying process.",
          features: [
            "Full online store",
            "Categories: electronics, perfumes, vapes, accessories",
            "Product search",
            "WhatsApp checkout",
            "Product admin panel",
            "Responsive design",
            "Fast shopping experience",
          ],
        },
        {
          category: "Healthcare · Corporate Site",
          description: "The healthcare sector also places its trust in my work. I built the digital presence of Sanatorio San Carlos (Coronel Oviedo, Caaguazú): a clear, human website presenting specialties, services and contact channels for patients.",
          features: [
            "Medical specialties showcase",
            "Services and emergency care highlighted",
            "Medical staff and professional team",
            "Simple contact and appointment booking",
            "Patient-friendly responsive design",
            "Local SEO optimization",
            "Clear, accessible navigation",
          ],
        },
      ],
    },
    howWeWork: {
      section: "How I Work",
      subtitle: "How I do it",
      subtitleHighlight: "simple and clear",
      description: "Here's a step-by-step look at how I turn your idea into a website, without jargon or complexity.",
      internationalNote: "I work remotely with clients in any country and timezone.",
      steps: [
        { number: "01", title: "We talk", description: "We meet to learn about your business, what you need, and what you want to achieve.", points: ["I listen to your idea", "We review your brand", "We set clear goals"] },
        { number: "02", title: "I design", description: "I prepare sketches and a test version so you can see how it will look before I build it.", points: ["Custom design", "Visual prototype", "Revisions before coding"] },
        { number: "03", title: "I build", description: "I code your site so it looks great on phone, tablet, and desktop.", points: ["Web development", "Mobile version included", "Functionality testing"] },
        { number: "04", title: "We launch", description: "I publish your site and support you so everything works well from day one.", points: ["Go live online", "Initial support", "Continuous improvements"] },
      ],
      ctaTitle: "Want to work together?",
      ctaDescription: "Get in touch and tell me your idea. I'll help you bring it to the web clearly and without hassle.",
      ctaButton: "Start now",
    },
    smartOrder: {
      section: "Smart Order",
      badge: "For restaurants and food businesses",
      title: "Simple online ordering for your restaurant",
      subtitle: "Sell more without the hassle",
      description: "Smart Order makes life easier for your customers. They click, build their order, and it arrives organized via WhatsApp to your business. No commissions, no third-party apps, no hassle.",
      features: [
        "Direct orders via WhatsApp",
        "Perfect link for Meta Ads",
        "Easy to use from mobile",
        "No sales commissions",
        "Set up for your menu",
      ],
      cta: "I want Smart Order for my restaurant",
      ctaNote: "Available for pizzerias, restaurants, cafés and any food business.",
      whatsappMessage: "Hi, I want Smart Order for my restaurant. I'm interested in receiving online orders via WhatsApp.",
      imageAlt: "Smart Order in action: online ordering for restaurants",
      floatingCard: {
        title: "New order",
        time: "Now",
        message: "The customer built their order and it already arrived organized on your WhatsApp.",
      },
    },
    internationalWorks: {
      section: "International Works",
      badge: "Clients in the United States",
      title: "I build websites with online booking",
      titleAlt: "for professionals abroad",
      description: "I work with clients from different countries, creating websites that act as a professional showcase and let their customers book services online — no calls, no back-and-forth messaging.",
      caseLocation: "Park City, Utah · USA",
      caseName: "Chef David Sánchez",
      caseTitle: "A website built to sell experiences",
      caseDescription: "I built Chef David Sánchez an elegant website that presents his private chef services in Park City, Utah, and gives his clients a clear, direct way to book a culinary experience at home. Less friction, more bookings.",
      features: [
        "Integrated online booking system",
        "Professional presentation of services and menus",
        "Ready for international clients (ES / EN)",
      ],
      cta: "I want a website with online booking",
      ctaNote: "Ideal for chefs, coaches, photographers, studios, therapists and any professional who sells services by appointment.",
      whatsappMessage: "Hi, I'd like a website with an online booking system to offer my professional services, similar to Chef David Sánchez's site.",
      imageAlt: "Chef David Sánchez website in Park City, Utah",
    },
    team: {
      section: "Why choose east.dev?",
      answer: "Because as an independent developer, I combine design, technology, and direct communication without intermediaries. I work remotely from Ciudad del Este with clear processes, delivering clean code and purposeful design focused on real results: more bookings, more sales, and a brand that stands out.",
    },
    portfolio: {
      sectionLabel: "Digital Design Portfolio",
      headerTitleLine1: "Content that",
      headerTitleLine2: "connects brands",
      headerDescription: "Design for posts, stories, carousels and visual assets for social media. Each piece is created to communicate the essence of each brand.",
      ctaTitle: "Need content for your brand?",
      ctaDescription: "I create visual pieces that communicate the essence of your business.",
      ctaButton: "Request a quote",
      filterAll: "All",
      pieces: "pieces",
      imageComingSoon: "Image coming soon",
      workTypes: {
        "Post Instagram": "Instagram Post",
        "Carousel": "Carousel",
        "Story": "Story",
        "Branding": "Branding",
        "Web Design": "Web Design",
      },
      clients: {
        llevaviajes: {
          category: "Tourism & Travel",
          description: "Visual content for a travel agency. Post designs, promotions and seasonal campaign pieces.",
          works: {
            "1": { title: "Meet the Website", description: "Presentation of Lleva Viajes' official website with 15 years of experience" },
            "2": { title: "Exclusive Services", description: "Promotion of services: 2x1, group and wedding trips" },
            "3": { title: "Brazil Destinations 2026", description: "Packages to Natal, Rio de Janeiro and Porto de Galinhas from USD 980" },
            "4": { title: "Salvador Bahia", description: "Easter 2026 promo to Salvador Bahia, 7 nights from Gs 7,300,000" },
            "5": { title: "Colombia Vision Board", description: "Package to Colombia: Coffee Region, San Andrés and Cartagena" },
          },
        },
        farmanext: {
          category: "Pharmacy & E-commerce",
          description: "Visual content and digital design for a pharmacy e-commerce. Promotional pieces, product campaigns and social media branding.",
          works: {
            "1": { title: "Lander Bar Protein", description: "Lander Bar protein bar, Dulce de Leche flavor, 15g of protein, gluten-free and cholesterol-free" },
            "2": { title: "Most Wanted", description: "Weekly promo with products from R$ 449 in medicines, vitamins, cosmetics and imported goods" },
            "3": { title: "LACA Men's Line", description: "Launch of LACA Laboratorio's men's line with facial care products" },
            "4": { title: "Farma Deals", description: "Farma Deals event with up to 50% OFF on medicines, vitamins, cosmetics and imported products" },
            "5": { title: "Healthy Easter", description: "Easter campaign with prizes and healthy chocolate" },
            "6": { title: "Melatonin Sleep", description: "LanderFit Melatonin 10mg for deep nights, balance and mental calm" },
            "7": { title: "Mento Vick Sport", description: "Mento Vick analgesic cream, anti-inflammatory formula for pain relief after exertion" },
            "8": { title: "Cold & Flu", description: "Full cold & flu line: Vitamin C, Cortagrip and Mento Vick Hot Tea from INDUFAR" },
          },
        },
        "citytour-asu": {
          category: "Tourism",
          description: "Digital content design for tourist experiences in Asunción. Posts, stories and promotional material.",
          works: {
            "1": { title: "#TBT Tours", description: "Throwback of great tours around Asunción with groups of tourists" },
            "2": { title: "City Stories", description: "Every city holds stories worth telling — discover the oldest houses in Asunción" },
            "3": { title: "House of Independence", description: "The House of Independence, key site where Paraguay's freedom was forged in 1811" },
            "4": { title: "Independence History", description: "Historic tour of the House of Independence, museum and emblematic site of Asunción" },
            "5": { title: "Love Week", description: "2x1 City Tour for couples, Love Week in Asunción from Feb 10–13, 2026" },
          },
        },
        nevenhost: {
          category: "Web — Pilot Project",
          description: "Pilot web project for a real estate agency. Platform design with property listings, search and property sheets.",
          works: {
            "1": { title: "Main Hero", description: "'Your new home starts here' landing with an exclusive selection of houses and land for sale" },
            "2": { title: "Property Listing", description: "Catalog with filters by rooms, location and USD price range" },
            "3": { title: "Property Gallery", description: "Gallery with filters for exteriors, interiors and common areas with captivating images" },
          },
        },
        "farmacia-dosul": {
          category: "E-commerce — Pilot Project",
          description: "Pilot e-commerce project for a pharmacy. Online store design with product catalog and shopping cart.",
          works: {
            "1": { title: "Main Hero", description: "'Your Health, Our Priority' landing with 20+ years of trust and partner labs like INDUFAR and Éticos" },
            "2": { title: "Product Store", description: "Tirzepatide (T.G) catalog in different doses with prices in guaraníes and reais" },
            "3": { title: "Checkout", description: "Checkout flow with customer info, free shipping and order summary in guaraníes" },
          },
        },
        vitalx: {
          category: "Web — Pilot Project",
          description: "Pilot web platform project for a health and wellness brand. Informational site and e-commerce design.",
          works: {
            "1": { title: "Main Hero", description: "Landing page with 'Activate your X Version' hero slider — premium sports supplementation 100% online in Paraguay" },
            "2": { title: "Product Store", description: "E-commerce catalog with Tirzepatide products from INDUFAR and QUIMFA, prices in guaraníes and reais" },
            "3": { title: "Shopping Cart", description: "Cart flow with purchase summary, editable quantities and integrated checkout" },
          },
        },
      },
    },
    contact: {
      section: "Contact",
      question: "Ready to",
      highlight: "get started?",
      description: "Tell me about your project and receive a custom quote. I am ready to bring your vision to life, no matter your country or timezone.",
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
        messagePlaceholder: "Tell me about your project...",
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
      internationalNote: "🌍 I work with clients worldwide. Write to me in English or Spanish.",
      internationalCta: "Start international project",
    },
    footer: {
      description: "Design and web development with a unique identity from Ciudad del Este. I connect your vision with technology.",
      navigation: "Navigation",
      services: "Services",
      reserved: "© {year} east.dev — All rights reserved",
      location: "Ciudad del Este, Paraguay",
      phone: "+595 973213591",
      internationalNote: "Independent developer · International clients",
    },
    notFound: {
      title: "404",
      message: "Page not found",
      back: "Back to home",
    },
  },
  pt: {
    nav: {
      home: "Início",
      about: "Sobre mim",
      services: "Serviços",
      projects: "Projetos",
      portfolio: "Portfólio",
      featured: "Projetos",
      international: "Internacional",
      contact: "Contato",
      contactButton: "Fale comigo",
    },
    hero: {
      label: "Desenvolvimento web premium · Ciudad del Este",
      titleLine1: "A parceira",
      titleLine2: "criativa",
      subtitle: "para",
      description: "Design e desenvolvimento web com identidade própria. Crio experiências digitais que transformam marcas.",
      ctaProjects: "Ver Projetos",
      ctaContact: "Iniciar projeto",
      words: ["Diretores", "Designers", "Agências", "Marcas", "Startups"],
      marquee: ["DESENVOLVIMENTO WEB", "UI/UX DESIGN", "BRANDING", "MARKETING", "SEO", "E-COMMERCE"],
      internationalBadge: "🌍 Disponível para projetos internacionais e no Brasil",
      internationalCta: "Projeto internacional",
    },
    scrollReveal: {
      title: "",
      subtitle: "",
    },
    about: {
      section: "Sobre Mim",
      title: "A ponte entre a sua visão e a realidade digital",
      paragraph1: "A east.dev nasceu em Ciudad del Este, inspirada na icônica Ponte da Amizade. Conecto tecnologia e criatividade para dar vida a projetos web únicos.",
      paragraph2: "Cada projeto é uma oportunidade de construir pontes: entre a sua marca e seus clientes, entre o tradicional e o inovador.",
      paragraph3: "Trabalho lado a lado com empreendedores, pequenas e médias empresas e marcas que buscam se destacar no universo digital com soluções sob medida e design estratégico.",
      paragraph4: "Minha abordagem une código limpo, design contemporâneo e estratégia para entregar resultados de verdadeiro impacto.",
      paragraph5: "Direto do Paraguai, colaboro com clientes e equipes do Brasil e do mundo todo. Atuo de forma 100% remota com comunicação transparente, processos ágeis e entregas alinhadas ao seu fuso horário.",
    },
    services: {
      section: "Serviços",
      header: "Soluções completas para a sua presença digital",
      description: "Um conjunto completo de serviços planejados para elevar o nível da sua marca, com alcance no Brasil e internacional.",
      internationalNote: "Atendo remotamente clientes e equipes de qualquer país, com total facilidade para o Brasil.",
      items: [
        { title: "Desenvolvimento Web", description: "Sites e aplicações web responsivas construídas com as tecnologias mais modernas." },
        { title: "Design UI/UX", description: "Interfaces intuitivas e elegantes que elevam a experiência do usuário." },
        { title: "Branding Digital", description: "Identidade visual sólida e coerente que traduz a essência da sua marca." },
        { title: "Marketing Digital", description: "Estratégias estruturadas para expandir a sua visibilidade online." },
        { title: "Redes Sociais", description: "Gestão visual e estratégias de conteúdo para engajar e converter." },
        { title: "Desenvolvimento Front-end", description: "Interfaces fiéis ao layout, transformadas em código pixel-perfect." },
        { title: "SEO", description: "Otimização técnica para conquistar melhores posições no Google." },
        { title: "Otimização de Performance", description: "Aceleração de velocidade e aprimoramento de desempenho do site." },
      ],
    },
    projects: {
      section: "Projetos",
      subtitle: "Design With Purpose",
      subtitleAlt: "Build With Impact",
      header: "Projetos que falam por mim",
      projectSingular: "projeto",
      projectPlural: "projetos",
      categories: {
        gastronomia: {
          label: "Restaurantes & Gastronomia",
          projects: {
            "Hoplon Lounge": "Site sofisticado para lounge bar com módulo de reservas online e cardápio digital.",
            "La Mansa": "Plataforma gastronômica com sistema prático de pedidos e cardápio interativo.",
          },
        },
        ecommerce: {
          label: "E-commerce & Varejo",
          projects: {
            "Farma Next": "E-commerce farmacêutico completo com catálogo de produtos e vendas online.",
            "Farmacia Do Sul": "E-commerce farmacêutico com catálogo estruturado, carrinho de compras e checkout em guaranis.",
            "Black Colors": "E-commerce e landing page de impressão sustentável com catálogo e serviços de locação corporativa.",
            "Mania Group": "Loja virtual multimarcas: smartphones, vapes e perfumaria importada de luxo.",
          },
        },
        agro: {
          label: "Agro & Indústria",
          projects: {
            "SAISA": "Site institucional para serviços ambientais integrados, voltado a indústrias com foco em sustentabilidade e economia circular.",
            "CMP Agro": "Site corporativo de soluções tecnológicas para o agronegócio, com catálogo de produtos e marcas parceiras.",
          },
        },
        turismo: {
          label: "Turismo & Viagens",
          projects: {
            "Lleva Viajes": "Site para agência de viagens com catálogo completo de destinos e cotação de pacotes.",
          },
        },
      },
    },
    featuredProjects: {
      title: "Projetos que",
      titleHighlight: "se destacam",
      description: "Uma seleção de trabalhos em que estratégia, design e programação se encontram para gerar resultados concretos.",
      badge: "Projeto em Destaque",
      visitSite: "Acessar site",
      items: [
        {
          category: "E-commerce Farmacêutico",
          description: "Farmácia em Ciudad del Este focada em oferecer uma experiência de compra ágil tanto para clientes paraguaios quanto brasileiros. Um dos focos centrais foi viabilizar com facilidade as compras internacionais vindas do Brasil.",
          features: [
            "Gateway de pagamento integrado com PIX",
            "Catálogo completo de produtos",
            "Informações detalhadas sobre tratamentos",
            "Design 100% responsivo",
            "Experiência pensada para compradores brasileiros",
            "Integração direta com WhatsApp",
            "Otimizado para velocidade de carregamento e conversão",
          ],
        },
        {
          category: "Site Institucional · Agro",
          description: "Empresa do setor agropecuário para quem desenvolvi um site institucional que apresenta a história da empresa e seu portfólio de produtos com seriedade e clareza. O foco foi fortalecer a presença digital e facilitar o contato comercial.",
          features: [
            "Site institucional de alto padrão",
            "Catálogo estruturado de produtos e marcas",
            "Apresentação da atuação no agronegócio",
            "Canais e formulários de contato",
            "Design totalmente responsivo",
            "Otimização para mecanismos de busca (SEO)",
            "Navegação intuitiva e fluida",
          ],
        },
        {
          category: "Loja Virtual Multicategoria",
          description: "Empresa que confiou no meu trabalho para criar uma loja virtual completa para exibir e comercializar seu diversificado catálogo. Desenvolvi a plataforma para entregar uma navegação moderna e uma jornada de compra sem obstáculos.",
          features: [
            "Loja virtual completa e gerenciável",
            "Categorias: eletrônicos, perfumes, vapes e acessórios",
            "Mecanismo de busca instantânea",
            "Finalização de pedidos via WhatsApp",
            "Painel intuitivo de gerenciamento de estoque",
            "Design adaptado para celulares",
            "Processo de compra veloz",
          ],
        },
        {
          category: "Saúde · Site Institucional",
          description: "O setor médico também confia no meu trabalho de desenvolvimento. Desenvolvi a presença online do Sanatorio San Carlos (Coronel Oviedo, Caaguazú): um site moderno e acolhedor que apresenta corpo clínico, serviços e agendamentos para pacientes.",
          features: [
            "Apresentação de especialidades médicas",
            "Destaque para serviços e pronto atendimento",
            "Relação do corpo clínico e profissionais",
            "Canais de contato e agendamento descomplicado",
            "Interface adaptada para pacientes no celular",
            "Otimização para SEO local",
            "Navegação limpa e acessível",
          ],
        },
      ],
    },
    howWeWork: {
      section: "Como eu trabalho",
      subtitle: "Um processo",
      subtitleHighlight: "simples e direto",
      description: "Apresento passo a passo como transformo a sua ideia em realidade digital, sem enrolação ou termos técnicos complicados.",
      internationalNote: "Atendo remotamente clientes em qualquer país e fuso horário, com facilidade especial para o Brasil.",
      steps: [
        { number: "01", title: "Alinhamento", description: "Conversamos para entender o seu negócio, os desafios atuais e os objetivos que você quer alcançar.", points: ["Compreendo a sua visão", "Analiso o posicionamento da marca", "Definimos metas bem claras"] },
        { number: "02", title: "Design", description: "Elaboro os layouts visuais e um protótipo para você validar a experiência antes de começar a programar.", points: ["Interface desenhada sob medida", "Protótipo interativo para aprovação", "Refinamento antes do código"] },
        { number: "03", title: "Desenvolvimento", description: "Programo o seu site com código limpo e moderno, garantindo perfeição em celulares, tablets e computadores.", points: ["Desenvolvimento web moderno", "Otimização mobile prioritária", "Testes de usabilidade e performance"] },
        { number: "04", title: "Lançamento", description: "Publico a sua plataforma e fico ao seu lado para garantir que cada detalhe funcione perfeitamente desde o início.", points: ["Publicação oficial online", "Acompanhamento e suporte de estreia", "Melhorias e evolução contínua"] },
      ],
      ctaTitle: "Vamos tirar o seu projeto do papel?",
      ctaDescription: "Me mande uma mensagem contando sobre a sua ideia. Vou te ajudar a transformá-la em um site memorável e funcional.",
      ctaButton: "Começar agora",
    },
    smartOrder: {
      section: "Smart Order",
      badge: "Para restaurantes e gastronomia",
      title: "Pedidos online descomplicados para o seu restaurante",
      subtitle: "Venda mais sem taxas abusivas",
      description: "O Smart Order traz praticidade real para os seus clientes. Eles acessam, escolhem os produtos, montam o pedido e a comanda chega estruturada direto no WhatsApp do seu estabelecimento. Sem intermediários, sem comissões por venda e sem complicação.",
      features: [
        "Pedidos enviados diretamente ao WhatsApp",
        "Link perfeito para anúncios no Meta Ads",
        "Experiência prática direto pelo celular",
        "Livre de mensalidades e comissões abusivas",
        "Totalmente personalizado com o seu cardápio",
      ],
      cta: "Quero o Smart Order no meu restaurante",
      ctaNote: "Perfeito para pizzarias, hamburguerias, restaurantes, confeitarias e qualquer negócio gastronômico.",
      whatsappMessage: "Olá! Gostaria de ter o Smart Order no meu restaurante. Quero começar a receber pedidos organizados pelo WhatsApp.",
      imageAlt: "Smart Order em funcionamento: sistema de pedidos online para restaurantes",
      floatingCard: {
        title: "Novo pedido",
        time: "Agora",
        message: "O cliente finalizou a escolha e o pedido acabou de chegar organizado no seu WhatsApp.",
      },
    },
    internationalWorks: {
      section: "Trabalhos Internacionais",
      badge: "Clientes nos Estados Unidos",
      title: "Desenvolvo sites com agendamento",
      titleAlt: "para profissionais que atuam no exterior",
      description: "Atendo clientes internacionais criando sites que funcionam como cartão de visitas de alto padrão e ao mesmo tempo permitem reservas diretas de horários e serviços, acabando com trocas cansativas de mensagens.",
      caseLocation: "Park City, Utah · EUA",
      caseName: "Chef David Sánchez",
      caseTitle: "Um site pensado para comercializar experiências exclusivas",
      caseDescription: "Desenvolvi para o chef David Sánchez uma plataforma sofisticada que expõe seu trabalho de chef particular em Park City, Utah, permitindo que os clientes reservem banquetes e jantares exclusivos em casa com poucos cliques. Menos atrito comercial, mais reservas confirmadas.",
      features: [
        "Módulo de agendamento online totalmente integrado",
        "Apresentação premium de menus e serviços exclusivos",
        "Arquitetura bilíngue pronta para públicos globais (ES / EN)",
      ],
      cta: "Quero um site com agendamento integrado",
      ctaNote: "Indicado para personal chefs, consultores, fotógrafos, terapeutas, clínicas e prestadores de serviços com atendimento agendado.",
      whatsappMessage: "Olá! Gostaria de um site com sistema de agendamento para divulgar meus serviços, com a qualidade da plataforma desenvolvida para o chef David Sánchez.",
      imageAlt: "Site institucional do chef David Sánchez em Park City, Utah",
    },
    team: {
      section: "Por que escolher a east.dev?",
      answer: "Porque como desenvolvedora independente, uno design visual, engenharia de software e visão de negócios em um atendimento próximo e personalizado. Conduzo projetos remotos com prazos pontuais, código limpo e arquitetura pensada para trazer retorno real: mais clientes, mais vendas e autoridade absoluta para a sua marca.",
    },
    portfolio: {
      sectionLabel: "Portfólio de Design Digital",
      headerTitleLine1: "Criativos que",
      headerTitleLine2: "conectam marcas",
      headerDescription: "Criação de posts, stories, carrosséis e identidades visuais para mídias digitais. Cada detalhe é desenhado para traduzir com originalidade a força de cada negócio.",
      ctaTitle: "Precisa renovar o visual da sua marca?",
      ctaDescription: "Crio materiais visuais sob medida que comunicam com clareza o diferencial do seu negócio.",
      ctaButton: "Solicitar orçamento",
      filterAll: "Todos",
      pieces: "peças",
      imageComingSoon: "Imagem em breve",
      workTypes: {
        "Post Instagram": "Post Instagram",
        "Carousel": "Carrossel",
        "Story": "Story",
        "Branding": "Branding",
        "Web Design": "Web Design",
      },
      clients: {
        llevaviajes: {
          category: "Turismo & Viagens",
          description: "Direção de arte e criativos digitais para agência de viagens. Design de posts, promoções e campanhas comemorativas.",
          works: {
            "1": { title: "Conheça o Novo Site", description: "Divulgação do novo portal oficial da Lleva Viajes celebrando 15 anos de trajetória" },
            "2": { title: "Serviços Exclusivos", description: "Campanha de serviços especiais: pacotes 2x1, roteiros em grupo e destination weddings" },
            "3": { title: "Destinos Brasil 2026", description: "Pacotes turísticos para Natal, Rio de Janeiro e Porto de Galinhas a partir de 980 USD" },
            "4": { title: "Salvador Bahia", description: "Promoção Semana Santa 2026 para Salvador, 7 noites a partir de 7.300.000 Gs" },
            "5": { title: "Vision Board Colômbia", description: "Roteiro exclusivo pela Colômbia: Eixo Cafeeiro, Ilha de San Andrés e Cartagena" },
          },
        },
        farmanext: {
          category: "Farmácia & E-commerce",
          description: "Design digital contínuo para farmácia online. Criação de criativos promocionais, identidade visual e lançamentos para redes sociais.",
          works: {
            "1": { title: "Lander Bar Protein", description: "Barra proteica Lander Bar sabor Doce de Leite, 15g de proteína, sem glúten e zero colesterol" },
            "2": { title: "As Mais Desejadas", description: "Campanha semanal com itens a partir de 449 R$ em medicamentos, dermocosméticos e importados" },
            "3": { title: "Linha Masculina LACA", description: "Divulgação da nova linha masculina do Laboratório LACA voltada a cuidados faciais diários" },
            "4": { title: "Farma Ofertas", description: "Ação Farma Ofertas trazendo até 50% OFF em remédios, vitaminas, cosméticos e linhas importadas" },
            "5": { title: "Páscoa Saudável", description: "Campanha especial de Páscoa com sorteios e promoções de chocolates funcionais" },
            "6": { title: "Melatonin Sleep", description: "Melatonina 10mg LanderFit para noites de sono restaurador e equilíbrio mental" },
            "7": { title: "Mento Vick Esportivo", description: "Pomada relaxante Mento Vick, fórmula anti-inflamatória para recuperação muscular pós-treino" },
            "8": { title: "Linha Antigripal", description: "Portfólio antigripal completo: Vitamina C, Cortagrip e Mento Vick Chá Quente da INDUFAR" },
          },
        },
        "citytour-asu": {
          category: "Turismo",
          description: "Identidade e peças digitais para passeios e tours históricos por Assunção. Publicações informativas, stories e campanhas.",
          works: {
            "1": { title: "#TBT Passeios Históricos", description: "Lembrança de grandes passeios culturais guiados pelo centro histórico de Assunção" },
            "2": { title: "Memórias da Cidade", description: "Narrativas sobre o patrimônio histórico e as construções mais antigas da capital paraguaia" },
            "3": { title: "Casa da Independência", description: "Homenagem ao local histórico onde foram dados os primeiros passos da emancipação do Paraguai em 1811" },
            "4": { title: "Circuito da Independência", description: "Roteiro guiado educativo pelas salas do Museu da Casa da Independência" },
            "5": { title: "Semana dos Namorados", description: "Ação especial City Tour 2x1 para casais em Assunção, de 10 a 13 de fevereiro de 2026" },
          },
        },
        nevenhost: {
          category: "Web — Projeto Piloto",
          description: "Projeto conceitual de portal imobiliário. Criação de interface com busca avançada, filtros dinâmicos e páginas individuais de imóveis.",
          works: {
            "1": { title: "Hero Principal", description: "Seção principal 'Aqui começa o seu novo lar' destacando imóveis e terrenos de alto padrão" },
            "2": { title: "Listagem de Imóveis", description: "Painel de busca com filtros por quantidade de quartos, bairro e valores em USD" },
            "3": { title: "Galeria do Imóvel", description: "Apresentação visual com filtros para áreas externas, cômodos internos e áreas de lazer" },
          },
        },
        "farmacia-dosul": {
          category: "E-commerce — Projeto Piloto",
          description: "Projeto piloto de loja online farmacêutica. Desenvolvimento de vitrine digital de medicamentos, carrinho dinâmico e checkout fluido.",
          works: {
            "1": { title: "Hero Principal", description: "Página inicial 'Sua Saúde, Nossa Prioridade' destacando mais de 20 anos de mercado e parcerias com INDUFAR e Éticos" },
            "2": { title: "Catálogo de Medicamentos", description: "Vitrine do medicamento Tirzepatida (T.G) em dosagens variadas com visualização em guaranis e reais" },
            "3": { title: "Fluxo de Checkout", description: "Etapa de finalização simples com dados de entrega, frete cortesia e resumo em guaranis" },
          },
        },
        vitalx: {
          category: "Web — Projeto Piloto",
          description: "Projeto piloto de plataforma digital voltada à saúde integrada e suplementação. Estrutura institucional associada a módulo de vendas.",
          works: {
            "1": { title: "Hero Principal", description: "Banner imersivo 'Ative a sua Versão X', apresentando suplementos de alto rendimento 100% online no Paraguai" },
            "2": { title: "Catálogo da Loja", description: "Produtos Tirzepatida dos conceituados laboratórios INDUFAR e QUIMFA, cotados em guaranis e reais" },
            "3": { title: "Carrinho de Compras", description: "Visualização rápida de pedidos com edição de itens selecionados e direcionamento ao pagamento" },
          },
        },
      },
    },
    contact: {
      section: "Contato",
      question: "Pronto para",
      highlight: "começar?",
      description: "Me conte sobre a sua ideia e receba uma estimativa detalhada sem compromisso. Estou preparada para dar vida ao seu projeto, esteja você no Paraguai, no Brasil ou em qualquer outro país.",
      emailLabel: "E-mail",
      locationLabel: "Localização",
      email: "east.devpy@gmail.com",
      location: "Ciudad del Este, Paraguai",
      form: {
        name: "Nome",
        email: "E-mail",
        project: "Tipo de Projeto",
        budget: "Orçamento planejado",
        message: "Mensagem",
        namePlaceholder: "Seu nome",
        emailPlaceholder: "seu@email.com",
        projectPlaceholder: "Selecione o tipo de projeto...",
        budgetPlaceholder: "Selecione a faixa de investimento...",
        messagePlaceholder: "Me conte sobre o seu negócio e os seus objetivos...",
        submit: "Enviar mensagem",
      },
      projectOptions: {
        website: "Site Institucional",
        ecommerce: "E-commerce",
        webapp: "Aplicação Web",
        landing: "Landing Page",
        redesign: "Redesign de Site",
      },
      budgetOptions: {
        "500-1000": "$500 - $1,000",
        "1000-2500": "$1,000 - $2,500",
        "2500-5000": "$2,500 - $5,000",
        "5000+": "$5,000+",
      },
      whatsapp: {
        greeting: "👋 Olá! Sou *{name}*",
        details: "📋 *Detalhes do projeto:*",
        typeLabel: "• Tipo: {project}",
        budgetLabel: "• Orçamento: {budget}",
        messageLabel: "💬 *Mensagem:*",
      },
      internationalNote: "🌍 Atendo clientes em escala internacional e com muita facilidade no Brasil. Pode me escrever em português ou espanhol.",
      internationalCta: "Iniciar projeto internacional",
    },
    footer: {
      description: "Design e desenvolvimento web com identidade própria direto de Ciudad del Este. Conecto a sua marca com o futuro digital.",
      navigation: "Navegação",
      services: "Serviços",
      reserved: "© {year} east.dev — Todos os direitos reservados",
      location: "Ciudad del Este, Paraguai",
      phone: "+595 973213591",
      internationalNote: "Desenvolvedora independente · Atendimento no Brasil e no exterior",
    },
    notFound: {
      title: "404",
      message: "Página não encontrada",
      back: "Voltar ao início",
    },
  },
};

interface I18nContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string, params?: Record<string, string>) => any;
}

const LanguageContext = createContext<I18nContextValue | undefined>(undefined);

const getTranslation = (locale: Locale, key: string): any => {
  return key.split('.').reduce<any>((acc, part) => {
    if (acc && typeof acc === 'object' && part in acc) {
      return acc[part];
    }
    return acc;
  }, translations[locale]);
};

const interpolate = (value: string, params?: Record<string, string>) => {
  if (!params) return value;
  return Object.entries(params).reduce(
    (text, [param, replacement]) => text.replace(new RegExp(`\\{${param}\\}`, 'g'), replacement),
    value,
  );
};

// Spanish is always the default (so Google indexes Spanish); English only when the visitor picks it.
const getInitialLocale = (): Locale => {
  if (typeof window === "undefined") return "es";
  return localStorage.getItem("locale") === "en" ? "en" : "es";
};

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [locale, setLocale] = useState<Locale>(getInitialLocale);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("locale", locale);
      document.documentElement.lang = locale;
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
