import React from "react";
import chair1 from "../img/chair1.png";
import chair2 from "../img/chair2.png";
import chair3 from "../img/chair3.png";

const Banner = () => {
  return (
    <div className=" relative flex mx-36 my-36 z-20">
      <div className=" w-1/5">
        <h1 className=" text-3xl font-semibold w-4/5">
          Crafted with excellent material.
        </h1>
        <p className=" my-10 text-lg">
          Donec mattis porta eros, aliquet finibus risus interdum at. Nulla
          vivethe as it was for us to know what was to be done.
        </p>
        <button className=" text-lg mr-4 px-10 py-3 text-white border rounded-full bg-gray-900 hover:bg-gray-600 ">
          Explore
        </button>
      </div>
      <div className=" w-1/4 relative ml-16">
        <img className=" w-48 h-72 ml-14 -mt-14" src={chair1} alt="Chair"></img>
        <p className=" text-center mt-9 font-bold">Nordic Chair</p>
        <p className=" text-center font-bold">$50.00</p>
        <button className=" ml-36 mt-8 border rounded-full bg-gray-900 text-white px-2 py-0.5 text-3xl">
          +
        </button>
        <div className=" absolute top-12 rounded-3xl -z-20 h-80 w-80 bg-gray-300"></div>
      </div>
      <div className="w-1/4 ml-8">
        <img className=" w-60 h-64" src={chair2} alt="Chair"></img>
        <p className=" ml-12 mt-12 font-bold">Kruzo Aero Chair</p>
        <p className=" ml-20  font-bold">$78.00</p>
      </div>
      <div className="w-1/4 ml-8">
        <img className=" w-36 h-60" src={chair3} alt="Chair"></img>
        <p className=" ml-4 mt-16 font-bold">Ergonomic Chair </p>
        <p className=" ml-12  font-bold">$43.00</p>
      </div>
    </div>
  );
};

export default Banner;
