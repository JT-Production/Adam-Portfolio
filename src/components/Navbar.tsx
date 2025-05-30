import { Link } from "react-scroll";
import { IoIosMenu } from "react-icons/io";
import { LiaTimesSolid } from "react-icons/lia";
import { useEffect, useState } from "react";
import Avatar from "../assets/img/adam-img.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { MdOutlineCurrencyBitcoin } from "react-icons/md";

const Navbar = () => {
  const [display, setDisplay] = useState("hidden");

  function handleClick() {
    setDisplay(display === "hidden" ? "block" : "hidden");
  }

  useEffect(() => {
    AOS.init();
  });
  return (
    <>
      <div className="nav flex justify-between items-center  p-4 lg:px-8 pt-3 align-center z-10 inset-0  relative">
        <a
          href=""
          className="flex align-center cursor-pointer "
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <img src={Avatar} alt="" className="w-12 h-12 rounded-full " />
        </a>

         <h1
              style={{
                // fontSize: ['text-5xl', 'text-7xl'],
                textTransform: "uppercase",
                fontWeight: "normal",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                // color: "transparent",
                // backgroundClip: "text",
                // backgroundImage:
                //   "linear-gradient(to right, #fff7ed, #f97316, #7c2d12)",
              }}
              className="text-3xl lg:text-6xl font-bolder items-center mb-3 mx-auto -translate-x-4 heading text-orange-400"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              Adam
              <span style={{ display: "flex" }} className="items-center text-orange-400_____">
                <MdOutlineCurrencyBitcoin
                  // style={{ color: "#f97316" }}
                  className="translate-x-1 lg:translate-x-2 -translate-y-0.5"
                />
                itcoin
              </span>
            </h1>

        <div
          data-aos="fade-down"
          data-aos-duration="1000"
          className="flex justify-between font-body items-center l right-0  lg:gap-8 gap-3 px-3 py-3 lg:text-sm text-[13px] lg:heading
            fixed  lg:px-8 lg:py-4 rounded-4xl border- border-gray-200 me-3"
        >
          <Link
            to="about"
            smooth={true}
            duration={500}
            className={`${display} lg:block cursor-pointer`}
          >
            About
          </Link>

          <Link
            to="offer"
            smooth={true}
          
            duration={500}
            className={`${display} lg:block cursor-pointer flex gap-1 `}
          >
            Learn
          </Link>
          <Link
            to=""
            smooth={true}
            duration={500}
            href="https://t.me/adambitcoinp2p1"
            className={`${display} lg:block bg-orange-400 py-2.5 px-4 rounded-3xl `}
          >
            <span className="flex items-center gap-2">Chat Now <BiMessageRoundedDetail className="text-lg" /></span>
          </Link>

          <a
            className={`lg:hidden ${display === "hidden" ? "block" : "hidden"}`}
            onClick={() => handleClick()}
          >
            <IoIosMenu className="text-2xl" />
          </a>
          <a
            className={`lg:hidden ${
              display === "hidden" ? "hidden" : "block"
            } bg-white p-2 rounded-4xl`}
            onClick={() => handleClick()}
          >
            <LiaTimesSolid className="text-2xl text-black" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
