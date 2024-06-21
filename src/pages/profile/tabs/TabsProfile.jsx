import { useEffect, useRef, useState } from "react";
import { ButtonTabsProfile } from "./ButtonTabsProfile";
import InfoProfile from "./contentTabsProfile/Info/InfoProfile";
import ChangePasswordProfile from "./contentTabsProfile/changePassword/ChangePasswordProfile";

export const TabsProfile = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);
  const tabsData = [
    {
      title: "Info & contact",
      content: <InfoProfile />,
    },
    {
      title: "Change password",
      content: <ChangePasswordProfile />,
    },
    {
      title: "Manager Courses",
      content: <div>test1</div>,
    },
    {
      title: "Chats core",
      content: <div>test1</div>,
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
    <div className="grid sm:grid-cols-[277px_auto] gap-5 mb-20">
      <div className="relative">
        <div className="bg-white rounded-md shadow-md p-7 flex flex-col gap-4">
          {tabsData.map((tab, idx) => {
            return (
              <button
                key={idx}
                ref={(el) => (tabsRef.current[idx] = el)}
                className="w-full h-full"
                onClick={() => setActiveTabIndex(idx)}
              >
                <ButtonTabsProfile
                  title={tab.title}
                  active={idx == activeTabIndex}
                />
              </button>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col gap-5 bg-white rounded-md shadow-md overflow-hidden p-5">
        <div>{tabsData[activeTabIndex].content}</div>
      </div>
    </div>
  );
};
