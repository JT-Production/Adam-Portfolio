import rocket from '../assets/img/hero-1-1.jpg'
// import btc from '../assets/img/IMG_3805.png'
import btc3 from '../assets/img/why_1-1.png'

const BannerSection = () => {
  return (
    <>
      <div className="h-8/12 lg:h-8/12 flex justify-center items-center">
        <div className="   text-white ">
          <center>
            {" "}
            <h1 className=" font-extrabold pt-2 lg:text-5xl text-[25px] lg:text-[150px] lg:w-fit w-58 text-center text-base/8 lg:leading-16 heading mb-10 cssanimation leBlurIn sequence">
              ADAM BITCOIN
            </h1>{" "}
          </center>
          <p className="text-center lg:text-sm text-[11px]  flex justify-between px-5 gap-4 para">
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
      </div>
      <div className=' relative btc-container'>
        <img src={rocket} alt=""  className="btc h-38 absolute bottom-0  right-40 "/>
        </div>
        <div className=' relative btc-container'>
        <img src={btc3} alt=""  className="btc h-32 absolute bottom-70  left-40 "/>
        </div>
    </>
  );
};

export default BannerSection;
