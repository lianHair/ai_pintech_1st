import { CSSProperties } from "react";

export type RankProps = {
  rank: number;
};

const Rank = (props: RankProps) => {
  const RankStyle: CSSProperties = {
    fontSize: "15px",
    color: "#C0D4ED",
  };

  return <div style={RankStyle}>{props.rank}</div>;
};

export default Rank;
