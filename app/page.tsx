"use client";
import AboutUs from "@/components/AboutUs";
import Card from "@/components/Card";
import CircleCard from "@/components/CircleCard";
import Hero from "@/components/Hero";
import Slider from "@/components/Slider";
import { cardItems, circleCardItems } from "@/constants";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="h-screen bg-[#191717] mt-12 p-6 flex items-center">
        <div className="flex xl:flex-col flex-col gap-5 relative z-0 max-w-[1240px] mx-auto items-center">
          <h1 className="2xl:text-[72px] sm:text-[64px] text-[40px] font-extrabold text-white">
            Why choose US ?
          </h1>
          <p className="text-[12px] text-center sm:text-[27px] text-white font-light mt-5">
            A food chain shows a direct transfer of energy between As every
            organism can feed on multiple.
          </p>
          <div className="flex items-center justify-between flex-col md:flex-row gap-6">
            {cardItems.map((item) => (
              <Card icon={item.icon} title={item.title} desc={item.desc} />
            ))}
          </div>
        </div>
      </div>

      <div className="h-screen mt-12 p-6 flex items-center">
        <div className="flex xl:flex-col flex-col gap-5 relative z-0 max-w-[1240px] mx-auto items-center">
          <div className="flex flex-row">
            <h1 className="2xl:text-[72px] sm:text-[64px] text-[50px] font-extrabold text-[#191717]">
              Trending Now
            </h1>
            <Image
              src="/assets/bolt.webp"
              alt="Bolt Logo"
              width={100}
              height={50}
              className="object-contain"
            />
          </div>
          <p className="text-[17px] text-center sm:text-[27px] text-[#191717] font-light mt-5">
            You can get worldwide trending hot food items such as Plant-Based
            and Beyond, Home Cooking and Baking, Comfort Foods and Functional
            Foods.
          </p>
          <div className="flex flex-row gap-4">
            {circleCardItems.map((item) => (
              <CircleCard name={item.name} img={item.img} />
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#191717] h-screen mt-12 p-6 flex items-center justify-center">
        <div className="flex xl:flex-col flex-col gap-5 relative z-0 w-[70%] sm:max-w-[1240px] mx-auto items-center">
          <h1 className="2xl:text-[72px] sm:text-[64px] text-[50px] font-extrabold text-white">
            All our Recipes
          </h1>
          <p className="text-[17px] text-center sm:text-[27px] text-[#F7F7F7] font-light mt-5">
            Check all our recipes, <b>SWIPE</b> to check everything and <b>PRESS</b> to view more details.
          </p>
          <Slider />
        </div>
      </div>

      <AboutUs />
    </>
  );
}
