import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LandingPage from "./pages/landing-page";
import AutoPayment from "./pages/automated-payment";
import InvoiceList from "./pages/invoice-list";
import InventorySystem from "./pages/inventory-system";
import AboutMe from "./pages/about-me";
import ScrollToTop from "@/components/ScrollToTop";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/landing-page" element={<LandingPage />} />
          <Route path="/automated-payment" element={<AutoPayment />} />
          <Route path="/invoice-list" element={<InvoiceList />} />
          <Route path="/inventory-system" element={<InventorySystem />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
