import { CSSProperties } from "react";

export type PickPercentProps = {
  Pickpercent: number;
};

const PickPercent = (props: PickPercentProps) => {
  const PickPercentStyle: CSSProperties = {
    fontSize: "15px",
  };

  return <span style={PickPercentStyle}>{props.Pickpercent}%</span>;
};

export default PickPercent;
