import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { v4 as uuidv4 } from "uuid";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import Image from "next/image";

const gallaryImages = [
  "/carrousel/1.jpg",
  "/carrousel/2.jpg",
  "/carrousel/3.jpg",
  "/carrousel/4.jpg",
  "/carrousel/5.jpg",
];

export default function GallarySlider() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper h-[60vh] w-[90%] md:w-[60vw] mx-auto"
      >
        {gallaryImages.map((img, idx) => (
          <SwiperSlide key={uuidv4()}>
            <Image
              src={img}
              alt=""
              className="w-full h-full object-cover object-center"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
