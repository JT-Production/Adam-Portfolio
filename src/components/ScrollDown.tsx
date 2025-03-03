import { RiArrowDownDoubleLine } from "react-icons/ri";
import { Link } from "react-scroll";
const ScrollDown = () => {
  return (
    <>
      <div className="flex justify-center items-center  h-16 lg:py-10 py-20">
        <center>
        <Link to="about" smooth={true} duration={700}>
          <a href="" className="w-100 hover:text-amber-500 transition duration-300 ease-in-out">
            <RiArrowDownDoubleLine className="text-3xl font-bold text-center animate-bounce cursor-pointer"  />
            <a className="para text-sm" >Scroll down</a>
          </a>
          </Link> 
        </center>
      </div>
    </>
  );
};

export default ScrollDown;
