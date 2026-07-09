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
import { useTranslation } from "@/hooks/use-i18n";

const serviceIcons = [Globe, Paintbrush, Layers, Megaphone, Share2, Code, Search, Zap];

export const Services = () => {
  const { t } = useTranslation();
  const services = (t("services.items") as { title: string; description: string }[]).map((item, index) => ({
    icon: serviceIcons[index],
    ...item,
  }));
  return (
    <section id="servicios" className="section-padding relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand/10 to-transparent" />
      
      <div className="container-custom relative z-10">
        {/* Section Label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-xs font-medium text-muted-foreground tracking-[0.3em] uppercase">
            {t("services.section")}
          </span>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-border to-transparent" />
        </div>

        {/* Header */}
        <div className="max-w-3xl mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-[1.1] mb-6">
            {t("services.header")}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t("services.description")}
          </p>
          <p className="mt-4 text-sm font-medium text-primary inline-flex items-center gap-2">
            <Globe className="w-4 h-4" />
            {t("services.internationalNote")}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-1">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative p-8 border-b border-r border-border/30 hover:bg-card/50 transition-all duration-500"
            >
              {/* Number */}
              <span className="absolute top-4 right-4 text-xs font-mono text-muted-foreground/30">
                0{index + 1}
              </span>
              
              <div className="mb-6">
                <service.icon className="w-8 h-8 text-primary opacity-80 group-hover:opacity-100 transition-opacity" />
              </div>
              
              <h3 className="font-display font-semibold text-lg mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Hover line */}
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
