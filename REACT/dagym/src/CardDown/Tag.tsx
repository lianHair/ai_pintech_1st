import { CSSProperties } from "react";

// 카드 위에꺼 - 아래 왼쪽
export type tegProps = {
  text: string;
};

const Tag = (props: tegProps) => {
  const tagStyle: CSSProperties = {
    padding: "3px 6px",
    fontSize: "10px",
    borderRadius: "4px",
    fontWeight: "bold",
    backgroundColor: "#eaeeff",
    color: "#5467f5",
    border: "1px solid #eaeeff",
  };
  return <span style={tagStyle}>{props.text}</span>;
};

export default Tag;
