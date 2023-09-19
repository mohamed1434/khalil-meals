"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";

import { Navigation } from "swiper/modules";
import Image from "next/image";
import { food } from "@/constants";
import { Pagination } from "swiper/modules";
import CarDetails from "./CardDetails";
import { useState } from "react";

const Slider = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [itemIndex, setItemIndex] = useState(0);
  return (
    <>
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        pagination={{
          clickable: true,
        }}
        className="flex justify-center w-full sm:w-full items-center h-[10%] sm:h-[50%]"
      >
        {food.map((item, index) => (
          <>
            <SwiperSlide key={item.id}>
              <div
                onClick={() => {
                  setIsOpen(true);
                  setItemIndex(item.id)
                }}
                className="flex flex-col w-full items-center border-2 border-white p-6 rounded-xl bg-[#F7F7F7]"
              >
                <div className="relative w-full h-60 bg-pattern bg-cover bg-center rounded-lg">
                <Image
                  src={item.img}
                  alt={item.name}
                  // width={300}
                  // height={40}
                  fill 
                  priority
                  className="object-contain"
                  />
                  </div>
                {/* <img className="w-40 h-40" src={item.img} /> */}
                <p className="text-[#191717] font-extrabold text-center text-[27px] mt-5">
                  {item.name}
                </p>
              </div>
            </SwiperSlide>
          </>
        ))}
      </Swiper>
      <CarDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        index={itemIndex}
      />
    </>
  );
};

export default Slider;
