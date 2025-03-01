import BannerSection from "./components/BannerSection";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ScrollDown from "./components/ScrollDown";
import YoutubeTimeline from "./components/YoutubeTimeline";

const App = () => {
  return (
    <>
      <div className="animated-bg">
        <Navbar />
        <BannerSection />
        <ScrollDown />
      </div>
      <Hero />
      <YoutubeTimeline />
    </>
  );
};

export default App;
