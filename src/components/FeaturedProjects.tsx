import { motion } from "framer-motion";
import { useTranslation } from "@/hooks/use-i18n";
import farmanextVideo from "@/assets/farmanextxeast.dev.mp4.asset.json";
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
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1, ease: "easeOut" as const } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const ProjectMedia = ({ project }: { project: FeaturedProject }) => (
  <motion.div
    variants={scaleIn}
    className="group relative rounded-2xl sm:rounded-3xl overflow-hidden border border-mist/20 bg-snow/5 aspect-[16/9] shadow-card-hover hover:shadow-brand-glow transition-all duration-700"
  >
    {project.videoSrc ? (
      <video
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
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
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        loading="lazy"
      />
    )}
    <div className="absolute inset-0 ring-1 ring-inset ring-snow/5 rounded-2xl sm:rounded-3xl pointer-events-none" />
    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
  </motion.div>
);

const ProjectContent = ({
  project,
  index,
  translated,
  badgeLabel,
  visitLabel,
}: {
  project: FeaturedProject;
  index: number;
  translated?: { category?: string; description?: string; features?: string[] };
  badgeLabel: string;
  visitLabel: string;
}) => {
  const featureLabels = translated?.features && translated.features.length === project.features.length
    ? translated.features
    : project.features.map((f) => f.label);
  return (
  <motion.div variants={stagger} className="flex flex-col relative z-10">
    <motion.span
      variants={fadeUp}
      className="text-xs font-mono text-mist/70 tracking-[0.3em] uppercase mb-5"
    >
      {badgeLabel} · 0{index + 1}
    </motion.span>

    <motion.span
      variants={fadeUp}
      className="inline-flex self-start items-center gap-2 px-4 py-1.5 rounded-full bg-mist/20 text-mist text-xs sm:text-sm font-medium mb-6"
    >
      {translated?.category ?? project.category}
    </motion.span>

    <motion.h3
      variants={fadeUp}
      className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-[1.05] mb-6"
    >
      {project.name}
    </motion.h3>

    <motion.p variants={fadeUp} className="text-base sm:text-lg text-mist/80 leading-relaxed mb-10 max-w-xl">
      {translated?.description ?? project.description}
    </motion.p>

    <motion.ul variants={stagger} className="grid sm:grid-cols-2 gap-4 mb-10">
      {project.features.map((f, i) => (
        <motion.li
          key={i}
          variants={fadeUp}
          className="flex items-start gap-3 text-sm text-snow/90"
        >
          <span className="w-9 h-9 rounded-xl bg-mist/20 flex items-center justify-center shrink-0">
            <f.icon className="w-4 h-4 text-mist" />
          </span>
          <span className="pt-1.5 leading-snug">{featureLabels[i]}</span>
        </motion.li>
      ))}
    </motion.ul>

    {project.tech && project.tech.length > 0 && (
      <motion.div variants={fadeUp} className="flex flex-wrap gap-2 mb-10">
        {project.tech.map((t) => (
          <span
            key={t}
            className="px-3 py-1 rounded-full border border-mist/30 text-xs font-mono text-mist/80"
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
          className="group inline-flex items-center gap-2 px-7 py-3.5 bg-brand hover:bg-brand/90 text-brand-foreground rounded-xl font-medium transition-all hover:shadow-brand-glow"
        >
          {visitLabel}
          <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </motion.div>
    )}
  </motion.div>
  );
};

export const FeaturedProjects = () => {
  const { t } = useTranslation();
  const translatedItems = (t("featuredProjects.items") as Array<{ category: string; description: string; features: string[] }>) || [];
  const badgeLabel = (t("featuredProjects.badge") as string) || "Featured Project";
  const visitLabel = (t("featuredProjects.visitSite") as string) || "Visit site";
  return (
    <section
      id="proyectos-estrella"
      className="section-padding relative overflow-hidden bg-navy-dark"
    >
      {/* Dramatic background layers */}
      <div className="absolute inset-0 bg-featured pointer-events-none" />
      <div className="absolute inset-0 bg-noise opacity-[0.04] pointer-events-none mix-blend-overlay" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric/40 to-transparent" />

      {/* Header glow orb */}
      <div
        className="glow-orb w-[70vw] h-[50vh] top-0 left-1/2 -translate-x-1/2 bg-electric/25"
        aria-hidden="true"
      />


      <div className="container-wide relative z-10">
        {/* Section Label */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeIn}
          className="flex items-center gap-4 mb-14"
        >
          <span className="text-xs font-medium text-mist/70 tracking-[0.3em] uppercase">
            {t("nav.featured")}
          </span>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-mist/40 to-transparent" />
        </motion.div>

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="max-w-5xl mb-24 sm:mb-32 lg:mb-40"
        >
          <motion.h2
            variants={fadeUp}
            className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-display font-bold leading-[0.95] mb-8"
          >
            {t("featuredProjects.title")}{" "}
            <span className="text-gradient">{t("featuredProjects.titleHighlight")}</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-xl sm:text-2xl lg:text-3xl text-mist/80 font-light max-w-3xl leading-relaxed"
          >
            {t("featuredProjects.description")}
          </motion.p>
        </motion.div>

        {/* Zigzag projects */}
        <div className="relative space-y-32 sm:space-y-44 lg:space-y-56">
          {/* Vertical connecting line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-mist/30 to-transparent hidden lg:block" />

          {featuredProjects.map((project, index) => {
            const reversed = index % 2 === 1;
            return (
              <motion.article
                key={project.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-120px" }}
                variants={stagger}
                className="relative grid lg:grid-cols-2 gap-12 lg:gap-20 xl:gap-28 items-center"
              >
                {/* Ambient glow orb per project */}
                <div
                  className={`glow-orb w-[45vw] h-[35vh] top-1/2 -translate-y-1/2 ${
                    reversed ? "-left-[10vw] bg-electric/20" : "-right-[10vw] bg-primary/15"
                  }`}
                  aria-hidden="true"
                />

                {/* Giant decorative index */}
                <div
                  className={`absolute -top-20 sm:-top-28 lg:-top-32 font-display font-bold text-[8rem] sm:text-[10rem] lg:text-[14rem] leading-none text-snow/[0.04] select-none pointer-events-none z-0 ${
                    reversed ? "lg:left-0 lg:text-left" : "lg:right-0 lg:text-right"
                  }`}
                  aria-hidden="true"
                >
                  0{index + 1}
                </div>

                <motion.div
                  variants={fadeUp}
                  className={`relative z-10 ${reversed ? "lg:order-2" : "lg:order-1"}`}
                >
                  <ProjectMedia project={project} />
                </motion.div>
                <div className={`relative z-10 ${reversed ? "lg:order-1" : "lg:order-2"}`}>
                  <ProjectContent project={project} index={index} translated={translatedItems[index]} badgeLabel={badgeLabel} visitLabel={visitLabel} />
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

