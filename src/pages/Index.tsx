import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";

import { SmartOrder } from "@/components/SmartOrder";
import { Projects } from "@/components/Projects";
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
      <Projects />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
