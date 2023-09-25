"use client";
import AboutUs from "@/components/AboutUs";
import Card from "@/components/Card";
import CircleCard from "@/components/CircleCard";
import Hero from "@/components/Hero";
import PriceCard from "@/components/PriceCard";
import { Reveal } from "@/components/Reveal";
import Slider from "@/components/Slider";
import { cardItems, circleCardItems, prices } from "@/constants";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />

      <div id="" className="h-screen bg-[#191717] mt-12 p-6 flex items-center">
        <div className="flex xl:flex-col flex-col gap-5 relative z-0 max-w-[1240px] mx-auto items-center">
          <Reveal>
            <h1 className="2xl:text-[72px] sm:text-[64px] text-[38px] font-extrabold text-[#F7F7F7]">
              Why choose US ?
            </h1>
          </Reveal>

          <Reveal>
            <p className="text-[12px] text-center sm:text-[27px] text-[#F7F7F7] font-light mt-5">
              Delicious, Nutritious, and ready for you. Your healthy meal
              solution is just a bite away!
            </p>
          </Reveal>

          <Reveal>
            <div className="flex items-center justify-between flex-col md:flex-row gap-6">
              {cardItems.map((item) => (
                <Card icon={item.icon} title={item.title} desc={item.desc} />
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      <div className="h-screen mt-12 p-6 flex items-center">
        <div className="flex xl:flex-col flex-col gap-5 relative z-0 max-w-[1240px] mx-auto items-center">
          <div className="flex flex-row">
            <Reveal>
              <h1 className="2xl:text-[72px] sm:text-[64px] text-[50px] font-extrabold text-[#191717]">
                Best Sellers
              </h1>
            </Reveal>

            <Reveal>
              <Image
                src="/assets/bolt.webp"
                alt="Bolt Logo"
                width={100}
                height={50}
                className="object-contain"
              />
            </Reveal>
          </div>

          <Reveal>
            <p className="text-[17px] text-center sm:text-[27px] text-[#191717] font-light mt-5">
              Indulge in our top picks, a mouthwatering selection that defines
              excellence in taste.
            </p>
          </Reveal>

          <Reveal>
            <div className="flex flex-row gap-4">
              {circleCardItems.map((item) => (
                <CircleCard name={item.name} img={item.img} />
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      <div
        id="menu"
        className="bg-[#191717] h-screen mt-12 p-6 flex items-center justify-center"
      >
        <div className="flex xl:flex-col flex-col gap-5 relative z-0 w-full sm:max-w-[1240px] mx-auto items-center">
          {" "}
          {/**flex xl:flex-col flex-col gap-5 relative z-0 w-[70%] sm:max-w-[1240px] mx-auto items-center */}
          <Reveal>
            <h1 className="2xl:text-[72px] sm:text-[64px] text-[50px] font-extrabold text-[#F7F7F7]">
              All our Recipes
            </h1>
          </Reveal>
          <Reveal>
            <p className="text-[17px] text-center sm:text-[27px] text-[#F7F7F7] font-light mt-5">
              Check all our recipes, <b>SWIPE</b> to check everything and{" "}
              <b>PRESS</b> to view more details.
            </p>
          </Reveal>
          <Slider />
        </div>
      </div>

      <AboutUs />

      <div
        id="pricing"
        className="h-screen bg-[#F7F7F7] mt-12 p-6 flex items-center"
      >
        <div className="flex xl:flex-col flex-col gap-5 relative z-0 max-w-[1240px] mx-auto items-center ">
          <Reveal>
            <h1 className="2xl:text-[72px] sm:text-[64px] text-[38px] font-extrabold text-[#191717]">
              Our Prices !
            </h1>
          </Reveal>

          <Reveal>
            <p className="text-[12px] text-center sm:text-[27px] text-[#191717] font-light mt-5">
              Choose the Perfect Plan for You
            </p>
          </Reveal>

          {/* <Reveal> */}
          <div className="flex flex-wrap items-center justify-between flex-col md:flex-row md:gap-6 w-full">
            {prices.map((price) => (
              <PriceCard name={price.name} cost={price.cost} duration={price.duration}/>
            ))}
          </div>
          {/* </Reveal> */}
        </div>
      </div>
    </>
  );
}
