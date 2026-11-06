import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route, useLocation } from "react-router-dom";
import { LocaleSeo } from "./components/LocaleSeo";
import Index from "./pages/Index";
import Portfolio from "./pages/Portfolio";
import International from "./pages/International";
import Featured from "./pages/Featured";
import DesarrolloWebCDE from "./pages/DesarrolloWebCDE";
import DisenoWebParaguay from "./pages/DisenoWebParaguay";
import NotFound from "./pages/NotFound";
import WhatsAppFloatingButton from "./components/WhatsAppFloatingButton";

const queryClient = new QueryClient();

const ScrollToHash = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [pathname, hash]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
        <ScrollToHash />
        <LocaleSeo />
        <Routes>
          {["", "/en", "/pt"].flatMap((prefix) => [
            <Route key={prefix + "/"} path={prefix || "/"} element={<Index />} />,
            <Route key={prefix + "p"} path={`${prefix}/portafolio`} element={<Portfolio />} />,
            <Route key={prefix + "i"} path={`${prefix}/internacional`} element={<International />} />,
            <Route key={prefix + "f"} path={`${prefix}/proyectos-estrella`} element={<Featured />} />,
            <Route key={prefix + "d"} path={`${prefix}/desarrollo-web-ciudad-del-este`} element={<DesarrolloWebCDE />} />,
            <Route key={prefix + "w"} path={`${prefix}/diseno-web-paraguay`} element={<DisenoWebParaguay />} />,
          ])}
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      <WhatsAppFloatingButton />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
