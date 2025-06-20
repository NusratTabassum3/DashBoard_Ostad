import React from "react";

const Expenses = () => {
  return (
    <div>
      <div className="px-20 py-11">
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl font-bold">Expenses</h1>
          <p className="text-gray-500">01-25 March, 2020</p>
          <img src="/Stats.png" alt="graph" className="mt-4" />
        </div>
      </div>
    </div>
  );
};

export default Expenses;
