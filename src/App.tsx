import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Products from "./pages/Products";
import AISolutions from "./pages/AISolutions";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Connect from "./pages/Connect";
import About from "./pages/About";
import ECTDViewer from "./pages/products/ECTDViewer";
import GnosisVault from "./pages/products/GnosisVault";
import Scribe from "./pages/products/Scribe";
import AperioTest from "./pages/products/AperioTest";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/ectd-viewer" element={<ECTDViewer />} />
          <Route path="/products/gnosisvault" element={<GnosisVault />} />
          <Route path="/products/scribe" element={<Scribe />} />
          <Route path="/products/aperiotest" element={<AperioTest />} />
          <Route path="/ai-solutions" element={<AISolutions />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
