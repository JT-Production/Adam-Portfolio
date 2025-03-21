import Spline from "@splinetool/react-spline";
import threeD from "../assets/vid/chips.mp4";
import { BsCurrencyBitcoin } from "react-icons/bs";
import { FaTelegram } from "react-icons/fa6";

const BannerSection = () => {
  return (
    <div>
      <div className="glow lg:translate-y-20 lg:translate-x-220  lg:p-0 lg:mt-0 mt-30 lg:block hidden"></div>
      <div className="grid lg:grid-cols-2 gap-6 grid-cols-1">
        <div className="lg:px-30 lg:py-20 px-8 pt-30">
          <h1 className=" justify-center    text-start heading lg:mb-0 mb-0 ">
            <span className="cssanimation leBlurIn sequence lg:text-6xl text-4xl">
              ADAM
            </span>
            <div className="flex p-0 m-0">
              <span className="lg:text-9xl text-7xl font-bold flex ">
                <BsCurrencyBitcoin
                  className="-translate-x-6 -translate-y-1 lg:relative md:relative absolute "
                  style={{ color: "orange" }}
                />{" "}
                <div className="lg:-translate-x-12 cssanimation leBlurIn sequence lg:ms-0 md:ms-0 ms-9 ">
                  ITCOIN
                </div>
              </span>
            </div>
          </h1>
          <p className="text-start w-68 lg:text-md text-sm lg:w-auto mb-3">
            I teach marketing strategies , build thriving communities, create
            content around all things crypto— helping brands and individuals grow
            with impact.
          </p>

          <a
            href="https://t.me/AdamBitcoinP2P1"
            className="cursor-pointer float-left bg-gradient-to-b mt-3 from--500 to--600  lg:px-8 lg:py-2 px-5 py-2 rounded-full border-[1px] border-orange-500 text-white font-medium group"
            style={{ border: "1px solid #FFA500" }}
          >
            <div className="relative overflow-hidden">
              <p className="group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] text-sm lg:text-lg flex items-center justify-between">
                Get in touch <FaTelegram className="lg:text-lg text-sm ms-2" />
              </p>
              <p className="absolute top-7 left-0 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] text-sm lg:text-lg flex items-center justify-between">
                Get in touch <FaTelegram className="lg:text-lg text-sm ms-2" />
              </p>
            </div>
          </a>
        </div>
        <div className=" lg:flex justify-end align-end md:hidden hidden">
          <div className="">
            <div
              data-aos="fade-up"
              data-aos-duration="2000"
              className=" cursor-pointer hover:translate-x-20 transition delay-150 duration-300 ease-in-out blur-box text-white lg:translate-y-15 translate-x-33 p-3 border rounded-xl w-50 bg-white/5  shadow-lg shadow-gray-400/20 border-zinc-800 backdrop-filter backdrop-blur-xl bg-opacity-50 "
            >
              <p className="para  text-sm text-start">
                I love to teach Marketing.
              </p>

              <p></p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="2000"
              className="a cursor-pointer hover:translate-x-6 transition delay-150 duration-300 ease-in-out blur-box text-white  translate-y-38 translate-x-15 p-3 border rounded-xl w-56 bg-white/5  shadow-lg shadow-gray-400/20 border-zinc-800 backdrop-filter backdrop-blur-xl bg-opacity-50 "
            >
              <p className="para  text-sm text-start">
                I create content revolving Web3
              </p>

              <p></p>
            </div>

            <div
              data-aos="fade-up"
              data-aos-duration="2000"
              className="a cursor-pointer hover:translate-x-20 transition delay-150 duration-300 ease-in-out blur-box text-white  translate-y-66 translate-x-25 p-3 border rounded-xl w-60 bg-white/5  shadow-lg shadow-gray-400/20 border-zinc-800 backdrop-filter backdrop-blur-xl bg-opacity-50 "
            >
              <p className="para  text-sm text-start">
                I love to teach community growth.
              </p>

              <p></p>
            </div>

            <div
              data-aos="fade-up"
              data-aos-duration="2000"
              className="a cursor-pointer  lg:block hidden  transition delay-150 duration-300 ease-in-out blur-box text-white  translate-y-72 translate-x-125 p-3 border rounded-xl w-41 lg:bg-white/5 md:bg-white/5 bg-white/30   shadow-lg shadow-gray-400/20 border-zinc-800 backdrop-filter backdrop-blur-xl bg-opacity-50 "
            >
              <p className="para  text-sm font text-start">
                Ex-Bitcoin Maximalist
              </p>

              <p></p>
            </div>
          </div>
          <Spline
            scene="https://prod.spline.design/iX9i2b5SK-JxmPus/scene.splinecode"
            className="three-d lg:w-[1000px]  lg:h-[500px] lg:block hidden"
          />
          <video
            src={threeD}
            autoPlay
            loop
            muted
            className=" object-cover lg:hidden block h-100"
          ></video>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
