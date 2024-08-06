import React from "react";

const Footertags = (props) => {
  return (
    <p className=" text-slate-800 text-lg mb-2 cursor-pointer hover:text-slate-500 hover:text-xl">
      {props.text}
    </p>
  );
};

export default Footertags;
