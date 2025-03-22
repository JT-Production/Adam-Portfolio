import Button from "./Button";
import Avatar from "../assets/img/logo.jpg";
import { FaXTwitter, FaTiktok, FaYoutube, FaTelegram } from "react-icons/fa6";

const Hero = () => {
  return (
    <div
      className="p-12 h-screen  my-10 lg:mt-19 z-20"
      id="about"
    >
      <div className="grid lg:grid-cols-2 gap-10">
        <div
          className="bg-zinc-800 lg:w-8/12 w-8/12 md:w-6/12 p-1 mx-auto rounded-2xl origin-bottom rotate-4 flex justify-end items-end z-30"
          style={{ background: "#27272a" }}
          data-aos="fade-right"
          data-aos-duration="3000"
        >
          <center>
            {" "}
            <img
              src={Avatar}
              alt=""
              className="w-96 h-auto -rotate-4 rounded-2xl "
            />
          </center>
        </div>
        <div className="">
          <h1
            className="heading text-white lg:text-3xl text-2xl py-4 "
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            About Me
          </h1>
          <p
            className="text-white lg:text-[16px]  text-sm"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            Hi! I’m{" "}
            <span
              className="heading tracking-wide"
              style={{ color: "#FF8C00" }}
            >
              Adam Bitcoin
            </span>
            , a crypto investor and content creator spreading the word about
            Bitcoin and Web3 wherever I go. I'm currently traveling the world,
            documenting my travels of the good and bad sides of the places I
            visit—like Colombia—and the power of cryptocurrency to connect and
            create freedom for people. <br /> <br />
            Whether I'm shilling Bitcoin or going to some of the most dangerous
            places on earth with a friendly vibe, I'm all about building
            community and sharing knowledge. Join me on the adventures as I chat
            crypto, and collaborate with others in the space. Check out my
            latest videos, hop into the Adam Bitcoin Chat on Telegram, or follow
            along for a mix of travel and crypto content. Together, we're making
            Web3 a little more accessible—one conversation at a time.
            Enjoy the ride!💜
          </p>
          <div
            className="flex gap-4"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <Button
              classNam="gradient-btn"
              text={<FaXTwitter className="text-lg" style={{color: ''}} />}
              link={"https://x.com/@AdamBitcoinP2P1"}
            />
            <Button
              classNam="gradient-btn"
              text={<FaYoutube className="text-lg" style={{color: ' '}} />}
              link={"https://youtube.com/@AdamBitcoinP2P1"}
            />
            <Button
              classNam="gradient-btn"
              text={<FaTelegram className="text-lg" style={{color: ''}} />}
              link={"https://t.me/AdamBitcoinChat"}
            />

            <Button
              classNam="gradient-btn"
              text={<FaTiktok className="text-lg" style={{color: ''}} />}
              link={"https://tiktok.com/@AdamBitcoinP2P1"}
            />
          </div>
        </div>
      </div>

    
  <center className="flex justify-center items-center mt-15">
  <a
            href="https://t.me/AdamBitcoinP2P1"
            className="cursor-pointer float-left bg-gradient-to-b mt-3 from--500 to--600  lg:px-10 lg:py-2 px-8 py-2 rounded-full border-[1px] border-orange-500 text-white font-medium group"
            style={{ border: "1px solid #FFA500"  }}
          >
            <div className="relative overflow-hidden">
              <p className="group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] text-sm lg:text-lg flex items-center justify-between">
                Contact Me
              </p>
              <p className="absolute top-7 left-0 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] text-sm lg:text-lg flex items-center justify-between">
                Contact Me
              </p>
            </div>
          </a>
  </center>

    </div>
  );
};

export default Hero;
