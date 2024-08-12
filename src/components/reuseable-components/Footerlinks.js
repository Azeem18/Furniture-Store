import React from "react";

const Footertags = (props) => {
  return (
    <p className=" text-slate-800 text-sm mb-2 cursor-pointer hover:text-slate-500">
      {props.text}
    </p>
  );
};

export default Footertags;
