import { CSSProperties } from "react";
import What from "./GridBox";

const GridLayout = () => {
  const gridStyle: CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "30px",
  };

  //   const arr = ["Primary" | "Hover" | "Deactive"];
  //   const arr1 = ["Hard" | "Smooth" | "Circle"];
  return (
    <section style={gridStyle}>
      {/* {arr.map((v) =>
        arr1.map((v) => <What backgroundColor={v} borderRadius={v} />)
      )} */}

      {/* 밑에걸 위처럼 요약 가능 */}
      <What backgroundColor="Primary" borderRadius="Smooth" />
      <What backgroundColor="Primary" borderRadius="Smooth" />
      <What backgroundColor="Primary" borderRadius="Smooth" />
      <What backgroundColor="Hover" borderRadius="Hard" />
      <What backgroundColor="Hover" borderRadius="Hard" />
      <What backgroundColor="Hover" borderRadius="Hard" />
      <What backgroundColor="Deactive" borderRadius="Circle" />
      <What backgroundColor="Deactive" borderRadius="Circle" />
      <What backgroundColor="Deactive" borderRadius="Circle" />
    </section>
  );
};
export default GridLayout;
