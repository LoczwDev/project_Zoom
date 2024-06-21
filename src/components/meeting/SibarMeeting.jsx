import React, { useState } from "react";
import icons from "../../constants/icons/icons";
import { Link } from "react-router-dom";

export const SibarMeeting = () => {
  const [choseItemSibar, setChoseItemSibar] = useState(0);
  const dataSibarMeeting = [
    {
      name: "Home",
      icon: icons.Home,
      link: "/meeting",
    },
    {
      name: "Upcoming",
      icon: icons.GroupUp,
      link: "/meeting/upcoming",
    },
    {
      name: "Previous",
      icon: icons.GroupPre,
      link: "/meeting/previous",
    },
    {
      name: "Recordings",
      icon: icons.Video,
      link: "/meeting/recordings",
    },
    {
      name: "Personal Room",
      icon: icons.Plus,
      link: "/meeting/personal",
    },
  ];
  return (
    <section className="sticky left-0 top-0 flex h-screen w-fit flex-col justify-between p-6 text-black dark:text-white max-sm:hidden lg:w-[264px]">
      <div className="flex flex-col gap-6">
        {dataSibarMeeting?.map((item, index) => (
          <Link
            to={`${item.link}`}
            onClick={() => setChoseItemSibar(index)}
            key={index}
            className={`flex gap-4 items-center p-4 rounded-lg justify-start ${
              choseItemSibar === index ? "bg-accent" : "bg-transparent"
            } duration-300 ease-in-out transition-all`}
          >
            <img src={item.icon} alt="" />

            {item.name}
          </Link>
        ))}
      </div>
    </section>
  );
};
