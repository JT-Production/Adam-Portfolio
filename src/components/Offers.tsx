import bitcoin from "../assets/img/bitcion.png";
import success from "../assets/img/success.jpg";
import market from "../assets/img/marketing-removebg-preview.png";
import DownloadPdfButton from "./DownloadPdf";
import DownloadPdfButton2 from "./DownloadPdf copy";
import Button from "./Button";
import { MdOutlineClass } from "react-icons/md";

const Offers = () => {
  return (
    <div
      className="lg:px-35 pb-10   md:py-0 lg:py-0 lg:mt-0 md:mt-0 relative z-0 inset-0 px-1 "
      id="offer"
    >
      <h1 className="font-bold text-3xl mb-5 px-3">
        Click for more information
      </h1>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 px-3">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="bg-white/10 border border-zinc-700 hover:shadow-zinc-500/50 transition-all duration-1000 ease-in-out cursor-pointer p-6 rounded-2xl shadow-md"
        >
          <img
            src={market}
            alt=""
            className="h-40 cssanimation hu__hu__  lg:mx-auto "
            style={{
              WebkitFilter: "drop-shadow(5px 5px 5px  #ff8c0062)",
              filter: "drop-shadow(5px 5px 10px #ff8c0062)",
            }}
          />
          <h2 className="text-[22px] mb-3 heading ">Bitcoin Blueprint Class</h2>
          <p className="text-white/50">
            One-on-one classes to master Bitcoin from the ground up—perfect for
            beginners or those ready to level up.
          </p>
          <div className="lg:w-auto md:w-50 w-49 flex lg:justify-center items-center">
            <Button
              link="https://buy.stripe.com/7sYaEY4tc8iI3oI3Osebu02"
              icon={<MdOutlineClass className="text-lg" />}
              text="Join class"
              target="_blank"
              classNam="flex item-center lg:w-auto md:w-auto px-8 gap-2 bg-transparent border border-orange-400 hover:bg-zinc-900  font-body lg:px-10 cursor-pointer "
            />
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="bg-white/10 border border-zinc-700 hover:shadow-zinc-500/50 cursor-pointer p-6 rounded-2xl shadow-md"
        >
          <img
            src={success}
            alt=""
            className="h-40 cssanimation hu__hu__  lg:mx-auto"
            style={{
              WebkitFilter: "drop-shadow(5px 5px 5px  #ff8c0062)",
              filter: "drop-shadow(5px 5px 10px #ff8c0062)",
            }}
          />
          <h2 className="text-[22px] mb-3 heading ">
            Bitcoin Blueprint Premium PDF
          </h2>
          <p className="text-white/50">
            Unlock the advanced PDF guide with deeper insights and strategies
            for serious learners.
          </p>
          <div className="lg:w-auto md:w-50 w-49 flex lg:justify-center items-center">
            <DownloadPdfButton2 />
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="bg-white/10 border border-zinc-700 hover:shadow-zinc-500/50 cursor-pointer p-6 rounded-2xl shadow-md"
        >
          <img
            src={bitcoin}
            alt=""
            className="h-40 cssanimation hu__hu__  lg:mx-auto "
            style={{
              WebkitFilter: "drop-shadow(5px 5px 5px  #ff8c0062)",
              filter: "drop-shadow(5px 5px 10px #ff8c0062)",
            }}
          />
          <h2 className="text-[22px] mb-3 heading ">
            Bitcoin Blueprint Free PDF
          </h2>
          <p className="text-white/50">
            Download the beginner-friendly PDF guide to start your Bitcoin
            journey—completely free.
          </p>
          <div className="lg:w-auto md:w-50 w-60 flex lg:justify-center items-center">
            <DownloadPdfButton fileUrl="pdf\BitcoinBlueprintFree.pdf" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
