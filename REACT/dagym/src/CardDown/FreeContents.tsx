import { CSSProperties } from "react";

// 카드 아래꺼
export type FreeContentsProps = {
  services: string;
};

const FreeContents = (props: FreeContentsProps) => {
  const FreeContentsStyle: CSSProperties = {
    backgroundColor: "#f1f3f6",
    padding: "8px 12px",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "15px",
  };

  const servicesStyle: CSSProperties = {
    fontSize: "12px",
    fontWeight: "bold",
    color: "#999fa9",
  };

  const freeStyle: CSSProperties = {
    fontSize: "12px",
  };

  return (
    <div style={FreeContentsStyle}>
      <span style={servicesStyle}>무료 서비스</span>
      <span style={freeStyle}>{props.services}</span>
    </div>
  );
};
export default FreeContents;
