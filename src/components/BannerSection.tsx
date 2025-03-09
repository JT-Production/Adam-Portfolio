import rocket from '../assets/img/hero-1-1.jpg'
// import btc from '../assets/img/IMG_3805.png'
import btc3 from '../assets/img/why_1-1.png'
import { BsCurrencyBitcoin } from "react-icons/bs";

const BannerSection = () => {
  return (
    <>
      <div className="h-[450px] lg:h-8/12 md:h-8/12 flex justify-center items-center">
        <div className="   text-white ">
          <center>
            {" "}
         
            <h1 className="flex justify-center font-extrabold pt-2  lg:text-[150px] lg:w-fit md:text-[110px]   text-center text-6xl/8 lg:leading-16 heading lg:mb-0 mb-0 ">
            <span className='cssanimation leBlurIn sequence'>ADAM</span> <BsCurrencyBitcoin  className='lg:-translate-y-11 lg:translate-x-5 -translate-y-4 translate-x-2.5'/><span className='cssanimation leBlurIn sequence '>ITCOIN</span>
            </h1>{" "}
          </center>
          <p className="text-center lg:text-sm text-[11px] md:text-sm  flex justify-between px-5 gap-4 para">
            <span data-aos="fade-up" data-aos-duration="1000" className="">
            Ex-Bitcoin Maximalist{" "}
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
        <img src={btc3} alt=""  className="btc2 h-12 absolute bottom-72 lg:hidden md:hidden block  left-10 "/>
        </div>
    </>
  );
};

export default BannerSection;
