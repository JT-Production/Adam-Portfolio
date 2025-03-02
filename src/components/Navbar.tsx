import { BsCurrencyBitcoin } from "react-icons/bs";
const Navbar = () => {
  return (
    <>
      <div className="nav flex justify-between items-center  align-center p-4 ">
        <div className="flex ms-3">
          <div className="logo lg:text-3xl text-white heading">Adam</div>
          <div className="">
            <BsCurrencyBitcoin className="text-orange-400 lg:text-4xl" />
          </div>
        </div>
        <div  data-aos="fade-down"  data-aos-duration="1000" className="flex justify-between items-center right-0 font-bold lg:gap-8 gap-2 px-3 py-2 para text-sm lg:heading backdrop-filter backdrop-blur-sm fixed bg-opacity-30 bg-zinc-800 lg:px-6 lg:py-4 rounded-4xl border-1 border-gray-500 me-3"> 
          <a href="#" className="nav-link">
            Home
          </a>
          <a href="#" className="nav-link">
            About
          </a>
          <a href="#" className="nav-link">
            Services
          </a>
          <a href="#" className="nav-link">
            Contact
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
