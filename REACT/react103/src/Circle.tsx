import { CSSProperties } from "react";

type Circleprops = {
  backgroundColor: string;
};

const Circle = (props: Circleprops) => {
  const CircleStyle: CSSProperties = {
    backgroundColor: props.backgroundColor,
    width: "100px",
    height: "100px",
    borderRadius: "9999px",
  };
  return <div style={CircleStyle}></div>;
};

export default Circle;
