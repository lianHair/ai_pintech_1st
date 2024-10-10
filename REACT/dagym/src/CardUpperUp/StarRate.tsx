import { CSSProperties } from "react";

// 카드 위에꺼 - 세번째내용 1
export type StarRateProps = {
  starRate: number;
};

const StarRate = (props: StarRateProps) => {
  const starRateStyle: CSSProperties = {
    color: "#FFC500",
    fontSize: "12px",
    fontWeight: "bold",
    paddingRight: "5px",
  };
  return <span style={starRateStyle}>{props.starRate}</span>;
};

export default StarRate;
