import React, { useState } from "react";
import { Link } from "react-scroll";

export const CrollarCouses = () => {
  const [checkScroll, setcheckScroll] = useState(0);
  const dataCroll = [
    {
      title: "About",
      to: "about",
    },
    {
      title: "Schedule",
      to: "schedule",
    },
    {
      title: "Reviews (36)",
      to: "reviews",
    },
    {
      title: "Resume",
      to: "resume",
    },
    {
      title: "Specialties",
      to: "specialties",
    },
  ];
  return (
    <div className="border-b w-full flex items-center gap-10 sticky top-0 left-0 bg-white z-[100]">
      {dataCroll?.map((item, index) => (
        <Link
          to={`${item.to}`}
          spy={true}
          smooth={true}
          hashSpy={true}
          offset={50}
          duration={500}
          isDynamic={true}
          className={`${
            checkScroll === index
              ? "text-black font-bold after:bg-accent"
              : "text-black/50 font-normal "
          } relative after:absolute after:w-full after:h-[2px] after:bottom-0 after:left-0 py-5 cursor-pointer`}
          onClick={() => setcheckScroll(index)}
          key={index}
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
};
