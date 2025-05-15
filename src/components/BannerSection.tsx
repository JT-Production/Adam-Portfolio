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
            <h1 style={{
            // fontSize: ['text-5xl', 'text-7xl'],
            textTransform: 'uppercase',
            fontWeight: 'normal',
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
            color: 'transparent',
            backgroundClip: 'text',
            backgroundImage: 'linear-gradient(to right, #fff7ed, #f97316, #7c2d12)'
            }} className="text-5xl lg:text-7xl font-bold items-center" data-aos="fade-down"
          data-aos-duration="1000">
            Adam <span style={{ display: 'flex'}} className="items-center">
              <MdOutlineCurrencyBitcoin style={{ color: '#f97316',  }} className="translate-x-2 lg:translate-x-3" />itcoin
            </span>
            </h1>
         </div>
        <p data-aos="fade-up"
          data-aos-duration="1000" className="lg:text-md text-sm text-center mt-4 lg:w-2/3 mx-auto text-white/60 mb-3 font-body px-1">
          I help people understand Bitcoin, build communities, and grow their
          brand with powerful marketing strategies—so you can thrive in the new
          digital economy.
        </p>
        <div className="flex gap-3 justify-center items-center" data-aos="fade-up"
          data-aos-duration="2000">
          {/* <Button link="" text=" Join My Free Twitter Space" target="_blank" classNam="" />  */}
          <Button link="https://t.me/adambitcoinchat" text="Learn Bitcoin" target="_blank" classNam="flex n items-center gap-2 font-body"  icon={<FaTelegram className="text-[16px]" />} />
          <DownloadPdfButton fileUrl="pdf\BitcoinBlueprintFree.pdf"/>
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
        <div style={{ 
          position: 'fixed',
          inset: 0,
          zIndex: 0
        }}>
        {/* Top left orange glow */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '50%',
          height: '50%',
          background: 'linear-gradient(to bottom right, rgba(249, 115, 22, 0.5), rgba(249, 115, 22, 0.2), transparent)',
          borderRadius: '50%',
          filter: 'blur(120px)',
          transform: 'translate(-50%, -50%)'
        }}></div>

        {/* Bottom right orange glow */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: '60%',
          height: '60%',
          background: 'linear-gradient(to top left, rgba(249, 115, 22, 0.3), rgba(249, 115, 22, 0.3), transparent)',
          borderRadius: '50%',
          filter: 'blur(150px)',
          transform: 'translate(33%, 33%)'
        }}></div>

        {/* Subtle center glow */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '60%',
          height: '40%',
          background: 'linear-gradient(to right, rgba(194, 65, 12, 0.1), rgba(249, 115, 22, 0), rgba(194, 65, 12, 0.05))',
          borderRadius: '50%',
          filter: 'blur(180px)',
          transform: 'translate(-50%, -50%)'
        }}></div>
            </div>

     
      

     

      
    </div>
  );
};

export default BannerSection;
