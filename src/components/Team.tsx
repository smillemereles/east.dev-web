import { useTranslation } from "@/hooks/use-i18n";

export const Team = () => {
  const { t } = useTranslation();

  return (
    <section id="por-que-elegir" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold leading-tight mb-6">
            {t("team.section")}
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
            {t("team.answer")}
          </p>
        </div>
      </div>
    </section>
  );
};
