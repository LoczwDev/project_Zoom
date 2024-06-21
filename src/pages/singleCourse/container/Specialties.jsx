import React, { useState } from "react";
import { Element } from "react-scroll";
import { H2MainTitle } from "../../../components/H2MainTitle";

export const Specialties = () => {
  const [showMore, setShowMore] = useState(false);
  const dataSpecialties = [
    {
      name: "Conversational English",
      content:
        "I have a wide variety of topics, and knowledge that I enjoy talking about and would love to hear about your favourite topics.",
    },
    {
      name: "Business English",
      content:
        "Have worked in a professional environment, and am very used to speaking in a professional, educated manner.",
    },
    {
      name: "IELTS",
      content: "Preparing students for their exams.",
    },
    {
      name: "British English",
      content:
        "I speak British English and have a very clear, and well pronounced accent.",
    },
    {
      name: "English job interview prep",
      content:
        "I have not only attended many interviews myself, but also hired people based on an interview. I can provide you with inside knowledge on how to interview process works and help you sell yourself in a more proficient way.",
    },
    {
      name: "English homework help",
      content:
        "I have helped multiple university students with their coursework, homework and assignments. Please note though that I will not do the work for you. This is plagiarism. I will only help and assist you to create an answer that is yours.",
    },
    {
      name: "For studying abroad",
      content:
        "I have good knowledge of the University systems in the UK, and can help with any preparations you may need.",
    },
    {
      name: "Writing",
      content:
        "My SAT Writing score is 720/800. Plus, I graduated Honors in the USA having written countless successful essays.",
    },
    {
      name: "SAT Writing",
      content: "My SAT Writing Score was 720/800, so I can help you with this.",
    },
    {
      name: "Business & Work",
      content:
        "I have 8 Business English textbooks. My professional experience includes working for Vanderbilt Financial Group in New York and Edelman, the largest Public Relations company in the world. This is why English for work is in my DNA.",
    },
  ];
  return (
    <Element name="specialties" className="py-10">
      <section className="w-full">
        <H2MainTitle title={"Specialties"} />
        <div
          className={`flex flex-col gap-5 duration-500 ease-in-out transition-all h-full overflow-hidden ${
            showMore ? "max-h-max" : "max-h-[550px]"
          } `}
        >
          {dataSpecialties?.map((item, index) => (
            <div key={index}>
              <h3 className="font-[600] leading-[24px] text-[16px]">
                {item.name}
              </h3>
              <p className="leading-[24px] text-[16px] font-[400]">
                {item.content}
              </p>
            </div>
          ))}
        </div>
        <div className="w-full flex justify-center items-center py-10">
          <button
            className="border rounded-xl font-bold border-hard px-4 py-3"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "Hidde" : "More Subject"}
          </button>
        </div>
      </section>
    </Element>
  );
};
