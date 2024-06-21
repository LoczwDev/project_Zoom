import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import TranslateOutlinedIcon from "@mui/icons-material/TranslateOutlined";
const CoursesCard = () => {
  const [isMoreCourses, setisMoreCourses] = useState(false);
  return (
    <div className="border-2 border-black rounded-lg p-4 h-auto">
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-1 w-1/5">
          <div className="w-[150px] h-[150ppx]">
            <img
              className="w-full h-full rounded-md"
              src="https://avatars.preply.com/i/logos/i/logos/avatar_oiqu92hbfdm.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col w-4/5">
          <div className="flex w-full items-start justify-between">
            <div className="flex flex-col">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-1">
                  <h2 className="font-[700] text-lg">Tran Huu loc</h2>
                  <span className="text-accent">VietNam</span>
                </div>
                <div className="flex items-start w-1/3 justify-between font-bold ">
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
                  {/* Favorite */}
                  <div className="flex flex-col items-center">
                    <div className="flex items-center gap-1 text-2xl">
                      <MdFavorite /> <span className="block">5</span>
                    </div>
                    {/* <span className="text-gray-300">13 Rating</span> */}
                  </div>
                </div>
              </div>
              <div className="-mt-[30px]">
                <div>
                  <div>
                    <SchoolOutlinedIcon fontSize="14px" /> VietNam
                  </div>
                  <div>
                    <PersonOutlineOutlinedIcon fontSize="14px" /> VietNam
                  </div>
                  <div>
                    <TranslateOutlinedIcon fontSize="14px" /> VietNam
                  </div>
                </div>
                <div>
                  <div className="flex items-end justify-between gap-2">
                    <p
                      className={`max-h-[100px] h-full overflow-hidden ${
                        isMoreCourses ? "max-h-max" : "max-h-[100px]"
                      } duration-500 ease-in-out transition-all`}
                    >
                      Zertifizierter Tutor mit Sitz in der Türkei Hallo, mein
                      Name ist Hannah! Ich spreche als Muttersprache britisches
                      Englisch und Türkisch. Ich bin Absolvent der Dokuz Eylül
                      Üniversitesi. (Zertifizierter ESL-Lehrer. ) Derzeit
                      unterrichtet er Englisch in der Türkei sowohl online als
                      auch im Klassenzimmer. Zertifizierter Tutor mit Sitz in
                      der Türkei Hallo, mein Name ist Hannah! Ich spreche als
                      Muttersprache britisches Englisch und Türkisch. Ich bin
                      Absolvent der Dokuz Eylül Üniversitesi. (Zertifizierter
                      ESL-Lehrer. ) Derzeit unterrichtet er Englisch in der
                      Türkei sowohl online als auch im Klassenzimmer.
                      Zertifizierter Tutor mit Sitz in der Türkei Hallo, mein
                      Name ist Hannah! Ich spreche als Muttersprache britisches
                      Englisch und Türkisch. Ich bin Absolvent der Dokuz Eylül
                      Üniversitesi. (Zertifizierter ESL-Lehrer. ) Derzeit
                      unterrichtet er Englisch in der Türkei sowohl online als
                      auch im Klassenzimmer.
                    </p>
                    <div className="flex flex-col gap-2">
                      <button
                        type="button"
                        className="border-2 rounded-lg border-black w-[200px] font-medium bg-accent hover:bg-opacity-50 duration-300 py-2.5 px-2"
                      >
                        Book a trial lesson
                      </button>
                      <button
                        type="button"
                        className="border-2 border-hard rounded-md w-[200px] font-medium hover:bg-opacity-70 duration-300 px-2 py-2.5"
                      >
                        Send message
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => setisMoreCourses(!isMoreCourses)}
                    className="text-red-500 font-bold duration-300"
                  >
                    {isMoreCourses ? "Off More" : "More"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesCard;
