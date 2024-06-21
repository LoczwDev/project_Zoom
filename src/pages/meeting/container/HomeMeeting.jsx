import React from "react";
import { ListItemHome } from "../../../components/meeting/ListItemHome";
// import StreamVideoProvider from "../../../providers/StreamVideoProvider";

export const HomeMeeting = () => {
  const now = new Date();
  const time = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const date = new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
  }).format(now);
  return (
    <section className="flex size-full flex-col gap-10 text-black dark:text-white">
      <div className="h-[300px] w-full rounded-[20px] bg-bg_hero bg-cover">
        <div className="flex h-full flex-col justify-between p-4">
          <h2 className="max-w-[270px] py-2 text-center text-base font-normal bg-white/10 rounded-full">
            Upcoming Meeting at: 12:30 PM
          </h2>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl">{time}</h1>
            <p className="text-lg font-medium text-sky-50 lg:text-2xl">
              {date}
            </p>
          </div>
        </div>
      </div>
      <ListItemHome />
      {/* <StreamVideoProvider /> */}
    </section>
  );
};
