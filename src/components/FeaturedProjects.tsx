import { motion } from "framer-motion";
import { useTranslation } from "@/hooks/use-i18n";
import {
  ArrowUpRight,
  CreditCard,
  Package,
  Smartphone,
  Zap,
  MessageCircle,
  Search,
  ShoppingCart,
  Layers,
  Building2,
  Mail,
  Sparkles,
  Globe,
  Gauge,
  Leaf,
  type LucideIcon,
} from "lucide-react";

/**
 * Sección editable de Proyectos Estrella (Farma Next, CMP, Mania Group).
 * Para cambiar video/textos/features, edita simplemente el array `featuredProjects`.
 * - `videoSrc`: URL del video (.mp4/.webm). Si está vacío, se muestra el poster.
 * - `poster`: imagen de fallback mientras carga o si no hay video.
 */

type Feature = { icon: LucideIcon; label: string };

type FeaturedProject = {
  name: string;
  category: string;
  description: string;
  features: Feature[];
  tech?: string[];
  url?: string;
  videoSrc?: string;
  poster: string;
};

const featuredProjects: FeaturedProject[] = [
  {
    name: "Farma Next",
    category: "E-commerce Farmacéutico",
    description:
      "Farmacia en Ciudad del Este especializada en brindar una experiencia de compra simple para clientes paraguayos y brasileños. Uno de los objetivos principales fue facilitar las compras internacionales desde Brasil.",
    features: [
      { icon: CreditCard, label: "Pasarela de pago con PIX" },
      { icon: Package, label: "Catálogo completo de productos" },
      { icon: Sparkles, label: "Información detallada de tratamientos" },
      { icon: Smartphone, label: "Diseño 100% responsive" },
      { icon: Globe, label: "Optimización para clientes brasileños" },
      { icon: MessageCircle, label: "Integración con WhatsApp" },
      { icon: Gauge, label: "Optimizado para velocidad y conversión" },
    ],
    tech: ["Next.js", "Stripe", "PIX", "Tailwind"],
    url: "https://www.farmanext.com.py",
    videoSrc: "",
    poster: "/farmanext/farmanexthero.png",
  },
  {
    name: "CMP Agro",
    category: "Sitio Institucional · Agro",
    description:
      "Empresa del sector agrario para la que desarrollamos un sitio web institucional que presenta la compañía y exhibe sus productos de forma clara y profesional. El objetivo fue generar presencia digital y facilitar el contacto con nuevos clientes.",
    features: [
      { icon: Building2, label: "Sitio institucional profesional" },
      { icon: Package, label: "Catálogo de productos y marcas" },
      { icon: Leaf, label: "Presentación del agro-negocio" },
      { icon: Mail, label: "Formularios de contacto" },
      { icon: Smartphone, label: "Diseño responsive" },
      { icon: Search, label: "Optimización SEO" },
      { icon: Layers, label: "Navegación sencilla e intuitiva" },
    ],
    tech: ["React", "Vite", "SEO", "Tailwind"],
    url: "https://cmpagro.com.py/",
    videoSrc: "",
    poster: "/cmpagro/hero.png",
  },
  {
    name: "Mania Group",
    category: "Tienda Online Multi-categoría",
    description:
      "Empresa que eligió desarrollar una tienda online completa para mostrar y comercializar su amplio catálogo. La plataforma fue diseñada para ofrecer una experiencia moderna y facilitar todo el proceso de compra.",
    features: [
      { icon: ShoppingCart, label: "Tienda online completa" },
      { icon: Layers, label: "Categorías: electrónica, perfumes, vapes, accesorios" },
      { icon: Search, label: "Buscador de productos" },
      { icon: MessageCircle, label: "WhatsApp para finalizar pedidos" },
      { icon: Package, label: "Panel de administración de productos" },
      { icon: Smartphone, label: "Diseño responsive" },
      { icon: Zap, label: "Experiencia de compra rápida" },
    ],
    tech: ["Next.js", "CMS", "WhatsApp API"],
    url: "https://www.maniagroup.com.py/",
    videoSrc: "",
    poster: "/maniagroup/hero.png",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const ProjectMedia = ({ project }: { project: FeaturedProject }) => (
  <div className="relative rounded-2xl overflow-hidden border border-border/40 bg-card/40 aspect-[16/10] shadow-card-hover">
    {project.videoSrc ? (
      <video
        className="w-full h-full object-cover"
        src={project.videoSrc}
        poster={project.poster}
        autoPlay
        muted
        loop
        playsInline
        controls
      />
    ) : (
      <img
        src={project.poster}
        alt={project.name}
        className="w-full h-full object-cover"
        loading="lazy"
      />
    )}
    <div className="absolute inset-0 ring-1 ring-inset ring-white/5 rounded-2xl pointer-events-none" />
  </div>
);

const ProjectContent = ({ project, index }: { project: FeaturedProject; index: number }) => (
  <motion.div variants={stagger} className="flex flex-col">
    <motion.span
      variants={fadeUp}
      className="text-xs font-mono text-muted-foreground tracking-[0.3em] uppercase mb-4"
    >
      Proyecto Estrella · 0{index + 1}
    </motion.span>

    <motion.span
      variants={fadeUp}
      className="inline-flex self-start items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-5"
    >
      {project.category}
    </motion.span>

    <motion.h3
      variants={fadeUp}
      className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold leading-[1.05] mb-5"
    >
      {project.name}
    </motion.h3>

    <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed mb-8">
      {project.description}
    </motion.p>

    <motion.ul variants={stagger} className="grid sm:grid-cols-2 gap-3 mb-8">
      {project.features.map((f) => (
        <motion.li
          key={f.label}
          variants={fadeUp}
          className="flex items-start gap-3 text-sm text-foreground/80"
        >
          <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
            <f.icon className="w-4 h-4 text-primary" />
          </span>
          <span className="pt-1.5 leading-snug">{f.label}</span>
        </motion.li>
      ))}
    </motion.ul>

    {project.tech && project.tech.length > 0 && (
      <motion.div variants={fadeUp} className="flex flex-wrap gap-2 mb-8">
        {project.tech.map((t) => (
          <span
            key={t}
            className="px-3 py-1 rounded-full border border-border/60 text-xs font-mono text-muted-foreground"
          >
            {t}
          </span>
        ))}
      </motion.div>
    )}

    {project.url && (
      <motion.div variants={fadeUp}>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-medium transition-all hover:shadow-glow"
        >
          Visitar sitio
          <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </motion.div>
    )}
  </motion.div>
);

export const FeaturedProjects = () => {
  const { t } = useTranslation();
  return (
    <section
      id="proyectos-estrella"
      className="section-padding relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Section Label */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-xs font-medium text-muted-foreground tracking-[0.3em] uppercase">
            {t("nav.featured")}
          </span>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-border to-transparent" />
        </div>

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="max-w-4xl mb-20 sm:mb-28"
        >
          <motion.h2
            variants={fadeUp}
            className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold leading-[1.05] mb-6"
          >
            {t("featuredProjects.title")}{" "}
            <span className="text-gradient">{t("featuredProjects.titleHighlight")}</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-xl sm:text-2xl text-muted-foreground font-light max-w-2xl"
          >
            {t("featuredProjects.description")}
          </motion.p>
        </motion.div>

        {/* Zigzag projects */}
        <div className="space-y-28 sm:space-y-40">
          {featuredProjects.map((project, index) => {
            const reversed = index % 2 === 1;
            return (
              <motion.article
                key={project.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={stagger}
                className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
              >
                <motion.div
                  variants={fadeUp}
                  className={reversed ? "lg:order-2" : "lg:order-1"}
                >
                  <ProjectMedia project={project} />
                </motion.div>
                <div className={reversed ? "lg:order-1" : "lg:order-2"}>
                  <ProjectContent project={project} index={index} />
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
