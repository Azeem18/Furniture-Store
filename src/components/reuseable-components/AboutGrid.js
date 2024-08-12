import React from "react";

const AboutGrid = (props) => {
  return (
    <div className=" relative w-[200px] z-20">
      <img className=" h-6 w-8" src={props.img} alt="Shipping"></img>
      <div className=" absolute top-0.5 left-3 -z-10 border rounded-full bg-gray-400 w-8 h-8 "></div>
      <h1 className=" text-xl font-semibold mt-5">{props.heading}</h1>
      <p className=" text-sm mt-3 text-justify">{props.text}</p>
    </div>
  );
};

export default AboutGrid;
