import { CSSProperties } from "react";

export type BenPercentProps = {
  Benpercent: number;
};

const BenPercent = (props: BenPercentProps) => {
  const BenPercentStyle: CSSProperties = {
    fontSize: "15px",
  };

  return <span style={BenPercentStyle}>{props.Benpercent}%</span>;
};

export default BenPercent;
