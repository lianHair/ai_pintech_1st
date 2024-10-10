import { CSSProperties } from "react";

// 카드 위에꺼 - 두번째 내용
export type GymNameProps = {
  gymName: string;
};

const GymName = (props: GymNameProps) => {
  const gymNameStyle: CSSProperties = {
    fontWeight: "bold",
    lineHeight: "26px",
    color: "skyblue",
  };

  return <span style={gymNameStyle}>{props.gymName}</span>;
};

export default GymName;
