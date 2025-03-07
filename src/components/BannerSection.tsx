import rocket from '../assets/img/hero-1-1.jpg'
// import btc from '../assets/img/IMG_3805.png'
import btc3 from '../assets/img/why_1-1.png'

const BannerSection = () => {
  return (
    <>
      <div className="h-[450px] lg:h-8/12 md:h-8/12 flex justify-center items-center">
        <div className="   text-white ">
          <center>
            {" "}
         
            <h1 className=" font-extrabold pt-2  lg:text-[150px] lg:w-fit md:text-[110px]   text-center text-6xl/8 lg:leading-16 heading mb-10 cssanimation leBlurIn sequence">
             <span> ADAM BITCOIN</span>
            </h1>{" "}
          </center>
          <p className="text-center lg:text-sm text-[11px] md:text-sm  flex justify-between px-5 gap-4 para">
            <span data-aos="fade-up" data-aos-duration="1000" className="">
              A Crypto Enthusiast{" "}
            </span>
            <span data-aos="fade-up" data-aos-duration="2000">
              Content Creator
            </span>
            <span data-aos="fade-up" data-aos-duration="3000">
              Community Builder
            </span>
          </p>

          
        </div>
        <div className="glow"></div>
      </div>
      <div className=' relative btc-container'>
        <img src={rocket} alt=""  className="btc lg:h-38 md:h-38 h-20 absolute lg:bottom-0 bottom-15  lg:right-40 right-5 md:right-20 md:bottom-30"/>
        </div>
        <div className=' relative btc-container'>
        <img src={btc3} alt=""  className="btc2 h-12 absolute bottom-70 lg:hidden md:hidden block  left-10 "/>
        </div>
    </>
  );
};

export default BannerSection;
