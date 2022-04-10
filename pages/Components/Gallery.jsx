import React from "react";
import GallarySlider from "./GallarySlider";

{
  /* <img src={gallaryImages[2]} className="w-full h-full object-cover" alt="" />; */
}

const Gallery = () => {
  return (
    <section className="flex flex-col md:flex-row justify-start  items-start md:items-center  text-white">
      <h1 className="ml-6 text-6xl md:text-7xl mb-6 text-left font-bold">
        Gallary
      </h1>
      <GallarySlider />
    </section>
  );
};

export default Gallery;
