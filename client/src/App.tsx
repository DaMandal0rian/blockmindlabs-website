import { Switch, Route, useLocation } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { AnimatePresence } from "framer-motion";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import PageTransition from "@/components/PageTransition";
import ParticleBackground from "@/components/ParticleBackground";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";
import StrapiAdmin from "@/components/admin/StrapiAdmin";

function Router() {
  const [location] = useLocation();

  return (
    <AnimatePresence mode="wait">
      <PageTransition key={location}>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/admin" component={StrapiAdmin} />
          <Route component={NotFound} />
        </Switch>
      </PageTransition>
    </AnimatePresence>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ParticleBackground />
      <Nav />
      <Router />
      <Footer />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;