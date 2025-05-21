import React from "react";

export const DropdownMenu = () => {
  return (
    <div className="flex gap-4">
      <select className="px-4 py-2 border rounded-lg">
        <option>Day</option>
        <option>Week</option>
        <option>Month</option>
      </select>
      <select className="px-4 py-2 border rounded-lg">
        <option>Time</option>
        <option>Morning</option>
        <option>Evening</option>
      </select>
      <select className="px-4 py-2 border rounded-lg">
        <option>Environment</option>
        <option>Indoor</option>
        <option>Outdoor</option>
      </select>
    </div>
  );
};
