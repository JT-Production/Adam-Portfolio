// import rocket from '../assets/img/hero-1-1.jpg'
// // import btc from '../assets/img/IMG_3805.png'
// import btc3 from '../assets/img/why_1-1.png'
import { BsCurrencyBitcoin } from "react-icons/bs";
// import Spline from '@splinetool/react-spline';

const BannerSection = () => {
  return (
    <>
    {/* <Spline scene="https://prod.spline.design/9n9HUjSlecQklVz8/scene.splinecode" /> */}
    
      <div className="h-[450px] lg:h-6/12 md:h-8/12 flex justify-center items-center">
      
        <div className="   text-white ">
        <div  data-aos="fade-up" data-aos-duration="2000"  className=" blur-box text-white translate-y-10 -translate-x-30 p-3 border rounded-xl w-fit bg-white/5  shadow-lg shadow-gray-400/20 border-zinc-800 backdrop-filter backdrop-blur-xl bg-opacity-50 ">
       <h6 className='heading text-start font-bold mb-2'> Web3 Marketing Educator </h6>
        <p className='para  text-sm text-start'>I love to teach Marketing.</p>
        {/* Guiding creators and <br /> startups to scale. */}
        <p></p>
      </div>
      <div    data-aos="fade-up" data-aos-duration="2000" className="a blur-box text-white translate-y-45 translate-x-150 p-3 border rounded-xl w-fit bg-white/5  shadow-lg shadow-gray-400/20 border-zinc-800 backdrop-filter backdrop-blur-xl bg-opacity-50 ">
       <h6 className='heading text-start font-bold mb-2'> Community builder</h6>
        <p className='para  text-sm text-start'>I love to teach community growth.</p>
        {/* <br /> Guiding passionate builders  in creating thriving communities. */}
        <p></p>
      </div>
          <center>  
            {" "}
         
            <h1 className="flex justify-center font-extrabold pt-2  lg:text-[130px] lg:w-fit md:text-[110px]   text-center text-6xl/8 lg:leading-16 heading lg:mb-0 mb-0 ">
            <span className='cssanimation leBlurIn sequence'>ADAM</span> <BsCurrencyBitcoin  className='lg:-translate-y-11 lg:translate-x-5 -translate-y-4 translate-x-2.5'/><span className='cssanimation leBlurIn sequence '>ITCOIN</span>
            </h1>{" "}
          </center>
          {/* <p className="text-center lg:text-sm text-[12px] md:text-sm  flex justify-between px-5 gap-4 para">
            <span data-aos="fade-up" data-aos-duration="1000" className="">
            Ex-Bitcoin Maximalist{" "}
            </span>
            <span data-aos="fade-up" data-aos-duration="2000">
              Content Creator
            </span>
            <span data-aos="fade-up" data-aos-duration="3000">
              Community Builder
            </span>
          </p> */}

          
        </div>
        

        

        {/* <div className="glow translate-y-50"></div> */}
        {/* <div className="glow translate-y-50"></div> */}
      </div>
     
      {/* <div className=' relative btc-container'>
        <img src={rocket} alt=""  className="btc lg:h-38 md:h-38 h-20 absolute lg:bottom-0 bottom-15  lg:right-40 right-5 md:right-20 md:bottom-30"/>
        </div>
        <div className=' relative btc-container'>
        <img src={btc3} alt=""  className="btc2 h-12 absolute bottom-72 lg:hidden md:hidden block  left-10 "/>
        </div> */}
    </>
  );
};

export default BannerSection;
