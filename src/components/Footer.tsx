import { Instagram, Linkedin, Github, Twitter } from "lucide-react";
import logo from "@/assets/logo-eastdev-new.jpeg";

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

export const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-white/5">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <img 
              src={logo} 
              alt="east.dev" 
              className="h-14 w-auto opacity-80 mb-6" 
            />
            <p className="text-muted-foreground mb-8 max-w-sm leading-relaxed">
              Diseño y desarrollo web con identidad propia desde Ciudad del Este. 
              Conectamos tu visión con la tecnología.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display font-semibold mb-6 text-sm uppercase tracking-wider">Navegación</h4>
            <ul className="space-y-4">
              {["Inicio", "Nosotros", "Servicios", "Proyectos", "Contacto"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold mb-6 text-sm uppercase tracking-wider">Servicios</h4>
            <ul className="space-y-4">
              {["Desarrollo Web", "Diseño UI/UX", "Branding", "Marketing", "SEO"].map((item) => (
                <li key={item}>
                  <span className="text-muted-foreground text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border/30 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} east.dev — Todos los derechos reservados
          </p>
          <p className="text-sm text-muted-foreground">
            Ciudad del Este, Paraguay
          </p>
        </div>
      </div>
    </footer>
  );
};
