import { ArrowUpRight, Globe2, Calendar, MessageCircle, Sparkles } from "lucide-react";
import { useTranslation } from "@/hooks/use-i18n";

const featureIcons = [Calendar, Sparkles, Globe2];

export const InternationalWorks = () => {
  const { t } = useTranslation();

  const features = (t("internationalWorks.features") as string[]).map((text, index) => ({
    icon: featureIcons[index] ?? Sparkles,
    text,
  }));

  const handleCta = () => {
    const message = encodeURIComponent(
      (t("internationalWorks.whatsappMessage") as string) ||
        "Hola, quiero una web con sistema de agendamiento como la del chef David Sánchez."
    );
    window.open(`https://wa.me/595973213591?text=${message}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="internacional" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-electric/5 via-transparent to-primary/5 pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Section Label */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-xs font-medium text-muted-foreground tracking-[0.3em] uppercase">
            {t("internationalWorks.section")}
          </span>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-border to-transparent" />
        </div>

        {/* Header */}
        <div className="max-w-4xl mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-electric/10 text-electric text-sm font-medium mb-6">
            <Globe2 className="w-4 h-4" />
            {t("internationalWorks.badge")}
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-[1.05] mb-6">
            <span className="block">{t("internationalWorks.title")}</span>
            <span className="block text-gradient">{t("internationalWorks.titleAlt")}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            {t("internationalWorks.description")}
          </p>
        </div>

        {/* Case study card */}
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          {/* Image / preview */}
          <a
            href="https://brand-builder-pro-livid.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="lg:col-span-3 group relative rounded-2xl overflow-hidden border border-border/40 bg-card/40 aspect-[16/10] block"
          >
            <img
              src="/internacional/chef-david-hero.png"
              alt={t("internationalWorks.imageAlt") as string}
              className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
              <div>
                <p className="text-xs font-mono text-muted-foreground tracking-wider mb-1">
                  {t("internationalWorks.caseLocation")}
                </p>
                <p className="text-lg sm:text-xl font-display font-semibold">
                  {t("internationalWorks.caseName")}
                </p>
              </div>
              <div className="w-11 h-11 rounded-full border border-border bg-background/70 backdrop-blur flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all">
                <ArrowUpRight className="w-5 h-5 group-hover:text-primary-foreground transition-colors" />
              </div>
            </div>
          </a>

          {/* Content */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl sm:text-3xl font-display font-bold mb-4">
              {t("internationalWorks.caseTitle")}
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {t("internationalWorks.caseDescription")}
            </p>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground pt-2.5">{feature.text}</span>
                </div>
              ))}
            </div>

            <button
              onClick={handleCta}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-medium transition-all hover:shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              {t("internationalWorks.cta")}
            </button>
            <p className="text-sm text-muted-foreground mt-4 max-w-sm">
              {t("internationalWorks.ctaNote")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
