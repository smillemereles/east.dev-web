import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "@/hooks/use-i18n";

export const Hero = () => {
  const { t } = useTranslation();
  const words = t("hero.words") as string[];
  const [currentWord, setCurrentWord] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentWord((prev) => (prev + 1) % words.length);
        setIsAnimating(false);
      }, 300);
    }, 3000);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <section
      id="inicio"
      className="min-h-screen w-full flex items-center justify-center p-4 md:p-8 pt-24 md:pt-28"
      style={{ background: "#fafbfc", color: "#0f172a", fontFamily: "'Plus Jakarta Sans', Inter, sans-serif" }}
    >
      <div
        className="w-full max-w-7xl mx-auto flex flex-col md:flex-row min-h-[720px] rounded-3xl overflow-hidden bg-white shadow-sm"
        style={{ border: "1px solid #e8ecf1" }}
      >
        {/* Left Content */}
        <div
          className="flex-1 p-8 md:p-16 flex flex-col justify-center"
          style={{ borderRight: "1px solid #e8ecf1" }}
        >
          <div className="flex flex-col space-y-6 max-w-xl animate-fade-up">
            <div
              className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase w-fit"
              style={{ background: "#e8ecf1", color: "#3b82f6" }}
            >
              {t("hero.label")}
            </div>

            <span
              className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full text-xs font-medium tracking-wide w-fit"
              style={{ border: "1px solid #dbeafe", background: "#eff6ff", color: "#3b82f6" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              {t("hero.internationalBadge")}
            </span>

            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.05] tracking-tight"
              style={{ fontFamily: "'Syne', sans-serif", color: "#0f172a" }}
            >
              <span className="block">{t("hero.titleLine1")}</span>
              <span className="block" style={{ color: "#3b82f6" }}>
                {t("hero.titleLine2")}
              </span>
              <span className="block" style={{ color: "#94a3b8" }}>
                {t("hero.subtitle")}{" "}
                <span
                  className={`inline-block transition-all duration-300 ${
                    isAnimating ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
                  }`}
                  style={{ color: "#0f172a" }}
                >
                  {words[currentWord]}
                </span>
              </span>
            </h1>

            <p className="text-base md:text-lg leading-relaxed" style={{ color: "#94a3b8" }}>
              {t("hero.description")}
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={() => document.getElementById("proyectos")?.scrollIntoView({ behavior: "smooth" })}
                className="px-6 py-3.5 font-semibold rounded-xl transition-all active:scale-95 inline-flex items-center gap-2"
                style={{ background: "#3b82f6", color: "#ffffff", boxShadow: "0 10px 25px -10px rgba(59,130,246,0.5)" }}
              >
                {t("hero.ctaProjects")}
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
                className="px-6 py-3.5 font-semibold rounded-xl transition-all active:scale-95"
                style={{ background: "#ffffff", border: "1px solid #e8ecf1", color: "#0f172a" }}
              >
                {t("hero.ctaContact")}
              </button>
              <a href="https://wa.link/jfxdzh" target="_blank" rel="noopener noreferrer">
                <button
                  className="px-6 py-3.5 font-semibold rounded-xl transition-all active:scale-95"
                  style={{ background: "#ffffff", border: "1px solid #e8ecf1", color: "#0f172a" }}
                >
                  {t("hero.internationalCta")}
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Right Visual */}
        <div
          className="flex-1 relative overflow-hidden flex items-center justify-center p-8 md:p-12 min-h-[400px]"
          style={{ background: "#fafbfc" }}
        >
          <div className="relative w-full max-w-[480px] aspect-square">
            <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-4">
              <div
                className="col-span-4 row-span-4 rounded-3xl flex items-center justify-center"
                style={{
                  background: "#ffffff",
                  border: "1px solid #e8ecf1",
                  boxShadow: "0 20px 40px -20px rgba(148,163,184,0.35)",
                }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(59,130,246,0.1)" }}
                >
                  <div className="w-5 h-5 rounded-full" style={{ background: "#3b82f6" }} />
                </div>
              </div>
              <div
                className="col-start-3 col-end-7 row-start-4 row-end-7 rounded-3xl"
                style={{ background: "#e8ecf1", border: "1px solid #ffffff", opacity: 0.6 }}
              />
              <div
                className="col-start-5 col-end-7 row-start-2 row-end-4 rounded-2xl"
                style={{ background: "rgba(59,130,246,0.15)" }}
              />
            </div>
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full pointer-events-none"
              style={{ background: "#3b82f6", filter: "blur(120px)", opacity: 0.12 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
