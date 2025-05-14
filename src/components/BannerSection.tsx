import { MdOutlineCurrencyBitcoin } from "react-icons/md";
import Button from "./Button";
import { FaTelegram } from "react-icons/fa6";
import DownloadPdfButton from "./DownloadPdf";



const BannerSection = () => {
  return (
    <div>
      <div className="container flex items-center justify-center h-[460px] z-10 inset-0 mx-auto relative text-center">
       <div className="">
         <div className="">
          <h1 className="lg:text-7xl text-5xl uppercase lg:font-normal text-center heading flex justify-center text-transparent bg-clip-text bg-gradient-to-r from-orange-100 via-orange-500 to-orange-900">Adam <span className="flex items-center "><MdOutlineCurrencyBitcoin className="text-orange-500 lg:translate-x-3" />itcoin</span></h1>
         </div>
        <p className="lg:text-md text-sm text-center mt-4 lg:w-2/3 mx-auto text-white/60 mb-3 font-body px-1">
          I help people understand Bitcoin, build communities, and grow their
          brand with powerful marketing strategies—so you can thrive in the new
          digital economy.
        </p>
        <div className="flex gap-3 justify-center items-center">
          {/* <Button link="" text=" Join My Free Twitter Space" target="_blank" classNam="" />  */}
          <Button link="" text="Learn Bitcoin" target="_blank" classNam="flex n items-center gap-2 font-body"  icon={<FaTelegram className="text-[16px]" />} />
          <DownloadPdfButton fileUrl="pdf\Web3__Growth.pdf"/>
        </div>
       </div>

      </div>
      
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
          linear-gradient(to right, #050505 1px, transparent 1px),
          linear-gradient(to bottom, #050505 1px, transparent 1px)
        `,
          backgroundSize: "100px 80px",
          backgroundPosition: "center ",
        }}
      ></div>
      {/* shapeless glow div */}
      {/* <div
        className="absolute inset-0 z-1"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255, 255, 255, 0.169) 0%, rgba(0, 0, 0, 0.1) 60%)`,
          filter: "blur(100px)",
          width: "50%",
          height: "70%",
          backgroundPosition: "center",
          left: "50%",
          transform: "translateX(-50%)"
        }}></div>
        {/* shapeless orange glow gradient left div */}
      {/* <div
        className="absolute inset-0 z-1"
        style={{
          backgroundImage: `radial-gradient(circle, rgb(234 88 12 / 0.4) 0%, rgb(251 146 60 / 0.2) 100%)`,
          filter: "blur(100px)",
          width: "50%",
          height: "50%",
          backgroundPosition: "center",
          top: "50%",
          right: "0%",
          transform: "translateX(160%)"
        }}></div> */} 
        <div className="fixed inset-0 z-0">
        {/* Top left orange glow */}
        <div className="absolute top-0 left-0 w-[50%] h-[50%] bg-gradient-to-br from-orange-500/50 via-orange-500/20 to-transparent rounded-full blur-[120px] transform -translate-x-1/2 -translate-y-1/2"></div>

        {/* Bottom right orange glow */}
        <div className="absolute bottom-0 right-0 w-[60%] h-[60%] bg-gradient-to-tl from-orange-500/30 via-orange-500/30 to-transparent rounded-full blur-[150px] transform translate-x-1/3 translate-y-1/3"></div>

        {/* Subtle center glow */}
        <div className="absolute top-1/2 left-1/2 w-[60%] h-[40%] bg-gradient-to-r from-orange-700/10 via-orange-500/0 to-orange-700/5 rounded-full blur-[180px] transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

     
      

     

      
    </div>
  );
};

export default BannerSection;
