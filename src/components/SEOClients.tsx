import { Search, Globe, TrendingUp, FileText, ArrowRight } from "lucide-react";
import { useTranslation } from "@/hooks/use-i18n";

export const SEOClients = () => {
  const { t } = useTranslation();

  const articles = (t("seoClients.articles") as string[]) || [];

  return (
    <section id="seo" className="section-padding relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 via-transparent to-muted/20 pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Section Label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-xs font-medium text-muted-foreground tracking-[0.3em] uppercase">
            {t("seoClients.section")}
          </span>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-border to-transparent" />
        </div>

        {/* Header */}
        <div className="max-w-4xl mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-[1.1] mb-6">
            {t("seoClients.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            {t("seoClients.description")}
          </p>
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left: SEO stat + explanation */}
          <div className="space-y-6">
            <div className="p-8 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 to-electric/5">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-lg bg-primary/20">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm font-medium text-primary uppercase tracking-wider">
                  {t("seoClients.statLabel")}
                </span>
              </div>
              <div className="text-6xl sm:text-7xl font-display font-bold text-gradient mb-3">
                30-40%
              </div>
              <p className="text-muted-foreground">
                {t("seoClients.statDescription")}
              </p>
            </div>

            <div className="p-6 rounded-xl border border-border/30 bg-card/40">
              <div className="flex items-start gap-4">
                <Globe className="w-5 h-5 text-electric flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-display font-semibold text-lg mb-2">
                    {t("seoClients.internationalTitle")}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t("seoClients.internationalDescription")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Example articles */}
          <div className="p-8 rounded-2xl border border-border/30 bg-card/40 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-muted">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg">
                {t("seoClients.articlesTitle")}
              </h3>
            </div>

            <div className="space-y-3 mb-8">
              {articles.map((article, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-4 p-4 rounded-lg border border-border/20 bg-background/50 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Search className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm sm:text-base text-foreground/90 group-hover:text-foreground transition-colors">
                    {article}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-sm text-muted-foreground mb-6">
              {t("seoClients.articlesNote")}
            </p>

            <a
              href="#contacto"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-medium transition-all hover:shadow-lg group"
            >
              {t("seoClients.cta")}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
