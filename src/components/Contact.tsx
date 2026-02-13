import { useState } from "react";
import { Send, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
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
    const text = `Hola! Soy *${formData.name}* (${formData.email}).%0A%0A*Proyecto:* ${formData.project}%0A*Presupuesto:* ${formData.budget}%0A%0A${formData.message}`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, "_blank");
    setFormData({ name: "", email: "", project: "", budget: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contacto" className="section-padding relative">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Section Label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-xs font-medium text-muted-foreground tracking-[0.3em] uppercase">
            04 — Contacto
          </span>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-border to-transparent" />
        </div>

        <div className="grid lg:grid-cols-2 gap-20">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-[1.1] mb-8">
              ¿Listo para
              <br />
              <span className="text-gradient">comenzar?</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-12 max-w-md">
              Cuéntanos sobre tu proyecto y recibe una cotización personalizada. 
              Estamos listos para dar vida a tu visión.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              <a href="mailto:contacto@east.dev" className="group flex items-center gap-4 p-4 -m-4 rounded-xl hover:bg-card/50 transition-colors">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Email</p>
                  <p className="font-medium group-hover:text-primary transition-colors">contacto@east.dev</p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              <div className="flex items-center gap-4 p-4 -m-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Ubicación</p>
                  <p className="font-medium">Ciudad del Este, Paraguay</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Form */}
          <div className="glass-card p-8 rounded-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-3 text-muted-foreground">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border/50 focus:border-primary focus:ring-1 focus:ring-primary/30 outline-none transition-all text-foreground placeholder:text-muted-foreground/50"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-3 text-muted-foreground">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border/50 focus:border-primary focus:ring-1 focus:ring-primary/30 outline-none transition-all text-foreground placeholder:text-muted-foreground/50"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="project" className="block text-sm font-medium mb-3 text-muted-foreground">
                    Tipo de Proyecto
                  </label>
                  <select
                    id="project"
                    name="project"
                    value={formData.project}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border/50 focus:border-primary focus:ring-1 focus:ring-primary/30 outline-none transition-all text-foreground"
                  >
                    <option value="">Seleccionar...</option>
                    <option value="website">Sitio Web</option>
                    <option value="ecommerce">E-commerce</option>
                    <option value="webapp">Aplicación Web</option>
                    <option value="landing">Landing Page</option>
                    <option value="redesign">Rediseño</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium mb-3 text-muted-foreground">
                    Presupuesto
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border/50 focus:border-primary focus:ring-1 focus:ring-primary/30 outline-none transition-all text-foreground"
                  >
                    <option value="">Seleccionar...</option>
                    <option value="500-1000">$500 - $1,000</option>
                    <option value="1000-2500">$1,000 - $2,500</option>
                    <option value="2500-5000">$2,500 - $5,000</option>
                    <option value="5000+">$5,000+</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-3 text-muted-foreground">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border/50 focus:border-primary focus:ring-1 focus:ring-primary/30 outline-none transition-all resize-none text-foreground placeholder:text-muted-foreground/50"
                  placeholder="Cuéntanos sobre tu proyecto..."
                />
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full">
                Enviar mensaje
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
