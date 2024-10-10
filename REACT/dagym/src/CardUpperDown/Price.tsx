import { CSSProperties } from "react";

// 카드 위에꺼 - 아래 오른쪽
export type priceProps = {
  price: number;
};

const Price = (props: priceProps) => {
  const priceStyle: CSSProperties = {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#3d4149",
  };
  return (
    <div>
      <span style={priceStyle}>{props.price}</span>
      <span>~/월</span>
    </div>
  );
};
export default Price;
