import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { InternationalWorks } from "@/components/InternationalWorks";
import { useEffect } from "react";

const International = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    document.title = "Trabajos Internacionales | eastdevpy.com";

    const description =
      "Proyectos internacionales de eastdevpy.com: diseño web, desarrollo web y productos digitales creados desde Ciudad del Este, Paraguay.";

    const setMeta = (name: string, content: string, attr: "name" | "property" = "name") => {
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", description);
    setMeta("application-name", "eastdevpy.com");
    setMeta("og:site_name", "eastdevpy.com", "property");
    setMeta("og:title", "Trabajos Internacionales | eastdevpy.com", "property");
    setMeta("og:description", description, "property");
    setMeta("og:url", "https://eastdevpy.com/internacional", "property");
    setMeta("twitter:title", "Trabajos Internacionales | eastdevpy.com");
    setMeta("twitter:description", description);

    const canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (canonical) canonical.href = "https://eastdevpy.com/internacional";
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="pt-24">
        <InternationalWorks />
      </div>
      <Footer />
    </main>
  );
};

export default International;
