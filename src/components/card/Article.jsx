import React from "react";
import { Ratting } from "../ratting/Ratting";
import { CiCircleList } from "react-icons/ci";
import { MdFavorite } from "react-icons/md";

const Article = () => {
  return (
    <div className="rounded-xl p-2 relative shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] flex flex-col gap-y-3">
      <div className="w-full h-[150px]">
        <span className="absolute top-1 right-2">
          <MdFavorite size={20} color="red" />
        </span>
        <img
          className="w-full h-full object-cover rounded-tr-[60px] rounded"
          src="https://gcs.tripi.vn/public-tripi/tripi-feed/img/475227pKX/anh-mo-ta.png"
          alt=""
        />
      </div>
      <div className="absolute top-[40%] right-5 p-3 bg-white text-accent rounded-b-full rounded-t-[4000px] shadow-price">
        <span className="font-[900]">$49.9</span>
      </div>
      <div className="w-full">
        <h2 className="text-xl font-[900]">Listening</h2>
        <span className="text-[16px] h-[60px] block">Day la khoa hoc test</span>
        <div className="flex items-center justify-between w-full">
          <Ratting />
          <div className="flex items-center justify-center gap-2 font-[500]">
            <CiCircleList /> <span>9 Courses</span>
          </div>
        </div>
      </div>
      <div>
        <button className="flex items-center gap-2 border border-accent bg-transparent duration-300 group text-accent w-full justify-center font-bold rounded-md text-md">
          Join
        </button>
      </div>
    </div>
  );
};

export default Article;
