import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

type Locale = "es" | "en";

type TranslationValue = string | string[] | Record<string, any> | any[];

const translations: Record<Locale, Record<string, any>> = {
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
      marquee: ["DESARROLLO WEB", "UI/UX DESIGN", "BRANDING", "MARKETING", "SEO", "E-COMMERCE"],
      internationalBadge: "🌍 Disponible para proyectos internacionales",
      internationalCta: "Proyecto internacional",
    },
    about: {
      section: "Sobre Nosotros",
      title: "El puente entre tu visión y la realidad digital",
      paragraph1: "east.dev nació en Ciudad del Este, inspirada en el icónico Puente de la Amistad. Conectamos tecnología y creatividad para dar vida a proyectos web únicos.",
      paragraph2: "Cada proyecto es una oportunidad de construir puentes: entre tu marca y tus clientes, entre lo tradicional y lo innovador.",
      paragraph3: "Trabajamos codo a codo con emprendedores, pymes y marcas que buscan destacar en el mundo digital con soluciones a medida y diseño con propósito.",
      paragraph4: "Nuestro enfoque combina código limpio, diseño moderno y estrategia para entregar resultados que impactan.",
      paragraph5: "Desde Paraguay colaboramos con equipos de todo el mundo. Trabajamos de forma remota con comunicación clara, procesos ágiles y entregas que se adaptan a tu zona horaria.",
    },
    services: {
      section: "Servicios",
      header: "Soluciones completas para tu presencia digital",
      description: "Un conjunto integral de servicios diseñados para llevar tu marca al siguiente nivel, con alcance internacional.",
      internationalNote: "Trabajamos de forma remota con equipos y clientes de cualquier país.",
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
      header: "Trabajos que hablan por nosotros",
      prototypesLabel: "Prototipos Web",
      prototypeAction: "Ver prototipo",
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
      prototypes: {
        "Lleva Elite Journeys": "Prototipo de plataforma de viajes premium con experiencias exclusivas.",
        "YoCreo": "Prototipo de hub digital con diseño moderno y accesible.",
      },
    },
    howWeWork: {
      section: "¿Cómo trabajamos?",
      subtitle: "Así lo hacemos",
      subtitleHighlight: "simple y claro",
      description: "Te contamos paso a paso cómo llevamos tu idea a la web, sin tecnicismos ni complicaciones.",
      internationalNote: "Trabajamos de forma remota con clientes en cualquier país y zona horaria.",
      steps: [
        { number: "01", title: "Conversamos", description: "Nos reunimos para conocer tu negocio, lo que necesitas y qué quieres lograr.", points: ["Escuchamos tu idea", "Revisamos tu marca", "Definimos objetivos claros"] },
        { number: "02", title: "Diseñamos", description: "Preparamos bocetos y una versión de prueba para que veas cómo quedará antes de construir.", points: ["Diseño a tu medida", "Prototipo visual", "Ajustes antes de programar"] },
        { number: "03", title: "Construimos", description: "Programamos tu sitio para que se vea bien en celular, tablet y computadora.", points: ["Desarrollo web", "Versión móvil incluida", "Pruebas de funcionamiento"] },
        { number: "04", title: "Lanzamos", description: "Publicamos tu sitio y te acompañamos para que todo funcione bien desde el primer día.", points: ["Publicación online", "Soporte inicial", "Mejoras continuas"] },
      ],
      ctaTitle: "¿Querés que trabajemos juntos?",
      ctaDescription: "Escribinos y contanos tu idea. Te ayudamos a llevarla a la web de forma clara y sin vueltas.",
      ctaButton: "Empezar ahora",
    },
    seoClients: {
      section: "SEO",
      title: "¿Cómo consiguen tantos clientes?",
      description: "La mayoría de los estudios que crecen combinan varios canales. El SEO es uno de los más poderosos: escriben contenido útil que responde lo que sus clientes ideales buscan en Google, y así los encuentran todos los días sin pagar publicidad.",
      statLabel: "Clientes vía SEO",
      statDescription: "De los nuevos clientes de un estudio web suelen llegar directamente desde búsquedas orgánicas en Google.",
      internationalTitle: "Alcance internacional sin fronteras",
      internationalDescription: "Un artículo bien posicionado puede traerte consultas de Estados Unidos, Europa o cualquier país donde hables el mismo idioma que tu cliente. Trabajamos en español e inglés para ampliar ese alcance.",
      articlesTitle: "Ejemplos de artículos que atraen clientes",
      articles: [
        "Best Shopify Developers",
        "How Much Does a Website Cost?",
        "Custom Web Development in Utah",
        "Best Web Design Company",
      ],
      articlesNote: "Cuando alguien busca estos términos, el estudio que aparece primero recibe la consulta. Esa es la ventaja del SEO.",
      cta: "Quiero que east.dev me ayude con SEO",
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
    team: {
      section: "Por Qué Elegir a east.dev",
      title: "Conoce a tu socio digital",
      titleAlt: "para diseño y desarrollo web",
      description: "Como diseñadores web y digitales, estrategas y creadores de contenido, desarrollamos proyectos con foco en branding, experiencia de usuario, rendimiento y resultados comerciales.",
      stats: { projects: "Proyectos Completados", clients: "Clientes Satisfechos", team: "Equipo" },
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
      description: "Cuéntanos sobre tu proyecto y recibe una cotización personalizada. Estamos listos para dar vida a tu visión, sin importar tu país o zona horaria.",
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
        "5000+": "$5,000+",
      },
      whatsapp: {
        greeting: "👋 ¡Hola! Soy *{name}*",
        details: "📋 *Detalles del proyecto:*",
        typeLabel: "• Tipo: {project}",
        budgetLabel: "• Presupuesto: {budget}",
        messageLabel: "💬 *Mensaje:*",
      },
      internationalNote: "🌍 Trabajamos con clientes de todo el mundo. Escríbenos en español o inglés.",
      internationalCta: "Iniciar proyecto internacional",
    },
    footer: {
      description: "Diseño y desarrollo web con identidad propia desde Ciudad del Este. Conectamos tu visión con la tecnología.",
      navigation: "Navegación",
      services: "Servicios",
      reserved: "© {year} east.dev — Todos los derechos reservados",
      location: "Ciudad del Este, Paraguay",
      phone: "+595 973213591",
      internationalNote: "Estudio remoto · Clientes internacionales",
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
      marquee: ["WEB DEVELOPMENT", "UI/UX DESIGN", "BRANDING", "MARKETING", "SEO", "E-COMMERCE"],
      internationalBadge: "🌍 Available for international projects",
      internationalCta: "International project",
    },
    about: {
      section: "About Us",
      title: "The bridge between your vision and digital reality",
      paragraph1: "east.dev was born in Ciudad del Este, inspired by the iconic Friendship Bridge. We connect technology and creativity to bring unique web projects to life.",
      paragraph2: "Each project is an opportunity to build bridges: between your brand and your customers, between the traditional and the innovative.",
      paragraph3: "We work side by side with entrepreneurs, SMEs and brands seeking to stand out in the digital world with tailored solutions and purposeful design.",
      paragraph4: "Our approach combines clean code, modern design and strategy to deliver results that make an impact.",
      paragraph5: "From Paraguay we collaborate with teams around the world. We work remotely with clear communication, agile processes and deliveries adapted to your timezone.",
    },
    services: {
      section: "Services",
      header: "Complete solutions for your digital presence",
      description: "A comprehensive set of services designed to take your brand to the next level, available for international clients.",
      internationalNote: "We work remotely with teams and clients from any country.",
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
      header: "Work that speaks for us",
      prototypesLabel: "Web Prototypes",
      prototypeAction: "See prototype",
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
      prototypes: {
        "Lleva Elite Journeys": "Prototype of a premium travel platform with exclusive experiences.",
        "YoCreo": "Prototype of a digital hub with a modern, accessible design.",
      },
    },
    howWeWork: {
      section: "How We Work",
      subtitle: "How we do it",
      subtitleHighlight: "simple and clear",
      description: "Here's a step-by-step look at how we turn your idea into a website, without jargon or complexity.",
      internationalNote: "We work remotely with clients in any country and timezone.",
      steps: [
        { number: "01", title: "We talk", description: "We meet to learn about your business, what you need, and what you want to achieve.", points: ["We listen to your idea", "We review your brand", "We set clear goals"] },
        { number: "02", title: "We design", description: "We prepare sketches and a test version so you can see how it will look before we build it.", points: ["Custom design", "Visual prototype", "Revisions before coding"] },
        { number: "03", title: "We build", description: "We code your site so it looks great on phone, tablet, and desktop.", points: ["Web development", "Mobile version included", "Functionality testing"] },
        { number: "04", title: "We launch", description: "We publish your site and support you so everything works well from day one.", points: ["Go live online", "Initial support", "Continuous improvements"] },
      ],
      ctaTitle: "Want to work together?",
      ctaDescription: "Write to us and tell us your idea. We'll help you take it to the web clearly and without hassle.",
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
    team: {
      section: "Why Choose east.dev",
      title: "Meet your digital partner",
      titleAlt: "for web design and development",
      description: "As web and digital designers, strategists and content creators, we build projects focused on branding, UX, performance and measurable outcomes.",
      stats: { projects: "Projects Completed", clients: "Satisfied Clients", team: "Team" },
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
      description: "Tell us about your project and receive a custom quote. We are ready to bring your vision to life, no matter your country or timezone.",
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
      internationalNote: "🌍 We work with clients worldwide. Write to us in English or Spanish.",
      internationalCta: "Start international project",
    },
    footer: {
      description: "Design and web development with a unique identity from Ciudad del Este. We connect your vision with technology.",
      navigation: "Navigation",
      services: "Services",
      reserved: "© {year} east.dev — All rights reserved",
      location: "Ciudad del Este, Paraguay",
      phone: "+595 973213591",
      internationalNote: "Remote studio · International clients",
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
