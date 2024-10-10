import { CSSProperties } from "react";

type whatProps = {
  backgroundColor: "Primary" | "Hover" | "Deactive";
  borderRadius: "Hard" | "Smooth" | "Circle";
};

const What = (props: whatProps) => {
  const backgroundColorsMap = {
    Primary: "#205BF3",
    Hover: "#478DF5",
    Deactive: "#979797",
  };
  const borderRadiusMap = {
    Hard: "0px",
    Smooth: "20px",
    Circle: "9999px",
  };
  const cssStyle: CSSProperties = {
    backgroundColor: backgroundColorsMap[props.backgroundColor],
    borderRadius: borderRadiusMap[props.borderRadius],
    color: "white",
    padding: "10px 45px",
    fontSize: "32px",
    border: "none",
  };
  return <button style={cssStyle}>이것은 버튼</button>;
};

export default What;
