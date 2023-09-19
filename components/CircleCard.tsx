import Image from "next/image";

interface Props {
  name: string;
  img: string;
}

const CircleCard = ({ name, img }: Props) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className=" rounded-xl overflow-hidden">
        <Image
          src={img}
          alt="Food Image"
          width={240}
          height={40}
          className="object-contain"
        />
      </div>
      <h1 className="2xl:text-[72px] sm:text-[24px] text-[20px] font-extrabold text-black">
        {name}
      </h1>
    </div>
  );
};

export default CircleCard;
