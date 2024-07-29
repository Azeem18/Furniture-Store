import React from "react";
import dot from "../../img/dot.png";
const ServicesGrid = (props) => {
  return (
    <div className="flex w-8/12">
      <img className=" w-3 h-3 mt-2" src={dot} alt="dot"></img>
      <p className=" ml-5">{props.text}</p>
    </div>
  );
};

export default ServicesGrid;
