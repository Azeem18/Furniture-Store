import React from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { CiLocationArrow1 } from "react-icons/ci";
import chair from "../img/furniture/sofa2.png";
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isPopup, setIspopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateName(name)) {
      if (validateEmail(email)) {
        setMessage("Thanks for subscribing");
        setEmail("");
        setName("");
      } else {
        setMessage(
          "Please enter a valid email address. Accepted domains for email are gmail.com, yahoo.com, outlook.com and Email.com"
        );
      }
    } else {
      setMessage(
        "Please enter a valid name. Name should not contain numbers or special characters (except hyphens and apostrophes)."
      );
    }
  };
  const validateEmail = (email) => {
    const reg = /^[a-zA-Z0-9._%+-]+@(gmail|yahoo|outlook|mail)\.com$/;
    return reg.test(email);
  };
  const validateName = (name) => {
    const reg = /^[a-zA-Z]+([a-zA-Z' -][a-zA-Z]+)*$/;
    return reg.test(name);
  };
  return (
    <div className=" relative ml-36 mr-20 mt-28 pb-12">
      <div className=" flex space-x-4">
        <MdOutlineMailOutline className=" text-2xl mt-1.5" />
        <p className=" text-2xl font-semibold">Subscribe to Newsletter</p>
      </div>
      <form className=" flex mt-5" onSubmit={handleSubmit}>
        <input
          className=" w-60 h-12 pl-5 text-xl placeholder-gray-800 placeholder:text-lg border-gray-500 border rounded-lg"
          type="text"
          value={name}
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
        ></input>
        <input
          className=" w-60 h-12 pl-5 ml-5 text-xl placeholder-gray-800 placeholder:text-lg border-gray-500 border rounded-lg"
          type="email"
          value={email}
          placeholder="Enter your e-mail"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <button
          onClick={() => setIspopup(true)}
          type="submit"
          className=" h-12 w-14 bg-teal-800 text-white rounded-lg
          ml-4 hover:bg-teal-700 cursor-pointer"
        >
          <CiLocationArrow1 className=" text-4xl ml-2" />
        </button>
      </form>
      {/* Popup code logic */}
      {isPopup && (
        <div className=" shadow-xl shadow-zinc-700 rounded-full flex flex-col items-center justify-center absolute bottom-40 left-96 w-4/12 h-60 bg-slate-800 ">
          <p className=" text-lg px-10 text-justify text-white">{message}</p>
          <button
            onClick={() => setIspopup(false)}
            className=" text-xl text-white mt-6 w-28 h-10 border rounded-lg border-black bg-slate-600 hover:bg-slate-700"
          >
            Close
          </button>
        </div>
      )}
      <img
        className=" absolute -top-48 right-8 h-[370px] w-[420px]"
        src={chair}
        alt="Chair"
      ></img>
    </div>
  );
};

export default Contact;
