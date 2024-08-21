import React from "react";
import { IoPersonOutline } from "react-icons/io5";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-scroll";

const Navbar = () => {
  const navData = {
    cl: "ml-8 text-white transition-all duration-300 text-sm hover:text-slate-300 whitespace-nowrap cursor-pointer", // whitespace-nowrap prevents word wrapping on new line
    hyp: ["home", "about", "services", "blog", "contact"],
  };
  const text = ["Home", "About", "Services", "Blog", "Contact us"];
  const navLinks = text.map((data, index) => {
    return (
      <li key={index}>
        <Link
          key={index}
          className={navData.cl}
          to={navData.hyp[index]}
          spy={true}
          smooth="linear" //We can also use boolean value like smooth={true}
          offset={-120}
          duration={800}
        >
          {data}
        </Link>
      </li>
    );
  });

  return (
    <div
      id="nav"
      className=" flex justify-between align-middle h-auto bg-emerald-900 pt-12 pb-6 "
    >
      <p className=" text-white text-2xl pl-32">Furni.</p>
      <div>
        <nav className="w-1/2">
          <ul className=" flex ml-80">{navLinks}</ul>
        </nav>
      </div>
      <div className=" flex mr-80 ml-28">
        <IoPersonOutline className="text-xl text-white cursor-pointer hover:text-zinc-200" />
        <AiOutlineShoppingCart className="text-xl text-white ml-5 cursor-pointer  hover:text-zinc-200" />
      </div>
    </div>
  );
};

export default Navbar;
