import React from "react";
import { MainLayout } from "../../components/mainLayout/MainLayout";
import { SibarMeeting } from "../../components/meeting/SibarMeeting";
import { Outlet } from "react-router-dom";

export const MeetingLayout = () => {
  return (
    <MainLayout>
      <section className="max-w-6xl mx-auto flex">
        <SibarMeeting />
        <main className="flex-1 p-4 lg:p-6 h-auto overflow-y-auto overflow-x-hidden dark:bg-base-100">
          <Outlet />
        </main>
      </section>
    </MainLayout>
  );
};
