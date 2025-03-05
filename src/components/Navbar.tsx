// import { BsCurrencyBitcoin } from "react-icons/bs";
import { FaXTwitter, FaYoutube, FaTelegram } from "react-icons/fa6";
import { Link } from "react-scroll";
import { IoIosMenu } from "react-icons/io";
import { LiaTimesSolid } from "react-icons/lia";
import { useState } from "react";

import  Avatar  from "../assets/img/logo.jpg";
const Navbar = () => {
  const [display, setDisplay ]= useState("hidden");

  function handleClick() {
    setDisplay(display === "hidden" ? "block" : "hidden");
  }
  return (
    <>
      <div className="nav flex justify-between items-center  align-center p-4 py-6 align-center">
        <a href="" className="flex ms-3 gap-2 align-center cursor-pointer ">
        <img src={Avatar} alt="" className="w-12 h-auto rounded-full " />
          <div className="logo lg:text-3xl text-xl text-white heading mt-1.5">Adam</div>
  
       
        </a>
        <div
          data-aos="fade-down"
          data-aos-duration="1000"
          className="flex justify-between  items-center right-0 font-bold lg:gap-8 gap-3 px-3 py-3 para lg:text-sm text-[12px] lg:heading backdrop-filter backdrop-blur-lg fixed bg-white/5 bg-opacity-30  lg:px-6 lg:py-4 rounded-4xl border- border-gray-200 me-3"
        >
       
          <Link to="about" smooth={true} duration={500}  className={`${display} lg:block cursor-pointer`}>
            About
          </Link>
         
          <Link to="channel" smooth={true} duration={500}  className={`${display} lg:block cursor-pointer flex gap-1 `}>
          <div className="flex gap-1">
          <FaYoutube className="lg:text-lg text-sm lg:pt-0 pt-0.5" /> Channel
          </div>
         
          </Link>
          <a href="" className={`${display} lg:block`}>
            Contact
          </a>
          <a href="" className={`${display} lg:block`}>
            <FaXTwitter className="text-lg" />
          </a>
          <a href="" className={`${display} lg:block`}>
            <FaTelegram className="text-lg" />
          </a>
            <a className={`lg:hidden ${display === "hidden" ? "block" : "hidden"}`} onClick={() => handleClick()}>
            <IoIosMenu className="text-2xl" />
            </a>
            <a className={`lg:hidden ${display === "hidden" ? "hidden" : "block"} bg-white p-2 rounded-4xl`} onClick={() => handleClick()}>
            <LiaTimesSolid className="text-2xl text-black" />
            </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
