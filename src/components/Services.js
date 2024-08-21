import React from "react";
import frame2 from "../img/frames/frame2.png";
import frame3 from "../img/frames/frame3.png";
import frame4 from "../img/frames/frame4.png";
import matrix3 from "../img/matrices/matrix3.png";
import chair1 from "../img/furniture/chair1.png";
import chair2 from "../img/furniture/chair2.png";
import chair3 from "../img/furniture/chair3.png";
import ServicesGrid from "./reuseable-components/ServicesGrid";
import ServicesProd from "./reuseable-components/ServicesProd";

const Services = () => {
  return (
    <>
      <div id="services" className=" flex ml-36 mr-20 mt-28">
        <div className="w-1/2">
          <img className=" -ml-24 w-64 h-44" src={matrix3} alt="grid"></img>
          <div className="flex">
            <img
              className=" w-[335px] h-[500px] -mt-28"
              src={frame2}
              alt="frame"
            ></img>
            <img
              className=" -mt-[110px] ml-[12px] w-[170px] h-[170px]"
              src={frame4}
              alt="frame"
            ></img>
          </div>
          <img
            className=" w-60 h-[320px] -mt-72 ml-[270px]"
            src={frame3}
            alt="frame"
          ></img>
        </div>
        <div className="w-1/2 ml-28">
          <h1 className=" text-3xl font-bold mt-16 w-[350px]">
            We help you make Modern Interior Design{" "}
          </h1>
          <p className=" mt-6 w-[450px] text-justify text-sm">
            Donec mattis porta eros, aliquet finibus risus interdum at. Nulla
            vivethe as it was for us to know what was to be done. the this is a
            long post for the text.`This small text has to be place here, since
            this is a place holder. You can also chane it.
          </p>
          <div className=" grid grid-rows-2 grid-cols-2 gap-y-6 gap-x-10 mt-10">
            <ServicesGrid text="Donec mattis porta eros,let aliquet finibus ri" />
            <ServicesGrid text="Donec mattis porta eros,let aliquet finibus ri" />
            <ServicesGrid text="Donec mattis porta eros,let aliquet finibus ri" />
            <ServicesGrid text="Donec mattis porta eros,let aliquet finibus ri" />
          </div>
          <button className=" text-sm mr-4 px-10 py-3 mt-10 text-white border rounded-full bg-gray-900 hover:bg-gray-600 ">
            Explore
          </button>
        </div>
      </div>
      {/* Service ProductSection */}
      <div className=" flex ml-20 mr-44 mt-36">
        <ServicesProd
          img={chair1}
          heading="Nordic Chair"
          text="Donec mattis porta eros, aliquet finibus risus in. Donecd Donec mattis porta eros, aliquet finibus risus in. Donecd Donec mattis porta eros, aliquet finibus risus in. Donecd "
        />
        <ServicesProd
          img={chair2}
          heading="Kruzi Aero"
          text="Donec mattis porta eros, aliquet finibus risus in. Donecd Donec mattis porta eros, aliquet finibus risus in. Donecd  Donec mattis porta eros, aliquet finibus risus in. Donecd  "
        />
        <ServicesProd
          img={chair3}
          heading="Ergonomic Chair"
          text="Donec mattis porta eros, aliquet finibus risus in. Donecd Donec mattis porta eros, aliquet finibus risus in. Donecd  Donec mattis porta eros, aliquet finibus risus in. Donecd  "
        />
      </div>
    </>
  );
};

export default Services;
