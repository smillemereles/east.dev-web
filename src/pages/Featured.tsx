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
      <Navbar />
      <div className="pt-24">
        <FeaturedProjects />
      </div>
      <Footer />
    </main>
  );
};

export default Featured;
