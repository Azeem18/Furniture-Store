import React from "react";
import { useState } from "react";

const ServicesProd = (props) => {
  const [isExpanded, setisExpanded] = useState(false);

  const toggleRead = () => {
    setisExpanded(!isExpanded);
  };
  return (
    <div className=" relative flex w-1/2 z-20 -mr-10 mb-20">
      <img className=" w-24 h-32 mr-10" src={props.img} alt="chair"></img>
      <div className=" absolute rounded-3xl top-4 -left-2 -z-20 w-28 h-28 bg-gray-300"></div>
      <div className=" mt-4">
        <h1 className=" font-bold">{props.heading}</h1>
        <p className=" w-4/6 my-2">
          {isExpanded ? props.text : `${props.text.substr(0, 58)}.........`}
        </p>
        <button
          onClick={toggleRead}
          className=" text-neutral-900 font-semibold hover:text-neutral-500"
        >
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      </div>
    </div>
  );
};

export default ServicesProd;
