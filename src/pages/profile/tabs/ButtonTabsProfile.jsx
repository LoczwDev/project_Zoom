import React from "react";

export const ButtonTabsProfile = ({ title, active }) => {
  return (
    <div
      className={`${
        active ? "font-bold py-2 text-accent" : ""
      } w-full text-[16px] duration-300 ease-in-out transition-all text-start `}
    >
      <span>{title}</span>
    </div>
  );
};
