import { CSSProperties } from "react";
import data from "./data";

const cl = data.result.centerList;

const HealthBox = () => {
  const cssStyle: CSSProperties = {
    width: "75%",
    padding: "10px 20px",
    display: "flex",
    flexDirection: "row",
    gap: "10px",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    borderRadius: "15px",
  };
  return <div style={cssStyle}></div>;
};

export default HealthBox;
