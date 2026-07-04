import { useTranslation } from "@/hooks/use-i18n";

export const About = () => {
  const { t } = useTranslation();
  return (
    <section id="nosotros" className="section-padding relative overflow-hidden bg-[hsl(210,15%,88%)] text-[hsl(220,20%,10%)]">

      <div className="container-custom relative z-10">
        {/* Section Label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-xs font-medium text-[hsl(220,15%,40%)] tracking-[0.3em] uppercase">
            {t("about.section")}
          </span>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-[hsl(220,15%,70%)] to-transparent" />
        </div>

        {/* Big statement */}
        <div className="max-w-5xl mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold leading-[1.05] mb-10">
            {t("about.title")}
          </h2>
        </div>

        {/* Two-column narrative */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 mb-20">
          <div className="space-y-6 text-[hsl(220,15%,35%)] text-lg leading-relaxed">
            <p>
              <span className="text-[hsl(220,20%,10%)] font-semibold">east.dev</span> {t("about.paragraph1")}
            </p>
            <p>
              {t("about.paragraph2")}
            </p>
          </div>
          <div className="space-y-6 text-[hsl(220,15%,35%)] text-lg leading-relaxed">
            <p>
              {t("about.paragraph3")}
            </p>
            <p>
              {t("about.paragraph4")}
            </p>
            <p>
              {t("about.paragraph5")}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
