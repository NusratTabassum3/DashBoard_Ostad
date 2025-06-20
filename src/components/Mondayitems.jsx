import React from "react";

const Mondayitems = ({
  title,
  time,
  description,
  amount,
  icon: Icon,
  bgColor,
}) => {
  return (
    <div>
      <div className="flex justify-between items-center mt-3">
        <div className="flex justify-end items-center gap-2">
          <div>
            {Icon && (
              <Icon
                className={`w-8 h-8 ${bgColor} text-white rounded-full p-2`}
              />
            )}
          </div>

          <div className="flex flex-col justify-around">
            <h4>{title}</h4>
            <div className="flex items-center gap-2 text-gray-500">
              <span>{time}</span>
              <ul className="list-disc pl-5">
                <li>{description}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="">
          <p className="font-bold">{amount}</p>
        </div>
      </div>
    </div>
  );
};

export default Mondayitems;
