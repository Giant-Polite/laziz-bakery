import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Cakes from "./pages/Cakes";
import Cookies from "./pages/Cookies";
import Catering from "./pages/Catering";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";
import Afghans from "./pages/Afghans";
import AfghanBread from "./pages/Breads";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on every route change
  }, [pathname]);
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster /> {/* ✅ Your main custom toast handler */}
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="cakes" element={<Cakes />} />
            <Route path="cookies" element={<Cookies />} />
            <Route path="afghans" element={<Afghans />} />
            <Route path="breads" element={<AfghanBread />} />
            <Route path="catering" element={<Catering />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;