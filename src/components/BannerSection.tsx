import {
 
  MdOutlineClass,

} from "react-icons/md";
import Button from "./Button";
// import DownloadPdfButton from "./DownloadPdf";
import bannerVid from "../assets/vid/banner vid.mp4";
import poster from "../assets/img/thumbnails.png"; // Adjust the path as necessary

const BannerSection = () => {
  return (
    <div>
      <div className="container flex items-center justify-center h-[460px] z-10 inset-0 mx-auto relative text-center mt-10">
        <div className="">
          <div className="">
            <h1 className="lg:text-3xl break-all heading text-[22px] lg:w-7/12 mx-auto px-4 text-center">
              <span className="text-orange-400">Learn</span> how the future of <span className="text-orange-400">money</span> works — and finally feel <br /> <span className="text-orange-400">confident </span>
               using it.
            </h1>

            <center>
              <video
                src={bannerVid}
                controls
                playsInline
                preload="none"
                // poster="/images/video-thumbnail.jpg"
                poster={poster}
                className="lg:h-70 px-10"
                style={{ width: "auto" }}
              />
            </center>
          </div>
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            className="lg:text-lg text-sm text-center mt-4  lg:w-7/12 mx-auto text-white/90 mb-3 font-body px-2"
          >
            You’ve watched from the sidelines long enough — overwhelmed by
            wallets, mining, and all the noise. Bitcoin isn’t going away, and
            the Bitcoin Blueprint breaks it down so you can finally understand
            this new digital economy.
          </p>
          <div
            className="flex gap-3 justify-center items-center"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            {/* <Button link="" text=" Join My Free Twitter Space" target="_blank" classNam="" />  */}
            <Button
              link="https://t.me/adambitcoinchat"
              text="Apply for class"
              target="_blank"
              classNam="flex px-8  items-center gap-1 font-body "
              icon={<MdOutlineClass className="text-[16px]" />}
            />
            {/* <DownloadPdfButton fileUrl="pdf\BitcoinBlueprintFree.pdf" /> */}
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

      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
        }}
      >
        {/* Top left orange glow */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "50%",
            height: "50%",
            background:
              "linear-gradient(to bottom right, rgba(249, 115, 22, 0.5), rgba(249, 115, 22, 0.2), transparent)",
            borderRadius: "50%",
            filter: "blur(120px)",
            transform: "translate(-50%, -50%)",
          }}
        ></div>

        {/* Bottom right orange glow */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            width: "60%",
            height: "60%",
            background:
              "linear-gradient(to top left, rgba(249, 115, 22, 0.3), rgba(249, 115, 22, 0.3), transparent)",
            borderRadius: "50%",
            filter: "blur(150px)",
            transform: "translate(33%, 33%)",
          }}
        ></div>

        {/* Subtle center glow */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "60%",
            height: "40%",
            background:
              "linear-gradient(to right, rgba(194, 65, 12, 0.1), rgba(249, 115, 22, 0), rgba(194, 65, 12, 0.05))",
            borderRadius: "50%",
            filter: "blur(180px)",
            transform: "translate(-50%, -50%)",
          }}
        ></div>
      </div>
    </div>
  );
};

export default BannerSection;
