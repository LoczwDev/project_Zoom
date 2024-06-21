import { useEffect, useRef, useState } from "react";
import { ButtonTabs } from "./ButtonTabs";
import ContentTabsHome from "./contentTabs/ContentTabsHome";

export const Tabs = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);
  const tabsData = [
    {
      title: "Listening",
      content: <ContentTabsHome />,
    },
    {
      title: "Speaking",
      content: <div>test1</div>,
    },
    {
      title: "Reading",
      content: <div>test1</div>,
    },
    {
      title: "writing",
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
    <section className="max-w-6xl mx-auto">
      <div className="relative">
        <div className="flex justify-between space-x-10 w-full px-10 border-b overflow-y-auto">
          {tabsData.map((tab, idx) => {
            return (
              <button
                key={idx}
                ref={(el) => (tabsRef.current[idx] = el)}
                className="w-full h-full"
                onClick={() => setActiveTabIndex(idx)}
              >
                <ButtonTabs title={tab.title} active={idx == activeTabIndex} />
              </button>
            );
          })}
        </div>
      </div>
      <div className="py-4">
        <div>{tabsData[activeTabIndex].content}</div>
      </div>
    </section>
  );
};
