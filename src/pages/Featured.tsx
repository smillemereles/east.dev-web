import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { useEffect } from "react";

const Featured = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Proyectos Estrella | east.dev</title>
        <meta name="description" content="Proyectos destacados de east.dev: sitios web, e-commerce y sistemas Smart Order desarrollados desde Ciudad del Este, Paraguay." />
        <link rel="canonical" href="https://eastdevpy.com/proyectos-estrella" />
        <meta property="og:url" content="https://eastdevpy.com/proyectos-estrella" />
        <meta property="og:title" content="Proyectos Estrella | east.dev" />
      </Helmet>
      <Navbar />
      <div className="pt-24">
        <FeaturedProjects />
      </div>
      <Footer />
    </main>
  );
};

export default Featured;
