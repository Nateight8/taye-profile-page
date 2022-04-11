import React, { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules

const data = [
  {
    certification: "Diploma in Survey and Geoinformatics",
    year: 1980,
    description:
      "After a successful SSCE, I had OND, HND, Professional Diploma In SURVEYING AND GEOINFORMATICS from the prestigious FEDERAL SCHOOL OF SURVEYING, OYO. A citadel of learning founded in year 1908 that specializes on Surveying and Development.",
  },
  {
    certification: "B.Tech in Surveying and Geoinformatics",
    year: 2021,
    description:
      "I later further my education to obtain B.Tech in SURVEYING AND GEOINFORMATICS at The BELLS UNIVERSITY OF TECHNOLOGY, OTA, and I got LICENSED as a SURVEYOR in NIGERIA 🇳🇬 .",
  },

  {
    certification: "Masters of Science (M.Sc.) in Geographical",
    year: 2021,
    description:
      "I also bagged a Masters of Science (M.Sc.) in Geographical Information System (G.I.S) from the Premier UNIVERSITY OF IBADAN.",
  },

  {
    certification: "B.Sc in Urban and Regional Planning ",
    year: 2021,
    description:
      "After much thought on my ambition to contribute to the upliftment of our local government, I decided to embark on another professional career in URBAN AND REGIONAL PLANNING and bagged a B.Sc in Urban and Regional planning in JOSEPH AYO BABALOLA UNIVERSITY, Ikeji-Arakeji, Osun state in other to enhance my capacity and capability in rural/community planning, development, and sustainability.",
  },

  {
    certification: "M.Sc in Urban and Regional Planning ",
    year: 2021,
    description:
      "Presently, I am rounding up another M.Sc, this time in URBAN AND REGIONAL PLANNING at the foremost UNIVERSITY OF LAGOS, Akoka which is giving me more exposure and zeal to impact more positively in planning rural settlements to Urban development.",
  },
];

import { Autoplay, Pagination, Navigation } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className=" h-[80%] lg:h-80  w-full md:w-[570px]  "
      >
        {data.map(({ certification, year, description }) => (
          <SwiperSlide key={uuidv4()}>
            <div className="mx-6  my-8">
              <h3 className=" text-2xl capitalize mb-1">{certification}</h3>
              <p className=" text-base mb-9 opacity-80">Year: {year}</p>
              <p className=" text-lg font-light">{description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
