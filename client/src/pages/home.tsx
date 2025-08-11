import { Suspense } from "react";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import AIProducts from "@/components/sections/AIProducts";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import LatestUpdates from "@/components/sections/LatestUpdates";
import { PageLoader } from "@/components/ui/loading-spinner";

export default function Home() {
  return (
    <Suspense fallback={<PageLoader />}>
      <main className="pt-16">
        <Hero />
        <Services />
        <AIProducts />
        <About />
        <LatestUpdates />
        <Contact />
      </main>
    </Suspense>
  );
}