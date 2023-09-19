"use client";
import { Package } from "phosphor-react";

interface Props {
  icon: JSX.Element;
  title: string;
  desc: string;
}

const Card = ({ icon, title, desc }: Props) => {
  return (
    <div className="flex flex-col md:w-[32%] bg-[#F7F7F7] w-[52%] h-44 items-center justify-between md:p-6 p-4 md:h-60 rounded-lg border">
      {/* <Package size={36} color="black" weight="bold" /> */}
      {icon}
      <h1 className="text-[#191717] text-[16px] md:text-[30px]">{title}</h1>
      <p className="text-[#191717] text-[10px] md:text-[16px] px-4 text-center">
        {desc}
      </p>
    </div>
  );
};

export default Card;
