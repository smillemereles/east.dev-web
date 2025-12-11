import { Instagram, Linkedin, Github, Twitter } from "lucide-react";
import logo from "@/assets/logo-eastdev.jpg";

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

const footerLinks = [
  {
    title: "Navegación",
    links: [
      { label: "Inicio", href: "#inicio" },
      { label: "Nosotros", href: "#nosotros" },
      { label: "Servicios", href: "#servicios" },
      { label: "Proyectos", href: "#proyectos" },
    ],
  },
  {
    title: "Servicios",
    links: [
      { label: "Desarrollo Web", href: "#servicios" },
      { label: "Diseño UI/UX", href: "#servicios" },
      { label: "Marketing Digital", href: "#servicios" },
      { label: "SEO", href: "#servicios" },
    ],
  },
  {
    title: "Contacto",
    links: [
      { label: "contacto@east.dev", href: "mailto:contacto@east.dev" },
      { label: "Ciudad del Este, PY", href: "#" },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className="bg-navy-dark text-silver-light">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <img src={logo} alt="east.dev" className="h-12 w-auto mb-6 brightness-0 invert opacity-90" />
            <p className="text-silver/70 mb-6 max-w-sm leading-relaxed">
              Diseño y desarrollo web con identidad propia desde Ciudad del Este. 
              Conectamos tu visión con la tecnología.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-silver/10 flex items-center justify-center hover:bg-silver/20 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h4 className="font-display font-semibold mb-4">{column.title}</h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-silver/70 hover:text-silver-light transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-silver/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-silver/50">
            © {new Date().getFullYear()} east.dev. Todos los derechos reservados.
          </p>
          <p className="text-sm text-silver/50">
            Hecho con 💙 en Ciudad del Este
          </p>
        </div>
      </div>
    </footer>
  );
};
