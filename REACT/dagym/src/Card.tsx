import { CSSProperties } from "react";
import CardUpper, { CardUpperprops } from "./CardUpper";
import CardDown from "./CardDown/CardDown";

// 카드 위에꺼 + 아래꺼
type CardProps = CardUpperprops;

const Card = (props: CardProps) => {
  const cardStyle: CSSProperties = {
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  };

  return (
    <article style={cardStyle}>
      <CardUpper {...props}></CardUpper>
      <CardDown />
    </article>
  ); // article : 카드 만들때 씀
};

export default Card;
