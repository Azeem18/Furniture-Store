import React from "react";
import Footerlinks from "./reuseable-components/Footerlinks";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className=" flex ml-36 mr-20 mt-28">
        <div className=" w-[432px]">
          <h1 className=" text-3xl font-semibold">Furni.</h1>
          <p className=" text-justify text-[15px] mt-4 mb-14 text-slate-800 w-[350px]">
            Donec mattis porta eros, aliquet finibus risus interdum at. Nulla
            vivethe as it was for us to know what was to be done. the this is a
            long post for the text.`This small text has to be place here, since
            this is
          </p>
          <div className=" flex gap-x-2">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className=" h-10 w-10 py-2.5 px-2.5 border rounded-full bg-gray-300 cursor-pointer hover:bg-gray-400" />
            </a>
            <a
              href="https://www.instagram.com/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className=" h-10 w-10 py-2.5 px-2.5 border rounded-full bg-gray-300 cursor-pointer hover:bg-gray-400" />
            </a>
            <a
              href="https://x.com/?lang=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className=" h-10 w-10 py-2.5 px-2.5 border rounded-full bg-gray-300 cursor-pointer hover:bg-gray-400" />
            </a>
            <a
              href="https://www.linkedin.com/home"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className=" h-10 w-10 py-2.5 px-2.5 border rounded-full bg-gray-300 cursor-pointer hover:bg-gray-400" />
            </a>
          </div>
        </div>
        <div className=" mt-14 ml-10">
          <Footerlinks text="About us" />
          <Footerlinks text="Services" />
          <Footerlinks text="Blog" />
          <Footerlinks text="Contact us" />
        </div>
        <div className=" mt-14 ml-10">
          <Footerlinks text="Support" />
          <Footerlinks text="Knowledge base" />
          <Footerlinks text="Live Chat" />
        </div>
        <div className=" mt-14 ml-10">
          <Footerlinks text="Jobs" />
          <Footerlinks text="Our team" />
          <Footerlinks text="Leadership" />
          <Footerlinks text="Privacy Policy" />
        </div>
        <div className=" mt-14 ml-10">
          <Footerlinks text="Nordic Chair" />
          <Footerlinks text="Kruzo Aero" />
          <Footerlinks text="Ergonomic" />
        </div>
      </div>
      {/* Copyright section */}
      <div className=" ml-36 mr-20 mt-16">
        <hr class="border-[1px] border-slate-800 mr-24"></hr>
        <div className=" flex my-16 ">
          <p className="  text-slate-800 text-sm">
            Copyright 2022 degraft87@gmail.com. All Rights Reserved.
          </p>
          <p className=" text-slate-800 ml-[330px] cursor-pointer text-sm">
            Terms & Conditions
          </p>
          <p className=" text-slate-800 ml-[3rem] cursor-pointer text-sm">
            Privacy Policy
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
