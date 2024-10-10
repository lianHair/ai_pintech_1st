import ChampionName, { ChampionNameProps } from "./Guel/ChampionName";
import Elevation, { ElevationProps } from "./Guel/Elevation";
import BenChampion, { BenChampionProps } from "./Img/BenChampion";
import ChampionImage, { ChampionImageProps } from "./Img/ChampionImage";
import Position, { PositionProps } from "./Img/Position";
import Tier, { TierProps } from "./Img/Tier";
import BenPercent, { BenPercentProps } from "./Percent/BenPercent";
import PickPercent, { PickPercentProps } from "./Percent/PickPercent";
import WinPercent, { WinPercentProps } from "./Percent/WinPercent";
import Rank, { RankProps } from "./Guel/Rank";
import { CSSProperties } from "react";

export type MixProps = RankProps &
  ElevationProps &
  ChampionImageProps &
  ChampionNameProps &
  TierProps &
  PositionProps &
  WinPercentProps &
  PickPercentProps &
  BenPercentProps &
  BenChampionProps;

const Mix = (props: MixProps) => {
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

  const TierStyle: CSSProperties = {
    display: "flex",
    flexDirection: "row",
    gap: "15px",
    alignItems: "center",
  };

  const PercentStyle: CSSProperties = {
    display: "flex",
    flexDirection: "row",
    gap: "50px",
    alignItems: "center",
  };

  const BenChampionStyle: CSSProperties = {
    display: "flex",
    flexDirection: "row",
    gap: "2px",
  };

  return (
    <main style={{ width: "650px" }}>
      <section style={sectionStyle}>
        <div style={TierStyle}>
          <Rank rank={props.rank}></Rank>
          <Elevation elevation={props.elevation}></Elevation>
          <ChampionImage championImage={props.championImage}></ChampionImage>
          <ChampionName championName={props.championName}></ChampionName>
        </div>
        <div style={TierStyle}>
          <Tier tier={props.tier}></Tier>
          <Position position={props.position}></Position>
        </div>
        <div style={PercentStyle}>
          <WinPercent winpercent={props.winpercent}></WinPercent>
          <PickPercent Pickpercent={props.Pickpercent}></PickPercent>
          <BenPercent Benpercent={props.Benpercent}></BenPercent>
        </div>
        <div style={BenChampionStyle}>
          <BenChampion benChampion={props.benChampion}></BenChampion>
          <BenChampion benChampion={props.benChampion}></BenChampion>
          <BenChampion benChampion={props.benChampion}></BenChampion>
        </div>
      </section>
    </main>
  );
};

export default Mix;
