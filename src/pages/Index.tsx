import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";

import { SmartOrder } from "@/components/SmartOrder";
import { HowWeWork } from "@/components/HowWeWork";
import { Projects } from "@/components/Projects";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { Team } from "@/components/Team";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Services />
      
      <SmartOrder />
      <HowWeWork />
      <FeaturedProjects />
      <Projects />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
