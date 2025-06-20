import React from "react";
import MoneyList from "./MoneyList";

export default function Money() {
  return (
    <div className="px-20 py-11">
      <h3 className="text-xl font-semibold mb-5">Where your money go?</h3>
      <ul className="p-5 bg-white rounded-md shadow-md">
        <MoneyList title="Food and Drink" value={872.4} />
        <MoneyList title="Shopping" value={1378.2} />
        <MoneyList title="Housing" value={928.5} />
        <MoneyList title="Tanspotation" value={420.7} />
        <MoneyList title="Vehicle" value={520.0} />
      </ul>
    </div>
  );
}
