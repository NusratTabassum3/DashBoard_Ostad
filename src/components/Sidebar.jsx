import React from "react";

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 sm:hidden lg:block min-h-screen bg-black text-white p-12">
      <div className="min-h-screen flex flex-col justify-start items-start gap-32">
        <div className="flex flex-col items-start gap-3">
          <img src="./Bitmap.png" alt="samantha" className="rounded-md" />
          <h3 className="text-lg">Samantha</h3>
          <p className="text-sm text-gray-500">samantha@emailcom</p>
        </div>

        <div className="flex flex-col gap-3 text-gray-600">
          <div className="">Dashboard</div>
          <div className="text-white">Expenses</div>
          <div className="">Wallents</div>
          <div className="">Summary</div>
          <div className="">Accounts</div>
          <div className="">Settings</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
