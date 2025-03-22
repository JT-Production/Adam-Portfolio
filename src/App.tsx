import BannerSection from "./components/BannerSection";
import Hero from "./components/Hero";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import ScrollDown from "./components/ScrollDown";
import YoutubeTimeline from "./components/YoutubeTimeline";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

 

const App = () => {

  useEffect(() => {
    AOS.init({
      once: true,
    });
  });
  return (
    <>

      <div className="animated-bg lg:h-svh h-fit">
        <Loader/>
        <Navbar />
        <BannerSection />
        <ScrollDown />
      </div>
      <Hero />
      <YoutubeTimeline />
      <Footer />
      <Analytics />
    </>
  );
};

export default App;
