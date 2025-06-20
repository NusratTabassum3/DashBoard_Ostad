import { MdLocalGroceryStore } from "react-icons/md";
import { FaCar } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import Todayitems from "./Todayitems";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

const Today = () => {
  return (
    <div className="px-20 mb-5">
      <div className="flex justify-between items-center border-b border-gray-300 py-4">
        <h1 className=" font-semibold">Today</h1>
        <div className="text-gray-500">
          <HiOutlineDotsHorizontal />
        </div>
      </div>

      <Todayitems
        title="Grocery"
        time="5:12pm"
        description="Belanja di pasar"
        amount="-326.800"
        icon={MdLocalGroceryStore}
        bgColor="bg-[#32A7E2]"
      />

      <Todayitems
        title="Transportation"
        time="5:12pm"
        description="Naik bus nmum"
        amount="-15.000"
        icon={FaCar}
        bgColor="bg-[#B548C6]"
      />

      <Todayitems
        title="Housing"
        time="5:12pm"
        description="bayar Listrik"
        amount="-185.750"
        icon={FaHouse}
        bgColor="bg-[#FF8700]"
      />
    </div>
  );
};

export default Today;
