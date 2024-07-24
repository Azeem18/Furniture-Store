import React from "react";
import { IoPersonOutline } from "react-icons/io5";
import { AiOutlineShoppingCart } from "react-icons/ai";
const Navbar = () => {
  const navData = {
    cl: "pl-12 text-white transition-all duration-300 text-lg hover:text-slate-300",
    hyp: ["#home", "#about", "#services", "#blog", "#contact"],
  };
  const text = ["Home", "About", "Services", "Blog", "Contact us"];
  const navLinks = text.map((data, index) => {
    return (
      <li key={index}>
        <a key={index} className={navData.cl} href={navData.hyp[index]}>
          {data}
        </a>
      </li>
    );
  });

  return (
    <div className=" flex justify-between align-middle h-auto bg-emerald-900 pt-12 pb-6 ">
      <p className=" text-white text-2xl pl-40">Furni.</p>
      <div>
        <nav>
          <ul className=" flex ml-64">{navLinks}</ul>
        </nav>
      </div>
      <div className=" flex pr-80">
        <IoPersonOutline className="text-2xl text-white cursor-pointer hover:text-zinc-200" />
        <AiOutlineShoppingCart className="text-2xl text-white ml-5 cursor-pointer  hover:text-zinc-200" />
      </div>
    </div>
  );
};

export default Navbar;
