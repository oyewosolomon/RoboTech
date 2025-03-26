import Hero from "@/components/sections/Hero";
import Contact from "@/components/sections/Contact";

import ProductDemo from "@/components/sections/ProductDemo";
import Footer from "@/components/layout/Footer";
import AboutUs from "@/components/sections/AboutUs";
import Products from "@/components/sections/Products";
import Industries from "@/components/sections/Industries";
import Services from "@/components/sections/Services";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutUs/>     
      <Industries/>
      <Services/>
      <Products/>
      <ProductDemo />
      <Contact />
      <Footer/>
    </main>
  );
}