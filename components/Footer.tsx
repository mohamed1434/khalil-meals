"use client";
import { socialIcons } from "@/constants";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="h-screen bg-[#191717] mt-12 p-6 flex items-center">
      <div className="flex xl:flex-col flex-col gap-5 relative z-0 max-w-[1240px] mx-auto items-center">
        <h1 className="2xl:text-[72px] sm:text-[64px] text-[40px] font-extrabold text-[#F7F7F7]">
          Contacts
        </h1>
        <p className="text-[12px] text-center sm:text-[27px] text-[#F7F7F7] font-light mt-5">
          What are you waiting for ?, contact me and get your food right away
          FRESH and HOT !
        </p>
        <div className="flex items-center justify-between flex-col md:flex-row gap-6">
          {socialIcons.map((item) => (
            <Link href={item.link}>{item.icon}</Link>
          ))}
        </div>
        <p className="text-[12px] text-center sm:text-[27px] text-[#F7F7F7] font-light mt-5">
          &copy;Khalil Meals, 2023
        </p>
      </div>
    </div>
  );
};

export default Footer;
