import React from "react";
import CardRanking from "../../../../components/card/CardRanking";
import { H2MainTitle } from "../../../../components/H2MainTitle";

const RankingTuror = () => {
  return (
    <section className="max-w-6xl mx-auto">
      <H2MainTitle title={"Ranking Turtor"} />
      <div className="flex items-center justify-start w-full">
        <div className="grid grid-cols-6 gap-3 w-full">
          <div className="col-span-2 row-span-2">
            <CardRanking />
          </div>
          <CardRanking />
          <CardRanking />
          <CardRanking />
          <CardRanking />
          <CardRanking />
          <CardRanking />
          <CardRanking />
          <CardRanking />
        </div>
      </div>
    </section>
  );
};

export default RankingTuror;
