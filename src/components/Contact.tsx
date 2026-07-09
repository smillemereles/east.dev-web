import { useState } from "react";
import { Send, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "@/hooks/use-i18n";

export const Contact = () => {
  const { t, locale } = useTranslation();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    budget: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phone = "595973213591";
    
    const projectLabels = t("contact.projectOptions") as Record<string, string>;
    const budgetLabels = t("contact.budgetOptions") as Record<string, string>;

    const projectLabel = projectLabels[formData.project] || formData.project;
    const budgetLabel = budgetLabels[formData.budget] || (locale === "es" ? "No especificado" : "Not specified");

    const text = [
      t("contact.whatsapp.greeting", { name: formData.name }) as string,
      `📧 ${formData.email}`,
      ``,
      t("contact.whatsapp.details") as string,
      (t("contact.whatsapp.typeLabel", { project: projectLabel }) as string),
      (t("contact.whatsapp.budgetLabel", { budget: budgetLabel }) as string),
      ``,
      t("contact.whatsapp.messageLabel") as string,
      formData.message,
    ].join("\n");

    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, "_blank");
    setFormData({ name: "", email: "", project: "", budget: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contacto" className="section-padding relative bg-slate-50 text-slate-950">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Section Label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-xs font-medium text-slate-600 tracking-[0.3em] uppercase">
            {t("contact.section")}
          </span>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-border to-transparent" />
        </div>

        <div className="grid lg:grid-cols-2 gap-20">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-[1.1] mb-8 text-slate-950">
              {t("contact.question")}
              <br />
              <span className="text-gradient">{t("contact.highlight")}</span>
            </h2>
            
            <p className="text-lg text-slate-700 mb-4 max-w-md">
              {t("contact.description")}
            </p>
            <p className="text-sm font-medium text-primary mb-12 max-w-md">
              {t("contact.internationalNote")}
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              <a href="mailto:east.devpy@gmail.com" className="group flex items-center gap-4 p-4 -m-4 rounded-xl hover:bg-white transition-colors">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-slate-600 mb-1">{t("contact.emailLabel")}</p>
                  <p className="font-medium group-hover:text-primary transition-colors text-slate-950">{t("contact.email")}</p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-slate-500 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              <div className="flex items-center gap-4 p-4 -m-4 bg-white rounded-xl">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-slate-600 mb-1">{t("contact.locationLabel")}</p>
                   <p className="font-medium text-slate-950">Paraguay, Estados Unidos, Brasil</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Form */}
          <div className="glass-card p-8 rounded-2xl bg-white/90 border-slate-200">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-3 text-slate-700">
                    {t("contact.form.name")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary/30 outline-none transition-all text-slate-950 placeholder:text-slate-400"
                    placeholder={t("contact.form.namePlaceholder") as string}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-3 text-slate-700">
                    {t("contact.form.email")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary/30 outline-none transition-all text-slate-950 placeholder:text-slate-400"
                    placeholder={t("contact.form.emailPlaceholder") as string}
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="project" className="block text-sm font-medium mb-3 text-slate-700">
                    {t("contact.form.project")}
                  </label>
                  <select
                    id="project"
                    name="project"
                    value={formData.project}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary/30 outline-none transition-all text-slate-950"
                  >
                    <option value="">{t("contact.form.projectPlaceholder")}</option>
                    <option value="website">{(t("contact.projectOptions") as Record<string, string>).website}</option>
                    <option value="ecommerce">{(t("contact.projectOptions") as Record<string, string>).ecommerce}</option>
                    <option value="webapp">{(t("contact.projectOptions") as Record<string, string>).webapp}</option>
                    <option value="landing">{(t("contact.projectOptions") as Record<string, string>).landing}</option>
                    <option value="redesign">{(t("contact.projectOptions") as Record<string, string>).redesign}</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium mb-3 text-slate-700">
                    {t("contact.form.budget")}
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary/30 outline-none transition-all text-slate-950"
                  >
                    <option value="">{t("contact.form.budgetPlaceholder")}</option>
                    <option value="500-1000">{(t("contact.budgetOptions") as Record<string, string>)["500-1000"]}</option>
                    <option value="1000-2500">{(t("contact.budgetOptions") as Record<string, string>)["1000-2500"]}</option>
                    <option value="2500-5000">{(t("contact.budgetOptions") as Record<string, string>)["2500-5000"]}</option>
                    <option value="5000+">{(t("contact.budgetOptions") as Record<string, string>)["5000+"]}</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-3 text-slate-700">
                  {t("contact.form.message")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary/30 outline-none transition-all resize-none text-slate-950 placeholder:text-slate-400"
                  placeholder={t("contact.form.messagePlaceholder") as string}
                />
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full">
                {t("contact.form.submit")}
                <Send className="w-4 h-4" />
              </Button>
              <a
                href="https://wa.link/jfxdzh"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full"
              >
                <Button type="button" variant="outline" size="lg" className="w-full bg-transparent border-slate-300 text-slate-700 hover:border-primary hover:text-primary hover:bg-slate-50">
                  {t("contact.internationalCta")}
                </Button>
              </a>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
