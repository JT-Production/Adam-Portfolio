import { BsCurrencyBitcoin } from "react-icons/bs";
const Navbar = () => {
  return (
    <>
      <div className="nav flex  items-center  align-center p-4 ">
        <div className="flex ms-4">
          <div className="logo text-3xl text-white heading">Adam</div>
          <div className="">
            <BsCurrencyBitcoin className="text-orange-400 text-4xl" />
          </div>
        </div>

      </div>
    </>
  );
};

export default Navbar;
