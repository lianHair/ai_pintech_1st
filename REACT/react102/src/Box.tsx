import { CSSProperties } from "react";

type propstype = {
  width: string;
  height: string;
  backgrondColor: "red" | "blue" | "orange" | "green"; // "pink"치면 error 뜸 // 4가지 컬러만 나오게 됨
  color: string;
  text: string;
};

const Box = (props: propstype) => {
  const CssStyle: CSSProperties = {
    width: props.width,
    height: props.height,
    backgroundColor: props.backgrondColor,
    color: props.color,
  };

  return <div style={CssStyle}>{props.text}</div>; // props 텍스트 는 여기 넣기
};

export default Box;
