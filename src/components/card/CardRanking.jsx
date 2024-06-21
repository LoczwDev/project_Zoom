import React from "react";
import images from "../../constants/images/images";

const CardRanking = () => {
  return (
    <div className="w-full h-full relative group">
      <div className="absolute w-full h-full bg-gradient-to-tl from-transparent to-black/50 s1024:group-hover/rank:to-black/50"></div>
      <span className="absolute group-hover:-top-2 top-0 left-2 text-[60px] bg-gradient-to-b from-amber-500 to-red-500 inline-block text-transparent bg-clip-text z-[10000]">
        1
      </span>
      <img className="w-full h-full object-cover" src={images.Tutor} alt="" />
      <span
        className={`absolute bottom-3 left-2 text-[14px] whitespace-break-spaces text-ellipsis text-white z-[10000] hidden group-hover:block`}
      >
        Name Turtor
      </span>
    </div>
  );
};

export default CardRanking;
