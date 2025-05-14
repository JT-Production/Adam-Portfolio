import { FiYoutube } from "react-icons/fi";
import Avatar from "../assets/img/adam-img.jpg";
import { RiTwitterXFill } from "react-icons/ri";
import { FaTelegram } from "react-icons/fa6";
import { IoLogoTiktok } from "react-icons/io5";


const Hero = () => {
  return (
    <div
      className="p-12 h-screen lg:px-40 my-10 lg:mt-19 z-20 px-5"
      id="about"
    >
      <div className="grid lg:grid-cols-3 gap- ">
       
        <div className="  rounded-4xl col-span-2">
          <h1
            className="heading text-white lg:text-3xl text-2xl py-4 "
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            About Me
          </h1>
          <p
            className="text-white lg:text-[16px] font-body text-sm"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            Hi! I’m{" "}
            <span
              className="font-bold tracking-wide"
              style={{ color: "#FF8C00" }}
            >
              Adam Bitcoin
            </span>
            ,  a Bitcoin investor since 2014 and content creator dedicated to helping people 
            understand the life-changing potential of Bitcoin. <br /> <br />
            Right now, I’m inviting you to take the next step toward financial freedom by joining
             my Bitcoin Education Class—designed for beginners and curious learners who want 
             real guidance -not hype.
          </p>
          <br />
          <p className="font-body text-[16px] text-white text-sm" >
            In just a few sessions, you’ll gain the knowledge and confidence to: <br />

            <ul className="mt-2 marker:text-orange-400 ">
              <li className="list-disc list-inside mb-2">
            Navigate Bitcoin safely
              </li>
              <li className="list-disc list-inside mb-2">
      Store and protect your wealth
              </li>
              <li className="list-disc list-inside mb-2">
                Understand the future of money
              </li>
              <li className="list-disc list-inside mb-2">
    Join a thriving global community
              </li>
            </ul>
{/* ✔️ Navigate Bitcoin safely <br />

✔️ Store and protect your wealth <br />
✔️ Understand the future of money <br />
✔️ Join a thriving global community <br /> */}
<br /> 
<p className="font-bold ">Bitcoin is no longer the future—it's the now.
Let me show you how to use it wisely</p>
          </p>
          {/* <div
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
          </div> */}
        </div>

         {/* <div
          className=" h-auto lg:w-full w-8/12 bg-orange-300/30 md:w-6/12 p-1 mx-auto rounded-2xl origin-bottom rotate-4 flex justify-end items-end z-30"
          style={{ background: "" }}
          data-aos="fade-right"
          data-aos-duration="3000"
        > */}
          <center className="flex justify-center items-center">
            {" "}
            <img
              src={Avatar}
              alt=""
              className="lg:w-96 lg:h-auto md:w-96  rounded-4xl w-[6000px] lg:my-0 my-5"
            />
          </center>
        {/* </div> */}
      </div>


           <div className="flex justify-center font-body items-center lg:gap-8 gap-4 pt-10 relative inset-0 z-0">
            <a href="https://x.com/@AdamBitcoinP2P1" className="text-white lg:text-lg text-sm flex gap-2 items-center  relative inset-0 " style={{ color: "#FF8C00" }}>
            <RiTwitterXFill /> Twitter
            </a>
            <a href="https://youtube.com/@AdamBitcoinP2P1" className="text-white lg:text-lg text-sm flex gap-2 items-center  relative inset-0 " style={{ color: "#FF8C00" }}>
             <FiYoutube /> Youtube
            </a>
            <a href="https://t.me/AdamBitcoinChat" className="text-white lg:text-lg text-sm flex gap-2 items-center  relative inset-0 " style={{ color: "#FF8C00" }}>
             <FaTelegram /> Telegram
            </a>
            
            <a href="https://tiktok.com/@AdamBitcoinP2P1" className="text-white lg:text-lg text-sm flex gap-2 items-center  relative inset-0 " style={{ color: "#FF8C00" }}>
             <IoLogoTiktok /> Tiktok
            </a>
          </div>
          
    </div>
  );
};

export default Hero;
