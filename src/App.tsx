import BannerSection from "./components/BannerSection";
import Hero from "./components/Hero";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import ScrollDown from "./components/ScrollDown";
import YoutubeTimeline from "./components/YoutubeTimeline";
import Footer from "./Footer";

const App = () => {
  return (
    <>

      <div className="animated-bg">
        <Loader/>
        <Navbar />
        <BannerSection />
        <ScrollDown />
      </div>
      <Hero />
      <YoutubeTimeline />
      <Footer />
    </>
  );
};

export default App;
