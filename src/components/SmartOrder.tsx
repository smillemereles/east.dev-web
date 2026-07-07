import { useTranslation } from "@/hooks/use-i18n";
import { MessageCircle, Smartphone, MousePointerClick, Percent, UtensilsCrossed } from "lucide-react";

const featureIcons = [MousePointerClick, Smartphone, MessageCircle, Percent, UtensilsCrossed];

export const SmartOrder = () => {
  const { t } = useTranslation();

  const features = (t("smartOrder.features") as string[]).map((text, index) => ({
    icon: featureIcons[index],
    text,
  }));

  const handleCta = () => {
    const message = encodeURIComponent(
      (t("smartOrder.whatsappMessage") as string) || "Hola, quiero Smart Order para mi restaurante."
    );
    window.open(`https://wa.me/595973213591?text=${message}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="smart-order" className="section-padding relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-electric/5 pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Section Label */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-xs font-medium text-muted-foreground tracking-[0.3em] uppercase">
            {t("smartOrder.section")}
          </span>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-border to-transparent" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              {t("smartOrder.badge")}
            </span>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-[1.1] mb-4">
              <span className="block">{t("smartOrder.title")}</span>
              <span className="block text-gradient">{t("smartOrder.subtitle")}</span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
              {t("smartOrder.description")}
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground pt-2.5">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button
                onClick={handleCta}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-medium transition-all hover:shadow-lg"
              >
                <MessageCircle className="w-5 h-5" />
                {t("smartOrder.cta")}
              </button>
              <span className="text-sm text-muted-foreground max-w-xs">
                {t("smartOrder.ctaNote")}
              </span>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative rounded-2xl overflow-hidden border border-border/30 bg-card/40 aspect-[4/3]">
              <img
                src="masarte/masartehero.png"
                alt={t("smartOrder.imageAlt") as string}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Overlay glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 sm:bottom-8 sm:-left-8 p-4 rounded-xl border border-border/40 bg-card/80 backdrop-blur-sm shadow-xl max-w-[220px]">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-electric/20 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-electric" />
                </div>
                <div>
                  <p className="text-sm font-semibold">{t("smartOrder.floatingCard.title")}</p>
                  <p className="text-xs text-muted-foreground">{t("smartOrder.floatingCard.time")}</p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground">{t("smartOrder.floatingCard.message")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
