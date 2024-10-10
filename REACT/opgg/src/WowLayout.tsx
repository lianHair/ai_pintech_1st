import { CSSProperties } from "react";
import { championRankingList } from "./Wow";
import Card from "./Card";

const WowLayout = () => {
  const sectionStyle: CSSProperties = {
    width: "100%",
    height: "100%",
    maxWidth: "1000px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "row",
    gap: "10px",
    justifyContent: "space-between",
  };

  return (
    <main style={{ width: "650px" }}>
      <section style={sectionStyle}>
        {championRankingList.map((v) => (
          <Card
            rank={v.positionRank}
            elevation={v.}
            championImage={v.}
            championName={v.champion}
            tier={v.positionTier}
            position={v.positionName}
            winpercent={v.positionWinRate*10}
            Pickpercent={v.positionPickRate*10}
            Benpercent={v.positionBanRate*10}
            benChampion={v.positionCounters}// positionCounters - img_url
          />
        ))}
      </section>
    </main>
  );
};

export default WowLayout;
