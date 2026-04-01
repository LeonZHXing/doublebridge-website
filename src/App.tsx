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
import About from "./pages/About";
import ECTDViewerHome from "./pages/products/ectd-viewer/ECTDViewerHome";
import ECTDViewerDesktop from "./pages/products/ectd-viewer/ECTDViewerDesktop";
import ECTDViewerFeatures from "./pages/products/ectd-viewer/ECTDViewerFeatures";
import ECTDViewerDownload from "./pages/products/ectd-viewer/ECTDViewerDownload";
import ECTDViewerPricing from "./pages/products/ectd-viewer/ECTDViewerPricing";
import ECTDViewerEnterprise from "./pages/products/ectd-viewer/ECTDViewerEnterprise";
import ECTDViewerRADARS from "./pages/products/ectd-viewer/ECTDViewerRADARS";
import GnosisVault from "./pages/products/GnosisVault";
import Scribe from "./pages/products/Scribe";
import AperioTest from "./pages/products/AperioTest";
import ITServices from "./pages/services/ITServices";
import ECTDSubmission from "./pages/services/ECTDSubmission";
import RegulatoryIM from "./pages/services/RegulatoryIM";
import DataImageProcessing from "./pages/services/DataImageProcessing";
import ECTDViewerAI from "./pages/ai-solutions/ECTDViewerAI";
import ScribeAI from "./pages/ai-solutions/ScribeAI";
import GnosisVaultAI from "./pages/ai-solutions/GnosisVaultAI";
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
          <Route path="/services/it-services" element={<ITServices />} />
          <Route path="/services/ectd-submission" element={<ECTDSubmission />} />
          <Route path="/services/regulatory-information-management" element={<RegulatoryIM />} />
          <Route path="/services/data-image-processing" element={<DataImageProcessing />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/ectd-viewer" element={<ECTDViewerHome />} />
          <Route path="/products/ectd-viewer/desktop" element={<ECTDViewerDesktop />} />
          <Route path="/products/ectd-viewer/features" element={<ECTDViewerFeatures />} />
          <Route path="/products/ectd-viewer/download" element={<ECTDViewerDownload />} />
          <Route path="/products/ectd-viewer/pricing" element={<ECTDViewerPricing />} />
          <Route path="/products/ectd-viewer/enterprise" element={<ECTDViewerEnterprise />} />
          <Route path="/products/ectd-viewer/radars" element={<ECTDViewerRADARS />} />
          <Route path="/products/gnosisvault" element={<GnosisVault />} />
          <Route path="/products/scribe" element={<Scribe />} />
          <Route path="/products/aperiotest" element={<AperioTest />} />
          <Route path="/ai-solutions" element={<AISolutions />} />
          <Route path="/ai-solutions/ectd-viewer-ai" element={<ECTDViewerAI />} />
          <Route path="/ai-solutions/scribe-ai" element={<ScribeAI />} />
          <Route path="/ai-solutions/gnosisvault-ai" element={<GnosisVaultAI />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
