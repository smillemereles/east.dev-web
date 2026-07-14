import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { SmartOrder } from "@/components/SmartOrder";
import { Projects } from "@/components/Projects";
import { Team } from "@/components/Team";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import FlowArt, { FlowSection } from "@/components/FlowArt";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />

      {/* Flow transitions: rotate-in pin effect between showcase sections */}
      <FlowArt aria-label="Servicios, Smart Order y Proyectos">
        <FlowSection aria-label="Servicios">
          <Services />
        </FlowSection>
        <FlowSection aria-label="Smart Order">
          <SmartOrder />
        </FlowSection>
        <FlowSection aria-label="Proyectos">
          <Projects />
        </FlowSection>
      </FlowArt>

      <Team />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
