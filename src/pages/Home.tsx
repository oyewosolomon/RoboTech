import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Analytics from "@/components/sections/Analytics";
import Success from "@/components/sections/Success";
import Team from "@/components/sections/Team";
import Contact from "@/components/sections/Contact";
import Pricing from "@/components/sections/Pricing";
import Partners from "@/components/sections/Partners";
import FAQ from "@/components/sections/FAQ";
import ProductDemo from "@/components/sections/ProductDemo";
import Footer from "@/components/layout/Footer";
import AboutUs from "@/components/sections/AboutUs";
import Testimonials from "@/components/sections/Testimonials";
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
      <Success/>
      {/* <Testimonials/> */}
      <Team />
      <Contact />
      <Footer/>
    </main>
  );
}