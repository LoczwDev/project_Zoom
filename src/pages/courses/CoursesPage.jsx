import React, { useState } from "react";
import { MainLayout } from "../../components/mainLayout/MainLayout";
import CoursesCard from "../../components/card/CoursesCard";
import { Link } from "react-router-dom";

const CoursesPage = () => {
  const [transformHeght, setTransformHeght] = useState("0px");
  return (
    <MainLayout>
      <section className="w-full">
        <div className="max-w-7xl mx-auto px-5 flex items-start justify-between gap-5 py-5">
          <div>
            <div onMouseEnter={() => setTransformHeght("0px")}>
              <CoursesCard />
            </div>
            <div onMouseEnter={() => setTransformHeght("265px")}>
              <CoursesCard />
            </div>
          </div>

          <div
            style={{ transform: `translateY(${transformHeght})` }}
            className={`flex flex-col gap-2 duration-500 ease-in-out transition-all transform  `}
          >
            <div className="border-2 border-black">
              <img
                src="https://avatars.preply.com/i/video_thumbnails/ff14be30-02dc-4ff6-a4fb-77469da9945a.png"
                alt=""
              />
            </div>
            <div>
              <Link to={"/course/1"} className="flex items-center gap-2 px-7 py-3.5 border-2 font-medium border-black duration-300 group text-accent w-72 justify-center rounded-md text-md">
                Join
              </Link>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default CoursesPage;
