import React from "react";
import AboutGrid from "../components/reuseable-components/AboutGrid";
import icon1 from "../img/icons/icon1.png";
import icon2 from "../img/icons/icon2.png";
import icon3 from "../img/icons/icon3.png";
import icon4 from "../img/icons/icon4.png";
import frame1 from "../img/frames/frame1.png";
import matrix2 from "../img/matrices/matrix2.png";

const About = () => {
  return (
    <div id="about" className=" flex ml-32 mr-20 mt-48">
      <div className=" w-[800px]">
        <h1 className=" text-3xl font-semibold">Why Choose Us</h1>
        <p className="text-sm mt-7 text-justify">
          Donec mattis porta eros, aliquet finibus risus interdum at. Nulla
          vivethe as it was for us to know what was to be done. the
        </p>
        <div className=" grid grid-rows-2 grid-cols-2 gap-y-10 gap-x-24 mt-20">
          <AboutGrid
            img={icon1}
            heading="Fast  & Free Shipping "
            text="Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was"
          />
          <AboutGrid
            img={icon2}
            heading="Easy to Shop "
            text="Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was"
          />
          <AboutGrid
            img={icon3}
            heading="24/7 Support "
            text="Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was"
          />
          <AboutGrid
            img={icon4}
            heading="Hassle Free Returns "
            text="Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was"
          />
        </div>
      </div>
      <div className=" z-10 relative ml-32 mr-10">
        <img
          className=" -mt-10 w-[900px] h-[700px]"
          src={frame1}
          alt="frame"
        ></img>
        <img
          className=" absolute -top-14 -left-11 -z-10 h-44 w-64"
          src={matrix2}
          alt="Grid"
        ></img>
      </div>
    </div>
  );
};

export default About;
