import React from "react";
import dot from "../../img/icons/dot.png";
const ServicesGrid = (props) => {
  return (
    <div className="flex w-[230px]">
      <img className=" w-3 h-3 mt-2" src={dot} alt="dot"></img>
      <p className=" ml-5 text-sm">{props.text}</p>
    </div>
  );
};

export default ServicesGrid;
