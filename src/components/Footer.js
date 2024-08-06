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
          <h1 className=" text-4xl font-semibold">Furni.</h1>
          <p className=" text-justify text-lg mt-4 mb-14 text-slate-800">
            Donec mattis porta eros, aliquet finibus risus interdum at. Nulla
            vivethe as it was for us to know what was to be done. the this is a
            long post for the text.`This small text has to be place here, since
            this is
          </p>
          <div className=" flex gap-x-5">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className=" h-12 w-12 py-3 px-3 border rounded-full bg-gray-300 cursor-pointer hover:bg-gray-400" />
            </a>
            <a
              href="https://www.instagram.com/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className=" h-12 w-12 py-3 px-3 border rounded-full bg-gray-300 cursor-pointer hover:bg-gray-400" />
            </a>
            <a
              href="https://x.com/?lang=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className=" h-12 w-12 py-3 px-3 border rounded-full bg-gray-300 cursor-pointer hover:bg-gray-400" />
            </a>
            <a
              href="https://www.linkedin.com/home"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className=" h-12 w-12 py-3 px-3 border rounded-full bg-gray-300 cursor-pointer hover:bg-gray-400" />
            </a>
          </div>
        </div>
        <div className=" mt-14 ml-40">
          <Footerlinks text="About us" />
          <Footerlinks text="Services" />
          <Footerlinks text="Blog" />
          <Footerlinks text="Contact us" />
        </div>
        <div className=" mt-14 ml-20">
          <Footerlinks text="Support" />
          <Footerlinks text="Knowledge base" />
          <Footerlinks text="Live Chat" />
        </div>
        <div className=" mt-14 ml-20">
          <Footerlinks text="Jobs" />
          <Footerlinks text="Our team" />
          <Footerlinks text="Leadership" />
          <Footerlinks text="Privacy Policy" />
        </div>
        <div className=" mt-14 ml-20">
          <Footerlinks text="Nordic Chair" />
          <Footerlinks text="Kruzo Aero" />
          <Footerlinks text="Ergonomic" />
        </div>
      </div>
      <div className=" ml-36 mr-20 mt-16">
        <hr class="border-[1px] border-slate-800 mr-44"></hr>
        <div className=" flex my-16 ">
          <p className="  text-slate-800">
            Copyright 2022 degraft87@gmail.com. All Rights Reserved.
          </p>
          <p className=" text-slate-800 ml-[44rem] cursor-pointer">
            Terms & Conditions
          </p>
          <p className=" text-slate-800 ml-[3rem] cursor-pointer">
            Privacy Policy
          </p>
        </div>
      </div>
      {/* Copyright section */}
    </>
  );
};

export default Footer;
