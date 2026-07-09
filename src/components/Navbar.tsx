import { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "./ui/button";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo-eastdev-2.jpeg";
import { useTranslation } from "@/hooks/use-i18n";

const navLinks = [
  { href: "#inicio", key: "nav.home" },
  { href: "#nosotros", key: "nav.about" },
  { href: "#servicios", key: "nav.services" },
  { href: "#proyectos", key: "nav.projects" },
  { href: "/proyectos-estrella", key: "nav.featured" },
  { href: "/portafolio", key: "nav.portfolio" },
  { href: "/internacional", key: "nav.international" },
  { href: "#contacto", key: "nav.contact" },
];

export const Navbar = () => {
  const { locale, setLocale, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
        ? "bg-white/15 backdrop-blur-md border-b border-white/15 py-2 sm:py-3"
          : "bg-white/10 backdrop-blur-sm py-3 sm:py-4"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {location.pathname === "/" ? (
          <a href="#inicio" className="flex items-center gap-3 group">
            <img
              src={logo}
              alt="east.dev"
              className="h-14 sm:h-20 w-auto p-1.5 opacity-90 group-hover:opacity-100 transition-opacity"
            />
          </a>
        ) : (
          <Link to={{ pathname: "/", hash: "#inicio" }} className="flex items-center gap-3 group">
            <img
              src={logo}
              alt="east.dev"
              className="h-14 sm:h-20 w-auto p-1.5 opacity-90 group-hover:opacity-100 transition-opacity"
            />
          </Link>
        )}

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => {
            const label = t(link.key) as string;
            if (link.href.startsWith("/")) {
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-muted-foreground hover:text-foreground font-medium transition-colors duration-300 text-sm tracking-wide uppercase"
                >
                  {label}
                </Link>
              );
            } else {
              const isHome = location.pathname === "/";
              return isHome ? (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground font-medium transition-colors duration-300 text-sm tracking-wide uppercase"
                >
                  {label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  to={{ pathname: "/", hash: link.href }}
                  className="text-muted-foreground hover:text-foreground font-medium transition-colors duration-300 text-sm tracking-wide uppercase"
                >
                  {label}
                </Link>
              );
            }
          })}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <button
            type="button"
            className="rounded-full border border-border/50 px-3 py-2 text-sm font-medium text-muted-foreground hover:border-foreground hover:text-foreground transition-colors flex items-center gap-2"
            onClick={() => setLocale(locale === "es" ? "en" : "es")}
            title={locale === "es" ? "Switch to English" : "Cambiar a Español"}
          >
            <Globe size={16} />
            {locale === "es" ? "EN" : "ES"}
          </button>
          <a href="https://wa.link/jfxdzh" target="_blank" rel="noopener noreferrer">
            <Button variant="hero" size="default">
              {t("nav.contactButton")}
            </Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            type="button"
            className="rounded-full border border-border/50 px-3 py-2 text-sm font-medium text-muted-foreground hover:border-foreground hover:text-foreground transition-colors flex items-center gap-2"
            onClick={() => setLocale(locale === "es" ? "en" : "es")}
            title={locale === "es" ? "Switch to English" : "Cambiar a Español"}
          >
            <Globe size={16} />
            {locale === "es" ? "EN" : "ES"}
          </button>
          <button
            className="p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 glass-effect border-t border-border/30 animate-fade-in">
          <div className="container-custom py-8 flex flex-col gap-6">
            {navLinks.map((link) => {
              const label = t(link.key) as string;
              if (link.href.startsWith("/")) {
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="text-muted-foreground hover:text-foreground font-medium py-2 transition-colors uppercase tracking-wide"
                    onClick={() => setIsOpen(false)}
                  >
                    {label}
                  </Link>
                );
              } else {
                const isHome = location.pathname === "/";
                return isHome ? (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground font-medium py-2 transition-colors uppercase tracking-wide"
                    onClick={() => setIsOpen(false)}
                  >
                    {label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    to={{ pathname: "/", hash: link.href }}
                    className="text-muted-foreground hover:text-foreground font-medium py-2 transition-colors uppercase tracking-wide"
                    onClick={() => setIsOpen(false)}
                  >
                    {label}
                  </Link>
                );
              }
            })}
            <a href="https://wa.link/jfxdzh" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>
              <Button variant="hero" className="mt-4">
                {t("nav.contactButton")}
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
