import React from "react";

export const ItemHome = ({ item }) => {
  return (
    <div
      onClick={item.handlerClick}
      className={`${item.bg} px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px] rounded-[14px] cursor-pointer`}
    >
      <div className="flex items-center bg-white/20 rounded-md p-2 w-max">
        <img src={item.icon} width={27} height={27} alt="" />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">{item.title}</h1>
        <p className="text-lg font-normal">{item.content}</p>
      </div>
    </div>
  );
};
