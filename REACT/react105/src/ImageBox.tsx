import { CSSProperties } from "react";
import data from "./data";

const Data = data.result.centerList;

type DataList = {
  ImageSrc: string;
};

const ImageBox = (props: DataList) => {
  const cssStyle: CSSProperties = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "10px",
  };
  return <img style={cssStyle} src={props.ImageSrc} alt="" />;
};

export default ImageBox;
