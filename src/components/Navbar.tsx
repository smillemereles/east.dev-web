import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "@/assets/logo-eastdev-2.jpeg";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#servicios", label: "Servicios" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "/portafolio", label: "Portafolio" },
  { href: "#contacto", label: "Contacto" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

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
          ? "bg-white/15 backdrop-blur-md border-b border-white/15 py-4 sm:py-6"
          : "bg-white/10 backdrop-blur-sm py-5 sm:py-9"
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
            if (link.href.startsWith("/")) {
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-muted-foreground hover:text-foreground font-medium transition-colors duration-300 text-sm tracking-wide uppercase"
                >
                  {link.label}
                </Link>
              );
            } else {
              // Si estamos en la home, usar ancla normal. Si no, usar <Link> con hash.
              const isHome = location.pathname === "/";
              return isHome ? (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground font-medium transition-colors duration-300 text-sm tracking-wide uppercase"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  to={{ pathname: "/", hash: link.href }}
                  className="text-muted-foreground hover:text-foreground font-medium transition-colors duration-300 text-sm tracking-wide uppercase"
                >
                  {link.label}
                </Link>
              );
            }
          })}
        </div>

        <div className="hidden lg:block">
          <a href="https://wa.link/jfxdzh" target="_blank" rel="noopener noreferrer">
            <Button variant="hero" size="default">
              Contactar
            </Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 glass-effect border-t border-border/30 animate-fade-in">
          <div className="container-custom py-8 flex flex-col gap-6">
            {navLinks.map((link) => {
              if (link.href.startsWith("/")) {
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="text-muted-foreground hover:text-foreground font-medium py-2 transition-colors uppercase tracking-wide"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
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
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    to={{ pathname: "/", hash: link.href }}
                    className="text-muted-foreground hover:text-foreground font-medium py-2 transition-colors uppercase tracking-wide"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                );
              }
            })}
            <a href="https://wa.link/jfxdzh" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>
              <Button variant="hero" className="mt-4">
                Contactar
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
