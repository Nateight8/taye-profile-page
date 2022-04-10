import React from "react";
import Slider from "./Slider";

function Education() {
  return (
    <div className="text-[#dee9e9] bg-100 w-full  md:p-40 px-9 py-20  flex justify-center items-start flex-col">
      <div className=" w-full lg:w-1/2">
        <h2 className="section_title text-6xl md:text-8xl mb-14 md:mb-20  font-bold">
          Education
        </h2>
        <div className="">
          <Slider />
        </div>
      </div>
    </div>
  );
}

export default Education;
