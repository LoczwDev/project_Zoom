import React from "react";
import { FaStar } from "react-icons/fa";
import { MainLayout } from "../../components/mainLayout/MainLayout";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import AnimationOutlinedIcon from "@mui/icons-material/AnimationOutlined";
import BreadCrumbs from "../../components/BreadCrumbs";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";
import MarkUnreadChatAltOutlinedIcon from "@mui/icons-material/MarkUnreadChatAltOutlined";
import { CommentContainer } from "../../components/comments/CommentContainer";
import { CrollarCouses } from "./tabsCroll/CrollarCouses";
import { About } from "./container/About";
import { Resume } from "./container/Resume";
import { Element } from "react-scroll";
import { Specialties } from "./container/Specialties";

export const SingleCoursePage = () => {
  const breadCrumbsData = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Courses",
      link: "/courses",
    },
  ];
  return (
    <MainLayout>
      <section className="max-w-6xl mx-auto relative">
        <BreadCrumbs data={breadCrumbsData} />
        <div className="flex items-start justify-between gap-3">
          <div className="flex flex-col w-2/3">
            <div className="flex items-start gap-5">
              <div className="">
                <img
                  className="w-[150px] h-[150px] rounded-md"
                  src="https://avatars.preply.com/i/logos/i/logos/avatar_0ywwauuroh5.jpg"
                  alt=""
                />
              </div>
              <div className="w-3/4">
                <div className="flex items-center gap-2">
                  <h2 className="font-bold text-2xl">Catherine F.</h2>
                  <span>VietNam</span>
                </div>
                <p className="text-[16px] text-soft">
                  Patient, Clear Speaking, British English Tutor With Marketing
                  Background - TEFL Certified, IELTS Knowledge
                </p>
                <div className="text-[14px]">
                  <div className="flex items-center gap-2">
                    <SchoolOutlinedIcon fontSize="14px" />
                    Teaches English lessons
                  </div>
                  <div className="flex items-center gap-2">
                    <AnimationOutlinedIcon fontSize="14px" />
                    Speaks English (Native), Thai (B1)
                  </div>
                  <div className="flex items-center gap-2">
                    <PersonOutlineOutlinedIcon fontSize="14px" />
                    2,386 lessons taught
                  </div>
                </div>
              </div>
            </div>
            <CrollarCouses />
            <About />
            <Resume />
            <Element name="reviews">
              <CommentContainer />
              <CommentContainer />
              <CommentContainer />
              <CommentContainer />
              <CommentContainer />
            </Element>
            <Specialties />
          </div>

          <div className="bg-white shadow-md rounded-md flex flex-col gap-5 p-4 sticky right-0 top-0 w-1/3">
            <div className="w-full">
              <img
                className="w-full rounded-md"
                src="https://avatars.preply.com/i/video_thumbnails/1683080165611-PreplyThumbnail.png"
                alt=""
              />
            </div>
            <div className="flex items-start justify-between font-bold px-10 ">
              {/* Rating */}
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-1 text-2xl">
                  <FaStar /> <span className="block">5</span>
                </div>
                <span className="text-gray-300 font-normal">39 reviews</span>
              </div>
              {/* minius learn */}
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-1 text-2xl">
                  $ <span className="block">5</span>
                </div>
                <span className="text-gray-300 font-normal">50-min lesson</span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <button
                type="button"
                className="border-2 rounded-lg border-black w-full font-medium bg-accent hover:bg-opacity-50 duration-300 py-2.5 px-2"
              >
                <BoltOutlinedIcon />
                Book a trial lesson
              </button>
              <button
                type="button"
                className="border-2 border-hard rounded-md w-full font-medium hover:bg-opacity-70 duration-300 px-2 py-2.5"
              >
                <MarkUnreadChatAltOutlinedIcon />
                Send message
              </button>
              <button
                type="button"
                className="border-2 border-hard rounded-md w-full font-medium hover:bg-opacity-70 duration-300 px-2 py-2.5"
              >
                <FavoriteBorderOutlinedIcon />
                Save to my list
              </button>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};
