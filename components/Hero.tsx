import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex xl:flex-row flex-col gap-5 relative z-0 max-w-[1240px] mx-auto">
      <div className="flex-1 pt-36 sm:px-16 px-6">
        <h1 className="2xl:text-[72px] sm:text-[64px] text-[60px] font-extrabold text-[#191717]">
          Freshness In Every Bite
        </h1>
        <p className="text-[27px] text-[#191717] font-light mt-5">
          A food chain shows a direct transfer of energy between As every
          organism can feed on multiple.
        </p>
        <button className="flex flex-row relative justify-center items-center py-3 px-6 outline-none bg-[#191717] text-white rounded-full mt-10">
          Buy Now
        </button>
      </div>

      <div className="xl:flex-[1.5] flex justify-center items-end w-full xl:h-screen">
        <div className="relative xl:w-full w-[90%] xl:h-full h-[690px] z-0">
          <Image
            src={"/assets/pasta.png"}
            alt="hero"
            fill
            className="object-contain"
          />
        </div>
        {/* <div className="absolute xl:-top-24 xl:-right-1/2 -right-1/4 bg-hero-bg bg-repeat-round -z-10 w-full xl:h-screen h-[590px] overflow-hidden" /> */}
      </div>
    </div>
  );
};

export default Hero;
