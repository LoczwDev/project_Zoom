import { useEffect, useRef, useState } from "react";
import { H2MainTitle } from "../../../components/H2MainTitle";
import { Element } from "react-scroll";

export const Resume = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);
  const tabsData = [
    {
      title: "Education",
      content: (
        <ContentResume
          education={"University of Arts London"}
          time={"2014 — 2016"}
          major={"Fashion Retail Branding and Visual Merchandising"}
        />
      ),
    },
    {
      title: "Certifications",
      content: (
        <ContentResume
          education={"TEFL"}
          time={"2022 — 2022"}
          major={"Teaching English as a Foreign Language"}
        />
      ),
    },
  ];
  const tabsRef = useRef([]);

  useEffect(() => {
    function setTabPosition() {
      const currentTab = tabsRef.current[activeTabIndex];
      setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
      setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
    }

    setTabPosition();
    window.addEventListener("resize", setTabPosition);

    return () => window.removeEventListener("resize", setTabPosition);
  }, [activeTabIndex]);

  return (
    <Element name="resume">
      <section className="w-full">
        <H2MainTitle title={"Resume"} />
        <div className="relative">
          <div className="flex gap-5 border-b">
            {tabsData.map((tab, idx) => {
              return (
                <button
                  key={idx}
                  ref={(el) => (tabsRef.current[idx] = el)}
                  className="w-auto"
                  onClick={() => setActiveTabIndex(idx)}
                >
                  <ButtonTabsResume
                    title={tab.title}
                    active={idx === activeTabIndex}
                  />
                </button>
              );
            })}
          </div>
        </div>
        <div className="py-4">
          <div>{tabsData[activeTabIndex].content}</div>
        </div>
      </section>
    </Element>
  );
};

const ButtonTabsResume = ({ title, active }) => {
  return (
    <div
      className={`${
        active
          ? "text-black font-bold after:bg-accent"
          : "text-black/50 font-normal "
      } relative after:absolute after:w-full after:h-[2px] after:bottom-0 after:left-0 py-5 cursor-pointer`}
    >
      {title}
    </div>
  );
};

const ContentResume = ({ time, education, major }) => {
  return (
    <div className="flex items-start gap-5">
      <div>
        <span>{time}</span>
      </div>
      <div className="flex flex-col">
        <h3>{education}</h3>
        <span>{major}</span>
      </div>
    </div>
  );
};
