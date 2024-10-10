import { CSSProperties, ReactNode } from "react";

type ContainerBox = {
  Component: ReactNode;
};

const Container = (props: ContainerBox) => {
  const cssStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    maxWidth: "1000px",
    margin: "0 auto",
    alignItems: "center",
    gap: "10px",
  };

  return <section style={cssStyle}>{props.Component}</section>;
};

export default Container;
