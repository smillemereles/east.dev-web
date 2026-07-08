import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { InternationalWorks } from "@/components/InternationalWorks";
import { useEffect } from "react";

const International = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
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
