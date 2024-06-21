import React, { useState } from "react";
import { Link } from "react-router-dom";

export const OptionsNav = () => {
  const [active, setactive] = useState(0);
  const dataOptionsNav = [
    {
      title: "Home",
      link: "/",
      type: "link",
    },
    {
      title: "Courses",
      link: "/courses",
      type: "link",
    },
    {
      title: "About",
      link: "/about",
      type: "link",
    },
    {
      title: "Policy",
      link: "/policy",
      type: "link",
    },
    {
      title: "FAQ",
      link: "/faq",
      type: "link",
    },
    {
      title: "Language",
      link: "/language",
      type: "link",
    },
  ];
  return (
    <div className="w-full flex items-center justify-between pl-7">
      {dataOptionsNav.map((item, index) => (
        <Link
          onClick={() => setactive(index)}
          className={`text-[15px] font-[500] duration-300 hover:text-accent ${
            active === index ? "text-accent" : ""
          }`}
          key={index}
          to={`${item.link}`}
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
};
