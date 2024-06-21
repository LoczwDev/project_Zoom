import React, { useEffect, useState } from "react";

export const ButtonTheme = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"
  );

  const handleChangeTheme = (newTheme) => {
    setTheme(newTheme);
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.querySelector("html").setAttribute("data-theme", theme);
    document.querySelector("html").setAttribute("class", theme);
  }, [theme]);

  return (
    <div
      className={`relative flex items-center justify-center border border-hard dark:border-slate-600 rounded-full w-48 before:absolute before:w-1/2 before:h-full ${
        theme === "dark"
          ? "before:left-1/2 before:bg-green-500"
          : "before:left-0 before:bg-red-500"
      } before:transition-all ease-in-out duration-1000 before:rounded-full before:z-0`}
    >
      <div className="w-full z-10 py-1.5">
        <button
          onClick={() => handleChangeTheme("light")}
          className={`w-full flex justify-center items-center text-[16px] ${
            theme === "dark"
              ? "text-red-500 font-medium"
              : "text-white font-bold"
          }`}
        >
          Normal
        </button>
      </div>
      <div className="w-full z-10 py-1.5">
        <button
          onClick={() => handleChangeTheme("dark")}
          className={`w-full flex justify-center items-center text-[16px] ${
            theme === "dark"
              ? "text-white font-bold"
              : "text-green-500 font-medium"
          }`}
        >
          TryHard
        </button>
      </div>
    </div>
  );
};
