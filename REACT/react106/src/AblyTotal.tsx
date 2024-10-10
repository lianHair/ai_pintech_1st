import { CSSProperties, useState } from "react";

type AblyTotalProps = {
  name: string;
  price: number;
};

const AblyTotal = (props: AblyTotalProps) => {
  const boxStyle: CSSProperties = {
    width: "520px",
    backgroundColor: "#C0D4ED",
    margin: "0 auto",
    paddingLeft: "6px",
    borderRadius: "5px",
  };
  const buttonStyle: CSSProperties = {
    display: "flex",
    flexDirection: "row",
    width: "500px",
    justifyContent: "space-between",
    padding: "7px 10px",
  };
  const [num, setNum] = useState(1);
  const plus = () => {
    setNum((prev) => prev + 1);
  };
  const minus = () => {
    setNum((prev) => (prev == 1 ? 1 : prev - 1));
  };

  return (
    <div style={boxStyle}>
      <div style={{ fontWeight: "bold" }}>{props.name}</div>
      <div style={buttonStyle}>
        <div>
          <button onClick={minus}>-</button>
          <button>{num}</button>
          <button onClick={plus}>+</button>
        </div>
        <div style={{ fontWeight: "bold" }}>{props.price * num}원</div>
      </div>
    </div>
  );
};

export default AblyTotal;
