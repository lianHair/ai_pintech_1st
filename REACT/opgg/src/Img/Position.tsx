import { CSSProperties } from "react";

export type PositionProps = {
  position: string;
};

const Position = (props: PositionProps) => {
  const PositioStyle: CSSProperties = {
    width: "30px",
    height: "30px",
  };
  return <img style={PositioStyle} src={props.position} alt="" />;
};

export default Position;
