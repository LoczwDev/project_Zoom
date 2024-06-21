import React from "react";
import Article from "../../../../components/card/Article";
import { Link } from "react-router-dom";

const ContentTabsHome = () => {
  return (
    <>
      <div className="w-full grid grid-cols-4 gap-3">
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
      </div>
      <div className="w-full flex items-center justify-center my-5">
        <Link
          to={"/"}
          className="flex items-center gap-2 px-7 py-2 border border-accent duration-300 group text-accent w-72 justify-center font-bold rounded-md text-md"
        >
          More
        </Link> 
      </div>
    </>
  );
};

export default ContentTabsHome;
