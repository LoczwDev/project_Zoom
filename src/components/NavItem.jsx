import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import images from "../constants/images/images";
import { logout } from "../store/actions/user";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

export const NavItem = ({ item, userState }) => {
  // Setup
  const user = userState?.userInfo?.user;
  const dispath = useDispatch();
  const navigate = useNavigate();
  // Hook
  const [openMenu, setOpenMenu] = useState(false);
  // Data
  const dataMenuUser = [
    {
      title: "Home",
      href: "/online",
    },
    {
      title: "Messagers",
      href: "/online",
    },
    {
      title: "My lessons",
      href: "/online",
    },
    {
      title: "Save tutors",
      href: "/online",
    },
    {
      title: "Profle",
      href: "/profile",
    },
    {
      title: "Help",
      href: "/online",
    },
  ];
  // Fuction
  const logoutHandler = () => {
    toast.success("Đăng xuất thành công");
    dispath(logout());
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };
  return (
    <li>
      {item.type !== "user" ? (
        <Link
          to={`${item.link}`}
          className="flex flex-col items-center justify-center"
        >
          {item.icon}
          <span className="text-[12px]">{item.name}</span>
        </Link>
      ) : user ? (
        <div className="flex flex-col items-center justify-center relative">
          <img
            onClick={() => setOpenMenu(!openMenu)}
            className="w-[50px] h-auto border-2 border-black"
            src={user.avatar ? user.avatar.url : images.UserCur}
            alt=""
          />
          <ul
            className={`${
              openMenu
                ? "max-h-[300px] opacity-100 visible"
                : "max-h-0 opacity-0 invisible"
            } overflow-hidden transition-all ease-in-out duration-500 absolute top-full bg-white shadow-2xl w-[150px] right-0 p-3 flex flex-col gap-4 rounded-xl z-[100]`}
          >
            {dataMenuUser.map((item, index) => (
              <li key={index}>
                <Link
                  to={`${item.href}`}
                  className="font-figtree font-[400] text-[14px]"
                >
                  {item.title}
                </Link>
              </li>
            ))}
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </div>
      ) : (
        <Link
          to={`${item.link}`}
          className="flex flex-col items-center justify-center"
        >
          {item.icon}
          <span className="text-[12px]">{item.name}</span>
        </Link>
      )}
    </li>
  );
};
