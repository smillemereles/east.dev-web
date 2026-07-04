import { Instagram, Linkedin, Github, Twitter } from "lucide-react";
import { useTranslation } from "@/hooks/use-i18n";
import logo from "@/assets/logo-eastdev-2.jpeg";

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/east.devpy/", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

export const Footer = () => {
  const { t } = useTranslation();
  const navItems = [
    { href: "#inicio", label: t("nav.home") as string },
    { href: "#nosotros", label: t("nav.about") as string },
    { href: "#servicios", label: t("nav.services") as string },
    { href: "#proyectos", label: t("nav.projects") as string },
    { href: "#contacto", label: t("nav.contact") as string },
  ];
  const serviceTitles = (t("services.items") as Array<{ title: string; description: string }>).map(
    (item) => item.title,
  );
  return (
    <footer className="border-t border-white/15 bg-white/10">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <img 
              src={logo} 
              alt="east.dev" 
              className="h-14 w-auto p-1.5 opacity-80 mb-6" 
            />
            <p className="text-muted-foreground mb-4 max-w-sm leading-relaxed">
              {t("footer.description")}
            </p>
            <p className="text-sm font-medium text-primary mb-8 max-w-sm">
              {t("footer.internationalNote")}
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
            <h4 className="font-display font-semibold mb-6 text-sm uppercase tracking-wider">{t("footer.navigation")}</h4>
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold mb-6 text-sm uppercase tracking-wider">{t("footer.services")}</h4>
            <ul className="space-y-4">
              {serviceTitles.map((item) => (
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
            {t("footer.reserved", { year: new Date().getFullYear().toString() })}
          </p>
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
            <p className="text-sm text-muted-foreground">{t("footer.location")}</p>
            <a
              href="https://wa.link/jfxdzh"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-10 h-10 rounded-full border border-white/20 text-white bg-transparent flex items-center justify-center hover:border-white transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M20.52 3.48a11.86 11.86 0 00-16.8 0A11.86 11.86 0 002 12.35c0 2.08.55 4.11 1.6 5.9L2 22l3.95-1.03a11.86 11.86 0 005.57 1.43h.01c6.5 0 11.8-5.28 11.8-11.8 0-3.16-1.24-6.12-3.24-8.18zm-8.53 17.04h-.01a9.7 9.7 0 01-4.94-1.34l-.35-.21-2.35.62.63-2.28-.23-.37A9.67 9.67 0 013.88 12.35C3.88 7.12 7.95 3.05 13.18 3.05c2.53 0 4.9.99 6.68 2.77a9.38 9.38 0 012.77 6.66 9.7 9.7 0 01-9.7 9.7zm5.31-7.24c-.29-.15-1.7-.84-1.96-.93-.26-.1-.45-.15-.64.15s-.73.93-.9 1.12c-.16.19-.32.2-.61.07a8.55 8.55 0 01-2.52-1.55 9.64 9.64 0 01-1.8-2.24c-.19-.33 0-.51.14-.67.14-.14.31-.37.47-.56.15-.18.2-.31.3-.52.1-.2.05-.38-.02-.53-.07-.15-.64-1.54-.88-2.12-.23-.55-.47-.48-.64-.49-.17-.01-.37-.01-.57-.01-.19 0-.5.07-.76.37-.26.3-1.01.99-1.01 2.42 0 1.43 1.03 2.82 1.17 3.02.13.2 2.02 3.08 4.9 4.32.68.29 1.21.46 1.62.59.68.21 1.3.18 1.79.11.55-.09 1.7-.69 1.94-1.36.24-.65.24-1.21.17-1.33-.07-.12-.26-.2-.55-.35z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
