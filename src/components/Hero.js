import React from "react";
import sofaImg from "../img/furniture/sofa1.png";
import matrixImg from "../img/matrices/matrix.png";
const Hero = () => {
  return (
    <div id="hero" className=" relative bg-emerald-900 flex">
      <div className=" h-fit">
        <h1 className=" text-[33px] font-serif font-semibold text-white pt-32 ml-32 mr-5">
          Modern Interior Design Studio
        </h1>
        <div className="pt-32 pb-32  pl-32 ">
          <button className=" text-sm mr-4 px-8 py-3 text-black border rounded-full bg-yellow-500 hover:bg-yellow-400">
            Shop Now
          </button>
          <button className=" text-sm mr-4 px-10 py-3 text-white border rounded-full hover:bg-emerald-800">
            Explore
          </button>
        </div>
      </div>
      <img
        className=" mr-32 mt-12 h-1/2 w-1/2 z-10"
        src={sofaImg}
        alt="Sofa"
      ></img>
      <img
        className=" absolute h-44 w-64 top-24 right-32 z-1" //for z-index provide higher value to image which should be infront and lower value to image which should be at back
        src={matrixImg}
        alt="matrix"
      ></img>
    </div>
  );
};

export default Hero;
