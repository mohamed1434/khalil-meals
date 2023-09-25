import React from "react";

interface Props {
  name: string;
  cost: number;
  duration: string;
}

const PriceCard = ({ name, cost, duration }: Props) => {
  return (
    <div
      className="group w-full h-24 bg-white rounded-2xl shadow-lg p-14 flex flex-col items-center
     justify-center gap-1 hover:bg-[#171919] transition text-[#171919]
      hover:text-[#F7F7F7] font-mono mt-12 md:w-64 md:h-56 md:gap-4 md:p-6"
    >
      <h1 className="2xl:text-[32px] sm:text-[24px] text-[16px] font-normal">
        {name}
      </h1>
      <h2 className="relative text-[16px] -inset-x-6 md:text-[26px]">
        Ft {cost},000 <span className="absolute bottom-0 text-[18px]">/month</span>
      </h2>
      <p className="text-[12px] md:text-[16px]">{duration} of prep meals</p>
      <button
        className="bg-[#171919] text-[#F7F7F7] rounded-xl 
      px-4 group-hover:bg-[#F7F7F7] group-hover:text-[#171919] md:p-2 text-[14px]"
      >
        Get Started
      </button>
    </div>
  );
};

export default PriceCard;
