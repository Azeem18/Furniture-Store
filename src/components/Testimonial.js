import React from "react";
import { useState } from "react";
import reviewData from "../data";

const Testimonial = () => {
  const prev = "<";
  const next = ">";
  const [reviewCount, setReviewCount] = useState(0);
  const dots = [0, 1, 2, 3, 4, 5, 6, 7];
  const dotButtons = dots.map((val) => {
    return (
      <button
        className={`border bg-gray-400 mx-1.5 rounded-full h-3 w-3 ${
          val === reviewCount ? "bg-teal-800" : ""
        }`}
      ></button>
    );
  });

  const togglereview = (type) => {
    if (type === "back") {
      reviewCount === 0
        ? setReviewCount(0)
        : setReviewCount((prev) => prev - 1);
    } else {
      reviewCount === 7
        ? setReviewCount(0)
        : setReviewCount((prev) => prev + 1);
    }
  };
  return (
    <div>
      <h1 className=" text-center text-3xl font-semibold mt-5 text-stone-800">
        Testimonials
      </h1>
      <div className=" flex mt-20 mb-16">
        <button
          onClick={() => togglereview("back")} //Call toggleReview() inside arrow function while using onClick handler to avoid error of useState hook infinite loop
          className="ml-96 border rounded-full bg-gray-300 text-black w-11 h-8 pb-11 text-3xl hover:bg-gray-400"
        >
          {prev}
        </button>
        <p className=" w-2/5 text-justify mx-32 -mt-10 text-lg">
          {reviewData[reviewCount].review}
        </p>
        <button
          onClick={() => togglereview("for")}
          className=" mr-44 border rounded-full bg-teal-800 text-white w-11 h-8 pb-11 text-3xl hover:bg-teal-700"
        >
          {next}
        </button>
      </div>
      <div className="flex flex-col items-center justify-center">
        <img
          className=" h-20 w-20"
          src={reviewData[reviewCount].image}
          alt="Person"
        ></img>
        <p className=" font-semibold">{reviewData[reviewCount].name} </p>
        <p>{reviewData[reviewCount].designation}</p>
        <div className=" mt-10">{dotButtons}</div>
      </div>
    </div>
  );
};

export default Testimonial;
