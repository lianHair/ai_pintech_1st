import { CSSProperties } from "react";

export type ChampionNameProps = {
  championName: string;
};

const ChampionName = (props: ChampionNameProps) => {
  const ChampionNameStyle: CSSProperties = {
    fontSize: "15px",
    fontWeight: "bold",
  };

  return <div style={ChampionNameStyle}>{props.championName}</div>;
};

export default ChampionName;
