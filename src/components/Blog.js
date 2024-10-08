import React from "react";
import blogdata from "../blogData";
import { useState } from "react";

const Blog = () => {
  const [allBlogs, setAllBlogs] = useState(false);
  const blogs = blogdata.map((value, index) => {
    return (
      <div id="blog" className="mr-10">
        <a
          href={value.link}
          target="_blank"
          rel="noopener noreferrer" //It is used to prevent the new page from being able to access the window.opener property, which can be a security risk
        >
          <img
            className=" h-[200px] w-[300px] mt-10 hover:opacity-60 rounded-lg"
            src={value.img}
            alt="Blog"
          ></img>
        </a>
        <p className=" text-lg font-bold text-stone-800 mt-10 w-[300px]">
          {value.title}
        </p>
        <p>
          <span className=" italic">{value.author[0]}</span>
          <span className=" font-semibold">{value.author[1]}</span>
          {value.author[2]}
          <span className=" font-semibold">{value.author[3]}</span>
        </p>
      </div>
    );
  });
  return (
    <div className="ml-32 pt-20 pb-40">
      <div className=" flex justify-between ">
        <h1 className=" text-3xl font-bold text-stone-800">Recent Blog</h1>
        <button
          onClick={() => setAllBlogs(true)}
          className=" text-xl font-semibold underline mr-40"
        >
          View All Posts
        </button>
      </div>
      <div className=" flex flex-wrap">
        {allBlogs === true ? blogs : [blogs[0], blogs[1], blogs[2]]}
      </div>
    </div>
  );
};

export default Blog;
