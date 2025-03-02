import { RiArrowDownDoubleLine } from "react-icons/ri";
const ScrollDown = () => {
  return (
    <>
      <div className="flex justify-center items-center  h-16 lg:py-20">
        <center>
          <a href="#" className="w-100 hover:text-amber-500 transition duration-300 ease-in-out">
            <RiArrowDownDoubleLine className="text-3xl font-bold text-center animate-bounce cursor-pointer"  />
            <p className="">Scroll down</p>
          </a>
        </center>
      </div>
    </>
  );
};

export default ScrollDown;
