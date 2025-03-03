import Button from "./Button";
import  Avatar  from "../assets/img/logo.jpg";
import { FaXTwitter, FaTiktok,  FaYoutube, FaTelegram } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="p-12 h-screen flex justify-center items-center mt-28 lg:mt-19" id="about">
      <div className="grid lg:grid-cols-2 gap-10">
        <div className="bg-zinc-900 w-8/12 p-1 mx-auto rounded-2xl origin-bottom rotate-4 flex justify-end items-end">
         
         <center> <img src={Avatar} alt="" className="w-96 h-auto -rotate-4 rounded-2xl " /></center>
        </div>
        <div className="">
        <h1 className="heading text-white text-3xl py-4 ">About Me</h1>
          <p className="text-white text-[16px] ">
            I'm <span className="text-amber-500 ">Adam</span>, a passionate crypto enthusiast,
            content creator, and community builder. I explore the ever-evolving
            world of blockchain, sharing insights, strategies, and opportunities
            to help others navigate the space. 
             <br /><br />
            Through my content, I aim to
            educate, inspire, and connect like-minded individuals, bridging the
            gap between innovation and real-world adoption. Whether it's NFTs,
            DeFi, or Web3 trends, I break it down in a way that's engaging and
            easy to understand. Join me on this journey as we shape the future
            of digital finance and decentralized communities.
          </p>
          <div className="flex gap-4">
          <Button classNam="gradient-btn" text={<FaXTwitter className="text-lg"/>} link={'https://x.com/@AdamBitcoinP2P1'}/> 
          <Button classNam="gradient-btn" text={<FaTelegram className="text-lg"/>} link={'https://t.me/AdamBitcoinDiary'} />
          <Button classNam="gradient-btn" text={<FaYoutube className="text-lg"/>} link={'https://youtube.com/@AdamBitcoinP2P1'}/> 
          <Button classNam="gradient-btn" text={<FaTiktok className="text-lg"/>} link={'https://tiktok.com/@AdamBitcoinP2P1'} />
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Hero;
