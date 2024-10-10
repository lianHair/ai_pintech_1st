import { CSSProperties } from "react";

export type WinPercentProps = {
  winpercent: number;
};

const WinPercent = (props: WinPercentProps) => {
  const WinPercentStyle: CSSProperties = {
    fontSize: "15px",
  };

  return <span style={WinPercentStyle}>{props.winpercent}%</span>;
};

export default WinPercent;
