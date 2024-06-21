import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import images from "../../constants/images/images";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <article className="relative z-10 w-full px-32 flex items-center justify-between top-[10%] py-10">
      <div className="w-1/2 h-full flex flex-col gap-y-7">
        <h2 className={`text-6xl font-[700] leading-[64px] italic`}>
          Which <span className="text-accent">language</span> do you want to
          speak?
        </h2>
        <Link
          to={`/first`}
          className="flex items-center gap-2 px-7 py-3.5 border border-accent duration-300 group text-accent w-72 justify-center font-bold rounded-md text-md"
        >
          <span className="block">Choose language with we</span>
          <GoArrowUpRight size={30} className="group-hover:rotate-45 duration-300 ease-in-out transition-all" />
        </Link>
      </div>
      <div className="relative w-1/2 h-full">
        <img src={images.FRA} alt="" />
        {/* <img
          className="relative w-[70%] h-auto rounded-md z-30"
          src={images.Hero}
          alt=""
        />
        <img
          className="absolute w-[55%] h-auto rounded-md top-7 left-[25%] z-[20]"
          src={images.Hero}
          alt=""
        />
        <img
          className="absolute w-[45%] h-auto rounded-md top-12 left-[45%] z-[10]"
          src={images.Hero}
          alt=""
        /> */}
      </div>
    </article>
  );
};

export default Hero;
