import { CSSProperties, ReactNode } from "react";

type ButtonWanProps = {
  columnNumber: number;
  component: ReactNode;
};

const ButtonWan = (props: ButtonWanProps) => {
  const gridStyle: CSSProperties = {
    display: "grid",
    gridTemplateColumns: `repeat(${props.columnNumber}, 1fr)`,
    gap: "50px",
  };

  return <section style={gridStyle}>{props.component}</section>;
};
export default ButtonWan;
