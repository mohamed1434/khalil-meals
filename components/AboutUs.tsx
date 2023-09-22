import Image from "next/image";
import React from "react";
import { Reveal } from "./Reveal";

const AboutUs = () => {
  return (
    <div
      id="about"
      className="flex xl:flex-row flex-col gap-1 relative mt-12 z-0 max-w-[1240px] mx-auto"
    >
      {/* <div className="xl:flex-[1.5] flex justify-center items-end w-full bg-red-900 xl:h-screen">
        <div className="relative xl:w-[60%] w-[90%] xl:h-screen h-[690px] z-0">
          <Image
            src={"/assets/me2.jpg"}
            alt="hero"
            fill
            className="object-contain rounded-3xl shadow-md"
          />
        </div>
      </div> */}
      <div className="xl:flex-[1.5] flex justify-center items-end w-full  xl:h-screen">
        <div className="relative xl:w-[60%] w-[90%] xl:h-screen h-[690px] z-0">
          <Image
            src={"/assets/me2.jpg"}
            alt="hero"
            fill
            className="object-contain rounded-3xl shadow-md z-10 relative"
          />
          <Image
            src={"/assets/ast.svg"} // Replace with the path to your second image
            alt="second image"
            width={100}
            height={100}
            className="md:block hidden object-contain rounded-3xl z-20 absolute -right-16 top-52" // Position the second image absolutely to the top-left
          />
        </div>
      </div>

      <div className="flex-1 pt-2 xl:pt-36 sm:px-16 px-2">
        <Reveal>
          <h1 className="2xl:text-[72px] sm:text-[64px] text-[60px] font-extrabold text-[#191717]">
            About Us
          </h1>
        </Reveal>

        <Reveal>
          <p className="text-[17px] text-[#191717] font-light mt-5">
            At Khalil Meals, we understand the hectic life of a student.
            Balancing classes, assignments, and extracurricular activities can
            leave little time for preparing healthy meals. That's where we come
            in.
          </p>
        </Reveal>

        <Reveal>
          <h1 className="2xl:text-[72px] sm:text-[64px] text-[60px] font-extrabold text-[#191717]">
            Our Mission
          </h1>
        </Reveal>

        <Reveal>
          <p className="text-[17px] text-[#191717] font-light mt-5">
            Our mission is to nourish the minds and bodies of students by
            offering convenient and nutritious meal solutions. We believe that
            everyone, especially students, should have access to delicious,
            well-balanced food that supports their health and lifestyle.
          </p>
        </Reveal>
        <span className="flex flex-row relative justify-center items-center h-[10px]  outline-none bg-[#191717] text-white mt-10" />
      </div>
    </div>
  );
};

export default AboutUs;
