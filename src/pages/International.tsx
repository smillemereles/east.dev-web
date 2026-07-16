import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { InternationalWorks } from "@/components/InternationalWorks";
import { useEffect } from "react";

const International = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, []);

  const description =
    "Proyectos internacionales de eastdevpy.com: diseño web, desarrollo web y productos digitales creados desde Ciudad del Este, Paraguay.";

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Trabajos Internacionales | eastdevpy.com</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://eastdevpy.com/internacional" />
        <meta property="og:url" content="https://eastdevpy.com/internacional" />
        <meta property="og:title" content="Trabajos Internacionales | eastdevpy.com" />
        <meta property="og:description" content={description} />
      </Helmet>

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
