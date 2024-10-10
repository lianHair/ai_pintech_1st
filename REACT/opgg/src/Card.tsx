import { CSSProperties } from "react";
import Mix, { MixProps } from "./Mix";

type CardProps = MixProps;

const Card = (props: CardProps) => {
  const CardStyle: CSSProperties = {
    display: "flex",
    flexDirection: "row",
  };
  return (
    <article style={CardStyle}>
      <Mix {...props}></Mix>
    </article>
  );
};

export default Card;
