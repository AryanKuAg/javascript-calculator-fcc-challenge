import React from "react";

function Display({ up, down }) {
  return (
    <div
      className="  text-end pr-1 font-silkScreen flex flex-col justify-between"
      id="display"
    >
      <div className="text-[#9896F1] mr-[0.15rem] -m-1">{up}</div>
      <div className="text-4xl m-0 p-0">{down}</div>
    </div>
  );
}

export default Display;
