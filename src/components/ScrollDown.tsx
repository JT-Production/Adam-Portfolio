import { RiArrowDownDoubleLine } from "react-icons/ri";
import { Link } from "react-scroll";
const ScrollDown = () => {
  return (
    <>
      <div className="hidden justify-center items-center  h-1 lg:py-10  ">
        <center>
        <Link to="about" smooth={true} duration={700}>
          <span  className="w-100 hover:text-amber-500 transition duration-300 ease-in-out">
            <RiArrowDownDoubleLine className="text-3xl font-bold text-center animate-bounce cursor-pointer"  />
            <span className="font-body text-sm" >Scroll down</span>
          </span>
          </Link> 
        </center>
      </div>
    </>
  );
};

export default ScrollDown;
