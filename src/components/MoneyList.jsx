import React from "react";

export default function MoneyList({ title, value }) {
  return (
    <li className="mb-4 last:mb-0">
      <div className="flex justify-between items-center gap-1 mb-2">
        <h5 className=" font-medium text-md">{title}</h5>
        <data value={value} className="text-black text-md font-light">
          {value}
        </data>
      </div>

      <div className="w-full h-2 bg-gray-600 rounded-full">
        <div
          className="h-full bg-[#31BA96] rounded-full"
          style={{ width: `${value}` }}
        ></div>
      </div>
    </li>
  );
}
