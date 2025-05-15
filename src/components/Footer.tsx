import { FaInstagram, FaTelegram } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";
import { RiTwitterXFill } from "react-icons/ri";


const Footer = () => {
  return (
    <center>
      <footer
        className="w-full lg:px-20 bg-zinc-900   border-t border-zinc-800"
        style={{ background: "#23232351!Important" }}
        id="contact"
      >
        
       <div className="lg:flex justify-between items-center py-4 lg:flex-row flex-col-reverse">
         <div className=" grow-0 lg:text-start lg:order-0 order-1 text-zinc-400 font-body mb-2   text-center" style={{color: 'gray'}}>Copyright © 2025 Adam Bitcoin.
        </div>

        <div className="flex gap-6 items-center text-xl cursor-pointer relative inset-0 lg:px-0 md:px-0 pl-30">
          <a href="https://x.com/@AdamBitcoinP2P1"><RiTwitterXFill /></a>
          <a href="https://youtube.com/@AdamBitcoinP2P1"> <FiYoutube /></a>
          <a href="https://t.me/AdamBitcoinChat"><FaTelegram /></a>
          <a href="https://www.instagram.com/adambitcoinp2p1?igsh=aDV5bThlejVyeDN0"><FaInstagram /></a>
        </div>
       </div>
         
       
      </footer>
    </center>
  );
};

export default Footer;
