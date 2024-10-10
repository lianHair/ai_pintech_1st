import { CSSProperties, ReactNode } from "react";
import data from "./data";

const cl = data.result.centerList;

type ImageBox = {
  Component: ReactNode;
};

const AlbumBox = (props: ImageBox) => {
  const cssStyle: CSSProperties = {
    width: "130px",
    height: "150px",
  };
  return <div style={cssStyle}>{props.Component}</div>;
};

export default AlbumBox;
