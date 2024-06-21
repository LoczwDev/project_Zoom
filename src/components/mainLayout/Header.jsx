import React from "react";
import images from "../../constants/images/images";
import { FormSearch } from "../FormSearch";
import { CiShoppingCart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import { OptionsNav } from "../OptionsNav";
import { ButtonTheme } from "../ButtonTheme";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { NavItem } from "../NavItem";

export const Header = () => {
  const userState = useSelector((state) => state.user);
  const dataNavRight = [
    {
      icon: <CiStar size={30} />,
      name: "Favorite",
      type: "favorite",
      link: "/favorite",
    },
    {
      icon: <CiShoppingCart size={30} />,
      name: "Cart",
      type: "cart",
      link: "/favorite",
    },
    {
      icon: <CiUser size={30} />,
      name: "User",
      type: "user",
      link: "/login",
    },
  ];
  return (
    <header className="py-3 border-b-2 border-accent">
      <div className="max-w-6xl mx-auto w-full">
        <nav className="flex items-center justify-between w-full pb-3">
          <div className="w-auto flex items-center justify-center">
            <div className="w-48 h-auto">
              <img className="w-full" src={images.Logo} alt="Logo" />
            </div>
            <ButtonTheme />
          </div>

          <FormSearch />
          <div>
            <ul className="flex items-center gap-10">
              {dataNavRight?.map((item, index) => (
                <NavItem item={item} key={index} userState={userState} />
              ))}
            </ul>
          </div>
        </nav>
        <OptionsNav />
      </div>
    </header>
  );
};
