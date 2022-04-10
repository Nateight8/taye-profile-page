import React from "react";
import Image from "next/dist/client/image";
import img from "../../public/aboutme.jpg";

const AboutMe = () => {
  return (
    <div className="h-screen relative  p-3 md:p-20 ">
      <div className=" flex flex-col md:flex-row justify-center md:items-center md:h-[80vh] md:space-x-12">
        <div className="img  lg:block hidden ">
          <Image
            src={img}
            width={450}
            height={571}
            objectFit="cover"
            className=""
          />
        </div>
        <div className="about-me p-2 my-28 md:p-6  w-full lg:w-[460px]   flex flex-col justify-center  items-start">
          <h2 className=" text-6xl   md:text-7xl mb-6 text-left font-bold">
            About Me
          </h2>
          <p className=" text-xl mb-4 opacity-95 ">
            I am Taiye TAIWO, mnis, M.Sc. from the royal dynasty of Late High
            Chief Doherty Okunola TAIWO (a former Baale of IJEBU Igan meji), I
            am aspiring to represent IJEBU EAST LOCAL GOVERNMENT STATE
            CONSTITUENCY at OGUN STATE HOUSE OF ASSEMBLY, year 2023 general
            election polls 🗳.
          </p>

          <p className="text-xl mb-4 opacity-95">
            I am a native of IJEBU-Igan, Ikija Ward 6. I was born at the Palace
            of the erstwhile Ajalorun of IJEBU-Ife (Oba Oyenuga).
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
