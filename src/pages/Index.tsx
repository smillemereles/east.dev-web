import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { CircleScrollZoom } from "@/components/ui/circle-scroll-zoom";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { SmartOrder } from "@/components/SmartOrder";
import { Projects } from "@/components/Projects";
import { Team } from "@/components/Team";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { useTranslation } from "@/hooks/use-i18n";
import scrollVideo from "@/assets/scroll-cinematic.mp4.asset.json";

const Index = () => {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Helmet>
        <link rel="canonical" href="https://eastdevpy.com/" />
        <meta property="og:url" content="https://eastdevpy.com/" />
      </Helmet>
      <Navbar />
      <Hero />
      <CircleScrollZoom
        videoSrc={scrollVideo.url}
        title={t("scrollReveal.title") as string}
        subtitle={t("scrollReveal.subtitle") as string}
      />
      <About />
      <Services />
      <SmartOrder />
      <Projects />

      <Team />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
