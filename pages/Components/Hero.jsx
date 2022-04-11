import React from "react";
import img from "../../public/heroImage.jpg";
import Image from "next/dist/client/image";

function Hero() {
  return (
    <div className="h-[90vh] w-full bg-black relative" id="Home">
      <Image
        src={img}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        alt=""
      />

      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-br from-transparent to-[#001011]" />
      <div className="text-[#DEE9E9] absolute z-10   top-[60%] lg:top-1/3   right-8   lg:right-20  text-right ">
        <h1 className=" text-5xl md:text-6xl lg:text-8xl  capitalize font-medium">
          You want great <br />
          results, Taiye wants <br />
          <span className=" text-[#FF6712] font-bold">great resolve</span>
        </h1>
        <p className=" text-xl md:text-3xl lg:text-4xl text-[#18E5F0] mt-2">
          ...let’s bring some slogans here
        </p>
      </div>
    </div>
  );
}

export default Hero;
