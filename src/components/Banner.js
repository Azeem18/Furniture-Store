import React from "react";
import chair1 from "../img/furniture/chair1.png";
import chair2 from "../img/furniture/chair2.png";
import chair3 from "../img/furniture/chair3.png";

const Banner = () => {
  return (
    <div className=" relative flex mx-32 my-36 z-20">
      <div className=" w-[250px]">
        <h1 className=" text-3xl font-semibold w-full">
          Crafted with excellent material.
        </h1>
        <p className=" my-10 text-sm text-justify">
          Donec mattis porta eros, aliquet finibus risus interdum at. Nulla
          vivethe as it was for us to know what was to be done.
        </p>
        <button className=" text-sm mr-4 px-10 py-3 text-white border rounded-full bg-gray-900 hover:bg-gray-600 ">
          Explore
        </button>
      </div>
      <div className=" w-[250px] relative ml-16">
        <img
          className=" w-[180px] h-[260px] ml-8 -mt-14"
          src={chair1}
          alt="Chair"
        ></img>
        <p className=" ml-[80px] mt-9 font-bold">Nordic Chair</p>
        <p className=" ml-[100px] font-bold">$50.00</p>
        <button className=" ml-[110px] mt-5 border rounded-full bg-gray-900 text-white w-10 h-2 pb-10 text-2xl hover:bg-gray-600">
          +
        </button>
        <div className=" absolute top-12 rounded-3xl -z-20 h-[280px] w-[250px] bg-gray-300"></div>
      </div>
      <div className="w-[250px] ml-20">
        <img className=" w-60 h-64" src={chair2} alt="Chair"></img>
        <p className=" ml-11 mt-12 font-bold">Kruzo Aero Chair</p>
        <p className=" ml-20  font-bold">$78.00</p>
      </div>
      <div className="w-1/4 ml-20">
        <img className=" w-36 h-60" src={chair3} alt="Chair"></img>
        <p className=" ml-4 mt-16 font-bold">Ergonomic Chair </p>
        <p className=" ml-12  font-bold">$43.00</p>
      </div>
    </div>
  );
};

export default Banner;
