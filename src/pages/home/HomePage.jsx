import React from "react";
import { MainLayout } from "../../components/mainLayout/MainLayout";
import { Banner } from "../../components/banner/Banner";
import Hero from "../../components/hero/Hero";
import { Tabs } from "./container/Tabs";
import RankingTuror from "./container/ranking/RankingTuror";

export const HomePage = () => {
  return (
    <MainLayout>
      <div className="py-5">
        <Banner />
        <Hero />
        <Tabs />
        <RankingTuror />
      </div>
    </MainLayout>
  );
};
