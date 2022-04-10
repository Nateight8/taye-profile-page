import React from "react";
import img1 from "../../public/1.jpg";
import img2 from "../../public/2.jpg";
import Image from "next/dist/client/image";
import Button from "./Button";

function Work() {
  return (
    <div className="w-full  grid text-[#dee9e9]  grid-rows-2 lg:grid-cols-2  mb-24 md:mb-10">
      <div className="relative img-wrapper  p-7 ">
        <div className=" h-[470px] w-[320px]  absolute -right-3 md:right-14  hover:shadow-sm  shadow-xl z-40">
          <Image src={img1} layout="fill" objectFit="cover" alt="" />
        </div>
        <div className=" h-[320px] w-[470px] absolute bottom-28 -left-11 md:left-11 hover:shadow-sm shadow-2xl">
          <Image src={img2} layout="fill" objectFit="cover" alt="" />
        </div>
      </div>
      <div className="bg px-6 md:pr-[4vw] md:pl-14 my-8">
        <h2 className="md:text-8xl  text-6xl capitalize  mb-8 font-bold">
          How we can <br /> make a difference
        </h2>
        <div className="space-y-4 text-lg md:text-xl font-light opacity-90 mb-4">
          <p>
            I will be glad to serve and represent IJEBU EAST local government
            constituency at the legislative arm of OGUN STATE GOVERNMENT come
            2023.
          </p>
          <p>
            It will gladdened my heart if I’m warmly embraced and accepted as I
            promise to always uphold good virtue, represent the local government
            well (both territory and the people), and raise the standard of
            living bar of the people.
          </p>
          <p>
            Some lorem ipsum dolor place holder text appealing for donation from
            the general public
          </p>

          <p>
            May God continue to guide and protect us all. Kind regards and
            respect.
          </p>
        </div>
        <Button cta="Donate now" />
      </div>
    </div>
  );
}

export default Work;
