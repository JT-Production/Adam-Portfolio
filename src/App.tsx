import BannerSection from "./components/BannerSection";
import Hero from "./components/Hero";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import ScrollDown from "./components/ScrollDown";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Offers from "./components/Offers";
import CTA from "./components/CTA";




const App = () => {

  useEffect(() => {
    AOS.init({
      once: true,
    });
  });
  return (
    <>

     
      <div className="h-100vh">
        <Loader/>
      <Navbar />
      <BannerSection />
      <ScrollDown />
      
      </div>
      <Hero />
      <Offers/>
      <CTA/>
      <Footer />
      <Analytics />
    </>
  );
};

export default App;
