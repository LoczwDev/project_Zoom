import React, { useEffect, useState } from "react";
import { MainLayout } from "../../components/mainLayout/MainLayout";
import BreadCrumbs from "../../components/BreadCrumbs";
import { TabsProfile } from "./tabs/TabsProfile";

const ProfilePage = () => {
  const breadCrumbsData = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Profile",
      link: "/profile",
    },
  ];
  return (
    <MainLayout>
      <section className="bg-profile">
        <div className="max-w-6xl mx-auto py-5">
          <BreadCrumbs data={breadCrumbsData} />
          <div>
            <TabsProfile />
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ProfilePage;
