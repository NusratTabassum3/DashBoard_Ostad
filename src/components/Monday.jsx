import Mondayitems from "./Mondayitems";
import { MdFoodBank } from "react-icons/md";
import { RiMovieFill } from "react-icons/ri";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

const Monday = () => {
  return (
    <div className="px-20">
      <div className="flex justify-between items-center border-b border-gray-300 py-4">
        <h1 className=" font-semibold"> Monday, 23 March 2020</h1>
        <div className="text-gray-500">
          <HiOutlineDotsHorizontal />
        </div>
      </div>
      <Mondayitems
        title="Food and Drink"
        time="5:12pm"
        description="Makan Steak"
        amount="-156.000"
        icon={MdFoodBank}
        bgColor="bg-[#DC3434]"
      />

      <Mondayitems
        title="Entertainment"
        time="5:12pm"
        description="Naik bus nmum"
        amount="-35.200"
        icon={RiMovieFill}
        bgColor="bg-[#4BA83D]"
      />
    </div>
  );
};

export default Monday;
