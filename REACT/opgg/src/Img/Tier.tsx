import { CSSProperties } from "react";

export type TierProps = {
  tier: string;
};

const Tier = (props: TierProps) => {
  const TierStyle: CSSProperties = {
    width: "30px",
    height: "50px",
  };
  return <img style={TierStyle} src={props.tier} alt="" />;
};

export default Tier;
