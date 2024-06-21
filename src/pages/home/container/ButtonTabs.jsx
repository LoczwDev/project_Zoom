import React from "react";

export const ButtonTabs = ({ title, active }) => {
  return (
    <div className={`${active ? "bg-black font-bold py-2 text-white" :""} w-full text-[20px] duration-300 ease-in-out transition-all`}>
      <span>{title}</span>
    </div>
  );
};
